/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#id AppmeshVirtualRouter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#mesh_name AppmeshVirtualRouter#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#mesh_owner AppmeshVirtualRouter#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#name AppmeshVirtualRouter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#tags AppmeshVirtualRouter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#tags_all AppmeshVirtualRouter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#spec AppmeshVirtualRouter#spec}
    */
    readonly spec: AppmeshVirtualRouterSpec;
}
export interface AppmeshVirtualRouterSpecListenerPortMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#port AppmeshVirtualRouter#port}
    */
    readonly port: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#protocol AppmeshVirtualRouter#protocol}
    */
    readonly protocol: string;
}
export declare function appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualRouterSpecListenerPortMappingOutputReference | AppmeshVirtualRouterSpecListenerPortMapping): any;
export declare function appmeshVirtualRouterSpecListenerPortMappingToHclTerraform(struct?: AppmeshVirtualRouterSpecListenerPortMappingOutputReference | AppmeshVirtualRouterSpecListenerPortMapping): any;
export declare class AppmeshVirtualRouterSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualRouterSpecListenerPortMapping | undefined;
    set internalValue(value: AppmeshVirtualRouterSpecListenerPortMapping | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
}
export interface AppmeshVirtualRouterSpecListener {
    /**
    * port_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#port_mapping AppmeshVirtualRouter#port_mapping}
    */
    readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping;
}
export declare function appmeshVirtualRouterSpecListenerToTerraform(struct?: AppmeshVirtualRouterSpecListener | cdktf.IResolvable): any;
export declare function appmeshVirtualRouterSpecListenerToHclTerraform(struct?: AppmeshVirtualRouterSpecListener | cdktf.IResolvable): any;
export declare class AppmeshVirtualRouterSpecListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshVirtualRouterSpecListener | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshVirtualRouterSpecListener | cdktf.IResolvable | undefined);
    private _portMapping;
    get portMapping(): AppmeshVirtualRouterSpecListenerPortMappingOutputReference;
    putPortMapping(value: AppmeshVirtualRouterSpecListenerPortMapping): void;
    get portMappingInput(): AppmeshVirtualRouterSpecListenerPortMapping | undefined;
}
export declare class AppmeshVirtualRouterSpecListenerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshVirtualRouterSpecListener[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshVirtualRouterSpecListenerOutputReference;
}
export interface AppmeshVirtualRouterSpec {
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#listener AppmeshVirtualRouter#listener}
    */
    readonly listener?: AppmeshVirtualRouterSpecListener[] | cdktf.IResolvable;
}
export declare function appmeshVirtualRouterSpecToTerraform(struct?: AppmeshVirtualRouterSpecOutputReference | AppmeshVirtualRouterSpec): any;
export declare function appmeshVirtualRouterSpecToHclTerraform(struct?: AppmeshVirtualRouterSpecOutputReference | AppmeshVirtualRouterSpec): any;
export declare class AppmeshVirtualRouterSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshVirtualRouterSpec | undefined;
    set internalValue(value: AppmeshVirtualRouterSpec | undefined);
    private _listener;
    get listener(): AppmeshVirtualRouterSpecListenerList;
    putListener(value: AppmeshVirtualRouterSpecListener[] | cdktf.IResolvable): void;
    resetListener(): void;
    get listenerInput(): cdktf.IResolvable | AppmeshVirtualRouterSpecListener[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router aws_appmesh_virtual_router}
*/
export declare class AppmeshVirtualRouter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_virtual_router";
    /**
    * Generates CDKTF code for importing a AppmeshVirtualRouter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshVirtualRouter to import
    * @param importFromId The id of the existing AppmeshVirtualRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshVirtualRouter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_virtual_router aws_appmesh_virtual_router} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualRouterConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshVirtualRouterConfig);
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
    get spec(): AppmeshVirtualRouterSpecOutputReference;
    putSpec(value: AppmeshVirtualRouterSpec): void;
    get specInput(): AppmeshVirtualRouterSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
