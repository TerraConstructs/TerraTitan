/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#db_instance_identifier DbSnapshot#db_instance_identifier}
    */
    readonly dbInstanceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#db_snapshot_identifier DbSnapshot#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#id DbSnapshot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#shared_accounts DbSnapshot#shared_accounts}
    */
    readonly sharedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#tags DbSnapshot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#tags_all DbSnapshot#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#timeouts DbSnapshot#timeouts}
    */
    readonly timeouts?: DbSnapshotTimeouts;
}
export interface DbSnapshotTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#create DbSnapshot#create}
    */
    readonly create?: string;
}
export declare function dbSnapshotTimeoutsToTerraform(struct?: DbSnapshotTimeouts | cdktf.IResolvable): any;
export declare function dbSnapshotTimeoutsToHclTerraform(struct?: DbSnapshotTimeouts | cdktf.IResolvable): any;
export declare class DbSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbSnapshotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbSnapshotTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot aws_db_snapshot}
*/
export declare class DbSnapshot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_snapshot";
    /**
    * Generates CDKTF code for importing a DbSnapshot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbSnapshot to import
    * @param importFromId The id of the existing DbSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbSnapshot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_snapshot aws_db_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbSnapshotConfig
    */
    constructor(scope: Construct, id: string, config: DbSnapshotConfig);
    get allocatedStorage(): number;
    get availabilityZone(): string;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    get dbInstanceIdentifierInput(): string | undefined;
    get dbSnapshotArn(): string;
    private _dbSnapshotIdentifier?;
    get dbSnapshotIdentifier(): string;
    set dbSnapshotIdentifier(value: string);
    get dbSnapshotIdentifierInput(): string | undefined;
    get encrypted(): cdktf.IResolvable;
    get engine(): string;
    get engineVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    get optionGroupName(): string;
    get port(): number;
    private _sharedAccounts?;
    get sharedAccounts(): string[];
    set sharedAccounts(value: string[]);
    resetSharedAccounts(): void;
    get sharedAccountsInput(): string[] | undefined;
    get snapshotType(): string;
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
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DbSnapshotTimeoutsOutputReference;
    putTimeouts(value: DbSnapshotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbSnapshotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
