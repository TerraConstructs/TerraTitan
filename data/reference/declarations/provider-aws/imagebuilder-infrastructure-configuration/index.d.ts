/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderInfrastructureConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#description ImagebuilderInfrastructureConfiguration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#id ImagebuilderInfrastructureConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name ImagebuilderInfrastructureConfiguration#instance_profile_name}
    */
    readonly instanceProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#instance_types ImagebuilderInfrastructureConfiguration#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#key_pair ImagebuilderInfrastructureConfiguration#key_pair}
    */
    readonly keyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#name ImagebuilderInfrastructureConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#resource_tags ImagebuilderInfrastructureConfiguration#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids ImagebuilderInfrastructureConfiguration#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn ImagebuilderInfrastructureConfiguration#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#subnet_id ImagebuilderInfrastructureConfiguration#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#tags ImagebuilderInfrastructureConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#tags_all ImagebuilderInfrastructureConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure ImagebuilderInfrastructureConfiguration#terminate_instance_on_failure}
    */
    readonly terminateInstanceOnFailure?: boolean | cdktf.IResolvable;
    /**
    * instance_metadata_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options ImagebuilderInfrastructureConfiguration#instance_metadata_options}
    */
    readonly instanceMetadataOptions?: ImagebuilderInfrastructureConfigurationInstanceMetadataOptions;
    /**
    * logging block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#logging ImagebuilderInfrastructureConfiguration#logging}
    */
    readonly logging?: ImagebuilderInfrastructureConfigurationLogging;
}
export interface ImagebuilderInfrastructureConfigurationInstanceMetadataOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit ImagebuilderInfrastructureConfiguration#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#http_tokens ImagebuilderInfrastructureConfiguration#http_tokens}
    */
    readonly httpTokens?: string;
}
export declare function imagebuilderInfrastructureConfigurationInstanceMetadataOptionsToTerraform(struct?: ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference | ImagebuilderInfrastructureConfigurationInstanceMetadataOptions): any;
export declare function imagebuilderInfrastructureConfigurationInstanceMetadataOptionsToHclTerraform(struct?: ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference | ImagebuilderInfrastructureConfigurationInstanceMetadataOptions): any;
export declare class ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderInfrastructureConfigurationInstanceMetadataOptions | undefined;
    set internalValue(value: ImagebuilderInfrastructureConfigurationInstanceMetadataOptions | undefined);
    private _httpPutResponseHopLimit?;
    get httpPutResponseHopLimit(): number;
    set httpPutResponseHopLimit(value: number);
    resetHttpPutResponseHopLimit(): void;
    get httpPutResponseHopLimitInput(): number | undefined;
    private _httpTokens?;
    get httpTokens(): string;
    set httpTokens(value: string);
    resetHttpTokens(): void;
    get httpTokensInput(): string | undefined;
}
export interface ImagebuilderInfrastructureConfigurationLoggingS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name ImagebuilderInfrastructureConfiguration#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix ImagebuilderInfrastructureConfiguration#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export declare function imagebuilderInfrastructureConfigurationLoggingS3LogsToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference | ImagebuilderInfrastructureConfigurationLoggingS3Logs): any;
export declare function imagebuilderInfrastructureConfigurationLoggingS3LogsToHclTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference | ImagebuilderInfrastructureConfigurationLoggingS3Logs): any;
export declare class ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderInfrastructureConfigurationLoggingS3Logs | undefined;
    set internalValue(value: ImagebuilderInfrastructureConfigurationLoggingS3Logs | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
}
export interface ImagebuilderInfrastructureConfigurationLogging {
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#s3_logs ImagebuilderInfrastructureConfiguration#s3_logs}
    */
    readonly s3Logs: ImagebuilderInfrastructureConfigurationLoggingS3Logs;
}
export declare function imagebuilderInfrastructureConfigurationLoggingToTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingOutputReference | ImagebuilderInfrastructureConfigurationLogging): any;
export declare function imagebuilderInfrastructureConfigurationLoggingToHclTerraform(struct?: ImagebuilderInfrastructureConfigurationLoggingOutputReference | ImagebuilderInfrastructureConfigurationLogging): any;
export declare class ImagebuilderInfrastructureConfigurationLoggingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderInfrastructureConfigurationLogging | undefined;
    set internalValue(value: ImagebuilderInfrastructureConfigurationLogging | undefined);
    private _s3Logs;
    get s3Logs(): ImagebuilderInfrastructureConfigurationLoggingS3LogsOutputReference;
    putS3Logs(value: ImagebuilderInfrastructureConfigurationLoggingS3Logs): void;
    get s3LogsInput(): ImagebuilderInfrastructureConfigurationLoggingS3Logs | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration}
*/
export declare class ImagebuilderInfrastructureConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_infrastructure_configuration";
    /**
    * Generates CDKTF code for importing a ImagebuilderInfrastructureConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderInfrastructureConfiguration to import
    * @param importFromId The id of the existing ImagebuilderInfrastructureConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderInfrastructureConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_infrastructure_configuration aws_imagebuilder_infrastructure_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderInfrastructureConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderInfrastructureConfigurationConfig);
    get arn(): string;
    get dateCreated(): string;
    get dateUpdated(): string;
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
    private _instanceProfileName?;
    get instanceProfileName(): string;
    set instanceProfileName(value: string);
    get instanceProfileNameInput(): string | undefined;
    private _instanceTypes?;
    get instanceTypes(): string[];
    set instanceTypes(value: string[]);
    resetInstanceTypes(): void;
    get instanceTypesInput(): string[] | undefined;
    private _keyPair?;
    get keyPair(): string;
    set keyPair(value: string);
    resetKeyPair(): void;
    get keyPairInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    };
    set resourceTags(value: {
        [key: string]: string;
    });
    resetResourceTags(): void;
    get resourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _snsTopicArn?;
    get snsTopicArn(): string;
    set snsTopicArn(value: string);
    resetSnsTopicArn(): void;
    get snsTopicArnInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _terminateInstanceOnFailure?;
    get terminateInstanceOnFailure(): boolean | cdktf.IResolvable;
    set terminateInstanceOnFailure(value: boolean | cdktf.IResolvable);
    resetTerminateInstanceOnFailure(): void;
    get terminateInstanceOnFailureInput(): boolean | cdktf.IResolvable | undefined;
    private _instanceMetadataOptions;
    get instanceMetadataOptions(): ImagebuilderInfrastructureConfigurationInstanceMetadataOptionsOutputReference;
    putInstanceMetadataOptions(value: ImagebuilderInfrastructureConfigurationInstanceMetadataOptions): void;
    resetInstanceMetadataOptions(): void;
    get instanceMetadataOptionsInput(): ImagebuilderInfrastructureConfigurationInstanceMetadataOptions | undefined;
    private _logging;
    get logging(): ImagebuilderInfrastructureConfigurationLoggingOutputReference;
    putLogging(value: ImagebuilderInfrastructureConfigurationLogging): void;
    resetLogging(): void;
    get loggingInput(): ImagebuilderInfrastructureConfigurationLogging | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
