/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferAgreementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#access_role TransferAgreement#access_role}
    */
    readonly accessRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#base_directory TransferAgreement#base_directory}
    */
    readonly baseDirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#description TransferAgreement#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#id TransferAgreement#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#local_profile_id TransferAgreement#local_profile_id}
    */
    readonly localProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#partner_profile_id TransferAgreement#partner_profile_id}
    */
    readonly partnerProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#server_id TransferAgreement#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#tags TransferAgreement#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#tags_all TransferAgreement#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement aws_transfer_agreement}
*/
export declare class TransferAgreement extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_agreement";
    /**
    * Generates CDKTF code for importing a TransferAgreement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferAgreement to import
    * @param importFromId The id of the existing TransferAgreement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferAgreement to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_agreement aws_transfer_agreement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferAgreementConfig
    */
    constructor(scope: Construct, id: string, config: TransferAgreementConfig);
    private _accessRole?;
    get accessRole(): string;
    set accessRole(value: string);
    get accessRoleInput(): string | undefined;
    get agreementId(): string;
    get arn(): string;
    private _baseDirectory?;
    get baseDirectory(): string;
    set baseDirectory(value: string);
    get baseDirectoryInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _localProfileId?;
    get localProfileId(): string;
    set localProfileId(value: string);
    get localProfileIdInput(): string | undefined;
    private _partnerProfileId?;
    get partnerProfileId(): string;
    set partnerProfileId(value: string);
    get partnerProfileIdInput(): string | undefined;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string | undefined;
    get status(): string;
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
