/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53HealthCheckConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}
    */
    readonly childHealthThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}
    */
    readonly childHealthchecks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}
    */
    readonly cloudwatchAlarmName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}
    */
    readonly cloudwatchAlarmRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#disabled Route53HealthCheck#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#enable_sni Route53HealthCheck#enable_sni}
    */
    readonly enableSni?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#fqdn Route53HealthCheck#fqdn}
    */
    readonly fqdn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#id Route53HealthCheck#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}
    */
    readonly insufficientDataHealthStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}
    */
    readonly invertHealthcheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#ip_address Route53HealthCheck#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#measure_latency Route53HealthCheck#measure_latency}
    */
    readonly measureLatency?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#port Route53HealthCheck#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#reference_name Route53HealthCheck#reference_name}
    */
    readonly referenceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#regions Route53HealthCheck#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#request_interval Route53HealthCheck#request_interval}
    */
    readonly requestInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#resource_path Route53HealthCheck#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}
    */
    readonly routingControlArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#search_string Route53HealthCheck#search_string}
    */
    readonly searchString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#tags Route53HealthCheck#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#tags_all Route53HealthCheck#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#triggers Route53HealthCheck#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#type Route53HealthCheck#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check aws_route53_health_check}
*/
export declare class Route53HealthCheck extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_health_check";
    /**
    * Generates CDKTF code for importing a Route53HealthCheck resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53HealthCheck to import
    * @param importFromId The id of the existing Route53HealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53HealthCheck to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_health_check aws_route53_health_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HealthCheckConfig
    */
    constructor(scope: Construct, id: string, config: Route53HealthCheckConfig);
    get arn(): string;
    private _childHealthThreshold?;
    get childHealthThreshold(): number;
    set childHealthThreshold(value: number);
    resetChildHealthThreshold(): void;
    get childHealthThresholdInput(): number | undefined;
    private _childHealthchecks?;
    get childHealthchecks(): string[];
    set childHealthchecks(value: string[]);
    resetChildHealthchecks(): void;
    get childHealthchecksInput(): string[] | undefined;
    private _cloudwatchAlarmName?;
    get cloudwatchAlarmName(): string;
    set cloudwatchAlarmName(value: string);
    resetCloudwatchAlarmName(): void;
    get cloudwatchAlarmNameInput(): string | undefined;
    private _cloudwatchAlarmRegion?;
    get cloudwatchAlarmRegion(): string;
    set cloudwatchAlarmRegion(value: string);
    resetCloudwatchAlarmRegion(): void;
    get cloudwatchAlarmRegionInput(): string | undefined;
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable | undefined;
    private _enableSni?;
    get enableSni(): boolean | cdktf.IResolvable;
    set enableSni(value: boolean | cdktf.IResolvable);
    resetEnableSni(): void;
    get enableSniInput(): boolean | cdktf.IResolvable | undefined;
    private _failureThreshold?;
    get failureThreshold(): number;
    set failureThreshold(value: number);
    resetFailureThreshold(): void;
    get failureThresholdInput(): number | undefined;
    private _fqdn?;
    get fqdn(): string;
    set fqdn(value: string);
    resetFqdn(): void;
    get fqdnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _insufficientDataHealthStatus?;
    get insufficientDataHealthStatus(): string;
    set insufficientDataHealthStatus(value: string);
    resetInsufficientDataHealthStatus(): void;
    get insufficientDataHealthStatusInput(): string | undefined;
    private _invertHealthcheck?;
    get invertHealthcheck(): boolean | cdktf.IResolvable;
    set invertHealthcheck(value: boolean | cdktf.IResolvable);
    resetInvertHealthcheck(): void;
    get invertHealthcheckInput(): boolean | cdktf.IResolvable | undefined;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    private _measureLatency?;
    get measureLatency(): boolean | cdktf.IResolvable;
    set measureLatency(value: boolean | cdktf.IResolvable);
    resetMeasureLatency(): void;
    get measureLatencyInput(): boolean | cdktf.IResolvable | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _referenceName?;
    get referenceName(): string;
    set referenceName(value: string);
    resetReferenceName(): void;
    get referenceNameInput(): string | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
    private _requestInterval?;
    get requestInterval(): number;
    set requestInterval(value: number);
    resetRequestInterval(): void;
    get requestIntervalInput(): number | undefined;
    private _resourcePath?;
    get resourcePath(): string;
    set resourcePath(value: string);
    resetResourcePath(): void;
    get resourcePathInput(): string | undefined;
    private _routingControlArn?;
    get routingControlArn(): string;
    set routingControlArn(value: string);
    resetRoutingControlArn(): void;
    get routingControlArnInput(): string | undefined;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    resetSearchString(): void;
    get searchStringInput(): string | undefined;
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
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
