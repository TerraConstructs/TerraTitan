/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApplicationinsightsApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#auto_config_enabled ApplicationinsightsApplication#auto_config_enabled}
    */
    readonly autoConfigEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#auto_create ApplicationinsightsApplication#auto_create}
    */
    readonly autoCreate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#cwe_monitor_enabled ApplicationinsightsApplication#cwe_monitor_enabled}
    */
    readonly cweMonitorEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#grouping_type ApplicationinsightsApplication#grouping_type}
    */
    readonly groupingType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#id ApplicationinsightsApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#ops_center_enabled ApplicationinsightsApplication#ops_center_enabled}
    */
    readonly opsCenterEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn ApplicationinsightsApplication#ops_item_sns_topic_arn}
    */
    readonly opsItemSnsTopicArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#resource_group_name ApplicationinsightsApplication#resource_group_name}
    */
    readonly resourceGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#tags ApplicationinsightsApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#tags_all ApplicationinsightsApplication#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application aws_applicationinsights_application}
*/
export declare class ApplicationinsightsApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_applicationinsights_application";
    /**
    * Generates CDKTF code for importing a ApplicationinsightsApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApplicationinsightsApplication to import
    * @param importFromId The id of the existing ApplicationinsightsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApplicationinsightsApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/applicationinsights_application aws_applicationinsights_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApplicationinsightsApplicationConfig
    */
    constructor(scope: Construct, id: string, config: ApplicationinsightsApplicationConfig);
    get arn(): string;
    private _autoConfigEnabled?;
    get autoConfigEnabled(): boolean | cdktf.IResolvable;
    set autoConfigEnabled(value: boolean | cdktf.IResolvable);
    resetAutoConfigEnabled(): void;
    get autoConfigEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _autoCreate?;
    get autoCreate(): boolean | cdktf.IResolvable;
    set autoCreate(value: boolean | cdktf.IResolvable);
    resetAutoCreate(): void;
    get autoCreateInput(): boolean | cdktf.IResolvable | undefined;
    private _cweMonitorEnabled?;
    get cweMonitorEnabled(): boolean | cdktf.IResolvable;
    set cweMonitorEnabled(value: boolean | cdktf.IResolvable);
    resetCweMonitorEnabled(): void;
    get cweMonitorEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _groupingType?;
    get groupingType(): string;
    set groupingType(value: string);
    resetGroupingType(): void;
    get groupingTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _opsCenterEnabled?;
    get opsCenterEnabled(): boolean | cdktf.IResolvable;
    set opsCenterEnabled(value: boolean | cdktf.IResolvable);
    resetOpsCenterEnabled(): void;
    get opsCenterEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _opsItemSnsTopicArn?;
    get opsItemSnsTopicArn(): string;
    set opsItemSnsTopicArn(value: string);
    resetOpsItemSnsTopicArn(): void;
    get opsItemSnsTopicArnInput(): string | undefined;
    private _resourceGroupName?;
    get resourceGroupName(): string;
    set resourceGroupName(value: string);
    get resourceGroupNameInput(): string | undefined;
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
