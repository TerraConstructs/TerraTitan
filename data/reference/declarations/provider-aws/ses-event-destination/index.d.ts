/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SesEventDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}
    */
    readonly configurationSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#enabled SesEventDestination#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#id SesEventDestination#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#matching_types SesEventDestination#matching_types}
    */
    readonly matchingTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#name SesEventDestination#name}
    */
    readonly name: string;
    /**
    * cloudwatch_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#cloudwatch_destination SesEventDestination#cloudwatch_destination}
    */
    readonly cloudwatchDestination?: SesEventDestinationCloudwatchDestination[] | cdktf.IResolvable;
    /**
    * kinesis_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#kinesis_destination SesEventDestination#kinesis_destination}
    */
    readonly kinesisDestination?: SesEventDestinationKinesisDestination;
    /**
    * sns_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#sns_destination SesEventDestination#sns_destination}
    */
    readonly snsDestination?: SesEventDestinationSnsDestination;
}
export interface SesEventDestinationCloudwatchDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#default_value SesEventDestination#default_value}
    */
    readonly defaultValue: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#dimension_name SesEventDestination#dimension_name}
    */
    readonly dimensionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#value_source SesEventDestination#value_source}
    */
    readonly valueSource: string;
}
export declare function sesEventDestinationCloudwatchDestinationToTerraform(struct?: SesEventDestinationCloudwatchDestination | cdktf.IResolvable): any;
export declare function sesEventDestinationCloudwatchDestinationToHclTerraform(struct?: SesEventDestinationCloudwatchDestination | cdktf.IResolvable): any;
export declare class SesEventDestinationCloudwatchDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SesEventDestinationCloudwatchDestination | cdktf.IResolvable | undefined;
    set internalValue(value: SesEventDestinationCloudwatchDestination | cdktf.IResolvable | undefined);
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    get defaultValueInput(): string | undefined;
    private _dimensionName?;
    get dimensionName(): string;
    set dimensionName(value: string);
    get dimensionNameInput(): string | undefined;
    private _valueSource?;
    get valueSource(): string;
    set valueSource(value: string);
    get valueSourceInput(): string | undefined;
}
export declare class SesEventDestinationCloudwatchDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SesEventDestinationCloudwatchDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SesEventDestinationCloudwatchDestinationOutputReference;
}
export interface SesEventDestinationKinesisDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#role_arn SesEventDestination#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#stream_arn SesEventDestination#stream_arn}
    */
    readonly streamArn: string;
}
export declare function sesEventDestinationKinesisDestinationToTerraform(struct?: SesEventDestinationKinesisDestinationOutputReference | SesEventDestinationKinesisDestination): any;
export declare function sesEventDestinationKinesisDestinationToHclTerraform(struct?: SesEventDestinationKinesisDestinationOutputReference | SesEventDestinationKinesisDestination): any;
export declare class SesEventDestinationKinesisDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SesEventDestinationKinesisDestination | undefined;
    set internalValue(value: SesEventDestinationKinesisDestination | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string | undefined;
}
export interface SesEventDestinationSnsDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#topic_arn SesEventDestination#topic_arn}
    */
    readonly topicArn: string;
}
export declare function sesEventDestinationSnsDestinationToTerraform(struct?: SesEventDestinationSnsDestinationOutputReference | SesEventDestinationSnsDestination): any;
export declare function sesEventDestinationSnsDestinationToHclTerraform(struct?: SesEventDestinationSnsDestinationOutputReference | SesEventDestinationSnsDestination): any;
export declare class SesEventDestinationSnsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SesEventDestinationSnsDestination | undefined;
    set internalValue(value: SesEventDestinationSnsDestination | undefined);
    private _topicArn?;
    get topicArn(): string;
    set topicArn(value: string);
    get topicArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination aws_ses_event_destination}
*/
export declare class SesEventDestination extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ses_event_destination";
    /**
    * Generates CDKTF code for importing a SesEventDestination resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SesEventDestination to import
    * @param importFromId The id of the existing SesEventDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SesEventDestination to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ses_event_destination aws_ses_event_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SesEventDestinationConfig
    */
    constructor(scope: Construct, id: string, config: SesEventDestinationConfig);
    get arn(): string;
    private _configurationSetName?;
    get configurationSetName(): string;
    set configurationSetName(value: string);
    get configurationSetNameInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _matchingTypes?;
    get matchingTypes(): string[];
    set matchingTypes(value: string[]);
    get matchingTypesInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _cloudwatchDestination;
    get cloudwatchDestination(): SesEventDestinationCloudwatchDestinationList;
    putCloudwatchDestination(value: SesEventDestinationCloudwatchDestination[] | cdktf.IResolvable): void;
    resetCloudwatchDestination(): void;
    get cloudwatchDestinationInput(): cdktf.IResolvable | SesEventDestinationCloudwatchDestination[] | undefined;
    private _kinesisDestination;
    get kinesisDestination(): SesEventDestinationKinesisDestinationOutputReference;
    putKinesisDestination(value: SesEventDestinationKinesisDestination): void;
    resetKinesisDestination(): void;
    get kinesisDestinationInput(): SesEventDestinationKinesisDestination | undefined;
    private _snsDestination;
    get snsDestination(): SesEventDestinationSnsDestinationOutputReference;
    putSnsDestination(value: SesEventDestinationSnsDestination): void;
    resetSnsDestination(): void;
    get snsDestinationInput(): SesEventDestinationSnsDestination | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
