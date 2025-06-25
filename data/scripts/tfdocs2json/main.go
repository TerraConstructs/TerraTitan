package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"os"

	// "github.com/YakDriver/tfproviderdocs/contents"
	"github.com/terratitan/tfdocs2json/contents"
)

// Arg represents one Terraform argument.
type Arg struct {
	Name        string `json:"name"`
	Type        string `json:"type,omitempty"`
	Description string `json:"description"`
	Required    bool   `json:"required"`
	Optional    bool   `json:"optional"`
}

// Block represents a nested block of arguments.
type ArgumentBlock struct {
	Name      string `json:"name"`
	FullName  string `json:"full_name,omitempty"`
	Arguments []Arg  `json:"arguments"`
}

// Output is the top-level JSON structure.
type Output struct {
	Arguments []Arg           `json:"arguments"`
	Blocks    []ArgumentBlock `json:"blocks,omitempty"`
}

func main() {
	var (
		mdPath      = flag.String("md", "", "Path to Terraform resource Markdown file")
		provider    = flag.String("provider", "aws", "Provider name (e.g. \"aws\"); optional")
		version     = flag.String("version", "5.100.0", "Provider version constraint")
		source      = flag.String("source", "hashicorp/aws", "Provider source")
		outputFile  = flag.String("output", "", "Output file path (default stdout)")
		interactive = flag.Bool("interactive", false, "Enable interactive mode for selecting descriptions when multiple matches found")
	)
	flag.Parse()

	// Validate Markdown path
	if *mdPath == "" {
		fmt.Fprintln(os.Stderr, "Usage: tfdocs2json -md ./fixtures/docs/ami.html.markdown [-provider aws]")
		os.Exit(1)
	}

	target := ProviderTarget{
		Name:    *provider,
		Version: *version,
		Source:  *source,
	}

	// Fetch provider schema (with cache)
	schema, registry, err := ReadProviderSchema(target)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error fetching provider schema: %v\n", err)
		os.Exit(1)
	}

	providerSchema, ok := schema.ProviderSchemas[registry+"/"+target.Source]
	if !ok {
		fmt.Fprintf(os.Stderr, "Provider schema not found for %s/%s\n", registry, target.Source)
		os.Exit(1)
	}

	// Parse the Markdown similar to how tfdocs does it for its checks
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

	// out := ParseMarkdown(doc, resourceSchema)
	// out := GrepSource(string(doc.Source), resourceSchema, *interactive)
	out := ParseResourceSchema(resourceSchema, string(doc.Source), *interactive)

	// JSON-encode with indentation
	var enc *json.Encoder
	if *outputFile != "" {
		file, err := os.Create(*outputFile)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error creating output file: %v\n", err)
			os.Exit(1)
		}
		defer file.Close()
		enc = json.NewEncoder(file)
	} else {
		// Default to stdout if no output file specified}
		enc = json.NewEncoder(os.Stdout)
	}

	enc.SetIndent("", "  ")
	if err := enc.Encode(out); err != nil {
		fmt.Fprintf(os.Stderr, "Error writing JSON: %v\n", err)
		os.Exit(1)
	}
}
