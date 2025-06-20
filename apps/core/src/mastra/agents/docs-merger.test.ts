import { expect, test, describe, it } from 'vitest';
import { evaluate } from '@mastra/evals';
import { ToneConsistencyMetric } from '@mastra/evals/nlp';
import { amiSample, appsyncGraphqlApiSample, generateNewPrompt, extractArgumentReference } from './docs-merger.js';

describe('generateNewPrompt', () => {
  test('new prompt snapshot', () => {
    const amiSamplePrompt = generateNewPrompt(amiSample);
    expect(amiSamplePrompt).toMatchSnapshot('amiSamplePrompt');
    expect(amiSample.result).toMatchSnapshot('amiSampleResult');
    const appsyncGraphqlApiSamplePrompt = generateNewPrompt(appsyncGraphqlApiSample);
    expect(appsyncGraphqlApiSamplePrompt).toMatchSnapshot('appsyncGraphqlApiSamplePrompt');
    expect(appsyncGraphqlApiSample.result).toMatchSnapshot('appsyncGraphqlApiSampleResult');
  });
});

const exampleMarkdown = `
# Title

Some intro text.

## Argument Reference

This resource supports the following arguments:

* \'name\' - (Required) Name of the resource.
* \'tags\' - (Optional) Map of tags.

## Attribute Reference

Some other section.
`;

const markdownWithoutSection = `
# Title

No relevant section here.
`;

const markdownWithSectionAtEnd = `
# Header

## Argument Reference

- arg1: description
- arg2: description
`;

describe('extractArgumentReference', () => {
  it('extracts the Argument Reference section when present', () => {
    const section = extractArgumentReference(exampleMarkdown);
    expect(section).toContain('## Argument Reference');
    expect(section).toContain("* 'name' - (Required) Name of the resource.");
    expect(section).toContain("* 'tags' - (Optional) Map of tags.");
    // Should not include the Attribute Reference heading
    expect(section).not.toContain('## Attribute Reference');
  });

  it('returns null when the section is not present', () => {
    const section = extractArgumentReference(markdownWithoutSection);
    expect(section).toBeNull();
  });

  it('extracts the section at the end of the document', () => {
    const section = extractArgumentReference(markdownWithSectionAtEnd);
    expect(section).toBe(markdownWithSectionAtEnd.trim());
  });
});
