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
		generateMap = flag.String("map", "", "Generate mapping file for ambiguous descriptions")
		useMap      = flag.String("unattended", "", "Use pre-generated mapping file for unattended processing")
	)
	flag.Parse()

	// Handle optional -md flag when using -unattended
	var actualMdPath string
	var preloadedMapFile *MapFile
	
	if *useMap != "" {
		// Load map file to get markdown path
		var mapErr error
		preloadedMapFile, mapErr = LoadMapFile(*useMap)
		if mapErr != nil {
			fmt.Fprintf(os.Stderr, "Error loading map file: %v\n", mapErr)
			os.Exit(1)
		}
		
		if *mdPath == "" {
			// Use path from map file
			actualMdPath = preloadedMapFile.MarkdownFile
		} else {
			// Validate provided path matches map file
			if *mdPath != preloadedMapFile.MarkdownFile {
				fmt.Fprintf(os.Stderr, "Warning: Provided markdown path '%s' differs from map file path '%s'\n", *mdPath, preloadedMapFile.MarkdownFile)
				fmt.Fprintf(os.Stderr, "Continue with provided path? (y/N): ")
				var response string
				fmt.Scanln(&response)
				if response != "y" && response != "Y" {
					fmt.Fprintln(os.Stderr, "Aborting.")
					os.Exit(1)
				}
			}
			actualMdPath = *mdPath
		}
	} else {
		// Validate Markdown path for non-unattended modes
		if *mdPath == "" {
			fmt.Fprintln(os.Stderr, "Usage: tfdocs2json -md ./fixtures/docs/ami.html.markdown [-provider aws]")
			os.Exit(1)
		}
		actualMdPath = *mdPath
	}

	// Validate flag combinations
	if *generateMap != "" && *useMap != "" {
		fmt.Fprintln(os.Stderr, "Error: Cannot use both -map and -unattended flags simultaneously")
		os.Exit(1)
	}
	
	if (*generateMap != "" || *useMap != "") && *interactive {
		fmt.Fprintln(os.Stderr, "Error: Cannot use -interactive with mapping flags")
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
	doc := contents.NewDocument(actualMdPath, *provider)
	if err := doc.Parse(); err != nil {
		fmt.Fprintf(os.Stderr, "Error parsing Markdown: %v\n", err)
		os.Exit(1)
	}

	resourceSchema, ok := providerSchema.ResourceSchemas[doc.ResourceName]
	if !ok {
		fmt.Fprintf(os.Stderr, "Resource schema not found for %s\n", doc.ResourceName)
		os.Exit(1)
	}

	// Create mapping parameters
	var mapCollector *MapFileCollector
	var mapFile *MapFile
	
	if *generateMap != "" {
		mapCollector = NewMapFileCollector(actualMdPath)
	}
	
	if *useMap != "" {
		// Use the preloaded map file
		mapFile = preloadedMapFile
	}

	// out := ParseMarkdown(doc, resourceSchema)
	// out := GrepSource(string(doc.Source), resourceSchema, *interactive)
	out := ParseResourceSchemaWithMapping(resourceSchema, string(doc.Source), *interactive, mapCollector, mapFile)

	// Handle map generation mode
	if *generateMap != "" {
		if mapCollector.HasMappings() {
			err := mapCollector.WriteMapFile(*generateMap)
			if err != nil {
				fmt.Fprintf(os.Stderr, "Error writing map file: %v\n", err)
				os.Exit(1)
			}
			fmt.Fprintf(os.Stderr, "Generated mapping file: %s\n", *generateMap)
			fmt.Fprintf(os.Stderr, "Please edit the file to select descriptions, then run with -unattended flag\n")
			os.Exit(0)
		} else {
			fmt.Fprintf(os.Stderr, "No ambiguous descriptions found for %s - no mapping file needed\n", actualMdPath)
			os.Exit(0)
		}
	}

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
