# tfdocs2json

Parse terraform provider aws docs to json.

## Version 2 (current)

Export terraform-provider-aws resources schema and "lookup" each argument in the typescript markdown document.

Resulting JSON is closer aligned to the Typescript interfaces.

### Basic Usage

```console
# Standard processing (non-interactive)
./build/tfdocs2json -md ./fixtures/docs/ami.html.markdown > ami.json

# Interactive mode for ambiguous descriptions
./build/tfdocs2json -interactive -md ./fixtures/docs/rds_cluster.html.markdown > rds_cluster.json
```

### Unattended Mapping Feature

For markdown files with ambiguous attribute descriptions (multiple descriptions found for the same attribute), you can use the two-phase unattended mapping workflow:

#### Phase 1: Generate Mapping File

```console
./build/tfdocs2json -map mappings.yaml -md ./fixtures/docs/rds_cluster.html.markdown
```

This will:
- Process the markdown file and identify attributes with multiple descriptions
- Generate a structured YAML mapping file (`mappings.yaml`) with all ambiguous attributes
- Exit with instructions to edit the file
- If no ambiguous descriptions are found, exit with "no mapping needed" message

#### Phase 2: Apply Mapping File

After manually editing the mapping file to select your preferred descriptions:

```console
# The -md flag is optional when using -unattended (it will use the path from the mapping file)
./build/tfdocs2json -unattended mappings.yaml > output.json

# Or explicitly specify the markdown path (will validate it matches the mapping file)
./build/tfdocs2json -unattended mappings.yaml -md ./fixtures/docs/rds_cluster.html.markdown > output.json
```

This will:
- Load your mapping decisions from the file
- Use the markdown path from the mapping file (or validate if provided separately)
- Process the markdown unattended using your selected descriptions
- Generate the final JSON output

#### Mapping File Format

The generated mapping file uses YAML format for easy editing:

```yaml
markdown_file: "./fixtures/docs/rds_cluster.html.markdown"
generated_at: "2025-06-26T15:18:35+07:00"
mappings:
  - attribute_path: "ScalingConfiguration.maxCapacity"
    camel_case_name: "maxCapacity"
    required: false
    optional: true
    type: "number"
    available_descriptions:
      - "(Optional) Maximum capacity for serverless mode..."
      - "(Required) Maximum capacity for provisioned mode..."
    selected_description: "(Optional) Maximum capacity for serverless mode..."  # Defaults to first description
    
  - attribute_path: "ScalingConfiguration.minCapacity"
    camel_case_name: "minCapacity"
    required: false
    optional: true
    type: "number"
    available_descriptions:
      - "(Optional) Minimum capacity for serverless mode..."
      - "(Required) Minimum capacity for provisioned mode..."
    selected_description: "(Optional) Minimum capacity for serverless mode..."  # Defaults to first description
```

The mapping file is generated with the first description selected by default, saving you time. You only need to edit the `selected_description` fields where you want a different choice from the `available_descriptions` array.

#### Benefits of Unattended Mapping

- **Reproducible**: Same mapping decisions applied consistently across runs
- **Efficient**: No manual clicking through prompts for large files
- **Documented**: Mapping file serves as a record of decisions made
- **Flexible**: Full control over which descriptions to use

### Command Line Options

```
  -md string
        Path to Terraform resource Markdown file (required if not unattended)
  -provider string
        Provider name (default "aws")
  -version string
        Provider version constraint (default "5.100.0")
  -source string
        Provider source (default "hashicorp/aws")
  -output string
        Output file path (default stdout)
  -interactive
        Enable interactive mode for selecting descriptions when multiple matches found
  -map string
        Generate mapping file for ambiguous descriptions
  -unattended string
        Use pre-generated mapping file for unattended processing
```

### Flag Validation

- Cannot use `-map` and `-unattended` together
- Cannot use `-interactive` with mapping flags

## Version 1

Leverage terraform-provider-docs checker logic to parse markdown document, argument section and each argument list item

Reference: [docs-check target](https://github.com/hashicorp/terraform-provider-aws/blob/v5.100.0/GNUmakefile#L178-L185)

Note exceptions:

```console
-ignore-contents-check-data-sources aws_kms_secrets,aws_kms_secret \
-ignore-file-missing-data-sources aws_alb,aws_alb_listener,aws_alb_target_group,aws_albs \
-ignore-file-missing-resources aws_alb,aws_alb_listener,aws_alb_listener_certificate,aws_alb_listener_rule,aws_alb_target_group,aws_alb_target_group_attachment \
```

> NOTE: This approach misses a lot of arguments and was abandoned.

## References

- [YakDriver/tfproviderdocs](https://github.com/YakDriver/tfproviderdocs)
