/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServiceDiscoveryServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service#id DataAwsServiceDiscoveryService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service#name DataAwsServiceDiscoveryService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service#namespace_id DataAwsServiceDiscoveryService#namespace_id}
    */
    readonly namespaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service#tags DataAwsServiceDiscoveryService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service#tags_all DataAwsServiceDiscoveryService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface DataAwsServiceDiscoveryServiceDnsConfigDnsRecords {
}
export declare function dataAwsServiceDiscoveryServiceDnsConfigDnsRecordsToTerraform(struct?: DataAwsServiceDiscoveryServiceDnsConfigDnsRecords): any;
export declare function dataAwsServiceDiscoveryServiceDnsConfigDnsRecordsToHclTerraform(struct?: DataAwsServiceDiscoveryServiceDnsConfigDnsRecords): any;
export declare class DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServiceDiscoveryServiceDnsConfigDnsRecords | undefined;
    set internalValue(value: DataAwsServiceDiscoveryServiceDnsConfigDnsRecords | undefined);
    get ttl(): number;
    get type(): string;
}
export declare class DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference;
}
export interface DataAwsServiceDiscoveryServiceDnsConfig {
}
export declare function dataAwsServiceDiscoveryServiceDnsConfigToTerraform(struct?: DataAwsServiceDiscoveryServiceDnsConfig): any;
export declare function dataAwsServiceDiscoveryServiceDnsConfigToHclTerraform(struct?: DataAwsServiceDiscoveryServiceDnsConfig): any;
export declare class DataAwsServiceDiscoveryServiceDnsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServiceDiscoveryServiceDnsConfig | undefined;
    set internalValue(value: DataAwsServiceDiscoveryServiceDnsConfig | undefined);
    private _dnsRecords;
    get dnsRecords(): DataAwsServiceDiscoveryServiceDnsConfigDnsRecordsList;
    get namespaceId(): string;
    get routingPolicy(): string;
}
export declare class DataAwsServiceDiscoveryServiceDnsConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsServiceDiscoveryServiceDnsConfigOutputReference;
}
export interface DataAwsServiceDiscoveryServiceHealthCheckConfig {
}
export declare function dataAwsServiceDiscoveryServiceHealthCheckConfigToTerraform(struct?: DataAwsServiceDiscoveryServiceHealthCheckConfig): any;
export declare function dataAwsServiceDiscoveryServiceHealthCheckConfigToHclTerraform(struct?: DataAwsServiceDiscoveryServiceHealthCheckConfig): any;
export declare class DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServiceDiscoveryServiceHealthCheckConfig | undefined;
    set internalValue(value: DataAwsServiceDiscoveryServiceHealthCheckConfig | undefined);
    get failureThreshold(): number;
    get resourcePath(): string;
    get type(): string;
}
export declare class DataAwsServiceDiscoveryServiceHealthCheckConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsServiceDiscoveryServiceHealthCheckConfigOutputReference;
}
export interface DataAwsServiceDiscoveryServiceHealthCheckCustomConfig {
}
export declare function dataAwsServiceDiscoveryServiceHealthCheckCustomConfigToTerraform(struct?: DataAwsServiceDiscoveryServiceHealthCheckCustomConfig): any;
export declare function dataAwsServiceDiscoveryServiceHealthCheckCustomConfigToHclTerraform(struct?: DataAwsServiceDiscoveryServiceHealthCheckCustomConfig): any;
export declare class DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServiceDiscoveryServiceHealthCheckCustomConfig | undefined;
    set internalValue(value: DataAwsServiceDiscoveryServiceHealthCheckCustomConfig | undefined);
    get failureThreshold(): number;
}
export declare class DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsServiceDiscoveryServiceHealthCheckCustomConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service aws_service_discovery_service}
*/
export declare class DataAwsServiceDiscoveryService extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_service_discovery_service";
    /**
    * Generates CDKTF code for importing a DataAwsServiceDiscoveryService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServiceDiscoveryService to import
    * @param importFromId The id of the existing DataAwsServiceDiscoveryService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServiceDiscoveryService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/service_discovery_service aws_service_discovery_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServiceDiscoveryServiceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServiceDiscoveryServiceConfig);
    get arn(): string;
    get description(): string;
    private _dnsConfig;
    get dnsConfig(): DataAwsServiceDiscoveryServiceDnsConfigList;
    private _healthCheckConfig;
    get healthCheckConfig(): DataAwsServiceDiscoveryServiceHealthCheckConfigList;
    private _healthCheckCustomConfig;
    get healthCheckCustomConfig(): DataAwsServiceDiscoveryServiceHealthCheckCustomConfigList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
