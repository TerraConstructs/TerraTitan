/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcEndpointAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_endpoint_associations#vpc_endpoint_id DataAwsVpcEndpointAssociations#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
}
export interface DataAwsVpcEndpointAssociationsAssociationsDnsEntry {
}
export declare function dataAwsVpcEndpointAssociationsAssociationsDnsEntryToTerraform(struct?: DataAwsVpcEndpointAssociationsAssociationsDnsEntry): any;
export declare function dataAwsVpcEndpointAssociationsAssociationsDnsEntryToHclTerraform(struct?: DataAwsVpcEndpointAssociationsAssociationsDnsEntry): any;
export declare class DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcEndpointAssociationsAssociationsDnsEntry | undefined;
    set internalValue(value: DataAwsVpcEndpointAssociationsAssociationsDnsEntry | undefined);
    get dnsName(): string;
    get hostedZoneId(): string;
}
export declare class DataAwsVpcEndpointAssociationsAssociationsDnsEntryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcEndpointAssociationsAssociationsDnsEntryOutputReference;
}
export interface DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry {
}
export declare function dataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryToTerraform(struct?: DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry): any;
export declare function dataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryToHclTerraform(struct?: DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry): any;
export declare class DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry | undefined;
    set internalValue(value: DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntry | undefined);
    get dnsName(): string;
    get hostedZoneId(): string;
}
export declare class DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryOutputReference;
}
export interface DataAwsVpcEndpointAssociationsAssociations {
}
export declare function dataAwsVpcEndpointAssociationsAssociationsToTerraform(struct?: DataAwsVpcEndpointAssociationsAssociations): any;
export declare function dataAwsVpcEndpointAssociationsAssociationsToHclTerraform(struct?: DataAwsVpcEndpointAssociationsAssociations): any;
export declare class DataAwsVpcEndpointAssociationsAssociationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcEndpointAssociationsAssociations | undefined;
    set internalValue(value: DataAwsVpcEndpointAssociationsAssociations | undefined);
    get associatedResourceAccessibility(): string;
    get associatedResourceArn(): string;
    private _dnsEntry;
    get dnsEntry(): DataAwsVpcEndpointAssociationsAssociationsDnsEntryList;
    get id(): string;
    private _privateDnsEntry;
    get privateDnsEntry(): DataAwsVpcEndpointAssociationsAssociationsPrivateDnsEntryList;
    get resourceConfigurationGroupArn(): string;
    get serviceNetworkArn(): string;
    get serviceNetworkName(): string;
    private _tags;
    get tags(): cdktf.StringMap;
}
export declare class DataAwsVpcEndpointAssociationsAssociationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcEndpointAssociationsAssociationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_endpoint_associations aws_vpc_endpoint_associations}
*/
export declare class DataAwsVpcEndpointAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_endpoint_associations";
    /**
    * Generates CDKTF code for importing a DataAwsVpcEndpointAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcEndpointAssociations to import
    * @param importFromId The id of the existing DataAwsVpcEndpointAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_endpoint_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcEndpointAssociations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/vpc_endpoint_associations aws_vpc_endpoint_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsVpcEndpointAssociationsConfig);
    private _associations;
    get associations(): DataAwsVpcEndpointAssociationsAssociationsList;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
