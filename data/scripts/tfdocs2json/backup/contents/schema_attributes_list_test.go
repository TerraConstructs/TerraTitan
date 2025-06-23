package contents

import (
	"testing"
)

func TestDetectNestedBlockType(t *testing.T) {
	tests := []struct {
		name        string
		description string
		expected    string
	}{
		{
			name:        "block supports",
			description: "(Optional) Nested attribute for point in time restore. More details below.",
			expected:    "nested_block",
		},
		{
			name:        "configuration block",
			description: "(Optional) Configuration block for scaling properties. More details below.",
			expected:    "nested_block",
		},
		{
			name:        "documented below",
			description: "(Optional) List of EBS block devices. Structure documented below.",
			expected:    "nested_block",
		},
		{
			name:        "structure described below",
			description: "(Optional) Nested blocks have the following structure documented below.",
			expected:    "nested_block",
		},
		{
			name:        "blocks have the following structure",
			description: "Nested `ebsBlockDevice` blocks have the following structure:",
			expected:    "nested_block",
		},
		{
			name:        "no markers",
			description: "Just a plain description without any markers.",
			expected:    "",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := detectNestedBlockType(tt.description)
			if result != tt.expected {
				t.Errorf("detectNestedBlockType(%q) = %q, want %q", tt.description, result, tt.expected)
			}
		})
	}
}
