/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecoverycontrolconfigSafetyRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#asserted_controls Route53RecoverycontrolconfigSafetyRule#asserted_controls}
    */
    readonly assertedControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#control_panel_arn Route53RecoverycontrolconfigSafetyRule#control_panel_arn}
    */
    readonly controlPanelArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#gating_controls Route53RecoverycontrolconfigSafetyRule#gating_controls}
    */
    readonly gatingControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#id Route53RecoverycontrolconfigSafetyRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#name Route53RecoverycontrolconfigSafetyRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#target_controls Route53RecoverycontrolconfigSafetyRule#target_controls}
    */
    readonly targetControls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#wait_period_ms Route53RecoverycontrolconfigSafetyRule#wait_period_ms}
    */
    readonly waitPeriodMs: number;
    /**
    * rule_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#rule_config Route53RecoverycontrolconfigSafetyRule#rule_config}
    */
    readonly ruleConfig: Route53RecoverycontrolconfigSafetyRuleRuleConfig;
}
export interface Route53RecoverycontrolconfigSafetyRuleRuleConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#inverted Route53RecoverycontrolconfigSafetyRule#inverted}
    */
    readonly inverted: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#threshold Route53RecoverycontrolconfigSafetyRule#threshold}
    */
    readonly threshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#type Route53RecoverycontrolconfigSafetyRule#type}
    */
    readonly type: string;
}
export declare function route53RecoverycontrolconfigSafetyRuleRuleConfigToTerraform(struct?: Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference | Route53RecoverycontrolconfigSafetyRuleRuleConfig): any;
export declare function route53RecoverycontrolconfigSafetyRuleRuleConfigToHclTerraform(struct?: Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference | Route53RecoverycontrolconfigSafetyRuleRuleConfig): any;
export declare class Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecoverycontrolconfigSafetyRuleRuleConfig | undefined;
    set internalValue(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig | undefined);
    private _inverted?;
    get inverted(): boolean | cdktf.IResolvable;
    set inverted(value: boolean | cdktf.IResolvable);
    get invertedInput(): boolean | cdktf.IResolvable | undefined;
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    get thresholdInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule aws_route53recoverycontrolconfig_safety_rule}
*/
export declare class Route53RecoverycontrolconfigSafetyRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53recoverycontrolconfig_safety_rule";
    /**
    * Generates CDKTF code for importing a Route53RecoverycontrolconfigSafetyRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecoverycontrolconfigSafetyRule to import
    * @param importFromId The id of the existing Route53RecoverycontrolconfigSafetyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecoverycontrolconfigSafetyRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53recoverycontrolconfig_safety_rule aws_route53recoverycontrolconfig_safety_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecoverycontrolconfigSafetyRuleConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecoverycontrolconfigSafetyRuleConfig);
    get arn(): string;
    private _assertedControls?;
    get assertedControls(): string[];
    set assertedControls(value: string[]);
    resetAssertedControls(): void;
    get assertedControlsInput(): string[] | undefined;
    private _controlPanelArn?;
    get controlPanelArn(): string;
    set controlPanelArn(value: string);
    get controlPanelArnInput(): string | undefined;
    private _gatingControls?;
    get gatingControls(): string[];
    set gatingControls(value: string[]);
    resetGatingControls(): void;
    get gatingControlsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
    private _targetControls?;
    get targetControls(): string[];
    set targetControls(value: string[]);
    resetTargetControls(): void;
    get targetControlsInput(): string[] | undefined;
    private _waitPeriodMs?;
    get waitPeriodMs(): number;
    set waitPeriodMs(value: number);
    get waitPeriodMsInput(): number | undefined;
    private _ruleConfig;
    get ruleConfig(): Route53RecoverycontrolconfigSafetyRuleRuleConfigOutputReference;
    putRuleConfig(value: Route53RecoverycontrolconfigSafetyRuleRuleConfig): void;
    get ruleConfigInput(): Route53RecoverycontrolconfigSafetyRuleRuleConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
