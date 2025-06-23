package main

import (
	"bytes"
	"encoding/json"
	"flag"
	"fmt"
	"os"

	// "github.com/YakDriver/tfproviderdocs/contents"
	"github.com/terratitan/tfdocs2json/backup/contents"
	"github.com/yuin/goldmark/ast"
)

// Arg represents one Terraform argument.
type Arg struct {
	Name        string `json:"name"`
	Type        string `json:"type,omitempty"`
	Description string `json:"description"`
	Required    bool   `json:"required"`
	Optional    bool   `json:"optional"`
	Level       int    `json:"level"`
	NestedBlock string `json:"nested_block,omitempty"`
	Children    []Arg  `json:"children,omitempty"`
}

// Block represents a nested block of arguments.
type ArgumentBlock struct {
	Name      string `json:"name"`
	Arguments []Arg  `json:"arguments"`
}

// Output is the top-level JSON structure.
type Output struct {
	Arguments []Arg           `json:"arguments"`
	Blocks    []ArgumentBlock `json:"blocks,omitempty"`
}

func convertSchemaItemToArg(item *contents.SchemaAttributeListItem) Arg {
	arg := Arg{
		Name:        item.Name,
		Type:        item.Type,
		Description: item.Description,
		Required:    item.Required,
		Optional:    item.Optional,
		Level:       item.Level,
		NestedBlock: item.NestedBlock,
	}

	// Convert children recursively
	for _, child := range item.Children {
		arg.Children = append(arg.Children, convertSchemaItemToArg(child))
	}

	return arg
}

func main() {
	var (
		mdPath   = flag.String("md", "", "Path to Terraform resource Markdown file")
		provider = flag.String("provider", "aws", "Provider name (e.g. \"aws\"); optional")
		version  = flag.String("version", "5.93.0", "Provider version constraint")
		source   = flag.String("source", "hashicorp/aws", "Provider source")
	)
	flag.Parse()

	// Handle schema fetching (with cache)

	target := ProviderTarget{
		Name:    *provider,
		Version: *version,
		Source:  *source,
	}

	schema, registry, err := ReadProviderSchema(target)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error fetching provider schema: %v\n", err)
		os.Exit(1)
	}

	providerSchema, ok := schema.ProviderSchemas[registry+"/"+target.Name]
	if !ok {
		fmt.Fprintf(os.Stderr, "Provider schema not found for %s/%s\n", registry, target.Name)
		os.Exit(1)
	}

	// Validate Markdown path
	if *mdPath == "" {
		fmt.Fprintln(os.Stderr, "Usage: tfdocs2json -md ./fixtures/docs/ami.html.markdown [-provider aws]")
		os.Exit(1)
	}

	// Parse the Markdown
	doc := contents.NewDocument(*mdPath, *provider)
	if err := doc.Parse(); err != nil {
		fmt.Fprintf(os.Stderr, "Error parsing Markdown: %v\n", err)
		os.Exit(1)
	}

	resourceSchema, ok := providerSchema.ResourceSchemas[doc.ResourceName]
	if !ok {
		fmt.Fprintf(os.Stderr, "Resource schema not found for %s\n", doc.ResourceName)
		os.Exit(1)
	}
	// Warn if any schema attributes are missing from the parsed Markdown
	for name, _ := range resourceSchema.Block.Attributes {
		camelCaseName := toCamelCase(name)
		if _, found := doc.Sections.Arguments[camelCaseName]; !found {
			fmt.Fprintf(os.Stderr, "Warning: Attribute '%s' (%s) not found in Markdown\n", camelCaseName, name)
			continue
		}
	}

	var out Output
	argsSec := doc.Sections.Arguments
	if argsSec != nil {
		// Top-level arguments
		for _, list := range argsSec.SchemaAttributeLists {
			for _, item := range list.Items {
				out.Arguments = append(out.Arguments, convertSchemaItemToArg(item))
			}
		}
		// Nested blocks
		for _, child := range argsSec.Children {
			// Extract the heading text as the block name
			blockName := headingText(child.Heading, doc.Source)
			var blk ArgumentBlock
			blk.Name = blockName

			for _, list := range child.SchemaAttributeLists {
				for _, item := range list.Items {
					blk.Arguments = append(blk.Arguments, convertSchemaItemToArg(item))
				}
			}
			if len(blk.Arguments) > 0 {
				out.Blocks = append(out.Blocks, blk)
			}
		}
	}

	// JSON-encode with indentation
	enc := json.NewEncoder(os.Stdout)
	enc.SetIndent("", "  ")
	if err := enc.Encode(out); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing JSON: %v\n", err)
		os.Exit(1)
	}
}

// headingText concatenates the text lines of a goldmark Heading node.
func headingText(h *ast.Heading, source []byte) string {
	var buf bytes.Buffer
	for i := range h.Lines().Len() {
		seg := h.Lines().At(i)
		buf.Write(seg.Value(source))
	}
	return buf.String()
}

// toCamelCase converts a snake_case string to CamelCase.
func toCamelCase(s string) string {
	parts := bytes.Split([]byte(s), []byte{'_'})
	for i, part := range parts {
		if len(part) > 0 {
			part[0] = bytes.ToUpper(part[:1])[0]
		}
		parts[i] = part
	}
	return string(bytes.Join(parts, nil))
}
