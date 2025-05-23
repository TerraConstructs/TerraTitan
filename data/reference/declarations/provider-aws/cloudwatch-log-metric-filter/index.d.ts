/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchLogMetricFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#id CloudwatchLogMetricFilter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#log_group_name CloudwatchLogMetricFilter#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#pattern CloudwatchLogMetricFilter#pattern}
    */
    readonly pattern: string;
    /**
    * metric_transformation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#metric_transformation CloudwatchLogMetricFilter#metric_transformation}
    */
    readonly metricTransformation: CloudwatchLogMetricFilterMetricTransformation;
}
export interface CloudwatchLogMetricFilterMetricTransformation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#default_value CloudwatchLogMetricFilter#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#dimensions CloudwatchLogMetricFilter#dimensions}
    */
    readonly dimensions?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#name CloudwatchLogMetricFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#namespace CloudwatchLogMetricFilter#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#unit CloudwatchLogMetricFilter#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#value CloudwatchLogMetricFilter#value}
    */
    readonly value: string;
}
export declare function cloudwatchLogMetricFilterMetricTransformationToTerraform(struct?: CloudwatchLogMetricFilterMetricTransformationOutputReference | CloudwatchLogMetricFilterMetricTransformation): any;
export declare function cloudwatchLogMetricFilterMetricTransformationToHclTerraform(struct?: CloudwatchLogMetricFilterMetricTransformationOutputReference | CloudwatchLogMetricFilterMetricTransformation): any;
export declare class CloudwatchLogMetricFilterMetricTransformationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchLogMetricFilterMetricTransformation | undefined;
    set internalValue(value: CloudwatchLogMetricFilterMetricTransformation | undefined);
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    resetDefaultValue(): void;
    get defaultValueInput(): string | undefined;
    private _dimensions?;
    get dimensions(): {
        [key: string]: string;
    };
    set dimensions(value: {
        [key: string]: string;
    });
    resetDimensions(): void;
    get dimensionsInput(): {
        [key: string]: string;
    } | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter aws_cloudwatch_log_metric_filter}
*/
export declare class CloudwatchLogMetricFilter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_log_metric_filter";
    /**
    * Generates CDKTF code for importing a CloudwatchLogMetricFilter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchLogMetricFilter to import
    * @param importFromId The id of the existing CloudwatchLogMetricFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchLogMetricFilter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_log_metric_filter aws_cloudwatch_log_metric_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchLogMetricFilterConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchLogMetricFilterConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string | undefined;
    private _metricTransformation;
    get metricTransformation(): CloudwatchLogMetricFilterMetricTransformationOutputReference;
    putMetricTransformation(value: CloudwatchLogMetricFilterMetricTransformation): void;
    get metricTransformationInput(): CloudwatchLogMetricFilterMetricTransformation | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
