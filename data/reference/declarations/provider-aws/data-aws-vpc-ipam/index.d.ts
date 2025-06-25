/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcIpamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipam#id DataAwsVpcIpam#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export interface DataAwsVpcIpamOperatingRegions {
}
export declare function dataAwsVpcIpamOperatingRegionsToTerraform(struct?: DataAwsVpcIpamOperatingRegions): any;
export declare function dataAwsVpcIpamOperatingRegionsToHclTerraform(struct?: DataAwsVpcIpamOperatingRegions): any;
export declare class DataAwsVpcIpamOperatingRegionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcIpamOperatingRegions | undefined;
    set internalValue(value: DataAwsVpcIpamOperatingRegions | undefined);
    get regionName(): string;
}
export declare class DataAwsVpcIpamOperatingRegionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcIpamOperatingRegionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipam aws_vpc_ipam}
*/
export declare class DataAwsVpcIpam extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_ipam";
    /**
    * Generates CDKTF code for importing a DataAwsVpcIpam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcIpam to import
    * @param importFromId The id of the existing DataAwsVpcIpam that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcIpam to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_ipam aws_vpc_ipam} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcIpamConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsVpcIpamConfig);
    get arn(): string;
    get defaultResourceDiscoveryAssociationId(): string;
    get defaultResourceDiscoveryId(): string;
    get description(): string;
    get enablePrivateGua(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get ipamRegion(): string;
    private _operatingRegions;
    get operatingRegions(): DataAwsVpcIpamOperatingRegionsList;
    get ownerId(): string;
    get privateDefaultScopeId(): string;
    get publicDefaultScopeId(): string;
    get resourceDiscoveryAssociationCount(): number;
    get scopeCount(): number;
    get state(): string;
    get stateMessage(): string;
    private _tags;
    get tags(): cdktf.StringMap;
    get tier(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
