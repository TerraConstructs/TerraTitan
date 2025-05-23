/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ImageBlockPublicAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_image_block_public_access#id Ec2ImageBlockPublicAccess#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_image_block_public_access#state Ec2ImageBlockPublicAccess#state}
    */
    readonly state: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_image_block_public_access#timeouts Ec2ImageBlockPublicAccess#timeouts}
    */
    readonly timeouts?: Ec2ImageBlockPublicAccessTimeouts;
}
export interface Ec2ImageBlockPublicAccessTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_image_block_public_access#update Ec2ImageBlockPublicAccess#update}
    */
    readonly update?: string;
}
export declare function ec2ImageBlockPublicAccessTimeoutsToTerraform(struct?: Ec2ImageBlockPublicAccessTimeouts | cdktf.IResolvable): any;
export declare function ec2ImageBlockPublicAccessTimeoutsToHclTerraform(struct?: Ec2ImageBlockPublicAccessTimeouts | cdktf.IResolvable): any;
export declare class Ec2ImageBlockPublicAccessTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2ImageBlockPublicAccessTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2ImageBlockPublicAccessTimeouts | cdktf.IResolvable | undefined);
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_image_block_public_access aws_ec2_image_block_public_access}
*/
export declare class Ec2ImageBlockPublicAccess extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_image_block_public_access";
    /**
    * Generates CDKTF code for importing a Ec2ImageBlockPublicAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2ImageBlockPublicAccess to import
    * @param importFromId The id of the existing Ec2ImageBlockPublicAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_image_block_public_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2ImageBlockPublicAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_image_block_public_access aws_ec2_image_block_public_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ImageBlockPublicAccessConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ImageBlockPublicAccessConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    get stateInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2ImageBlockPublicAccessTimeoutsOutputReference;
    putTimeouts(value: Ec2ImageBlockPublicAccessTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2ImageBlockPublicAccessTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
