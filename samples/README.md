# Conversion Samples

This directory contains curated samples of AWS CDK constructs and their TerraConstructs equivalents.

## Structure

- `input/` Original AWS CDK ...
  - `src/` - ... source files
  - `declarations/` - ... type declaration files of the source files
  - `test/` - ... test files
  - `integ/` - ... integration test files
- `output/` Converted TerraConstructs (Terraform CDK) ...
  - `src/` -  ... source files
  - `test/` - ... test files
  - `integ/` - ... integration test files

## Adding Samples

Each sample should be placed in its own subdirectory named after the construct.


## Sample Index

> NOTE: currently TerraConstructs merges AWS EventBridge, AWS SQS, AWS Kinesis, AWS SNS, ... into `notify`. Samples here are organised by AWS CDK namespaces.

- aws-events (missing integration test conversions)
- aws-kinesis (includes integration test conversions)
