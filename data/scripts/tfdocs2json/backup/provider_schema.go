package main

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
)

// ProviderTarget represents the provider configuration
type ProviderTarget struct {
	Name    string `json:"name"`
	Version string `json:"version"`
	Source  string `json:"source"`
}

// TerraformConfig represents the main.tf.json structure
type TerraformConfig struct {
	Provider  map[string]interface{} `json:"provider"`
	Terraform TerraformBlock         `json:"terraform"`
}

type TerraformBlock struct {
	RequiredProviders map[string]RequiredProvider `json:"required_providers"`
}

type RequiredProvider struct {
	Version string `json:"version"`
	Source  string `json:"source"`
}

// ProviderSchema represents the complete provider schema
type ProviderSchema struct {
	FormatVersion    string              `json:"format_version"`
	ProviderSchemas  map[string]Provider `json:"provider_schemas,omitempty"`
	ProviderVersions map[string]string   `json:"provider_versions,omitempty"`
}

type Provider struct {
	Provider          Block                     `json:"provider"`
	ResourceSchemas   map[string]ResourceSchema `json:"resource_schemas,omitempty"`
	DataSourceSchemas map[string]ResourceSchema `json:"data_source_schemas,omitempty"`
}

type ResourceSchema struct {
	Version int   `json:"version"`
	Block   Block `json:"block"`
}

type Block struct {
	Attributes  map[string]Attribute `json:"attributes,omitempty"`
	BlockTypes  map[string]BlockType `json:"block_types,omitempty"`
	Description string               `json:"description,omitempty"`
}

type Attribute struct {
	Type        interface{} `json:"type"`
	Description string      `json:"description,omitempty"`
	Required    bool        `json:"required,omitempty"`
	Optional    bool        `json:"optional,omitempty"`
	Computed    bool        `json:"computed,omitempty"`
	Sensitive   bool        `json:"sensitive,omitempty"`
}

type BlockType struct {
	NestingMode string `json:"nesting_mode"`
	Block       Block  `json:"block"`
	MinItems    int    `json:"min_items,omitempty"`
	MaxItems    int    `json:"max_items,omitempty"`
}

// VersionSchema represents terraform version output
type VersionSchema struct {
	ProviderSelections map[string]string `json:"provider_selections"`
}

// ref: https://github.com/hashicorp/terraform-cdk/blob/v0.21.0/packages/%40cdktf/provider-schema/src/provider-schema.ts#L166-L258

// ReadProviderSchema fetches the provider schema using terraform/tofu
func ReadProviderSchema(target ProviderTarget) (*ProviderSchema, string, error) {
	// throw error if version is not resolved (e.g. "~> 5.0" is not allowed)
	if target.Version == "" || target.Version[0] == '~' {
		return nil, "", fmt.Errorf("provider version must be a specific version, not a constraint (e.g. '~> 5.0' is not allowed)")
	}

	// Create terraform config
	config := TerraformConfig{
		Provider: map[string]interface{}{
			target.Name: map[string]interface{}{},
		},
		Terraform: TerraformBlock{
			RequiredProviders: map[string]RequiredProvider{
				target.Name: {
					Version: target.Version,
					Source:  target.Source,
				},
			},
		},
	}
	// Read from cache if available
	cacheFile := fmt.Sprintf("provider_schema_%s_%s.json", target.Name, target.Version)
	if cachedSchema, err := ReadProviderSchemaFromCache(cacheFile); err == nil {
		fmt.Fprintf(os.Stderr, "Using cached schema for %s\n", target.Name)
		return cachedSchema, "", nil
	}

	var providerSchema ProviderSchema
	providerSchema.FormatVersion = "0.1"

	// Create temporary directory
	tempDir, err := os.MkdirTemp("", "fetchProviderSchema")
	if err != nil {
		return nil, "", fmt.Errorf("failed to create temp dir: %w", err)
	}
	defer os.RemoveAll(tempDir)

	// Write main.tf.json
	configJSON, err := json.MarshalIndent(config, "", "  ")
	if err != nil {
		return nil, "", fmt.Errorf("failed to marshal config: %w", err)
	}

	filePath := filepath.Join(tempDir, "main.tf.json")
	err = os.WriteFile(filePath, configJSON, 0644)
	if err != nil {
		return nil, "", fmt.Errorf("failed to write config file: %w", err)
	}

	// Determine terraform binary (prefer tofu if available)
	terraformBinary, terraformRegistry := findTerraformBinary()

	// Run terraform init with streaming output
	fmt.Fprintf(os.Stderr, "Running %s init...\n", terraformBinary)
	initCmd := exec.Command(terraformBinary, "init")
	initCmd.Dir = tempDir
	initCmd.Stdout = os.Stderr // Stream stdout to stderr so it doesn't interfere with JSON output
	initCmd.Stderr = os.Stderr // Stream stderr to stderr
	if err := initCmd.Run(); err != nil {
		return nil, terraformRegistry, fmt.Errorf("terraform init failed: %w", err)
	}

	// Run terraform providers schema with streaming stderr only
	fmt.Fprintf(os.Stderr, "Fetching provider schema...\n")
	schemaCmd := exec.Command(terraformBinary, "providers", "schema", "-json")
	schemaCmd.Dir = tempDir
	schemaCmd.Stderr = os.Stderr            // Stream stderr for error messages
	schemaOutput, err := schemaCmd.Output() // Capture stdout for JSON parsing
	if err != nil {
		return nil, terraformRegistry, fmt.Errorf("terraform providers schema failed: %w", err)
	}

	err = json.Unmarshal(schemaOutput, &providerSchema)
	if err != nil {
		return nil, terraformRegistry, fmt.Errorf("failed to parse schema output: %w", err)
	}

	// Run terraform version to get provider versions
	versionCmd := exec.Command(terraformBinary, "version", "-json")
	versionCmd.Dir = tempDir
	versionOutput, err := versionCmd.Output()
	if err != nil {
		// Don't fail if version command fails, just log warning
		fmt.Fprintf(os.Stderr, "Warning: failed to get terraform version info: %v\n", err)
	} else {
		var versionSchema VersionSchema
		if err := json.Unmarshal(versionOutput, &versionSchema); err == nil {
			providerSchema.ProviderVersions = versionSchema.ProviderSelections
		}
	}

	// Sanitize the schema
	sanitizedSchema := sanitizeProviderSchema(providerSchema)

	// Write the schema to cache
	cachePath := filepath.Join("cache", cacheFile)
	if err := os.MkdirAll("cache", 0755); err != nil {
		return nil, terraformRegistry, fmt.Errorf("failed to create cache directory: %w", err)
	}

	sanitizedSchemaString, err := json.MarshalIndent(sanitizedSchema, "", "  ")
	if err != nil {
		return nil, terraformRegistry, fmt.Errorf("failed to marshal sanitized schema: %w", err)
	}
	if err := os.WriteFile(cachePath, sanitizedSchemaString, 0644); err != nil {
		return nil, terraformRegistry, fmt.Errorf("failed to write schema cache: %w", err)
	}
	fmt.Fprintf(os.Stderr, "Provider schema cached at: %s\n", cachePath)
	return &sanitizedSchema, terraformRegistry, nil
}

func ReadProviderSchemaFromCache(cacheFile string) (*ProviderSchema, error) {
	// Construct cache file path
	cachePath := filepath.Join("cache", cacheFile)

	// Check if cache file exists
	if _, err := os.Stat(cachePath); os.IsNotExist(err) {
		return nil, fmt.Errorf("cache file not found: %s", cachePath)
	}

	// Read the cached schema
	data, err := os.ReadFile(cachePath)
	if err != nil {
		return nil, fmt.Errorf("failed to read cache file: %w", err)
	}

	var schema ProviderSchema
	if err := json.Unmarshal(data, &schema); err != nil {
		return nil, fmt.Errorf("failed to parse cached schema: %w", err)
	}

	return &schema, nil
}

// findTerraformBinary finds the appropriate terraform binary (tofu or terraform)
func findTerraformBinary() (string, string) {
	// Check for tofu first
	if _, err := exec.LookPath("tofu"); err == nil {
		return "tofu", "registry.opentofu.org"
	}
	// Fall back to terraform
	return "terraform", "registry.terraform.io"
}

// sanitizeProviderSchema fixes common issues in provider schemas
func sanitizeProviderSchema(schema ProviderSchema) ProviderSchema {
	// Fix doubled attributes (e.g., ["list", "string", "list", "string"] -> ["list", "string"])
	attributeDoublingFix := func(attr *Attribute) {
		if typeSlice, ok := attr.Type.([]interface{}); ok {
			if len(typeSlice) > 2 {
				// Keep only first 2 elements
				attr.Type = typeSlice[:2]
			}
		}
	}

	// Recursively sanitize a block
	var sanitizeBlock func(*Block)
	sanitizeBlock = func(block *Block) {
		// Fix attributes
		for _, attr := range block.Attributes {
			attributeDoublingFix(&attr)
		}

		// Recursively fix block types
		for _, blockType := range block.BlockTypes {
			sanitizeBlock(&blockType.Block)
		}
	}

	// Apply sanitization to all provider schemas
	for _, provider := range schema.ProviderSchemas {
		// Sanitize provider block
		sanitizeBlock(&provider.Provider)

		// Sanitize resource schemas
		for _, resource := range provider.ResourceSchemas {
			sanitizeBlock(&resource.Block)
		}

		// Sanitize data source schemas
		for _, dataSource := range provider.DataSourceSchemas {
			sanitizeBlock(&dataSource.Block)
		}
	}

	return schema
}

// GetResourceSchema extracts a specific resource schema from the provider schema
func GetResourceSchema(providerSchema *ProviderSchema, providerName, resourceName string) (*ResourceSchema, error) {
	provider, exists := providerSchema.ProviderSchemas[providerName]
	if !exists {
		return nil, fmt.Errorf("provider %s not found in schema", providerName)
	}

	resource, exists := provider.ResourceSchemas[resourceName]
	if !exists {
		return nil, fmt.Errorf("resource %s not found in provider %s", resourceName, providerName)
	}

	return &resource, nil
}
