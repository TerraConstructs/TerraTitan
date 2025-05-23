/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#availability_zones Elb#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#connection_draining Elb#connection_draining}
    */
    readonly connectionDraining?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#connection_draining_timeout Elb#connection_draining_timeout}
    */
    readonly connectionDrainingTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#cross_zone_load_balancing Elb#cross_zone_load_balancing}
    */
    readonly crossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#desync_mitigation_mode Elb#desync_mitigation_mode}
    */
    readonly desyncMitigationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#id Elb#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#idle_timeout Elb#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#instances Elb#instances}
    */
    readonly instances?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#internal Elb#internal}
    */
    readonly internal?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#name Elb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#name_prefix Elb#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#security_groups Elb#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#source_security_group Elb#source_security_group}
    */
    readonly sourceSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#subnets Elb#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#tags Elb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#tags_all Elb#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * access_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#access_logs Elb#access_logs}
    */
    readonly accessLogs?: ElbAccessLogs;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#health_check Elb#health_check}
    */
    readonly healthCheck?: ElbHealthCheck;
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#listener Elb#listener}
    */
    readonly listener: ElbListener[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#timeouts Elb#timeouts}
    */
    readonly timeouts?: ElbTimeouts;
}
export interface ElbAccessLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#bucket Elb#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#bucket_prefix Elb#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#enabled Elb#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#interval Elb#interval}
    */
    readonly interval?: number;
}
export declare function elbAccessLogsToTerraform(struct?: ElbAccessLogsOutputReference | ElbAccessLogs): any;
export declare function elbAccessLogsToHclTerraform(struct?: ElbAccessLogsOutputReference | ElbAccessLogs): any;
export declare class ElbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElbAccessLogs | undefined;
    set internalValue(value: ElbAccessLogs | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number | undefined;
}
export interface ElbHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#healthy_threshold Elb#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#interval Elb#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#target Elb#target}
    */
    readonly target: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#timeout Elb#timeout}
    */
    readonly timeout: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#unhealthy_threshold Elb#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
}
export declare function elbHealthCheckToTerraform(struct?: ElbHealthCheckOutputReference | ElbHealthCheck): any;
export declare function elbHealthCheckToHclTerraform(struct?: ElbHealthCheckOutputReference | ElbHealthCheck): any;
export declare class ElbHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElbHealthCheck | undefined;
    set internalValue(value: ElbHealthCheck | undefined);
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    get healthyThresholdInput(): number | undefined;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    get timeoutInput(): number | undefined;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    get unhealthyThresholdInput(): number | undefined;
}
export interface ElbListener {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#instance_port Elb#instance_port}
    */
    readonly instancePort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#instance_protocol Elb#instance_protocol}
    */
    readonly instanceProtocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#lb_port Elb#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#lb_protocol Elb#lb_protocol}
    */
    readonly lbProtocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#ssl_certificate_id Elb#ssl_certificate_id}
    */
    readonly sslCertificateId?: string;
}
export declare function elbListenerToTerraform(struct?: ElbListener | cdktf.IResolvable): any;
export declare function elbListenerToHclTerraform(struct?: ElbListener | cdktf.IResolvable): any;
export declare class ElbListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElbListener | cdktf.IResolvable | undefined;
    set internalValue(value: ElbListener | cdktf.IResolvable | undefined);
    private _instancePort?;
    get instancePort(): number;
    set instancePort(value: number);
    get instancePortInput(): number | undefined;
    private _instanceProtocol?;
    get instanceProtocol(): string;
    set instanceProtocol(value: string);
    get instanceProtocolInput(): string | undefined;
    private _lbPort?;
    get lbPort(): number;
    set lbPort(value: number);
    get lbPortInput(): number | undefined;
    private _lbProtocol?;
    get lbProtocol(): string;
    set lbProtocol(value: string);
    get lbProtocolInput(): string | undefined;
    private _sslCertificateId?;
    get sslCertificateId(): string;
    set sslCertificateId(value: string);
    resetSslCertificateId(): void;
    get sslCertificateIdInput(): string | undefined;
}
export declare class ElbListenerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElbListener[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElbListenerOutputReference;
}
export interface ElbTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#create Elb#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#update Elb#update}
    */
    readonly update?: string;
}
export declare function elbTimeoutsToTerraform(struct?: ElbTimeouts | cdktf.IResolvable): any;
export declare function elbTimeoutsToHclTerraform(struct?: ElbTimeouts | cdktf.IResolvable): any;
export declare class ElbTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElbTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElbTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb aws_elb}
*/
export declare class Elb extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elb";
    /**
    * Generates CDKTF code for importing a Elb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Elb to import
    * @param importFromId The id of the existing Elb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Elb to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elb aws_elb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElbConfig
    */
    constructor(scope: Construct, id: string, config: ElbConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[] | undefined;
    private _connectionDraining?;
    get connectionDraining(): boolean | cdktf.IResolvable;
    set connectionDraining(value: boolean | cdktf.IResolvable);
    resetConnectionDraining(): void;
    get connectionDrainingInput(): boolean | cdktf.IResolvable | undefined;
    private _connectionDrainingTimeout?;
    get connectionDrainingTimeout(): number;
    set connectionDrainingTimeout(value: number);
    resetConnectionDrainingTimeout(): void;
    get connectionDrainingTimeoutInput(): number | undefined;
    private _crossZoneLoadBalancing?;
    get crossZoneLoadBalancing(): boolean | cdktf.IResolvable;
    set crossZoneLoadBalancing(value: boolean | cdktf.IResolvable);
    resetCrossZoneLoadBalancing(): void;
    get crossZoneLoadBalancingInput(): boolean | cdktf.IResolvable | undefined;
    private _desyncMitigationMode?;
    get desyncMitigationMode(): string;
    set desyncMitigationMode(value: string);
    resetDesyncMitigationMode(): void;
    get desyncMitigationModeInput(): string | undefined;
    get dnsName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number | undefined;
    private _instances?;
    get instances(): string[];
    set instances(value: string[]);
    resetInstances(): void;
    get instancesInput(): string[] | undefined;
    private _internal?;
    get internal(): boolean | cdktf.IResolvable;
    set internal(value: boolean | cdktf.IResolvable);
    resetInternal(): void;
    get internalInput(): boolean | cdktf.IResolvable | undefined;
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
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _sourceSecurityGroup?;
    get sourceSecurityGroup(): string;
    set sourceSecurityGroup(value: string);
    resetSourceSecurityGroup(): void;
    get sourceSecurityGroupInput(): string | undefined;
    get sourceSecurityGroupId(): string;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[] | undefined;
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
    get zoneId(): string;
    private _accessLogs;
    get accessLogs(): ElbAccessLogsOutputReference;
    putAccessLogs(value: ElbAccessLogs): void;
    resetAccessLogs(): void;
    get accessLogsInput(): ElbAccessLogs | undefined;
    private _healthCheck;
    get healthCheck(): ElbHealthCheckOutputReference;
    putHealthCheck(value: ElbHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): ElbHealthCheck | undefined;
    private _listener;
    get listener(): ElbListenerList;
    putListener(value: ElbListener[] | cdktf.IResolvable): void;
    get listenerInput(): cdktf.IResolvable | ElbListener[] | undefined;
    private _timeouts;
    get timeouts(): ElbTimeoutsOutputReference;
    putTimeouts(value: ElbTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElbTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
