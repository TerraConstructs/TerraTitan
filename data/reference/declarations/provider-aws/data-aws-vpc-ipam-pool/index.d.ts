/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcIpamPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}
    */
    readonly allocationResourceTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#id DataAwsVpcIpamPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}
    */
    readonly ipamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#tags DataAwsVpcIpamPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#filter DataAwsVpcIpamPool#filter}
    */
    readonly filter?: DataAwsVpcIpamPoolFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#timeouts DataAwsVpcIpamPool#timeouts}
    */
    readonly timeouts?: DataAwsVpcIpamPoolTimeouts;
}
export interface DataAwsVpcIpamPoolFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#name DataAwsVpcIpamPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#values DataAwsVpcIpamPool#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcIpamPoolFilterToTerraform(struct?: DataAwsVpcIpamPoolFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcIpamPoolFilterToHclTerraform(struct?: DataAwsVpcIpamPoolFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcIpamPoolFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcIpamPoolFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcIpamPoolFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcIpamPoolFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcIpamPoolFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcIpamPoolFilterOutputReference;
}
export interface DataAwsVpcIpamPoolTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#read DataAwsVpcIpamPool#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcIpamPoolTimeoutsToTerraform(struct?: DataAwsVpcIpamPoolTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcIpamPoolTimeoutsToHclTerraform(struct?: DataAwsVpcIpamPoolTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcIpamPoolTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcIpamPoolTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcIpamPoolTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool aws_vpc_ipam_pool}
*/
export declare class DataAwsVpcIpamPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_ipam_pool";
    /**
    * Generates CDKTF code for importing a DataAwsVpcIpamPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcIpamPool to import
    * @param importFromId The id of the existing DataAwsVpcIpamPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcIpamPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool aws_vpc_ipam_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcIpamPoolConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcIpamPoolConfig);
    get addressFamily(): string;
    get allocationDefaultNetmaskLength(): number;
    get allocationMaxNetmaskLength(): number;
    get allocationMinNetmaskLength(): number;
    private _allocationResourceTags?;
    get allocationResourceTags(): {
        [key: string]: string;
    };
    set allocationResourceTags(value: {
        [key: string]: string;
    });
    resetAllocationResourceTags(): void;
    get allocationResourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    get arn(): string;
    get autoImport(): cdktf.IResolvable;
    get awsService(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    resetIpamPoolId(): void;
    get ipamPoolIdInput(): string | undefined;
    get ipamScopeId(): string;
    get ipamScopeType(): string;
    get locale(): string;
    get poolDepth(): number;
    get publiclyAdvertisable(): cdktf.IResolvable;
    get sourceIpamPoolId(): string;
    get state(): string;
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
    get filter(): DataAwsVpcIpamPoolFilterList;
    putFilter(value: DataAwsVpcIpamPoolFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcIpamPoolFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcIpamPoolTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcIpamPoolTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcIpamPoolTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
