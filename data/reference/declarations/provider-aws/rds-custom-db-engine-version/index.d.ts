/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsCustomDbEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}
    */
    readonly databaseInstallationFilesS3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}
    */
    readonly databaseInstallationFilesS3Prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}
    */
    readonly engineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#filename RdsCustomDbEngineVersion#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#id RdsCustomDbEngineVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}
    */
    readonly manifest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#manifest_hash RdsCustomDbEngineVersion#manifest_hash}
    */
    readonly manifestHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#source_image_id RdsCustomDbEngineVersion#source_image_id}
    */
    readonly sourceImageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#tags_all RdsCustomDbEngineVersion#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#timeouts RdsCustomDbEngineVersion#timeouts}
    */
    readonly timeouts?: RdsCustomDbEngineVersionTimeouts;
}
export interface RdsCustomDbEngineVersionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#create RdsCustomDbEngineVersion#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#delete RdsCustomDbEngineVersion#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#update RdsCustomDbEngineVersion#update}
    */
    readonly update?: string;
}
export declare function rdsCustomDbEngineVersionTimeoutsToTerraform(struct?: RdsCustomDbEngineVersionTimeouts | cdktf.IResolvable): any;
export declare function rdsCustomDbEngineVersionTimeoutsToHclTerraform(struct?: RdsCustomDbEngineVersionTimeouts | cdktf.IResolvable): any;
export declare class RdsCustomDbEngineVersionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsCustomDbEngineVersionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsCustomDbEngineVersionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version aws_rds_custom_db_engine_version}
*/
export declare class RdsCustomDbEngineVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_custom_db_engine_version";
    /**
    * Generates CDKTF code for importing a RdsCustomDbEngineVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsCustomDbEngineVersion to import
    * @param importFromId The id of the existing RdsCustomDbEngineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsCustomDbEngineVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rds_custom_db_engine_version aws_rds_custom_db_engine_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsCustomDbEngineVersionConfig
    */
    constructor(scope: Construct, id: string, config: RdsCustomDbEngineVersionConfig);
    get arn(): string;
    get createTime(): string;
    private _databaseInstallationFilesS3BucketName?;
    get databaseInstallationFilesS3BucketName(): string;
    set databaseInstallationFilesS3BucketName(value: string);
    resetDatabaseInstallationFilesS3BucketName(): void;
    get databaseInstallationFilesS3BucketNameInput(): string | undefined;
    private _databaseInstallationFilesS3Prefix?;
    get databaseInstallationFilesS3Prefix(): string;
    set databaseInstallationFilesS3Prefix(value: string);
    resetDatabaseInstallationFilesS3Prefix(): void;
    get databaseInstallationFilesS3PrefixInput(): string | undefined;
    get dbParameterGroupFamily(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    get engineVersionInput(): string | undefined;
    private _filename?;
    get filename(): string;
    set filename(value: string);
    resetFilename(): void;
    get filenameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageId(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get majorEngineVersion(): string;
    private _manifest?;
    get manifest(): string;
    set manifest(value: string);
    resetManifest(): void;
    get manifestInput(): string | undefined;
    get manifestComputed(): string;
    private _manifestHash?;
    get manifestHash(): string;
    set manifestHash(value: string);
    resetManifestHash(): void;
    get manifestHashInput(): string | undefined;
    private _sourceImageId?;
    get sourceImageId(): string;
    set sourceImageId(value: string);
    resetSourceImageId(): void;
    get sourceImageIdInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): RdsCustomDbEngineVersionTimeoutsOutputReference;
    putTimeouts(value: RdsCustomDbEngineVersionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsCustomDbEngineVersionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
