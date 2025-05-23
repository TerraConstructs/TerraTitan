/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyDetectorFeatureConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#detector_id GuarddutyDetectorFeature#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#id GuarddutyDetectorFeature#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#name GuarddutyDetectorFeature#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#status GuarddutyDetectorFeature#status}
    */
    readonly status: string;
    /**
    * additional_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#additional_configuration GuarddutyDetectorFeature#additional_configuration}
    */
    readonly additionalConfiguration?: GuarddutyDetectorFeatureAdditionalConfiguration[] | cdktf.IResolvable;
}
export interface GuarddutyDetectorFeatureAdditionalConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#name GuarddutyDetectorFeature#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#status GuarddutyDetectorFeature#status}
    */
    readonly status: string;
}
export declare function guarddutyDetectorFeatureAdditionalConfigurationToTerraform(struct?: GuarddutyDetectorFeatureAdditionalConfiguration | cdktf.IResolvable): any;
export declare function guarddutyDetectorFeatureAdditionalConfigurationToHclTerraform(struct?: GuarddutyDetectorFeatureAdditionalConfiguration | cdktf.IResolvable): any;
export declare class GuarddutyDetectorFeatureAdditionalConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GuarddutyDetectorFeatureAdditionalConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GuarddutyDetectorFeatureAdditionalConfiguration | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
}
export declare class GuarddutyDetectorFeatureAdditionalConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GuarddutyDetectorFeatureAdditionalConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GuarddutyDetectorFeatureAdditionalConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature aws_guardduty_detector_feature}
*/
export declare class GuarddutyDetectorFeature extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_detector_feature";
    /**
    * Generates CDKTF code for importing a GuarddutyDetectorFeature resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyDetectorFeature to import
    * @param importFromId The id of the existing GuarddutyDetectorFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyDetectorFeature to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector_feature aws_guardduty_detector_feature} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyDetectorFeatureConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyDetectorFeatureConfig);
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _additionalConfiguration;
    get additionalConfiguration(): GuarddutyDetectorFeatureAdditionalConfigurationList;
    putAdditionalConfiguration(value: GuarddutyDetectorFeatureAdditionalConfiguration[] | cdktf.IResolvable): void;
    resetAdditionalConfiguration(): void;
    get additionalConfigurationInput(): cdktf.IResolvable | GuarddutyDetectorFeatureAdditionalConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
