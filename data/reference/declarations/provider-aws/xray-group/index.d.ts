/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XrayGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#filter_expression XrayGroup#filter_expression}
    */
    readonly filterExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#group_name XrayGroup#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#id XrayGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#tags XrayGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#tags_all XrayGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * insights_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#insights_configuration XrayGroup#insights_configuration}
    */
    readonly insightsConfiguration?: XrayGroupInsightsConfiguration;
}
export interface XrayGroupInsightsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#insights_enabled XrayGroup#insights_enabled}
    */
    readonly insightsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#notifications_enabled XrayGroup#notifications_enabled}
    */
    readonly notificationsEnabled?: boolean | cdktf.IResolvable;
}
export declare function xrayGroupInsightsConfigurationToTerraform(struct?: XrayGroupInsightsConfigurationOutputReference | XrayGroupInsightsConfiguration): any;
export declare function xrayGroupInsightsConfigurationToHclTerraform(struct?: XrayGroupInsightsConfigurationOutputReference | XrayGroupInsightsConfiguration): any;
export declare class XrayGroupInsightsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): XrayGroupInsightsConfiguration | undefined;
    set internalValue(value: XrayGroupInsightsConfiguration | undefined);
    private _insightsEnabled?;
    get insightsEnabled(): boolean | cdktf.IResolvable;
    set insightsEnabled(value: boolean | cdktf.IResolvable);
    get insightsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _notificationsEnabled?;
    get notificationsEnabled(): boolean | cdktf.IResolvable;
    set notificationsEnabled(value: boolean | cdktf.IResolvable);
    resetNotificationsEnabled(): void;
    get notificationsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group aws_xray_group}
*/
export declare class XrayGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_xray_group";
    /**
    * Generates CDKTF code for importing a XrayGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the XrayGroup to import
    * @param importFromId The id of the existing XrayGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the XrayGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/xray_group aws_xray_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XrayGroupConfig
    */
    constructor(scope: Construct, id: string, config: XrayGroupConfig);
    get arn(): string;
    private _filterExpression?;
    get filterExpression(): string;
    set filterExpression(value: string);
    get filterExpressionInput(): string | undefined;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _insightsConfiguration;
    get insightsConfiguration(): XrayGroupInsightsConfigurationOutputReference;
    putInsightsConfiguration(value: XrayGroupInsightsConfiguration): void;
    resetInsightsConfiguration(): void;
    get insightsConfigurationInput(): XrayGroupInsightsConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
