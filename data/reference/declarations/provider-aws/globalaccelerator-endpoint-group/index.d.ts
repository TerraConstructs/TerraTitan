/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}
    */
    readonly endpointGroupRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}
    */
    readonly healthCheckIntervalSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}
    */
    readonly healthCheckPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}
    */
    readonly healthCheckPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}
    */
    readonly healthCheckProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#id GlobalacceleratorEndpointGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}
    */
    readonly thresholdCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}
    */
    readonly trafficDialPercentage?: number;
    /**
    * endpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}
    */
    readonly endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[] | cdktf.IResolvable;
    /**
    * port_override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#port_override GlobalacceleratorEndpointGroup#port_override}
    */
    readonly portOverride?: GlobalacceleratorEndpointGroupPortOverride[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#timeouts GlobalacceleratorEndpointGroup#timeouts}
    */
    readonly timeouts?: GlobalacceleratorEndpointGroupTimeouts;
}
export interface GlobalacceleratorEndpointGroupEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#attachment_arn GlobalacceleratorEndpointGroup#attachment_arn}
    */
    readonly attachmentArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}
    */
    readonly clientIpPreservationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}
    */
    readonly endpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}
    */
    readonly weight?: number;
}
export declare function globalacceleratorEndpointGroupEndpointConfigurationToTerraform(struct?: GlobalacceleratorEndpointGroupEndpointConfiguration | cdktf.IResolvable): any;
export declare function globalacceleratorEndpointGroupEndpointConfigurationToHclTerraform(struct?: GlobalacceleratorEndpointGroupEndpointConfiguration | cdktf.IResolvable): any;
export declare class GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorEndpointGroupEndpointConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorEndpointGroupEndpointConfiguration | cdktf.IResolvable | undefined);
    private _attachmentArn?;
    get attachmentArn(): string;
    set attachmentArn(value: string);
    resetAttachmentArn(): void;
    get attachmentArnInput(): string | undefined;
    private _clientIpPreservationEnabled?;
    get clientIpPreservationEnabled(): boolean | cdktf.IResolvable;
    set clientIpPreservationEnabled(value: boolean | cdktf.IResolvable);
    resetClientIpPreservationEnabled(): void;
    get clientIpPreservationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    resetEndpointId(): void;
    get endpointIdInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class GlobalacceleratorEndpointGroupEndpointConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlobalacceleratorEndpointGroupEndpointConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlobalacceleratorEndpointGroupEndpointConfigurationOutputReference;
}
export interface GlobalacceleratorEndpointGroupPortOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}
    */
    readonly endpointPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}
    */
    readonly listenerPort: number;
}
export declare function globalacceleratorEndpointGroupPortOverrideToTerraform(struct?: GlobalacceleratorEndpointGroupPortOverride | cdktf.IResolvable): any;
export declare function globalacceleratorEndpointGroupPortOverrideToHclTerraform(struct?: GlobalacceleratorEndpointGroupPortOverride | cdktf.IResolvable): any;
export declare class GlobalacceleratorEndpointGroupPortOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorEndpointGroupPortOverride | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorEndpointGroupPortOverride | cdktf.IResolvable | undefined);
    private _endpointPort?;
    get endpointPort(): number;
    set endpointPort(value: number);
    get endpointPortInput(): number | undefined;
    private _listenerPort?;
    get listenerPort(): number;
    set listenerPort(value: number);
    get listenerPortInput(): number | undefined;
}
export declare class GlobalacceleratorEndpointGroupPortOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlobalacceleratorEndpointGroupPortOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlobalacceleratorEndpointGroupPortOverrideOutputReference;
}
export interface GlobalacceleratorEndpointGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#create GlobalacceleratorEndpointGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#delete GlobalacceleratorEndpointGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#update GlobalacceleratorEndpointGroup#update}
    */
    readonly update?: string;
}
export declare function globalacceleratorEndpointGroupTimeoutsToTerraform(struct?: GlobalacceleratorEndpointGroupTimeouts | cdktf.IResolvable): any;
export declare function globalacceleratorEndpointGroupTimeoutsToHclTerraform(struct?: GlobalacceleratorEndpointGroupTimeouts | cdktf.IResolvable): any;
export declare class GlobalacceleratorEndpointGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlobalacceleratorEndpointGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorEndpointGroupTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group}
*/
export declare class GlobalacceleratorEndpointGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_globalaccelerator_endpoint_group";
    /**
    * Generates CDKTF code for importing a GlobalacceleratorEndpointGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlobalacceleratorEndpointGroup to import
    * @param importFromId The id of the existing GlobalacceleratorEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlobalacceleratorEndpointGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_endpoint_group aws_globalaccelerator_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorEndpointGroupConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorEndpointGroupConfig);
    get arn(): string;
    private _endpointGroupRegion?;
    get endpointGroupRegion(): string;
    set endpointGroupRegion(value: string);
    resetEndpointGroupRegion(): void;
    get endpointGroupRegionInput(): string | undefined;
    private _healthCheckIntervalSeconds?;
    get healthCheckIntervalSeconds(): number;
    set healthCheckIntervalSeconds(value: number);
    resetHealthCheckIntervalSeconds(): void;
    get healthCheckIntervalSecondsInput(): number | undefined;
    private _healthCheckPath?;
    get healthCheckPath(): string;
    set healthCheckPath(value: string);
    resetHealthCheckPath(): void;
    get healthCheckPathInput(): string | undefined;
    private _healthCheckPort?;
    get healthCheckPort(): number;
    set healthCheckPort(value: number);
    resetHealthCheckPort(): void;
    get healthCheckPortInput(): number | undefined;
    private _healthCheckProtocol?;
    get healthCheckProtocol(): string;
    set healthCheckProtocol(value: string);
    resetHealthCheckProtocol(): void;
    get healthCheckProtocolInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _listenerArn?;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string | undefined;
    private _thresholdCount?;
    get thresholdCount(): number;
    set thresholdCount(value: number);
    resetThresholdCount(): void;
    get thresholdCountInput(): number | undefined;
    private _trafficDialPercentage?;
    get trafficDialPercentage(): number;
    set trafficDialPercentage(value: number);
    resetTrafficDialPercentage(): void;
    get trafficDialPercentageInput(): number | undefined;
    private _endpointConfiguration;
    get endpointConfiguration(): GlobalacceleratorEndpointGroupEndpointConfigurationList;
    putEndpointConfiguration(value: GlobalacceleratorEndpointGroupEndpointConfiguration[] | cdktf.IResolvable): void;
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): cdktf.IResolvable | GlobalacceleratorEndpointGroupEndpointConfiguration[] | undefined;
    private _portOverride;
    get portOverride(): GlobalacceleratorEndpointGroupPortOverrideList;
    putPortOverride(value: GlobalacceleratorEndpointGroupPortOverride[] | cdktf.IResolvable): void;
    resetPortOverride(): void;
    get portOverrideInput(): cdktf.IResolvable | GlobalacceleratorEndpointGroupPortOverride[] | undefined;
    private _timeouts;
    get timeouts(): GlobalacceleratorEndpointGroupTimeoutsOutputReference;
    putTimeouts(value: GlobalacceleratorEndpointGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GlobalacceleratorEndpointGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
