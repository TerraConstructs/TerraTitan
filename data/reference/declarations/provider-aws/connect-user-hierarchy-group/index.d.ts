/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectUserHierarchyGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group#id ConnectUserHierarchyGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group#instance_id ConnectUserHierarchyGroup#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group#name ConnectUserHierarchyGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group#parent_group_id ConnectUserHierarchyGroup#parent_group_id}
    */
    readonly parentGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group#tags ConnectUserHierarchyGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group#tags_all ConnectUserHierarchyGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface ConnectUserHierarchyGroupHierarchyPathLevelFive {
}
export declare function connectUserHierarchyGroupHierarchyPathLevelFiveToTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelFive): any;
export declare function connectUserHierarchyGroupHierarchyPathLevelFiveToHclTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelFive): any;
export declare class ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectUserHierarchyGroupHierarchyPathLevelFive | undefined;
    set internalValue(value: ConnectUserHierarchyGroupHierarchyPathLevelFive | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class ConnectUserHierarchyGroupHierarchyPathLevelFiveList extends cdktf.ComplexList {
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
    get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelFiveOutputReference;
}
export interface ConnectUserHierarchyGroupHierarchyPathLevelFour {
}
export declare function connectUserHierarchyGroupHierarchyPathLevelFourToTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelFour): any;
export declare function connectUserHierarchyGroupHierarchyPathLevelFourToHclTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelFour): any;
export declare class ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectUserHierarchyGroupHierarchyPathLevelFour | undefined;
    set internalValue(value: ConnectUserHierarchyGroupHierarchyPathLevelFour | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class ConnectUserHierarchyGroupHierarchyPathLevelFourList extends cdktf.ComplexList {
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
    get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelFourOutputReference;
}
export interface ConnectUserHierarchyGroupHierarchyPathLevelOne {
}
export declare function connectUserHierarchyGroupHierarchyPathLevelOneToTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelOne): any;
export declare function connectUserHierarchyGroupHierarchyPathLevelOneToHclTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelOne): any;
export declare class ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectUserHierarchyGroupHierarchyPathLevelOne | undefined;
    set internalValue(value: ConnectUserHierarchyGroupHierarchyPathLevelOne | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class ConnectUserHierarchyGroupHierarchyPathLevelOneList extends cdktf.ComplexList {
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
    get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelOneOutputReference;
}
export interface ConnectUserHierarchyGroupHierarchyPathLevelThree {
}
export declare function connectUserHierarchyGroupHierarchyPathLevelThreeToTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelThree): any;
export declare function connectUserHierarchyGroupHierarchyPathLevelThreeToHclTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelThree): any;
export declare class ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectUserHierarchyGroupHierarchyPathLevelThree | undefined;
    set internalValue(value: ConnectUserHierarchyGroupHierarchyPathLevelThree | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class ConnectUserHierarchyGroupHierarchyPathLevelThreeList extends cdktf.ComplexList {
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
    get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelThreeOutputReference;
}
export interface ConnectUserHierarchyGroupHierarchyPathLevelTwo {
}
export declare function connectUserHierarchyGroupHierarchyPathLevelTwoToTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelTwo): any;
export declare function connectUserHierarchyGroupHierarchyPathLevelTwoToHclTerraform(struct?: ConnectUserHierarchyGroupHierarchyPathLevelTwo): any;
export declare class ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectUserHierarchyGroupHierarchyPathLevelTwo | undefined;
    set internalValue(value: ConnectUserHierarchyGroupHierarchyPathLevelTwo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class ConnectUserHierarchyGroupHierarchyPathLevelTwoList extends cdktf.ComplexList {
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
    get(index: number): ConnectUserHierarchyGroupHierarchyPathLevelTwoOutputReference;
}
export interface ConnectUserHierarchyGroupHierarchyPath {
}
export declare function connectUserHierarchyGroupHierarchyPathToTerraform(struct?: ConnectUserHierarchyGroupHierarchyPath): any;
export declare function connectUserHierarchyGroupHierarchyPathToHclTerraform(struct?: ConnectUserHierarchyGroupHierarchyPath): any;
export declare class ConnectUserHierarchyGroupHierarchyPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectUserHierarchyGroupHierarchyPath | undefined;
    set internalValue(value: ConnectUserHierarchyGroupHierarchyPath | undefined);
    private _levelFive;
    get levelFive(): ConnectUserHierarchyGroupHierarchyPathLevelFiveList;
    private _levelFour;
    get levelFour(): ConnectUserHierarchyGroupHierarchyPathLevelFourList;
    private _levelOne;
    get levelOne(): ConnectUserHierarchyGroupHierarchyPathLevelOneList;
    private _levelThree;
    get levelThree(): ConnectUserHierarchyGroupHierarchyPathLevelThreeList;
    private _levelTwo;
    get levelTwo(): ConnectUserHierarchyGroupHierarchyPathLevelTwoList;
}
export declare class ConnectUserHierarchyGroupHierarchyPathList extends cdktf.ComplexList {
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
    get(index: number): ConnectUserHierarchyGroupHierarchyPathOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group aws_connect_user_hierarchy_group}
*/
export declare class ConnectUserHierarchyGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_user_hierarchy_group";
    /**
    * Generates CDKTF code for importing a ConnectUserHierarchyGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectUserHierarchyGroup to import
    * @param importFromId The id of the existing ConnectUserHierarchyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectUserHierarchyGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_group aws_connect_user_hierarchy_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectUserHierarchyGroupConfig
    */
    constructor(scope: Construct, id: string, config: ConnectUserHierarchyGroupConfig);
    get arn(): string;
    get hierarchyGroupId(): string;
    private _hierarchyPath;
    get hierarchyPath(): ConnectUserHierarchyGroupHierarchyPathList;
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
    get nameInput(): string | undefined;
    private _parentGroupId?;
    get parentGroupId(): string;
    set parentGroupId(value: string);
    resetParentGroupId(): void;
    get parentGroupIdInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
