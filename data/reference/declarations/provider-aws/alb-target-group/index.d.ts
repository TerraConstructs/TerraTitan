/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AlbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#connection_termination AlbTargetGroup#connection_termination}
    */
    readonly connectionTermination?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}
    */
    readonly deregistrationDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#id AlbTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}
    */
    readonly lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}
    */
    readonly loadBalancingAlgorithmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#load_balancing_anomaly_mitigation AlbTargetGroup#load_balancing_anomaly_mitigation}
    */
    readonly loadBalancingAnomalyMitigation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#load_balancing_cross_zone_enabled AlbTargetGroup#load_balancing_cross_zone_enabled}
    */
    readonly loadBalancingCrossZoneEnabled?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#name AlbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#name_prefix AlbTargetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#port AlbTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}
    */
    readonly preserveClientIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#protocol_version AlbTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}
    */
    readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#slow_start AlbTargetGroup#slow_start}
    */
    readonly slowStart?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#tags AlbTargetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#tags_all AlbTargetGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#target_type AlbTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#vpc_id AlbTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#health_check AlbTargetGroup#health_check}
    */
    readonly healthCheck?: AlbTargetGroupHealthCheck;
    /**
    * stickiness block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#stickiness AlbTargetGroup#stickiness}
    */
    readonly stickiness?: AlbTargetGroupStickiness;
    /**
    * target_failover block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#target_failover AlbTargetGroup#target_failover}
    */
    readonly targetFailover?: AlbTargetGroupTargetFailover[] | cdktf.IResolvable;
    /**
    * target_group_health block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#target_group_health AlbTargetGroup#target_group_health}
    */
    readonly targetGroupHealth?: AlbTargetGroupTargetGroupHealth;
    /**
    * target_health_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#target_health_state AlbTargetGroup#target_health_state}
    */
    readonly targetHealthState?: AlbTargetGroupTargetHealthState[] | cdktf.IResolvable;
}
export interface AlbTargetGroupHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#interval AlbTargetGroup#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#matcher AlbTargetGroup#matcher}
    */
    readonly matcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#path AlbTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#port AlbTargetGroup#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#timeout AlbTargetGroup#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export declare function albTargetGroupHealthCheckToTerraform(struct?: AlbTargetGroupHealthCheckOutputReference | AlbTargetGroupHealthCheck): any;
export declare function albTargetGroupHealthCheckToHclTerraform(struct?: AlbTargetGroupHealthCheckOutputReference | AlbTargetGroupHealthCheck): any;
export declare class AlbTargetGroupHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbTargetGroupHealthCheck | undefined;
    set internalValue(value: AlbTargetGroupHealthCheck | undefined);
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
export interface AlbTargetGroupStickiness {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}
    */
    readonly cookieDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#cookie_name AlbTargetGroup#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#type AlbTargetGroup#type}
    */
    readonly type: string;
}
export declare function albTargetGroupStickinessToTerraform(struct?: AlbTargetGroupStickinessOutputReference | AlbTargetGroupStickiness): any;
export declare function albTargetGroupStickinessToHclTerraform(struct?: AlbTargetGroupStickinessOutputReference | AlbTargetGroupStickiness): any;
export declare class AlbTargetGroupStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbTargetGroupStickiness | undefined;
    set internalValue(value: AlbTargetGroupStickiness | undefined);
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
export interface AlbTargetGroupTargetFailover {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}
    */
    readonly onDeregistration: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}
    */
    readonly onUnhealthy: string;
}
export declare function albTargetGroupTargetFailoverToTerraform(struct?: AlbTargetGroupTargetFailover | cdktf.IResolvable): any;
export declare function albTargetGroupTargetFailoverToHclTerraform(struct?: AlbTargetGroupTargetFailover | cdktf.IResolvable): any;
export declare class AlbTargetGroupTargetFailoverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbTargetGroupTargetFailover | cdktf.IResolvable | undefined;
    set internalValue(value: AlbTargetGroupTargetFailover | cdktf.IResolvable | undefined);
    private _onDeregistration?;
    get onDeregistration(): string;
    set onDeregistration(value: string);
    get onDeregistrationInput(): string | undefined;
    private _onUnhealthy?;
    get onUnhealthy(): string;
    set onUnhealthy(value: string);
    get onUnhealthyInput(): string | undefined;
}
export declare class AlbTargetGroupTargetFailoverList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbTargetGroupTargetFailover[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbTargetGroupTargetFailoverOutputReference;
}
export interface AlbTargetGroupTargetGroupHealthDnsFailover {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}
    */
    readonly minimumHealthyTargetsCount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}
    */
    readonly minimumHealthyTargetsPercentage?: string;
}
export declare function albTargetGroupTargetGroupHealthDnsFailoverToTerraform(struct?: AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference | AlbTargetGroupTargetGroupHealthDnsFailover): any;
export declare function albTargetGroupTargetGroupHealthDnsFailoverToHclTerraform(struct?: AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference | AlbTargetGroupTargetGroupHealthDnsFailover): any;
export declare class AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbTargetGroupTargetGroupHealthDnsFailover | undefined;
    set internalValue(value: AlbTargetGroupTargetGroupHealthDnsFailover | undefined);
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
export interface AlbTargetGroupTargetGroupHealthUnhealthyStateRouting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}
    */
    readonly minimumHealthyTargetsCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}
    */
    readonly minimumHealthyTargetsPercentage?: string;
}
export declare function albTargetGroupTargetGroupHealthUnhealthyStateRoutingToTerraform(struct?: AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference | AlbTargetGroupTargetGroupHealthUnhealthyStateRouting): any;
export declare function albTargetGroupTargetGroupHealthUnhealthyStateRoutingToHclTerraform(struct?: AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference | AlbTargetGroupTargetGroupHealthUnhealthyStateRouting): any;
export declare class AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbTargetGroupTargetGroupHealthUnhealthyStateRouting | undefined;
    set internalValue(value: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting | undefined);
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
export interface AlbTargetGroupTargetGroupHealth {
    /**
    * dns_failover block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#dns_failover AlbTargetGroup#dns_failover}
    */
    readonly dnsFailover?: AlbTargetGroupTargetGroupHealthDnsFailover;
    /**
    * unhealthy_state_routing block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#unhealthy_state_routing AlbTargetGroup#unhealthy_state_routing}
    */
    readonly unhealthyStateRouting?: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting;
}
export declare function albTargetGroupTargetGroupHealthToTerraform(struct?: AlbTargetGroupTargetGroupHealthOutputReference | AlbTargetGroupTargetGroupHealth): any;
export declare function albTargetGroupTargetGroupHealthToHclTerraform(struct?: AlbTargetGroupTargetGroupHealthOutputReference | AlbTargetGroupTargetGroupHealth): any;
export declare class AlbTargetGroupTargetGroupHealthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AlbTargetGroupTargetGroupHealth | undefined;
    set internalValue(value: AlbTargetGroupTargetGroupHealth | undefined);
    private _dnsFailover;
    get dnsFailover(): AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference;
    putDnsFailover(value: AlbTargetGroupTargetGroupHealthDnsFailover): void;
    resetDnsFailover(): void;
    get dnsFailoverInput(): AlbTargetGroupTargetGroupHealthDnsFailover | undefined;
    private _unhealthyStateRouting;
    get unhealthyStateRouting(): AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference;
    putUnhealthyStateRouting(value: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting): void;
    resetUnhealthyStateRouting(): void;
    get unhealthyStateRoutingInput(): AlbTargetGroupTargetGroupHealthUnhealthyStateRouting | undefined;
}
export interface AlbTargetGroupTargetHealthState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#enable_unhealthy_connection_termination AlbTargetGroup#enable_unhealthy_connection_termination}
    */
    readonly enableUnhealthyConnectionTermination: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#unhealthy_draining_interval AlbTargetGroup#unhealthy_draining_interval}
    */
    readonly unhealthyDrainingInterval?: number;
}
export declare function albTargetGroupTargetHealthStateToTerraform(struct?: AlbTargetGroupTargetHealthState | cdktf.IResolvable): any;
export declare function albTargetGroupTargetHealthStateToHclTerraform(struct?: AlbTargetGroupTargetHealthState | cdktf.IResolvable): any;
export declare class AlbTargetGroupTargetHealthStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AlbTargetGroupTargetHealthState | cdktf.IResolvable | undefined;
    set internalValue(value: AlbTargetGroupTargetHealthState | cdktf.IResolvable | undefined);
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
export declare class AlbTargetGroupTargetHealthStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AlbTargetGroupTargetHealthState[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AlbTargetGroupTargetHealthStateOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group aws_alb_target_group}
*/
export declare class AlbTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_alb_target_group";
    /**
    * Generates CDKTF code for importing a AlbTargetGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AlbTargetGroup to import
    * @param importFromId The id of the existing AlbTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AlbTargetGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/alb_target_group aws_alb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbTargetGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AlbTargetGroupConfig);
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
    get healthCheck(): AlbTargetGroupHealthCheckOutputReference;
    putHealthCheck(value: AlbTargetGroupHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): AlbTargetGroupHealthCheck | undefined;
    private _stickiness;
    get stickiness(): AlbTargetGroupStickinessOutputReference;
    putStickiness(value: AlbTargetGroupStickiness): void;
    resetStickiness(): void;
    get stickinessInput(): AlbTargetGroupStickiness | undefined;
    private _targetFailover;
    get targetFailover(): AlbTargetGroupTargetFailoverList;
    putTargetFailover(value: AlbTargetGroupTargetFailover[] | cdktf.IResolvable): void;
    resetTargetFailover(): void;
    get targetFailoverInput(): cdktf.IResolvable | AlbTargetGroupTargetFailover[] | undefined;
    private _targetGroupHealth;
    get targetGroupHealth(): AlbTargetGroupTargetGroupHealthOutputReference;
    putTargetGroupHealth(value: AlbTargetGroupTargetGroupHealth): void;
    resetTargetGroupHealth(): void;
    get targetGroupHealthInput(): AlbTargetGroupTargetGroupHealth | undefined;
    private _targetHealthState;
    get targetHealthState(): AlbTargetGroupTargetHealthStateList;
    putTargetHealthState(value: AlbTargetGroupTargetHealthState[] | cdktf.IResolvable): void;
    resetTargetHealthState(): void;
    get targetHealthStateInput(): cdktf.IResolvable | AlbTargetGroupTargetHealthState[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
