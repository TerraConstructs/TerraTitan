/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_point_policy#access_point_arn S3ControlAccessPointPolicy#access_point_arn}
    */
    readonly accessPointArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_point_policy#id S3ControlAccessPointPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_point_policy#policy S3ControlAccessPointPolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_point_policy aws_s3control_access_point_policy}
*/
export declare class S3ControlAccessPointPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_access_point_policy";
    /**
    * Generates CDKTF code for importing a S3ControlAccessPointPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlAccessPointPolicy to import
    * @param importFromId The id of the existing S3ControlAccessPointPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_point_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlAccessPointPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_point_policy aws_s3control_access_point_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlAccessPointPolicyConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlAccessPointPolicyConfig);
    private _accessPointArn?;
    get accessPointArn(): string;
    set accessPointArn(value: string);
    get accessPointArnInput(): string | undefined;
    get hasPublicAccessPolicy(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
