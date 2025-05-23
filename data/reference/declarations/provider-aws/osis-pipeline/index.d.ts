/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OsisPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}
    */
    readonly maxUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}
    */
    readonly minUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}
    */
    readonly pipelineConfigurationBody: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}
    */
    readonly pipelineName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * buffer_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}
    */
    readonly bufferOptions?: OsisPipelineBufferOptions[] | cdktf.IResolvable;
    /**
    * encryption_at_rest_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}
    */
    readonly encryptionAtRestOptions?: OsisPipelineEncryptionAtRestOptions[] | cdktf.IResolvable;
    /**
    * log_publishing_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}
    */
    readonly logPublishingOptions?: OsisPipelineLogPublishingOptions[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#timeouts OsisPipeline#timeouts}
    */
    readonly timeouts?: OsisPipelineTimeouts;
    /**
    * vpc_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}
    */
    readonly vpcOptions?: OsisPipelineVpcOptions[] | cdktf.IResolvable;
}
export interface OsisPipelineBufferOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}
    */
    readonly persistentBufferEnabled: boolean | cdktf.IResolvable;
}
export declare function osisPipelineBufferOptionsToTerraform(struct?: OsisPipelineBufferOptions | cdktf.IResolvable): any;
export declare function osisPipelineBufferOptionsToHclTerraform(struct?: OsisPipelineBufferOptions | cdktf.IResolvable): any;
export declare class OsisPipelineBufferOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OsisPipelineBufferOptions | cdktf.IResolvable | undefined;
    set internalValue(value: OsisPipelineBufferOptions | cdktf.IResolvable | undefined);
    private _persistentBufferEnabled?;
    get persistentBufferEnabled(): boolean | cdktf.IResolvable;
    set persistentBufferEnabled(value: boolean | cdktf.IResolvable);
    get persistentBufferEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class OsisPipelineBufferOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OsisPipelineBufferOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OsisPipelineBufferOptionsOutputReference;
}
export interface OsisPipelineEncryptionAtRestOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}
    */
    readonly kmsKeyArn: string;
}
export declare function osisPipelineEncryptionAtRestOptionsToTerraform(struct?: OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable): any;
export declare function osisPipelineEncryptionAtRestOptionsToHclTerraform(struct?: OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable): any;
export declare class OsisPipelineEncryptionAtRestOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable | undefined;
    set internalValue(value: OsisPipelineEncryptionAtRestOptions | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    get kmsKeyArnInput(): string | undefined;
}
export declare class OsisPipelineEncryptionAtRestOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OsisPipelineEncryptionAtRestOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OsisPipelineEncryptionAtRestOptionsOutputReference;
}
export interface OsisPipelineLogPublishingOptionsCloudwatchLogDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}
    */
    readonly logGroup: string;
}
export declare function osisPipelineLogPublishingOptionsCloudwatchLogDestinationToTerraform(struct?: OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable): any;
export declare function osisPipelineLogPublishingOptionsCloudwatchLogDestinationToHclTerraform(struct?: OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable): any;
export declare class OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable | undefined;
    set internalValue(value: OsisPipelineLogPublishingOptionsCloudwatchLogDestination | cdktf.IResolvable | undefined);
    private _logGroup?;
    get logGroup(): string;
    set logGroup(value: string);
    get logGroupInput(): string | undefined;
}
export declare class OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OsisPipelineLogPublishingOptionsCloudwatchLogDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference;
}
export interface OsisPipelineLogPublishingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}
    */
    readonly isLoggingEnabled?: boolean | cdktf.IResolvable;
    /**
    * cloudwatch_log_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}
    */
    readonly cloudwatchLogDestination?: OsisPipelineLogPublishingOptionsCloudwatchLogDestination[] | cdktf.IResolvable;
}
export declare function osisPipelineLogPublishingOptionsToTerraform(struct?: OsisPipelineLogPublishingOptions | cdktf.IResolvable): any;
export declare function osisPipelineLogPublishingOptionsToHclTerraform(struct?: OsisPipelineLogPublishingOptions | cdktf.IResolvable): any;
export declare class OsisPipelineLogPublishingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OsisPipelineLogPublishingOptions | cdktf.IResolvable | undefined;
    set internalValue(value: OsisPipelineLogPublishingOptions | cdktf.IResolvable | undefined);
    private _isLoggingEnabled?;
    get isLoggingEnabled(): boolean | cdktf.IResolvable;
    set isLoggingEnabled(value: boolean | cdktf.IResolvable);
    resetIsLoggingEnabled(): void;
    get isLoggingEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _cloudwatchLogDestination;
    get cloudwatchLogDestination(): OsisPipelineLogPublishingOptionsCloudwatchLogDestinationList;
    putCloudwatchLogDestination(value: OsisPipelineLogPublishingOptionsCloudwatchLogDestination[] | cdktf.IResolvable): void;
    resetCloudwatchLogDestination(): void;
    get cloudwatchLogDestinationInput(): cdktf.IResolvable | OsisPipelineLogPublishingOptionsCloudwatchLogDestination[] | undefined;
}
export declare class OsisPipelineLogPublishingOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OsisPipelineLogPublishingOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OsisPipelineLogPublishingOptionsOutputReference;
}
export interface OsisPipelineTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#create OsisPipeline#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#delete OsisPipeline#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#update OsisPipeline#update}
    */
    readonly update?: string;
}
export declare function osisPipelineTimeoutsToTerraform(struct?: OsisPipelineTimeouts | cdktf.IResolvable): any;
export declare function osisPipelineTimeoutsToHclTerraform(struct?: OsisPipelineTimeouts | cdktf.IResolvable): any;
export declare class OsisPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OsisPipelineTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OsisPipelineTimeouts | cdktf.IResolvable | undefined);
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
export interface OsisPipelineVpcOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function osisPipelineVpcOptionsToTerraform(struct?: OsisPipelineVpcOptions | cdktf.IResolvable): any;
export declare function osisPipelineVpcOptionsToHclTerraform(struct?: OsisPipelineVpcOptions | cdktf.IResolvable): any;
export declare class OsisPipelineVpcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OsisPipelineVpcOptions | cdktf.IResolvable | undefined;
    set internalValue(value: OsisPipelineVpcOptions | cdktf.IResolvable | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
export declare class OsisPipelineVpcOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: OsisPipelineVpcOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): OsisPipelineVpcOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline aws_osis_pipeline}
*/
export declare class OsisPipeline extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_osis_pipeline";
    /**
    * Generates CDKTF code for importing a OsisPipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OsisPipeline to import
    * @param importFromId The id of the existing OsisPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OsisPipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/osis_pipeline aws_osis_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OsisPipelineConfig
    */
    constructor(scope: Construct, id: string, config: OsisPipelineConfig);
    get id(): string;
    get ingestEndpointUrls(): string[];
    private _maxUnits?;
    get maxUnits(): number;
    set maxUnits(value: number);
    get maxUnitsInput(): number | undefined;
    private _minUnits?;
    get minUnits(): number;
    set minUnits(value: number);
    get minUnitsInput(): number | undefined;
    get pipelineArn(): string;
    private _pipelineConfigurationBody?;
    get pipelineConfigurationBody(): string;
    set pipelineConfigurationBody(value: string);
    get pipelineConfigurationBodyInput(): string | undefined;
    private _pipelineName?;
    get pipelineName(): string;
    set pipelineName(value: string);
    get pipelineNameInput(): string | undefined;
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
    private _bufferOptions;
    get bufferOptions(): OsisPipelineBufferOptionsList;
    putBufferOptions(value: OsisPipelineBufferOptions[] | cdktf.IResolvable): void;
    resetBufferOptions(): void;
    get bufferOptionsInput(): cdktf.IResolvable | OsisPipelineBufferOptions[] | undefined;
    private _encryptionAtRestOptions;
    get encryptionAtRestOptions(): OsisPipelineEncryptionAtRestOptionsList;
    putEncryptionAtRestOptions(value: OsisPipelineEncryptionAtRestOptions[] | cdktf.IResolvable): void;
    resetEncryptionAtRestOptions(): void;
    get encryptionAtRestOptionsInput(): cdktf.IResolvable | OsisPipelineEncryptionAtRestOptions[] | undefined;
    private _logPublishingOptions;
    get logPublishingOptions(): OsisPipelineLogPublishingOptionsList;
    putLogPublishingOptions(value: OsisPipelineLogPublishingOptions[] | cdktf.IResolvable): void;
    resetLogPublishingOptions(): void;
    get logPublishingOptionsInput(): cdktf.IResolvable | OsisPipelineLogPublishingOptions[] | undefined;
    private _timeouts;
    get timeouts(): OsisPipelineTimeoutsOutputReference;
    putTimeouts(value: OsisPipelineTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OsisPipelineTimeouts | undefined;
    private _vpcOptions;
    get vpcOptions(): OsisPipelineVpcOptionsList;
    putVpcOptions(value: OsisPipelineVpcOptions[] | cdktf.IResolvable): void;
    resetVpcOptions(): void;
    get vpcOptionsInput(): cdktf.IResolvable | OsisPipelineVpcOptions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
