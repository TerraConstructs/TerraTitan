/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#id DataAwsVpcEndpointService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#service DataAwsVpcEndpointService#service}
    */
    readonly service?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#service_name DataAwsVpcEndpointService#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#service_regions DataAwsVpcEndpointService#service_regions}
    */
    readonly serviceRegions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#service_type DataAwsVpcEndpointService#service_type}
    */
    readonly serviceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#tags DataAwsVpcEndpointService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#filter DataAwsVpcEndpointService#filter}
    */
    readonly filter?: DataAwsVpcEndpointServiceFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#timeouts DataAwsVpcEndpointService#timeouts}
    */
    readonly timeouts?: DataAwsVpcEndpointServiceTimeouts;
}
export interface DataAwsVpcEndpointServiceFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#name DataAwsVpcEndpointService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#values DataAwsVpcEndpointService#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcEndpointServiceFilterToTerraform(struct?: DataAwsVpcEndpointServiceFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcEndpointServiceFilterToHclTerraform(struct?: DataAwsVpcEndpointServiceFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcEndpointServiceFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcEndpointServiceFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcEndpointServiceFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcEndpointServiceFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcEndpointServiceFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcEndpointServiceFilterOutputReference;
}
export interface DataAwsVpcEndpointServiceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#read DataAwsVpcEndpointService#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcEndpointServiceTimeoutsToTerraform(struct?: DataAwsVpcEndpointServiceTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcEndpointServiceTimeoutsToHclTerraform(struct?: DataAwsVpcEndpointServiceTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcEndpointServiceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcEndpointServiceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcEndpointServiceTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service aws_vpc_endpoint_service}
*/
export declare class DataAwsVpcEndpointService extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_endpoint_service";
    /**
    * Generates CDKTF code for importing a DataAwsVpcEndpointService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcEndpointService to import
    * @param importFromId The id of the existing DataAwsVpcEndpointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcEndpointService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint_service aws_vpc_endpoint_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointServiceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcEndpointServiceConfig);
    get acceptanceRequired(): cdktf.IResolvable;
    get arn(): string;
    get availabilityZones(): string[];
    get baseEndpointDnsNames(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get managesVpcEndpoints(): cdktf.IResolvable;
    get owner(): string;
    get privateDnsName(): string;
    get privateDnsNames(): string[];
    get region(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    resetService(): void;
    get serviceInput(): string | undefined;
    get serviceId(): string;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    private _serviceRegions?;
    get serviceRegions(): string[];
    set serviceRegions(value: string[]);
    resetServiceRegions(): void;
    get serviceRegionsInput(): string[] | undefined;
    private _serviceType?;
    get serviceType(): string;
    set serviceType(value: string);
    resetServiceType(): void;
    get serviceTypeInput(): string | undefined;
    get supportedIpAddressTypes(): string[];
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
    get vpcEndpointPolicySupported(): cdktf.IResolvable;
    private _filter;
    get filter(): DataAwsVpcEndpointServiceFilterList;
    putFilter(value: DataAwsVpcEndpointServiceFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcEndpointServiceFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcEndpointServiceTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcEndpointServiceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcEndpointServiceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
