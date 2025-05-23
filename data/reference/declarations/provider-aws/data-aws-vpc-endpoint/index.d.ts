/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#id DataAwsVpcEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#service_name DataAwsVpcEndpoint#service_name}
    */
    readonly serviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#state DataAwsVpcEndpoint#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#tags DataAwsVpcEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#vpc_id DataAwsVpcEndpoint#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#filter DataAwsVpcEndpoint#filter}
    */
    readonly filter?: DataAwsVpcEndpointFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#timeouts DataAwsVpcEndpoint#timeouts}
    */
    readonly timeouts?: DataAwsVpcEndpointTimeouts;
}
export interface DataAwsVpcEndpointDnsEntry {
}
export declare function dataAwsVpcEndpointDnsEntryToTerraform(struct?: DataAwsVpcEndpointDnsEntry): any;
export declare function dataAwsVpcEndpointDnsEntryToHclTerraform(struct?: DataAwsVpcEndpointDnsEntry): any;
export declare class DataAwsVpcEndpointDnsEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcEndpointDnsEntry | undefined;
    set internalValue(value: DataAwsVpcEndpointDnsEntry | undefined);
    get dnsName(): string;
    get hostedZoneId(): string;
}
export declare class DataAwsVpcEndpointDnsEntryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcEndpointDnsEntryOutputReference;
}
export interface DataAwsVpcEndpointDnsOptions {
}
export declare function dataAwsVpcEndpointDnsOptionsToTerraform(struct?: DataAwsVpcEndpointDnsOptions): any;
export declare function dataAwsVpcEndpointDnsOptionsToHclTerraform(struct?: DataAwsVpcEndpointDnsOptions): any;
export declare class DataAwsVpcEndpointDnsOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcEndpointDnsOptions | undefined;
    set internalValue(value: DataAwsVpcEndpointDnsOptions | undefined);
    get dnsRecordIpType(): string;
    get privateDnsOnlyForInboundResolverEndpoint(): cdktf.IResolvable;
}
export declare class DataAwsVpcEndpointDnsOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcEndpointDnsOptionsOutputReference;
}
export interface DataAwsVpcEndpointFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#name DataAwsVpcEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#values DataAwsVpcEndpoint#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcEndpointFilterToTerraform(struct?: DataAwsVpcEndpointFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcEndpointFilterToHclTerraform(struct?: DataAwsVpcEndpointFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcEndpointFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcEndpointFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcEndpointFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcEndpointFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcEndpointFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcEndpointFilterOutputReference;
}
export interface DataAwsVpcEndpointTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#read DataAwsVpcEndpoint#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcEndpointTimeoutsToTerraform(struct?: DataAwsVpcEndpointTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcEndpointTimeoutsToHclTerraform(struct?: DataAwsVpcEndpointTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcEndpointTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint aws_vpc_endpoint}
*/
export declare class DataAwsVpcEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_endpoint";
    /**
    * Generates CDKTF code for importing a DataAwsVpcEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcEndpoint to import
    * @param importFromId The id of the existing DataAwsVpcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_endpoint aws_vpc_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcEndpointConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcEndpointConfig);
    get arn(): string;
    get cidrBlocks(): string[];
    private _dnsEntry;
    get dnsEntry(): DataAwsVpcEndpointDnsEntryList;
    private _dnsOptions;
    get dnsOptions(): DataAwsVpcEndpointDnsOptionsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddressType(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    get policy(): string;
    get prefixListId(): string;
    get privateDnsEnabled(): cdktf.IResolvable;
    get requesterManaged(): cdktf.IResolvable;
    get routeTableIds(): string[];
    get securityGroupIds(): string[];
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    get subnetIds(): string[];
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
    get vpcEndpointType(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsVpcEndpointFilterList;
    putFilter(value: DataAwsVpcEndpointFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcEndpointFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcEndpointTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
