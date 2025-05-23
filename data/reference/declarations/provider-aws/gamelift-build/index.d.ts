/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftBuildConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#id GameliftBuild#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#name GameliftBuild#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#operating_system GameliftBuild#operating_system}
    */
    readonly operatingSystem: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#tags GameliftBuild#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#tags_all GameliftBuild#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#version GameliftBuild#version}
    */
    readonly version?: string;
    /**
    * storage_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#storage_location GameliftBuild#storage_location}
    */
    readonly storageLocation: GameliftBuildStorageLocation;
}
export interface GameliftBuildStorageLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#bucket GameliftBuild#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#key GameliftBuild#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#object_version GameliftBuild#object_version}
    */
    readonly objectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#role_arn GameliftBuild#role_arn}
    */
    readonly roleArn: string;
}
export declare function gameliftBuildStorageLocationToTerraform(struct?: GameliftBuildStorageLocationOutputReference | GameliftBuildStorageLocation): any;
export declare function gameliftBuildStorageLocationToHclTerraform(struct?: GameliftBuildStorageLocationOutputReference | GameliftBuildStorageLocation): any;
export declare class GameliftBuildStorageLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftBuildStorageLocation | undefined;
    set internalValue(value: GameliftBuildStorageLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _objectVersion?;
    get objectVersion(): string;
    set objectVersion(value: string);
    resetObjectVersion(): void;
    get objectVersionInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build aws_gamelift_build}
*/
export declare class GameliftBuild extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_gamelift_build";
    /**
    * Generates CDKTF code for importing a GameliftBuild resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GameliftBuild to import
    * @param importFromId The id of the existing GameliftBuild that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GameliftBuild to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_build aws_gamelift_build} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftBuildConfig
    */
    constructor(scope: Construct, id: string, config: GameliftBuildConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    get operatingSystemInput(): string | undefined;
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _storageLocation;
    get storageLocation(): GameliftBuildStorageLocationOutputReference;
    putStorageLocation(value: GameliftBuildStorageLocation): void;
    get storageLocationInput(): GameliftBuildStorageLocation | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
