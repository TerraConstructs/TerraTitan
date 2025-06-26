package main

import (
	"fmt"
	"os"
	"sort"
	"time"

	"gopkg.in/yaml.v3"
)

// AttributeMapping represents a single attribute with multiple possible descriptions
type AttributeMapping struct {
	AttributePath         string   `yaml:"attribute_path"`
	CamelCaseName         string   `yaml:"camel_case_name"`
	Required              bool     `yaml:"required"`
	Optional              bool     `yaml:"optional"`
	Type                  string   `yaml:"type"`
	AvailableDescriptions []string `yaml:"available_descriptions"`
	SelectedDescription   string   `yaml:"selected_description,omitempty"`
}

// MapFile represents the complete mapping file structure
type MapFile struct {
	MarkdownFile string             `yaml:"markdown_file"`
	GeneratedAt  string             `yaml:"generated_at"`
	Mappings     []AttributeMapping `yaml:"mappings"`
}

// MapFileCollector collects ambiguous attribute mappings during processing
type MapFileCollector struct {
	markdownFile string
	mappings     []AttributeMapping
}

// NewMapFileCollector creates a new collector for the given markdown file
func NewMapFileCollector(markdownFile string) *MapFileCollector {
	return &MapFileCollector{
		markdownFile: markdownFile,
		mappings:     make([]AttributeMapping, 0),
	}
}

// AddMapping adds an ambiguous attribute mapping to the collector
func (c *MapFileCollector) AddMapping(attrInfo AttributeInfo, descriptions []string) {
	// Default to the first description to save time
	var defaultDescription string
	if len(descriptions) > 0 {
		defaultDescription = descriptions[0]
	}

	mapping := AttributeMapping{
		AttributePath:         attrInfo.FullPath,
		CamelCaseName:         attrInfo.CamelCaseName,
		Required:              attrInfo.Attribute.Required,
		Optional:              attrInfo.Attribute.Optional,
		Type:                  getTypeString(attrInfo.Attribute.Type),
		AvailableDescriptions: descriptions,
		SelectedDescription:   defaultDescription, // Default to first description
	}
	c.mappings = append(c.mappings, mapping)
}

// HasMappings returns true if any ambiguous mappings were collected
func (c *MapFileCollector) HasMappings() bool {
	return len(c.mappings) > 0
}

// WriteMapFile writes the collected mappings to a JSON file
func (c *MapFileCollector) WriteMapFile(filename string) error {
	if !c.HasMappings() {
		return fmt.Errorf("no mappings to write")
	}

	// Sort mappings by attribute path
	sort.Slice(c.mappings, func(i, j int) bool {
		return c.mappings[i].AttributePath < c.mappings[j].AttributePath
	})

	mapFile := MapFile{
		MarkdownFile: c.markdownFile,
		GeneratedAt:  time.Now().Format(time.RFC3339),
		Mappings:     c.mappings,
	}

	data, err := yaml.Marshal(mapFile)
	if err != nil {
		return fmt.Errorf("failed to marshal map file: %w", err)
	}

	err = os.WriteFile(filename, data, 0644)
	if err != nil {
		return fmt.Errorf("failed to write map file: %w", err)
	}

	return nil
}

// LoadMapFile loads a mapping file from disk
func LoadMapFile(filename string) (*MapFile, error) {
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, fmt.Errorf("failed to read map file: %w", err)
	}

	var mapFile MapFile
	err = yaml.Unmarshal(data, &mapFile)
	if err != nil {
		return nil, fmt.Errorf("failed to parse map file: %w", err)
	}

	// Validate that all mappings have selected descriptions
	for i, mapping := range mapFile.Mappings {
		if mapping.SelectedDescription == "" {
			return nil, fmt.Errorf("mapping %d (%s) is missing selected_description", i+1, mapping.AttributePath)
		}
	}

	return &mapFile, nil
}

// GetSelectedDescription looks up the selected description for an attribute path
func (m *MapFile) GetSelectedDescription(attributePath string) (string, bool) {
	for _, mapping := range m.Mappings {
		if mapping.AttributePath == attributePath {
			return mapping.SelectedDescription, true
		}
	}
	return "", false
}

// ValidateMapFile checks if a map file is properly formatted and complete
func ValidateMapFile(filename string) error {
	_, err := LoadMapFile(filename)
	return err
}
