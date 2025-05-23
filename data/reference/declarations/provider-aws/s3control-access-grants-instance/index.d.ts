/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlAccessGrantsInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance#account_id S3ControlAccessGrantsInstance#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance#identity_center_arn S3ControlAccessGrantsInstance#identity_center_arn}
    */
    readonly identityCenterArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance#tags S3ControlAccessGrantsInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance aws_s3control_access_grants_instance}
*/
export declare class S3ControlAccessGrantsInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_access_grants_instance";
    /**
    * Generates CDKTF code for importing a S3ControlAccessGrantsInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlAccessGrantsInstance to import
    * @param importFromId The id of the existing S3ControlAccessGrantsInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlAccessGrantsInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grants_instance aws_s3control_access_grants_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlAccessGrantsInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: S3ControlAccessGrantsInstanceConfig);
    get accessGrantsInstanceArn(): string;
    get accessGrantsInstanceId(): string;
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get id(): string;
    get identityCenterApplicationArn(): string;
    private _identityCenterArn?;
    get identityCenterArn(): string;
    set identityCenterArn(value: string);
    resetIdentityCenterArn(): void;
    get identityCenterArnInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
