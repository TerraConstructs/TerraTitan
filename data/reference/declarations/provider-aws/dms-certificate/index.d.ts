/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate#certificate_id DmsCertificate#certificate_id}
    */
    readonly certificateId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate#certificate_pem DmsCertificate#certificate_pem}
    */
    readonly certificatePem?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate#certificate_wallet DmsCertificate#certificate_wallet}
    */
    readonly certificateWallet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate#id DmsCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate#tags DmsCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate#tags_all DmsCertificate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate aws_dms_certificate}
*/
export declare class DmsCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dms_certificate";
    /**
    * Generates CDKTF code for importing a DmsCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsCertificate to import
    * @param importFromId The id of the existing DmsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_certificate aws_dms_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsCertificateConfig
    */
    constructor(scope: Construct, id: string, config: DmsCertificateConfig);
    get certificateArn(): string;
    private _certificateId?;
    get certificateId(): string;
    set certificateId(value: string);
    get certificateIdInput(): string | undefined;
    private _certificatePem?;
    get certificatePem(): string;
    set certificatePem(value: string);
    resetCertificatePem(): void;
    get certificatePemInput(): string | undefined;
    private _certificateWallet?;
    get certificateWallet(): string;
    set certificateWallet(value: string);
    resetCertificateWallet(): void;
    get certificateWalletInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
