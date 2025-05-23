/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GluePartitionIndexConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#catalog_id GluePartitionIndex#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#database_name GluePartitionIndex#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#id GluePartitionIndex#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#table_name GluePartitionIndex#table_name}
    */
    readonly tableName: string;
    /**
    * partition_index block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#partition_index GluePartitionIndex#partition_index}
    */
    readonly partitionIndex: GluePartitionIndexPartitionIndex;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#timeouts GluePartitionIndex#timeouts}
    */
    readonly timeouts?: GluePartitionIndexTimeouts;
}
export interface GluePartitionIndexPartitionIndex {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#index_name GluePartitionIndex#index_name}
    */
    readonly indexName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#keys GluePartitionIndex#keys}
    */
    readonly keys?: string[];
}
export declare function gluePartitionIndexPartitionIndexToTerraform(struct?: GluePartitionIndexPartitionIndexOutputReference | GluePartitionIndexPartitionIndex): any;
export declare function gluePartitionIndexPartitionIndexToHclTerraform(struct?: GluePartitionIndexPartitionIndexOutputReference | GluePartitionIndexPartitionIndex): any;
export declare class GluePartitionIndexPartitionIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GluePartitionIndexPartitionIndex | undefined;
    set internalValue(value: GluePartitionIndexPartitionIndex | undefined);
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    resetIndexName(): void;
    get indexNameInput(): string | undefined;
    get indexStatus(): string;
    private _keys?;
    get keys(): string[];
    set keys(value: string[]);
    resetKeys(): void;
    get keysInput(): string[] | undefined;
}
export interface GluePartitionIndexTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#create GluePartitionIndex#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#delete GluePartitionIndex#delete}
    */
    readonly delete?: string;
}
export declare function gluePartitionIndexTimeoutsToTerraform(struct?: GluePartitionIndexTimeouts | cdktf.IResolvable): any;
export declare function gluePartitionIndexTimeoutsToHclTerraform(struct?: GluePartitionIndexTimeouts | cdktf.IResolvable): any;
export declare class GluePartitionIndexTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GluePartitionIndexTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GluePartitionIndexTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index aws_glue_partition_index}
*/
export declare class GluePartitionIndex extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_partition_index";
    /**
    * Generates CDKTF code for importing a GluePartitionIndex resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GluePartitionIndex to import
    * @param importFromId The id of the existing GluePartitionIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GluePartitionIndex to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_partition_index aws_glue_partition_index} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GluePartitionIndexConfig
    */
    constructor(scope: Construct, id: string, config: GluePartitionIndexConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _partitionIndex;
    get partitionIndex(): GluePartitionIndexPartitionIndexOutputReference;
    putPartitionIndex(value: GluePartitionIndexPartitionIndex): void;
    get partitionIndexInput(): GluePartitionIndexPartitionIndex | undefined;
    private _timeouts;
    get timeouts(): GluePartitionIndexTimeoutsOutputReference;
    putTimeouts(value: GluePartitionIndexTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GluePartitionIndexTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
