/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOrganizationsDelegatedAdministratorsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_administrators#id DataAwsOrganizationsDelegatedAdministrators#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_administrators#service_principal DataAwsOrganizationsDelegatedAdministrators#service_principal}
    */
    readonly servicePrincipal?: string;
}
export interface DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators {
}
export declare function dataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsToTerraform(struct?: DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators): any;
export declare function dataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsToHclTerraform(struct?: DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators): any;
export declare class DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators | undefined;
    set internalValue(value: DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministrators | undefined);
    get arn(): string;
    get delegationEnabledDate(): string;
    get email(): string;
    get id(): string;
    get joinedMethod(): string;
    get joinedTimestamp(): string;
    get name(): string;
    get status(): string;
}
export declare class DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_administrators aws_organizations_delegated_administrators}
*/
export declare class DataAwsOrganizationsDelegatedAdministrators extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_organizations_delegated_administrators";
    /**
    * Generates CDKTF code for importing a DataAwsOrganizationsDelegatedAdministrators resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOrganizationsDelegatedAdministrators to import
    * @param importFromId The id of the existing DataAwsOrganizationsDelegatedAdministrators that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_administrators#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOrganizationsDelegatedAdministrators to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/organizations_delegated_administrators aws_organizations_delegated_administrators} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOrganizationsDelegatedAdministratorsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOrganizationsDelegatedAdministratorsConfig);
    private _delegatedAdministrators;
    get delegatedAdministrators(): DataAwsOrganizationsDelegatedAdministratorsDelegatedAdministratorsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _servicePrincipal?;
    get servicePrincipal(): string;
    set servicePrincipal(value: string);
    resetServicePrincipal(): void;
    get servicePrincipalInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
