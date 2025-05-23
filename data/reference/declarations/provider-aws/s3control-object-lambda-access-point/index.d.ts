/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlObjectLambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#account_id S3ControlObjectLambdaAccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#id S3ControlObjectLambdaAccessPoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#name S3ControlObjectLambdaAccessPoint#name}
    */
    readonly name: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#configuration S3ControlObjectLambdaAccessPoint#configuration}
    */
    readonly configuration: S3ControlObjectLambdaAccessPointConfiguration;
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#function_arn S3ControlObjectLambdaAccessPoint#function_arn}
    */
    readonly functionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#function_payload S3ControlObjectLambdaAccessPoint#function_payload}
    */
    readonly functionPayload?: string;
}
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda): any;
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToHclTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda): any;
export declare class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda | undefined;
    set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
    private _functionPayload?;
    get functionPayload(): string;
    set functionPayload(value: string);
    resetFunctionPayload(): void;
    get functionPayloadInput(): string | undefined;
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation {
    /**
    * aws_lambda block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#aws_lambda S3ControlObjectLambdaAccessPoint#aws_lambda}
    */
    readonly awsLambda: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda;
}
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation): any;
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToHclTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation): any;
export declare class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation | undefined;
    set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation | undefined);
    private _awsLambda;
    get awsLambda(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference;
    putAwsLambda(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda): void;
    get awsLambdaInput(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda | undefined;
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#actions S3ControlObjectLambdaAccessPoint#actions}
    */
    readonly actions: string[];
    /**
    * content_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#content_transformation S3ControlObjectLambdaAccessPoint#content_transformation}
    */
    readonly contentTransformation: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation;
}
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration | cdktf.IResolvable): any;
export declare function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToHclTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration | cdktf.IResolvable): any;
export declare class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _contentTransformation;
    get contentTransformation(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference;
    putContentTransformation(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation): void;
    get contentTransformationInput(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation | undefined;
}
export declare class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference;
}
export interface S3ControlObjectLambdaAccessPointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#allowed_features S3ControlObjectLambdaAccessPoint#allowed_features}
    */
    readonly allowedFeatures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#cloud_watch_metrics_enabled S3ControlObjectLambdaAccessPoint#cloud_watch_metrics_enabled}
    */
    readonly cloudWatchMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#supporting_access_point S3ControlObjectLambdaAccessPoint#supporting_access_point}
    */
    readonly supportingAccessPoint: string;
    /**
    * transformation_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#transformation_configuration S3ControlObjectLambdaAccessPoint#transformation_configuration}
    */
    readonly transformationConfiguration: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable;
}
export declare function s3ControlObjectLambdaAccessPointConfigurationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationOutputReference | S3ControlObjectLambdaAccessPointConfiguration): any;
export declare function s3ControlObjectLambdaAccessPointConfigurationToHclTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationOutputReference | S3ControlObjectLambdaAccessPointConfiguration): any;
export declare class S3ControlObjectLambdaAccessPointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlObjectLambdaAccessPointConfiguration | undefined;
    set internalValue(value: S3ControlObjectLambdaAccessPointConfiguration | undefined);
    private _allowedFeatures?;
    get allowedFeatures(): string[];
    set allowedFeatures(value: string[]);
    resetAllowedFeatures(): void;
    get allowedFeaturesInput(): string[] | undefined;
    private _cloudWatchMetricsEnabled?;
    get cloudWatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudWatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetCloudWatchMetricsEnabled(): void;
    get cloudWatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _supportingAccessPoint?;
    get supportingAccessPoint(): string;
    set supportingAccessPoint(value: string);
    get supportingAccessPointInput(): string | undefined;
    private _transformationConfiguration;
    get transformationConfiguration(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList;
    putTransformationConfiguration(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable): void;
    get transformationConfigurationInput(): cdktf.IResolvable | S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point}
*/
export declare class S3ControlObjectLambdaAccessPoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_object_lambda_access_point";
    /**
    * Generates CDKTF code for importing a S3ControlObjectLambdaAccessPoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlObjectLambdaAccessPoint to import
    * @param importFromId The id of the existing S3ControlObjectLambdaAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlObjectLambdaAccessPoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlObjectLambdaAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlObjectLambdaAccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get alias(): string;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _configuration;
    get configuration(): S3ControlObjectLambdaAccessPointConfigurationOutputReference;
    putConfiguration(value: S3ControlObjectLambdaAccessPointConfiguration): void;
    get configurationInput(): S3ControlObjectLambdaAccessPointConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
