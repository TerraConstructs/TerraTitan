/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#aws_account_id QuicksightUser#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#email QuicksightUser#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#iam_arn QuicksightUser#iam_arn}
    */
    readonly iamArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#id QuicksightUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#identity_type QuicksightUser#identity_type}
    */
    readonly identityType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#namespace QuicksightUser#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#session_name QuicksightUser#session_name}
    */
    readonly sessionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#user_name QuicksightUser#user_name}
    */
    readonly userName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#user_role QuicksightUser#user_role}
    */
    readonly userRole: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user aws_quicksight_user}
*/
export declare class QuicksightUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_user";
    /**
    * Generates CDKTF code for importing a QuicksightUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightUser to import
    * @param importFromId The id of the existing QuicksightUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_user aws_quicksight_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightUserConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightUserConfig);
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string | undefined;
    private _iamArn?;
    get iamArn(): string;
    set iamArn(value: string);
    resetIamArn(): void;
    get iamArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityType?;
    get identityType(): string;
    set identityType(value: string);
    get identityTypeInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _sessionName?;
    get sessionName(): string;
    set sessionName(value: string);
    resetSessionName(): void;
    get sessionNameInput(): string | undefined;
    get userInvitationUrl(): string;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string | undefined;
    private _userRole?;
    get userRole(): string;
    set userRole(value: string);
    get userRoleInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
