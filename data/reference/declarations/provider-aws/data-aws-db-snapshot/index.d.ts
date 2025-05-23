/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#db_instance_identifier DataAwsDbSnapshot#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#db_snapshot_identifier DataAwsDbSnapshot#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#id DataAwsDbSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#include_public DataAwsDbSnapshot#include_public}
    */
    readonly includePublic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#include_shared DataAwsDbSnapshot#include_shared}
    */
    readonly includeShared?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#most_recent DataAwsDbSnapshot#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#snapshot_type DataAwsDbSnapshot#snapshot_type}
    */
    readonly snapshotType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#tags DataAwsDbSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot aws_db_snapshot}
*/
export declare class DataAwsDbSnapshot extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_db_snapshot";
    /**
    * Generates CDKTF code for importing a DataAwsDbSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDbSnapshot to import
    * @param importFromId The id of the existing DataAwsDbSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDbSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_snapshot aws_db_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbSnapshotConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDbSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZone(): string;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    resetDbInstanceIdentifier(): void;
    get dbInstanceIdentifierInput(): string | undefined;
    get dbSnapshotArn(): string;
    private _dbSnapshotIdentifier?;
    get dbSnapshotIdentifier(): string;
    set dbSnapshotIdentifier(value: string);
    resetDbSnapshotIdentifier(): void;
    get dbSnapshotIdentifierInput(): string | undefined;
    get encrypted(): cdktf.IResolvable;
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
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    get optionGroupName(): string;
    get originalSnapshotCreateTime(): string;
    get port(): number;
    get snapshotCreateTime(): string;
    private _snapshotType?;
    get snapshotType(): string;
    set snapshotType(value: string);
    resetSnapshotType(): void;
    get snapshotTypeInput(): string | undefined;
    get sourceDbSnapshotIdentifier(): string;
    get sourceRegion(): string;
    get status(): string;
    get storageType(): string;
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
