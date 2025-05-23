/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMemorydbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_snapshot#id DataAwsMemorydbSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_snapshot#name DataAwsMemorydbSnapshot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_snapshot#tags DataAwsMemorydbSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsMemorydbSnapshotClusterConfiguration {
}
export declare function dataAwsMemorydbSnapshotClusterConfigurationToTerraform(struct?: DataAwsMemorydbSnapshotClusterConfiguration): any;
export declare function dataAwsMemorydbSnapshotClusterConfigurationToHclTerraform(struct?: DataAwsMemorydbSnapshotClusterConfiguration): any;
export declare class DataAwsMemorydbSnapshotClusterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMemorydbSnapshotClusterConfiguration | undefined;
    set internalValue(value: DataAwsMemorydbSnapshotClusterConfiguration | undefined);
    get description(): string;
    get engine(): string;
    get engineVersion(): string;
    get maintenanceWindow(): string;
    get name(): string;
    get nodeType(): string;
    get numShards(): number;
    get parameterGroupName(): string;
    get port(): number;
    get snapshotRetentionLimit(): number;
    get snapshotWindow(): string;
    get subnetGroupName(): string;
    get topicArn(): string;
    get vpcId(): string;
}
export declare class DataAwsMemorydbSnapshotClusterConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMemorydbSnapshotClusterConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_snapshot aws_memorydb_snapshot}
*/
export declare class DataAwsMemorydbSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_memorydb_snapshot";
    /**
    * Generates CDKTF code for importing a DataAwsMemorydbSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMemorydbSnapshot to import
    * @param importFromId The id of the existing DataAwsMemorydbSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMemorydbSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_snapshot aws_memorydb_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMemorydbSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMemorydbSnapshotConfig);
    get arn(): string;
    private _clusterConfiguration;
    get clusterConfiguration(): DataAwsMemorydbSnapshotClusterConfigurationList;
    get clusterName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get source(): string;
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
