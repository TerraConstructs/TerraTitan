/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ControltowerControlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#control_identifier ControltowerControl#control_identifier}
    */
    readonly controlIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#id ControltowerControl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#target_identifier ControltowerControl#target_identifier}
    */
    readonly targetIdentifier: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#parameters ControltowerControl#parameters}
    */
    readonly parameters?: ControltowerControlParameters[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#timeouts ControltowerControl#timeouts}
    */
    readonly timeouts?: ControltowerControlTimeouts;
}
export interface ControltowerControlParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#key ControltowerControl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#value ControltowerControl#value}
    */
    readonly value: string;
}
export declare function controltowerControlParametersToTerraform(struct?: ControltowerControlParameters | cdktf.IResolvable): any;
export declare function controltowerControlParametersToHclTerraform(struct?: ControltowerControlParameters | cdktf.IResolvable): any;
export declare class ControltowerControlParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ControltowerControlParameters | cdktf.IResolvable | undefined;
    set internalValue(value: ControltowerControlParameters | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class ControltowerControlParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ControltowerControlParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ControltowerControlParametersOutputReference;
}
export interface ControltowerControlTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#create ControltowerControl#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#delete ControltowerControl#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#update ControltowerControl#update}
    */
    readonly update?: string;
}
export declare function controltowerControlTimeoutsToTerraform(struct?: ControltowerControlTimeouts | cdktf.IResolvable): any;
export declare function controltowerControlTimeoutsToHclTerraform(struct?: ControltowerControlTimeouts | cdktf.IResolvable): any;
export declare class ControltowerControlTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ControltowerControlTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ControltowerControlTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control aws_controltower_control}
*/
export declare class ControltowerControl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_controltower_control";
    /**
    * Generates CDKTF code for importing a ControltowerControl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ControltowerControl to import
    * @param importFromId The id of the existing ControltowerControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ControltowerControl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/controltower_control aws_controltower_control} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ControltowerControlConfig
    */
    constructor(scope: Construct, id: string, config: ControltowerControlConfig);
    get arn(): string;
    private _controlIdentifier?;
    get controlIdentifier(): string;
    set controlIdentifier(value: string);
    get controlIdentifierInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _targetIdentifier?;
    get targetIdentifier(): string;
    set targetIdentifier(value: string);
    get targetIdentifierInput(): string | undefined;
    private _parameters;
    get parameters(): ControltowerControlParametersList;
    putParameters(value: ControltowerControlParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | ControltowerControlParameters[] | undefined;
    private _timeouts;
    get timeouts(): ControltowerControlTimeoutsOutputReference;
    putTimeouts(value: ControltowerControlTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ControltowerControlTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
