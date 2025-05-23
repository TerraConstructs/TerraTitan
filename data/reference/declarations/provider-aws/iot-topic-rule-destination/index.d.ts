/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotTopicRuleDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#enabled IotTopicRuleDestination#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#id IotTopicRuleDestination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#timeouts IotTopicRuleDestination#timeouts}
    */
    readonly timeouts?: IotTopicRuleDestinationTimeouts;
    /**
    * vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#vpc_configuration IotTopicRuleDestination#vpc_configuration}
    */
    readonly vpcConfiguration: IotTopicRuleDestinationVpcConfiguration;
}
export interface IotTopicRuleDestinationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#create IotTopicRuleDestination#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#delete IotTopicRuleDestination#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#update IotTopicRuleDestination#update}
    */
    readonly update?: string;
}
export declare function iotTopicRuleDestinationTimeoutsToTerraform(struct?: IotTopicRuleDestinationTimeouts | cdktf.IResolvable): any;
export declare function iotTopicRuleDestinationTimeoutsToHclTerraform(struct?: IotTopicRuleDestinationTimeouts | cdktf.IResolvable): any;
export declare class IotTopicRuleDestinationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleDestinationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleDestinationTimeouts | cdktf.IResolvable | undefined);
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
export interface IotTopicRuleDestinationVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}
    */
    readonly vpcId: string;
}
export declare function iotTopicRuleDestinationVpcConfigurationToTerraform(struct?: IotTopicRuleDestinationVpcConfigurationOutputReference | IotTopicRuleDestinationVpcConfiguration): any;
export declare function iotTopicRuleDestinationVpcConfigurationToHclTerraform(struct?: IotTopicRuleDestinationVpcConfigurationOutputReference | IotTopicRuleDestinationVpcConfiguration): any;
export declare class IotTopicRuleDestinationVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleDestinationVpcConfiguration | undefined;
    set internalValue(value: IotTopicRuleDestinationVpcConfiguration | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination aws_iot_topic_rule_destination}
*/
export declare class IotTopicRuleDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_topic_rule_destination";
    /**
    * Generates CDKTF code for importing a IotTopicRuleDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotTopicRuleDestination to import
    * @param importFromId The id of the existing IotTopicRuleDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotTopicRuleDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule_destination aws_iot_topic_rule_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotTopicRuleDestinationConfig
    */
    constructor(scope: Construct, id: string, config: IotTopicRuleDestinationConfig);
    get arn(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _timeouts;
    get timeouts(): IotTopicRuleDestinationTimeoutsOutputReference;
    putTimeouts(value: IotTopicRuleDestinationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | IotTopicRuleDestinationTimeouts | undefined;
    private _vpcConfiguration;
    get vpcConfiguration(): IotTopicRuleDestinationVpcConfigurationOutputReference;
    putVpcConfiguration(value: IotTopicRuleDestinationVpcConfiguration): void;
    get vpcConfigurationInput(): IotTopicRuleDestinationVpcConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
