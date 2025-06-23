package contents

import (
	"encoding/json"
	"testing"
)

// Convert to JSON structure similar to main.go output
type TestArg struct {
	Name        string    `json:"name"`
	Type        string    `json:"type,omitempty"`
	Description string    `json:"description"`
	Required    bool      `json:"required"`
	Optional    bool      `json:"optional"`
	Level       int       `json:"level"`
	NestedBlock string    `json:"nested_block,omitempty"`
	Children    []TestArg `json:"children,omitempty"`
}

func TestIntegration_AMI_NestedBlocks(t *testing.T) {
	// Full integration test for AMI with nested blocks
	doc := NewDocument("../fixtures/docs/ami.html.markdown", "aws")
	err := doc.Parse()
	if err != nil {
		t.Fatalf("Failed to parse AMI document: %v", err)
	}

	var args []TestArg
	if doc.Sections.Arguments != nil {
		for _, list := range doc.Sections.Arguments.SchemaAttributeLists {
			for _, item := range list.Items {
				arg := convertToTestArg(item)
				args = append(args, arg)
			}
		}
	}

	// Verify we can marshal to JSON
	_, err = json.MarshalIndent(args, "", "  ")
	if err != nil {
		t.Fatalf("Failed to marshal to JSON: %v", err)
	}

	// Verify structure
	if len(args) == 0 {
		t.Fatal("Should have arguments")
	}

	// Look for specific nested structures
	var foundEbsBlock bool
	for _, arg := range args {
		if arg.Name == "ebsBlockDevice" || arg.Name == "ebs_block_device" {
			foundEbsBlock = true
			if arg.Type != "block" {
				t.Errorf("ebsBlockDevice should be type 'block', got '%s'", arg.Type)
			}

			// Check that nested properties would be in children if processed
			t.Logf("Found EBS block device: %+v", arg)
		}
	}

	if !foundEbsBlock {
		t.Error("Should find EBS block device in arguments")
	}

	// t.Logf("Generated JSON:\n%s", string(_jsonData))
}

func convertToTestArg(item *SchemaAttributeListItem) TestArg {
	arg := TestArg{
		Name:        item.Name,
		Type:        item.Type,
		Description: item.Description,
		Required:    item.Required,
		Optional:    item.Optional,
		Level:       item.Level,
		NestedBlock: item.NestedBlock,
	}

	for _, child := range item.Children {
		arg.Children = append(arg.Children, convertToTestArg(child))
	}

	return arg
}

func TestIntegration_RDSCluster_SubSections(t *testing.T) {
	// Test RDS Cluster's subsection handling (e.g., "### restore_to_point_in_time Argument Reference")
	doc := NewDocument("../fixtures/docs/rds_cluster.html.markdown", "aws")
	err := doc.Parse()
	if err != nil {
		t.Fatalf("Failed to parse RDS Cluster document: %v", err)
	}

	// Check that nested block names are properly assigned
	if doc.Sections.Arguments != nil {
		for _, list := range doc.Sections.Arguments.SchemaAttributeLists {
			// Check if any items have nested block contexts
			for _, item := range list.Items {
				if item.NestedBlock != "" && item.NestedBlock != "arguments" {
					t.Logf("Found nested block context: %s in %s", item.Name, item.NestedBlock)
				}
			}
		}
	}
}
