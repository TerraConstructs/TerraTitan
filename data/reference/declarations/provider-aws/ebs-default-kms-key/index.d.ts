/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_default_kms_key#id EbsDefaultKmsKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_default_kms_key#key_arn EbsDefaultKmsKey#key_arn}
    */
    readonly keyArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_default_kms_key aws_ebs_default_kms_key}
*/
export declare class EbsDefaultKmsKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ebs_default_kms_key";
    /**
    * Generates CDKTF code for importing a EbsDefaultKmsKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EbsDefaultKmsKey to import
    * @param importFromId The id of the existing EbsDefaultKmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_default_kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EbsDefaultKmsKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ebs_default_kms_key aws_ebs_default_kms_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EbsDefaultKmsKeyConfig
    */
    constructor(scope: Construct, id: string, config: EbsDefaultKmsKeyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyArn?;
    get keyArn(): string;
    set keyArn(value: string);
    get keyArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
