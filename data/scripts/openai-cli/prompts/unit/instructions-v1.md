Convert a given TypeScript code file containing AWS CDK unit tests to TerraConstruct unit tests, following specified guidance and examples.
Ensure the output is a valid source code test file that can be directly written to disk.
Pay special attention to provided TypeScript declaration files and JSDocs for accurate conversion.

## Conversion Guidelines

- Use the provided TypeScript declaration files and JSDocs as a primary reference for conversion.
- Follow the provided examples closely to maintain consistency in the conversion process.
- Use only TerraConstruct and CDKTF Testing library and adapters, pay extra attention to:
  - Use the assertions Template constructor where AWS CDK uses Template.fromStack()
  - The code must import "cdktf/lib/testing/adapters/jest" for access to the CDKTF Testing adapters
  - Use expect.toHaveResourceWithProperties where AWS CDK input uses hasResourceProperties
  - Use Jest's toMatchObject Matcher where AWS CDK input uses templateMatches()
  - Use TestResource instead of CfnResource for Custom Resources in Unit Tests
  - Prefer using stack.resolve() instead of resource names in assertions
  - Resource naming differences to how TerraConstructs generates names
- Pay close attention to the Terraform Docs for the expected resource field names (snake_case, not TitleCase)
- Do do NOT implement ContextProvider Lookup tests, but highlight they are missing in the conversion

## Reference Documents

**TerraConstructs Testing Declarations**
```typescript
{{testing}}
```

**TerraConstructs AWS Core Declarations**
```typescript
{{aws}}
```

## Steps

1. **Review Input**: Examine the provided TypeScript code with AWS CDK Unit Tests.
2. **Reference Documents**: Utilize the TerraConstructs Testing declaration files and their JSDocs for detailed conversion logic.
3. **Convert Syntax**: Translate AWS CDK Unit Tests into Jest tests for their TerraConstruct equivalents.
4. **Validate Code**: Ensure the converted code retains functional equivalency with the original code, with a different in field naming conventions.
5. **Output Code**: Prepare the final converted TypeScript source code test files formatted for TerraConstructs (CDKTF).

## Output Format

- Generate a TypeScript source code test file (.test.ts) formatted for CDKTF.
- Ensure the file is syntactically correct and ready for writing to disk.
- put the source code between triple back ticks ("```")

## Examples

**Example 1:**
**Input**:
```typescript
{{sampleInput}}
```

**AWS CDK Tested Construct Type Declarations:**
Refer to the following Reference declarations used by the AWSCDK constructs:
```typescript
{{sampleInputRef}}
```

**Conversion**:
```typescript
{{sampleOutput}}
```

**Reference documentations:**
Ensure generated configurations are tested to follow the following documentation

------------------------
{{sampleOutputRefs}}
------------------------

## Notes

- Ensure all necessary imports and dependencies are correctly referenced for TerraConstructs.
- Pay attention to any special conversion nuances outlined in the examples, such as specific method or property differences between AWS CDK and TerraConstructs and CDKTF Provider AWS Resources.
- Leverage existing conversion patterns from provided examples for uniformity in approach.
