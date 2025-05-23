/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MemorydbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#cluster_name MemorydbSnapshot#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#id MemorydbSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#kms_key_arn MemorydbSnapshot#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#name MemorydbSnapshot#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#name_prefix MemorydbSnapshot#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#tags MemorydbSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#tags_all MemorydbSnapshot#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#timeouts MemorydbSnapshot#timeouts}
    */
    readonly timeouts?: MemorydbSnapshotTimeouts;
}
export interface MemorydbSnapshotClusterConfiguration {
}
export declare function memorydbSnapshotClusterConfigurationToTerraform(struct?: MemorydbSnapshotClusterConfiguration): any;
export declare function memorydbSnapshotClusterConfigurationToHclTerraform(struct?: MemorydbSnapshotClusterConfiguration): any;
export declare class MemorydbSnapshotClusterConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MemorydbSnapshotClusterConfiguration | undefined;
    set internalValue(value: MemorydbSnapshotClusterConfiguration | undefined);
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
export declare class MemorydbSnapshotClusterConfigurationList extends cdktf.ComplexList {
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
    get(index: number): MemorydbSnapshotClusterConfigurationOutputReference;
}
export interface MemorydbSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#create MemorydbSnapshot#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#delete MemorydbSnapshot#delete}
    */
    readonly delete?: string;
}
export declare function memorydbSnapshotTimeoutsToTerraform(struct?: MemorydbSnapshotTimeouts | cdktf.IResolvable): any;
export declare function memorydbSnapshotTimeoutsToHclTerraform(struct?: MemorydbSnapshotTimeouts | cdktf.IResolvable): any;
export declare class MemorydbSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MemorydbSnapshotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MemorydbSnapshotTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot aws_memorydb_snapshot}
*/
export declare class MemorydbSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_memorydb_snapshot";
    /**
    * Generates CDKTF code for importing a MemorydbSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MemorydbSnapshot to import
    * @param importFromId The id of the existing MemorydbSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MemorydbSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_snapshot aws_memorydb_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MemorydbSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: MemorydbSnapshotConfig);
    get arn(): string;
    private _clusterConfiguration;
    get clusterConfiguration(): MemorydbSnapshotClusterConfigurationList;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): MemorydbSnapshotTimeoutsOutputReference;
    putTimeouts(value: MemorydbSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MemorydbSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
