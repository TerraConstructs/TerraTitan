/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectUserHierarchyStructureConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_structure#id DataAwsConnectUserHierarchyStructure#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_structure#instance_id DataAwsConnectUserHierarchyStructure#instance_id}
    */
    readonly instanceId: string;
}
export interface DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive {
}
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveToTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive): any;
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveToHclTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive): any;
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFive | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference;
}
export interface DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour {
}
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourToTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour): any;
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourToHclTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour): any;
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFour | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference;
}
export interface DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne {
}
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneToTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne): any;
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneToHclTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne): any;
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOne | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference;
}
export interface DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree {
}
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeToTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree): any;
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeToHclTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree): any;
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThree | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference;
}
export interface DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo {
}
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoToTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo): any;
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoToHclTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo): any;
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference;
}
export interface DataAwsConnectUserHierarchyStructureHierarchyStructure {
}
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureToTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructure): any;
export declare function dataAwsConnectUserHierarchyStructureHierarchyStructureToHclTerraform(struct?: DataAwsConnectUserHierarchyStructureHierarchyStructure): any;
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyStructureHierarchyStructure | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyStructureHierarchyStructure | undefined);
    private _levelFive;
    get levelFive(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFiveList;
    private _levelFour;
    get levelFour(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelFourList;
    private _levelOne;
    get levelOne(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelOneList;
    private _levelThree;
    get levelThree(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelThreeList;
    private _levelTwo;
    get levelTwo(): DataAwsConnectUserHierarchyStructureHierarchyStructureLevelTwoList;
}
export declare class DataAwsConnectUserHierarchyStructureHierarchyStructureList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyStructureHierarchyStructureOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}
*/
export declare class DataAwsConnectUserHierarchyStructure extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_user_hierarchy_structure";
    /**
    * Generates CDKTF code for importing a DataAwsConnectUserHierarchyStructure resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectUserHierarchyStructure to import
    * @param importFromId The id of the existing DataAwsConnectUserHierarchyStructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectUserHierarchyStructure to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectUserHierarchyStructureConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectUserHierarchyStructureConfig);
    private _hierarchyStructure;
    get hierarchyStructure(): DataAwsConnectUserHierarchyStructureHierarchyStructureList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
