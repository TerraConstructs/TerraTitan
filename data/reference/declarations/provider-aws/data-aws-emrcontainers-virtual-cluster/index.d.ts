/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEmrcontainersVirtualClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emrcontainers_virtual_cluster#id DataAwsEmrcontainersVirtualCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emrcontainers_virtual_cluster#tags DataAwsEmrcontainersVirtualCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emrcontainers_virtual_cluster#virtual_cluster_id DataAwsEmrcontainersVirtualCluster#virtual_cluster_id}
    */
    readonly virtualClusterId: string;
}
export interface DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo {
}
export declare function dataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoToTerraform(struct?: DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo): any;
export declare function dataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoToHclTerraform(struct?: DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo): any;
export declare class DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo | undefined;
    set internalValue(value: DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfo | undefined);
    get namespace(): string;
}
export declare class DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoOutputReference;
}
export interface DataAwsEmrcontainersVirtualClusterContainerProviderInfo {
}
export declare function dataAwsEmrcontainersVirtualClusterContainerProviderInfoToTerraform(struct?: DataAwsEmrcontainersVirtualClusterContainerProviderInfo): any;
export declare function dataAwsEmrcontainersVirtualClusterContainerProviderInfoToHclTerraform(struct?: DataAwsEmrcontainersVirtualClusterContainerProviderInfo): any;
export declare class DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEmrcontainersVirtualClusterContainerProviderInfo | undefined;
    set internalValue(value: DataAwsEmrcontainersVirtualClusterContainerProviderInfo | undefined);
    private _eksInfo;
    get eksInfo(): DataAwsEmrcontainersVirtualClusterContainerProviderInfoEksInfoList;
}
export declare class DataAwsEmrcontainersVirtualClusterContainerProviderInfoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEmrcontainersVirtualClusterContainerProviderInfoOutputReference;
}
export interface DataAwsEmrcontainersVirtualClusterContainerProvider {
}
export declare function dataAwsEmrcontainersVirtualClusterContainerProviderToTerraform(struct?: DataAwsEmrcontainersVirtualClusterContainerProvider): any;
export declare function dataAwsEmrcontainersVirtualClusterContainerProviderToHclTerraform(struct?: DataAwsEmrcontainersVirtualClusterContainerProvider): any;
export declare class DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEmrcontainersVirtualClusterContainerProvider | undefined;
    set internalValue(value: DataAwsEmrcontainersVirtualClusterContainerProvider | undefined);
    get id(): string;
    private _info;
    get info(): DataAwsEmrcontainersVirtualClusterContainerProviderInfoList;
    get type(): string;
}
export declare class DataAwsEmrcontainersVirtualClusterContainerProviderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEmrcontainersVirtualClusterContainerProviderOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster}
*/
export declare class DataAwsEmrcontainersVirtualCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_emrcontainers_virtual_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsEmrcontainersVirtualCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEmrcontainersVirtualCluster to import
    * @param importFromId The id of the existing DataAwsEmrcontainersVirtualCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emrcontainers_virtual_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEmrcontainersVirtualCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emrcontainers_virtual_cluster aws_emrcontainers_virtual_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEmrcontainersVirtualClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEmrcontainersVirtualClusterConfig);
    get arn(): string;
    private _containerProvider;
    get containerProvider(): DataAwsEmrcontainersVirtualClusterContainerProviderList;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get state(): string;
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
    private _virtualClusterId?;
    get virtualClusterId(): string;
    set virtualClusterId(value: string);
    get virtualClusterIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
