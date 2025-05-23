/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchCompositeAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#actions_enabled CloudwatchCompositeAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#alarm_actions CloudwatchCompositeAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#alarm_description CloudwatchCompositeAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#alarm_name CloudwatchCompositeAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#alarm_rule CloudwatchCompositeAlarm#alarm_rule}
    */
    readonly alarmRule: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#id CloudwatchCompositeAlarm#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#insufficient_data_actions CloudwatchCompositeAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#ok_actions CloudwatchCompositeAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#tags CloudwatchCompositeAlarm#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#tags_all CloudwatchCompositeAlarm#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * actions_suppressor block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#actions_suppressor CloudwatchCompositeAlarm#actions_suppressor}
    */
    readonly actionsSuppressor?: CloudwatchCompositeAlarmActionsSuppressor;
}
export interface CloudwatchCompositeAlarmActionsSuppressor {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#alarm CloudwatchCompositeAlarm#alarm}
    */
    readonly alarm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#extension_period CloudwatchCompositeAlarm#extension_period}
    */
    readonly extensionPeriod: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#wait_period CloudwatchCompositeAlarm#wait_period}
    */
    readonly waitPeriod: number;
}
export declare function cloudwatchCompositeAlarmActionsSuppressorToTerraform(struct?: CloudwatchCompositeAlarmActionsSuppressorOutputReference | CloudwatchCompositeAlarmActionsSuppressor): any;
export declare function cloudwatchCompositeAlarmActionsSuppressorToHclTerraform(struct?: CloudwatchCompositeAlarmActionsSuppressorOutputReference | CloudwatchCompositeAlarmActionsSuppressor): any;
export declare class CloudwatchCompositeAlarmActionsSuppressorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchCompositeAlarmActionsSuppressor | undefined;
    set internalValue(value: CloudwatchCompositeAlarmActionsSuppressor | undefined);
    private _alarm?;
    get alarm(): string;
    set alarm(value: string);
    get alarmInput(): string | undefined;
    private _extensionPeriod?;
    get extensionPeriod(): number;
    set extensionPeriod(value: number);
    get extensionPeriodInput(): number | undefined;
    private _waitPeriod?;
    get waitPeriod(): number;
    set waitPeriod(value: number);
    get waitPeriodInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm aws_cloudwatch_composite_alarm}
*/
export declare class CloudwatchCompositeAlarm extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_composite_alarm";
    /**
    * Generates CDKTF code for importing a CloudwatchCompositeAlarm resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchCompositeAlarm to import
    * @param importFromId The id of the existing CloudwatchCompositeAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchCompositeAlarm to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_composite_alarm aws_cloudwatch_composite_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchCompositeAlarmConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchCompositeAlarmConfig);
    private _actionsEnabled?;
    get actionsEnabled(): boolean | cdktf.IResolvable;
    set actionsEnabled(value: boolean | cdktf.IResolvable);
    resetActionsEnabled(): void;
    get actionsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _alarmActions?;
    get alarmActions(): string[];
    set alarmActions(value: string[]);
    resetAlarmActions(): void;
    get alarmActionsInput(): string[] | undefined;
    private _alarmDescription?;
    get alarmDescription(): string;
    set alarmDescription(value: string);
    resetAlarmDescription(): void;
    get alarmDescriptionInput(): string | undefined;
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string | undefined;
    private _alarmRule?;
    get alarmRule(): string;
    set alarmRule(value: string);
    get alarmRuleInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _insufficientDataActions?;
    get insufficientDataActions(): string[];
    set insufficientDataActions(value: string[]);
    resetInsufficientDataActions(): void;
    get insufficientDataActionsInput(): string[] | undefined;
    private _okActions?;
    get okActions(): string[];
    set okActions(value: string[]);
    resetOkActions(): void;
    get okActionsInput(): string[] | undefined;
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
    private _actionsSuppressor;
    get actionsSuppressor(): CloudwatchCompositeAlarmActionsSuppressorOutputReference;
    putActionsSuppressor(value: CloudwatchCompositeAlarmActionsSuppressor): void;
    resetActionsSuppressor(): void;
    get actionsSuppressorInput(): CloudwatchCompositeAlarmActionsSuppressor | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
