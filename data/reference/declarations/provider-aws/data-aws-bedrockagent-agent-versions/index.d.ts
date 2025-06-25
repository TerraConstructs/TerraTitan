/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBedrockagentAgentVersionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrockagent_agent_versions#agent_id DataAwsBedrockagentAgentVersions#agent_id}
    */
    readonly agentId: string;
    /**
    * agent_version_summaries block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrockagent_agent_versions#agent_version_summaries DataAwsBedrockagentAgentVersions#agent_version_summaries}
    */
    readonly agentVersionSummaries?: DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] | cdktf.IResolvable;
}
export interface DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration {
}
export declare function dataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationToTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable): any;
export declare function dataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationToHclTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable): any;
export declare class DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration | cdktf.IResolvable | undefined);
    get guardrailIdentifier(): string;
    get guardrailVersion(): string;
}
export declare class DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationOutputReference;
}
export interface DataAwsBedrockagentAgentVersionsAgentVersionSummaries {
    /**
    * guardrail_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrockagent_agent_versions#guardrail_configuration DataAwsBedrockagentAgentVersions#guardrail_configuration}
    */
    readonly guardrailConfiguration?: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] | cdktf.IResolvable;
}
export declare function dataAwsBedrockagentAgentVersionsAgentVersionSummariesToTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable): any;
export declare function dataAwsBedrockagentAgentVersionsAgentVersionSummariesToHclTerraform(struct?: DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable): any;
export declare class DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsBedrockagentAgentVersionsAgentVersionSummaries | cdktf.IResolvable | undefined);
    get agentName(): string;
    get agentStatus(): string;
    get agentVersion(): string;
    get createdAt(): string;
    get description(): string;
    get updatedAt(): string;
    private _guardrailConfiguration;
    get guardrailConfiguration(): DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfigurationList;
    putGuardrailConfiguration(value: DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] | cdktf.IResolvable): void;
    resetGuardrailConfiguration(): void;
    get guardrailConfigurationInput(): cdktf.IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummariesGuardrailConfiguration[] | undefined;
}
export declare class DataAwsBedrockagentAgentVersionsAgentVersionSummariesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsBedrockagentAgentVersionsAgentVersionSummariesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions}
*/
export declare class DataAwsBedrockagentAgentVersions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_bedrockagent_agent_versions";
    /**
    * Generates CDKTF code for importing a DataAwsBedrockagentAgentVersions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBedrockagentAgentVersions to import
    * @param importFromId The id of the existing DataAwsBedrockagentAgentVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrockagent_agent_versions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBedrockagentAgentVersions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrockagent_agent_versions aws_bedrockagent_agent_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBedrockagentAgentVersionsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBedrockagentAgentVersionsConfig);
    private _agentId?;
    get agentId(): string;
    set agentId(value: string);
    get agentIdInput(): string | undefined;
    private _agentVersionSummaries;
    get agentVersionSummaries(): DataAwsBedrockagentAgentVersionsAgentVersionSummariesList;
    putAgentVersionSummaries(value: DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] | cdktf.IResolvable): void;
    resetAgentVersionSummaries(): void;
    get agentVersionSummariesInput(): cdktf.IResolvable | DataAwsBedrockagentAgentVersionsAgentVersionSummaries[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
