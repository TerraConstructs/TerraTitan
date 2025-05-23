/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MediaConvertQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#concurrent_jobs MediaConvertQueue#concurrent_jobs}
    */
    readonly concurrentJobs?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#description MediaConvertQueue#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#id MediaConvertQueue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#name MediaConvertQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}
    */
    readonly pricingPlan?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#status MediaConvertQueue#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#tags MediaConvertQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#tags_all MediaConvertQueue#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * reservation_plan_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}
    */
    readonly reservationPlanSettings?: MediaConvertQueueReservationPlanSettings;
}
export interface MediaConvertQueueReservationPlanSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#commitment MediaConvertQueue#commitment}
    */
    readonly commitment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}
    */
    readonly renewalType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}
    */
    readonly reservedSlots: number;
}
export declare function mediaConvertQueueReservationPlanSettingsToTerraform(struct?: MediaConvertQueueReservationPlanSettingsOutputReference | MediaConvertQueueReservationPlanSettings): any;
export declare function mediaConvertQueueReservationPlanSettingsToHclTerraform(struct?: MediaConvertQueueReservationPlanSettingsOutputReference | MediaConvertQueueReservationPlanSettings): any;
export declare class MediaConvertQueueReservationPlanSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MediaConvertQueueReservationPlanSettings | undefined;
    set internalValue(value: MediaConvertQueueReservationPlanSettings | undefined);
    private _commitment?;
    get commitment(): string;
    set commitment(value: string);
    get commitmentInput(): string | undefined;
    private _renewalType?;
    get renewalType(): string;
    set renewalType(value: string);
    get renewalTypeInput(): string | undefined;
    private _reservedSlots?;
    get reservedSlots(): number;
    set reservedSlots(value: number);
    get reservedSlotsInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue aws_media_convert_queue}
*/
export declare class MediaConvertQueue extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_media_convert_queue";
    /**
    * Generates CDKTF code for importing a MediaConvertQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MediaConvertQueue to import
    * @param importFromId The id of the existing MediaConvertQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MediaConvertQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/media_convert_queue aws_media_convert_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaConvertQueueConfig
    */
    constructor(scope: Construct, id: string, config: MediaConvertQueueConfig);
    get arn(): string;
    private _concurrentJobs?;
    get concurrentJobs(): number;
    set concurrentJobs(value: number);
    resetConcurrentJobs(): void;
    get concurrentJobsInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _pricingPlan?;
    get pricingPlan(): string;
    set pricingPlan(value: string);
    resetPricingPlan(): void;
    get pricingPlanInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _reservationPlanSettings;
    get reservationPlanSettings(): MediaConvertQueueReservationPlanSettingsOutputReference;
    putReservationPlanSettings(value: MediaConvertQueueReservationPlanSettings): void;
    resetReservationPlanSettings(): void;
    get reservationPlanSettingsInput(): MediaConvertQueueReservationPlanSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
