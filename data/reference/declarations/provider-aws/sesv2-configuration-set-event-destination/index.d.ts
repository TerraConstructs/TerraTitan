/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2ConfigurationSetEventDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#configuration_set_name Sesv2ConfigurationSetEventDestination#configuration_set_name}
    */
    readonly configurationSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#event_destination_name Sesv2ConfigurationSetEventDestination#event_destination_name}
    */
    readonly eventDestinationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#id Sesv2ConfigurationSetEventDestination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * event_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#event_destination Sesv2ConfigurationSetEventDestination#event_destination}
    */
    readonly eventDestination: Sesv2ConfigurationSetEventDestinationEventDestination;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#default_dimension_value Sesv2ConfigurationSetEventDestination#default_dimension_value}
    */
    readonly defaultDimensionValue: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#dimension_name Sesv2ConfigurationSetEventDestination#dimension_name}
    */
    readonly dimensionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#dimension_value_source Sesv2ConfigurationSetEventDestination#dimension_value_source}
    */
    readonly dimensionValueSource: string;
}
export declare function sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration | cdktf.IResolvable): any;
export declare function sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationToHclTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration | cdktf.IResolvable): any;
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration | cdktf.IResolvable | undefined);
    private _defaultDimensionValue?;
    get defaultDimensionValue(): string;
    set defaultDimensionValue(value: string);
    get defaultDimensionValueInput(): string | undefined;
    private _dimensionName?;
    get dimensionName(): string;
    set dimensionName(value: string);
    get dimensionNameInput(): string | undefined;
    private _dimensionValueSource?;
    get dimensionValueSource(): string;
    set dimensionValueSource(value: string);
    get dimensionValueSourceInput(): string | undefined;
}
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination {
    /**
    * dimension_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#dimension_configuration Sesv2ConfigurationSetEventDestination#dimension_configuration}
    */
    readonly dimensionConfiguration: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration[] | cdktf.IResolvable;
}
export declare function sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination): any;
export declare function sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationToHclTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination): any;
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination | undefined;
    set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination | undefined);
    private _dimensionConfiguration;
    get dimensionConfiguration(): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList;
    putDimensionConfiguration(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration[] | cdktf.IResolvable): void;
    get dimensionConfigurationInput(): cdktf.IResolvable | Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration[] | undefined;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#event_bus_arn Sesv2ConfigurationSetEventDestination#event_bus_arn}
    */
    readonly eventBusArn: string;
}
export declare function sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination): any;
export declare function sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationToHclTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination): any;
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination | undefined;
    set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination | undefined);
    private _eventBusArn?;
    get eventBusArn(): string;
    set eventBusArn(value: string);
    get eventBusArnInput(): string | undefined;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#delivery_stream_arn Sesv2ConfigurationSetEventDestination#delivery_stream_arn}
    */
    readonly deliveryStreamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#iam_role_arn Sesv2ConfigurationSetEventDestination#iam_role_arn}
    */
    readonly iamRoleArn: string;
}
export declare function sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination): any;
export declare function sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationToHclTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination): any;
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination | undefined;
    set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination | undefined);
    private _deliveryStreamArn?;
    get deliveryStreamArn(): string;
    set deliveryStreamArn(value: string);
    get deliveryStreamArnInput(): string | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string | undefined;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#application_arn Sesv2ConfigurationSetEventDestination#application_arn}
    */
    readonly applicationArn: string;
}
export declare function sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination): any;
export declare function sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationToHclTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination): any;
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination | undefined;
    set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination | undefined);
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    get applicationArnInput(): string | undefined;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#topic_arn Sesv2ConfigurationSetEventDestination#topic_arn}
    */
    readonly topicArn: string;
}
export declare function sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination): any;
export declare function sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationToHclTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination): any;
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination | undefined;
    set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination | undefined);
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#enabled Sesv2ConfigurationSetEventDestination#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#matching_event_types Sesv2ConfigurationSetEventDestination#matching_event_types}
    */
    readonly matchingEventTypes: string[];
    /**
    * cloud_watch_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#cloud_watch_destination Sesv2ConfigurationSetEventDestination#cloud_watch_destination}
    */
    readonly cloudWatchDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination;
    /**
    * event_bridge_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#event_bridge_destination Sesv2ConfigurationSetEventDestination#event_bridge_destination}
    */
    readonly eventBridgeDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination;
    /**
    * kinesis_firehose_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#kinesis_firehose_destination Sesv2ConfigurationSetEventDestination#kinesis_firehose_destination}
    */
    readonly kinesisFirehoseDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;
    /**
    * pinpoint_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#pinpoint_destination Sesv2ConfigurationSetEventDestination#pinpoint_destination}
    */
    readonly pinpointDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination;
    /**
    * sns_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#sns_destination Sesv2ConfigurationSetEventDestination#sns_destination}
    */
    readonly snsDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination;
}
export declare function sesv2ConfigurationSetEventDestinationEventDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestination): any;
export declare function sesv2ConfigurationSetEventDestinationEventDestinationToHclTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestination): any;
export declare class Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestination | undefined;
    set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestination | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _matchingEventTypes?;
    get matchingEventTypes(): string[];
    set matchingEventTypes(value: string[]);
    get matchingEventTypesInput(): string[] | undefined;
    private _cloudWatchDestination;
    get cloudWatchDestination(): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference;
    putCloudWatchDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination): void;
    resetCloudWatchDestination(): void;
    get cloudWatchDestinationInput(): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination | undefined;
    private _eventBridgeDestination;
    get eventBridgeDestination(): Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestinationOutputReference;
    putEventBridgeDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination): void;
    resetEventBridgeDestination(): void;
    get eventBridgeDestinationInput(): Sesv2ConfigurationSetEventDestinationEventDestinationEventBridgeDestination | undefined;
    private _kinesisFirehoseDestination;
    get kinesisFirehoseDestination(): Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference;
    putKinesisFirehoseDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination): void;
    resetKinesisFirehoseDestination(): void;
    get kinesisFirehoseDestinationInput(): Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination | undefined;
    private _pinpointDestination;
    get pinpointDestination(): Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference;
    putPinpointDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination): void;
    resetPinpointDestination(): void;
    get pinpointDestinationInput(): Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination | undefined;
    private _snsDestination;
    get snsDestination(): Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference;
    putSnsDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination): void;
    resetSnsDestination(): void;
    get snsDestinationInput(): Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination aws_sesv2_configuration_set_event_destination}
*/
export declare class Sesv2ConfigurationSetEventDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_configuration_set_event_destination";
    /**
    * Generates CDKTF code for importing a Sesv2ConfigurationSetEventDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2ConfigurationSetEventDestination to import
    * @param importFromId The id of the existing Sesv2ConfigurationSetEventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2ConfigurationSetEventDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_configuration_set_event_destination aws_sesv2_configuration_set_event_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2ConfigurationSetEventDestinationConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2ConfigurationSetEventDestinationConfig);
    private _configurationSetName?;
    get configurationSetName(): string;
    set configurationSetName(value: string);
    get configurationSetNameInput(): string | undefined;
    private _eventDestinationName?;
    get eventDestinationName(): string;
    set eventDestinationName(value: string);
    get eventDestinationNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _eventDestination;
    get eventDestination(): Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference;
    putEventDestination(value: Sesv2ConfigurationSetEventDestinationEventDestination): void;
    get eventDestinationInput(): Sesv2ConfigurationSetEventDestinationEventDestination | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
