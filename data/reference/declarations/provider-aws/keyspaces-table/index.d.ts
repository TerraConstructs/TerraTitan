/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KeyspacesTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#default_time_to_live KeyspacesTable#default_time_to_live}
    */
    readonly defaultTimeToLive?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#id KeyspacesTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#keyspace_name KeyspacesTable#keyspace_name}
    */
    readonly keyspaceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#table_name KeyspacesTable#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#tags KeyspacesTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#tags_all KeyspacesTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * capacity_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#capacity_specification KeyspacesTable#capacity_specification}
    */
    readonly capacitySpecification?: KeyspacesTableCapacitySpecification;
    /**
    * client_side_timestamps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#client_side_timestamps KeyspacesTable#client_side_timestamps}
    */
    readonly clientSideTimestamps?: KeyspacesTableClientSideTimestamps;
    /**
    * comment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#comment KeyspacesTable#comment}
    */
    readonly comment?: KeyspacesTableComment;
    /**
    * encryption_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#encryption_specification KeyspacesTable#encryption_specification}
    */
    readonly encryptionSpecification?: KeyspacesTableEncryptionSpecification;
    /**
    * point_in_time_recovery block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#point_in_time_recovery KeyspacesTable#point_in_time_recovery}
    */
    readonly pointInTimeRecovery?: KeyspacesTablePointInTimeRecovery;
    /**
    * schema_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#schema_definition KeyspacesTable#schema_definition}
    */
    readonly schemaDefinition: KeyspacesTableSchemaDefinition;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#timeouts KeyspacesTable#timeouts}
    */
    readonly timeouts?: KeyspacesTableTimeouts;
    /**
    * ttl block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#ttl KeyspacesTable#ttl}
    */
    readonly ttl?: KeyspacesTableTtl;
}
export interface KeyspacesTableCapacitySpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#read_capacity_units KeyspacesTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#throughput_mode KeyspacesTable#throughput_mode}
    */
    readonly throughputMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#write_capacity_units KeyspacesTable#write_capacity_units}
    */
    readonly writeCapacityUnits?: number;
}
export declare function keyspacesTableCapacitySpecificationToTerraform(struct?: KeyspacesTableCapacitySpecificationOutputReference | KeyspacesTableCapacitySpecification): any;
export declare function keyspacesTableCapacitySpecificationToHclTerraform(struct?: KeyspacesTableCapacitySpecificationOutputReference | KeyspacesTableCapacitySpecification): any;
export declare class KeyspacesTableCapacitySpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTableCapacitySpecification | undefined;
    set internalValue(value: KeyspacesTableCapacitySpecification | undefined);
    private _readCapacityUnits?;
    get readCapacityUnits(): number;
    set readCapacityUnits(value: number);
    resetReadCapacityUnits(): void;
    get readCapacityUnitsInput(): number | undefined;
    private _throughputMode?;
    get throughputMode(): string;
    set throughputMode(value: string);
    resetThroughputMode(): void;
    get throughputModeInput(): string | undefined;
    private _writeCapacityUnits?;
    get writeCapacityUnits(): number;
    set writeCapacityUnits(value: number);
    resetWriteCapacityUnits(): void;
    get writeCapacityUnitsInput(): number | undefined;
}
export interface KeyspacesTableClientSideTimestamps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#status KeyspacesTable#status}
    */
    readonly status: string;
}
export declare function keyspacesTableClientSideTimestampsToTerraform(struct?: KeyspacesTableClientSideTimestampsOutputReference | KeyspacesTableClientSideTimestamps): any;
export declare function keyspacesTableClientSideTimestampsToHclTerraform(struct?: KeyspacesTableClientSideTimestampsOutputReference | KeyspacesTableClientSideTimestamps): any;
export declare class KeyspacesTableClientSideTimestampsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTableClientSideTimestamps | undefined;
    set internalValue(value: KeyspacesTableClientSideTimestamps | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export interface KeyspacesTableComment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#message KeyspacesTable#message}
    */
    readonly message?: string;
}
export declare function keyspacesTableCommentToTerraform(struct?: KeyspacesTableCommentOutputReference | KeyspacesTableComment): any;
export declare function keyspacesTableCommentToHclTerraform(struct?: KeyspacesTableCommentOutputReference | KeyspacesTableComment): any;
export declare class KeyspacesTableCommentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTableComment | undefined;
    set internalValue(value: KeyspacesTableComment | undefined);
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string | undefined;
}
export interface KeyspacesTableEncryptionSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#kms_key_identifier KeyspacesTable#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#type KeyspacesTable#type}
    */
    readonly type?: string;
}
export declare function keyspacesTableEncryptionSpecificationToTerraform(struct?: KeyspacesTableEncryptionSpecificationOutputReference | KeyspacesTableEncryptionSpecification): any;
export declare function keyspacesTableEncryptionSpecificationToHclTerraform(struct?: KeyspacesTableEncryptionSpecificationOutputReference | KeyspacesTableEncryptionSpecification): any;
export declare class KeyspacesTableEncryptionSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTableEncryptionSpecification | undefined;
    set internalValue(value: KeyspacesTableEncryptionSpecification | undefined);
    private _kmsKeyIdentifier?;
    get kmsKeyIdentifier(): string;
    set kmsKeyIdentifier(value: string);
    resetKmsKeyIdentifier(): void;
    get kmsKeyIdentifierInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface KeyspacesTablePointInTimeRecovery {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#status KeyspacesTable#status}
    */
    readonly status?: string;
}
export declare function keyspacesTablePointInTimeRecoveryToTerraform(struct?: KeyspacesTablePointInTimeRecoveryOutputReference | KeyspacesTablePointInTimeRecovery): any;
export declare function keyspacesTablePointInTimeRecoveryToHclTerraform(struct?: KeyspacesTablePointInTimeRecoveryOutputReference | KeyspacesTablePointInTimeRecovery): any;
export declare class KeyspacesTablePointInTimeRecoveryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTablePointInTimeRecovery | undefined;
    set internalValue(value: KeyspacesTablePointInTimeRecovery | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface KeyspacesTableSchemaDefinitionClusteringKey {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#name KeyspacesTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#order_by KeyspacesTable#order_by}
    */
    readonly orderBy: string;
}
export declare function keyspacesTableSchemaDefinitionClusteringKeyToTerraform(struct?: KeyspacesTableSchemaDefinitionClusteringKey | cdktf.IResolvable): any;
export declare function keyspacesTableSchemaDefinitionClusteringKeyToHclTerraform(struct?: KeyspacesTableSchemaDefinitionClusteringKey | cdktf.IResolvable): any;
export declare class KeyspacesTableSchemaDefinitionClusteringKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KeyspacesTableSchemaDefinitionClusteringKey | cdktf.IResolvable | undefined;
    set internalValue(value: KeyspacesTableSchemaDefinitionClusteringKey | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _orderBy?;
    get orderBy(): string;
    set orderBy(value: string);
    get orderByInput(): string | undefined;
}
export declare class KeyspacesTableSchemaDefinitionClusteringKeyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KeyspacesTableSchemaDefinitionClusteringKey[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KeyspacesTableSchemaDefinitionClusteringKeyOutputReference;
}
export interface KeyspacesTableSchemaDefinitionColumn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#name KeyspacesTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#type KeyspacesTable#type}
    */
    readonly type: string;
}
export declare function keyspacesTableSchemaDefinitionColumnToTerraform(struct?: KeyspacesTableSchemaDefinitionColumn | cdktf.IResolvable): any;
export declare function keyspacesTableSchemaDefinitionColumnToHclTerraform(struct?: KeyspacesTableSchemaDefinitionColumn | cdktf.IResolvable): any;
export declare class KeyspacesTableSchemaDefinitionColumnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KeyspacesTableSchemaDefinitionColumn | cdktf.IResolvable | undefined;
    set internalValue(value: KeyspacesTableSchemaDefinitionColumn | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class KeyspacesTableSchemaDefinitionColumnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KeyspacesTableSchemaDefinitionColumn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KeyspacesTableSchemaDefinitionColumnOutputReference;
}
export interface KeyspacesTableSchemaDefinitionPartitionKey {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#name KeyspacesTable#name}
    */
    readonly name: string;
}
export declare function keyspacesTableSchemaDefinitionPartitionKeyToTerraform(struct?: KeyspacesTableSchemaDefinitionPartitionKey | cdktf.IResolvable): any;
export declare function keyspacesTableSchemaDefinitionPartitionKeyToHclTerraform(struct?: KeyspacesTableSchemaDefinitionPartitionKey | cdktf.IResolvable): any;
export declare class KeyspacesTableSchemaDefinitionPartitionKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KeyspacesTableSchemaDefinitionPartitionKey | cdktf.IResolvable | undefined;
    set internalValue(value: KeyspacesTableSchemaDefinitionPartitionKey | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class KeyspacesTableSchemaDefinitionPartitionKeyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KeyspacesTableSchemaDefinitionPartitionKey[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KeyspacesTableSchemaDefinitionPartitionKeyOutputReference;
}
export interface KeyspacesTableSchemaDefinitionStaticColumn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#name KeyspacesTable#name}
    */
    readonly name: string;
}
export declare function keyspacesTableSchemaDefinitionStaticColumnToTerraform(struct?: KeyspacesTableSchemaDefinitionStaticColumn | cdktf.IResolvable): any;
export declare function keyspacesTableSchemaDefinitionStaticColumnToHclTerraform(struct?: KeyspacesTableSchemaDefinitionStaticColumn | cdktf.IResolvable): any;
export declare class KeyspacesTableSchemaDefinitionStaticColumnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KeyspacesTableSchemaDefinitionStaticColumn | cdktf.IResolvable | undefined;
    set internalValue(value: KeyspacesTableSchemaDefinitionStaticColumn | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class KeyspacesTableSchemaDefinitionStaticColumnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KeyspacesTableSchemaDefinitionStaticColumn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KeyspacesTableSchemaDefinitionStaticColumnOutputReference;
}
export interface KeyspacesTableSchemaDefinition {
    /**
    * clustering_key block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#clustering_key KeyspacesTable#clustering_key}
    */
    readonly clusteringKey?: KeyspacesTableSchemaDefinitionClusteringKey[] | cdktf.IResolvable;
    /**
    * column block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#column KeyspacesTable#column}
    */
    readonly column: KeyspacesTableSchemaDefinitionColumn[] | cdktf.IResolvable;
    /**
    * partition_key block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#partition_key KeyspacesTable#partition_key}
    */
    readonly partitionKey: KeyspacesTableSchemaDefinitionPartitionKey[] | cdktf.IResolvable;
    /**
    * static_column block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#static_column KeyspacesTable#static_column}
    */
    readonly staticColumn?: KeyspacesTableSchemaDefinitionStaticColumn[] | cdktf.IResolvable;
}
export declare function keyspacesTableSchemaDefinitionToTerraform(struct?: KeyspacesTableSchemaDefinitionOutputReference | KeyspacesTableSchemaDefinition): any;
export declare function keyspacesTableSchemaDefinitionToHclTerraform(struct?: KeyspacesTableSchemaDefinitionOutputReference | KeyspacesTableSchemaDefinition): any;
export declare class KeyspacesTableSchemaDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTableSchemaDefinition | undefined;
    set internalValue(value: KeyspacesTableSchemaDefinition | undefined);
    private _clusteringKey;
    get clusteringKey(): KeyspacesTableSchemaDefinitionClusteringKeyList;
    putClusteringKey(value: KeyspacesTableSchemaDefinitionClusteringKey[] | cdktf.IResolvable): void;
    resetClusteringKey(): void;
    get clusteringKeyInput(): cdktf.IResolvable | KeyspacesTableSchemaDefinitionClusteringKey[] | undefined;
    private _column;
    get column(): KeyspacesTableSchemaDefinitionColumnList;
    putColumn(value: KeyspacesTableSchemaDefinitionColumn[] | cdktf.IResolvable): void;
    get columnInput(): cdktf.IResolvable | KeyspacesTableSchemaDefinitionColumn[] | undefined;
    private _partitionKey;
    get partitionKey(): KeyspacesTableSchemaDefinitionPartitionKeyList;
    putPartitionKey(value: KeyspacesTableSchemaDefinitionPartitionKey[] | cdktf.IResolvable): void;
    get partitionKeyInput(): cdktf.IResolvable | KeyspacesTableSchemaDefinitionPartitionKey[] | undefined;
    private _staticColumn;
    get staticColumn(): KeyspacesTableSchemaDefinitionStaticColumnList;
    putStaticColumn(value: KeyspacesTableSchemaDefinitionStaticColumn[] | cdktf.IResolvable): void;
    resetStaticColumn(): void;
    get staticColumnInput(): cdktf.IResolvable | KeyspacesTableSchemaDefinitionStaticColumn[] | undefined;
}
export interface KeyspacesTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#create KeyspacesTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#delete KeyspacesTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#update KeyspacesTable#update}
    */
    readonly update?: string;
}
export declare function keyspacesTableTimeoutsToTerraform(struct?: KeyspacesTableTimeouts | cdktf.IResolvable): any;
export declare function keyspacesTableTimeoutsToHclTerraform(struct?: KeyspacesTableTimeouts | cdktf.IResolvable): any;
export declare class KeyspacesTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTableTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KeyspacesTableTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface KeyspacesTableTtl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#status KeyspacesTable#status}
    */
    readonly status: string;
}
export declare function keyspacesTableTtlToTerraform(struct?: KeyspacesTableTtlOutputReference | KeyspacesTableTtl): any;
export declare function keyspacesTableTtlToHclTerraform(struct?: KeyspacesTableTtlOutputReference | KeyspacesTableTtl): any;
export declare class KeyspacesTableTtlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesTableTtl | undefined;
    set internalValue(value: KeyspacesTableTtl | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table aws_keyspaces_table}
*/
export declare class KeyspacesTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_keyspaces_table";
    /**
    * Generates CDKTF code for importing a KeyspacesTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KeyspacesTable to import
    * @param importFromId The id of the existing KeyspacesTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KeyspacesTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_table aws_keyspaces_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KeyspacesTableConfig
    */
    constructor(scope: Construct, id: string, config: KeyspacesTableConfig);
    get arn(): string;
    private _defaultTimeToLive?;
    get defaultTimeToLive(): number;
    set defaultTimeToLive(value: number);
    resetDefaultTimeToLive(): void;
    get defaultTimeToLiveInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyspaceName?;
    get keyspaceName(): string;
    set keyspaceName(value: string);
    get keyspaceNameInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
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
    private _capacitySpecification;
    get capacitySpecification(): KeyspacesTableCapacitySpecificationOutputReference;
    putCapacitySpecification(value: KeyspacesTableCapacitySpecification): void;
    resetCapacitySpecification(): void;
    get capacitySpecificationInput(): KeyspacesTableCapacitySpecification | undefined;
    private _clientSideTimestamps;
    get clientSideTimestamps(): KeyspacesTableClientSideTimestampsOutputReference;
    putClientSideTimestamps(value: KeyspacesTableClientSideTimestamps): void;
    resetClientSideTimestamps(): void;
    get clientSideTimestampsInput(): KeyspacesTableClientSideTimestamps | undefined;
    private _comment;
    get comment(): KeyspacesTableCommentOutputReference;
    putComment(value: KeyspacesTableComment): void;
    resetComment(): void;
    get commentInput(): KeyspacesTableComment | undefined;
    private _encryptionSpecification;
    get encryptionSpecification(): KeyspacesTableEncryptionSpecificationOutputReference;
    putEncryptionSpecification(value: KeyspacesTableEncryptionSpecification): void;
    resetEncryptionSpecification(): void;
    get encryptionSpecificationInput(): KeyspacesTableEncryptionSpecification | undefined;
    private _pointInTimeRecovery;
    get pointInTimeRecovery(): KeyspacesTablePointInTimeRecoveryOutputReference;
    putPointInTimeRecovery(value: KeyspacesTablePointInTimeRecovery): void;
    resetPointInTimeRecovery(): void;
    get pointInTimeRecoveryInput(): KeyspacesTablePointInTimeRecovery | undefined;
    private _schemaDefinition;
    get schemaDefinition(): KeyspacesTableSchemaDefinitionOutputReference;
    putSchemaDefinition(value: KeyspacesTableSchemaDefinition): void;
    get schemaDefinitionInput(): KeyspacesTableSchemaDefinition | undefined;
    private _timeouts;
    get timeouts(): KeyspacesTableTimeoutsOutputReference;
    putTimeouts(value: KeyspacesTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KeyspacesTableTimeouts | undefined;
    private _ttl;
    get ttl(): KeyspacesTableTtlOutputReference;
    putTtl(value: KeyspacesTableTtl): void;
    resetTtl(): void;
    get ttlInput(): KeyspacesTableTtl | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
