/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLocationPlaceIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_place_index#id DataAwsLocationPlaceIndex#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_place_index#index_name DataAwsLocationPlaceIndex#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_place_index#tags DataAwsLocationPlaceIndex#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsLocationPlaceIndexDataSourceConfiguration {
}
export declare function dataAwsLocationPlaceIndexDataSourceConfigurationToTerraform(struct?: DataAwsLocationPlaceIndexDataSourceConfiguration): any;
export declare function dataAwsLocationPlaceIndexDataSourceConfigurationToHclTerraform(struct?: DataAwsLocationPlaceIndexDataSourceConfiguration): any;
export declare class DataAwsLocationPlaceIndexDataSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLocationPlaceIndexDataSourceConfiguration | undefined;
    set internalValue(value: DataAwsLocationPlaceIndexDataSourceConfiguration | undefined);
    get intendedUse(): string;
}
export declare class DataAwsLocationPlaceIndexDataSourceConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLocationPlaceIndexDataSourceConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_place_index aws_location_place_index}
*/
export declare class DataAwsLocationPlaceIndex extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_location_place_index";
    /**
    * Generates CDKTF code for importing a DataAwsLocationPlaceIndex resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLocationPlaceIndex to import
    * @param importFromId The id of the existing DataAwsLocationPlaceIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_place_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLocationPlaceIndex to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_place_index aws_location_place_index} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLocationPlaceIndexConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLocationPlaceIndexConfig);
    get createTime(): string;
    get dataSource(): string;
    private _dataSourceConfiguration;
    get dataSourceConfiguration(): DataAwsLocationPlaceIndexDataSourceConfigurationList;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get indexArn(): string;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string | undefined;
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
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
