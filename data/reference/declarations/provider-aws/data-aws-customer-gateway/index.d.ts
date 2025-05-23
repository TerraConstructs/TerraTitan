/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCustomerGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#id DataAwsCustomerGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#tags DataAwsCustomerGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#filter DataAwsCustomerGateway#filter}
    */
    readonly filter?: DataAwsCustomerGatewayFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#timeouts DataAwsCustomerGateway#timeouts}
    */
    readonly timeouts?: DataAwsCustomerGatewayTimeouts;
}
export interface DataAwsCustomerGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#name DataAwsCustomerGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#values DataAwsCustomerGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsCustomerGatewayFilterToTerraform(struct?: DataAwsCustomerGatewayFilter | cdktf.IResolvable): any;
export declare function dataAwsCustomerGatewayFilterToHclTerraform(struct?: DataAwsCustomerGatewayFilter | cdktf.IResolvable): any;
export declare class DataAwsCustomerGatewayFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCustomerGatewayFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsCustomerGatewayFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsCustomerGatewayFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsCustomerGatewayFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCustomerGatewayFilterOutputReference;
}
export interface DataAwsCustomerGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#read DataAwsCustomerGateway#read}
    */
    readonly read?: string;
}
export declare function dataAwsCustomerGatewayTimeoutsToTerraform(struct?: DataAwsCustomerGatewayTimeouts | cdktf.IResolvable): any;
export declare function dataAwsCustomerGatewayTimeoutsToHclTerraform(struct?: DataAwsCustomerGatewayTimeouts | cdktf.IResolvable): any;
export declare class DataAwsCustomerGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCustomerGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsCustomerGatewayTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway aws_customer_gateway}
*/
export declare class DataAwsCustomerGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_customer_gateway";
    /**
    * Generates CDKTF code for importing a DataAwsCustomerGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCustomerGateway to import
    * @param importFromId The id of the existing DataAwsCustomerGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCustomerGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/customer_gateway aws_customer_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCustomerGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCustomerGatewayConfig);
    get arn(): string;
    get bgpAsn(): number;
    get bgpAsnExtended(): number;
    get certificateArn(): string;
    get deviceName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddress(): string;
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
    get type(): string;
    private _filter;
    get filter(): DataAwsCustomerGatewayFilterList;
    putFilter(value: DataAwsCustomerGatewayFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsCustomerGatewayFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsCustomerGatewayTimeoutsOutputReference;
    putTimeouts(value: DataAwsCustomerGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsCustomerGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
