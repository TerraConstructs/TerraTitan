/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOrganizationsDelegatedServicesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_services#account_id DataAwsOrganizationsDelegatedServices#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_services#id DataAwsOrganizationsDelegatedServices#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsOrganizationsDelegatedServicesDelegatedServices {
}
export declare function dataAwsOrganizationsDelegatedServicesDelegatedServicesToTerraform(struct?: DataAwsOrganizationsDelegatedServicesDelegatedServices): any;
export declare function dataAwsOrganizationsDelegatedServicesDelegatedServicesToHclTerraform(struct?: DataAwsOrganizationsDelegatedServicesDelegatedServices): any;
export declare class DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsDelegatedServicesDelegatedServices | undefined;
    set internalValue(value: DataAwsOrganizationsDelegatedServicesDelegatedServices | undefined);
    get delegationEnabledDate(): string;
    get servicePrincipal(): string;
}
export declare class DataAwsOrganizationsDelegatedServicesDelegatedServicesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsDelegatedServicesDelegatedServicesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_services aws_organizations_delegated_services}
*/
export declare class DataAwsOrganizationsDelegatedServices extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_organizations_delegated_services";
    /**
    * Generates CDKTF code for importing a DataAwsOrganizationsDelegatedServices resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOrganizationsDelegatedServices to import
    * @param importFromId The id of the existing DataAwsOrganizationsDelegatedServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_services#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOrganizationsDelegatedServices to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_services aws_organizations_delegated_services} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedServicesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOrganizationsDelegatedServicesConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _delegatedServices;
    get delegatedServices(): DataAwsOrganizationsDelegatedServicesDelegatedServicesList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
