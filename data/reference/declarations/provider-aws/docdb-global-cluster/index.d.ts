/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DocdbGlobalClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#database_name DocdbGlobalCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#deletion_protection DocdbGlobalCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#engine DocdbGlobalCluster#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#engine_version DocdbGlobalCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#global_cluster_identifier DocdbGlobalCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#id DocdbGlobalCluster#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#source_db_cluster_identifier DocdbGlobalCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#storage_encrypted DocdbGlobalCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#timeouts DocdbGlobalCluster#timeouts}
    */
    readonly timeouts?: DocdbGlobalClusterTimeouts;
}
export interface DocdbGlobalClusterGlobalClusterMembers {
}
export declare function docdbGlobalClusterGlobalClusterMembersToTerraform(struct?: DocdbGlobalClusterGlobalClusterMembers): any;
export declare function docdbGlobalClusterGlobalClusterMembersToHclTerraform(struct?: DocdbGlobalClusterGlobalClusterMembers): any;
export declare class DocdbGlobalClusterGlobalClusterMembersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DocdbGlobalClusterGlobalClusterMembers | undefined;
    set internalValue(value: DocdbGlobalClusterGlobalClusterMembers | undefined);
    get dbClusterArn(): string;
    get isWriter(): cdktf.IResolvable;
}
export declare class DocdbGlobalClusterGlobalClusterMembersList extends cdktf.ComplexList {
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
    get(index: number): DocdbGlobalClusterGlobalClusterMembersOutputReference;
}
export interface DocdbGlobalClusterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#create DocdbGlobalCluster#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#delete DocdbGlobalCluster#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#update DocdbGlobalCluster#update}
    */
    readonly update?: string;
}
export declare function docdbGlobalClusterTimeoutsToTerraform(struct?: DocdbGlobalClusterTimeouts | cdktf.IResolvable): any;
export declare function docdbGlobalClusterTimeoutsToHclTerraform(struct?: DocdbGlobalClusterTimeouts | cdktf.IResolvable): any;
export declare class DocdbGlobalClusterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DocdbGlobalClusterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DocdbGlobalClusterTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster aws_docdb_global_cluster}
*/
export declare class DocdbGlobalCluster extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_docdb_global_cluster";
    /**
    * Generates CDKTF code for importing a DocdbGlobalCluster resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DocdbGlobalCluster to import
    * @param importFromId The id of the existing DocdbGlobalCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DocdbGlobalCluster to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_global_cluster aws_docdb_global_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbGlobalClusterConfig
    */
    constructor(scope: Construct, id: string, config: DocdbGlobalClusterConfig);
    get arn(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    resetDatabaseName(): void;
    get databaseNameInput(): string | undefined;
    private _deletionProtection?;
    get deletionProtection(): boolean | cdktf.IResolvable;
    set deletionProtection(value: boolean | cdktf.IResolvable);
    resetDeletionProtection(): void;
    get deletionProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _engineVersion?;
    get engineVersion(): string;
    set engineVersion(value: string);
    resetEngineVersion(): void;
    get engineVersionInput(): string | undefined;
    private _globalClusterIdentifier?;
    get globalClusterIdentifier(): string;
    set globalClusterIdentifier(value: string);
    get globalClusterIdentifierInput(): string | undefined;
    private _globalClusterMembers;
    get globalClusterMembers(): DocdbGlobalClusterGlobalClusterMembersList;
    get globalClusterResourceId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _sourceDbClusterIdentifier?;
    get sourceDbClusterIdentifier(): string;
    set sourceDbClusterIdentifier(value: string);
    resetSourceDbClusterIdentifier(): void;
    get sourceDbClusterIdentifierInput(): string | undefined;
    get status(): string;
    private _storageEncrypted?;
    get storageEncrypted(): boolean | cdktf.IResolvable;
    set storageEncrypted(value: boolean | cdktf.IResolvable);
    resetStorageEncrypted(): void;
    get storageEncryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): DocdbGlobalClusterTimeoutsOutputReference;
    putTimeouts(value: DocdbGlobalClusterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DocdbGlobalClusterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
