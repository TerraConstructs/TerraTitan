/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#id VpclatticeTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#name VpclatticeTargetGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#tags VpclatticeTargetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#tags_all VpclatticeTargetGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#type VpclatticeTargetGroup#type}
    */
    readonly type: string;
    /**
    * config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#config VpclatticeTargetGroup#config}
    */
    readonly config?: VpclatticeTargetGroupConfigA;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#timeouts VpclatticeTargetGroup#timeouts}
    */
    readonly timeouts?: VpclatticeTargetGroupTimeouts;
}
export interface VpclatticeTargetGroupConfigHealthCheckMatcher {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#value VpclatticeTargetGroup#value}
    */
    readonly value?: string;
}
export declare function vpclatticeTargetGroupConfigHealthCheckMatcherToTerraform(struct?: VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference | VpclatticeTargetGroupConfigHealthCheckMatcher): any;
export declare function vpclatticeTargetGroupConfigHealthCheckMatcherToHclTerraform(struct?: VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference | VpclatticeTargetGroupConfigHealthCheckMatcher): any;
export declare class VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeTargetGroupConfigHealthCheckMatcher | undefined;
    set internalValue(value: VpclatticeTargetGroupConfigHealthCheckMatcher | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export interface VpclatticeTargetGroupConfigHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#enabled VpclatticeTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#health_check_interval_seconds VpclatticeTargetGroup#health_check_interval_seconds}
    */
    readonly healthCheckIntervalSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#health_check_timeout_seconds VpclatticeTargetGroup#health_check_timeout_seconds}
    */
    readonly healthCheckTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#healthy_threshold_count VpclatticeTargetGroup#healthy_threshold_count}
    */
    readonly healthyThresholdCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#path VpclatticeTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#unhealthy_threshold_count VpclatticeTargetGroup#unhealthy_threshold_count}
    */
    readonly unhealthyThresholdCount?: number;
    /**
    * matcher block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#matcher VpclatticeTargetGroup#matcher}
    */
    readonly matcher?: VpclatticeTargetGroupConfigHealthCheckMatcher;
}
export declare function vpclatticeTargetGroupConfigHealthCheckToTerraform(struct?: VpclatticeTargetGroupConfigHealthCheckOutputReference | VpclatticeTargetGroupConfigHealthCheck): any;
export declare function vpclatticeTargetGroupConfigHealthCheckToHclTerraform(struct?: VpclatticeTargetGroupConfigHealthCheckOutputReference | VpclatticeTargetGroupConfigHealthCheck): any;
export declare class VpclatticeTargetGroupConfigHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeTargetGroupConfigHealthCheck | undefined;
    set internalValue(value: VpclatticeTargetGroupConfigHealthCheck | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _healthCheckIntervalSeconds?;
    get healthCheckIntervalSeconds(): number;
    set healthCheckIntervalSeconds(value: number);
    resetHealthCheckIntervalSeconds(): void;
    get healthCheckIntervalSecondsInput(): number | undefined;
    private _healthCheckTimeoutSeconds?;
    get healthCheckTimeoutSeconds(): number;
    set healthCheckTimeoutSeconds(value: number);
    resetHealthCheckTimeoutSeconds(): void;
    get healthCheckTimeoutSecondsInput(): number | undefined;
    private _healthyThresholdCount?;
    get healthyThresholdCount(): number;
    set healthyThresholdCount(value: number);
    resetHealthyThresholdCount(): void;
    get healthyThresholdCountInput(): number | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
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
    private _unhealthyThresholdCount?;
    get unhealthyThresholdCount(): number;
    set unhealthyThresholdCount(value: number);
    resetUnhealthyThresholdCount(): void;
    get unhealthyThresholdCountInput(): number | undefined;
    private _matcher;
    get matcher(): VpclatticeTargetGroupConfigHealthCheckMatcherOutputReference;
    putMatcher(value: VpclatticeTargetGroupConfigHealthCheckMatcher): void;
    resetMatcher(): void;
    get matcherInput(): VpclatticeTargetGroupConfigHealthCheckMatcher | undefined;
}
export interface VpclatticeTargetGroupConfigA {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#ip_address_type VpclatticeTargetGroup#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#lambda_event_structure_version VpclatticeTargetGroup#lambda_event_structure_version}
    */
    readonly lambdaEventStructureVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#port VpclatticeTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#protocol VpclatticeTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#protocol_version VpclatticeTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#vpc_identifier VpclatticeTargetGroup#vpc_identifier}
    */
    readonly vpcIdentifier?: string;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#health_check VpclatticeTargetGroup#health_check}
    */
    readonly healthCheck?: VpclatticeTargetGroupConfigHealthCheck;
}
export declare function vpclatticeTargetGroupConfigAToTerraform(struct?: VpclatticeTargetGroupConfigAOutputReference | VpclatticeTargetGroupConfigA): any;
export declare function vpclatticeTargetGroupConfigAToHclTerraform(struct?: VpclatticeTargetGroupConfigAOutputReference | VpclatticeTargetGroupConfigA): any;
export declare class VpclatticeTargetGroupConfigAOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeTargetGroupConfigA | undefined;
    set internalValue(value: VpclatticeTargetGroupConfigA | undefined);
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _lambdaEventStructureVersion?;
    get lambdaEventStructureVersion(): string;
    set lambdaEventStructureVersion(value: string);
    resetLambdaEventStructureVersion(): void;
    get lambdaEventStructureVersionInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
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
    private _vpcIdentifier?;
    get vpcIdentifier(): string;
    set vpcIdentifier(value: string);
    resetVpcIdentifier(): void;
    get vpcIdentifierInput(): string | undefined;
    private _healthCheck;
    get healthCheck(): VpclatticeTargetGroupConfigHealthCheckOutputReference;
    putHealthCheck(value: VpclatticeTargetGroupConfigHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): VpclatticeTargetGroupConfigHealthCheck | undefined;
}
export interface VpclatticeTargetGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#create VpclatticeTargetGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#delete VpclatticeTargetGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#update VpclatticeTargetGroup#update}
    */
    readonly update?: string;
}
export declare function vpclatticeTargetGroupTimeoutsToTerraform(struct?: VpclatticeTargetGroupTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeTargetGroupTimeoutsToHclTerraform(struct?: VpclatticeTargetGroupTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeTargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeTargetGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeTargetGroupTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group aws_vpclattice_target_group}
*/
export declare class VpclatticeTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_target_group";
    /**
    * Generates CDKTF code for importing a VpclatticeTargetGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeTargetGroup to import
    * @param importFromId The id of the existing VpclatticeTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeTargetGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_target_group aws_vpclattice_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeTargetGroupConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeTargetGroupConfig);
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
    get status(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _config;
    get config(): VpclatticeTargetGroupConfigAOutputReference;
    putConfig(value: VpclatticeTargetGroupConfigA): void;
    resetConfig(): void;
    get configInput(): VpclatticeTargetGroupConfigA | undefined;
    private _timeouts;
    get timeouts(): VpclatticeTargetGroupTimeoutsOutputReference;
    putTimeouts(value: VpclatticeTargetGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeTargetGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
