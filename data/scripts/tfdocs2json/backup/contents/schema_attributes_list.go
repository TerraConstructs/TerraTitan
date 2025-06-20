package contents

import (
	"strings"

	"github.com/yuin/goldmark/ast"
)

// SchemaAttributeList represents a schema attribute list
//
// This may represent root or nested lists of arguments or attributes
type SchemaAttributeList struct {
	Items []*SchemaAttributeListItem
	// Track current nesting context
	currentPath []string
}

// SchemaAttributeListItem represents a schema attribute list item
//
// This may represent root or nested lists of arguments or attributes
type SchemaAttributeListItem struct {
	Description string                     `json:"description"`
	ForceNew    bool                       `json:"force_new,omitempty"`
	Name        string                     `json:"name"`
	Optional    bool                       `json:"optional,omitempty"`
	Required    bool                       `json:"required,omitempty"`
	Type        string                     `json:"type,omitempty"`
	NestedBlock string                     `json:"nested_block,omitempty"`
	Level       int                        `json:"level"`
	Children    []*SchemaAttributeListItem `json:"children,omitempty"`
}

type SchemaAttributeListItemByName []*SchemaAttributeListItem

func (item SchemaAttributeListItemByName) Len() int           { return len(item) }
func (item SchemaAttributeListItemByName) Swap(i, j int)      { item[i], item[j] = item[j], item[i] }
func (item SchemaAttributeListItemByName) Less(i, j int) bool { return item[i].Name < item[j].Name }

func ProcessSchemaAttributeList(list *ast.List, source []byte, blockName string) (*SchemaAttributeList, error) {
	result := &SchemaAttributeList{
		Items:       []*SchemaAttributeListItem{},
		currentPath: []string{blockName},
	}

	for item := list.FirstChild(); item != nil; item = item.NextSibling() {
		if listItem, ok := item.(*ast.ListItem); ok {
			schemaItem, err := schemaAttributeListWalker(listItem, source, 0, blockName)
			if err != nil {
				return nil, err
			}
			// Only append if we got a valid result
			if schemaItem != nil {
				result.Items = append(result.Items, schemaItem)
			}
		}
	}

	return result, nil
}

func detectNestedBlockType(description string) string {
	// Check for explicit nested block indicators
	nestedPatterns := []string{
		"block supports",
		"configuration block",
		"documented below",
		"More details below",
		"structure of this block is described below",
		"blocks have the following structure",
		"Nested attribute",
		"Nested block",
	}

	for _, pattern := range nestedPatterns {
		if strings.Contains(description, pattern) {
			return "nested_block"
		}
	}
	return ""
}

func schemaAttributeListWalker(listItem *ast.ListItem, source []byte, level int, parentBlock string) (*SchemaAttributeListItem, error) {
	result := &SchemaAttributeListItem{
		Level:       level,
		NestedBlock: parentBlock,
		Children:    []*SchemaAttributeListItem{},
	}
	var hasValidContent bool
	err := ast.Walk(listItem, func(node ast.Node, entering bool) (ast.WalkStatus, error) {
		if !entering {
			return ast.WalkContinue, nil
		}

		switch node := node.(type) {
		case *ast.TextBlock:

			// Expected format: `Name` - (Required/Optional[, ForceNew]) Description
			text := string(node.Text(source))

			// Handle both regular hyphen and en dash separators
			var itemParts []string
			if strings.Contains(text, " - ") {
				itemParts = strings.SplitN(text, " - ", 2)
			} else if strings.Contains(text, "`- ") {
				itemParts = strings.SplitN(text, "- ", 2)
			} else if strings.Contains(text, " – ") {
				itemParts = strings.SplitN(text, " – ", 2)
			} else if strings.Contains(text, "`– ") {
				itemParts = strings.SplitN(text, "– ", 2)
			} else {
				return ast.WalkContinue, nil
			}

			if len(itemParts) != 2 {
				return ast.WalkContinue, nil
			}

			result.Name = strings.Trim(itemParts[0], "`")
			fullDescription := itemParts[1] // Only mark as valid if we have a name
			if result.Name == "" {
				return ast.WalkContinue, nil
			}

			hasValidContent = true // Mark that we found valid content

			// Check if this is a nested block definition
			blockType := detectNestedBlockType(fullDescription)
			if blockType == "nested_block" {
				result.Type = "block"
				result.Description = fullDescription
			}

			if !strings.HasPrefix(fullDescription, "(") {
				result.Description = fullDescription
				return ast.WalkStop, nil
			}

			traitsEndIndex := strings.IndexByte(fullDescription, ')')
			if traitsEndIndex == -1 {
				result.Description = fullDescription
				return ast.WalkStop, nil
			}

			result.Description = strings.TrimSpace(fullDescription[traitsEndIndex+1:])
			traits := fullDescription[1:traitsEndIndex]

			for _, trait := range strings.Split(traits, ", ") {
				switch trait {
				case "Boolean", "Number", "String":
					result.Type = trait
				case "Forces new", "Forces new resource":
					result.ForceNew = true
				case "Optional":
					result.Optional = true
				case "Required":
					result.Required = true
				}
			}

			return ast.WalkStop, nil

		case *ast.List:
			// Handle nested lists
			for child := node.FirstChild(); child != nil; child = child.NextSibling() {
				if childListItem, ok := child.(*ast.ListItem); ok {
					childResult, err := schemaAttributeListWalker(childListItem, source, level+1, result.Name)
					if err != nil {
						return ast.WalkStop, err
					}
					// Only append if the child has valid content
					if childResult != nil {
						result.Children = append(result.Children, childResult)
					}
				}
			}
			return ast.WalkSkipChildren, nil
		}

		return ast.WalkContinue, nil
	})

	if err != nil {
		return nil, err
	}

	// Only return the result if we found valid content
	if !hasValidContent {
		return nil, nil
	}

	return result, nil
}
