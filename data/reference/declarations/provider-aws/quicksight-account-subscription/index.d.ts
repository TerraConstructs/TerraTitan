/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightAccountSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#account_name QuicksightAccountSubscription#account_name}
    */
    readonly accountName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#active_directory_name QuicksightAccountSubscription#active_directory_name}
    */
    readonly activeDirectoryName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#admin_group QuicksightAccountSubscription#admin_group}
    */
    readonly adminGroup?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#authentication_method QuicksightAccountSubscription#authentication_method}
    */
    readonly authenticationMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#author_group QuicksightAccountSubscription#author_group}
    */
    readonly authorGroup?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#aws_account_id QuicksightAccountSubscription#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#contact_number QuicksightAccountSubscription#contact_number}
    */
    readonly contactNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#directory_id QuicksightAccountSubscription#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#edition QuicksightAccountSubscription#edition}
    */
    readonly edition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#email_address QuicksightAccountSubscription#email_address}
    */
    readonly emailAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#first_name QuicksightAccountSubscription#first_name}
    */
    readonly firstName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#iam_identity_center_instance_arn QuicksightAccountSubscription#iam_identity_center_instance_arn}
    */
    readonly iamIdentityCenterInstanceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#id QuicksightAccountSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#last_name QuicksightAccountSubscription#last_name}
    */
    readonly lastName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#notification_email QuicksightAccountSubscription#notification_email}
    */
    readonly notificationEmail: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#reader_group QuicksightAccountSubscription#reader_group}
    */
    readonly readerGroup?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#realm QuicksightAccountSubscription#realm}
    */
    readonly realm?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#timeouts QuicksightAccountSubscription#timeouts}
    */
    readonly timeouts?: QuicksightAccountSubscriptionTimeouts;
}
export interface QuicksightAccountSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#create QuicksightAccountSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#delete QuicksightAccountSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#read QuicksightAccountSubscription#read}
    */
    readonly read?: string;
}
export declare function quicksightAccountSubscriptionTimeoutsToTerraform(struct?: QuicksightAccountSubscriptionTimeouts | cdktf.IResolvable): any;
export declare function quicksightAccountSubscriptionTimeoutsToHclTerraform(struct?: QuicksightAccountSubscriptionTimeouts | cdktf.IResolvable): any;
export declare class QuicksightAccountSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightAccountSubscriptionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAccountSubscriptionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription}
*/
export declare class QuicksightAccountSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_account_subscription";
    /**
    * Generates CDKTF code for importing a QuicksightAccountSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightAccountSubscription to import
    * @param importFromId The id of the existing QuicksightAccountSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightAccountSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_account_subscription aws_quicksight_account_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightAccountSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightAccountSubscriptionConfig);
    private _accountName?;
    get accountName(): string;
    set accountName(value: string);
    get accountNameInput(): string | undefined;
    get accountSubscriptionStatus(): string;
    private _activeDirectoryName?;
    get activeDirectoryName(): string;
    set activeDirectoryName(value: string);
    resetActiveDirectoryName(): void;
    get activeDirectoryNameInput(): string | undefined;
    private _adminGroup?;
    get adminGroup(): string[];
    set adminGroup(value: string[]);
    resetAdminGroup(): void;
    get adminGroupInput(): string[] | undefined;
    private _authenticationMethod?;
    get authenticationMethod(): string;
    set authenticationMethod(value: string);
    get authenticationMethodInput(): string | undefined;
    private _authorGroup?;
    get authorGroup(): string[];
    set authorGroup(value: string[]);
    resetAuthorGroup(): void;
    get authorGroupInput(): string[] | undefined;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    private _contactNumber?;
    get contactNumber(): string;
    set contactNumber(value: string);
    resetContactNumber(): void;
    get contactNumberInput(): string | undefined;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string | undefined;
    private _edition?;
    get edition(): string;
    set edition(value: string);
    get editionInput(): string | undefined;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    resetEmailAddress(): void;
    get emailAddressInput(): string | undefined;
    private _firstName?;
    get firstName(): string;
    set firstName(value: string);
    resetFirstName(): void;
    get firstNameInput(): string | undefined;
    private _iamIdentityCenterInstanceArn?;
    get iamIdentityCenterInstanceArn(): string;
    set iamIdentityCenterInstanceArn(value: string);
    resetIamIdentityCenterInstanceArn(): void;
    get iamIdentityCenterInstanceArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _lastName?;
    get lastName(): string;
    set lastName(value: string);
    resetLastName(): void;
    get lastNameInput(): string | undefined;
    private _notificationEmail?;
    get notificationEmail(): string;
    set notificationEmail(value: string);
    get notificationEmailInput(): string | undefined;
    private _readerGroup?;
    get readerGroup(): string[];
    set readerGroup(value: string[]);
    resetReaderGroup(): void;
    get readerGroupInput(): string[] | undefined;
    private _realm?;
    get realm(): string;
    set realm(value: string);
    resetRealm(): void;
    get realmInput(): string | undefined;
    private _timeouts;
    get timeouts(): QuicksightAccountSubscriptionTimeoutsOutputReference;
    putTimeouts(value: QuicksightAccountSubscriptionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QuicksightAccountSubscriptionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
