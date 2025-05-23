/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvschatLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#id IvschatLoggingConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#name IvschatLoggingConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#tags IvschatLoggingConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#tags_all IvschatLoggingConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * destination_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#destination_configuration IvschatLoggingConfiguration#destination_configuration}
    */
    readonly destinationConfiguration?: IvschatLoggingConfigurationDestinationConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#timeouts IvschatLoggingConfiguration#timeouts}
    */
    readonly timeouts?: IvschatLoggingConfigurationTimeouts;
}
export interface IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#log_group_name IvschatLoggingConfiguration#log_group_name}
    */
    readonly logGroupName: string;
}
export declare function ivschatLoggingConfigurationDestinationConfigurationCloudwatchLogsToTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference | IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs): any;
export declare function ivschatLoggingConfigurationDestinationConfigurationCloudwatchLogsToHclTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference | IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs): any;
export declare class IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs | undefined;
    set internalValue(value: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs | undefined);
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
}
export interface IvschatLoggingConfigurationDestinationConfigurationFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#delivery_stream_name IvschatLoggingConfiguration#delivery_stream_name}
    */
    readonly deliveryStreamName: string;
}
export declare function ivschatLoggingConfigurationDestinationConfigurationFirehoseToTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference | IvschatLoggingConfigurationDestinationConfigurationFirehose): any;
export declare function ivschatLoggingConfigurationDestinationConfigurationFirehoseToHclTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference | IvschatLoggingConfigurationDestinationConfigurationFirehose): any;
export declare class IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvschatLoggingConfigurationDestinationConfigurationFirehose | undefined;
    set internalValue(value: IvschatLoggingConfigurationDestinationConfigurationFirehose | undefined);
    private _deliveryStreamName?;
    get deliveryStreamName(): string;
    set deliveryStreamName(value: string);
    get deliveryStreamNameInput(): string | undefined;
}
export interface IvschatLoggingConfigurationDestinationConfigurationS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#bucket_name IvschatLoggingConfiguration#bucket_name}
    */
    readonly bucketName: string;
}
export declare function ivschatLoggingConfigurationDestinationConfigurationS3ToTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationS3OutputReference | IvschatLoggingConfigurationDestinationConfigurationS3): any;
export declare function ivschatLoggingConfigurationDestinationConfigurationS3ToHclTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationS3OutputReference | IvschatLoggingConfigurationDestinationConfigurationS3): any;
export declare class IvschatLoggingConfigurationDestinationConfigurationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvschatLoggingConfigurationDestinationConfigurationS3 | undefined;
    set internalValue(value: IvschatLoggingConfigurationDestinationConfigurationS3 | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
}
export interface IvschatLoggingConfigurationDestinationConfiguration {
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#cloudwatch_logs IvschatLoggingConfiguration#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#firehose IvschatLoggingConfiguration#firehose}
    */
    readonly firehose?: IvschatLoggingConfigurationDestinationConfigurationFirehose;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#s3 IvschatLoggingConfiguration#s3}
    */
    readonly s3?: IvschatLoggingConfigurationDestinationConfigurationS3;
}
export declare function ivschatLoggingConfigurationDestinationConfigurationToTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationOutputReference | IvschatLoggingConfigurationDestinationConfiguration): any;
export declare function ivschatLoggingConfigurationDestinationConfigurationToHclTerraform(struct?: IvschatLoggingConfigurationDestinationConfigurationOutputReference | IvschatLoggingConfigurationDestinationConfiguration): any;
export declare class IvschatLoggingConfigurationDestinationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvschatLoggingConfigurationDestinationConfiguration | undefined;
    set internalValue(value: IvschatLoggingConfigurationDestinationConfiguration | undefined);
    private _cloudwatchLogs;
    get cloudwatchLogs(): IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): IvschatLoggingConfigurationDestinationConfigurationCloudwatchLogs | undefined;
    private _firehose;
    get firehose(): IvschatLoggingConfigurationDestinationConfigurationFirehoseOutputReference;
    putFirehose(value: IvschatLoggingConfigurationDestinationConfigurationFirehose): void;
    resetFirehose(): void;
    get firehoseInput(): IvschatLoggingConfigurationDestinationConfigurationFirehose | undefined;
    private _s3;
    get s3(): IvschatLoggingConfigurationDestinationConfigurationS3OutputReference;
    putS3(value: IvschatLoggingConfigurationDestinationConfigurationS3): void;
    resetS3(): void;
    get s3Input(): IvschatLoggingConfigurationDestinationConfigurationS3 | undefined;
}
export interface IvschatLoggingConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#create IvschatLoggingConfiguration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#delete IvschatLoggingConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#update IvschatLoggingConfiguration#update}
    */
    readonly update?: string;
}
export declare function ivschatLoggingConfigurationTimeoutsToTerraform(struct?: IvschatLoggingConfigurationTimeouts | cdktf.IResolvable): any;
export declare function ivschatLoggingConfigurationTimeoutsToHclTerraform(struct?: IvschatLoggingConfigurationTimeouts | cdktf.IResolvable): any;
export declare class IvschatLoggingConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvschatLoggingConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: IvschatLoggingConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration aws_ivschat_logging_configuration}
*/
export declare class IvschatLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ivschat_logging_configuration";
    /**
    * Generates CDKTF code for importing a IvschatLoggingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IvschatLoggingConfiguration to import
    * @param importFromId The id of the existing IvschatLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IvschatLoggingConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_logging_configuration aws_ivschat_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvschatLoggingConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IvschatLoggingConfigurationConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
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
    private _destinationConfiguration;
    get destinationConfiguration(): IvschatLoggingConfigurationDestinationConfigurationOutputReference;
    putDestinationConfiguration(value: IvschatLoggingConfigurationDestinationConfiguration): void;
    resetDestinationConfiguration(): void;
    get destinationConfigurationInput(): IvschatLoggingConfigurationDestinationConfiguration | undefined;
    private _timeouts;
    get timeouts(): IvschatLoggingConfigurationTimeoutsOutputReference;
    putTimeouts(value: IvschatLoggingConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | IvschatLoggingConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
