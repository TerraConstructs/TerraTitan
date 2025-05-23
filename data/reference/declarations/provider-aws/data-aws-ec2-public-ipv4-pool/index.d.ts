/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2PublicIpv4PoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_public_ipv4_pool#id DataAwsEc2PublicIpv4Pool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_public_ipv4_pool#pool_id DataAwsEc2PublicIpv4Pool#pool_id}
    */
    readonly poolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_public_ipv4_pool#tags DataAwsEc2PublicIpv4Pool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEc2PublicIpv4PoolPoolAddressRanges {
}
export declare function dataAwsEc2PublicIpv4PoolPoolAddressRangesToTerraform(struct?: DataAwsEc2PublicIpv4PoolPoolAddressRanges): any;
export declare function dataAwsEc2PublicIpv4PoolPoolAddressRangesToHclTerraform(struct?: DataAwsEc2PublicIpv4PoolPoolAddressRanges): any;
export declare class DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2PublicIpv4PoolPoolAddressRanges | undefined;
    set internalValue(value: DataAwsEc2PublicIpv4PoolPoolAddressRanges | undefined);
    get addressCount(): number;
    get availableAddressCount(): number;
    get firstAddress(): string;
    get lastAddress(): string;
}
export declare class DataAwsEc2PublicIpv4PoolPoolAddressRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2PublicIpv4PoolPoolAddressRangesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool}
*/
export declare class DataAwsEc2PublicIpv4Pool extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_public_ipv4_pool";
    /**
    * Generates CDKTF code for importing a DataAwsEc2PublicIpv4Pool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2PublicIpv4Pool to import
    * @param importFromId The id of the existing DataAwsEc2PublicIpv4Pool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_public_ipv4_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2PublicIpv4Pool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_public_ipv4_pool aws_ec2_public_ipv4_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2PublicIpv4PoolConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEc2PublicIpv4PoolConfig);
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get networkBorderGroup(): string;
    private _poolAddressRanges;
    get poolAddressRanges(): DataAwsEc2PublicIpv4PoolPoolAddressRangesList;
    private _poolId?;
    get poolId(): string;
    set poolId(value: string);
    get poolIdInput(): string | undefined;
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
    get totalAddressCount(): number;
    get totalAvailableAddressCount(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
