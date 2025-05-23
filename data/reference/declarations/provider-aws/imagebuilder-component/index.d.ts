/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}
    */
    readonly changeDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#id ImagebuilderComponent#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}
    */
    readonly platform: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#skip_destroy ImagebuilderComponent#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}
    */
    readonly supportedOsVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#tags_all ImagebuilderComponent#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}
    */
    readonly uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}
    */
    readonly version: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component aws_imagebuilder_component}
*/
export declare class ImagebuilderComponent extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_component";
    /**
    * Generates CDKTF code for importing a ImagebuilderComponent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderComponent to import
    * @param importFromId The id of the existing ImagebuilderComponent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderComponent to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_component aws_imagebuilder_component} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderComponentConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderComponentConfig);
    get arn(): string;
    private _changeDescription?;
    get changeDescription(): string;
    set changeDescription(value: string);
    resetChangeDescription(): void;
    get changeDescriptionInput(): string | undefined;
    private _data?;
    get data(): string;
    set data(value: string);
    resetData(): void;
    get dataInput(): string | undefined;
    get dateCreated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get encrypted(): cdktf.IResolvable;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get owner(): string;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    get platformInput(): string | undefined;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _supportedOsVersions?;
    get supportedOsVersions(): string[];
    set supportedOsVersions(value: string[]);
    resetSupportedOsVersions(): void;
    get supportedOsVersionsInput(): string[] | undefined;
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
    get type(): string;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
