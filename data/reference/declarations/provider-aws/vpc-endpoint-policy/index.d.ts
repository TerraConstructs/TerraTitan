/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy#id VpcEndpointPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy#policy VpcEndpointPolicy#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy#vpc_endpoint_id VpcEndpointPolicy#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy#timeouts VpcEndpointPolicy#timeouts}
    */
    readonly timeouts?: VpcEndpointPolicyTimeouts;
}
export interface VpcEndpointPolicyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy#create VpcEndpointPolicy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy#delete VpcEndpointPolicy#delete}
    */
    readonly delete?: string;
}
export declare function vpcEndpointPolicyTimeoutsToTerraform(struct?: VpcEndpointPolicyTimeouts | cdktf.IResolvable): any;
export declare function vpcEndpointPolicyTimeoutsToHclTerraform(struct?: VpcEndpointPolicyTimeouts | cdktf.IResolvable): any;
export declare class VpcEndpointPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcEndpointPolicyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcEndpointPolicyTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy aws_vpc_endpoint_policy}
*/
export declare class VpcEndpointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint_policy";
    /**
    * Generates CDKTF code for importing a VpcEndpointPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpointPolicy to import
    * @param importFromId The id of the existing VpcEndpointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpointPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_policy aws_vpc_endpoint_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointPolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpcEndpointPolicyTimeoutsOutputReference;
    putTimeouts(value: VpcEndpointPolicyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcEndpointPolicyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
