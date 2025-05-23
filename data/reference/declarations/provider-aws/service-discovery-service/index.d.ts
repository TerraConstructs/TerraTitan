/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServiceDiscoveryServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#description ServiceDiscoveryService#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#id ServiceDiscoveryService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#name ServiceDiscoveryService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}
    */
    readonly namespaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#tags ServiceDiscoveryService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#type ServiceDiscoveryService#type}
    */
    readonly type?: string;
    /**
    * dns_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#dns_config ServiceDiscoveryService#dns_config}
    */
    readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig;
    /**
    * health_check_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#health_check_config ServiceDiscoveryService#health_check_config}
    */
    readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig;
    /**
    * health_check_custom_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}
    */
    readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig;
}
export interface ServiceDiscoveryServiceDnsConfigDnsRecords {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#ttl ServiceDiscoveryService#ttl}
    */
    readonly ttl: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#type ServiceDiscoveryService#type}
    */
    readonly type: string;
}
export declare function serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform(struct?: ServiceDiscoveryServiceDnsConfigDnsRecords | cdktf.IResolvable): any;
export declare function serviceDiscoveryServiceDnsConfigDnsRecordsToHclTerraform(struct?: ServiceDiscoveryServiceDnsConfigDnsRecords | cdktf.IResolvable): any;
export declare class ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServiceDiscoveryServiceDnsConfigDnsRecords | cdktf.IResolvable | undefined;
    set internalValue(value: ServiceDiscoveryServiceDnsConfigDnsRecords | cdktf.IResolvable | undefined);
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    get ttlInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class ServiceDiscoveryServiceDnsConfigDnsRecordsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServiceDiscoveryServiceDnsConfigDnsRecords[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference;
}
export interface ServiceDiscoveryServiceDnsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}
    */
    readonly namespaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}
    */
    readonly routingPolicy?: string;
    /**
    * dns_records block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#dns_records ServiceDiscoveryService#dns_records}
    */
    readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecords[] | cdktf.IResolvable;
}
export declare function serviceDiscoveryServiceDnsConfigToTerraform(struct?: ServiceDiscoveryServiceDnsConfigOutputReference | ServiceDiscoveryServiceDnsConfig): any;
export declare function serviceDiscoveryServiceDnsConfigToHclTerraform(struct?: ServiceDiscoveryServiceDnsConfigOutputReference | ServiceDiscoveryServiceDnsConfig): any;
export declare class ServiceDiscoveryServiceDnsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceDiscoveryServiceDnsConfig | undefined;
    set internalValue(value: ServiceDiscoveryServiceDnsConfig | undefined);
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    get namespaceIdInput(): string | undefined;
    private _routingPolicy?;
    get routingPolicy(): string;
    set routingPolicy(value: string);
    resetRoutingPolicy(): void;
    get routingPolicyInput(): string | undefined;
    private _dnsRecords;
    get dnsRecords(): ServiceDiscoveryServiceDnsConfigDnsRecordsList;
    putDnsRecords(value: ServiceDiscoveryServiceDnsConfigDnsRecords[] | cdktf.IResolvable): void;
    get dnsRecordsInput(): cdktf.IResolvable | ServiceDiscoveryServiceDnsConfigDnsRecords[] | undefined;
}
export interface ServiceDiscoveryServiceHealthCheckConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#type ServiceDiscoveryService#type}
    */
    readonly type?: string;
}
export declare function serviceDiscoveryServiceHealthCheckConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckConfigOutputReference | ServiceDiscoveryServiceHealthCheckConfig): any;
export declare function serviceDiscoveryServiceHealthCheckConfigToHclTerraform(struct?: ServiceDiscoveryServiceHealthCheckConfigOutputReference | ServiceDiscoveryServiceHealthCheckConfig): any;
export declare class ServiceDiscoveryServiceHealthCheckConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceDiscoveryServiceHealthCheckConfig | undefined;
    set internalValue(value: ServiceDiscoveryServiceHealthCheckConfig | undefined);
    private _failureThreshold?;
    get failureThreshold(): number;
    set failureThreshold(value: number);
    resetFailureThreshold(): void;
    get failureThresholdInput(): number | undefined;
    private _resourcePath?;
    get resourcePath(): string;
    set resourcePath(value: string);
    resetResourcePath(): void;
    get resourcePathInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}
    */
    readonly failureThreshold?: number;
}
export declare function serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference | ServiceDiscoveryServiceHealthCheckCustomConfig): any;
export declare function serviceDiscoveryServiceHealthCheckCustomConfigToHclTerraform(struct?: ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference | ServiceDiscoveryServiceHealthCheckCustomConfig): any;
export declare class ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServiceDiscoveryServiceHealthCheckCustomConfig | undefined;
    set internalValue(value: ServiceDiscoveryServiceHealthCheckCustomConfig | undefined);
    private _failureThreshold?;
    get failureThreshold(): number;
    set failureThreshold(value: number);
    resetFailureThreshold(): void;
    get failureThresholdInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service aws_service_discovery_service}
*/
export declare class ServiceDiscoveryService extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_service_discovery_service";
    /**
    * Generates CDKTF code for importing a ServiceDiscoveryService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServiceDiscoveryService to import
    * @param importFromId The id of the existing ServiceDiscoveryService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServiceDiscoveryService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/service_discovery_service aws_service_discovery_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryServiceConfig
    */
    constructor(scope: Construct, id: string, config: ServiceDiscoveryServiceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    resetNamespaceId(): void;
    get namespaceIdInput(): string | undefined;
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
    resetType(): void;
    get typeInput(): string | undefined;
    private _dnsConfig;
    get dnsConfig(): ServiceDiscoveryServiceDnsConfigOutputReference;
    putDnsConfig(value: ServiceDiscoveryServiceDnsConfig): void;
    resetDnsConfig(): void;
    get dnsConfigInput(): ServiceDiscoveryServiceDnsConfig | undefined;
    private _healthCheckConfig;
    get healthCheckConfig(): ServiceDiscoveryServiceHealthCheckConfigOutputReference;
    putHealthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig): void;
    resetHealthCheckConfig(): void;
    get healthCheckConfigInput(): ServiceDiscoveryServiceHealthCheckConfig | undefined;
    private _healthCheckCustomConfig;
    get healthCheckCustomConfig(): ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference;
    putHealthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig): void;
    resetHealthCheckCustomConfig(): void;
    get healthCheckCustomConfigInput(): ServiceDiscoveryServiceHealthCheckCustomConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
