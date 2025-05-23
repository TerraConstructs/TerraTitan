/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshMeshConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#id AppmeshMesh#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#name AppmeshMesh#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#tags AppmeshMesh#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#tags_all AppmeshMesh#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#spec AppmeshMesh#spec}
    */
    readonly spec?: AppmeshMeshSpec;
}
export interface AppmeshMeshSpecEgressFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#type AppmeshMesh#type}
    */
    readonly type?: string;
}
export declare function appmeshMeshSpecEgressFilterToTerraform(struct?: AppmeshMeshSpecEgressFilterOutputReference | AppmeshMeshSpecEgressFilter): any;
export declare function appmeshMeshSpecEgressFilterToHclTerraform(struct?: AppmeshMeshSpecEgressFilterOutputReference | AppmeshMeshSpecEgressFilter): any;
export declare class AppmeshMeshSpecEgressFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshMeshSpecEgressFilter | undefined;
    set internalValue(value: AppmeshMeshSpecEgressFilter | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface AppmeshMeshSpecServiceDiscovery {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#ip_preference AppmeshMesh#ip_preference}
    */
    readonly ipPreference?: string;
}
export declare function appmeshMeshSpecServiceDiscoveryToTerraform(struct?: AppmeshMeshSpecServiceDiscoveryOutputReference | AppmeshMeshSpecServiceDiscovery): any;
export declare function appmeshMeshSpecServiceDiscoveryToHclTerraform(struct?: AppmeshMeshSpecServiceDiscoveryOutputReference | AppmeshMeshSpecServiceDiscovery): any;
export declare class AppmeshMeshSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshMeshSpecServiceDiscovery | undefined;
    set internalValue(value: AppmeshMeshSpecServiceDiscovery | undefined);
    private _ipPreference?;
    get ipPreference(): string;
    set ipPreference(value: string);
    resetIpPreference(): void;
    get ipPreferenceInput(): string | undefined;
}
export interface AppmeshMeshSpec {
    /**
    * egress_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#egress_filter AppmeshMesh#egress_filter}
    */
    readonly egressFilter?: AppmeshMeshSpecEgressFilter;
    /**
    * service_discovery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#service_discovery AppmeshMesh#service_discovery}
    */
    readonly serviceDiscovery?: AppmeshMeshSpecServiceDiscovery;
}
export declare function appmeshMeshSpecToTerraform(struct?: AppmeshMeshSpecOutputReference | AppmeshMeshSpec): any;
export declare function appmeshMeshSpecToHclTerraform(struct?: AppmeshMeshSpecOutputReference | AppmeshMeshSpec): any;
export declare class AppmeshMeshSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshMeshSpec | undefined;
    set internalValue(value: AppmeshMeshSpec | undefined);
    private _egressFilter;
    get egressFilter(): AppmeshMeshSpecEgressFilterOutputReference;
    putEgressFilter(value: AppmeshMeshSpecEgressFilter): void;
    resetEgressFilter(): void;
    get egressFilterInput(): AppmeshMeshSpecEgressFilter | undefined;
    private _serviceDiscovery;
    get serviceDiscovery(): AppmeshMeshSpecServiceDiscoveryOutputReference;
    putServiceDiscovery(value: AppmeshMeshSpecServiceDiscovery): void;
    resetServiceDiscovery(): void;
    get serviceDiscoveryInput(): AppmeshMeshSpecServiceDiscovery | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh aws_appmesh_mesh}
*/
export declare class AppmeshMesh extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_mesh";
    /**
    * Generates CDKTF code for importing a AppmeshMesh resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshMesh to import
    * @param importFromId The id of the existing AppmeshMesh that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshMesh to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_mesh aws_appmesh_mesh} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshMeshConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshMeshConfig);
    get arn(): string;
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    get meshOwner(): string;
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
    get spec(): AppmeshMeshSpecOutputReference;
    putSpec(value: AppmeshMeshSpec): void;
    resetSpec(): void;
    get specInput(): AppmeshMeshSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
