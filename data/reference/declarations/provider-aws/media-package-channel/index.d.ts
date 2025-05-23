/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediaPackageChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel#channel_id MediaPackageChannel#channel_id}
    */
    readonly channelId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel#description MediaPackageChannel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel#id MediaPackageChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel#tags MediaPackageChannel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel#tags_all MediaPackageChannel#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface MediaPackageChannelHlsIngestIngestEndpoints {
}
export declare function mediaPackageChannelHlsIngestIngestEndpointsToTerraform(struct?: MediaPackageChannelHlsIngestIngestEndpoints): any;
export declare function mediaPackageChannelHlsIngestIngestEndpointsToHclTerraform(struct?: MediaPackageChannelHlsIngestIngestEndpoints): any;
export declare class MediaPackageChannelHlsIngestIngestEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MediaPackageChannelHlsIngestIngestEndpoints | undefined;
    set internalValue(value: MediaPackageChannelHlsIngestIngestEndpoints | undefined);
    get password(): string;
    get url(): string;
    get username(): string;
}
export declare class MediaPackageChannelHlsIngestIngestEndpointsList extends cdktf.ComplexList {
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
    get(index: number): MediaPackageChannelHlsIngestIngestEndpointsOutputReference;
}
export interface MediaPackageChannelHlsIngest {
}
export declare function mediaPackageChannelHlsIngestToTerraform(struct?: MediaPackageChannelHlsIngest): any;
export declare function mediaPackageChannelHlsIngestToHclTerraform(struct?: MediaPackageChannelHlsIngest): any;
export declare class MediaPackageChannelHlsIngestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MediaPackageChannelHlsIngest | undefined;
    set internalValue(value: MediaPackageChannelHlsIngest | undefined);
    private _ingestEndpoints;
    get ingestEndpoints(): MediaPackageChannelHlsIngestIngestEndpointsList;
}
export declare class MediaPackageChannelHlsIngestList extends cdktf.ComplexList {
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
    get(index: number): MediaPackageChannelHlsIngestOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel aws_media_package_channel}
*/
export declare class MediaPackageChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_media_package_channel";
    /**
    * Generates CDKTF code for importing a MediaPackageChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MediaPackageChannel to import
    * @param importFromId The id of the existing MediaPackageChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MediaPackageChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_package_channel aws_media_package_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaPackageChannelConfig
    */
    constructor(scope: Construct, id: string, config: MediaPackageChannelConfig);
    get arn(): string;
    private _channelId?;
    get channelId(): string;
    set channelId(value: string);
    get channelIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _hlsIngest;
    get hlsIngest(): MediaPackageChannelHlsIngestList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
