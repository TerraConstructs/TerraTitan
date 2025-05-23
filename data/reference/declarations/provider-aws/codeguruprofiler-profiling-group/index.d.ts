/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeguruprofilerProfilingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group#name CodeguruprofilerProfilingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * agent_orchestration_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group#agent_orchestration_config CodeguruprofilerProfilingGroup#agent_orchestration_config}
    */
    readonly agentOrchestrationConfig?: CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | cdktf.IResolvable;
}
export interface CodeguruprofilerProfilingGroupAgentOrchestrationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group#profiling_enabled CodeguruprofilerProfilingGroup#profiling_enabled}
    */
    readonly profilingEnabled: boolean | cdktf.IResolvable;
}
export declare function codeguruprofilerProfilingGroupAgentOrchestrationConfigToTerraform(struct?: CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable): any;
export declare function codeguruprofilerProfilingGroupAgentOrchestrationConfigToHclTerraform(struct?: CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable): any;
export declare class CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable | undefined;
    set internalValue(value: CodeguruprofilerProfilingGroupAgentOrchestrationConfig | cdktf.IResolvable | undefined);
    private _profilingEnabled?;
    get profilingEnabled(): boolean | cdktf.IResolvable;
    set profilingEnabled(value: boolean | cdktf.IResolvable);
    get profilingEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class CodeguruprofilerProfilingGroupAgentOrchestrationConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}
*/
export declare class CodeguruprofilerProfilingGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codeguruprofiler_profiling_group";
    /**
    * Generates CDKTF code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import
    * @param importFromId The id of the existing CodeguruprofilerProfilingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeguruprofilerProfilingGroupConfig
    */
    constructor(scope: Construct, id: string, config: CodeguruprofilerProfilingGroupConfig);
    get arn(): string;
    private _computePlatform?;
    get computePlatform(): string;
    set computePlatform(value: string);
    resetComputePlatform(): void;
    get computePlatformInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _agentOrchestrationConfig;
    get agentOrchestrationConfig(): CodeguruprofilerProfilingGroupAgentOrchestrationConfigList;
    putAgentOrchestrationConfig(value: CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | cdktf.IResolvable): void;
    resetAgentOrchestrationConfig(): void;
    get agentOrchestrationConfigInput(): cdktf.IResolvable | CodeguruprofilerProfilingGroupAgentOrchestrationConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
