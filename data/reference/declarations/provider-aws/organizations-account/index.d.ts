/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#close_on_deletion OrganizationsAccount#close_on_deletion}
    */
    readonly closeOnDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#create_govcloud OrganizationsAccount#create_govcloud}
    */
    readonly createGovcloud?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#email OrganizationsAccount#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#iam_user_access_to_billing OrganizationsAccount#iam_user_access_to_billing}
    */
    readonly iamUserAccessToBilling?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#id OrganizationsAccount#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#name OrganizationsAccount#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#parent_id OrganizationsAccount#parent_id}
    */
    readonly parentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#role_name OrganizationsAccount#role_name}
    */
    readonly roleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#tags OrganizationsAccount#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#tags_all OrganizationsAccount#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#timeouts OrganizationsAccount#timeouts}
    */
    readonly timeouts?: OrganizationsAccountTimeouts;
}
export interface OrganizationsAccountTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#create OrganizationsAccount#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#delete OrganizationsAccount#delete}
    */
    readonly delete?: string;
}
export declare function organizationsAccountTimeoutsToTerraform(struct?: OrganizationsAccountTimeouts | cdktf.IResolvable): any;
export declare function organizationsAccountTimeoutsToHclTerraform(struct?: OrganizationsAccountTimeouts | cdktf.IResolvable): any;
export declare class OrganizationsAccountTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OrganizationsAccountTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OrganizationsAccountTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account aws_organizations_account}
*/
export declare class OrganizationsAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_organizations_account";
    /**
    * Generates CDKTF code for importing a OrganizationsAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationsAccount to import
    * @param importFromId The id of the existing OrganizationsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationsAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_account aws_organizations_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsAccountConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationsAccountConfig);
    get arn(): string;
    private _closeOnDeletion?;
    get closeOnDeletion(): boolean | cdktf.IResolvable;
    set closeOnDeletion(value: boolean | cdktf.IResolvable);
    resetCloseOnDeletion(): void;
    get closeOnDeletionInput(): boolean | cdktf.IResolvable | undefined;
    private _createGovcloud?;
    get createGovcloud(): boolean | cdktf.IResolvable;
    set createGovcloud(value: boolean | cdktf.IResolvable);
    resetCreateGovcloud(): void;
    get createGovcloudInput(): boolean | cdktf.IResolvable | undefined;
    private _email?;
    get email(): string;
    set email(value: string);
    get emailInput(): string | undefined;
    get govcloudId(): string;
    private _iamUserAccessToBilling?;
    get iamUserAccessToBilling(): string;
    set iamUserAccessToBilling(value: string);
    resetIamUserAccessToBilling(): void;
    get iamUserAccessToBillingInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get joinedMethod(): string;
    get joinedTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parentId?;
    get parentId(): string;
    set parentId(value: string);
    resetParentId(): void;
    get parentIdInput(): string | undefined;
    private _roleName?;
    get roleName(): string;
    set roleName(value: string);
    resetRoleName(): void;
    get roleNameInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): OrganizationsAccountTimeoutsOutputReference;
    putTimeouts(value: OrganizationsAccountTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OrganizationsAccountTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
