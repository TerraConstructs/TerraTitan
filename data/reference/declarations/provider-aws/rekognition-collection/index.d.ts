/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RekognitionCollectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * The name of the Rekognition collection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_collection#collection_id RekognitionCollection#collection_id}
    */
    readonly collectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_collection#tags RekognitionCollection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_collection#timeouts RekognitionCollection#timeouts}
    */
    readonly timeouts?: RekognitionCollectionTimeouts;
}
export interface RekognitionCollectionTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_collection#create RekognitionCollection#create}
    */
    readonly create?: string;
}
export declare function rekognitionCollectionTimeoutsToTerraform(struct?: RekognitionCollectionTimeouts | cdktf.IResolvable): any;
export declare function rekognitionCollectionTimeoutsToHclTerraform(struct?: RekognitionCollectionTimeouts | cdktf.IResolvable): any;
export declare class RekognitionCollectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RekognitionCollectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RekognitionCollectionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_collection aws_rekognition_collection}
*/
export declare class RekognitionCollection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rekognition_collection";
    /**
    * Generates CDKTF code for importing a RekognitionCollection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RekognitionCollection to import
    * @param importFromId The id of the existing RekognitionCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_collection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RekognitionCollection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rekognition_collection aws_rekognition_collection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RekognitionCollectionConfig
    */
    constructor(scope: Construct, id: string, config: RekognitionCollectionConfig);
    get arn(): string;
    private _collectionId?;
    get collectionId(): string;
    set collectionId(value: string);
    get collectionIdInput(): string | undefined;
    get faceModelVersion(): string;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _timeouts;
    get timeouts(): RekognitionCollectionTimeoutsOutputReference;
    putTimeouts(value: RekognitionCollectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RekognitionCollectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
