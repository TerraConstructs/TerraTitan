/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PrometheusWorkspaceConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#retention_period_in_days PrometheusWorkspaceConfiguration#retention_period_in_days}
    */
    readonly retentionPeriodInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#workspace_id PrometheusWorkspaceConfiguration#workspace_id}
    */
    readonly workspaceId: string;
    /**
    * limits_per_label_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#limits_per_label_set PrometheusWorkspaceConfiguration#limits_per_label_set}
    */
    readonly limitsPerLabelSet?: PrometheusWorkspaceConfigurationLimitsPerLabelSet[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#timeouts PrometheusWorkspaceConfiguration#timeouts}
    */
    readonly timeouts?: PrometheusWorkspaceConfigurationTimeouts;
}
export interface PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#max_series PrometheusWorkspaceConfiguration#max_series}
    */
    readonly maxSeries: number;
}
export declare function prometheusWorkspaceConfigurationLimitsPerLabelSetLimitsToTerraform(struct?: PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits | cdktf.IResolvable): any;
export declare function prometheusWorkspaceConfigurationLimitsPerLabelSetLimitsToHclTerraform(struct?: PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits | cdktf.IResolvable): any;
export declare class PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits | cdktf.IResolvable | undefined);
    private _maxSeries?;
    get maxSeries(): number;
    set maxSeries(value: number);
    get maxSeriesInput(): number | undefined;
}
export declare class PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsOutputReference;
}
export interface PrometheusWorkspaceConfigurationLimitsPerLabelSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#label_set PrometheusWorkspaceConfiguration#label_set}
    */
    readonly labelSet: {
        [key: string]: string;
    };
    /**
    * limits block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#limits PrometheusWorkspaceConfiguration#limits}
    */
    readonly limits?: PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits[] | cdktf.IResolvable;
}
export declare function prometheusWorkspaceConfigurationLimitsPerLabelSetToTerraform(struct?: PrometheusWorkspaceConfigurationLimitsPerLabelSet | cdktf.IResolvable): any;
export declare function prometheusWorkspaceConfigurationLimitsPerLabelSetToHclTerraform(struct?: PrometheusWorkspaceConfigurationLimitsPerLabelSet | cdktf.IResolvable): any;
export declare class PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PrometheusWorkspaceConfigurationLimitsPerLabelSet | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusWorkspaceConfigurationLimitsPerLabelSet | cdktf.IResolvable | undefined);
    private _labelSet?;
    get labelSet(): {
        [key: string]: string;
    };
    set labelSet(value: {
        [key: string]: string;
    });
    get labelSetInput(): {
        [key: string]: string;
    } | undefined;
    private _limits;
    get limits(): PrometheusWorkspaceConfigurationLimitsPerLabelSetLimitsList;
    putLimits(value: PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits[] | cdktf.IResolvable): void;
    resetLimits(): void;
    get limitsInput(): cdktf.IResolvable | PrometheusWorkspaceConfigurationLimitsPerLabelSetLimits[] | undefined;
}
export declare class PrometheusWorkspaceConfigurationLimitsPerLabelSetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PrometheusWorkspaceConfigurationLimitsPerLabelSet[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PrometheusWorkspaceConfigurationLimitsPerLabelSetOutputReference;
}
export interface PrometheusWorkspaceConfigurationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#create PrometheusWorkspaceConfiguration#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#update PrometheusWorkspaceConfiguration#update}
    */
    readonly update?: string;
}
export declare function prometheusWorkspaceConfigurationTimeoutsToTerraform(struct?: PrometheusWorkspaceConfigurationTimeouts | cdktf.IResolvable): any;
export declare function prometheusWorkspaceConfigurationTimeoutsToHclTerraform(struct?: PrometheusWorkspaceConfigurationTimeouts | cdktf.IResolvable): any;
export declare class PrometheusWorkspaceConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PrometheusWorkspaceConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusWorkspaceConfigurationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration aws_prometheus_workspace_configuration}
*/
export declare class PrometheusWorkspaceConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_prometheus_workspace_configuration";
    /**
    * Generates CDKTF code for importing a PrometheusWorkspaceConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PrometheusWorkspaceConfiguration to import
    * @param importFromId The id of the existing PrometheusWorkspaceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PrometheusWorkspaceConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/prometheus_workspace_configuration aws_prometheus_workspace_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusWorkspaceConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: PrometheusWorkspaceConfigurationConfig);
    private _retentionPeriodInDays?;
    get retentionPeriodInDays(): number;
    set retentionPeriodInDays(value: number);
    resetRetentionPeriodInDays(): void;
    get retentionPeriodInDaysInput(): number | undefined;
    private _workspaceId?;
    get workspaceId(): string;
    set workspaceId(value: string);
    get workspaceIdInput(): string | undefined;
    private _limitsPerLabelSet;
    get limitsPerLabelSet(): PrometheusWorkspaceConfigurationLimitsPerLabelSetList;
    putLimitsPerLabelSet(value: PrometheusWorkspaceConfigurationLimitsPerLabelSet[] | cdktf.IResolvable): void;
    resetLimitsPerLabelSet(): void;
    get limitsPerLabelSetInput(): cdktf.IResolvable | PrometheusWorkspaceConfigurationLimitsPerLabelSet[] | undefined;
    private _timeouts;
    get timeouts(): PrometheusWorkspaceConfigurationTimeoutsOutputReference;
    putTimeouts(value: PrometheusWorkspaceConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | PrometheusWorkspaceConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
