/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#cdc_start_position DmsReplicationTask#cdc_start_position}
    */
    readonly cdcStartPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#cdc_start_time DmsReplicationTask#cdc_start_time}
    */
    readonly cdcStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#id DmsReplicationTask#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#migration_type DmsReplicationTask#migration_type}
    */
    readonly migrationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#replication_instance_arn DmsReplicationTask#replication_instance_arn}
    */
    readonly replicationInstanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#replication_task_id DmsReplicationTask#replication_task_id}
    */
    readonly replicationTaskId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#replication_task_settings DmsReplicationTask#replication_task_settings}
    */
    readonly replicationTaskSettings?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#resource_identifier DmsReplicationTask#resource_identifier}
    */
    readonly resourceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#source_endpoint_arn DmsReplicationTask#source_endpoint_arn}
    */
    readonly sourceEndpointArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#start_replication_task DmsReplicationTask#start_replication_task}
    */
    readonly startReplicationTask?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#table_mappings DmsReplicationTask#table_mappings}
    */
    readonly tableMappings: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#tags DmsReplicationTask#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#tags_all DmsReplicationTask#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#target_endpoint_arn DmsReplicationTask#target_endpoint_arn}
    */
    readonly targetEndpointArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task aws_dms_replication_task}
*/
export declare class DmsReplicationTask extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dms_replication_task";
    /**
    * Generates CDKTF code for importing a DmsReplicationTask resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsReplicationTask to import
    * @param importFromId The id of the existing DmsReplicationTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsReplicationTask to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dms_replication_task aws_dms_replication_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DmsReplicationTaskConfig
    */
    constructor(scope: Construct, id: string, config: DmsReplicationTaskConfig);
    private _cdcStartPosition?;
    get cdcStartPosition(): string;
    set cdcStartPosition(value: string);
    resetCdcStartPosition(): void;
    get cdcStartPositionInput(): string | undefined;
    private _cdcStartTime?;
    get cdcStartTime(): string;
    set cdcStartTime(value: string);
    resetCdcStartTime(): void;
    get cdcStartTimeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _migrationType?;
    get migrationType(): string;
    set migrationType(value: string);
    get migrationTypeInput(): string | undefined;
    private _replicationInstanceArn?;
    get replicationInstanceArn(): string;
    set replicationInstanceArn(value: string);
    get replicationInstanceArnInput(): string | undefined;
    get replicationTaskArn(): string;
    private _replicationTaskId?;
    get replicationTaskId(): string;
    set replicationTaskId(value: string);
    get replicationTaskIdInput(): string | undefined;
    private _replicationTaskSettings?;
    get replicationTaskSettings(): string;
    set replicationTaskSettings(value: string);
    resetReplicationTaskSettings(): void;
    get replicationTaskSettingsInput(): string | undefined;
    private _resourceIdentifier?;
    get resourceIdentifier(): string;
    set resourceIdentifier(value: string);
    resetResourceIdentifier(): void;
    get resourceIdentifierInput(): string | undefined;
    private _sourceEndpointArn?;
    get sourceEndpointArn(): string;
    set sourceEndpointArn(value: string);
    get sourceEndpointArnInput(): string | undefined;
    private _startReplicationTask?;
    get startReplicationTask(): boolean | cdktf.IResolvable;
    set startReplicationTask(value: boolean | cdktf.IResolvable);
    resetStartReplicationTask(): void;
    get startReplicationTaskInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
    private _tableMappings?;
    get tableMappings(): string;
    set tableMappings(value: string);
    get tableMappingsInput(): string | undefined;
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
    private _targetEndpointArn?;
    get targetEndpointArn(): string;
    set targetEndpointArn(value: string);
    get targetEndpointArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
