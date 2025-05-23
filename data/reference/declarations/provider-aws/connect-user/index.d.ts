/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#directory_user_id ConnectUser#directory_user_id}
    */
    readonly directoryUserId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#hierarchy_group_id ConnectUser#hierarchy_group_id}
    */
    readonly hierarchyGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#id ConnectUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#instance_id ConnectUser#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#name ConnectUser#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#password ConnectUser#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#routing_profile_id ConnectUser#routing_profile_id}
    */
    readonly routingProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#security_profile_ids ConnectUser#security_profile_ids}
    */
    readonly securityProfileIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#tags ConnectUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#tags_all ConnectUser#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * identity_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#identity_info ConnectUser#identity_info}
    */
    readonly identityInfo?: ConnectUserIdentityInfo;
    /**
    * phone_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#phone_config ConnectUser#phone_config}
    */
    readonly phoneConfig: ConnectUserPhoneConfig;
}
export interface ConnectUserIdentityInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#email ConnectUser#email}
    */
    readonly email?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#first_name ConnectUser#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#last_name ConnectUser#last_name}
    */
    readonly lastName?: string;
}
export declare function connectUserIdentityInfoToTerraform(struct?: ConnectUserIdentityInfoOutputReference | ConnectUserIdentityInfo): any;
export declare function connectUserIdentityInfoToHclTerraform(struct?: ConnectUserIdentityInfoOutputReference | ConnectUserIdentityInfo): any;
export declare class ConnectUserIdentityInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserIdentityInfo | undefined;
    set internalValue(value: ConnectUserIdentityInfo | undefined);
    private _email?;
    get email(): string;
    set email(value: string);
    resetEmail(): void;
    get emailInput(): string | undefined;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string | undefined;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string | undefined;
}
export interface ConnectUserPhoneConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#after_contact_work_time_limit ConnectUser#after_contact_work_time_limit}
    */
    readonly afterContactWorkTimeLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#auto_accept ConnectUser#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#desk_phone_number ConnectUser#desk_phone_number}
    */
    readonly deskPhoneNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#phone_type ConnectUser#phone_type}
    */
    readonly phoneType: string;
}
export declare function connectUserPhoneConfigToTerraform(struct?: ConnectUserPhoneConfigOutputReference | ConnectUserPhoneConfig): any;
export declare function connectUserPhoneConfigToHclTerraform(struct?: ConnectUserPhoneConfigOutputReference | ConnectUserPhoneConfig): any;
export declare class ConnectUserPhoneConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserPhoneConfig | undefined;
    set internalValue(value: ConnectUserPhoneConfig | undefined);
    private _afterContactWorkTimeLimit?;
    get afterContactWorkTimeLimit(): number;
    set afterContactWorkTimeLimit(value: number);
    resetAfterContactWorkTimeLimit(): void;
    get afterContactWorkTimeLimitInput(): number | undefined;
    private _autoAccept?;
    get autoAccept(): boolean | cdktf.IResolvable;
    set autoAccept(value: boolean | cdktf.IResolvable);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | cdktf.IResolvable | undefined;
    private _deskPhoneNumber?;
    get deskPhoneNumber(): string;
    set deskPhoneNumber(value: string);
    resetDeskPhoneNumber(): void;
    get deskPhoneNumberInput(): string | undefined;
    private _phoneType?;
    get phoneType(): string;
    set phoneType(value: string);
    get phoneTypeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user aws_connect_user}
*/
export declare class ConnectUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_user";
    /**
    * Generates CDKTF code for importing a ConnectUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectUser to import
    * @param importFromId The id of the existing ConnectUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user aws_connect_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectUserConfig
    */
    constructor(scope: Construct, id: string, config: ConnectUserConfig);
    get arn(): string;
    private _directoryUserId?;
    get directoryUserId(): string;
    set directoryUserId(value: string);
    resetDirectoryUserId(): void;
    get directoryUserIdInput(): string | undefined;
    private _hierarchyGroupId?;
    get hierarchyGroupId(): string;
    set hierarchyGroupId(value: string);
    resetHierarchyGroupId(): void;
    get hierarchyGroupIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    private _routingProfileId?;
    get routingProfileId(): string;
    set routingProfileId(value: string);
    get routingProfileIdInput(): string | undefined;
    private _securityProfileIds?;
    get securityProfileIds(): string[];
    set securityProfileIds(value: string[]);
    get securityProfileIdsInput(): string[] | undefined;
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
    get userId(): string;
    private _identityInfo;
    get identityInfo(): ConnectUserIdentityInfoOutputReference;
    putIdentityInfo(value: ConnectUserIdentityInfo): void;
    resetIdentityInfo(): void;
    get identityInfoInput(): ConnectUserIdentityInfo | undefined;
    private _phoneConfig;
    get phoneConfig(): ConnectUserPhoneConfigOutputReference;
    putPhoneConfig(value: ConnectUserPhoneConfig): void;
    get phoneConfigInput(): ConnectUserPhoneConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
