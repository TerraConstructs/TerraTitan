import fs from 'node:fs/promises';
import path from 'node:path';
import type { ExposedPrompts } from '../agents/prompts/prompt-template.js';
import { sourceConverter } from '../agents/source-converter/index.js';
import { unitConverter } from '../agents/unit-converter/index.js';
import { ConversionRequestProps } from './types.js';

/**
 * Template variables for dynamic markdown generation
 */
export interface TemplateVariables {
  /**
   * Module mapping from AWS CDK to TerraConstructs
   */
  moduleMap: Record<string, string>;

  /**
   * List of all processed upstream modules
   */
  processedModules: string[];

  /**
   * List of all output modules
   */
  outputModules: string[];

  /**
   * Aggregated conversion statistics
   */
  conversionStats: {
    totalConstructs: number;
    averageConfidence: number;
    totalFiles: number;
    sourceFiles: number;
    testFiles: number;
  };

  /**
   * Module-specific statistics
   */
  moduleStats: Record<
    string,
    {
      sourceFiles: number;
      testFiles: number;
      cdktfMappings: number;
      upstreamModules: string[];
    }
  >;

  /**
   * Last update timestamp
   */
  lastUpdated: string;

  /**
   * Conversion history
   */
  conversionHistory: Array<{
    upstreamModule: string;
    outputModule: string;
    timestamp: string;
  }>;
}

/**
 * Existing context structure for merging
 */
export interface ExistingContext {
  templateVariables?: TemplateVariables;
  outputModules: Record<string, OutputModuleContext>;
  globalOverview?: Record<string, unknown>;
}

/**
 * Context for a specific output module
 */
export interface OutputModuleContext {
  cdktfMappings: Array<{
    upstreamModule: string;
    awsCdkConstruct: string;
    cdktfResources: Array<{
      resource: string;
      confidence: number;
    }>;
  }>;

  upstreamModules: Array<{
    name: string;
    tag: string;
    gitRepo: string;
    localPath: string;
    processedAt: string;
  }>;

  fileInstructions: Array<{
    filePath: string;
    fileType: 'source' | 'test';
    upstreamModule: string;
    awsCdkConstructs: string[];
    cdktfMappings: string[];
    conversionGuidance: string;
    inputRefFiles?: string[];
    outputRefFiles?: string[];
  }>;
}

/**
 * Interface for the context export configuration
 */
export interface ContextExportConfig {
  /**
   * Path to the workspace where context should be exported
   */
  workspacePath: string;

  /**
   * Information about the upstream module being converted
   */
  upstreamModule: {
    name: string;
    tag: string;
    gitRepo: string;
    localPath: string;
  };

  /**
   * CDKTF reference mappings discovered by RAG
   */
  cdktfMappings: Array<{
    awsCdkConstruct: string;
    cdktfResources: Array<{
      resource: string;
      confidence: number;
    }>;
  }>;

  /**
   * Per-file conversion instructions
   */
  fileInstructions: Array<{
    filePath: string;
    fileType: 'source' | 'test';
    awsCdkConstructs: string[];
    cdktfMappings: string[];
    conversionGuidance: string;
    inputRefFiles?: string[];
    outputRefFiles?: string[];
  }>;

  /**
   * Output module name in the workspace
   */
  outputModule: string;
}

/**
 * Exports comprehensive conversion context with multi-module support for Claude Code users
 */
export class ContextExporter {
  private config: ContextExportConfig;
  private contextDir: string;
  private outputModuleDir: string;
  private sharedDir: string;

  constructor(config: ContextExportConfig) {
    this.config = config;
    this.contextDir = path.join(config.workspacePath, '.conversion-context');
    this.outputModuleDir = path.join(this.contextDir, 'output-modules', config.outputModule);
    this.sharedDir = path.join(this.contextDir, 'shared');
  }

  /**
   * Exports all conversion context to the workspace
   */
  async export(): Promise<string> {
    // Create directory structure
    await this.createDirectoryStructure();

    // Load existing context if present
    const existingContext = await this.loadExistingContext();

    // Merge new data with existing
    const mergedContext = await this.mergeWithExisting(existingContext);

    // Export all context components
    await Promise.all([
      this.exportTemplateVariables(mergedContext.templateVariables!),
      this.exportOutputModuleContext(mergedContext.outputModules[this.config.outputModule]!),
      this.exportGlobalOverview(mergedContext),
      this.exportSharedResources(),
      this.renderTemplates(mergedContext.templateVariables!),
    ]);

    return this.contextDir;
  }

  /**
   * Creates the new directory structure
   */
  private async createDirectoryStructure(): Promise<void> {
    await fs.mkdir(this.outputModuleDir, { recursive: true });
    await fs.mkdir(this.sharedDir, { recursive: true });
    await fs.mkdir(path.join(this.sharedDir, 'prompts'), { recursive: true });
    await fs.mkdir(path.join(this.sharedDir, 'reference-docs'), { recursive: true });
    await fs.mkdir(path.join(this.sharedDir, 'examples'), { recursive: true });
    await fs.mkdir(path.join(this.outputModuleDir, 'conversion-guidelines'), { recursive: true });
    await fs.mkdir(path.join(this.outputModuleDir, 'file-instructions'), { recursive: true });
  }

  /**
   * Loads existing context if present
   */
  private async loadExistingContext(): Promise<ExistingContext> {
    const existingContext: ExistingContext = {
      outputModules: {},
    };

    try {
      // Load template variables
      const templateVarsPath = path.join(this.contextDir, 'template-variables.json');
      const templateVarsContent = await fs.readFile(templateVarsPath, 'utf8');
      existingContext.templateVariables = JSON.parse(templateVarsContent);

      // Load global overview
      const overviewPath = path.join(this.contextDir, 'conversion-overview.json');
      const overviewContent = await fs.readFile(overviewPath, 'utf8');
      existingContext.globalOverview = JSON.parse(overviewContent);

      // Load existing output module contexts
      const outputModulesDir = path.join(this.contextDir, 'output-modules');
      const outputModuleDirs = await fs.readdir(outputModulesDir).catch(() => []);

      for (const moduleName of outputModuleDirs) {
        const moduleDir = path.join(outputModulesDir, moduleName);
        const stat = await fs.stat(moduleDir);
        if (stat.isDirectory()) {
          existingContext.outputModules[moduleName] = await this.loadOutputModuleContext(moduleDir);
        }
      }
    } catch {
      // No existing context, start fresh
      console.log('No existing context found, creating new context');
    }

    return existingContext;
  }

  /**
   * Loads context for a specific output module
   */
  private async loadOutputModuleContext(moduleDir: string): Promise<OutputModuleContext> {
    const context: OutputModuleContext = {
      cdktfMappings: [],
      upstreamModules: [],
      fileInstructions: [],
    };

    try {
      const mappingsPath = path.join(moduleDir, 'cdktf-mappings.json');
      const mappingsContent = await fs.readFile(mappingsPath, 'utf8');
      context.cdktfMappings = JSON.parse(mappingsContent);

      const modulesPath = path.join(moduleDir, 'upstream-modules.json');
      const modulesContent = await fs.readFile(modulesPath, 'utf8');
      context.upstreamModules = JSON.parse(modulesContent);

      const instructionsPath = path.join(moduleDir, 'file-instructions.json');
      const instructionsContent = await fs.readFile(instructionsPath, 'utf8');
      context.fileInstructions = JSON.parse(instructionsContent);
    } catch {
      // Module context doesn't exist yet
    }

    return context;
  }

  /**
   * Merges new conversion data with existing context
   */
  private async mergeWithExisting(existingContext: ExistingContext): Promise<ExistingContext> {
    const timestamp = new Date().toISOString();

    // Initialize template variables if not present
    if (!existingContext.templateVariables) {
      existingContext.templateVariables = {
        moduleMap: {},
        processedModules: [],
        outputModules: [],
        conversionStats: {
          totalConstructs: 0,
          averageConfidence: 0,
          totalFiles: 0,
          sourceFiles: 0,
          testFiles: 0,
        },
        moduleStats: {},
        lastUpdated: timestamp,
        conversionHistory: [],
      };
    }

    // Update template variables
    const templateVars = existingContext.templateVariables;

    // Add current module to processed modules
    if (!templateVars.processedModules.includes(this.config.upstreamModule.name)) {
      templateVars.processedModules.push(this.config.upstreamModule.name);
    }

    // Add output module to output modules list
    if (!templateVars.outputModules.includes(this.config.outputModule)) {
      templateVars.outputModules.push(this.config.outputModule);
    }

    // Update module mapping (infer from existing patterns or hardcode known mappings)
    this.updateModuleMapping(templateVars.moduleMap, this.config.upstreamModule.name, this.config.outputModule);

    // Add to conversion history
    templateVars.conversionHistory.push({
      upstreamModule: this.config.upstreamModule.name,
      outputModule: this.config.outputModule,
      timestamp,
    });

    templateVars.lastUpdated = timestamp;

    // Initialize output module context if not present
    if (!existingContext.outputModules[this.config.outputModule]) {
      existingContext.outputModules[this.config.outputModule] = {
        cdktfMappings: [],
        upstreamModules: [],
        fileInstructions: [],
      };
    }

    const outputModuleContext = existingContext.outputModules[this.config.outputModule]!;

    // Merge CDKTF mappings
    for (const mapping of this.config.cdktfMappings) {
      const existingMapping = outputModuleContext.cdktfMappings.find(
        m => m.awsCdkConstruct === mapping.awsCdkConstruct && m.upstreamModule === this.config.upstreamModule.name,
      );

      if (!existingMapping) {
        outputModuleContext.cdktfMappings.push({
          upstreamModule: this.config.upstreamModule.name,
          awsCdkConstruct: mapping.awsCdkConstruct,
          cdktfResources: mapping.cdktfResources,
        });
      }
    }

    // Add upstream module info
    const existingUpstreamModule = outputModuleContext.upstreamModules.find(
      m => m.name === this.config.upstreamModule.name,
    );

    if (!existingUpstreamModule) {
      outputModuleContext.upstreamModules.push({
        ...this.config.upstreamModule,
        processedAt: timestamp,
      });
    } else {
      // Update existing module info
      existingUpstreamModule.processedAt = timestamp;
    }

    // Merge file instructions
    for (const instruction of this.config.fileInstructions) {
      const existingInstruction = outputModuleContext.fileInstructions.find(i => i.filePath === instruction.filePath);

      if (!existingInstruction) {
        outputModuleContext.fileInstructions.push({
          ...instruction,
          upstreamModule: this.config.upstreamModule.name,
        });
      }
    }

    // Update aggregated statistics
    this.updateAggregatedStats(templateVars, existingContext.outputModules);

    return existingContext;
  }

  /**
   * Updates module mapping with known patterns
   */
  private updateModuleMapping(moduleMap: Record<string, string>, upstreamModule: string, outputModule: string): void {
    // Known module mappings
    const knownMappings: Record<string, string> = {
      'aws-kms': 'encryption',
      'aws-cloudwatch': 'cloudwatch',
      'aws-iam': 'iam',
      'aws-ssm': 'storage',
      'aws-s3': 'storage',
      'aws-dynamodb': 'storage',
      'aws-rds': 'storage',
      'aws-sqs': 'notify',
      'aws-sns': 'notify',
      'aws-ec2': 'compute',
      'aws-lambda': 'compute',
      'aws-ecs': 'compute',
    };

    moduleMap[upstreamModule] = knownMappings[upstreamModule] || outputModule;
  }

  /**
   * Updates aggregated statistics across all modules
   */
  private updateAggregatedStats(
    templateVars: TemplateVariables,
    outputModules: Record<string, OutputModuleContext>,
  ): void {
    let totalFiles = 0;
    let sourceFiles = 0;
    let testFiles = 0;
    let totalConstructs = 0;
    let totalConfidence = 0;
    let mappingCount = 0;

    // Reset module stats
    templateVars.moduleStats = {};

    for (const [moduleName, moduleContext] of Object.entries(outputModules)) {
      const moduleSourceFiles = moduleContext.fileInstructions.filter(f => f.fileType === 'source').length;
      const moduleTestFiles = moduleContext.fileInstructions.filter(f => f.fileType === 'test').length;
      const moduleMappings = moduleContext.cdktfMappings.length;

      templateVars.moduleStats[moduleName] = {
        sourceFiles: moduleSourceFiles,
        testFiles: moduleTestFiles,
        cdktfMappings: moduleMappings,
        upstreamModules: moduleContext.upstreamModules.map(m => m.name),
      };

      totalFiles += moduleSourceFiles + moduleTestFiles;
      sourceFiles += moduleSourceFiles;
      testFiles += moduleTestFiles;
      totalConstructs += moduleMappings;

      // Calculate average confidence
      for (const mapping of moduleContext.cdktfMappings) {
        for (const resource of mapping.cdktfResources) {
          totalConfidence += resource.confidence;
          mappingCount++;
        }
      }
    }

    templateVars.conversionStats = {
      totalConstructs,
      averageConfidence: mappingCount > 0 ? totalConfidence / mappingCount : 0,
      totalFiles,
      sourceFiles,
      testFiles,
    };
  }

  /**
   * Exports template variables to JSON
   */
  private async exportTemplateVariables(templateVars: TemplateVariables): Promise<void> {
    await fs.writeFile(path.join(this.contextDir, 'template-variables.json'), JSON.stringify(templateVars, null, 2));
  }

  /**
   * Exports output module specific context
   */
  private async exportOutputModuleContext(moduleContext: OutputModuleContext): Promise<void> {
    // Export CDKTF mappings
    await fs.writeFile(
      path.join(this.outputModuleDir, 'cdktf-mappings.json'),
      JSON.stringify(moduleContext.cdktfMappings, null, 2),
    );

    // Export upstream modules
    await fs.writeFile(
      path.join(this.outputModuleDir, 'upstream-modules.json'),
      JSON.stringify(moduleContext.upstreamModules, null, 2),
    );

    // Export file instructions as JSON (to be used by templates)
    await fs.writeFile(
      path.join(this.outputModuleDir, 'file-instructions.json'),
      JSON.stringify(moduleContext.fileInstructions, null, 2),
    );

    // Create file instructions organized by upstream module
    const instructionsByModule: Record<string, { source: unknown[]; test: unknown[] }> = {};

    for (const instruction of moduleContext.fileInstructions) {
      if (!instructionsByModule[instruction.upstreamModule]) {
        instructionsByModule[instruction.upstreamModule] = { source: [], test: [] };
      }
      instructionsByModule[instruction.upstreamModule]![instruction.fileType].push(instruction);
    }

    // Create instruction files by module
    for (const [moduleName, instructions] of Object.entries(instructionsByModule)) {
      const moduleInstructionsDir = path.join(this.outputModuleDir, 'file-instructions', moduleName);
      await fs.mkdir(moduleInstructionsDir, { recursive: true });

      if (instructions?.source?.length > 0) {
        await fs.writeFile(
          path.join(moduleInstructionsDir, 'source-files.json'),
          JSON.stringify(instructions.source, null, 2),
        );
      }

      if (instructions?.test?.length > 0) {
        await fs.writeFile(
          path.join(moduleInstructionsDir, 'test-files.json'),
          JSON.stringify(instructions.test, null, 2),
        );
      }
    }

    // Export individual file prompts for Claude Code reference
    await this.exportFileSpecificPrompts(moduleContext);
  }

  /**
   * Exports global overview across all output modules
   */
  private async exportGlobalOverview(context: ExistingContext): Promise<void> {
    const overview = {
      project: {
        name: 'Multi-Module AWS CDK to TerraConstructs Conversion',
        // This directory contains comprehensive context for completing AWS CDK to TerraConstructs conversions using Claude Code.
        description: 'Converting AWS CDK constructs to TerraConstructs using CDKTF',
        outputModules: context.templateVariables!.outputModules,
        processedModules: context.templateVariables!.processedModules,
      },
      stats: context.templateVariables!.conversionStats,
      moduleBreakdown: context.templateVariables!.moduleStats,
      metadata: {
        generatedAt: context.templateVariables!.lastUpdated,
        workspacePath: this.config.workspacePath,
        contextVersion: '2.0.0',
      },
      conversionHistory: context.templateVariables!.conversionHistory,
    };

    await fs.writeFile(path.join(this.contextDir, 'conversion-overview.json'), JSON.stringify(overview, null, 2));
  }

  /**
   * Exports shared resources (prompts, examples, etc.)
   */
  private async exportSharedResources(): Promise<void> {
    // Export prompts (only if not already present)
    const promptsDir = path.join(this.sharedDir, 'prompts');
    const sourcePromptsDir = path.join(promptsDir, 'source-converter');
    const unitPromptsDir = path.join(promptsDir, 'unit-converter');

    await fs.mkdir(sourcePromptsDir, { recursive: true });
    await fs.mkdir(unitPromptsDir, { recursive: true });

    // Check if prompts already exist
    try {
      await fs.access(path.join(sourcePromptsDir, 'base-instructions.md'));
      // Prompts already exist, skip
    } catch {
      // Export base template instructions without file-specific content
      await this.exportBasePromptTemplates(sourcePromptsDir, unitPromptsDir);
    }

    // Create placeholder for reference docs and examples
    await this.createPlaceholders();
  }

  /**
   * Renders markdown templates using template variables
   */
  private async renderTemplates(templateVars: TemplateVariables): Promise<void> {
    // Render README for the output module
    const readme = this.renderReadmeTemplate(templateVars);
    await fs.writeFile(path.join(this.outputModuleDir, 'README.md'), readme);

    // Render conversion guidelines
    await this.renderConversionGuidelines(templateVars);
  }

  /**
   * Renders the README template
   */
  private renderReadmeTemplate(templateVars: TemplateVariables): string {
    const moduleList = templateVars.moduleStats[this.config.outputModule]?.upstreamModules || [];

    return `# TerraTitan Conversion Context - ${this.config.outputModule.charAt(0).toUpperCase() + this.config.outputModule.slice(1)} Module

This directory contains conversion context for the **${this.config.outputModule}** output module, covering the following AWS CDK modules:

${moduleList.map(module => `- **${module}**`).join('\n')}

## Quick Start

1. **Review CDKTF mappings**: \`cdktf-mappings.json\` - ${templateVars.moduleStats[this.config.outputModule]?.cdktfMappings || 0} discovered construct mappings
2. **Check file instructions**: \`file-instructions/\` - Per-file conversion guidance organized by upstream module
3. **Reference conversion guidelines**: \`conversion-guidelines/\` - Module-specific patterns and rules
4. **Use shared prompts**: \`../../shared/prompts/\` - Converter agent prompts

## Module Statistics

- **Upstream Modules**: ${moduleList.length}
- **Source Files**: ${templateVars.moduleStats[this.config.outputModule]?.sourceFiles || 0}
- **Test Files**: ${templateVars.moduleStats[this.config.outputModule]?.testFiles || 0}
- **CDKTF Mappings**: ${templateVars.moduleStats[this.config.outputModule]?.cdktfMappings || 0}

## Module Mappings

${Object.entries(templateVars.moduleMap)
  .filter(([module]) => moduleList.includes(module))
  .map(([awsModule, terraModule]) => `- \`${awsModule}\` → \`${terraModule}\``)
  .join('\n')}

## Conversion Guidelines

### TerraConstructs Patterns
- Extend \`AwsConstructBase\` class where AWS CDK extends Resource
- Constructor Props must extend \`AwsConstructProps\` Interface
- Implement the abstract \`outputs\` getter for primitive AWS CDK Construct Interface attributes
- Use \`AwsStack\` utility attributes to match AWS CDK Stack behaviour

### Field Naming
- Terraform uses \`snake_case\` field names, not \`TitleCase\`
- Pay attention to resource naming differences between AWS CDK and TerraConstructs

### Testing
- Use \`Template\` constructor instead of \`Template.fromStack()\`
- Import \`"cdktf/lib/testing/adapters/jest"\` for CDKTF Testing adapters
- Use \`expect.toHaveResourceWithProperties\` instead of \`hasResourceProperties\`
- Use Jest's \`toMatchObject\` Matcher instead of \`templateMatches()\`

## Usage with Claude Code

1. **Start with file instructions**: Check module-specific subdirectories in \`file-instructions/\`
2. **Reference CDKTF mappings**: Use \`cdktf-mappings.json\` for construct relationships
3. **Follow conversion patterns**: Apply guidelines specific to ${this.config.outputModule} modules
4. **Cross-reference modules**: Understand relationships between ${moduleList.join(', ')} constructs

## Global Context

This is part of a larger conversion project. See \`../../conversion-overview.json\` for global statistics across all output modules.

- **Total Processed Modules**: ${templateVars.processedModules.length}
- **Total Output Modules**: ${templateVars.outputModules.length}
- **Average Confidence**: ${(templateVars.conversionStats.averageConfidence * 100).toFixed(1)}%

## Generated Context

This context was generated from the TerraTitan vNext conversion workflow.

- **Last Updated**: ${new Date(templateVars.lastUpdated).toLocaleString()}
- **Upstream Modules**: ${moduleList.join(', ')}
- **Output Module**: ${this.config.outputModule}
`;
  }

  /**
   * Renders conversion guidelines with dynamic content
   */
  private async renderConversionGuidelines(templateVars: TemplateVariables): Promise<void> {
    const guidelinesDir = path.join(this.outputModuleDir, 'conversion-guidelines');

    const moduleList = templateVars.moduleStats[this.config.outputModule]?.upstreamModules || [];
    const moduleExamples = moduleList
      .map(module => {
        const terraModule = templateVars.moduleMap[module] || this.config.outputModule;
        return `- \`${module}\` → \`${terraModule}\``;
      })
      .join('\n');

    const sourceGuide = `# Source Code Conversion Guidelines - ${this.config.outputModule.charAt(0).toUpperCase() + this.config.outputModule.slice(1)} Module

## Module-Specific Patterns

This guide covers conversion patterns for ${moduleList.length} AWS CDK modules:

${moduleExamples}

## TerraConstructs Patterns

### Class Structure
- Extend \`AwsConstructBase\` class where AWS CDK extends Resource
- Constructor Props must extend \`AwsConstructProps\` Interface
- Implement the abstract \`outputs\` getter for primitive AWS CDK Construct Interface attributes

### Stack Integration
- Use \`AwsStack\` utility attributes to closely match AWS CDK Stack behaviour
- Access stack context through \`this.stack\` property

### Multi-Resource Constructs
- AWS CDK Resources requiring multiple provider AWS resources must configure and create those resources transparently
- Use composition to create related resources (security groups, IAM roles, etc.)

### Context Providers
- Highlight ContextProvider usage as pending implementation with comments
- Do NOT implement ContextProvider Lookups in initial conversion

## Module-Specific Import Mappings

${Object.entries(templateVars.moduleMap)
  .filter(([module]) => moduleList.includes(module))
  .map(([awsModule, terraModule]) => `| ${awsModule} | ${terraModule} |`)
  .join('\n')}

## Field Naming Conventions

- AWS CDK: \`PascalCase\` properties
- Terraform: \`snake_case\` resource fields
- TerraConstructs: Bridge between both, follow TypeScript interface definitions

## Cross-Module Considerations

When working with multiple modules in the ${this.config.outputModule} context:

${moduleList.map(module => `- **${module}**: Consider relationships with other ${this.config.outputModule} constructs`).join('\n')}
`;

    await fs.writeFile(path.join(guidelinesDir, 'source-conversion-guide.md'), sourceGuide);

    // Similar pattern for test guide
    const testGuide = `# Unit Test Conversion Guidelines - ${this.config.outputModule.charAt(0).toUpperCase() + this.config.outputModule.slice(1)} Module

## Testing Framework Changes

### Template Creation
- **AWS CDK**: \`Template.fromStack(stack)\`
- **TerraConstructs**: \`new Template(stack)\`

### Import Requirements
\`\`\`typescript
import "cdktf/lib/testing/adapters/jest";
\`\`\`

### Module-Specific Testing Patterns

This guide covers testing patterns for:
${moduleList.map(module => `- ${module}`).join('\n')}

## Field Naming in Tests

### Resource Properties
- Use \`snake_case\` for Terraform resource field names
- Example: \`instance_type\` not \`InstanceType\`

## Cross-Module Test Considerations

When testing ${this.config.outputModule} constructs that span multiple modules:
- Verify resource relationships between modules
- Test cross-module dependencies
- Ensure consistent naming patterns

## Generated: ${new Date(templateVars.lastUpdated).toLocaleString()}
`;

    await fs.writeFile(path.join(guidelinesDir, 'test-conversion-guide.md'), testGuide);
  }

  /**
   * Exports file-specific prompts for Claude Code reference
   */
  private async exportFileSpecificPrompts(moduleContext: OutputModuleContext): Promise<void> {
    const promptsDir = path.join(this.outputModuleDir, 'file-specific-prompts');
    await fs.mkdir(promptsDir, { recursive: true });

    for (const instruction of moduleContext.fileInstructions) {
      if (!instruction.inputRefFiles || !instruction.outputRefFiles || instruction.outputRefFiles.length === 0) {
        console.log(`Skipping prompt generation for ${instruction.filePath}: missing reference files`);
        continue;
      }

      try {
        const conversionType = instruction.fileType === 'source' ? 'SOURCE' : 'UNIT';
        const props: ConversionRequestProps = {
          inputFile: instruction.filePath,
          inputRefFiles: instruction.inputRefFiles,
          outputRefFiles: instruction.outputRefFiles,
        };

        // Import ConversionRequest and ConversionType
        const { ConversionRequest } = await import('./request.js');
        const { ConversionType } = await import('./types.js');

        const request = new ConversionRequest(
          conversionType === 'SOURCE' ? ConversionType.SOURCE : ConversionType.UNIT,
          props,
        );

        // Generate the exact same prompt that would be used in conversion
        const converter = conversionType === 'SOURCE' ? sourceConverter : unitConverter;
        const prompts = converter.getPrompts(props);

        // Create a safe filename
        const fileName = path.basename(instruction.filePath, path.extname(instruction.filePath));
        const fileDir = path.join(promptsDir, instruction.upstreamModule, instruction.fileType);
        await fs.mkdir(fileDir, { recursive: true });

        // Export the complete prompt information
        const promptData = {
          metadata: {
            filePath: instruction.filePath,
            fileType: instruction.fileType,
            upstreamModule: instruction.upstreamModule,
            awsCdkConstructs: instruction.awsCdkConstructs,
            cdktfMappings: instruction.cdktfMappings,
            conversionRequestUsed: props,
          },
          inputCode: request.input,
          inputReferences: request.inputRef,
          outputReferences: request.outputRefs,
          fullPrompt: prompts.newPrompt,
          instructions: prompts.instructions,
          samples: prompts.samples,
          referenceFileTypes: {
            inputRefFiles: instruction.inputRefFiles.map(f => path.extname(f)),
            outputRefFiles: instruction.outputRefFiles.map(f => path.extname(f)),
            isSourceConversion: instruction.fileType === 'source',
            usesMergedDocs: instruction.fileType === 'source', // Source uses merged TS+markdown
            usesMarkdownHcl: instruction.fileType === 'test', // Unit tests use raw markdown HCL
          },
        };

        await fs.writeFile(path.join(fileDir, `${fileName}-prompt.json`), JSON.stringify(promptData, null, 2));

        // Also save the markdown prompt for easy reading
        await fs.writeFile(path.join(fileDir, `${fileName}-prompt.md`), prompts.newPrompt);

        console.log(
          `✅ Exported prompt for ${instruction.fileType} file: ${path.relative(process.cwd(), instruction.filePath)}`,
        );
      } catch (error) {
        console.warn(`Failed to generate prompt for ${instruction.filePath}:`, error);
        // Continue with other files
      }
    }
  }

  /**
   * Exports prompts for a specific agent (reused from original)
   */
  private async exportAgentPrompts(dir: string, type: string, prompts: ExposedPrompts): Promise<void> {
    await fs.writeFile(path.join(dir, 'instructions.md'), prompts.instructions);

    const templateInfo = `# ${type.charAt(0).toUpperCase() + type.slice(1)} Converter Prompts

## Model Information
- **Model Type**: ${prompts.metadata.modelType}
- **Conversion Type**: ${prompts.metadata.conversionType}
- **Template Class**: ${prompts.metadata.templateClass}

## Template Optimization
This template is optimized for ${prompts.metadata.modelType === 'claude' ? 'Claude models using XML tags' : 'Gemini models using markdown formatting'}.

## Usage in Claude Code
These are the exact prompts used by the TerraTitan automated conversion workflow. You can reference these patterns when manually completing or refining conversions.
`;

    await fs.writeFile(path.join(dir, `${prompts.metadata.modelType}-template.md`), templateInfo);

    const samplesDir = path.join(dir, 'sample-prompts');
    await fs.mkdir(samplesDir, { recursive: true });

    for (let i = 0; i < prompts.samples.length; i++) {
      const sample = prompts.samples[i];
      if (sample) {
        await fs.writeFile(path.join(samplesDir, `sample-${i + 1}-input.md`), sample.input);
        await fs.writeFile(path.join(samplesDir, `sample-${i + 1}-response.md`), sample.response);
      }
    }

    await fs.writeFile(path.join(dir, 'new-prompt-template.md'), prompts.newPrompt);
  }

  /**
   * Exports base prompt templates without file-specific content
   */
  private async exportBasePromptTemplates(sourcePromptsDir: string, unitPromptsDir: string): Promise<void> {
    // Export template instructions (these are static)
    const sourceTemplate = sourceConverter.getPromptTemplate();
    const unitTemplate = unitConverter.getPromptTemplate();

    // Export base instructions
    await fs.writeFile(path.join(sourcePromptsDir, 'base-instructions.md'), sourceTemplate.generateInstructions());

    await fs.writeFile(path.join(unitPromptsDir, 'base-instructions.md'), unitTemplate.generateInstructions());

    // Export template info
    const sourceMetadata = sourceConverter.getMetadata();
    const unitMetadata = unitConverter.getMetadata();

    await fs.writeFile(path.join(sourcePromptsDir, 'template-info.json'), JSON.stringify(sourceMetadata, null, 2));

    await fs.writeFile(path.join(unitPromptsDir, 'template-info.json'), JSON.stringify(unitMetadata, null, 2));

    // Create explanation of file-specific prompts
    const promptExplanation = `# Converter Prompts

## Base Templates
- \`base-instructions.md\` - The core conversion instructions used by the workflow
- \`template-info.json\` - Metadata about the prompt template and model used

## File-Specific Prompts
The actual prompts used for each file conversion are stored in the \`file-instructions/\` directory.
Each file has its own prompt that includes:

1. **File-specific input code** - The actual AWS CDK source being converted
2. **File-specific input references** - Relevant AWS CDK type declarations for that file
3. **File-specific output references** - Relevant CDKTF type declarations and documentation

These prompts show exactly what context was provided to the AI for each specific file conversion,
making it easy for Claude Code users to understand the conversion process and continue the work.

## Template Types
- **Claude templates**: Use XML tags for better structure
- **Gemini templates**: Use markdown formatting
- The workflow automatically selects the appropriate template based on the model being used

## Usage Note
To see the actual prompts used for specific files, check the individual file instruction JSON files
in the output module's \`file-instructions/\` directory. Each file contains the exact prompt
that was generated for that specific conversion.
`;

    await fs.writeFile(path.join(sourcePromptsDir, 'README.md'), promptExplanation);
    await fs.writeFile(path.join(unitPromptsDir, 'README.md'), promptExplanation);
  }

  /**
   * Creates placeholders for reference docs and examples
   */
  private async createPlaceholders(): Promise<void> {
    const refDir = path.join(this.sharedDir, 'reference-docs');
    const examplesDir = path.join(this.sharedDir, 'examples');

    const refPlaceholder = `# Reference Documentation

This directory contains merged CDKTF documentation from all workflow runs.

Files are accumulated from:
- \`data/reference/merged/provider-aws/\`

Each file contains TypeScript declarations merged with Terraform provider documentation.
`;

    const examplesPlaceholder = `# Conversion Examples

This directory contains working conversion samples from all workflow runs.

Files are accumulated from:
- \`data/samples/\`

These samples are used for few-shot learning in the conversion agents.
`;

    await fs.writeFile(path.join(refDir, 'README.md'), refPlaceholder);
    await fs.writeFile(path.join(examplesDir, 'README.md'), examplesPlaceholder);
  }
}
