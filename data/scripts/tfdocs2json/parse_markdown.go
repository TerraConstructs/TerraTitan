package main

import (
	"bytes"
	"fmt"
	"os"
	"strings"

	// "github.com/YakDriver/tfproviderdocs/contents"
	"github.com/terratitan/tfdocs2json/contents"
	"github.com/terratitan/tfdocs2json/util"
	"github.com/yuin/goldmark/ast"
)

func convertSchemaItemToArg(item *contents.SchemaAttributeListItem) Arg {
	arg := Arg{
		Name:        item.Name,
		Type:        item.Type,
		Description: item.Description,
		Required:    item.Required,
		Optional:    item.Optional,
	}
	return arg
}

// parseMarkdown processes the Markdown document and extracts arguments
func ParseMarkdown(doc *contents.Document, resourceSchema ResourceSchema) Output {
	var out Output
	argsSec := doc.Sections.Arguments
	if argsSec == nil {
		// If no arguments section is found, use the schema directly
		fmt.Fprintf(os.Stderr, "No arguments section found in Markdown!\n")
		os.Exit(1)
	}

	// Warn if any schema attributes are missing from the parsed Markdown
	// Create map to track schema attributes with their full paths
	resAttrMap := make(map[string]string) // camelCase name -> full path
	resFoundMap := make(map[string]bool)  // camelCase name -> found

	collectAllAttributesWithPaths(resourceSchema.Block, "", resAttrMap)

	// Initialize found map
	for name := range resAttrMap {
		resFoundMap[name] = false
	}

	// Top-level arguments
	for _, list := range argsSec.SchemaAttributeLists {
		for _, item := range list.Items {
			// flag the attribute as found
			if _, exists := resAttrMap[item.Name]; exists {
				resFoundMap[item.Name] = true
			} else {
				fmt.Fprintf(os.Stderr, "Warning: Markdown argument '%s' not found in provider schema!\n", item.Name)
			}
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
				// flag the attribute as found
				if _, exists := resAttrMap[item.Name]; exists {
					resFoundMap[item.Name] = true
				} else {
					fmt.Fprintf(os.Stderr, "Warning: Markdown argument '%s' not found in provider schema!\n", item.Name)
				}
				blk.Arguments = append(blk.Arguments, convertSchemaItemToArg(item))
			}
		}
		if len(blk.Arguments) > 0 {
			out.Blocks = append(out.Blocks, blk)
		}
	}

	printMissingAttributesByPath(resAttrMap, resFoundMap)
	return out
}

func collectAllAttributesWithPaths(block Block, prefix string, attrMap map[string]string) {
	// Collect direct attributes
	for name := range block.Attributes {
		camelCaseName := util.ToCamelCase(name)
		fullPath := name
		if prefix != "" {
			fullPath = prefix + "." + name
		}
		attrMap[camelCaseName] = fullPath
	}

	// Collect block types as attributes
	for blockName, blockType := range block.BlockTypes {
		blockCamelName := util.ToCamelCase(blockName)
		fullPath := blockName
		if prefix != "" {
			fullPath = prefix + "." + blockName
		}
		attrMap[blockCamelName] = fullPath

		// Recursively collect from nested blocks
		collectAllAttributesWithPaths(blockType.Block, fullPath, attrMap)
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

// printMissingAttributesByPath prints attributes that are missing from the parsed Markdown,
// grouped by their top-level path.
// It also prints top-level attributes that are missing.
func printMissingAttributesByPath(resAttrMap map[string]string, resFoundMap map[string]bool) {
	// Group missing attributes by their top-level path
	missingByPath := make(map[string][]string)
	var topLevelMissing []string

	for name, found := range resFoundMap {
		if !found {
			fullPath := resAttrMap[name]

			// Extract top-level path (before first dot)
			parts := strings.Split(fullPath, ".")
			if len(parts) == 1 {
				// Top-level attribute
				topLevelMissing = append(topLevelMissing, fullPath)
			} else {
				// Nested attribute
				topLevel := parts[0]
				if missingByPath[topLevel] == nil {
					missingByPath[topLevel] = []string{}
				}
				missingByPath[topLevel] = append(missingByPath[topLevel], fullPath)
			}
		}
	}

	// Print grouped results
	if len(topLevelMissing) > 0 || len(missingByPath) > 0 {
		fmt.Fprintf(os.Stderr, "\nMissing schema attributes not parsed out of Markdown:\n")

		// Print top-level missing attributes
		if len(topLevelMissing) > 0 {
			fmt.Fprintf(os.Stderr, "  Top-level attributes:\n")
			for _, attr := range topLevelMissing {
				fmt.Fprintf(os.Stderr, "    - %s (%s)\n", attr, util.ToCamelCase(attr))
			}
		}

		// Print nested missing attributes grouped by parent
		for parentPath, attrs := range missingByPath {
			fmt.Fprintf(os.Stderr, "  %s (%s) block:\n", parentPath, util.ToCamelCase(parentPath))
			for _, attr := range attrs {
				// Remove the parent path prefix and show relative path
				relativePath := strings.TrimPrefix(attr, parentPath+".")
				fmt.Fprintf(os.Stderr, "    - %s (%s) \n", relativePath, util.ToCamelCase(relativePath))
			}
		}
		fmt.Fprintf(os.Stderr, "\n")
	}
}
