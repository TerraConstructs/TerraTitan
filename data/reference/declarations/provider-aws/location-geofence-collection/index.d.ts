/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LocationGeofenceCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#collection_name LocationGeofenceCollection#collection_name}
    */
    readonly collectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#description LocationGeofenceCollection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#id LocationGeofenceCollection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#kms_key_id LocationGeofenceCollection#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#tags LocationGeofenceCollection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#tags_all LocationGeofenceCollection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#timeouts LocationGeofenceCollection#timeouts}
    */
    readonly timeouts?: LocationGeofenceCollectionTimeouts;
}
export interface LocationGeofenceCollectionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#create LocationGeofenceCollection#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#delete LocationGeofenceCollection#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#update LocationGeofenceCollection#update}
    */
    readonly update?: string;
}
export declare function locationGeofenceCollectionTimeoutsToTerraform(struct?: LocationGeofenceCollectionTimeouts | cdktf.IResolvable): any;
export declare function locationGeofenceCollectionTimeoutsToHclTerraform(struct?: LocationGeofenceCollectionTimeouts | cdktf.IResolvable): any;
export declare class LocationGeofenceCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LocationGeofenceCollectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LocationGeofenceCollectionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection aws_location_geofence_collection}
*/
export declare class LocationGeofenceCollection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_location_geofence_collection";
    /**
    * Generates CDKTF code for importing a LocationGeofenceCollection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LocationGeofenceCollection to import
    * @param importFromId The id of the existing LocationGeofenceCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LocationGeofenceCollection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/location_geofence_collection aws_location_geofence_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LocationGeofenceCollectionConfig
    */
    constructor(scope: Construct, id: string, config: LocationGeofenceCollectionConfig);
    get collectionArn(): string;
    private _collectionName?;
    get collectionName(): string;
    set collectionName(value: string);
    get collectionNameInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): LocationGeofenceCollectionTimeoutsOutputReference;
    putTimeouts(value: LocationGeofenceCollectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LocationGeofenceCollectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
