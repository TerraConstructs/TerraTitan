/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodeguruprofilerProfilingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeguruprofiler_profiling_group#name DataAwsCodeguruprofilerProfilingGroup#name}
    */
    readonly name: string;
}
export interface DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig {
}
export declare function dataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigToTerraform(struct?: DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig): any;
export declare function dataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigToHclTerraform(struct?: DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig): any;
export declare class DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig | undefined;
    set internalValue(value: DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig | undefined);
    get profilingEnabled(): cdktf.IResolvable;
}
export declare class DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference;
}
export interface DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile {
}
export declare function dataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileToTerraform(struct?: DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile): any;
export declare function dataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileToHclTerraform(struct?: DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile): any;
export declare class DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile | undefined;
    set internalValue(value: DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile | undefined);
    get period(): string;
    get start(): string;
}
export declare class DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference;
}
export interface DataAwsCodeguruprofilerProfilingGroupProfilingStatus {
}
export declare function dataAwsCodeguruprofilerProfilingGroupProfilingStatusToTerraform(struct?: DataAwsCodeguruprofilerProfilingGroupProfilingStatus): any;
export declare function dataAwsCodeguruprofilerProfilingGroupProfilingStatusToHclTerraform(struct?: DataAwsCodeguruprofilerProfilingGroupProfilingStatus): any;
export declare class DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodeguruprofilerProfilingGroupProfilingStatus | undefined;
    set internalValue(value: DataAwsCodeguruprofilerProfilingGroupProfilingStatus | undefined);
    get latestAgentOrchestratedAt(): string;
    get latestAgentProfileReportedAt(): string;
    private _latestAggregatedProfile;
    get latestAggregatedProfile(): DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList;
}
export declare class DataAwsCodeguruprofilerProfilingGroupProfilingStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}
*/
export declare class DataAwsCodeguruprofilerProfilingGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_codeguruprofiler_profiling_group";
    /**
    * Generates CDKTF code for importing a DataAwsCodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCodeguruprofilerProfilingGroup to import
    * @param importFromId The id of the existing DataAwsCodeguruprofilerProfilingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCodeguruprofilerProfilingGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodeguruprofilerProfilingGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodeguruprofilerProfilingGroupConfig);
    private _agentOrchestrationConfig;
    get agentOrchestrationConfig(): DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList;
    get arn(): string;
    get computePlatform(): string;
    get createdAt(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _profilingStatus;
    get profilingStatus(): DataAwsCodeguruprofilerProfilingGroupProfilingStatusList;
    private _tags;
    get tags(): cdktf.StringMap;
    get updatedAt(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
