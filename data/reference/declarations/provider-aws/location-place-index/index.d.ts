/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationPlaceIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#data_source LocationPlaceIndex#data_source}
    */
    readonly dataSource: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#description LocationPlaceIndex#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#id LocationPlaceIndex#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#index_name LocationPlaceIndex#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#tags LocationPlaceIndex#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#tags_all LocationPlaceIndex#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * data_source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#data_source_configuration LocationPlaceIndex#data_source_configuration}
    */
    readonly dataSourceConfiguration?: LocationPlaceIndexDataSourceConfiguration;
}
export interface LocationPlaceIndexDataSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#intended_use LocationPlaceIndex#intended_use}
    */
    readonly intendedUse?: string;
}
export declare function locationPlaceIndexDataSourceConfigurationToTerraform(struct?: LocationPlaceIndexDataSourceConfigurationOutputReference | LocationPlaceIndexDataSourceConfiguration): any;
export declare function locationPlaceIndexDataSourceConfigurationToHclTerraform(struct?: LocationPlaceIndexDataSourceConfigurationOutputReference | LocationPlaceIndexDataSourceConfiguration): any;
export declare class LocationPlaceIndexDataSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LocationPlaceIndexDataSourceConfiguration | undefined;
    set internalValue(value: LocationPlaceIndexDataSourceConfiguration | undefined);
    private _intendedUse?;
    get intendedUse(): string;
    set intendedUse(value: string);
    resetIntendedUse(): void;
    get intendedUseInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index aws_location_place_index}
*/
export declare class LocationPlaceIndex extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_location_place_index";
    /**
    * Generates CDKTF code for importing a LocationPlaceIndex resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LocationPlaceIndex to import
    * @param importFromId The id of the existing LocationPlaceIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LocationPlaceIndex to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_place_index aws_location_place_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationPlaceIndexConfig
    */
    constructor(scope: Construct, id: string, config: LocationPlaceIndexConfig);
    get createTime(): string;
    private _dataSource?;
    get dataSource(): string;
    set dataSource(value: string);
    get dataSourceInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    get updateTime(): string;
    private _dataSourceConfiguration;
    get dataSourceConfiguration(): LocationPlaceIndexDataSourceConfigurationOutputReference;
    putDataSourceConfiguration(value: LocationPlaceIndexDataSourceConfiguration): void;
    resetDataSourceConfiguration(): void;
    get dataSourceConfigurationInput(): LocationPlaceIndexDataSourceConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
