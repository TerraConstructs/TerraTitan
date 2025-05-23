/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDmsReplicationInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_instance#id DataAwsDmsReplicationInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_instance#replication_instance_id DataAwsDmsReplicationInstance#replication_instance_id}
    */
    readonly replicationInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_instance#tags DataAwsDmsReplicationInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_instance aws_dms_replication_instance}
*/
export declare class DataAwsDmsReplicationInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_dms_replication_instance";
    /**
    * Generates CDKTF code for importing a DataAwsDmsReplicationInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDmsReplicationInstance to import
    * @param importFromId The id of the existing DataAwsDmsReplicationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDmsReplicationInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_instance aws_dms_replication_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDmsReplicationInstanceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDmsReplicationInstanceConfig);
    get allocatedStorage(): number;
    get autoMinorVersionUpgrade(): cdktf.IResolvable;
    get availabilityZone(): string;
    get engineVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyArn(): string;
    get multiAz(): cdktf.IResolvable;
    get networkType(): string;
    get preferredMaintenanceWindow(): string;
    get publiclyAccessible(): cdktf.IResolvable;
    get replicationInstanceArn(): string;
    get replicationInstanceClass(): string;
    private _replicationInstanceId?;
    get replicationInstanceId(): string;
    set replicationInstanceId(value: string);
    get replicationInstanceIdInput(): string | undefined;
    get replicationInstancePrivateIps(): string[];
    get replicationInstancePublicIps(): string[];
    get replicationSubnetGroupId(): string;
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
    get vpcSecurityGroupIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
