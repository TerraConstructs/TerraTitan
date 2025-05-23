/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftserverlessNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#admin_password_secret_kms_key_id RedshiftserverlessNamespace#admin_password_secret_kms_key_id}
    */
    readonly adminPasswordSecretKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#admin_user_password RedshiftserverlessNamespace#admin_user_password}
    */
    readonly adminUserPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#admin_user_password_wo RedshiftserverlessNamespace#admin_user_password_wo}
    */
    readonly adminUserPasswordWo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#admin_user_password_wo_version RedshiftserverlessNamespace#admin_user_password_wo_version}
    */
    readonly adminUserPasswordWoVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#admin_username RedshiftserverlessNamespace#admin_username}
    */
    readonly adminUsername?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#db_name RedshiftserverlessNamespace#db_name}
    */
    readonly dbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#default_iam_role_arn RedshiftserverlessNamespace#default_iam_role_arn}
    */
    readonly defaultIamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#iam_roles RedshiftserverlessNamespace#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#id RedshiftserverlessNamespace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#kms_key_id RedshiftserverlessNamespace#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#log_exports RedshiftserverlessNamespace#log_exports}
    */
    readonly logExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#manage_admin_password RedshiftserverlessNamespace#manage_admin_password}
    */
    readonly manageAdminPassword?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#namespace_name RedshiftserverlessNamespace#namespace_name}
    */
    readonly namespaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#tags RedshiftserverlessNamespace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#tags_all RedshiftserverlessNamespace#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace aws_redshiftserverless_namespace}
*/
export declare class RedshiftserverlessNamespace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshiftserverless_namespace";
    /**
    * Generates CDKTF code for importing a RedshiftserverlessNamespace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftserverlessNamespace to import
    * @param importFromId The id of the existing RedshiftserverlessNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftserverlessNamespace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_namespace aws_redshiftserverless_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftserverlessNamespaceConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftserverlessNamespaceConfig);
    get adminPasswordSecretArn(): string;
    private _adminPasswordSecretKmsKeyId?;
    get adminPasswordSecretKmsKeyId(): string;
    set adminPasswordSecretKmsKeyId(value: string);
    resetAdminPasswordSecretKmsKeyId(): void;
    get adminPasswordSecretKmsKeyIdInput(): string | undefined;
    private _adminUserPassword?;
    get adminUserPassword(): string;
    set adminUserPassword(value: string);
    resetAdminUserPassword(): void;
    get adminUserPasswordInput(): string | undefined;
    private _adminUserPasswordWo?;
    get adminUserPasswordWo(): string;
    set adminUserPasswordWo(value: string);
    resetAdminUserPasswordWo(): void;
    get adminUserPasswordWoInput(): string | undefined;
    private _adminUserPasswordWoVersion?;
    get adminUserPasswordWoVersion(): number;
    set adminUserPasswordWoVersion(value: number);
    resetAdminUserPasswordWoVersion(): void;
    get adminUserPasswordWoVersionInput(): number | undefined;
    private _adminUsername?;
    get adminUsername(): string;
    set adminUsername(value: string);
    resetAdminUsername(): void;
    get adminUsernameInput(): string | undefined;
    get arn(): string;
    private _dbName?;
    get dbName(): string;
    set dbName(value: string);
    resetDbName(): void;
    get dbNameInput(): string | undefined;
    private _defaultIamRoleArn?;
    get defaultIamRoleArn(): string;
    set defaultIamRoleArn(value: string);
    resetDefaultIamRoleArn(): void;
    get defaultIamRoleArnInput(): string | undefined;
    private _iamRoles?;
    get iamRoles(): string[];
    set iamRoles(value: string[]);
    resetIamRoles(): void;
    get iamRolesInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _logExports?;
    get logExports(): string[];
    set logExports(value: string[]);
    resetLogExports(): void;
    get logExportsInput(): string[] | undefined;
    private _manageAdminPassword?;
    get manageAdminPassword(): boolean | cdktf.IResolvable;
    set manageAdminPassword(value: boolean | cdktf.IResolvable);
    resetManageAdminPassword(): void;
    get manageAdminPasswordInput(): boolean | cdktf.IResolvable | undefined;
    get namespaceId(): string;
    private _namespaceName?;
    get namespaceName(): string;
    set namespaceName(value: string);
    get namespaceNameInput(): string | undefined;
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
