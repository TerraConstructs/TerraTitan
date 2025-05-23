/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftScheduledActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#description RedshiftScheduledAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#enable RedshiftScheduledAction#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}
    */
    readonly iamRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#id RedshiftScheduledAction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#name RedshiftScheduledAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * target_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#target_action RedshiftScheduledAction#target_action}
    */
    readonly targetAction: RedshiftScheduledActionTargetAction;
}
export interface RedshiftScheduledActionTargetActionPauseCluster {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
}
export declare function redshiftScheduledActionTargetActionPauseClusterToTerraform(struct?: RedshiftScheduledActionTargetActionPauseClusterOutputReference | RedshiftScheduledActionTargetActionPauseCluster): any;
export declare function redshiftScheduledActionTargetActionPauseClusterToHclTerraform(struct?: RedshiftScheduledActionTargetActionPauseClusterOutputReference | RedshiftScheduledActionTargetActionPauseCluster): any;
export declare class RedshiftScheduledActionTargetActionPauseClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftScheduledActionTargetActionPauseCluster | undefined;
    set internalValue(value: RedshiftScheduledActionTargetActionPauseCluster | undefined);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
}
export interface RedshiftScheduledActionTargetActionResizeCluster {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#classic RedshiftScheduledAction#classic}
    */
    readonly classic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}
    */
    readonly nodeType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}
    */
    readonly numberOfNodes?: number;
}
export declare function redshiftScheduledActionTargetActionResizeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResizeClusterOutputReference | RedshiftScheduledActionTargetActionResizeCluster): any;
export declare function redshiftScheduledActionTargetActionResizeClusterToHclTerraform(struct?: RedshiftScheduledActionTargetActionResizeClusterOutputReference | RedshiftScheduledActionTargetActionResizeCluster): any;
export declare class RedshiftScheduledActionTargetActionResizeClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftScheduledActionTargetActionResizeCluster | undefined;
    set internalValue(value: RedshiftScheduledActionTargetActionResizeCluster | undefined);
    private _classic?;
    get classic(): boolean | cdktf.IResolvable;
    set classic(value: boolean | cdktf.IResolvable);
    resetClassic(): void;
    get classicInput(): boolean | cdktf.IResolvable | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _clusterType?;
    get clusterType(): string;
    set clusterType(value: string);
    resetClusterType(): void;
    get clusterTypeInput(): string | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    resetNodeType(): void;
    get nodeTypeInput(): string | undefined;
    private _numberOfNodes?;
    get numberOfNodes(): number;
    set numberOfNodes(value: number);
    resetNumberOfNodes(): void;
    get numberOfNodesInput(): number | undefined;
}
export interface RedshiftScheduledActionTargetActionResumeCluster {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}
    */
    readonly clusterIdentifier: string;
}
export declare function redshiftScheduledActionTargetActionResumeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResumeClusterOutputReference | RedshiftScheduledActionTargetActionResumeCluster): any;
export declare function redshiftScheduledActionTargetActionResumeClusterToHclTerraform(struct?: RedshiftScheduledActionTargetActionResumeClusterOutputReference | RedshiftScheduledActionTargetActionResumeCluster): any;
export declare class RedshiftScheduledActionTargetActionResumeClusterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftScheduledActionTargetActionResumeCluster | undefined;
    set internalValue(value: RedshiftScheduledActionTargetActionResumeCluster | undefined);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
}
export interface RedshiftScheduledActionTargetAction {
    /**
    * pause_cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#pause_cluster RedshiftScheduledAction#pause_cluster}
    */
    readonly pauseCluster?: RedshiftScheduledActionTargetActionPauseCluster;
    /**
    * resize_cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#resize_cluster RedshiftScheduledAction#resize_cluster}
    */
    readonly resizeCluster?: RedshiftScheduledActionTargetActionResizeCluster;
    /**
    * resume_cluster block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#resume_cluster RedshiftScheduledAction#resume_cluster}
    */
    readonly resumeCluster?: RedshiftScheduledActionTargetActionResumeCluster;
}
export declare function redshiftScheduledActionTargetActionToTerraform(struct?: RedshiftScheduledActionTargetActionOutputReference | RedshiftScheduledActionTargetAction): any;
export declare function redshiftScheduledActionTargetActionToHclTerraform(struct?: RedshiftScheduledActionTargetActionOutputReference | RedshiftScheduledActionTargetAction): any;
export declare class RedshiftScheduledActionTargetActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftScheduledActionTargetAction | undefined;
    set internalValue(value: RedshiftScheduledActionTargetAction | undefined);
    private _pauseCluster;
    get pauseCluster(): RedshiftScheduledActionTargetActionPauseClusterOutputReference;
    putPauseCluster(value: RedshiftScheduledActionTargetActionPauseCluster): void;
    resetPauseCluster(): void;
    get pauseClusterInput(): RedshiftScheduledActionTargetActionPauseCluster | undefined;
    private _resizeCluster;
    get resizeCluster(): RedshiftScheduledActionTargetActionResizeClusterOutputReference;
    putResizeCluster(value: RedshiftScheduledActionTargetActionResizeCluster): void;
    resetResizeCluster(): void;
    get resizeClusterInput(): RedshiftScheduledActionTargetActionResizeCluster | undefined;
    private _resumeCluster;
    get resumeCluster(): RedshiftScheduledActionTargetActionResumeClusterOutputReference;
    putResumeCluster(value: RedshiftScheduledActionTargetActionResumeCluster): void;
    resetResumeCluster(): void;
    get resumeClusterInput(): RedshiftScheduledActionTargetActionResumeCluster | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action aws_redshift_scheduled_action}
*/
export declare class RedshiftScheduledAction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_scheduled_action";
    /**
    * Generates CDKTF code for importing a RedshiftScheduledAction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftScheduledAction to import
    * @param importFromId The id of the existing RedshiftScheduledAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftScheduledAction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_scheduled_action aws_redshift_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftScheduledActionConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftScheduledActionConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _endTime?;
    get endTime(): string;
    set endTime(value: string);
    resetEndTime(): void;
    get endTimeInput(): string | undefined;
    private _iamRole?;
    get iamRole(): string;
    set iamRole(value: string);
    get iamRoleInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    get scheduleInput(): string | undefined;
    private _startTime?;
    get startTime(): string;
    set startTime(value: string);
    resetStartTime(): void;
    get startTimeInput(): string | undefined;
    private _targetAction;
    get targetAction(): RedshiftScheduledActionTargetActionOutputReference;
    putTargetAction(value: RedshiftScheduledActionTargetAction): void;
    get targetActionInput(): RedshiftScheduledActionTargetAction | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
