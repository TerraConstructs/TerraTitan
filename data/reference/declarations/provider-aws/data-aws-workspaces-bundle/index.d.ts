/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWorkspacesBundleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_bundle#bundle_id DataAwsWorkspacesBundle#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_bundle#id DataAwsWorkspacesBundle#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_bundle#name DataAwsWorkspacesBundle#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_bundle#owner DataAwsWorkspacesBundle#owner}
    */
    readonly owner?: string;
}
export interface DataAwsWorkspacesBundleComputeType {
}
export declare function dataAwsWorkspacesBundleComputeTypeToTerraform(struct?: DataAwsWorkspacesBundleComputeType): any;
export declare function dataAwsWorkspacesBundleComputeTypeToHclTerraform(struct?: DataAwsWorkspacesBundleComputeType): any;
export declare class DataAwsWorkspacesBundleComputeTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesBundleComputeType | undefined;
    set internalValue(value: DataAwsWorkspacesBundleComputeType | undefined);
    get name(): string;
}
export declare class DataAwsWorkspacesBundleComputeTypeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesBundleComputeTypeOutputReference;
}
export interface DataAwsWorkspacesBundleRootStorage {
}
export declare function dataAwsWorkspacesBundleRootStorageToTerraform(struct?: DataAwsWorkspacesBundleRootStorage): any;
export declare function dataAwsWorkspacesBundleRootStorageToHclTerraform(struct?: DataAwsWorkspacesBundleRootStorage): any;
export declare class DataAwsWorkspacesBundleRootStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesBundleRootStorage | undefined;
    set internalValue(value: DataAwsWorkspacesBundleRootStorage | undefined);
    get capacity(): string;
}
export declare class DataAwsWorkspacesBundleRootStorageList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesBundleRootStorageOutputReference;
}
export interface DataAwsWorkspacesBundleUserStorage {
}
export declare function dataAwsWorkspacesBundleUserStorageToTerraform(struct?: DataAwsWorkspacesBundleUserStorage): any;
export declare function dataAwsWorkspacesBundleUserStorageToHclTerraform(struct?: DataAwsWorkspacesBundleUserStorage): any;
export declare class DataAwsWorkspacesBundleUserStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWorkspacesBundleUserStorage | undefined;
    set internalValue(value: DataAwsWorkspacesBundleUserStorage | undefined);
    get capacity(): string;
}
export declare class DataAwsWorkspacesBundleUserStorageList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWorkspacesBundleUserStorageOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_bundle aws_workspaces_bundle}
*/
export declare class DataAwsWorkspacesBundle extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_workspaces_bundle";
    /**
    * Generates CDKTF code for importing a DataAwsWorkspacesBundle resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsWorkspacesBundle to import
    * @param importFromId The id of the existing DataAwsWorkspacesBundle that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_bundle#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsWorkspacesBundle to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/workspaces_bundle aws_workspaces_bundle} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesBundleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsWorkspacesBundleConfig);
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    resetBundleId(): void;
    get bundleIdInput(): string | undefined;
    private _computeType;
    get computeType(): DataAwsWorkspacesBundleComputeTypeList;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    resetOwner(): void;
    get ownerInput(): string | undefined;
    private _rootStorage;
    get rootStorage(): DataAwsWorkspacesBundleRootStorageList;
    private _userStorage;
    get userStorage(): DataAwsWorkspacesBundleUserStorageList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
