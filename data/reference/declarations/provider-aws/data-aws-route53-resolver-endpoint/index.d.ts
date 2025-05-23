/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ResolverEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint#id DataAwsRoute53ResolverEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint#resolver_endpoint_id DataAwsRoute53ResolverEndpoint#resolver_endpoint_id}
    */
    readonly resolverEndpointId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint#filter DataAwsRoute53ResolverEndpoint#filter}
    */
    readonly filter?: DataAwsRoute53ResolverEndpointFilter[] | cdktf.IResolvable;
}
export interface DataAwsRoute53ResolverEndpointFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint#name DataAwsRoute53ResolverEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint#values DataAwsRoute53ResolverEndpoint#values}
    */
    readonly values: string[];
}
export declare function dataAwsRoute53ResolverEndpointFilterToTerraform(struct?: DataAwsRoute53ResolverEndpointFilter | cdktf.IResolvable): any;
export declare function dataAwsRoute53ResolverEndpointFilterToHclTerraform(struct?: DataAwsRoute53ResolverEndpointFilter | cdktf.IResolvable): any;
export declare class DataAwsRoute53ResolverEndpointFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53ResolverEndpointFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRoute53ResolverEndpointFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsRoute53ResolverEndpointFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRoute53ResolverEndpointFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53ResolverEndpointFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint aws_route53_resolver_endpoint}
*/
export declare class DataAwsRoute53ResolverEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_resolver_endpoint";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53ResolverEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53ResolverEndpoint to import
    * @param importFromId The id of the existing DataAwsRoute53ResolverEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53ResolverEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_endpoint aws_route53_resolver_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverEndpointConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ResolverEndpointConfig);
    get arn(): string;
    get direction(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddresses(): string[];
    get name(): string;
    get protocols(): string[];
    private _resolverEndpointId?;
    get resolverEndpointId(): string;
    set resolverEndpointId(value: string);
    resetResolverEndpointId(): void;
    get resolverEndpointIdInput(): string | undefined;
    get resolverEndpointType(): string;
    get status(): string;
    get vpcId(): string;
    private _filter;
    get filter(): DataAwsRoute53ResolverEndpointFilterList;
    putFilter(value: DataAwsRoute53ResolverEndpointFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsRoute53ResolverEndpointFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
