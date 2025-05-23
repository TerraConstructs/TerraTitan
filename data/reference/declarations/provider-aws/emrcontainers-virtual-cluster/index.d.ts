/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrcontainersVirtualClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#name EmrcontainersVirtualCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#tags EmrcontainersVirtualCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#tags_all EmrcontainersVirtualCluster#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * container_provider block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#container_provider EmrcontainersVirtualCluster#container_provider}
    */
    readonly containerProvider: EmrcontainersVirtualClusterContainerProvider;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#timeouts EmrcontainersVirtualCluster#timeouts}
    */
    readonly timeouts?: EmrcontainersVirtualClusterTimeouts;
}
export interface EmrcontainersVirtualClusterContainerProviderInfoEksInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#namespace EmrcontainersVirtualCluster#namespace}
    */
    readonly namespace?: string;
}
export declare function emrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfoEksInfo): any;
export declare function emrcontainersVirtualClusterContainerProviderInfoEksInfoToHclTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfoEksInfo): any;
export declare class EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersVirtualClusterContainerProviderInfoEksInfo | undefined;
    set internalValue(value: EmrcontainersVirtualClusterContainerProviderInfoEksInfo | undefined);
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
}
export interface EmrcontainersVirtualClusterContainerProviderInfo {
    /**
    * eks_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#eks_info EmrcontainersVirtualCluster#eks_info}
    */
    readonly eksInfo: EmrcontainersVirtualClusterContainerProviderInfoEksInfo;
}
export declare function emrcontainersVirtualClusterContainerProviderInfoToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfo): any;
export declare function emrcontainersVirtualClusterContainerProviderInfoToHclTerraform(struct?: EmrcontainersVirtualClusterContainerProviderInfoOutputReference | EmrcontainersVirtualClusterContainerProviderInfo): any;
export declare class EmrcontainersVirtualClusterContainerProviderInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersVirtualClusterContainerProviderInfo | undefined;
    set internalValue(value: EmrcontainersVirtualClusterContainerProviderInfo | undefined);
    private _eksInfo;
    get eksInfo(): EmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference;
    putEksInfo(value: EmrcontainersVirtualClusterContainerProviderInfoEksInfo): void;
    get eksInfoInput(): EmrcontainersVirtualClusterContainerProviderInfoEksInfo | undefined;
}
export interface EmrcontainersVirtualClusterContainerProvider {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#id EmrcontainersVirtualCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#type EmrcontainersVirtualCluster#type}
    */
    readonly type: string;
    /**
    * info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#info EmrcontainersVirtualCluster#info}
    */
    readonly info: EmrcontainersVirtualClusterContainerProviderInfo;
}
export declare function emrcontainersVirtualClusterContainerProviderToTerraform(struct?: EmrcontainersVirtualClusterContainerProviderOutputReference | EmrcontainersVirtualClusterContainerProvider): any;
export declare function emrcontainersVirtualClusterContainerProviderToHclTerraform(struct?: EmrcontainersVirtualClusterContainerProviderOutputReference | EmrcontainersVirtualClusterContainerProvider): any;
export declare class EmrcontainersVirtualClusterContainerProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersVirtualClusterContainerProvider | undefined;
    set internalValue(value: EmrcontainersVirtualClusterContainerProvider | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _info;
    get info(): EmrcontainersVirtualClusterContainerProviderInfoOutputReference;
    putInfo(value: EmrcontainersVirtualClusterContainerProviderInfo): void;
    get infoInput(): EmrcontainersVirtualClusterContainerProviderInfo | undefined;
}
export interface EmrcontainersVirtualClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#delete EmrcontainersVirtualCluster#delete}
    */
    readonly delete?: string;
}
export declare function emrcontainersVirtualClusterTimeoutsToTerraform(struct?: EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable): any;
export declare function emrcontainersVirtualClusterTimeoutsToHclTerraform(struct?: EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable): any;
export declare class EmrcontainersVirtualClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EmrcontainersVirtualClusterTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}
*/
export declare class EmrcontainersVirtualCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emrcontainers_virtual_cluster";
    /**
    * Generates CDKTF code for importing a EmrcontainersVirtualCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrcontainersVirtualCluster to import
    * @param importFromId The id of the existing EmrcontainersVirtualCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrcontainersVirtualCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrcontainersVirtualClusterConfig
    */
    constructor(scope: Construct, id: string, config: EmrcontainersVirtualClusterConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
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
    private _containerProvider;
    get containerProvider(): EmrcontainersVirtualClusterContainerProviderOutputReference;
    putContainerProvider(value: EmrcontainersVirtualClusterContainerProvider): void;
    get containerProviderInput(): EmrcontainersVirtualClusterContainerProvider | undefined;
    private _timeouts;
    get timeouts(): EmrcontainersVirtualClusterTimeoutsOutputReference;
    putTimeouts(value: EmrcontainersVirtualClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EmrcontainersVirtualClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
