/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimesdkvoiceSipRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#disabled ChimesdkvoiceSipRule#disabled}
    */
    readonly disabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#id ChimesdkvoiceSipRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#name ChimesdkvoiceSipRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#trigger_type ChimesdkvoiceSipRule#trigger_type}
    */
    readonly triggerType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#trigger_value ChimesdkvoiceSipRule#trigger_value}
    */
    readonly triggerValue: string;
    /**
    * target_applications block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#target_applications ChimesdkvoiceSipRule#target_applications}
    */
    readonly targetApplications: ChimesdkvoiceSipRuleTargetApplications[] | cdktf.IResolvable;
}
export interface ChimesdkvoiceSipRuleTargetApplications {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#aws_region ChimesdkvoiceSipRule#aws_region}
    */
    readonly awsRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#priority ChimesdkvoiceSipRule#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#sip_media_application_id ChimesdkvoiceSipRule#sip_media_application_id}
    */
    readonly sipMediaApplicationId: string;
}
export declare function chimesdkvoiceSipRuleTargetApplicationsToTerraform(struct?: ChimesdkvoiceSipRuleTargetApplications | cdktf.IResolvable): any;
export declare function chimesdkvoiceSipRuleTargetApplicationsToHclTerraform(struct?: ChimesdkvoiceSipRuleTargetApplications | cdktf.IResolvable): any;
export declare class ChimesdkvoiceSipRuleTargetApplicationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ChimesdkvoiceSipRuleTargetApplications | cdktf.IResolvable | undefined;
    set internalValue(value: ChimesdkvoiceSipRuleTargetApplications | cdktf.IResolvable | undefined);
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    get awsRegionInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _sipMediaApplicationId?;
    get sipMediaApplicationId(): string;
    set sipMediaApplicationId(value: string);
    get sipMediaApplicationIdInput(): string | undefined;
}
export declare class ChimesdkvoiceSipRuleTargetApplicationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ChimesdkvoiceSipRuleTargetApplications[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ChimesdkvoiceSipRuleTargetApplicationsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule aws_chimesdkvoice_sip_rule}
*/
export declare class ChimesdkvoiceSipRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chimesdkvoice_sip_rule";
    /**
    * Generates CDKTF code for importing a ChimesdkvoiceSipRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimesdkvoiceSipRule to import
    * @param importFromId The id of the existing ChimesdkvoiceSipRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimesdkvoiceSipRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_sip_rule aws_chimesdkvoice_sip_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimesdkvoiceSipRuleConfig
    */
    constructor(scope: Construct, id: string, config: ChimesdkvoiceSipRuleConfig);
    private _disabled?;
    get disabled(): boolean | cdktf.IResolvable;
    set disabled(value: boolean | cdktf.IResolvable);
    resetDisabled(): void;
    get disabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _triggerType?;
    get triggerType(): string;
    set triggerType(value: string);
    get triggerTypeInput(): string | undefined;
    private _triggerValue?;
    get triggerValue(): string;
    set triggerValue(value: string);
    get triggerValueInput(): string | undefined;
    private _targetApplications;
    get targetApplications(): ChimesdkvoiceSipRuleTargetApplicationsList;
    putTargetApplications(value: ChimesdkvoiceSipRuleTargetApplications[] | cdktf.IResolvable): void;
    get targetApplicationsInput(): cdktf.IResolvable | ChimesdkvoiceSipRuleTargetApplications[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
