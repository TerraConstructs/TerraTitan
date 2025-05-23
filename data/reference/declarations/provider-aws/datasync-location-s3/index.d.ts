/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#agent_arns DatasyncLocationS3#agent_arns}
    */
    readonly agentArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#id DatasyncLocationS3#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}
    */
    readonly s3BucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#s3_storage_class DatasyncLocationS3#s3_storage_class}
    */
    readonly s3StorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#subdirectory DatasyncLocationS3#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#tags DatasyncLocationS3#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#tags_all DatasyncLocationS3#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * s3_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#s3_config DatasyncLocationS3#s3_config}
    */
    readonly s3Config: DatasyncLocationS3S3Config;
}
export interface DatasyncLocationS3S3Config {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}
    */
    readonly bucketAccessRoleArn: string;
}
export declare function datasyncLocationS3S3ConfigToTerraform(struct?: DatasyncLocationS3S3ConfigOutputReference | DatasyncLocationS3S3Config): any;
export declare function datasyncLocationS3S3ConfigToHclTerraform(struct?: DatasyncLocationS3S3ConfigOutputReference | DatasyncLocationS3S3Config): any;
export declare class DatasyncLocationS3S3ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationS3S3Config | undefined;
    set internalValue(value: DatasyncLocationS3S3Config | undefined);
    private _bucketAccessRoleArn?;
    get bucketAccessRoleArn(): string;
    set bucketAccessRoleArn(value: string);
    get bucketAccessRoleArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3 aws_datasync_location_s3}
*/
export declare class DatasyncLocationS3 extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_s3";
    /**
    * Generates CDKTF code for importing a DatasyncLocationS3 resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationS3 to import
    * @param importFromId The id of the existing DatasyncLocationS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationS3 to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_s3 aws_datasync_location_s3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationS3Config
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationS3Config);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    resetAgentArns(): void;
    get agentArnsInput(): string[] | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _s3BucketArn?;
    get s3BucketArn(): string;
    set s3BucketArn(value: string);
    get s3BucketArnInput(): string | undefined;
    private _s3StorageClass?;
    get s3StorageClass(): string;
    set s3StorageClass(value: string);
    resetS3StorageClass(): void;
    get s3StorageClassInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _s3Config;
    get s3Config(): DatasyncLocationS3S3ConfigOutputReference;
    putS3Config(value: DatasyncLocationS3S3Config): void;
    get s3ConfigInput(): DatasyncLocationS3S3Config | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
