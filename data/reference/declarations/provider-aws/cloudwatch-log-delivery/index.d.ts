/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogDeliveryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#delivery_destination_arn CloudwatchLogDelivery#delivery_destination_arn}
    */
    readonly deliveryDestinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#delivery_source_name CloudwatchLogDelivery#delivery_source_name}
    */
    readonly deliverySourceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#field_delimiter CloudwatchLogDelivery#field_delimiter}
    */
    readonly fieldDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#record_fields CloudwatchLogDelivery#record_fields}
    */
    readonly recordFields?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#s3_delivery_configuration CloudwatchLogDelivery#s3_delivery_configuration}
    */
    readonly s3DeliveryConfiguration?: CloudwatchLogDeliveryS3DeliveryConfiguration[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#tags CloudwatchLogDelivery#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface CloudwatchLogDeliveryS3DeliveryConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#enable_hive_compatible_path CloudwatchLogDelivery#enable_hive_compatible_path}
    */
    readonly enableHiveCompatiblePath?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#suffix_path CloudwatchLogDelivery#suffix_path}
    */
    readonly suffixPath?: string;
}
export declare function cloudwatchLogDeliveryS3DeliveryConfigurationToTerraform(struct?: CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable): any;
export declare function cloudwatchLogDeliveryS3DeliveryConfigurationToHclTerraform(struct?: CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable): any;
export declare class CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchLogDeliveryS3DeliveryConfiguration | cdktf.IResolvable | undefined);
    private _enableHiveCompatiblePath?;
    get enableHiveCompatiblePath(): boolean | cdktf.IResolvable;
    set enableHiveCompatiblePath(value: boolean | cdktf.IResolvable);
    resetEnableHiveCompatiblePath(): void;
    get enableHiveCompatiblePathInput(): boolean | cdktf.IResolvable | undefined;
    private _suffixPath?;
    get suffixPath(): string;
    set suffixPath(value: string);
    resetSuffixPath(): void;
    get suffixPathInput(): string | undefined;
}
export declare class CloudwatchLogDeliveryS3DeliveryConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchLogDeliveryS3DeliveryConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchLogDeliveryS3DeliveryConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery aws_cloudwatch_log_delivery}
*/
export declare class CloudwatchLogDelivery extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_log_delivery";
    /**
    * Generates CDKTF code for importing a CloudwatchLogDelivery resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchLogDelivery to import
    * @param importFromId The id of the existing CloudwatchLogDelivery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchLogDelivery to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery aws_cloudwatch_log_delivery} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogDeliveryConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchLogDeliveryConfig);
    get arn(): string;
    private _deliveryDestinationArn?;
    get deliveryDestinationArn(): string;
    set deliveryDestinationArn(value: string);
    get deliveryDestinationArnInput(): string | undefined;
    private _deliverySourceName?;
    get deliverySourceName(): string;
    set deliverySourceName(value: string);
    get deliverySourceNameInput(): string | undefined;
    private _fieldDelimiter?;
    get fieldDelimiter(): string;
    set fieldDelimiter(value: string);
    resetFieldDelimiter(): void;
    get fieldDelimiterInput(): string | undefined;
    get id(): string;
    private _recordFields?;
    get recordFields(): string[];
    set recordFields(value: string[]);
    resetRecordFields(): void;
    get recordFieldsInput(): string[] | undefined;
    private _s3DeliveryConfiguration;
    get s3DeliveryConfiguration(): CloudwatchLogDeliveryS3DeliveryConfigurationList;
    putS3DeliveryConfiguration(value: CloudwatchLogDeliveryS3DeliveryConfiguration[] | cdktf.IResolvable): void;
    resetS3DeliveryConfiguration(): void;
    get s3DeliveryConfigurationInput(): cdktf.IResolvable | CloudwatchLogDeliveryS3DeliveryConfiguration[] | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
