/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrStudioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#auth_mode EmrStudio#auth_mode}
    */
    readonly authMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#default_s3_location EmrStudio#default_s3_location}
    */
    readonly defaultS3Location: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#description EmrStudio#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#encryption_key_arn EmrStudio#encryption_key_arn}
    */
    readonly encryptionKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#engine_security_group_id EmrStudio#engine_security_group_id}
    */
    readonly engineSecurityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#id EmrStudio#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#idp_auth_url EmrStudio#idp_auth_url}
    */
    readonly idpAuthUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#idp_relay_state_parameter_name EmrStudio#idp_relay_state_parameter_name}
    */
    readonly idpRelayStateParameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#name EmrStudio#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#service_role EmrStudio#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#subnet_ids EmrStudio#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#tags EmrStudio#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#tags_all EmrStudio#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#user_role EmrStudio#user_role}
    */
    readonly userRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#vpc_id EmrStudio#vpc_id}
    */
    readonly vpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#workspace_security_group_id EmrStudio#workspace_security_group_id}
    */
    readonly workspaceSecurityGroupId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio aws_emr_studio}
*/
export declare class EmrStudio extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emr_studio";
    /**
    * Generates CDKTF code for importing a EmrStudio resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrStudio to import
    * @param importFromId The id of the existing EmrStudio that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrStudio to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio aws_emr_studio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrStudioConfig
    */
    constructor(scope: Construct, id: string, config: EmrStudioConfig);
    get arn(): string;
    private _authMode?;
    get authMode(): string;
    set authMode(value: string);
    get authModeInput(): string | undefined;
    private _defaultS3Location?;
    get defaultS3Location(): string;
    set defaultS3Location(value: string);
    get defaultS3LocationInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _encryptionKeyArn?;
    get encryptionKeyArn(): string;
    set encryptionKeyArn(value: string);
    resetEncryptionKeyArn(): void;
    get encryptionKeyArnInput(): string | undefined;
    private _engineSecurityGroupId?;
    get engineSecurityGroupId(): string;
    set engineSecurityGroupId(value: string);
    get engineSecurityGroupIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _idpAuthUrl?;
    get idpAuthUrl(): string;
    set idpAuthUrl(value: string);
    resetIdpAuthUrl(): void;
    get idpAuthUrlInput(): string | undefined;
    private _idpRelayStateParameterName?;
    get idpRelayStateParameterName(): string;
    set idpRelayStateParameterName(value: string);
    resetIdpRelayStateParameterName(): void;
    get idpRelayStateParameterNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
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
    get url(): string;
    private _userRole?;
    get userRole(): string;
    set userRole(value: string);
    resetUserRole(): void;
    get userRoleInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _workspaceSecurityGroupId?;
    get workspaceSecurityGroupId(): string;
    set workspaceSecurityGroupId(value: string);
    get workspaceSecurityGroupIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
