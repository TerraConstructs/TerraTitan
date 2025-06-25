import { describe, it, expect } from 'vitest';
import {
  extractResourceNameFromUrl,
  buildSourceConversionRequests,
  buildUnitTestConversionRequests,
  type ProcessedCdktfRefs,
} from './cdktf-ref-processor.js';

describe('CDKTF Reference Processor', () => {
  describe('extractResourceNameFromUrl', () => {
    it('should extract resource name from terraform registry URL', () => {
      const url = 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sns_topic';
      const result = extractResourceNameFromUrl(url);
      expect(result).toBe('sns_topic');
    });

    it('should handle URLs with different paths', () => {
      const url = 'https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3_bucket';
      const result = extractResourceNameFromUrl(url);
      expect(result).toBe('s3_bucket');
    });

    it('should throw error for invalid URLs', () => {
      const url = 'https://invalid-url.com/no-resource-name/';
      expect(() => extractResourceNameFromUrl(url)).toThrow('Invalid metadata URL');
    });
  });

  describe('buildSourceConversionRequests', () => {
    it('should build correct source conversion requests', () => {
      const mockProcessedRefs: ProcessedCdktfRefs[] = [
        {
          inputFile: '/path/to/source.ts',
          inputRefs: [{ sourceFile: '/path/to/aws-cdk/sns.d.ts', sourceClass: 'CfnTopic' }],
          mergedDocsFiles: ['/path/to/merged/sns-topic/index.d.ts'],
          markdownHclFiles: ['/path/to/docs/r/sns_topic.html.markdown'],
        },
      ];

      const requests = buildSourceConversionRequests(mockProcessedRefs);

      expect(requests).toHaveLength(1);
      expect(requests[0]).toEqual({
        inputFile: '/path/to/source.ts',
        inputRefFiles: ['/path/to/aws-cdk/sns.d.ts'],
        outputRefFiles: ['/path/to/merged/sns-topic/index.d.ts'],
      });
    });
    it('should build correct source conversion requests with deduplication', () => {
      const mockProcessedRefs: ProcessedCdktfRefs[] = [
        {
          inputFile: '/path/to/source.ts',
          inputRefs: [
            { sourceFile: '/path/to/aws-cdk/sns.d.ts', sourceClass: 'CfnTopic' },
            { sourceFile: '/path/to/aws-cdk/sns.d.ts', sourceClass: 'CfnTopicProps' },
          ],
          mergedDocsFiles: ['/path/to/merged/sns-topic/index.d.ts', '/path/to/merged/sns-topic/index.d.ts'],
          markdownHclFiles: ['/path/to/docs/r/sns_topic.html.markdown', '/path/to/docs/r/sns_topic.html.markdown'],
        },
      ];

      const requests = buildSourceConversionRequests(mockProcessedRefs);

      expect(requests).toHaveLength(1);
      expect(requests[0]).toEqual({
        inputFile: '/path/to/source.ts',
        inputRefFiles: ['/path/to/aws-cdk/sns.d.ts'],
        outputRefFiles: ['/path/to/merged/sns-topic/index.d.ts'],
      });
    });
  });

  describe('buildUnitTestConversionRequests', () => {
    it('should build correct unit test conversion requests', () => {
      const mockProcessedRefs: ProcessedCdktfRefs[] = [
        {
          inputFile: '/path/to/source.ts',
          inputRefs: [{ sourceFile: '/path/to/aws-cdk/sns.d.ts', sourceClass: 'CfnTopic' }],
          mergedDocsFiles: ['/path/to/merged/sns-topic/index.d.ts'],
          markdownHclFiles: ['/path/to/docs/r/sns_topic.html.markdown'],
        },
      ];

      const testFiles = [
        {
          inputFile: '/path/to/test.test.ts',
          inputRefs: ['/path/to/aws-cdk/sns.d.ts'],
        },
      ];

      const requests = buildUnitTestConversionRequests(mockProcessedRefs, testFiles);

      expect(requests).toHaveLength(1);
      expect(requests[0]).toEqual({
        inputFile: '/path/to/test.test.ts',
        inputRefFiles: ['/path/to/aws-cdk/sns.d.ts'],
        outputRefFiles: ['/path/to/docs/r/sns_topic.html.markdown'], // Uses markdown HCL docs
      });
    });

    it('should aggregate markdown files from multiple processed refs', () => {
      const mockProcessedRefs: ProcessedCdktfRefs[] = [
        {
          inputFile: '/path/to/source1.ts',
          inputRefs: [],
          mergedDocsFiles: [],
          markdownHclFiles: ['/path/to/docs/r/sns_topic.html.markdown'],
        },
        {
          inputFile: '/path/to/source2.ts',
          inputRefs: [],
          mergedDocsFiles: [],
          markdownHclFiles: ['/path/to/docs/r/s3_bucket.html.markdown'],
        },
      ];

      const testFiles = [
        {
          inputFile: '/path/to/test.test.ts',
          inputRefs: ['/path/to/aws-cdk/test.d.ts'],
        },
      ];

      const requests = buildUnitTestConversionRequests(mockProcessedRefs, testFiles);

      expect(requests[0].outputRefFiles).toEqual([
        '/path/to/docs/r/sns_topic.html.markdown',
        '/path/to/docs/r/s3_bucket.html.markdown',
      ]);
    });
  });

  describe('data consistency verification', () => {
    it('should ensure source conversions use merged docs while unit tests use markdown HCL', () => {
      const mockProcessedRefs: ProcessedCdktfRefs[] = [
        {
          inputFile: '/path/to/source.ts',
          inputRefs: [{ sourceFile: '/path/to/aws-cdk/sns.d.ts', sourceClass: 'CfnTopic' }],
          mergedDocsFiles: ['/path/to/merged/sns-topic/index.d.ts'],
          markdownHclFiles: ['/path/to/docs/r/sns_topic.html.markdown'],
        },
      ];

      const testFiles = [
        {
          inputFile: '/path/to/test.test.ts',
          inputRefs: ['/path/to/aws-cdk/sns.d.ts'],
        },
      ];

      const sourceRequests = buildSourceConversionRequests(mockProcessedRefs);
      const unitTestRequests = buildUnitTestConversionRequests(mockProcessedRefs, testFiles);

      // Source files should use merged docs (TypeScript + markdown)
      expect(sourceRequests[0].outputRefFiles).toEqual(['/path/to/merged/sns-topic/index.d.ts']);

      // Unit test files should use raw markdown HCL docs
      expect(unitTestRequests[0].outputRefFiles).toEqual(['/path/to/docs/r/sns_topic.html.markdown']);

      // Verify file types
      expect(sourceRequests[0].outputRefFiles[0]).toMatch(/\.d\.ts$/);
      expect(unitTestRequests[0].outputRefFiles[0]).toMatch(/\.html\.markdown$/);
    });
  });
});
