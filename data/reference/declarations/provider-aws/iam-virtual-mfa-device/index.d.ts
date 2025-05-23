/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamVirtualMfaDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device#id IamVirtualMfaDevice#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device#path IamVirtualMfaDevice#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device#tags IamVirtualMfaDevice#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device#tags_all IamVirtualMfaDevice#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device#virtual_mfa_device_name IamVirtualMfaDevice#virtual_mfa_device_name}
    */
    readonly virtualMfaDeviceName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device aws_iam_virtual_mfa_device}
*/
export declare class IamVirtualMfaDevice extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_virtual_mfa_device";
    /**
    * Generates CDKTF code for importing a IamVirtualMfaDevice resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamVirtualMfaDevice to import
    * @param importFromId The id of the existing IamVirtualMfaDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamVirtualMfaDevice to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_virtual_mfa_device aws_iam_virtual_mfa_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamVirtualMfaDeviceConfig
    */
    constructor(scope: Construct, id: string, config: IamVirtualMfaDeviceConfig);
    get arn(): string;
    get base32StringSeed(): string;
    get enableDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    get qrCodePng(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get userName(): string;
    private _virtualMfaDeviceName?;
    get virtualMfaDeviceName(): string;
    set virtualMfaDeviceName(value: string);
    get virtualMfaDeviceNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
