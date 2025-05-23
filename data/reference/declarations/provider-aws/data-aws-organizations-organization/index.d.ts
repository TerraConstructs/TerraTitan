/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organization#id DataAwsOrganizationsOrganization#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsOrganizationsOrganizationAccounts {
}
export declare function dataAwsOrganizationsOrganizationAccountsToTerraform(struct?: DataAwsOrganizationsOrganizationAccounts): any;
export declare function dataAwsOrganizationsOrganizationAccountsToHclTerraform(struct?: DataAwsOrganizationsOrganizationAccounts): any;
export declare class DataAwsOrganizationsOrganizationAccountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsOrganizationAccounts | undefined;
    set internalValue(value: DataAwsOrganizationsOrganizationAccounts | undefined);
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class DataAwsOrganizationsOrganizationAccountsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsOrganizationAccountsOutputReference;
}
export interface DataAwsOrganizationsOrganizationNonMasterAccounts {
}
export declare function dataAwsOrganizationsOrganizationNonMasterAccountsToTerraform(struct?: DataAwsOrganizationsOrganizationNonMasterAccounts): any;
export declare function dataAwsOrganizationsOrganizationNonMasterAccountsToHclTerraform(struct?: DataAwsOrganizationsOrganizationNonMasterAccounts): any;
export declare class DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsOrganizationNonMasterAccounts | undefined;
    set internalValue(value: DataAwsOrganizationsOrganizationNonMasterAccounts | undefined);
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class DataAwsOrganizationsOrganizationNonMasterAccountsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsOrganizationNonMasterAccountsOutputReference;
}
export interface DataAwsOrganizationsOrganizationRootsPolicyTypes {
}
export declare function dataAwsOrganizationsOrganizationRootsPolicyTypesToTerraform(struct?: DataAwsOrganizationsOrganizationRootsPolicyTypes): any;
export declare function dataAwsOrganizationsOrganizationRootsPolicyTypesToHclTerraform(struct?: DataAwsOrganizationsOrganizationRootsPolicyTypes): any;
export declare class DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsOrganizationRootsPolicyTypes | undefined;
    set internalValue(value: DataAwsOrganizationsOrganizationRootsPolicyTypes | undefined);
    get status(): string;
    get type(): string;
}
export declare class DataAwsOrganizationsOrganizationRootsPolicyTypesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsOrganizationRootsPolicyTypesOutputReference;
}
export interface DataAwsOrganizationsOrganizationRoots {
}
export declare function dataAwsOrganizationsOrganizationRootsToTerraform(struct?: DataAwsOrganizationsOrganizationRoots): any;
export declare function dataAwsOrganizationsOrganizationRootsToHclTerraform(struct?: DataAwsOrganizationsOrganizationRoots): any;
export declare class DataAwsOrganizationsOrganizationRootsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsOrganizationRoots | undefined;
    set internalValue(value: DataAwsOrganizationsOrganizationRoots | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
    private _policyTypes;
    get policyTypes(): DataAwsOrganizationsOrganizationRootsPolicyTypesList;
}
export declare class DataAwsOrganizationsOrganizationRootsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsOrganizationRootsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organization aws_organizations_organization}
*/
export declare class DataAwsOrganizationsOrganization extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_organizations_organization";
    /**
    * Generates CDKTF code for importing a DataAwsOrganizationsOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOrganizationsOrganization to import
    * @param importFromId The id of the existing DataAwsOrganizationsOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOrganizationsOrganization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_organization aws_organizations_organization} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsOrganizationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOrganizationsOrganizationConfig);
    private _accounts;
    get accounts(): DataAwsOrganizationsOrganizationAccountsList;
    get arn(): string;
    get awsServiceAccessPrincipals(): string[];
    get enabledPolicyTypes(): string[];
    get featureSet(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get masterAccountArn(): string;
    get masterAccountEmail(): string;
    get masterAccountId(): string;
    get masterAccountName(): string;
    private _nonMasterAccounts;
    get nonMasterAccounts(): DataAwsOrganizationsOrganizationNonMasterAccountsList;
    private _roots;
    get roots(): DataAwsOrganizationsOrganizationRootsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
