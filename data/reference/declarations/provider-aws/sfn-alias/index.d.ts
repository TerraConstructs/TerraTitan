/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SfnAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#description SfnAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#id SfnAlias#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#name SfnAlias#name}
    */
    readonly name: string;
    /**
    * routing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#routing_configuration SfnAlias#routing_configuration}
    */
    readonly routingConfiguration: SfnAliasRoutingConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#timeouts SfnAlias#timeouts}
    */
    readonly timeouts?: SfnAliasTimeouts;
}
export interface SfnAliasRoutingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#state_machine_version_arn SfnAlias#state_machine_version_arn}
    */
    readonly stateMachineVersionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#weight SfnAlias#weight}
    */
    readonly weight: number;
}
export declare function sfnAliasRoutingConfigurationToTerraform(struct?: SfnAliasRoutingConfiguration | cdktf.IResolvable): any;
export declare function sfnAliasRoutingConfigurationToHclTerraform(struct?: SfnAliasRoutingConfiguration | cdktf.IResolvable): any;
export declare class SfnAliasRoutingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SfnAliasRoutingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SfnAliasRoutingConfiguration | cdktf.IResolvable | undefined);
    private _stateMachineVersionArn?;
    get stateMachineVersionArn(): string;
    set stateMachineVersionArn(value: string);
    get stateMachineVersionArnInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
}
export declare class SfnAliasRoutingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SfnAliasRoutingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SfnAliasRoutingConfigurationOutputReference;
}
export interface SfnAliasTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#create SfnAlias#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#delete SfnAlias#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#update SfnAlias#update}
    */
    readonly update?: string;
}
export declare function sfnAliasTimeoutsToTerraform(struct?: SfnAliasTimeouts | cdktf.IResolvable): any;
export declare function sfnAliasTimeoutsToHclTerraform(struct?: SfnAliasTimeouts | cdktf.IResolvable): any;
export declare class SfnAliasTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SfnAliasTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SfnAliasTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias aws_sfn_alias}
*/
export declare class SfnAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sfn_alias";
    /**
    * Generates CDKTF code for importing a SfnAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SfnAlias to import
    * @param importFromId The id of the existing SfnAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SfnAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_alias aws_sfn_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SfnAliasConfig
    */
    constructor(scope: Construct, id: string, config: SfnAliasConfig);
    get arn(): string;
    get creationDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _routingConfiguration;
    get routingConfiguration(): SfnAliasRoutingConfigurationList;
    putRoutingConfiguration(value: SfnAliasRoutingConfiguration[] | cdktf.IResolvable): void;
    get routingConfigurationInput(): cdktf.IResolvable | SfnAliasRoutingConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): SfnAliasTimeoutsOutputReference;
    putTimeouts(value: SfnAliasTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SfnAliasTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
