/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#id PinpointApp#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#name PinpointApp#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#name_prefix PinpointApp#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#tags PinpointApp#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#tags_all PinpointApp#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * campaign_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#campaign_hook PinpointApp#campaign_hook}
    */
    readonly campaignHook?: PinpointAppCampaignHook;
    /**
    * limits block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#limits PinpointApp#limits}
    */
    readonly limits?: PinpointAppLimits;
    /**
    * quiet_time block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#quiet_time PinpointApp#quiet_time}
    */
    readonly quietTime?: PinpointAppQuietTime;
}
export interface PinpointAppCampaignHook {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}
    */
    readonly lambdaFunctionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#mode PinpointApp#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#web_url PinpointApp#web_url}
    */
    readonly webUrl?: string;
}
export declare function pinpointAppCampaignHookToTerraform(struct?: PinpointAppCampaignHookOutputReference | PinpointAppCampaignHook): any;
export declare function pinpointAppCampaignHookToHclTerraform(struct?: PinpointAppCampaignHookOutputReference | PinpointAppCampaignHook): any;
export declare class PinpointAppCampaignHookOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PinpointAppCampaignHook | undefined;
    set internalValue(value: PinpointAppCampaignHook | undefined);
    private _lambdaFunctionName?;
    get lambdaFunctionName(): string;
    set lambdaFunctionName(value: string);
    resetLambdaFunctionName(): void;
    get lambdaFunctionNameInput(): string | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _webUrl?;
    get webUrl(): string;
    set webUrl(value: string);
    resetWebUrl(): void;
    get webUrlInput(): string | undefined;
}
export interface PinpointAppLimits {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#daily PinpointApp#daily}
    */
    readonly daily?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#maximum_duration PinpointApp#maximum_duration}
    */
    readonly maximumDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#messages_per_second PinpointApp#messages_per_second}
    */
    readonly messagesPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#total PinpointApp#total}
    */
    readonly total?: number;
}
export declare function pinpointAppLimitsToTerraform(struct?: PinpointAppLimitsOutputReference | PinpointAppLimits): any;
export declare function pinpointAppLimitsToHclTerraform(struct?: PinpointAppLimitsOutputReference | PinpointAppLimits): any;
export declare class PinpointAppLimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PinpointAppLimits | undefined;
    set internalValue(value: PinpointAppLimits | undefined);
    private _daily?;
    get daily(): number;
    set daily(value: number);
    resetDaily(): void;
    get dailyInput(): number | undefined;
    private _maximumDuration?;
    get maximumDuration(): number;
    set maximumDuration(value: number);
    resetMaximumDuration(): void;
    get maximumDurationInput(): number | undefined;
    private _messagesPerSecond?;
    get messagesPerSecond(): number;
    set messagesPerSecond(value: number);
    resetMessagesPerSecond(): void;
    get messagesPerSecondInput(): number | undefined;
    private _total?;
    get total(): number;
    set total(value: number);
    resetTotal(): void;
    get totalInput(): number | undefined;
}
export interface PinpointAppQuietTime {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#end PinpointApp#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#start PinpointApp#start}
    */
    readonly start?: string;
}
export declare function pinpointAppQuietTimeToTerraform(struct?: PinpointAppQuietTimeOutputReference | PinpointAppQuietTime): any;
export declare function pinpointAppQuietTimeToHclTerraform(struct?: PinpointAppQuietTimeOutputReference | PinpointAppQuietTime): any;
export declare class PinpointAppQuietTimeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PinpointAppQuietTime | undefined;
    set internalValue(value: PinpointAppQuietTime | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    resetEnd(): void;
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    resetStart(): void;
    get startInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app aws_pinpoint_app}
*/
export declare class PinpointApp extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpoint_app";
    /**
    * Generates CDKTF code for importing a PinpointApp resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PinpointApp to import
    * @param importFromId The id of the existing PinpointApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PinpointApp to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pinpoint_app aws_pinpoint_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointAppConfig = {}
    */
    constructor(scope: Construct, id: string, config?: PinpointAppConfig);
    get applicationId(): string;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
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
    private _campaignHook;
    get campaignHook(): PinpointAppCampaignHookOutputReference;
    putCampaignHook(value: PinpointAppCampaignHook): void;
    resetCampaignHook(): void;
    get campaignHookInput(): PinpointAppCampaignHook | undefined;
    private _limits;
    get limits(): PinpointAppLimitsOutputReference;
    putLimits(value: PinpointAppLimits): void;
    resetLimits(): void;
    get limitsInput(): PinpointAppLimits | undefined;
    private _quietTime;
    get quietTime(): PinpointAppQuietTimeOutputReference;
    putQuietTime(value: PinpointAppQuietTime): void;
    resetQuietTime(): void;
    get quietTimeInput(): PinpointAppQuietTime | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
