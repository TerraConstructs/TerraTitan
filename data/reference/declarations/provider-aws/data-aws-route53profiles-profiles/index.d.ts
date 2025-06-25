/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ProfilesProfilesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAwsRoute53ProfilesProfilesProfiles {
}
export declare function dataAwsRoute53ProfilesProfilesProfilesToTerraform(struct?: DataAwsRoute53ProfilesProfilesProfiles): any;
export declare function dataAwsRoute53ProfilesProfilesProfilesToHclTerraform(struct?: DataAwsRoute53ProfilesProfilesProfiles): any;
export declare class DataAwsRoute53ProfilesProfilesProfilesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53ProfilesProfilesProfiles | undefined;
    set internalValue(value: DataAwsRoute53ProfilesProfilesProfiles | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
    get shareStatus(): string;
}
export declare class DataAwsRoute53ProfilesProfilesProfilesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRoute53ProfilesProfilesProfilesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53profiles_profiles aws_route53profiles_profiles}
*/
export declare class DataAwsRoute53ProfilesProfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53profiles_profiles";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53ProfilesProfiles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53ProfilesProfiles to import
    * @param importFromId The id of the existing DataAwsRoute53ProfilesProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53profiles_profiles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53ProfilesProfiles to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53profiles_profiles aws_route53profiles_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ProfilesProfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ProfilesProfilesConfig);
    private _profiles;
    get profiles(): DataAwsRoute53ProfilesProfilesProfilesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
