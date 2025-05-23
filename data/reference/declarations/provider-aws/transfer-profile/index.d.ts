/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile#as2_id TransferProfile#as2_id}
    */
    readonly as2Id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile#certificate_ids TransferProfile#certificate_ids}
    */
    readonly certificateIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile#id TransferProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile#profile_type TransferProfile#profile_type}
    */
    readonly profileType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile#tags TransferProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile#tags_all TransferProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile aws_transfer_profile}
*/
export declare class TransferProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_profile";
    /**
    * Generates CDKTF code for importing a TransferProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferProfile to import
    * @param importFromId The id of the existing TransferProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_profile aws_transfer_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferProfileConfig
    */
    constructor(scope: Construct, id: string, config: TransferProfileConfig);
    get arn(): string;
    private _as2Id?;
    get as2Id(): string;
    set as2Id(value: string);
    get as2IdInput(): string | undefined;
    private _certificateIds?;
    get certificateIds(): string[];
    set certificateIds(value: string[]);
    resetCertificateIds(): void;
    get certificateIdsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get profileId(): string;
    private _profileType?;
    get profileType(): string;
    set profileType(value: string);
    get profileTypeInput(): string | undefined;
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
