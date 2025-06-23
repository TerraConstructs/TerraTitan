import * as fs from 'fs';
import * as path from 'path';
import { expect, test, describe } from 'vitest';
import {
  filterGeneratedModule,
  findGeneratedImports,
  filterInputRefFile,
  kebabToTitleCase,
  getTypeJsDocs as getClassJsDocs,
  findAwsCdkDeclarations,
  gitRoot,
} from './helpers.js';

describe('kebabToTitleCase', () => {
  test('should convert kebab-case to TitleCase', () => {
    const input = 'sns-topic';
    const expectedOutput = 'SnsTopic';
    const result = kebabToTitleCase(input);
    expect(result).toEqual(expectedOutput);
  });
  test('should handle empty string', () => {
    const input = '';
    const expectedOutput = '';
    const result = kebabToTitleCase(input);
    expect(result).toEqual(expectedOutput);
  });
  test('should handle single word', () => {
    const input = 'example';
    const expectedOutput = 'Example';
    const result = kebabToTitleCase(input);
    expect(result).toEqual(expectedOutput);
  });
});

describe('findAwsCdkDeclarations', () => {
  test('should find all .d.ts files under aws-cdk-lib/<submodule>/', () => {
    const declarationFiles = findAwsCdkDeclarations('aws-sns').map(file => path.relative(gitRoot, file));

    // simplify inline snapshots, strip out the dynamic ".pnpm/aws-cdk-lib@.../node_modules/" segment
    const normalized = declarationFiles.map(p =>
      p.replace(/^node_modules\/\.pnpm\/aws-cdk-lib@[^/]+\/node_modules\//, 'node_modules/aws-cdk-lib/'),
    );
    expect(normalized).toMatchInlineSnapshot(`
      [
        "node_modules/aws-cdk-lib/aws-cdk-lib/aws-sns/lib/delivery-policy.d.ts",
        "node_modules/aws-cdk-lib/aws-cdk-lib/aws-sns/lib/policy.d.ts",
        "node_modules/aws-cdk-lib/aws-cdk-lib/aws-sns/lib/subscriber.d.ts",
        "node_modules/aws-cdk-lib/aws-cdk-lib/aws-sns/lib/subscription-filter.d.ts",
        "node_modules/aws-cdk-lib/aws-cdk-lib/aws-sns/lib/subscription.d.ts",
        "node_modules/aws-cdk-lib/aws-cdk-lib/aws-sns/lib/topic-base.d.ts",
        "node_modules/aws-cdk-lib/aws-cdk-lib/aws-sns/lib/topic.d.ts",
      ]
    `);
  });
});

describe('filterInputRefFile', () => {
  test('should process input file and filter declarations', async () => {
    const inputSource = `
      import { CfnConnection } from './events.generated';
      import * as ssm from './ssm.generated';

      const connection = new CfnConnection();
      const resource = new ssm.CfnParameter(this, 'Resource', {});
    `;

    const inputRefSource = `
      export declare class CfnConnection {
        public readonly x: string;
      }
      export interface CfnConnectionProps {
        readonly prop1: string;
      }
      export declare class OtherClass {
        public readonly y: string;
      }
    `;
    const result = filterInputRefFile(inputSource, inputRefSource);

    expect(result).toContain('export declare class CfnConnection');
    expect(result).toContain('export interface CfnConnectionProps');
    expect(result).not.toContain('export declare class OtherClass');
  });
});

describe('findGeneratedImports', () => {
  test('should find generated imports', () => {
    const sourceText = `
      import { CfnConnection } from './events.generated';
      import * as ssm from './ssm.generated';

      const connection = new CfnConnection();
      const resource = new ssm.CfnParameter(this, 'Resource', {
        allowedPattern: 'abc',
        description: 'A parameter',
      });
    `;

    const result = findGeneratedImports(sourceText);

    expect(result).toEqual({
      './events.generated': ['CfnConnection'],
      './ssm.generated': ['CfnParameter'],
    });
  });

  test('should handle multiple named imports', () => {
    const sourceText = `
      import { CfnConnection, CfnRule } from './events.generated';
    `;

    const result = findGeneratedImports(sourceText);

    expect(result).toEqual({
      './events.generated': ['CfnConnection', 'CfnRule'],
    });
  });

  test('should handle namespace imports with property access', () => {
    const sourceText = `
      import * as cdk from './cdk.generated';
      cdk.Stack.create();
      cdk.App.build();
    `;

    const result = findGeneratedImports(sourceText);

    expect(result).toEqual({
      './cdk.generated': ['Stack', 'App'],
    });
  });
});

describe('filterGeneratedModule', () => {
  test('should keep declarations for specified symbols and their related types', () => {
    const generatedDeclaration = `
import * as cdk from "../../core";
import * as constructs from "constructs";

export declare class CfnApiDestination extends cdk.CfnResource implements cdk.IInspectable {
  public readonly x: string;
}

export interface CfnApiDestinationProps {
  readonly prop1: string;
}

export declare class CfnConnection extends cdk.CfnResource implements cdk.IInspectable {
  public readonly y: string;
}

export declare namespace CfnConnection {
  interface AuthParametersProperty {
    readonly apiKeyAuthParameters?: ApiKeyAuthParametersProperty;
  }
  interface ApiKeyAuthParametersProperty {
    readonly apiKeyName: string;
    readonly apiKeyValue: string;
  }
}

export interface CfnConnectionProps {
  readonly prop2: string;
}`;

    const result = filterGeneratedModule(generatedDeclaration, ['CfnConnection']);

    // Verify CfnConnection and related declarations are kept
    expect(result).toMatchSnapshot();
    expect(result).toContain('export declare class CfnConnection');
    expect(result).toContain('export interface CfnConnectionProps');
    expect(result).toContain('export declare namespace CfnConnection');
    expect(result).toContain('interface AuthParametersProperty');
    expect(result).toContain('interface ApiKeyAuthParametersProperty');

    // Verify unrelated declarations are removed
    expect(result).not.toContain('CfnApiDestination');
    expect(result).not.toContain('CfnApiDestinationProps');
  });

  test('should handle multiple symbols', () => {
    const generatedDeclaration = `
export declare class CfnRule extends Resource {
  public readonly x: string;
}

export interface CfnRuleProps {
  readonly prop1: string;
}

export declare class CfnConnection extends Resource {
  public readonly y: string;
}

export declare class OtherClass extends Resource {
  public readonly z: string;
}`;

    const result = filterGeneratedModule(generatedDeclaration, ['CfnConnection', 'CfnRule']);

    expect(result).toContain('export declare class CfnConnection');
    expect(result).toContain('export declare class CfnRule');
    expect(result).toContain('export interface CfnRuleProps');
    expect(result).not.toContain('export declare class OtherClass');
  });

  test('should handle empty input', () => {
    const result = filterGeneratedModule('', ['CfnConnection']);
    expect(result).toBe('');
  });

  test('should handle cases where no symbols match', () => {
    const generatedDeclaration = `
export declare class SomeClass {
  public readonly x: string;
}`;

    const result = filterGeneratedModule(generatedDeclaration, ['NonExistentSymbol']);
    expect(result.trim()).toBe('');
  });
});

describe('getClassJsDocs', () => {
  test('should extract JSDoc comments for a class', () => {
    const { tempDir, filePath: sourceFilePath } = createTempFile(`
      /**
       * This is a sample class.
       */
      export class SampleClass {
        /**
         * This is a sample method.
         */
        public sampleMethod() {}
      }
    `);

    const result = getClassJsDocs(sourceFilePath, 'SampleClass');
    expect(result).toContain('This is a sample class.');

    removeTempDir(tempDir);
  });

  test('should throw if class is not found', () => {
    const { tempDir, filePath: sourceFilePath } = createTempFile(`
      export class AnotherClass {}
    `);

    expect(() => getClassJsDocs(sourceFilePath, 'NonExistentClass')).toThrow();

    removeTempDir(tempDir);
  });
});

function createTempFile(contents: string): { filePath: string; tempDir: string } {
  const tempDir = fs.mkdtempSync(path.join(__dirname, 'temp-'));
  const filePath = path.join(tempDir, 'temp.ts');
  fs.writeFileSync(filePath, contents);
  return {
    filePath,
    tempDir,
  };
}
function removeTempDir(tempDir: string): void {
  fs.rmSync(tempDir, { recursive: true, force: true });
}
