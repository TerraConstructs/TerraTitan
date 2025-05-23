/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FlowLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#deliver_cross_account_role FlowLog#deliver_cross_account_role}
    */
    readonly deliverCrossAccountRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#eni_id FlowLog#eni_id}
    */
    readonly eniId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#iam_role_arn FlowLog#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#id FlowLog#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#log_destination FlowLog#log_destination}
    */
    readonly logDestination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#log_destination_type FlowLog#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#log_format FlowLog#log_format}
    */
    readonly logFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#log_group_name FlowLog#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#max_aggregation_interval FlowLog#max_aggregation_interval}
    */
    readonly maxAggregationInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#subnet_id FlowLog#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#tags FlowLog#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#tags_all FlowLog#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#traffic_type FlowLog#traffic_type}
    */
    readonly trafficType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#transit_gateway_attachment_id FlowLog#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#transit_gateway_id FlowLog#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#vpc_id FlowLog#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * destination_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#destination_options FlowLog#destination_options}
    */
    readonly destinationOptions?: FlowLogDestinationOptions;
}
export interface FlowLogDestinationOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#file_format FlowLog#file_format}
    */
    readonly fileFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#hive_compatible_partitions FlowLog#hive_compatible_partitions}
    */
    readonly hiveCompatiblePartitions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#per_hour_partition FlowLog#per_hour_partition}
    */
    readonly perHourPartition?: boolean | cdktf.IResolvable;
}
export declare function flowLogDestinationOptionsToTerraform(struct?: FlowLogDestinationOptionsOutputReference | FlowLogDestinationOptions): any;
export declare function flowLogDestinationOptionsToHclTerraform(struct?: FlowLogDestinationOptionsOutputReference | FlowLogDestinationOptions): any;
export declare class FlowLogDestinationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FlowLogDestinationOptions | undefined;
    set internalValue(value: FlowLogDestinationOptions | undefined);
    private _fileFormat?;
    get fileFormat(): string;
    set fileFormat(value: string);
    resetFileFormat(): void;
    get fileFormatInput(): string | undefined;
    private _hiveCompatiblePartitions?;
    get hiveCompatiblePartitions(): boolean | cdktf.IResolvable;
    set hiveCompatiblePartitions(value: boolean | cdktf.IResolvable);
    resetHiveCompatiblePartitions(): void;
    get hiveCompatiblePartitionsInput(): boolean | cdktf.IResolvable | undefined;
    private _perHourPartition?;
    get perHourPartition(): boolean | cdktf.IResolvable;
    set perHourPartition(value: boolean | cdktf.IResolvable);
    resetPerHourPartition(): void;
    get perHourPartitionInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log aws_flow_log}
*/
export declare class FlowLog extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_flow_log";
    /**
    * Generates CDKTF code for importing a FlowLog resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FlowLog to import
    * @param importFromId The id of the existing FlowLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FlowLog to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/flow_log aws_flow_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FlowLogConfig = {}
    */
    constructor(scope: Construct, id: string, config?: FlowLogConfig);
    get arn(): string;
    private _deliverCrossAccountRole?;
    get deliverCrossAccountRole(): string;
    set deliverCrossAccountRole(value: string);
    resetDeliverCrossAccountRole(): void;
    get deliverCrossAccountRoleInput(): string | undefined;
    private _eniId?;
    get eniId(): string;
    set eniId(value: string);
    resetEniId(): void;
    get eniIdInput(): string | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    resetLogDestination(): void;
    get logDestinationInput(): string | undefined;
    private _logDestinationType?;
    get logDestinationType(): string;
    set logDestinationType(value: string);
    resetLogDestinationType(): void;
    get logDestinationTypeInput(): string | undefined;
    private _logFormat?;
    get logFormat(): string;
    set logFormat(value: string);
    resetLogFormat(): void;
    get logFormatInput(): string | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _maxAggregationInterval?;
    get maxAggregationInterval(): number;
    set maxAggregationInterval(value: number);
    resetMaxAggregationInterval(): void;
    get maxAggregationIntervalInput(): number | undefined;
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
    private _trafficType?;
    get trafficType(): string;
    set trafficType(value: string);
    resetTrafficType(): void;
    get trafficTypeInput(): string | undefined;
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    resetTransitGatewayAttachmentId(): void;
    get transitGatewayAttachmentIdInput(): string | undefined;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _destinationOptions;
    get destinationOptions(): FlowLogDestinationOptionsOutputReference;
    putDestinationOptions(value: FlowLogDestinationOptions): void;
    resetDestinationOptions(): void;
    get destinationOptionsInput(): FlowLogDestinationOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
