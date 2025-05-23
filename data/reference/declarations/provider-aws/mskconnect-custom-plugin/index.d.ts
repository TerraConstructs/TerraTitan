/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MskconnectCustomPluginConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#content_type MskconnectCustomPlugin#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#description MskconnectCustomPlugin#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#id MskconnectCustomPlugin#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#name MskconnectCustomPlugin#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#tags MskconnectCustomPlugin#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#tags_all MskconnectCustomPlugin#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#location MskconnectCustomPlugin#location}
    */
    readonly location: MskconnectCustomPluginLocation;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#timeouts MskconnectCustomPlugin#timeouts}
    */
    readonly timeouts?: MskconnectCustomPluginTimeouts;
}
export interface MskconnectCustomPluginLocationS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#bucket_arn MskconnectCustomPlugin#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#file_key MskconnectCustomPlugin#file_key}
    */
    readonly fileKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#object_version MskconnectCustomPlugin#object_version}
    */
    readonly objectVersion?: string;
}
export declare function mskconnectCustomPluginLocationS3ToTerraform(struct?: MskconnectCustomPluginLocationS3OutputReference | MskconnectCustomPluginLocationS3): any;
export declare function mskconnectCustomPluginLocationS3ToHclTerraform(struct?: MskconnectCustomPluginLocationS3OutputReference | MskconnectCustomPluginLocationS3): any;
export declare class MskconnectCustomPluginLocationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectCustomPluginLocationS3 | undefined;
    set internalValue(value: MskconnectCustomPluginLocationS3 | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _fileKey?;
    get fileKey(): string;
    set fileKey(value: string);
    get fileKeyInput(): string | undefined;
    private _objectVersion?;
    get objectVersion(): string;
    set objectVersion(value: string);
    resetObjectVersion(): void;
    get objectVersionInput(): string | undefined;
}
export interface MskconnectCustomPluginLocation {
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#s3 MskconnectCustomPlugin#s3}
    */
    readonly s3: MskconnectCustomPluginLocationS3;
}
export declare function mskconnectCustomPluginLocationToTerraform(struct?: MskconnectCustomPluginLocationOutputReference | MskconnectCustomPluginLocation): any;
export declare function mskconnectCustomPluginLocationToHclTerraform(struct?: MskconnectCustomPluginLocationOutputReference | MskconnectCustomPluginLocation): any;
export declare class MskconnectCustomPluginLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectCustomPluginLocation | undefined;
    set internalValue(value: MskconnectCustomPluginLocation | undefined);
    private _s3;
    get s3(): MskconnectCustomPluginLocationS3OutputReference;
    putS3(value: MskconnectCustomPluginLocationS3): void;
    get s3Input(): MskconnectCustomPluginLocationS3 | undefined;
}
export interface MskconnectCustomPluginTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#create MskconnectCustomPlugin#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#delete MskconnectCustomPlugin#delete}
    */
    readonly delete?: string;
}
export declare function mskconnectCustomPluginTimeoutsToTerraform(struct?: MskconnectCustomPluginTimeouts | cdktf.IResolvable): any;
export declare function mskconnectCustomPluginTimeoutsToHclTerraform(struct?: MskconnectCustomPluginTimeouts | cdktf.IResolvable): any;
export declare class MskconnectCustomPluginTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MskconnectCustomPluginTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MskconnectCustomPluginTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin aws_mskconnect_custom_plugin}
*/
export declare class MskconnectCustomPlugin extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_mskconnect_custom_plugin";
    /**
    * Generates CDKTF code for importing a MskconnectCustomPlugin resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MskconnectCustomPlugin to import
    * @param importFromId The id of the existing MskconnectCustomPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MskconnectCustomPlugin to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/mskconnect_custom_plugin aws_mskconnect_custom_plugin} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskconnectCustomPluginConfig
    */
    constructor(scope: Construct, id: string, config: MskconnectCustomPluginConfig);
    get arn(): string;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
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
    get latestRevision(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get state(): string;
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
    private _location;
    get location(): MskconnectCustomPluginLocationOutputReference;
    putLocation(value: MskconnectCustomPluginLocation): void;
    get locationInput(): MskconnectCustomPluginLocation | undefined;
    private _timeouts;
    get timeouts(): MskconnectCustomPluginTimeoutsOutputReference;
    putTimeouts(value: MskconnectCustomPluginTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MskconnectCustomPluginTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
