/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlMultiRegionAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#account_id S3ControlMultiRegionAccessPointPolicy#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#id S3ControlMultiRegionAccessPointPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#details S3ControlMultiRegionAccessPointPolicy#details}
    */
    readonly details: S3ControlMultiRegionAccessPointPolicyDetails;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#timeouts S3ControlMultiRegionAccessPointPolicy#timeouts}
    */
    readonly timeouts?: S3ControlMultiRegionAccessPointPolicyTimeouts;
}
export interface S3ControlMultiRegionAccessPointPolicyDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#name S3ControlMultiRegionAccessPointPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#policy S3ControlMultiRegionAccessPointPolicy#policy}
    */
    readonly policy: string;
}
export declare function s3ControlMultiRegionAccessPointPolicyDetailsToTerraform(struct?: S3ControlMultiRegionAccessPointPolicyDetailsOutputReference | S3ControlMultiRegionAccessPointPolicyDetails): any;
export declare function s3ControlMultiRegionAccessPointPolicyDetailsToHclTerraform(struct?: S3ControlMultiRegionAccessPointPolicyDetailsOutputReference | S3ControlMultiRegionAccessPointPolicyDetails): any;
export declare class S3ControlMultiRegionAccessPointPolicyDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlMultiRegionAccessPointPolicyDetails | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointPolicyDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
}
export interface S3ControlMultiRegionAccessPointPolicyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#create S3ControlMultiRegionAccessPointPolicy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#update S3ControlMultiRegionAccessPointPolicy#update}
    */
    readonly update?: string;
}
export declare function s3ControlMultiRegionAccessPointPolicyTimeoutsToTerraform(struct?: S3ControlMultiRegionAccessPointPolicyTimeouts | cdktf.IResolvable): any;
export declare function s3ControlMultiRegionAccessPointPolicyTimeoutsToHclTerraform(struct?: S3ControlMultiRegionAccessPointPolicyTimeouts | cdktf.IResolvable): any;
export declare class S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlMultiRegionAccessPointPolicyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlMultiRegionAccessPointPolicyTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy aws_s3control_multi_region_access_point_policy}
*/
export declare class S3ControlMultiRegionAccessPointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_multi_region_access_point_policy";
    /**
    * Generates CDKTF code for importing a S3ControlMultiRegionAccessPointPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlMultiRegionAccessPointPolicy to import
    * @param importFromId The id of the existing S3ControlMultiRegionAccessPointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlMultiRegionAccessPointPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_multi_region_access_point_policy aws_s3control_multi_region_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlMultiRegionAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointPolicyConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get established(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get proposed(): string;
    private _details;
    get details(): S3ControlMultiRegionAccessPointPolicyDetailsOutputReference;
    putDetails(value: S3ControlMultiRegionAccessPointPolicyDetails): void;
    get detailsInput(): S3ControlMultiRegionAccessPointPolicyDetails | undefined;
    private _timeouts;
    get timeouts(): S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference;
    putTimeouts(value: S3ControlMultiRegionAccessPointPolicyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | S3ControlMultiRegionAccessPointPolicyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
