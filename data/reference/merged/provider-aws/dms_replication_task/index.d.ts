/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DmsReplicationTaskConfig extends cdktf.TerraformMetaArguments {
    /** (Optional, Conflicts with `cdcStartTime`) Indicates when you want a change data capture (CDC) operation to start. The value can be a RFC3339 formatted date, a checkpoint, or a LSN/SCN format depending on the source engine. For more information see [Determining a CDC native start point](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Task.CDC.html#CHAP_Task.CDC.StartPoint.Native). */
    readonly cdcStartPosition?: string;
    /** (Optional, Conflicts with `cdcStartPosition`) RFC3339 formatted date string or UNIX timestamp for the start of the Change Data Capture (CDC) operation. */
    readonly cdcStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dms_replication_task#id DmsReplicationTask#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) Migration type. Can be one of `full-load | cdc | full-load-and-cdc`. */
    readonly migrationType: string;
    /** (Required) ARN of the replication instance. */
    readonly replicationInstanceArn: string;
    /** (Required) Replication task identifier which must contain from 1 to 255 alphanumeric characters or hyphens, first character must be a letter, cannot end with a hyphen, and cannot contain two consecutive hyphens. */
    readonly replicationTaskId: string;
    /** (Optional) Escaped JSON string that contains the task settings. For a complete list of task settings, see [Task Settings for AWS Database Migration Service Tasks](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html). Note that `Logging.CloudWatchLogGroup` and `Logging.CloudWatchLogStream` are read only and should not be defined, even as `null`, in the configuration since AWS provides a value for these settings. */
    readonly replicationTaskSettings?: string;
    /** (Optional) A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. */
    readonly resourceIdentifier?: string;
    /** (Required) ARN that uniquely identifies the source endpoint. */
    readonly sourceEndpointArn: string;
    /** (Optional) Whether to run or stop the replication task. */
    readonly startReplicationTask?: boolean | cdktf.IResolvable;
    /** (Required) Escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html) */
    readonly tableMappings: string;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dms_replication_task#tags_all DmsReplicationTask#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Required) ARN that uniquely identifies the target endpoint. */
    readonly targetEndpointArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dms_replication_task aws_dms_replication_task}
*/
export declare class DmsReplicationTask extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dms_replication_task";
    /**
    * Generates CDKTF code for importing a DmsReplicationTask resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DmsReplicationTask to import
    * @param importFromId The id of the existing DmsReplicationTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dms_replication_task#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DmsReplicationTask to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dms_replication_task aws_dms_replication_task} Resource
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
