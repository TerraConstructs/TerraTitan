/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2LocalGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#id DataAwsEc2LocalGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#state DataAwsEc2LocalGateway#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#tags DataAwsEc2LocalGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#filter DataAwsEc2LocalGateway#filter}
    */
    readonly filter?: DataAwsEc2LocalGatewayFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#timeouts DataAwsEc2LocalGateway#timeouts}
    */
    readonly timeouts?: DataAwsEc2LocalGatewayTimeouts;
}
export interface DataAwsEc2LocalGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#name DataAwsEc2LocalGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#values DataAwsEc2LocalGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2LocalGatewayFilterToTerraform(struct?: DataAwsEc2LocalGatewayFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayFilterToHclTerraform(struct?: DataAwsEc2LocalGatewayFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2LocalGatewayFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2LocalGatewayFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2LocalGatewayFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2LocalGatewayFilterOutputReference;
}
export interface DataAwsEc2LocalGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#read DataAwsEc2LocalGateway#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2LocalGatewayTimeoutsToTerraform(struct?: DataAwsEc2LocalGatewayTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2LocalGatewayTimeoutsToHclTerraform(struct?: DataAwsEc2LocalGatewayTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2LocalGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2LocalGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2LocalGatewayTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway aws_ec2_local_gateway}
*/
export declare class DataAwsEc2LocalGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_local_gateway";
    /**
    * Generates CDKTF code for importing a DataAwsEc2LocalGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2LocalGateway to import
    * @param importFromId The id of the existing DataAwsEc2LocalGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2LocalGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_local_gateway aws_ec2_local_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2LocalGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get outpostArn(): string;
    get ownerId(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _filter;
    get filter(): DataAwsEc2LocalGatewayFilterList;
    putFilter(value: DataAwsEc2LocalGatewayFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2LocalGatewayTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2LocalGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2LocalGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
