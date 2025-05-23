/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodedeployDeploymentConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#compute_platform CodedeployDeploymentConfig#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#deployment_config_name CodedeployDeploymentConfig#deployment_config_name}
    */
    readonly deploymentConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#id CodedeployDeploymentConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * minimum_healthy_hosts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts CodedeployDeploymentConfig#minimum_healthy_hosts}
    */
    readonly minimumHealthyHosts?: CodedeployDeploymentConfigMinimumHealthyHosts;
    /**
    * traffic_routing_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#traffic_routing_config CodedeployDeploymentConfig#traffic_routing_config}
    */
    readonly trafficRoutingConfig?: CodedeployDeploymentConfigTrafficRoutingConfig;
    /**
    * zonal_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#zonal_config CodedeployDeploymentConfig#zonal_config}
    */
    readonly zonalConfig?: CodedeployDeploymentConfigZonalConfig;
}
export interface CodedeployDeploymentConfigMinimumHealthyHosts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}
    */
    readonly value?: number;
}
export declare function codedeployDeploymentConfigMinimumHealthyHostsToTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference | CodedeployDeploymentConfigMinimumHealthyHosts): any;
export declare function codedeployDeploymentConfigMinimumHealthyHostsToHclTerraform(struct?: CodedeployDeploymentConfigMinimumHealthyHostsOutputReference | CodedeployDeploymentConfigMinimumHealthyHosts): any;
export declare class CodedeployDeploymentConfigMinimumHealthyHostsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentConfigMinimumHealthyHosts | undefined;
    set internalValue(value: CodedeployDeploymentConfigMinimumHealthyHosts | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}
    */
    readonly percentage?: number;
}
export declare function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any;
export declare function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): any;
export declare class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined;
    set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _percentage?;
    get percentage(): number;
    set percentage(value: number);
    resetPercentage(): void;
    get percentageInput(): number | undefined;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#interval CodedeployDeploymentConfig#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#percentage CodedeployDeploymentConfig#percentage}
    */
    readonly percentage?: number;
}
export declare function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any;
export declare function codedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference | CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): any;
export declare class CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined;
    set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined);
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _percentage?;
    get percentage(): number;
    set percentage(value: number);
    resetPercentage(): void;
    get percentageInput(): number | undefined;
}
export interface CodedeployDeploymentConfigTrafficRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * time_based_canary block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#time_based_canary CodedeployDeploymentConfig#time_based_canary}
    */
    readonly timeBasedCanary?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary;
    /**
    * time_based_linear block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#time_based_linear CodedeployDeploymentConfig#time_based_linear}
    */
    readonly timeBasedLinear?: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear;
}
export declare function codedeployDeploymentConfigTrafficRoutingConfigToTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference | CodedeployDeploymentConfigTrafficRoutingConfig): any;
export declare function codedeployDeploymentConfigTrafficRoutingConfigToHclTerraform(struct?: CodedeployDeploymentConfigTrafficRoutingConfigOutputReference | CodedeployDeploymentConfigTrafficRoutingConfig): any;
export declare class CodedeployDeploymentConfigTrafficRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentConfigTrafficRoutingConfig | undefined;
    set internalValue(value: CodedeployDeploymentConfigTrafficRoutingConfig | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _timeBasedCanary;
    get timeBasedCanary(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanaryOutputReference;
    putTimeBasedCanary(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary): void;
    resetTimeBasedCanary(): void;
    get timeBasedCanaryInput(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedCanary | undefined;
    private _timeBasedLinear;
    get timeBasedLinear(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinearOutputReference;
    putTimeBasedLinear(value: CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear): void;
    resetTimeBasedLinear(): void;
    get timeBasedLinearInput(): CodedeployDeploymentConfigTrafficRoutingConfigTimeBasedLinear | undefined;
}
export interface CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#type CodedeployDeploymentConfig#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#value CodedeployDeploymentConfig#value}
    */
    readonly value?: number;
}
export declare function codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToTerraform(struct?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference | CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone): any;
export declare function codedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneToHclTerraform(struct?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference | CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone): any;
export declare class CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | undefined;
    set internalValue(value: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number | undefined;
}
export interface CodedeployDeploymentConfigZonalConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#first_zone_monitor_duration_in_seconds CodedeployDeploymentConfig#first_zone_monitor_duration_in_seconds}
    */
    readonly firstZoneMonitorDurationInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#monitor_duration_in_seconds CodedeployDeploymentConfig#monitor_duration_in_seconds}
    */
    readonly monitorDurationInSeconds?: number;
    /**
    * minimum_healthy_hosts_per_zone block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#minimum_healthy_hosts_per_zone CodedeployDeploymentConfig#minimum_healthy_hosts_per_zone}
    */
    readonly minimumHealthyHostsPerZone?: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone;
}
export declare function codedeployDeploymentConfigZonalConfigToTerraform(struct?: CodedeployDeploymentConfigZonalConfigOutputReference | CodedeployDeploymentConfigZonalConfig): any;
export declare function codedeployDeploymentConfigZonalConfigToHclTerraform(struct?: CodedeployDeploymentConfigZonalConfigOutputReference | CodedeployDeploymentConfigZonalConfig): any;
export declare class CodedeployDeploymentConfigZonalConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodedeployDeploymentConfigZonalConfig | undefined;
    set internalValue(value: CodedeployDeploymentConfigZonalConfig | undefined);
    private _firstZoneMonitorDurationInSeconds?;
    get firstZoneMonitorDurationInSeconds(): number;
    set firstZoneMonitorDurationInSeconds(value: number);
    resetFirstZoneMonitorDurationInSeconds(): void;
    get firstZoneMonitorDurationInSecondsInput(): number | undefined;
    private _monitorDurationInSeconds?;
    get monitorDurationInSeconds(): number;
    set monitorDurationInSeconds(value: number);
    resetMonitorDurationInSeconds(): void;
    get monitorDurationInSecondsInput(): number | undefined;
    private _minimumHealthyHostsPerZone;
    get minimumHealthyHostsPerZone(): CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZoneOutputReference;
    putMinimumHealthyHostsPerZone(value: CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone): void;
    resetMinimumHealthyHostsPerZone(): void;
    get minimumHealthyHostsPerZoneInput(): CodedeployDeploymentConfigZonalConfigMinimumHealthyHostsPerZone | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config aws_codedeploy_deployment_config}
*/
export declare class CodedeployDeploymentConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codedeploy_deployment_config";
    /**
    * Generates CDKTF code for importing a CodedeployDeploymentConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodedeployDeploymentConfig to import
    * @param importFromId The id of the existing CodedeployDeploymentConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodedeployDeploymentConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codedeploy_deployment_config aws_codedeploy_deployment_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployDeploymentConfigConfig
    */
    constructor(scope: Construct, id: string, config: CodedeployDeploymentConfigConfig);
    get arn(): string;
    private _computePlatform?;
    get computePlatform(): string;
    set computePlatform(value: string);
    resetComputePlatform(): void;
    get computePlatformInput(): string | undefined;
    get deploymentConfigId(): string;
    private _deploymentConfigName?;
    get deploymentConfigName(): string;
    set deploymentConfigName(value: string);
    get deploymentConfigNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _minimumHealthyHosts;
    get minimumHealthyHosts(): CodedeployDeploymentConfigMinimumHealthyHostsOutputReference;
    putMinimumHealthyHosts(value: CodedeployDeploymentConfigMinimumHealthyHosts): void;
    resetMinimumHealthyHosts(): void;
    get minimumHealthyHostsInput(): CodedeployDeploymentConfigMinimumHealthyHosts | undefined;
    private _trafficRoutingConfig;
    get trafficRoutingConfig(): CodedeployDeploymentConfigTrafficRoutingConfigOutputReference;
    putTrafficRoutingConfig(value: CodedeployDeploymentConfigTrafficRoutingConfig): void;
    resetTrafficRoutingConfig(): void;
    get trafficRoutingConfigInput(): CodedeployDeploymentConfigTrafficRoutingConfig | undefined;
    private _zonalConfig;
    get zonalConfig(): CodedeployDeploymentConfigZonalConfigOutputReference;
    putZonalConfig(value: CodedeployDeploymentConfigZonalConfig): void;
    resetZonalConfig(): void;
    get zonalConfigInput(): CodedeployDeploymentConfigZonalConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
