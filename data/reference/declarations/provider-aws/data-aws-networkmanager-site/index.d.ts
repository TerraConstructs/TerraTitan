/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNetworkmanagerSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_site#global_network_id DataAwsNetworkmanagerSite#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_site#id DataAwsNetworkmanagerSite#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_site#site_id DataAwsNetworkmanagerSite#site_id}
    */
    readonly siteId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_site#tags DataAwsNetworkmanagerSite#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsNetworkmanagerSiteLocation {
}
export declare function dataAwsNetworkmanagerSiteLocationToTerraform(struct?: DataAwsNetworkmanagerSiteLocation): any;
export declare function dataAwsNetworkmanagerSiteLocationToHclTerraform(struct?: DataAwsNetworkmanagerSiteLocation): any;
export declare class DataAwsNetworkmanagerSiteLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerSiteLocation | undefined;
    set internalValue(value: DataAwsNetworkmanagerSiteLocation | undefined);
    get address(): string;
    get latitude(): string;
    get longitude(): string;
}
export declare class DataAwsNetworkmanagerSiteLocationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkmanagerSiteLocationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_site aws_networkmanager_site}
*/
export declare class DataAwsNetworkmanagerSite extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_networkmanager_site";
    /**
    * Generates CDKTF code for importing a DataAwsNetworkmanagerSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNetworkmanagerSite to import
    * @param importFromId The id of the existing DataAwsNetworkmanagerSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNetworkmanagerSite to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_site aws_networkmanager_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkmanagerSiteConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsNetworkmanagerSiteConfig);
    get arn(): string;
    get description(): string;
    private _globalNetworkId?;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _location;
    get location(): DataAwsNetworkmanagerSiteLocationList;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    get siteIdInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
