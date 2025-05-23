/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNetworkAclsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#id DataAwsNetworkAcls#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#tags DataAwsNetworkAcls#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#vpc_id DataAwsNetworkAcls#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#filter DataAwsNetworkAcls#filter}
    */
    readonly filter?: DataAwsNetworkAclsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#timeouts DataAwsNetworkAcls#timeouts}
    */
    readonly timeouts?: DataAwsNetworkAclsTimeouts;
}
export interface DataAwsNetworkAclsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#name DataAwsNetworkAcls#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#values DataAwsNetworkAcls#values}
    */
    readonly values: string[];
}
export declare function dataAwsNetworkAclsFilterToTerraform(struct?: DataAwsNetworkAclsFilter | cdktf.IResolvable): any;
export declare function dataAwsNetworkAclsFilterToHclTerraform(struct?: DataAwsNetworkAclsFilter | cdktf.IResolvable): any;
export declare class DataAwsNetworkAclsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkAclsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkAclsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsNetworkAclsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkAclsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkAclsFilterOutputReference;
}
export interface DataAwsNetworkAclsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#read DataAwsNetworkAcls#read}
    */
    readonly read?: string;
}
export declare function dataAwsNetworkAclsTimeoutsToTerraform(struct?: DataAwsNetworkAclsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsNetworkAclsTimeoutsToHclTerraform(struct?: DataAwsNetworkAclsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsNetworkAclsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsNetworkAclsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkAclsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls aws_network_acls}
*/
export declare class DataAwsNetworkAcls extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_network_acls";
    /**
    * Generates CDKTF code for importing a DataAwsNetworkAcls resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNetworkAcls to import
    * @param importFromId The id of the existing DataAwsNetworkAcls that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNetworkAcls to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/network_acls aws_network_acls} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkAclsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNetworkAclsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsNetworkAclsFilterList;
    putFilter(value: DataAwsNetworkAclsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsNetworkAclsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsNetworkAclsTimeoutsOutputReference;
    putTimeouts(value: DataAwsNetworkAclsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsNetworkAclsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
