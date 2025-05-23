/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_instance#db_instance_identifier DataAwsDbInstance#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_instance#id DataAwsDbInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_instance#tags DataAwsDbInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsDbInstanceMasterUserSecret {
}
export declare function dataAwsDbInstanceMasterUserSecretToTerraform(struct?: DataAwsDbInstanceMasterUserSecret): any;
export declare function dataAwsDbInstanceMasterUserSecretToHclTerraform(struct?: DataAwsDbInstanceMasterUserSecret): any;
export declare class DataAwsDbInstanceMasterUserSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDbInstanceMasterUserSecret | undefined;
    set internalValue(value: DataAwsDbInstanceMasterUserSecret | undefined);
    get kmsKeyId(): string;
    get secretArn(): string;
    get secretStatus(): string;
}
export declare class DataAwsDbInstanceMasterUserSecretList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDbInstanceMasterUserSecretOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_instance aws_db_instance}
*/
export declare class DataAwsDbInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_db_instance";
    /**
    * Generates CDKTF code for importing a DataAwsDbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDbInstance to import
    * @param importFromId The id of the existing DataAwsDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDbInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/db_instance aws_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsDbInstanceConfig);
    get address(): string;
    get allocatedStorage(): number;
    get autoMinorVersionUpgrade(): cdktf.IResolvable;
    get availabilityZone(): string;
    get backupRetentionPeriod(): number;
    get caCertIdentifier(): string;
    get dbClusterIdentifier(): string;
    get dbInstanceArn(): string;
    get dbInstanceClass(): string;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    resetDbInstanceIdentifier(): void;
    get dbInstanceIdentifierInput(): string | undefined;
    get dbInstancePort(): number;
    get dbName(): string;
    get dbParameterGroups(): string[];
    get dbSubnetGroup(): string;
    get enabledCloudwatchLogsExports(): string[];
    get endpoint(): string;
    get engine(): string;
    get engineVersion(): string;
    get hostedZoneId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get iops(): number;
    get kmsKeyId(): string;
    get licenseModel(): string;
    private _masterUserSecret;
    get masterUserSecret(): DataAwsDbInstanceMasterUserSecretList;
    get masterUsername(): string;
    get maxAllocatedStorage(): number;
    get monitoringInterval(): number;
    get monitoringRoleArn(): string;
    get multiAz(): cdktf.IResolvable;
    get networkType(): string;
    get optionGroupMemberships(): string[];
    get port(): number;
    get preferredBackupWindow(): string;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): cdktf.IResolvable;
    get replicateSourceDb(): string;
    get resourceId(): string;
    get storageEncrypted(): cdktf.IResolvable;
    get storageThroughput(): number;
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
    get timezone(): string;
    get vpcSecurityGroups(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
