/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbClusterSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#db_cluster_identifier DataAwsDbClusterSnapshot#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#db_cluster_snapshot_identifier DataAwsDbClusterSnapshot#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#id DataAwsDbClusterSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#include_public DataAwsDbClusterSnapshot#include_public}
    */
    readonly includePublic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#include_shared DataAwsDbClusterSnapshot#include_shared}
    */
    readonly includeShared?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#most_recent DataAwsDbClusterSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#snapshot_type DataAwsDbClusterSnapshot#snapshot_type}
    */
    readonly snapshotType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#tags DataAwsDbClusterSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot aws_db_cluster_snapshot}
*/
export declare class DataAwsDbClusterSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_db_cluster_snapshot";
    /**
    * Generates CDKTF code for importing a DataAwsDbClusterSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDbClusterSnapshot to import
    * @param importFromId The id of the existing DataAwsDbClusterSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDbClusterSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_cluster_snapshot aws_db_cluster_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbClusterSnapshotConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDbClusterSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZones(): string[];
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    resetDbClusterIdentifier(): void;
    get dbClusterIdentifierInput(): string | undefined;
    get dbClusterSnapshotArn(): string;
    private _dbClusterSnapshotIdentifier?;
    get dbClusterSnapshotIdentifier(): string;
    set dbClusterSnapshotIdentifier(value: string);
    resetDbClusterSnapshotIdentifier(): void;
    get dbClusterSnapshotIdentifierInput(): string | undefined;
    get engine(): string;
    get engineVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includePublic?;
    get includePublic(): boolean | cdktf.IResolvable;
    set includePublic(value: boolean | cdktf.IResolvable);
    resetIncludePublic(): void;
    get includePublicInput(): boolean | cdktf.IResolvable | undefined;
    private _includeShared?;
    get includeShared(): boolean | cdktf.IResolvable;
    set includeShared(value: boolean | cdktf.IResolvable);
    resetIncludeShared(): void;
    get includeSharedInput(): boolean | cdktf.IResolvable | undefined;
    get kmsKeyId(): string;
    get licenseModel(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    get port(): number;
    get snapshotCreateTime(): string;
    private _snapshotType?;
    get snapshotType(): string;
    set snapshotType(value: string);
    resetSnapshotType(): void;
    get snapshotTypeInput(): string | undefined;
    get sourceDbClusterSnapshotArn(): string;
    get status(): string;
    get storageEncrypted(): cdktf.IResolvable;
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
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
