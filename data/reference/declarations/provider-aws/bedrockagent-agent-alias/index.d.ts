/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentAgentAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#agent_alias_name BedrockagentAgentAlias#agent_alias_name}
    */
    readonly agentAliasName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#agent_id BedrockagentAgentAlias#agent_id}
    */
    readonly agentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#description BedrockagentAgentAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#routing_configuration BedrockagentAgentAlias#routing_configuration}
    */
    readonly routingConfiguration?: BedrockagentAgentAliasRoutingConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#tags BedrockagentAgentAlias#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#timeouts BedrockagentAgentAlias#timeouts}
    */
    readonly timeouts?: BedrockagentAgentAliasTimeouts;
}
export interface BedrockagentAgentAliasRoutingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#agent_version BedrockagentAgentAlias#agent_version}
    */
    readonly agentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#provisioned_throughput BedrockagentAgentAlias#provisioned_throughput}
    */
    readonly provisionedThroughput?: string;
}
export declare function bedrockagentAgentAliasRoutingConfigurationToTerraform(struct?: BedrockagentAgentAliasRoutingConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentAgentAliasRoutingConfigurationToHclTerraform(struct?: BedrockagentAgentAliasRoutingConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentAgentAliasRoutingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentAgentAliasRoutingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentAliasRoutingConfiguration | cdktf.IResolvable | undefined);
    private _agentVersion?;
    get agentVersion(): string;
    set agentVersion(value: string);
    resetAgentVersion(): void;
    get agentVersionInput(): string | undefined;
    private _provisionedThroughput?;
    get provisionedThroughput(): string;
    set provisionedThroughput(value: string);
    resetProvisionedThroughput(): void;
    get provisionedThroughputInput(): string | undefined;
}
export declare class BedrockagentAgentAliasRoutingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentAgentAliasRoutingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentAgentAliasRoutingConfigurationOutputReference;
}
export interface BedrockagentAgentAliasTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#create BedrockagentAgentAlias#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#delete BedrockagentAgentAlias#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#update BedrockagentAgentAlias#update}
    */
    readonly update?: string;
}
export declare function bedrockagentAgentAliasTimeoutsToTerraform(struct?: BedrockagentAgentAliasTimeouts | cdktf.IResolvable): any;
export declare function bedrockagentAgentAliasTimeoutsToHclTerraform(struct?: BedrockagentAgentAliasTimeouts | cdktf.IResolvable): any;
export declare class BedrockagentAgentAliasTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockagentAgentAliasTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentAgentAliasTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias aws_bedrockagent_agent_alias}
*/
export declare class BedrockagentAgentAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_agent_alias";
    /**
    * Generates CDKTF code for importing a BedrockagentAgentAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentAgentAlias to import
    * @param importFromId The id of the existing BedrockagentAgentAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentAgentAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_agent_alias aws_bedrockagent_agent_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentAgentAliasConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentAgentAliasConfig);
    get agentAliasArn(): string;
    get agentAliasId(): string;
    private _agentAliasName?;
    get agentAliasName(): string;
    set agentAliasName(value: string);
    get agentAliasNameInput(): string | undefined;
    private _agentId?;
    get agentId(): string;
    set agentId(value: string);
    get agentIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _routingConfiguration;
    get routingConfiguration(): BedrockagentAgentAliasRoutingConfigurationList;
    putRoutingConfiguration(value: BedrockagentAgentAliasRoutingConfiguration[] | cdktf.IResolvable): void;
    resetRoutingConfiguration(): void;
    get routingConfigurationInput(): cdktf.IResolvable | BedrockagentAgentAliasRoutingConfiguration[] | undefined;
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
    private _timeouts;
    get timeouts(): BedrockagentAgentAliasTimeoutsOutputReference;
    putTimeouts(value: BedrockagentAgentAliasTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockagentAgentAliasTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
