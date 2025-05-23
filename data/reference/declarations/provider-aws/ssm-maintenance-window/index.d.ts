/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmMaintenanceWindowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#allow_unassociated_targets SsmMaintenanceWindow#allow_unassociated_targets}
    */
    readonly allowUnassociatedTargets?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#cutoff SsmMaintenanceWindow#cutoff}
    */
    readonly cutoff: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#description SsmMaintenanceWindow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#duration SsmMaintenanceWindow#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#enabled SsmMaintenanceWindow#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#end_date SsmMaintenanceWindow#end_date}
    */
    readonly endDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#id SsmMaintenanceWindow#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#name SsmMaintenanceWindow#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#schedule SsmMaintenanceWindow#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#schedule_offset SsmMaintenanceWindow#schedule_offset}
    */
    readonly scheduleOffset?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#schedule_timezone SsmMaintenanceWindow#schedule_timezone}
    */
    readonly scheduleTimezone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#start_date SsmMaintenanceWindow#start_date}
    */
    readonly startDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#tags SsmMaintenanceWindow#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#tags_all SsmMaintenanceWindow#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window aws_ssm_maintenance_window}
*/
export declare class SsmMaintenanceWindow extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_maintenance_window";
    /**
    * Generates CDKTF code for importing a SsmMaintenanceWindow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmMaintenanceWindow to import
    * @param importFromId The id of the existing SsmMaintenanceWindow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmMaintenanceWindow to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_maintenance_window aws_ssm_maintenance_window} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmMaintenanceWindowConfig
    */
    constructor(scope: Construct, id: string, config: SsmMaintenanceWindowConfig);
    private _allowUnassociatedTargets?;
    get allowUnassociatedTargets(): boolean | cdktf.IResolvable;
    set allowUnassociatedTargets(value: boolean | cdktf.IResolvable);
    resetAllowUnassociatedTargets(): void;
    get allowUnassociatedTargetsInput(): boolean | cdktf.IResolvable | undefined;
    private _cutoff?;
    get cutoff(): number;
    set cutoff(value: number);
    get cutoffInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _duration?;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _endDate?;
    get endDate(): string;
    set endDate(value: string);
    resetEndDate(): void;
    get endDateInput(): string | undefined;
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
    private _scheduleOffset?;
    get scheduleOffset(): number;
    set scheduleOffset(value: number);
    resetScheduleOffset(): void;
    get scheduleOffsetInput(): number | undefined;
    private _scheduleTimezone?;
    get scheduleTimezone(): string;
    set scheduleTimezone(value: string);
    resetScheduleTimezone(): void;
    get scheduleTimezoneInput(): string | undefined;
    private _startDate?;
    get startDate(): string;
    set startDate(value: string);
    resetStartDate(): void;
    get startDateInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
