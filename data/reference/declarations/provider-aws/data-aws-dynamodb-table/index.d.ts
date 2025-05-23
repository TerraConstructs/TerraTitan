/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDynamodbTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table#id DataAwsDynamodbTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table#name DataAwsDynamodbTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table#tags DataAwsDynamodbTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * server_side_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table#server_side_encryption DataAwsDynamodbTable#server_side_encryption}
    */
    readonly serverSideEncryption?: DataAwsDynamodbTableServerSideEncryption;
}
export interface DataAwsDynamodbTableAttribute {
}
export declare function dataAwsDynamodbTableAttributeToTerraform(struct?: DataAwsDynamodbTableAttribute): any;
export declare function dataAwsDynamodbTableAttributeToHclTerraform(struct?: DataAwsDynamodbTableAttribute): any;
export declare class DataAwsDynamodbTableAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTableAttribute | undefined;
    set internalValue(value: DataAwsDynamodbTableAttribute | undefined);
    get name(): string;
    get type(): string;
}
export declare class DataAwsDynamodbTableAttributeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTableAttributeOutputReference;
}
export interface DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughput {
}
export declare function dataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughputToTerraform(struct?: DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughput): any;
export declare function dataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughputToHclTerraform(struct?: DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughput): any;
export declare class DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughput | undefined;
    set internalValue(value: DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughput | undefined);
    get maxReadRequestUnits(): number;
    get maxWriteRequestUnits(): number;
}
export declare class DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughputList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughputOutputReference;
}
export interface DataAwsDynamodbTableGlobalSecondaryIndex {
}
export declare function dataAwsDynamodbTableGlobalSecondaryIndexToTerraform(struct?: DataAwsDynamodbTableGlobalSecondaryIndex): any;
export declare function dataAwsDynamodbTableGlobalSecondaryIndexToHclTerraform(struct?: DataAwsDynamodbTableGlobalSecondaryIndex): any;
export declare class DataAwsDynamodbTableGlobalSecondaryIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTableGlobalSecondaryIndex | undefined;
    set internalValue(value: DataAwsDynamodbTableGlobalSecondaryIndex | undefined);
    get hashKey(): string;
    get name(): string;
    get nonKeyAttributes(): string[];
    private _onDemandThroughput;
    get onDemandThroughput(): DataAwsDynamodbTableGlobalSecondaryIndexOnDemandThroughputList;
    get projectionType(): string;
    get rangeKey(): string;
    get readCapacity(): number;
    get writeCapacity(): number;
}
export declare class DataAwsDynamodbTableGlobalSecondaryIndexList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTableGlobalSecondaryIndexOutputReference;
}
export interface DataAwsDynamodbTableLocalSecondaryIndex {
}
export declare function dataAwsDynamodbTableLocalSecondaryIndexToTerraform(struct?: DataAwsDynamodbTableLocalSecondaryIndex): any;
export declare function dataAwsDynamodbTableLocalSecondaryIndexToHclTerraform(struct?: DataAwsDynamodbTableLocalSecondaryIndex): any;
export declare class DataAwsDynamodbTableLocalSecondaryIndexOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTableLocalSecondaryIndex | undefined;
    set internalValue(value: DataAwsDynamodbTableLocalSecondaryIndex | undefined);
    get name(): string;
    get nonKeyAttributes(): string[];
    get projectionType(): string;
    get rangeKey(): string;
}
export declare class DataAwsDynamodbTableLocalSecondaryIndexList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTableLocalSecondaryIndexOutputReference;
}
export interface DataAwsDynamodbTableOnDemandThroughput {
}
export declare function dataAwsDynamodbTableOnDemandThroughputToTerraform(struct?: DataAwsDynamodbTableOnDemandThroughput): any;
export declare function dataAwsDynamodbTableOnDemandThroughputToHclTerraform(struct?: DataAwsDynamodbTableOnDemandThroughput): any;
export declare class DataAwsDynamodbTableOnDemandThroughputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTableOnDemandThroughput | undefined;
    set internalValue(value: DataAwsDynamodbTableOnDemandThroughput | undefined);
    get maxReadRequestUnits(): number;
    get maxWriteRequestUnits(): number;
}
export declare class DataAwsDynamodbTableOnDemandThroughputList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTableOnDemandThroughputOutputReference;
}
export interface DataAwsDynamodbTablePointInTimeRecovery {
}
export declare function dataAwsDynamodbTablePointInTimeRecoveryToTerraform(struct?: DataAwsDynamodbTablePointInTimeRecovery): any;
export declare function dataAwsDynamodbTablePointInTimeRecoveryToHclTerraform(struct?: DataAwsDynamodbTablePointInTimeRecovery): any;
export declare class DataAwsDynamodbTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTablePointInTimeRecovery | undefined;
    set internalValue(value: DataAwsDynamodbTablePointInTimeRecovery | undefined);
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsDynamodbTablePointInTimeRecoveryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTablePointInTimeRecoveryOutputReference;
}
export interface DataAwsDynamodbTableReplica {
}
export declare function dataAwsDynamodbTableReplicaToTerraform(struct?: DataAwsDynamodbTableReplica): any;
export declare function dataAwsDynamodbTableReplicaToHclTerraform(struct?: DataAwsDynamodbTableReplica): any;
export declare class DataAwsDynamodbTableReplicaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTableReplica | undefined;
    set internalValue(value: DataAwsDynamodbTableReplica | undefined);
    get kmsKeyArn(): string;
    get regionName(): string;
}
export declare class DataAwsDynamodbTableReplicaList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTableReplicaOutputReference;
}
export interface DataAwsDynamodbTableTtl {
}
export declare function dataAwsDynamodbTableTtlToTerraform(struct?: DataAwsDynamodbTableTtl): any;
export declare function dataAwsDynamodbTableTtlToHclTerraform(struct?: DataAwsDynamodbTableTtl): any;
export declare class DataAwsDynamodbTableTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDynamodbTableTtl | undefined;
    set internalValue(value: DataAwsDynamodbTableTtl | undefined);
    get attributeName(): string;
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsDynamodbTableTtlList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDynamodbTableTtlOutputReference;
}
export interface DataAwsDynamodbTableServerSideEncryption {
}
export declare function dataAwsDynamodbTableServerSideEncryptionToTerraform(struct?: DataAwsDynamodbTableServerSideEncryptionOutputReference | DataAwsDynamodbTableServerSideEncryption): any;
export declare function dataAwsDynamodbTableServerSideEncryptionToHclTerraform(struct?: DataAwsDynamodbTableServerSideEncryptionOutputReference | DataAwsDynamodbTableServerSideEncryption): any;
export declare class DataAwsDynamodbTableServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsDynamodbTableServerSideEncryption | undefined;
    set internalValue(value: DataAwsDynamodbTableServerSideEncryption | undefined);
    get enabled(): cdktf.IResolvable;
    get kmsKeyArn(): string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table aws_dynamodb_table}
*/
export declare class DataAwsDynamodbTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_dynamodb_table";
    /**
    * Generates CDKTF code for importing a DataAwsDynamodbTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDynamodbTable to import
    * @param importFromId The id of the existing DataAwsDynamodbTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDynamodbTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table aws_dynamodb_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDynamodbTableConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDynamodbTableConfig);
    get arn(): string;
    private _attribute;
    get attribute(): DataAwsDynamodbTableAttributeList;
    get billingMode(): string;
    get deletionProtectionEnabled(): cdktf.IResolvable;
    private _globalSecondaryIndex;
    get globalSecondaryIndex(): DataAwsDynamodbTableGlobalSecondaryIndexList;
    get hashKey(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _localSecondaryIndex;
    get localSecondaryIndex(): DataAwsDynamodbTableLocalSecondaryIndexList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _onDemandThroughput;
    get onDemandThroughput(): DataAwsDynamodbTableOnDemandThroughputList;
    private _pointInTimeRecovery;
    get pointInTimeRecovery(): DataAwsDynamodbTablePointInTimeRecoveryList;
    get rangeKey(): string;
    get readCapacity(): number;
    private _replica;
    get replica(): DataAwsDynamodbTableReplicaList;
    get streamArn(): string;
    get streamEnabled(): cdktf.IResolvable;
    get streamLabel(): string;
    get streamViewType(): string;
    get tableClass(): string;
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
    private _ttl;
    get ttl(): DataAwsDynamodbTableTtlList;
    get writeCapacity(): number;
    private _serverSideEncryption;
    get serverSideEncryption(): DataAwsDynamodbTableServerSideEncryptionOutputReference;
    putServerSideEncryption(value: DataAwsDynamodbTableServerSideEncryption): void;
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): DataAwsDynamodbTableServerSideEncryption | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
