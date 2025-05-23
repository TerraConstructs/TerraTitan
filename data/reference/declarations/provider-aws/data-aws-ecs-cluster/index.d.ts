/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_cluster#cluster_name DataAwsEcsCluster#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_cluster#id DataAwsEcsCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_cluster#tags DataAwsEcsCluster#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEcsClusterServiceConnectDefaults {
}
export declare function dataAwsEcsClusterServiceConnectDefaultsToTerraform(struct?: DataAwsEcsClusterServiceConnectDefaults): any;
export declare function dataAwsEcsClusterServiceConnectDefaultsToHclTerraform(struct?: DataAwsEcsClusterServiceConnectDefaults): any;
export declare class DataAwsEcsClusterServiceConnectDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsClusterServiceConnectDefaults | undefined;
    set internalValue(value: DataAwsEcsClusterServiceConnectDefaults | undefined);
    get namespace(): string;
}
export declare class DataAwsEcsClusterServiceConnectDefaultsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEcsClusterServiceConnectDefaultsOutputReference;
}
export interface DataAwsEcsClusterSetting {
}
export declare function dataAwsEcsClusterSettingToTerraform(struct?: DataAwsEcsClusterSetting): any;
export declare function dataAwsEcsClusterSettingToHclTerraform(struct?: DataAwsEcsClusterSetting): any;
export declare class DataAwsEcsClusterSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcsClusterSetting | undefined;
    set internalValue(value: DataAwsEcsClusterSetting | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsEcsClusterSettingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEcsClusterSettingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_cluster aws_ecs_cluster}
*/
export declare class DataAwsEcsCluster extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecs_cluster";
    /**
    * Generates CDKTF code for importing a DataAwsEcsCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcsCluster to import
    * @param importFromId The id of the existing DataAwsEcsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcsCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecs_cluster aws_ecs_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsClusterConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcsClusterConfig);
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get pendingTasksCount(): number;
    get registeredContainerInstancesCount(): number;
    get runningTasksCount(): number;
    private _serviceConnectDefaults;
    get serviceConnectDefaults(): DataAwsEcsClusterServiceConnectDefaultsList;
    private _setting;
    get setting(): DataAwsEcsClusterSettingList;
    get status(): string;
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
