/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_task#id DataAwsDmsReplicationTask#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_task#replication_task_id DataAwsDmsReplicationTask#replication_task_id}
    */
    readonly replicationTaskId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_task#tags DataAwsDmsReplicationTask#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_task aws_dms_replication_task}
*/
export declare class DataAwsDmsReplicationTask extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_dms_replication_task";
    /**
    * Generates CDKTF code for importing a DataAwsDmsReplicationTask resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDmsReplicationTask to import
    * @param importFromId The id of the existing DataAwsDmsReplicationTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDmsReplicationTask to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dms_replication_task aws_dms_replication_task} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDmsReplicationTaskConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDmsReplicationTaskConfig);
    get cdcStartPosition(): string;
    get cdcStartTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get migrationType(): string;
    get replicationInstanceArn(): string;
    get replicationTaskArn(): string;
    private _replicationTaskId?;
    get replicationTaskId(): string;
    set replicationTaskId(value: string);
    get replicationTaskIdInput(): string | undefined;
    get replicationTaskSettings(): string;
    get sourceEndpointArn(): string;
    get startReplicationTask(): cdktf.IResolvable;
    get status(): string;
    get tableMappings(): string;
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
    get targetEndpointArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
