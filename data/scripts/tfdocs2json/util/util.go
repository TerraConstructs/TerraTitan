package util

import (
	"bytes"
)

// ToCamelCase converts a snake_case string to camelCase.
func ToCamelCase(s string) string {
	if s == "" {
		return ""
	}

	parts := bytes.Split([]byte(s), []byte{'_'})
	// Filter out empty parts (handles multiple underscores, leading/trailing underscores)
	var filteredParts [][]byte
	for _, part := range parts {
		if len(part) > 0 {
			filteredParts = append(filteredParts, part)
		}
	}

	if len(filteredParts) == 0 {
		return ""
	}

	// First part stays lowercase, rest get capitalized
	result := make([][]byte, len(filteredParts))
	result[0] = bytes.ToLower(filteredParts[0])

	for i := 1; i < len(filteredParts); i++ {
		part := filteredParts[i]
		if len(part) > 0 {
			part[0] = bytes.ToUpper(part[:1])[0]
		}
		result[i] = part
	}

	return string(bytes.Join(result, nil))
}

// ToPascalCase converts a snake_case string to PascalCase.
// PascalCase is similar to CamelCase but the first letter is also capitalized.
func ToPascalCase(s string) string {
	if s == "" {
		return ""
	}
	parts := bytes.Split([]byte(s), []byte{'_'})
	// Filter out empty parts (handles multiple underscores, leading/trailing underscores)
	var filteredParts [][]byte
	for _, part := range parts {
		if len(part) > 0 {
			filteredParts = append(filteredParts, part)
		}
	}
	if len(filteredParts) == 0 {
		return ""
	}
	// Capitalize all parts
	result := make([][]byte, len(filteredParts))
	for i, part := range filteredParts {
		if len(part) > 0 {
			part[0] = bytes.ToUpper(part[:1])[0]
		}
		result[i] = part
	}
	return string(bytes.Join(result, nil))
}
