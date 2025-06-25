/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogDeliveryDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination#name CloudwatchLogDeliveryDestination#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination#output_format CloudwatchLogDeliveryDestination#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination#tags CloudwatchLogDeliveryDestination#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * delivery_destination_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination#delivery_destination_configuration CloudwatchLogDeliveryDestination#delivery_destination_configuration}
    */
    readonly deliveryDestinationConfiguration?: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[] | cdktf.IResolvable;
}
export interface CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination#destination_resource_arn CloudwatchLogDeliveryDestination#destination_resource_arn}
    */
    readonly destinationResourceArn: string;
}
export declare function cloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationToTerraform(struct?: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktf.IResolvable): any;
export declare function cloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationToHclTerraform(struct?: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktf.IResolvable): any;
export declare class CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration | cdktf.IResolvable | undefined);
    private _destinationResourceArn?;
    get destinationResourceArn(): string;
    set destinationResourceArn(value: string);
    get destinationResourceArnInput(): string | undefined;
}
export declare class CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination aws_cloudwatch_log_delivery_destination}
*/
export declare class CloudwatchLogDeliveryDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_log_delivery_destination";
    /**
    * Generates CDKTF code for importing a CloudwatchLogDeliveryDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchLogDeliveryDestination to import
    * @param importFromId The id of the existing CloudwatchLogDeliveryDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchLogDeliveryDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudwatch_log_delivery_destination aws_cloudwatch_log_delivery_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogDeliveryDestinationConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchLogDeliveryDestinationConfig);
    get arn(): string;
    get deliveryDestinationType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _outputFormat?;
    get outputFormat(): string;
    set outputFormat(value: string);
    resetOutputFormat(): void;
    get outputFormatInput(): string | undefined;
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
    private _deliveryDestinationConfiguration;
    get deliveryDestinationConfiguration(): CloudwatchLogDeliveryDestinationDeliveryDestinationConfigurationList;
    putDeliveryDestinationConfiguration(value: CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[] | cdktf.IResolvable): void;
    resetDeliveryDestinationConfiguration(): void;
    get deliveryDestinationConfigurationInput(): cdktf.IResolvable | CloudwatchLogDeliveryDestinationDeliveryDestinationConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
