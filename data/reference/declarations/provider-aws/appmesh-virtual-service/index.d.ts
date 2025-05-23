/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#id AppmeshVirtualService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#mesh_name AppmeshVirtualService#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#mesh_owner AppmeshVirtualService#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#name AppmeshVirtualService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#tags AppmeshVirtualService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#tags_all AppmeshVirtualService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#spec AppmeshVirtualService#spec}
    */
    readonly spec: AppmeshVirtualServiceSpec;
}
export interface AppmeshVirtualServiceSpecProviderVirtualNode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#virtual_node_name AppmeshVirtualService#virtual_node_name}
    */
    readonly virtualNodeName: string;
}
export declare function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference | AppmeshVirtualServiceSpecProviderVirtualNode): any;
export declare function appmeshVirtualServiceSpecProviderVirtualNodeToHclTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference | AppmeshVirtualServiceSpecProviderVirtualNode): any;
export declare class AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualServiceSpecProviderVirtualNode | undefined;
    set internalValue(value: AppmeshVirtualServiceSpecProviderVirtualNode | undefined);
    private _virtualNodeName?;
    get virtualNodeName(): string;
    set virtualNodeName(value: string);
    get virtualNodeNameInput(): string | undefined;
}
export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#virtual_router_name AppmeshVirtualService#virtual_router_name}
    */
    readonly virtualRouterName: string;
}
export declare function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference | AppmeshVirtualServiceSpecProviderVirtualRouter): any;
export declare function appmeshVirtualServiceSpecProviderVirtualRouterToHclTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference | AppmeshVirtualServiceSpecProviderVirtualRouter): any;
export declare class AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualServiceSpecProviderVirtualRouter | undefined;
    set internalValue(value: AppmeshVirtualServiceSpecProviderVirtualRouter | undefined);
    private _virtualRouterName?;
    get virtualRouterName(): string;
    set virtualRouterName(value: string);
    get virtualRouterNameInput(): string | undefined;
}
export interface AppmeshVirtualServiceSpecProvider {
    /**
    * virtual_node block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#virtual_node AppmeshVirtualService#virtual_node}
    */
    readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode;
    /**
    * virtual_router block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#virtual_router AppmeshVirtualService#virtual_router}
    */
    readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter;
}
export declare function appmeshVirtualServiceSpecProviderToTerraform(struct?: AppmeshVirtualServiceSpecProviderOutputReference | AppmeshVirtualServiceSpecProvider): any;
export declare function appmeshVirtualServiceSpecProviderToHclTerraform(struct?: AppmeshVirtualServiceSpecProviderOutputReference | AppmeshVirtualServiceSpecProvider): any;
export declare class AppmeshVirtualServiceSpecProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualServiceSpecProvider | undefined;
    set internalValue(value: AppmeshVirtualServiceSpecProvider | undefined);
    private _virtualNode;
    get virtualNode(): AppmeshVirtualServiceSpecProviderVirtualNodeOutputReference;
    putVirtualNode(value: AppmeshVirtualServiceSpecProviderVirtualNode): void;
    resetVirtualNode(): void;
    get virtualNodeInput(): AppmeshVirtualServiceSpecProviderVirtualNode | undefined;
    private _virtualRouter;
    get virtualRouter(): AppmeshVirtualServiceSpecProviderVirtualRouterOutputReference;
    putVirtualRouter(value: AppmeshVirtualServiceSpecProviderVirtualRouter): void;
    resetVirtualRouter(): void;
    get virtualRouterInput(): AppmeshVirtualServiceSpecProviderVirtualRouter | undefined;
}
export interface AppmeshVirtualServiceSpec {
    /**
    * provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#provider AppmeshVirtualService#provider}
    */
    readonly provider?: AppmeshVirtualServiceSpecProvider;
}
export declare function appmeshVirtualServiceSpecToTerraform(struct?: AppmeshVirtualServiceSpecOutputReference | AppmeshVirtualServiceSpec): any;
export declare function appmeshVirtualServiceSpecToHclTerraform(struct?: AppmeshVirtualServiceSpecOutputReference | AppmeshVirtualServiceSpec): any;
export declare class AppmeshVirtualServiceSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualServiceSpec | undefined;
    set internalValue(value: AppmeshVirtualServiceSpec | undefined);
    private _provider;
    get provider(): AppmeshVirtualServiceSpecProviderOutputReference;
    putProvider(value: AppmeshVirtualServiceSpecProvider): void;
    resetProvider(): void;
    get providerInput(): AppmeshVirtualServiceSpecProvider | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service aws_appmesh_virtual_service}
*/
export declare class AppmeshVirtualService extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_virtual_service";
    /**
    * Generates CDKTF code for importing a AppmeshVirtualService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshVirtualService to import
    * @param importFromId The id of the existing AppmeshVirtualService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshVirtualService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_service aws_appmesh_virtual_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualServiceConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig);
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
    private _spec;
    get spec(): AppmeshVirtualServiceSpecOutputReference;
    putSpec(value: AppmeshVirtualServiceSpec): void;
    get specInput(): AppmeshVirtualServiceSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
