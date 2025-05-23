/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsOrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit#id OrganizationsOrganizationalUnit#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit#name OrganizationsOrganizationalUnit#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit#parent_id OrganizationsOrganizationalUnit#parent_id}
    */
    readonly parentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit#tags OrganizationsOrganizationalUnit#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit#tags_all OrganizationsOrganizationalUnit#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface OrganizationsOrganizationalUnitAccounts {
}
export declare function organizationsOrganizationalUnitAccountsToTerraform(struct?: OrganizationsOrganizationalUnitAccounts): any;
export declare function organizationsOrganizationalUnitAccountsToHclTerraform(struct?: OrganizationsOrganizationalUnitAccounts): any;
export declare class OrganizationsOrganizationalUnitAccountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationsOrganizationalUnitAccounts | undefined;
    set internalValue(value: OrganizationsOrganizationalUnitAccounts | undefined);
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
}
export declare class OrganizationsOrganizationalUnitAccountsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OrganizationsOrganizationalUnitAccountsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit aws_organizations_organizational_unit}
*/
export declare class OrganizationsOrganizationalUnit extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_organizations_organizational_unit";
    /**
    * Generates CDKTF code for importing a OrganizationsOrganizationalUnit resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationsOrganizationalUnit to import
    * @param importFromId The id of the existing OrganizationsOrganizationalUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationsOrganizationalUnit to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organizational_unit aws_organizations_organizational_unit} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsOrganizationalUnitConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationsOrganizationalUnitConfig);
    private _accounts;
    get accounts(): OrganizationsOrganizationalUnitAccountsList;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parentId?;
    get parentId(): string;
    set parentId(value: string);
    get parentIdInput(): string | undefined;
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
