/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLocationGeofenceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_geofence_collection#collection_name DataAwsLocationGeofenceCollection#collection_name}
    */
    readonly collectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_geofence_collection#id DataAwsLocationGeofenceCollection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_geofence_collection#kms_key_id DataAwsLocationGeofenceCollection#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_geofence_collection#tags DataAwsLocationGeofenceCollection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_geofence_collection aws_location_geofence_collection}
*/
export declare class DataAwsLocationGeofenceCollection extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_location_geofence_collection";
    /**
    * Generates CDKTF code for importing a DataAwsLocationGeofenceCollection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLocationGeofenceCollection to import
    * @param importFromId The id of the existing DataAwsLocationGeofenceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_geofence_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLocationGeofenceCollection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_geofence_collection aws_location_geofence_collection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLocationGeofenceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLocationGeofenceCollectionConfig);
    get collectionArn(): string;
    private _collectionName?;
    get collectionName(): string;
    set collectionName(value: string);
    get collectionNameInput(): string | undefined;
    get createTime(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
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
