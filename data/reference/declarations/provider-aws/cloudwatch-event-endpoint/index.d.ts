/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchEventEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}
    */
    readonly roleArn?: string;
    /**
    * event_bus block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#event_bus CloudwatchEventEndpoint#event_bus}
    */
    readonly eventBus: CloudwatchEventEndpointEventBus[] | cdktf.IResolvable;
    /**
    * replication_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#replication_config CloudwatchEventEndpoint#replication_config}
    */
    readonly replicationConfig?: CloudwatchEventEndpointReplicationConfig;
    /**
    * routing_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#routing_config CloudwatchEventEndpoint#routing_config}
    */
    readonly routingConfig: CloudwatchEventEndpointRoutingConfig;
}
export interface CloudwatchEventEndpointEventBus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}
    */
    readonly eventBusArn: string;
}
export declare function cloudwatchEventEndpointEventBusToTerraform(struct?: CloudwatchEventEndpointEventBus | cdktf.IResolvable): any;
export declare function cloudwatchEventEndpointEventBusToHclTerraform(struct?: CloudwatchEventEndpointEventBus | cdktf.IResolvable): any;
export declare class CloudwatchEventEndpointEventBusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchEventEndpointEventBus | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchEventEndpointEventBus | cdktf.IResolvable | undefined);
    private _eventBusArn?;
    get eventBusArn(): string;
    set eventBusArn(value: string);
    get eventBusArnInput(): string | undefined;
}
export declare class CloudwatchEventEndpointEventBusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchEventEndpointEventBus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchEventEndpointEventBusOutputReference;
}
export interface CloudwatchEventEndpointReplicationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}
    */
    readonly state?: string;
}
export declare function cloudwatchEventEndpointReplicationConfigToTerraform(struct?: CloudwatchEventEndpointReplicationConfigOutputReference | CloudwatchEventEndpointReplicationConfig): any;
export declare function cloudwatchEventEndpointReplicationConfigToHclTerraform(struct?: CloudwatchEventEndpointReplicationConfigOutputReference | CloudwatchEventEndpointReplicationConfig): any;
export declare class CloudwatchEventEndpointReplicationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventEndpointReplicationConfig | undefined;
    set internalValue(value: CloudwatchEventEndpointReplicationConfig | undefined);
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
}
export interface CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}
    */
    readonly healthCheck?: string;
}
export declare function cloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryToTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary): any;
export declare function cloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryToHclTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary): any;
export declare class CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary | undefined;
    set internalValue(value: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary | undefined);
    private _healthCheck?;
    get healthCheck(): string;
    set healthCheck(value: string);
    resetHealthCheck(): void;
    get healthCheckInput(): string | undefined;
}
export interface CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}
    */
    readonly route?: string;
}
export declare function cloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryToTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary): any;
export declare function cloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryToHclTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary): any;
export declare class CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary | undefined;
    set internalValue(value: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary | undefined);
    private _route?;
    get route(): string;
    set route(value: string);
    resetRoute(): void;
    get routeInput(): string | undefined;
}
export interface CloudwatchEventEndpointRoutingConfigFailoverConfig {
    /**
    * primary block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#primary CloudwatchEventEndpoint#primary}
    */
    readonly primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary;
    /**
    * secondary block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#secondary CloudwatchEventEndpoint#secondary}
    */
    readonly secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary;
}
export declare function cloudwatchEventEndpointRoutingConfigFailoverConfigToTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfig): any;
export declare function cloudwatchEventEndpointRoutingConfigFailoverConfigToHclTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfig): any;
export declare class CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventEndpointRoutingConfigFailoverConfig | undefined;
    set internalValue(value: CloudwatchEventEndpointRoutingConfigFailoverConfig | undefined);
    private _primary;
    get primary(): CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference;
    putPrimary(value: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary): void;
    get primaryInput(): CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary | undefined;
    private _secondary;
    get secondary(): CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference;
    putSecondary(value: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary): void;
    get secondaryInput(): CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary | undefined;
}
export interface CloudwatchEventEndpointRoutingConfig {
    /**
    * failover_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#failover_config CloudwatchEventEndpoint#failover_config}
    */
    readonly failoverConfig: CloudwatchEventEndpointRoutingConfigFailoverConfig;
}
export declare function cloudwatchEventEndpointRoutingConfigToTerraform(struct?: CloudwatchEventEndpointRoutingConfigOutputReference | CloudwatchEventEndpointRoutingConfig): any;
export declare function cloudwatchEventEndpointRoutingConfigToHclTerraform(struct?: CloudwatchEventEndpointRoutingConfigOutputReference | CloudwatchEventEndpointRoutingConfig): any;
export declare class CloudwatchEventEndpointRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchEventEndpointRoutingConfig | undefined;
    set internalValue(value: CloudwatchEventEndpointRoutingConfig | undefined);
    private _failoverConfig;
    get failoverConfig(): CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference;
    putFailoverConfig(value: CloudwatchEventEndpointRoutingConfigFailoverConfig): void;
    get failoverConfigInput(): CloudwatchEventEndpointRoutingConfigFailoverConfig | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint}
*/
export declare class CloudwatchEventEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_event_endpoint";
    /**
    * Generates CDKTF code for importing a CloudwatchEventEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchEventEndpoint to import
    * @param importFromId The id of the existing CloudwatchEventEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchEventEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventEndpointConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventEndpointConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get endpointUrl(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _eventBus;
    get eventBus(): CloudwatchEventEndpointEventBusList;
    putEventBus(value: CloudwatchEventEndpointEventBus[] | cdktf.IResolvable): void;
    get eventBusInput(): cdktf.IResolvable | CloudwatchEventEndpointEventBus[] | undefined;
    private _replicationConfig;
    get replicationConfig(): CloudwatchEventEndpointReplicationConfigOutputReference;
    putReplicationConfig(value: CloudwatchEventEndpointReplicationConfig): void;
    resetReplicationConfig(): void;
    get replicationConfigInput(): CloudwatchEventEndpointReplicationConfig | undefined;
    private _routingConfig;
    get routingConfig(): CloudwatchEventEndpointRoutingConfigOutputReference;
    putRoutingConfig(value: CloudwatchEventEndpointRoutingConfig): void;
    get routingConfigInput(): CloudwatchEventEndpointRoutingConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
