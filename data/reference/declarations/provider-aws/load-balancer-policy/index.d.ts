/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LoadBalancerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#id LoadBalancerPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#load_balancer_name LoadBalancerPolicy#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#policy_name LoadBalancerPolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#policy_type_name LoadBalancerPolicy#policy_type_name}
    */
    readonly policyTypeName: string;
    /**
    * policy_attribute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#policy_attribute LoadBalancerPolicy#policy_attribute}
    */
    readonly policyAttribute?: LoadBalancerPolicyPolicyAttribute[] | cdktf.IResolvable;
}
export interface LoadBalancerPolicyPolicyAttribute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#name LoadBalancerPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#value LoadBalancerPolicy#value}
    */
    readonly value?: string;
}
export declare function loadBalancerPolicyPolicyAttributeToTerraform(struct?: LoadBalancerPolicyPolicyAttribute | cdktf.IResolvable): any;
export declare function loadBalancerPolicyPolicyAttributeToHclTerraform(struct?: LoadBalancerPolicyPolicyAttribute | cdktf.IResolvable): any;
export declare class LoadBalancerPolicyPolicyAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LoadBalancerPolicyPolicyAttribute | cdktf.IResolvable | undefined;
    set internalValue(value: LoadBalancerPolicyPolicyAttribute | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class LoadBalancerPolicyPolicyAttributeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LoadBalancerPolicyPolicyAttribute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LoadBalancerPolicyPolicyAttributeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy aws_load_balancer_policy}
*/
export declare class LoadBalancerPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_load_balancer_policy";
    /**
    * Generates CDKTF code for importing a LoadBalancerPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LoadBalancerPolicy to import
    * @param importFromId The id of the existing LoadBalancerPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LoadBalancerPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/load_balancer_policy aws_load_balancer_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerPolicyConfig
    */
    constructor(scope: Construct, id: string, config: LoadBalancerPolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _loadBalancerName?;
    get loadBalancerName(): string;
    set loadBalancerName(value: string);
    get loadBalancerNameInput(): string | undefined;
    private _policyName?;
    get policyName(): string;
    set policyName(value: string);
    get policyNameInput(): string | undefined;
    private _policyTypeName?;
    get policyTypeName(): string;
    set policyTypeName(value: string);
    get policyTypeNameInput(): string | undefined;
    private _policyAttribute;
    get policyAttribute(): LoadBalancerPolicyPolicyAttributeList;
    putPolicyAttribute(value: LoadBalancerPolicyPolicyAttribute[] | cdktf.IResolvable): void;
    resetPolicyAttribute(): void;
    get policyAttributeInput(): cdktf.IResolvable | LoadBalancerPolicyPolicyAttribute[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
