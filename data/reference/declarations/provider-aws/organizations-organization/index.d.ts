/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsOrganizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organization#aws_service_access_principals OrganizationsOrganization#aws_service_access_principals}
    */
    readonly awsServiceAccessPrincipals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organization#enabled_policy_types OrganizationsOrganization#enabled_policy_types}
    */
    readonly enabledPolicyTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organization#feature_set OrganizationsOrganization#feature_set}
    */
    readonly featureSet?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organization#id OrganizationsOrganization#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface OrganizationsOrganizationAccounts {
}
export declare function organizationsOrganizationAccountsToTerraform(struct?: OrganizationsOrganizationAccounts): any;
export declare function organizationsOrganizationAccountsToHclTerraform(struct?: OrganizationsOrganizationAccounts): any;
export declare class OrganizationsOrganizationAccountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationsOrganizationAccounts | undefined;
    set internalValue(value: OrganizationsOrganizationAccounts | undefined);
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class OrganizationsOrganizationAccountsList extends cdktf.ComplexList {
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
    get(index: number): OrganizationsOrganizationAccountsOutputReference;
}
export interface OrganizationsOrganizationNonMasterAccounts {
}
export declare function organizationsOrganizationNonMasterAccountsToTerraform(struct?: OrganizationsOrganizationNonMasterAccounts): any;
export declare function organizationsOrganizationNonMasterAccountsToHclTerraform(struct?: OrganizationsOrganizationNonMasterAccounts): any;
export declare class OrganizationsOrganizationNonMasterAccountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationsOrganizationNonMasterAccounts | undefined;
    set internalValue(value: OrganizationsOrganizationNonMasterAccounts | undefined);
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get status(): string;
}
export declare class OrganizationsOrganizationNonMasterAccountsList extends cdktf.ComplexList {
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
    get(index: number): OrganizationsOrganizationNonMasterAccountsOutputReference;
}
export interface OrganizationsOrganizationRootsPolicyTypes {
}
export declare function organizationsOrganizationRootsPolicyTypesToTerraform(struct?: OrganizationsOrganizationRootsPolicyTypes): any;
export declare function organizationsOrganizationRootsPolicyTypesToHclTerraform(struct?: OrganizationsOrganizationRootsPolicyTypes): any;
export declare class OrganizationsOrganizationRootsPolicyTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationsOrganizationRootsPolicyTypes | undefined;
    set internalValue(value: OrganizationsOrganizationRootsPolicyTypes | undefined);
    get status(): string;
    get type(): string;
}
export declare class OrganizationsOrganizationRootsPolicyTypesList extends cdktf.ComplexList {
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
    get(index: number): OrganizationsOrganizationRootsPolicyTypesOutputReference;
}
export interface OrganizationsOrganizationRoots {
}
export declare function organizationsOrganizationRootsToTerraform(struct?: OrganizationsOrganizationRoots): any;
export declare function organizationsOrganizationRootsToHclTerraform(struct?: OrganizationsOrganizationRoots): any;
export declare class OrganizationsOrganizationRootsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OrganizationsOrganizationRoots | undefined;
    set internalValue(value: OrganizationsOrganizationRoots | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
    private _policyTypes;
    get policyTypes(): OrganizationsOrganizationRootsPolicyTypesList;
}
export declare class OrganizationsOrganizationRootsList extends cdktf.ComplexList {
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
    get(index: number): OrganizationsOrganizationRootsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organization aws_organizations_organization}
*/
export declare class OrganizationsOrganization extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_organizations_organization";
    /**
    * Generates CDKTF code for importing a OrganizationsOrganization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationsOrganization to import
    * @param importFromId The id of the existing OrganizationsOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationsOrganization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_organization aws_organizations_organization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsOrganizationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: OrganizationsOrganizationConfig);
    private _accounts;
    get accounts(): OrganizationsOrganizationAccountsList;
    get arn(): string;
    private _awsServiceAccessPrincipals?;
    get awsServiceAccessPrincipals(): string[];
    set awsServiceAccessPrincipals(value: string[]);
    resetAwsServiceAccessPrincipals(): void;
    get awsServiceAccessPrincipalsInput(): string[] | undefined;
    private _enabledPolicyTypes?;
    get enabledPolicyTypes(): string[];
    set enabledPolicyTypes(value: string[]);
    resetEnabledPolicyTypes(): void;
    get enabledPolicyTypesInput(): string[] | undefined;
    private _featureSet?;
    get featureSet(): string;
    set featureSet(value: string);
    resetFeatureSet(): void;
    get featureSetInput(): string | undefined;
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
    get nonMasterAccounts(): OrganizationsOrganizationNonMasterAccountsList;
    private _roots;
    get roots(): OrganizationsOrganizationRootsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
