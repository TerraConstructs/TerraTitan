/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectUserHierarchyGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group#hierarchy_group_id DataAwsConnectUserHierarchyGroup#hierarchy_group_id}
    */
    readonly hierarchyGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group#id DataAwsConnectUserHierarchyGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group#instance_id DataAwsConnectUserHierarchyGroup#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group#name DataAwsConnectUserHierarchyGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group#tags DataAwsConnectUserHierarchyGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive {
}
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveToTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive): any;
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveToHclTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive): any;
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFive | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference;
}
export interface DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour {
}
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelFourToTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour): any;
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelFourToHclTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour): any;
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelFour | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference;
}
export interface DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne {
}
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelOneToTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne): any;
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelOneToHclTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne): any;
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelOne | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference;
}
export interface DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree {
}
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeToTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree): any;
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeToHclTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree): any;
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelThree | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference;
}
export interface DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo {
}
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoToTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo): any;
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoToHclTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo): any;
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference;
}
export interface DataAwsConnectUserHierarchyGroupHierarchyPath {
}
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathToTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPath): any;
export declare function dataAwsConnectUserHierarchyGroupHierarchyPathToHclTerraform(struct?: DataAwsConnectUserHierarchyGroupHierarchyPath): any;
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectUserHierarchyGroupHierarchyPath | undefined;
    set internalValue(value: DataAwsConnectUserHierarchyGroupHierarchyPath | undefined);
    private _levelFive;
    get levelFive(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFiveList;
    private _levelFour;
    get levelFour(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelFourList;
    private _levelOne;
    get levelOne(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelOneList;
    private _levelThree;
    get levelThree(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelThreeList;
    private _levelTwo;
    get levelTwo(): DataAwsConnectUserHierarchyGroupHierarchyPathLevelTwoList;
}
export declare class DataAwsConnectUserHierarchyGroupHierarchyPathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectUserHierarchyGroupHierarchyPathOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group aws_connect_user_hierarchy_group}
*/
export declare class DataAwsConnectUserHierarchyGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_user_hierarchy_group";
    /**
    * Generates CDKTF code for importing a DataAwsConnectUserHierarchyGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectUserHierarchyGroup to import
    * @param importFromId The id of the existing DataAwsConnectUserHierarchyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectUserHierarchyGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_user_hierarchy_group aws_connect_user_hierarchy_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectUserHierarchyGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectUserHierarchyGroupConfig);
    get arn(): string;
    private _hierarchyGroupId?;
    get hierarchyGroupId(): string;
    set hierarchyGroupId(value: string);
    resetHierarchyGroupId(): void;
    get hierarchyGroupIdInput(): string | undefined;
    private _hierarchyPath;
    get hierarchyPath(): DataAwsConnectUserHierarchyGroupHierarchyPathList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    get levelId(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
