package contents

import (
	"os"
	"testing"
)

func TestSectionsWalker_AMI(t *testing.T) {
	// Test AMI documentation which has nested blocks like ebsBlockDevice
	_, err := os.ReadFile("../fixtures/docs/ami.html.markdown")
	if err != nil {
		t.Fatalf("Failed to read AMI fixture: %v", err)
	}

	doc := NewDocument("../fixtures/docs/ami.html.markdown", "aws")
	err = doc.Parse()
	if err != nil {
		t.Fatalf("Failed to parse AMI document: %v", err)
	}

	sections := doc.Sections
	if sections == nil {
		t.Fatal("Sections should not be nil")
	}

	// Test that Arguments section exists
	if sections.Arguments == nil {
		t.Fatal("Arguments section should exist for AMI")
	}

	// Test that we have schema attribute lists
	if len(sections.Arguments.SchemaAttributeLists) == 0 {
		t.Fatal("Should have at least one schema attribute list")
	}

	// Look for nested blocks
	var foundEbsBlock, foundEphemeralBlock bool
	for _, list := range sections.Arguments.SchemaAttributeLists {
		for _, item := range list.Items {
			if item.Name == "ebsBlockDevice" || item.Name == "ebs_block_device" {
				foundEbsBlock = true
				if item.Type != "block" {
					t.Errorf("ebsBlockDevice should be detected as type 'block', got '%s'", item.Type)
				}
			}
			if item.Name == "ephemeralBlockDevice" || item.Name == "ephemeral_block_device" {
				foundEphemeralBlock = true
				if item.Type != "block" {
					t.Errorf("ephemeralBlockDevice should be detected as type 'block', got '%s'", item.Type)
				}
			}
		}
	}

	if !foundEbsBlock {
		t.Error("Should find ebsBlockDevice in AMI arguments")
	}
	if !foundEphemeralBlock {
		t.Error("Should find ephemeralBlockDevice in AMI arguments")
	}
}

func TestSectionsWalker_RDSCluster(t *testing.T) {
	// Test RDS Cluster documentation which has nested blocks like restoreToPointInTime
	doc := NewDocument("../fixtures/docs/rds_cluster.html.markdown", "aws")
	err := doc.Parse()
	if err != nil {
		t.Fatalf("Failed to parse RDS Cluster document: %v", err)
	}

	sections := doc.Sections
	if sections == nil {
		t.Fatal("Sections should not be nil")
	}

	// Test that Arguments section exists
	if sections.Arguments == nil {
		t.Fatal("Arguments section should exist for RDS Cluster")
	}

	// Test that we have schema attribute lists
	if len(sections.Arguments.SchemaAttributeLists) == 0 {
		t.Fatal("Should have at least one schema attribute list")
	}

	// Look for nested blocks
	var foundRestoreToPointInTime, foundScalingConfig bool
	for _, list := range sections.Arguments.SchemaAttributeLists {
		for _, item := range list.Items {
			if item.Name == "restoreToPointInTime" || item.Name == "restore_to_point_in_time" {
				foundRestoreToPointInTime = true
				if item.Type != "block" {
					t.Errorf("restoreToPointInTime should be detected as type 'block', got '%s'", item.Type)
				}
			}
			if item.Name == "scalingConfiguration" || item.Name == "scaling_configuration" {
				foundScalingConfig = true
				if item.Type != "block" {
					t.Errorf("scalingConfiguration should be detected as type 'block', got '%s'", item.Type)
				}
			}
		}
	}

	if !foundRestoreToPointInTime {
		t.Error("Should find restoreToPointInTime in RDS Cluster arguments")
	}
	if !foundScalingConfig {
		t.Error("Should find scalingConfiguration in RDS Cluster arguments")
	}
}

func TestSectionsWalker_CloudWatchEventBus(t *testing.T) {
	// Test CloudWatch Event Bus documentation (simpler case without nested blocks)
	doc := NewDocument("../fixtures/docs/cloudwatch_event_bus.html.markdown", "aws")
	err := doc.Parse()
	if err != nil {
		t.Fatalf("Failed to parse CloudWatch Event Bus document: %v", err)
	}

	sections := doc.Sections
	if sections == nil {
		t.Fatal("Sections should not be nil")
	}

	// Test that Arguments section exists
	if sections.Arguments == nil {
		t.Fatal("Arguments section should exist for CloudWatch Event Bus")
	}

	// Test basic attributes exist
	var foundName, foundTags bool
	for _, list := range sections.Arguments.SchemaAttributeLists {
		for _, item := range list.Items {
			if item.Name == "name" {
				foundName = true
				if item.Optional && item.Required {
					t.Error("name should not be both optional and required")
				}
			}
			if item.Name == "tags" {
				foundTags = true
				if !item.Optional {
					t.Error("tags should be optional")
				}
			}
		}
	}

	if !foundName {
		t.Error("Should find name in CloudWatch Event Bus arguments")
	}
	if !foundTags {
		t.Error("Should find tags in CloudWatch Event Bus arguments")
	}
}
