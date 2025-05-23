/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#attributes CognitoUser#attributes}
    */
    readonly attributes?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#client_metadata CognitoUser#client_metadata}
    */
    readonly clientMetadata?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#desired_delivery_mediums CognitoUser#desired_delivery_mediums}
    */
    readonly desiredDeliveryMediums?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#enabled CognitoUser#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#force_alias_creation CognitoUser#force_alias_creation}
    */
    readonly forceAliasCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#id CognitoUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#message_action CognitoUser#message_action}
    */
    readonly messageAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#password CognitoUser#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#temporary_password CognitoUser#temporary_password}
    */
    readonly temporaryPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#user_pool_id CognitoUser#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#username CognitoUser#username}
    */
    readonly username: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#validation_data CognitoUser#validation_data}
    */
    readonly validationData?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user aws_cognito_user}
*/
export declare class CognitoUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_user";
    /**
    * Generates CDKTF code for importing a CognitoUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoUser to import
    * @param importFromId The id of the existing CognitoUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_user aws_cognito_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserConfig
    */
    constructor(scope: Construct, id: string, config: CognitoUserConfig);
    private _attributes?;
    get attributes(): {
        [key: string]: string;
    };
    set attributes(value: {
        [key: string]: string;
    });
    resetAttributes(): void;
    get attributesInput(): {
        [key: string]: string;
    } | undefined;
    private _clientMetadata?;
    get clientMetadata(): {
        [key: string]: string;
    };
    set clientMetadata(value: {
        [key: string]: string;
    });
    resetClientMetadata(): void;
    get clientMetadataInput(): {
        [key: string]: string;
    } | undefined;
    get creationDate(): string;
    private _desiredDeliveryMediums?;
    get desiredDeliveryMediums(): string[];
    set desiredDeliveryMediums(value: string[]);
    resetDesiredDeliveryMediums(): void;
    get desiredDeliveryMediumsInput(): string[] | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _forceAliasCreation?;
    get forceAliasCreation(): boolean | cdktf.IResolvable;
    set forceAliasCreation(value: boolean | cdktf.IResolvable);
    resetForceAliasCreation(): void;
    get forceAliasCreationInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedDate(): string;
    private _messageAction?;
    get messageAction(): string;
    set messageAction(value: string);
    resetMessageAction(): void;
    get messageActionInput(): string | undefined;
    get mfaSettingList(): string[];
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    get preferredMfaSetting(): string;
    get status(): string;
    get sub(): string;
    private _temporaryPassword?;
    get temporaryPassword(): string;
    set temporaryPassword(value: string);
    resetTemporaryPassword(): void;
    get temporaryPasswordInput(): string | undefined;
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
    private _validationData?;
    get validationData(): {
        [key: string]: string;
    };
    set validationData(value: {
        [key: string]: string;
    });
    resetValidationData(): void;
    get validationDataInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
