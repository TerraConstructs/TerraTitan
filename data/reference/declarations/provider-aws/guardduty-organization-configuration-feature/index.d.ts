/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyOrganizationConfigurationFeatureConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}
    */
    readonly autoEnable: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#detector_id GuarddutyOrganizationConfigurationFeature#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#id GuarddutyOrganizationConfigurationFeature#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}
    */
    readonly name: string;
    /**
    * additional_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#additional_configuration GuarddutyOrganizationConfigurationFeature#additional_configuration}
    */
    readonly additionalConfiguration?: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | cdktf.IResolvable;
}
export interface GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#auto_enable GuarddutyOrganizationConfigurationFeature#auto_enable}
    */
    readonly autoEnable: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#name GuarddutyOrganizationConfigurationFeature#name}
    */
    readonly name: string;
}
export declare function guarddutyOrganizationConfigurationFeatureAdditionalConfigurationToTerraform(struct?: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable): any;
export declare function guarddutyOrganizationConfigurationFeatureAdditionalConfigurationToHclTerraform(struct?: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable): any;
export declare class GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration | cdktf.IResolvable | undefined);
    private _autoEnable?;
    get autoEnable(): string;
    set autoEnable(value: string);
    get autoEnableInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature}
*/
export declare class GuarddutyOrganizationConfigurationFeature extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_organization_configuration_feature";
    /**
    * Generates CDKTF code for importing a GuarddutyOrganizationConfigurationFeature resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyOrganizationConfigurationFeature to import
    * @param importFromId The id of the existing GuarddutyOrganizationConfigurationFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyOrganizationConfigurationFeature to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration_feature aws_guardduty_organization_configuration_feature} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyOrganizationConfigurationFeatureConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationFeatureConfig);
    private _autoEnable?;
    get autoEnable(): string;
    set autoEnable(value: string);
    get autoEnableInput(): string | undefined;
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
    private _additionalConfiguration;
    get additionalConfiguration(): GuarddutyOrganizationConfigurationFeatureAdditionalConfigurationList;
    putAdditionalConfiguration(value: GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | cdktf.IResolvable): void;
    resetAdditionalConfiguration(): void;
    get additionalConfigurationInput(): cdktf.IResolvable | GuarddutyOrganizationConfigurationFeatureAdditionalConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
