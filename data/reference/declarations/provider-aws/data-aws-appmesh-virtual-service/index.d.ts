/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service#id DataAwsAppmeshVirtualService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service#mesh_name DataAwsAppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service#name DataAwsAppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service#tags DataAwsAppmeshVirtualService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppmeshVirtualServiceSpecProviderVirtualNode {
}
export declare function dataAwsAppmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct?: DataAwsAppmeshVirtualServiceSpecProviderVirtualNode): any;
export declare function dataAwsAppmeshVirtualServiceSpecProviderVirtualNodeToHclTerraform(struct?: DataAwsAppmeshVirtualServiceSpecProviderVirtualNode): any;
export declare class DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualServiceSpecProviderVirtualNode | undefined;
    set internalValue(value: DataAwsAppmeshVirtualServiceSpecProviderVirtualNode | undefined);
    get virtualNodeName(): string;
}
export declare class DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeOutputReference;
}
export interface DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter {
}
export declare function dataAwsAppmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct?: DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter): any;
export declare function dataAwsAppmeshVirtualServiceSpecProviderVirtualRouterToHclTerraform(struct?: DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter): any;
export declare class DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter | undefined;
    set internalValue(value: DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter | undefined);
    get virtualRouterName(): string;
}
export declare class DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterOutputReference;
}
export interface DataAwsAppmeshVirtualServiceSpecProvider {
}
export declare function dataAwsAppmeshVirtualServiceSpecProviderToTerraform(struct?: DataAwsAppmeshVirtualServiceSpecProvider): any;
export declare function dataAwsAppmeshVirtualServiceSpecProviderToHclTerraform(struct?: DataAwsAppmeshVirtualServiceSpecProvider): any;
export declare class DataAwsAppmeshVirtualServiceSpecProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualServiceSpecProvider | undefined;
    set internalValue(value: DataAwsAppmeshVirtualServiceSpecProvider | undefined);
    private _virtualNode;
    get virtualNode(): DataAwsAppmeshVirtualServiceSpecProviderVirtualNodeList;
    private _virtualRouter;
    get virtualRouter(): DataAwsAppmeshVirtualServiceSpecProviderVirtualRouterList;
}
export declare class DataAwsAppmeshVirtualServiceSpecProviderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualServiceSpecProviderOutputReference;
}
export interface DataAwsAppmeshVirtualServiceSpec {
}
export declare function dataAwsAppmeshVirtualServiceSpecToTerraform(struct?: DataAwsAppmeshVirtualServiceSpec): any;
export declare function dataAwsAppmeshVirtualServiceSpecToHclTerraform(struct?: DataAwsAppmeshVirtualServiceSpec): any;
export declare class DataAwsAppmeshVirtualServiceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualServiceSpec | undefined;
    set internalValue(value: DataAwsAppmeshVirtualServiceSpec | undefined);
    private _provider;
    get provider(): DataAwsAppmeshVirtualServiceSpecProviderList;
}
export declare class DataAwsAppmeshVirtualServiceSpecList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualServiceSpecOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service aws_appmesh_virtual_service}
*/
export declare class DataAwsAppmeshVirtualService extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appmesh_virtual_service";
    /**
    * Generates CDKTF code for importing a DataAwsAppmeshVirtualService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppmeshVirtualService to import
    * @param importFromId The id of the existing DataAwsAppmeshVirtualService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppmeshVirtualService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_service aws_appmesh_virtual_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualServiceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualServiceConfig);
    get arn(): string;
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _meshName?;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string | undefined;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get resourceOwner(): string;
    private _spec;
    get spec(): DataAwsAppmeshVirtualServiceSpecList;
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
