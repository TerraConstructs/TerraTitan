/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/globalaccelerator_accelerator#arn DataAwsGlobalacceleratorAccelerator#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/globalaccelerator_accelerator#id DataAwsGlobalacceleratorAccelerator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/globalaccelerator_accelerator#name DataAwsGlobalacceleratorAccelerator#name}
    */
    readonly name?: string;
}
export interface DataAwsGlobalacceleratorAcceleratorAttributes {
}
export declare function dataAwsGlobalacceleratorAcceleratorAttributesToTerraform(struct?: DataAwsGlobalacceleratorAcceleratorAttributes): any;
export declare function dataAwsGlobalacceleratorAcceleratorAttributesToHclTerraform(struct?: DataAwsGlobalacceleratorAcceleratorAttributes): any;
export declare class DataAwsGlobalacceleratorAcceleratorAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlobalacceleratorAcceleratorAttributes | undefined;
    set internalValue(value: DataAwsGlobalacceleratorAcceleratorAttributes | undefined);
    get flowLogsEnabled(): cdktf.IResolvable;
    get flowLogsS3Bucket(): string;
    get flowLogsS3Prefix(): string;
}
export declare class DataAwsGlobalacceleratorAcceleratorAttributesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsGlobalacceleratorAcceleratorAttributesOutputReference;
}
export interface DataAwsGlobalacceleratorAcceleratorIpSets {
}
export declare function dataAwsGlobalacceleratorAcceleratorIpSetsToTerraform(struct?: DataAwsGlobalacceleratorAcceleratorIpSets): any;
export declare function dataAwsGlobalacceleratorAcceleratorIpSetsToHclTerraform(struct?: DataAwsGlobalacceleratorAcceleratorIpSets): any;
export declare class DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlobalacceleratorAcceleratorIpSets | undefined;
    set internalValue(value: DataAwsGlobalacceleratorAcceleratorIpSets | undefined);
    get ipAddresses(): string[];
    get ipFamily(): string;
}
export declare class DataAwsGlobalacceleratorAcceleratorIpSetsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsGlobalacceleratorAcceleratorIpSetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/globalaccelerator_accelerator aws_globalaccelerator_accelerator}
*/
export declare class DataAwsGlobalacceleratorAccelerator extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_globalaccelerator_accelerator";
    /**
    * Generates CDKTF code for importing a DataAwsGlobalacceleratorAccelerator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsGlobalacceleratorAccelerator to import
    * @param importFromId The id of the existing DataAwsGlobalacceleratorAccelerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/globalaccelerator_accelerator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsGlobalacceleratorAccelerator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/globalaccelerator_accelerator aws_globalaccelerator_accelerator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlobalacceleratorAcceleratorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsGlobalacceleratorAcceleratorConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    private _attributes;
    get attributes(): DataAwsGlobalacceleratorAcceleratorAttributesList;
    get dnsName(): string;
    get dualStackDnsName(): string;
    get enabled(): cdktf.IResolvable;
    get hostedZoneId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipAddressType(): string;
    private _ipSets;
    get ipSets(): DataAwsGlobalacceleratorAcceleratorIpSetsList;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _tags;
    get tags(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
