import path from 'path';
import { expect, test, describe } from 'vitest';
import { MergeDocs } from './merge-docs.js';

/**
 * TempConfig
 *
 * filePath: temp/index.d.ts
 */
const simpleDeclaration = `export interface TempConfig extends cdktf.TerraformMetaArguments {
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temp/docs/resources/temp#foo Temp#foo}
   */
  foo: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temp/docs/resources/temp#bar Temp#bar}
   */
  bar?: string;
}`;

/**
 * TempConfig with nested TempConfigBaz
 *
 * filePath: temp/index.d.ts
 */
const nestedDeclaration = `export interface TempConfig extends cdktf.TerraformMetaArguments {
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temp/docs/resources/temp#foo Temp#foo}
   */
  foo: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temp/docs/resources/temp#bar Temp#bar}
   */
  bar?: string;
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temp/docs/resources/temp#bar Temp#baz}
   */
  baz?: TempConfigBaz;
}
export interface TempConfigBaz {
  /**
   * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temp/docs/resources/temp#qux Temp#qux}
   */
  readonly qux?: boolean | cdktf.IResolvable;
}`;

const fixturesDir = path.join(__dirname, 'fixtures');
describe('MergeDocs', () => {
  describe('Unit Tests', () => {
    test('should throw if Argument Section is missing', () => {
      const mergeDocs = MergeDocs.fromContent(simpleDeclaration, 'Invalid markdown content');
      expect(() => mergeDocs.process()).toThrowError(/No 'Argument Reference' section found/);
    });
    test('Should handle simple lists', () => {
      // this MDAST has a single list
      const mergeDocs = MergeDocs.fromContent(
        simpleDeclaration,
        [
          '## Example Usage',
          '<!-- This is ignored -->',
          '',
          '## Argument Reference',
          '',
          'This resource supports the following arguments:',
          '',
          '* `foo` - (Required) Foo description.',
          '* `bar` - (Optional) Bar description.',
        ].join('\n'),
      );
      const result = mergeDocs.process().fullText;
      expect(result).toMatchInlineSnapshot(`
        "export interface TempConfig extends cdktf.TerraformMetaArguments {
          /** (Required) Foo description. */
            foo: string;
          /** (Optional) Bar description. */
            bar?: string;
        }"
      `);
    });
    test('Should handle split lists', () => {
      // this MDAST has seprate paragraphs with lists
      const mergeDocs = MergeDocs.fromContent(
        simpleDeclaration,
        [
          '## Example Usage',
          '<!-- This is ignored -->\n',
          '## Argument Reference\n',
          'This resource supports the following arguments:\n',
          'The following arguments are required:\n',
          '* `foo` - (Required) Foo description.\n',
          'The following arguments are optional:\n',
          '* `bar` - (Optional) Bar description.',
        ].join('\n'),
      );
      const result = mergeDocs.process().fullText;
      expect(result).toMatchInlineSnapshot(`
        "export interface TempConfig extends cdktf.TerraformMetaArguments {
          /** (Required) Foo description. The following arguments are optional: */
            foo: string;
          /** (Optional) Bar description. */
            bar?: string;
        }"
      `);
    });
    test('Should handle nested attribute blocks', () => {
      const mergeDocs = MergeDocs.fromContent(
        nestedDeclaration,
        [
          '## Example Usage',
          '<!-- This is ignored -->\n',
          '## Argument Reference\n',
          'This resource supports the following arguments:\n',
          '* `foo` - (Required) Foo description.',
          '* `bar` - (Optional) Bar description.',
          '* `baz` - (Optional) Nested block describing baz property. The structure of this block is described below.\n',
          'Nested `baz` blocks have the following structure:\n',
          '* `qux` - (Required) Qux description.',
        ].join('\n'),
      );
      const result = mergeDocs.process().fullText;
      expect(result).toMatchInlineSnapshot(`
        "export interface TempConfig extends cdktf.TerraformMetaArguments {
          /** (Required) Foo description. */
            foo: string;
          /** (Optional) Bar description. */
            bar?: string;
          /** (Optional) Nested block describing baz property. The structure of this block is described below. */
            baz?: TempConfigBaz;
        }
        export interface TempConfigBaz {
          /** (Required) Qux description. */
            readonly qux?: boolean | cdktf.IResolvable;
        }"
      `);
    });
  });

  describe('snapshot tests', () => {
    test('should merge declaration and markdown files', () => {
      const mergeDocs = MergeDocs.fromProps({
        markdownPath: path.join(fixturesDir, 'docs', 'cloudwatch_event_bus.html.markdown'),
        declarationPath: path.join(fixturesDir, 'declarations', 'cloudwatch-event-bus', 'index.d.ts'),
      });
      expect(mergeDocs.process().fullText).toMatchSnapshot();
    });
    test('should merge declaration and markdown with subsections', () => {
      const mergeDocs = MergeDocs.fromProps({
        markdownPath: path.join(fixturesDir, 'docs', 'ami.html.markdown'),
        declarationPath: path.join(fixturesDir, 'declarations', 'ami', 'index.d.ts'),
      });
      expect(mergeDocs.process().fullText).toMatchSnapshot();
    });
    // TODO: Fall back to LLM on failure?
    // test('should merge declaration and markdown with nested argument subsections', () => {
    //   const mergeDocs = MergeDocs.fromProps({
    //     markdownPath: path.join(fixturesDir, 'docs', 'rds_cluster.html.markdown'),
    //     declarationPath: path.join(fixturesDir, 'declarations', 'rds-cluster', 'index.d.ts'),
    //   });
    //   expect(mergeDocs.process().fullText).toMatchSnapshot();
    // });
  });

  describe('process2 test', () => {
    test('cloudwatch_event_bus', () => {
      const mergeDocs = MergeDocs.fromProps({
        markdownPath: path.join(fixturesDir, 'docs', 'cloudwatch_event_bus.html.markdown'),
        declarationPath: path.join(fixturesDir, 'declarations', 'cloudwatch-event-bus', 'index.d.ts'),
      });
      expect(mergeDocs.process2().fullText).toMatchSnapshot();
    });
    test('ami', () => {
      const mergeDocs = MergeDocs.fromProps({
        markdownPath: path.join(fixturesDir, 'docs', 'ami.html.markdown'),
        declarationPath: path.join(fixturesDir, 'declarations', 'ami', 'index.d.ts'),
      });
      expect(mergeDocs.process2().fullText).toMatchSnapshot();
    });
    test('rds_cluster', () => {
      const mergeDocs = MergeDocs.fromProps({
        markdownPath: path.join(fixturesDir, 'docs', 'rds_cluster.html.markdown'),
        declarationPath: path.join(fixturesDir, 'declarations', 'rds-cluster', 'index.d.ts'),
      });
      expect(mergeDocs.process2().fullText).toMatchSnapshot();
    });
    test('appautoscaling_policy', () => {
      const mergeDocs = MergeDocs.fromProps({
        markdownPath: path.join(fixturesDir, 'docs', 'appautoscaling_policy.html.markdown'),
        declarationPath: path.join(fixturesDir, 'declarations', 'appautoscaling-policy', 'index.d.ts'),
      });
      expect(mergeDocs.process2().fullText).toMatchSnapshot();
    });
  });
});
