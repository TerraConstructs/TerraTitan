/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#connection_termination LbTargetGroup#connection_termination}
    */
    readonly connectionTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#deregistration_delay LbTargetGroup#deregistration_delay}
    */
    readonly deregistrationDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#id LbTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#ip_address_type LbTargetGroup#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}
    */
    readonly lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}
    */
    readonly loadBalancingAlgorithmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#load_balancing_anomaly_mitigation LbTargetGroup#load_balancing_anomaly_mitigation}
    */
    readonly loadBalancingAnomalyMitigation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#load_balancing_cross_zone_enabled LbTargetGroup#load_balancing_cross_zone_enabled}
    */
    readonly loadBalancingCrossZoneEnabled?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#name LbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#name_prefix LbTargetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#port LbTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#preserve_client_ip LbTargetGroup#preserve_client_ip}
    */
    readonly preserveClientIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#protocol_version LbTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}
    */
    readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#slow_start LbTargetGroup#slow_start}
    */
    readonly slowStart?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#tags LbTargetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#tags_all LbTargetGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#target_type LbTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#vpc_id LbTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#health_check LbTargetGroup#health_check}
    */
    readonly healthCheck?: LbTargetGroupHealthCheck;
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#stickiness LbTargetGroup#stickiness}
    */
    readonly stickiness?: LbTargetGroupStickiness;
    /**
    * target_failover block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#target_failover LbTargetGroup#target_failover}
    */
    readonly targetFailover?: LbTargetGroupTargetFailover[] | cdktf.IResolvable;
    /**
    * target_group_health block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#target_group_health LbTargetGroup#target_group_health}
    */
    readonly targetGroupHealth?: LbTargetGroupTargetGroupHealth;
    /**
    * target_health_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#target_health_state LbTargetGroup#target_health_state}
    */
    readonly targetHealthState?: LbTargetGroupTargetHealthState[] | cdktf.IResolvable;
}
export interface LbTargetGroupHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#healthy_threshold LbTargetGroup#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#interval LbTargetGroup#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#matcher LbTargetGroup#matcher}
    */
    readonly matcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#path LbTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#port LbTargetGroup#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#protocol LbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#timeout LbTargetGroup#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#unhealthy_threshold LbTargetGroup#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export declare function lbTargetGroupHealthCheckToTerraform(struct?: LbTargetGroupHealthCheckOutputReference | LbTargetGroupHealthCheck): any;
export declare function lbTargetGroupHealthCheckToHclTerraform(struct?: LbTargetGroupHealthCheckOutputReference | LbTargetGroupHealthCheck): any;
export declare class LbTargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbTargetGroupHealthCheck | undefined;
    set internalValue(value: LbTargetGroupHealthCheck | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    resetHealthyThreshold(): void;
    get healthyThresholdInput(): number | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
    private _matcher?;
    get matcher(): string;
    set matcher(value: string);
    resetMatcher(): void;
    get matcherInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _port?;
    get port(): string;
    set port(value: string);
    resetPort(): void;
    get portInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    resetUnhealthyThreshold(): void;
    get unhealthyThresholdInput(): number | undefined;
}
export interface LbTargetGroupStickiness {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#cookie_duration LbTargetGroup#cookie_duration}
    */
    readonly cookieDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#cookie_name LbTargetGroup#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#enabled LbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#type LbTargetGroup#type}
    */
    readonly type: string;
}
export declare function lbTargetGroupStickinessToTerraform(struct?: LbTargetGroupStickinessOutputReference | LbTargetGroupStickiness): any;
export declare function lbTargetGroupStickinessToHclTerraform(struct?: LbTargetGroupStickinessOutputReference | LbTargetGroupStickiness): any;
export declare class LbTargetGroupStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbTargetGroupStickiness | undefined;
    set internalValue(value: LbTargetGroupStickiness | undefined);
    private _cookieDuration?;
    get cookieDuration(): number;
    set cookieDuration(value: number);
    resetCookieDuration(): void;
    get cookieDurationInput(): number | undefined;
    private _cookieName?;
    get cookieName(): string;
    set cookieName(value: string);
    resetCookieName(): void;
    get cookieNameInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface LbTargetGroupTargetFailover {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#on_deregistration LbTargetGroup#on_deregistration}
    */
    readonly onDeregistration: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#on_unhealthy LbTargetGroup#on_unhealthy}
    */
    readonly onUnhealthy: string;
}
export declare function lbTargetGroupTargetFailoverToTerraform(struct?: LbTargetGroupTargetFailover | cdktf.IResolvable): any;
export declare function lbTargetGroupTargetFailoverToHclTerraform(struct?: LbTargetGroupTargetFailover | cdktf.IResolvable): any;
export declare class LbTargetGroupTargetFailoverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbTargetGroupTargetFailover | cdktf.IResolvable | undefined;
    set internalValue(value: LbTargetGroupTargetFailover | cdktf.IResolvable | undefined);
    private _onDeregistration?;
    get onDeregistration(): string;
    set onDeregistration(value: string);
    get onDeregistrationInput(): string | undefined;
    private _onUnhealthy?;
    get onUnhealthy(): string;
    set onUnhealthy(value: string);
    get onUnhealthyInput(): string | undefined;
}
export declare class LbTargetGroupTargetFailoverList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbTargetGroupTargetFailover[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbTargetGroupTargetFailoverOutputReference;
}
export interface LbTargetGroupTargetGroupHealthDnsFailover {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}
    */
    readonly minimumHealthyTargetsCount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}
    */
    readonly minimumHealthyTargetsPercentage?: string;
}
export declare function lbTargetGroupTargetGroupHealthDnsFailoverToTerraform(struct?: LbTargetGroupTargetGroupHealthDnsFailoverOutputReference | LbTargetGroupTargetGroupHealthDnsFailover): any;
export declare function lbTargetGroupTargetGroupHealthDnsFailoverToHclTerraform(struct?: LbTargetGroupTargetGroupHealthDnsFailoverOutputReference | LbTargetGroupTargetGroupHealthDnsFailover): any;
export declare class LbTargetGroupTargetGroupHealthDnsFailoverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbTargetGroupTargetGroupHealthDnsFailover | undefined;
    set internalValue(value: LbTargetGroupTargetGroupHealthDnsFailover | undefined);
    private _minimumHealthyTargetsCount?;
    get minimumHealthyTargetsCount(): string;
    set minimumHealthyTargetsCount(value: string);
    resetMinimumHealthyTargetsCount(): void;
    get minimumHealthyTargetsCountInput(): string | undefined;
    private _minimumHealthyTargetsPercentage?;
    get minimumHealthyTargetsPercentage(): string;
    set minimumHealthyTargetsPercentage(value: string);
    resetMinimumHealthyTargetsPercentage(): void;
    get minimumHealthyTargetsPercentageInput(): string | undefined;
}
export interface LbTargetGroupTargetGroupHealthUnhealthyStateRouting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#minimum_healthy_targets_count LbTargetGroup#minimum_healthy_targets_count}
    */
    readonly minimumHealthyTargetsCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#minimum_healthy_targets_percentage LbTargetGroup#minimum_healthy_targets_percentage}
    */
    readonly minimumHealthyTargetsPercentage?: string;
}
export declare function lbTargetGroupTargetGroupHealthUnhealthyStateRoutingToTerraform(struct?: LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference | LbTargetGroupTargetGroupHealthUnhealthyStateRouting): any;
export declare function lbTargetGroupTargetGroupHealthUnhealthyStateRoutingToHclTerraform(struct?: LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference | LbTargetGroupTargetGroupHealthUnhealthyStateRouting): any;
export declare class LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbTargetGroupTargetGroupHealthUnhealthyStateRouting | undefined;
    set internalValue(value: LbTargetGroupTargetGroupHealthUnhealthyStateRouting | undefined);
    private _minimumHealthyTargetsCount?;
    get minimumHealthyTargetsCount(): number;
    set minimumHealthyTargetsCount(value: number);
    resetMinimumHealthyTargetsCount(): void;
    get minimumHealthyTargetsCountInput(): number | undefined;
    private _minimumHealthyTargetsPercentage?;
    get minimumHealthyTargetsPercentage(): string;
    set minimumHealthyTargetsPercentage(value: string);
    resetMinimumHealthyTargetsPercentage(): void;
    get minimumHealthyTargetsPercentageInput(): string | undefined;
}
export interface LbTargetGroupTargetGroupHealth {
    /**
    * dns_failover block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#dns_failover LbTargetGroup#dns_failover}
    */
    readonly dnsFailover?: LbTargetGroupTargetGroupHealthDnsFailover;
    /**
    * unhealthy_state_routing block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#unhealthy_state_routing LbTargetGroup#unhealthy_state_routing}
    */
    readonly unhealthyStateRouting?: LbTargetGroupTargetGroupHealthUnhealthyStateRouting;
}
export declare function lbTargetGroupTargetGroupHealthToTerraform(struct?: LbTargetGroupTargetGroupHealthOutputReference | LbTargetGroupTargetGroupHealth): any;
export declare function lbTargetGroupTargetGroupHealthToHclTerraform(struct?: LbTargetGroupTargetGroupHealthOutputReference | LbTargetGroupTargetGroupHealth): any;
export declare class LbTargetGroupTargetGroupHealthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LbTargetGroupTargetGroupHealth | undefined;
    set internalValue(value: LbTargetGroupTargetGroupHealth | undefined);
    private _dnsFailover;
    get dnsFailover(): LbTargetGroupTargetGroupHealthDnsFailoverOutputReference;
    putDnsFailover(value: LbTargetGroupTargetGroupHealthDnsFailover): void;
    resetDnsFailover(): void;
    get dnsFailoverInput(): LbTargetGroupTargetGroupHealthDnsFailover | undefined;
    private _unhealthyStateRouting;
    get unhealthyStateRouting(): LbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference;
    putUnhealthyStateRouting(value: LbTargetGroupTargetGroupHealthUnhealthyStateRouting): void;
    resetUnhealthyStateRouting(): void;
    get unhealthyStateRoutingInput(): LbTargetGroupTargetGroupHealthUnhealthyStateRouting | undefined;
}
export interface LbTargetGroupTargetHealthState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#enable_unhealthy_connection_termination LbTargetGroup#enable_unhealthy_connection_termination}
    */
    readonly enableUnhealthyConnectionTermination: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#unhealthy_draining_interval LbTargetGroup#unhealthy_draining_interval}
    */
    readonly unhealthyDrainingInterval?: number;
}
export declare function lbTargetGroupTargetHealthStateToTerraform(struct?: LbTargetGroupTargetHealthState | cdktf.IResolvable): any;
export declare function lbTargetGroupTargetHealthStateToHclTerraform(struct?: LbTargetGroupTargetHealthState | cdktf.IResolvable): any;
export declare class LbTargetGroupTargetHealthStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LbTargetGroupTargetHealthState | cdktf.IResolvable | undefined;
    set internalValue(value: LbTargetGroupTargetHealthState | cdktf.IResolvable | undefined);
    private _enableUnhealthyConnectionTermination?;
    get enableUnhealthyConnectionTermination(): boolean | cdktf.IResolvable;
    set enableUnhealthyConnectionTermination(value: boolean | cdktf.IResolvable);
    get enableUnhealthyConnectionTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _unhealthyDrainingInterval?;
    get unhealthyDrainingInterval(): number;
    set unhealthyDrainingInterval(value: number);
    resetUnhealthyDrainingInterval(): void;
    get unhealthyDrainingIntervalInput(): number | undefined;
}
export declare class LbTargetGroupTargetHealthStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LbTargetGroupTargetHealthState[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LbTargetGroupTargetHealthStateOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group aws_lb_target_group}
*/
export declare class LbTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lb_target_group";
    /**
    * Generates CDKTF code for importing a LbTargetGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LbTargetGroup to import
    * @param importFromId The id of the existing LbTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LbTargetGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lb_target_group aws_lb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTargetGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LbTargetGroupConfig);
    get arn(): string;
    get arnSuffix(): string;
    private _connectionTermination?;
    get connectionTermination(): boolean | cdktf.IResolvable;
    set connectionTermination(value: boolean | cdktf.IResolvable);
    resetConnectionTermination(): void;
    get connectionTerminationInput(): boolean | cdktf.IResolvable | undefined;
    private _deregistrationDelay?;
    get deregistrationDelay(): string;
    set deregistrationDelay(value: string);
    resetDeregistrationDelay(): void;
    get deregistrationDelayInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _lambdaMultiValueHeadersEnabled?;
    get lambdaMultiValueHeadersEnabled(): boolean | cdktf.IResolvable;
    set lambdaMultiValueHeadersEnabled(value: boolean | cdktf.IResolvable);
    resetLambdaMultiValueHeadersEnabled(): void;
    get lambdaMultiValueHeadersEnabledInput(): boolean | cdktf.IResolvable | undefined;
    get loadBalancerArns(): string[];
    private _loadBalancingAlgorithmType?;
    get loadBalancingAlgorithmType(): string;
    set loadBalancingAlgorithmType(value: string);
    resetLoadBalancingAlgorithmType(): void;
    get loadBalancingAlgorithmTypeInput(): string | undefined;
    private _loadBalancingAnomalyMitigation?;
    get loadBalancingAnomalyMitigation(): string;
    set loadBalancingAnomalyMitigation(value: string);
    resetLoadBalancingAnomalyMitigation(): void;
    get loadBalancingAnomalyMitigationInput(): string | undefined;
    private _loadBalancingCrossZoneEnabled?;
    get loadBalancingCrossZoneEnabled(): string;
    set loadBalancingCrossZoneEnabled(value: string);
    resetLoadBalancingCrossZoneEnabled(): void;
    get loadBalancingCrossZoneEnabledInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _preserveClientIp?;
    get preserveClientIp(): string;
    set preserveClientIp(value: string);
    resetPreserveClientIp(): void;
    get preserveClientIpInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _protocolVersion?;
    get protocolVersion(): string;
    set protocolVersion(value: string);
    resetProtocolVersion(): void;
    get protocolVersionInput(): string | undefined;
    private _proxyProtocolV2?;
    get proxyProtocolV2(): boolean | cdktf.IResolvable;
    set proxyProtocolV2(value: boolean | cdktf.IResolvable);
    resetProxyProtocolV2(): void;
    get proxyProtocolV2Input(): boolean | cdktf.IResolvable | undefined;
    private _slowStart?;
    get slowStart(): number;
    set slowStart(value: number);
    resetSlowStart(): void;
    get slowStartInput(): number | undefined;
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
    private _targetType?;
    get targetType(): string;
    set targetType(value: string);
    resetTargetType(): void;
    get targetTypeInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _healthCheck;
    get healthCheck(): LbTargetGroupHealthCheckOutputReference;
    putHealthCheck(value: LbTargetGroupHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): LbTargetGroupHealthCheck | undefined;
    private _stickiness;
    get stickiness(): LbTargetGroupStickinessOutputReference;
    putStickiness(value: LbTargetGroupStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): LbTargetGroupStickiness | undefined;
    private _targetFailover;
    get targetFailover(): LbTargetGroupTargetFailoverList;
    putTargetFailover(value: LbTargetGroupTargetFailover[] | cdktf.IResolvable): void;
    resetTargetFailover(): void;
    get targetFailoverInput(): cdktf.IResolvable | LbTargetGroupTargetFailover[] | undefined;
    private _targetGroupHealth;
    get targetGroupHealth(): LbTargetGroupTargetGroupHealthOutputReference;
    putTargetGroupHealth(value: LbTargetGroupTargetGroupHealth): void;
    resetTargetGroupHealth(): void;
    get targetGroupHealthInput(): LbTargetGroupTargetGroupHealth | undefined;
    private _targetHealthState;
    get targetHealthState(): LbTargetGroupTargetHealthStateList;
    putTargetHealthState(value: LbTargetGroupTargetHealthState[] | cdktf.IResolvable): void;
    resetTargetHealthState(): void;
    get targetHealthStateInput(): cdktf.IResolvable | LbTargetGroupTargetHealthState[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
