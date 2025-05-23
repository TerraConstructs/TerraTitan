import { App, TerraformStack } from "../../lib";
import { IConstruct, Construct } from "constructs";
export interface IScopeCallback {
    (scope: Construct): void;
}
export interface TestingAppConfig {
    readonly outdir?: string;
    readonly stackTraces?: boolean;
    readonly stubVersion?: boolean;
    readonly enableFutureFlags?: boolean;
    readonly fakeCdktfJsonPath?: boolean;
}
/**
 * Testing utilities for cdktf applications.
 */
export declare class Testing {
    /**
     * Returns an app for testing with the following properties:
     * - Output directory is a temp dir.
     */
    static app(options?: TestingAppConfig): App;
    static stubVersion(app: App): App;
    static fakeCdktfJsonPath(app: App): App;
    static enableFutureFlags(app: App): App;
    static synthScope(fn: IScopeCallback): string;
    /**
     * Returns the Terraform synthesized JSON.
     */
    static synth(stack: TerraformStack, runValidations?: boolean): string;
    static fullSynth(stack: TerraformStack): string;
    static renderConstructTree(construct: IConstruct): string;
    static toHaveDataSourceWithProperties(received: string, resourceType: string, properties?: Record<string, any>): boolean;
    static toHaveDataSource(received: string, resourceType: string): boolean;
    static toHaveResourceWithProperties(received: string, resourceType: string, properties?: Record<string, any>): boolean;
    static toHaveResource(received: string, resourceType: string): boolean;
    static toHaveProviderWithProperties(received: string, resourceType: string, properties?: Record<string, any>): boolean;
    static toHaveProvider(received: string, resourceType: string): boolean;
    static toBeValidTerraform(received: string): boolean;
    static setupJest(): void;
}
