package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"

	"github.com/terratitan/tfdocs2json/util"
)

// ParseResourceSchema walks the given schema and builds an Output.
// documentation is the raw doc text; interactive toggles prompting.
func ParseResourceSchema(
	schema ResourceSchema,
	documentation string,
	interactive bool,
) Output {
	var out Output

	// Resource Block Attributes → root args (with description enrichment)
	out.Arguments = parseAttributes(
		schema.Block.Attributes,
		documentation,
		interactive,
		"", // parent path at root
	)

	// For each direct BlockType, add a "block"-type arg at the root
	for key, bt := range schema.Block.BlockTypes {
		camel := util.ToCamelCase(key)
		out.Arguments = append(out.Arguments, Arg{
			Name:     camel,
			Type:     "block",
			Required: bt.MinItems > 0,
			Optional: bt.MinItems == 0,
		})
	}

	// sort root arguments by name for determinism
	sort.Slice(out.Arguments, func(i, j int) bool {
		return out.Arguments[i].Name < out.Arguments[j].Name
	})

	// Recurse into block types to collect all nested blocks
	out.Blocks = collectBlocks(
		schema.Block.BlockTypes,
		documentation,
		interactive,
		nil, // no parent path yet
	)

	return out
}

// AttributeInfo holds the attribute information with its schema details
type AttributeInfo struct {
	CamelCaseName string
	FullPath      string
	Attribute     Attribute
	IsBlockType   bool
}

// parseAttributes turns a map of Attribute into a sorted []Arg.
// It enriches empty descriptions via extractDescription.
func parseAttributes(
	attrs map[string]Attribute,
	documentation string,
	interactive bool,
	parentFullPath string,
) []Arg {
	args := make([]Arg, 0, len(attrs))
	for rawName, at := range attrs {
		camel := util.ToCamelCase(rawName)
		desc := at.Description
		if desc == "" {
			info := AttributeInfo{
				CamelCaseName: camel,
				FullPath:      parentFullPath + "." + camel,
				Attribute:     at,
				IsBlockType:   false,
			}
			desc = extractDescription(documentation, info, interactive)
			if desc == "" {
				fmt.Fprintf(os.Stderr,
					"Warning: no description for %q (camel=%q)\n",
					info.FullPath, info.CamelCaseName)
			}
		}

		args = append(args, Arg{
			Name:        camel,
			Type:        getTypeString(at.Type),
			Description: desc,
			Required:    at.Required,
			Optional:    at.Optional,
		})
	}

	sort.Slice(args, func(i, j int) bool {
		return args[i].Name < args[j].Name
	})
	return args
}

// collectBlocks traverses blockTypes recursively.
// parentPath holds the camelCase names of all ancestor blocks.
func collectBlocks(
	blockTypes map[string]BlockType,
	documentation string,
	interactive bool,
	parentPath []string,
) []ArgumentBlock {
	var out []ArgumentBlock

	// Sort keys for deterministic ordering
	var keys []string
	for key := range blockTypes {
		keys = append(keys, key)
	}
	sort.Strings(keys)

	// Process in sorted order
	for _, key := range keys {
		bt := blockTypes[key]
		camel := util.ToCamelCase(key)
		thisPath := append(parentPath, camel)

		// build PascalCase fullName by capitalizing each path segment
		var pascalCasePath string
		for _, seg := range thisPath {
			if len(seg) > 0 {
				pascalCasePath += strings.ToUpper(seg[:1]) + seg[1:]
			}
		}

		// Parse this block's attributes (enriching descriptions).
		args := parseAttributes(
			bt.Block.Attributes,
			documentation,
			interactive,
			pascalCasePath,
		)

		// **inject** one Arg per nested BlockType**
		for nestedKey, nestedBT := range bt.Block.BlockTypes {
			nestedCamel := util.ToCamelCase(nestedKey)
			args = append(args, Arg{
				Name:     nestedCamel,
				Type:     "block",
				Required: nestedBT.MinItems > 0,
				Optional: nestedBT.MinItems == 0,
			})
		}

		blk := ArgumentBlock{
			Name:      camel,
			FullName:  pascalCasePath,
			Arguments: args,
		}
		out = append(out, blk)

		// Recurse into nested block_types
		if len(bt.Block.BlockTypes) > 0 {
			nested := collectBlocks(
				bt.Block.BlockTypes,
				documentation,
				interactive,
				thisPath,
			)
			out = append(out, nested...)
		}
	}

	return out
}

// grepSource processes the source bytes of the markdown documents to extract schema attributes instead of parsing the markdown.
// It searches for descriptions of attributes in the source and builds an Output structure.
// It uses the resource schema to determine which attributes to look for.
func GrepSource(documentation string, resourceSchema ResourceSchema, interactive bool) Output {
	var out Output
	// Collect all attributes with their schema information
	var allAttributes []AttributeInfo
	collectAllAttributesWithInfo(resourceSchema.Block, "", &allAttributes)

	// Process each attribute directly
	for _, attrInfo := range allAttributes {
		// Find the description in the source
		desc := extractDescription(documentation, attrInfo, interactive)
		if desc == "" {
			fmt.Fprintf(os.Stderr, "Warning: No description found for attribute '%s' (%s) in source!\n",
				attrInfo.FullPath, attrInfo.CamelCaseName)
			continue
		}

		// Create Arg from schema and description
		arg := Arg{
			Name:        attrInfo.CamelCaseName,
			Type:        getTypeString(attrInfo.Attribute.Type),
			Description: desc,
			Required:    attrInfo.Attribute.Required,
			Optional:    attrInfo.Attribute.Optional,
		}

		// If it's a block type, override the type
		if attrInfo.IsBlockType {
			arg.Type = "block"
		}

		// Determine if this is a top-level argument or nested block
		if strings.Contains(attrInfo.FullPath, ".") {
			// This is a nested attribute
			parts := strings.Split(attrInfo.FullPath, ".")
			blockName := parts[0]

			// Find or create the block
			var targetBlock *ArgumentBlock
			for i := range out.Blocks {
				if out.Blocks[i].Name == util.ToCamelCase(blockName) {
					targetBlock = &out.Blocks[i]
					break
				}
			}

			if targetBlock == nil {
				out.Blocks = append(out.Blocks, ArgumentBlock{
					Name:      util.ToCamelCase(blockName),
					Arguments: []Arg{},
				})
				targetBlock = &out.Blocks[len(out.Blocks)-1]
			}

			targetBlock.Arguments = append(targetBlock.Arguments, arg)
		} else {
			// Top-level argument
			out.Arguments = append(out.Arguments, arg)
		}
	}

	return out
}

// collectAllAttributesWithInfo recursively collects all attributes with their complete information
func collectAllAttributesWithInfo(block Block, prefix string, allAttributes *[]AttributeInfo) {
	// Collect direct attributes
	for name, attr := range block.Attributes {
		camelCaseName := util.ToCamelCase(name)
		fullPath := name
		if prefix != "" {
			fullPath = prefix + "." + name
		}

		*allAttributes = append(*allAttributes, AttributeInfo{
			CamelCaseName: camelCaseName,
			FullPath:      fullPath,
			Attribute:     attr,
			IsBlockType:   false,
		})
	}

	// Collect block types as attributes
	for blockName, blockType := range block.BlockTypes {
		blockCamelName := util.ToCamelCase(blockName)
		fullPath := blockName
		if prefix != "" {
			fullPath = prefix + "." + blockName
		}

		// Create a pseudo-attribute for the block type itself
		blockAttr := Attribute{
			Type:     "object", // Block types are object-like
			Optional: true,     // Most block types are optional
		}

		*allAttributes = append(*allAttributes, AttributeInfo{
			CamelCaseName: blockCamelName,
			FullPath:      fullPath,
			Attribute:     blockAttr,
			IsBlockType:   true,
		})

		// Recursively collect from nested blocks
		collectAllAttributesWithInfo(blockType.Block, fullPath, allAttributes)
	}
}

// extractDescription extracts the description for a given camelCase name from the source byte slice.
func extractDescription(sourceStr string, attrInfo AttributeInfo, interactive bool) string {
	// Create patterns to search for - handle both dash types
	camelCaseName := attrInfo.CamelCaseName
	patterns := []string{
		"`" + camelCaseName + "` -", // Hyphen with camelCase
		"`" + camelCaseName + "` –", // Em-dash with camelCase
		"`" + camelCaseName + "`–",  // Em-dash with camelCase and missing spaces
		"`" + camelCaseName + "`-",  // Hyphen with camelCase
	}

	foundDescriptions := make([]string, 0)

	for _, pattern := range patterns {
		// Find ALL instances of this pattern, not just the first one
		searchStart := 0
		for {
			index := strings.Index(sourceStr[searchStart:], pattern)
			if index == -1 {
				break // No more matches for this pattern
			}

			// Adjust index to absolute position
			absoluteIndex := searchStart + index

			// Found the pattern, now extract the description
			start := absoluteIndex + len(pattern)

			// Skip any leading whitespace after the pattern
			for start < len(sourceStr) && (sourceStr[start] == ' ' || sourceStr[start] == '\t') {
				start++
			}

			// Find the end of the description
			end := len(sourceStr)

			// Find next newline
			if nextNewline := strings.Index(sourceStr[start:], "\n"); nextNewline != -1 {
				end = start + nextNewline
			}

			// Check if there's a next bullet point that might be closer
			if nextBullet := strings.Index(sourceStr[start:], "\n* `"); nextBullet != -1 {
				bulletPos := start + nextBullet
				if bulletPos < end {
					end = bulletPos
				}
			}

			// Extract and clean the description
			description := strings.TrimSpace(sourceStr[start:end])

			// Handle multi-line descriptions by looking ahead
			if !strings.HasSuffix(description, ".") && end < len(sourceStr)-1 {
				// If description seems incomplete, try to capture more lines
				remainingText := sourceStr[end:]
				lines := strings.Split(remainingText, "\n")

				for i, line := range lines {
					line = strings.TrimSpace(line)
					if line == "" {
						continue
					}

					// Stop if we hit another bullet point or section
					if strings.HasPrefix(line, "* `") || strings.HasPrefix(line, "##") || strings.HasPrefix(line, "###") {
						break
					}

					// Add the line to description
					description += " " + line

					// Stop if we find a sentence ending
					if strings.HasSuffix(line, ".") || strings.HasSuffix(line, ":") {
						break
					}

					// Don't go too far
					if i > 3 {
						break
					}
				}
			}

			finalDescription := strings.TrimSpace(description)
			// NOTE: filtering for descriptions that start with parentheses eliminates many matches ...
			if finalDescription != "" && strings.HasPrefix(finalDescription, "(") {
				foundDescriptions = append(foundDescriptions, finalDescription)
			}

			// Move search start past this match to find additional instances
			searchStart = absoluteIndex + len(pattern)
		}
	}

	if len(foundDescriptions) > 0 {
		if len(foundDescriptions) == 1 {
			// If only one description found, return it directly
			return foundDescriptions[0]
		}
		if interactive {
			return selectDescriptionInteractively(attrInfo, foundDescriptions)
		} else {
			fmt.Fprintf(os.Stderr, "Warning: Multiple descriptions found for '%s': %d matches\n", camelCaseName, len(foundDescriptions))
			for i, desc := range foundDescriptions {
				fmt.Fprintf(os.Stderr, "  %d: %s\n", i+1, desc)
			}
		}
		// Return the first found description
		return foundDescriptions[0]
	}

	return ""
}

// getTypeString returns a string representation of the schema type.
// It handles both single string types and lists of types.
// If the type is a list, it returns the first type in the list.
// If the type is unknown, it returns "unknown".
func getTypeString(schemaType interface{}) string {
	switch t := schemaType.(type) {
	case string:
		return t
	case []interface{}:
		if len(t) > 0 {
			if firstType, ok := t[0].(string); ok {
				return firstType
			}
		}
		return "unknown"
	default:
		return "unknown"
	}
}

// selectDescriptionInteractively prompts the user to select one of multiple descriptions
func selectDescriptionInteractively(attrInfo AttributeInfo, descriptions []string) string {
	fmt.Fprintf(os.Stderr, "\nMultiple descriptions found for attribute:\n")
	fmt.Fprintf(os.Stderr, "  Name:     %s\n", attrInfo.CamelCaseName)
	fmt.Fprintf(os.Stderr, "  Path:     %s\n", attrInfo.FullPath)
	fmt.Fprintf(os.Stderr, "  Optional: %t\n", attrInfo.Attribute.Optional)
	fmt.Fprintf(os.Stderr, "  Required: %t\n", attrInfo.Attribute.Required)
	fmt.Fprintf(os.Stderr, "  Type:     %s\n", getTypeString(attrInfo.Attribute.Type))
	fmt.Fprintf(os.Stderr, "\nPlease select which description to use:\n")

	for i, desc := range descriptions {
		// Truncate long descriptions for display
		displayDesc := desc
		if len(displayDesc) > 120 {
			displayDesc = displayDesc[:117] + "..."
		}
		fmt.Fprintf(os.Stderr, "  %d: %s\n", i+1, displayDesc)
	}

	reader := bufio.NewReader(os.Stdin)

	for {
		fmt.Fprintf(os.Stderr, "\nEnter number (1-%d) or 'q' to quit: ", len(descriptions))

		input, err := reader.ReadString('\n')
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error reading input: %v\n", err)
			continue
		}

		input = strings.TrimSpace(input)

		if input == "q" || input == "quit" {
			fmt.Fprintf(os.Stderr, "Exiting...\n")
			os.Exit(1)
		}

		choice, err := strconv.Atoi(input)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Invalid input. Please enter a number between 1 and %d.\n", len(descriptions))
			continue
		}

		if choice < 1 || choice > len(descriptions) {
			fmt.Fprintf(os.Stderr, "Invalid choice. Please enter a number between 1 and %d.\n", len(descriptions))
			continue
		}

		selectedDesc := descriptions[choice-1]
		fmt.Fprintf(os.Stderr, "Selected: %s\n\n", selectedDesc)
		return selectedDesc
	}
}
