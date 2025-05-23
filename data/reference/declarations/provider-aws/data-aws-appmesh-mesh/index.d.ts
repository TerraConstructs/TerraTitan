/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_mesh#id DataAwsAppmeshMesh#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_mesh#mesh_owner DataAwsAppmeshMesh#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_mesh#name DataAwsAppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_mesh#tags DataAwsAppmeshMesh#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppmeshMeshSpecEgressFilter {
}
export declare function dataAwsAppmeshMeshSpecEgressFilterToTerraform(struct?: DataAwsAppmeshMeshSpecEgressFilter): any;
export declare function dataAwsAppmeshMeshSpecEgressFilterToHclTerraform(struct?: DataAwsAppmeshMeshSpecEgressFilter): any;
export declare class DataAwsAppmeshMeshSpecEgressFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshMeshSpecEgressFilter | undefined;
    set internalValue(value: DataAwsAppmeshMeshSpecEgressFilter | undefined);
    get type(): string;
}
export declare class DataAwsAppmeshMeshSpecEgressFilterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshMeshSpecEgressFilterOutputReference;
}
export interface DataAwsAppmeshMeshSpecServiceDiscovery {
}
export declare function dataAwsAppmeshMeshSpecServiceDiscoveryToTerraform(struct?: DataAwsAppmeshMeshSpecServiceDiscovery): any;
export declare function dataAwsAppmeshMeshSpecServiceDiscoveryToHclTerraform(struct?: DataAwsAppmeshMeshSpecServiceDiscovery): any;
export declare class DataAwsAppmeshMeshSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshMeshSpecServiceDiscovery | undefined;
    set internalValue(value: DataAwsAppmeshMeshSpecServiceDiscovery | undefined);
    get ipPreference(): string;
}
export declare class DataAwsAppmeshMeshSpecServiceDiscoveryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshMeshSpecServiceDiscoveryOutputReference;
}
export interface DataAwsAppmeshMeshSpec {
}
export declare function dataAwsAppmeshMeshSpecToTerraform(struct?: DataAwsAppmeshMeshSpec): any;
export declare function dataAwsAppmeshMeshSpecToHclTerraform(struct?: DataAwsAppmeshMeshSpec): any;
export declare class DataAwsAppmeshMeshSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshMeshSpec | undefined;
    set internalValue(value: DataAwsAppmeshMeshSpec | undefined);
    private _egressFilter;
    get egressFilter(): DataAwsAppmeshMeshSpecEgressFilterList;
    private _serviceDiscovery;
    get serviceDiscovery(): DataAwsAppmeshMeshSpecServiceDiscoveryList;
}
export declare class DataAwsAppmeshMeshSpecList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshMeshSpecOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_mesh aws_appmesh_mesh}
*/
export declare class DataAwsAppmeshMesh extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appmesh_mesh";
    /**
    * Generates CDKTF code for importing a DataAwsAppmeshMesh resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppmeshMesh to import
    * @param importFromId The id of the existing DataAwsAppmeshMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_mesh#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppmeshMesh to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_mesh aws_appmesh_mesh} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshMeshConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshMeshConfig);
    get arn(): string;
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
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
    get spec(): DataAwsAppmeshMeshSpecList;
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
