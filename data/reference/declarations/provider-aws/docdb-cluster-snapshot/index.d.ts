/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DocdbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot#db_cluster_identifier DocdbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot#db_cluster_snapshot_identifier DocdbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot#id DocdbClusterSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot#timeouts DocdbClusterSnapshot#timeouts}
    */
    readonly timeouts?: DocdbClusterSnapshotTimeouts;
}
export interface DocdbClusterSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot#create DocdbClusterSnapshot#create}
    */
    readonly create?: string;
}
export declare function docdbClusterSnapshotTimeoutsToTerraform(struct?: DocdbClusterSnapshotTimeouts | cdktf.IResolvable): any;
export declare function docdbClusterSnapshotTimeoutsToHclTerraform(struct?: DocdbClusterSnapshotTimeouts | cdktf.IResolvable): any;
export declare class DocdbClusterSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DocdbClusterSnapshotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DocdbClusterSnapshotTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot aws_docdb_cluster_snapshot}
*/
export declare class DocdbClusterSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_docdb_cluster_snapshot";
    /**
    * Generates CDKTF code for importing a DocdbClusterSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DocdbClusterSnapshot to import
    * @param importFromId The id of the existing DocdbClusterSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DocdbClusterSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_snapshot aws_docdb_cluster_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: DocdbClusterSnapshotConfig);
    get availabilityZones(): string[];
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    get dbClusterIdentifierInput(): string | undefined;
    get dbClusterSnapshotArn(): string;
    private _dbClusterSnapshotIdentifier?;
    get dbClusterSnapshotIdentifier(): string;
    set dbClusterSnapshotIdentifier(value: string);
    get dbClusterSnapshotIdentifierInput(): string | undefined;
    get engine(): string;
    get engineVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyId(): string;
    get port(): number;
    get snapshotType(): string;
    get sourceDbClusterSnapshotArn(): string;
    get status(): string;
    get storageEncrypted(): cdktf.IResolvable;
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DocdbClusterSnapshotTimeoutsOutputReference;
    putTimeouts(value: DocdbClusterSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DocdbClusterSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
