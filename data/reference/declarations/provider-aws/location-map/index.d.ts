/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationMapConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#description LocationMap#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#id LocationMap#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#map_name LocationMap#map_name}
    */
    readonly mapName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#tags LocationMap#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#tags_all LocationMap#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#configuration LocationMap#configuration}
    */
    readonly configuration: LocationMapConfiguration;
}
export interface LocationMapConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#style LocationMap#style}
    */
    readonly style: string;
}
export declare function locationMapConfigurationToTerraform(struct?: LocationMapConfigurationOutputReference | LocationMapConfiguration): any;
export declare function locationMapConfigurationToHclTerraform(struct?: LocationMapConfigurationOutputReference | LocationMapConfiguration): any;
export declare class LocationMapConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LocationMapConfiguration | undefined;
    set internalValue(value: LocationMapConfiguration | undefined);
    private _style?;
    get style(): string;
    set style(value: string);
    get styleInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map aws_location_map}
*/
export declare class LocationMap extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_location_map";
    /**
    * Generates CDKTF code for importing a LocationMap resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LocationMap to import
    * @param importFromId The id of the existing LocationMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LocationMap to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_map aws_location_map} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationMapConfig
    */
    constructor(scope: Construct, id: string, config: LocationMapConfig);
    get createTime(): string;
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
    get mapArn(): string;
    private _mapName?;
    get mapName(): string;
    set mapName(value: string);
    get mapNameInput(): string | undefined;
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
    private _configuration;
    get configuration(): LocationMapConfigurationOutputReference;
    putConfiguration(value: LocationMapConfiguration): void;
    get configurationInput(): LocationMapConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
