/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#id DataAwsEip#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#public_ip DataAwsEip#public_ip}
    */
    readonly publicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#tags DataAwsEip#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#filter DataAwsEip#filter}
    */
    readonly filter?: DataAwsEipFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#timeouts DataAwsEip#timeouts}
    */
    readonly timeouts?: DataAwsEipTimeouts;
}
export interface DataAwsEipFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#name DataAwsEip#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#values DataAwsEip#values}
    */
    readonly values: string[];
}
export declare function dataAwsEipFilterToTerraform(struct?: DataAwsEipFilter | cdktf.IResolvable): any;
export declare function dataAwsEipFilterToHclTerraform(struct?: DataAwsEipFilter | cdktf.IResolvable): any;
export declare class DataAwsEipFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEipFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEipFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEipFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEipFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEipFilterOutputReference;
}
export interface DataAwsEipTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#read DataAwsEip#read}
    */
    readonly read?: string;
}
export declare function dataAwsEipTimeoutsToTerraform(struct?: DataAwsEipTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEipTimeoutsToHclTerraform(struct?: DataAwsEipTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEipTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEipTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEipTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip aws_eip}
*/
export declare class DataAwsEip extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_eip";
    /**
    * Generates CDKTF code for importing a DataAwsEip resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEip to import
    * @param importFromId The id of the existing DataAwsEip that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEip to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/eip aws_eip} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEipConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEipConfig);
    get arn(): string;
    get associationId(): string;
    get carrierIp(): string;
    get customerOwnedIp(): string;
    get customerOwnedIpv4Pool(): string;
    get domain(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceId(): string;
    get ipamPoolId(): string;
    get networkInterfaceId(): string;
    get networkInterfaceOwnerId(): string;
    get privateDns(): string;
    get privateIp(): string;
    get ptrRecord(): string;
    get publicDns(): string;
    private _publicIp?;
    get publicIp(): string;
    set publicIp(value: string);
    resetPublicIp(): void;
    get publicIpInput(): string | undefined;
    get publicIpv4Pool(): string;
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
    get filter(): DataAwsEipFilterList;
    putFilter(value: DataAwsEipFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEipFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEipTimeoutsOutputReference;
    putTimeouts(value: DataAwsEipTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEipTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
