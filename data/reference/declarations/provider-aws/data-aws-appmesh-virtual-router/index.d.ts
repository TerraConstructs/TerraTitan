/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router#id DataAwsAppmeshVirtualRouter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router#mesh_name DataAwsAppmeshVirtualRouter#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router#mesh_owner DataAwsAppmeshVirtualRouter#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router#name DataAwsAppmeshVirtualRouter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router#tags DataAwsAppmeshVirtualRouter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppmeshVirtualRouterSpecListenerPortMapping {
}
export declare function dataAwsAppmeshVirtualRouterSpecListenerPortMappingToTerraform(struct?: DataAwsAppmeshVirtualRouterSpecListenerPortMapping): any;
export declare function dataAwsAppmeshVirtualRouterSpecListenerPortMappingToHclTerraform(struct?: DataAwsAppmeshVirtualRouterSpecListenerPortMapping): any;
export declare class DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualRouterSpecListenerPortMapping | undefined;
    set internalValue(value: DataAwsAppmeshVirtualRouterSpecListenerPortMapping | undefined);
    get port(): number;
    get protocol(): string;
}
export declare class DataAwsAppmeshVirtualRouterSpecListenerPortMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualRouterSpecListenerPortMappingOutputReference;
}
export interface DataAwsAppmeshVirtualRouterSpecListener {
}
export declare function dataAwsAppmeshVirtualRouterSpecListenerToTerraform(struct?: DataAwsAppmeshVirtualRouterSpecListener): any;
export declare function dataAwsAppmeshVirtualRouterSpecListenerToHclTerraform(struct?: DataAwsAppmeshVirtualRouterSpecListener): any;
export declare class DataAwsAppmeshVirtualRouterSpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualRouterSpecListener | undefined;
    set internalValue(value: DataAwsAppmeshVirtualRouterSpecListener | undefined);
    private _portMapping;
    get portMapping(): DataAwsAppmeshVirtualRouterSpecListenerPortMappingList;
}
export declare class DataAwsAppmeshVirtualRouterSpecListenerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualRouterSpecListenerOutputReference;
}
export interface DataAwsAppmeshVirtualRouterSpec {
}
export declare function dataAwsAppmeshVirtualRouterSpecToTerraform(struct?: DataAwsAppmeshVirtualRouterSpec): any;
export declare function dataAwsAppmeshVirtualRouterSpecToHclTerraform(struct?: DataAwsAppmeshVirtualRouterSpec): any;
export declare class DataAwsAppmeshVirtualRouterSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshVirtualRouterSpec | undefined;
    set internalValue(value: DataAwsAppmeshVirtualRouterSpec | undefined);
    private _listener;
    get listener(): DataAwsAppmeshVirtualRouterSpecListenerList;
}
export declare class DataAwsAppmeshVirtualRouterSpecList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshVirtualRouterSpecOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router aws_appmesh_virtual_router}
*/
export declare class DataAwsAppmeshVirtualRouter extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appmesh_virtual_router";
    /**
    * Generates CDKTF code for importing a DataAwsAppmeshVirtualRouter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppmeshVirtualRouter to import
    * @param importFromId The id of the existing DataAwsAppmeshVirtualRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppmeshVirtualRouter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_virtual_router aws_appmesh_virtual_router} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshVirtualRouterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualRouterConfig);
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
    get spec(): DataAwsAppmeshVirtualRouterSpecList;
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
