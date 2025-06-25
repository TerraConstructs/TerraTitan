/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyMemberDetectorFeatureConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#account_id GuarddutyMemberDetectorFeature#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#detector_id GuarddutyMemberDetectorFeature#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}
    */
    readonly status: string;
    /**
    * additional_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#additional_configuration GuarddutyMemberDetectorFeature#additional_configuration}
    */
    readonly additionalConfiguration?: GuarddutyMemberDetectorFeatureAdditionalConfiguration[] | cdktf.IResolvable;
}
export interface GuarddutyMemberDetectorFeatureAdditionalConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#name GuarddutyMemberDetectorFeature#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#status GuarddutyMemberDetectorFeature#status}
    */
    readonly status: string;
}
export declare function guarddutyMemberDetectorFeatureAdditionalConfigurationToTerraform(struct?: GuarddutyMemberDetectorFeatureAdditionalConfiguration | cdktf.IResolvable): any;
export declare function guarddutyMemberDetectorFeatureAdditionalConfigurationToHclTerraform(struct?: GuarddutyMemberDetectorFeatureAdditionalConfiguration | cdktf.IResolvable): any;
export declare class GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GuarddutyMemberDetectorFeatureAdditionalConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GuarddutyMemberDetectorFeatureAdditionalConfiguration | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export declare class GuarddutyMemberDetectorFeatureAdditionalConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GuarddutyMemberDetectorFeatureAdditionalConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GuarddutyMemberDetectorFeatureAdditionalConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature aws_guardduty_member_detector_feature}
*/
export declare class GuarddutyMemberDetectorFeature extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_member_detector_feature";
    /**
    * Generates CDKTF code for importing a GuarddutyMemberDetectorFeature resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyMemberDetectorFeature to import
    * @param importFromId The id of the existing GuarddutyMemberDetectorFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyMemberDetectorFeature to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/guardduty_member_detector_feature aws_guardduty_member_detector_feature} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyMemberDetectorFeatureConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyMemberDetectorFeatureConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _additionalConfiguration;
    get additionalConfiguration(): GuarddutyMemberDetectorFeatureAdditionalConfigurationList;
    putAdditionalConfiguration(value: GuarddutyMemberDetectorFeatureAdditionalConfiguration[] | cdktf.IResolvable): void;
    resetAdditionalConfiguration(): void;
    get additionalConfigurationInput(): cdktf.IResolvable | GuarddutyMemberDetectorFeatureAdditionalConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
