/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppintegrationsDataIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#description AppintegrationsDataIntegration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#id AppintegrationsDataIntegration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#kms_key AppintegrationsDataIntegration#kms_key}
    */
    readonly kmsKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#name AppintegrationsDataIntegration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#source_uri AppintegrationsDataIntegration#source_uri}
    */
    readonly sourceUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#tags AppintegrationsDataIntegration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#tags_all AppintegrationsDataIntegration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * schedule_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#schedule_config AppintegrationsDataIntegration#schedule_config}
    */
    readonly scheduleConfig: AppintegrationsDataIntegrationScheduleConfig;
}
export interface AppintegrationsDataIntegrationScheduleConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#first_execution_from AppintegrationsDataIntegration#first_execution_from}
    */
    readonly firstExecutionFrom: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#object AppintegrationsDataIntegration#object}
    */
    readonly object: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#schedule_expression AppintegrationsDataIntegration#schedule_expression}
    */
    readonly scheduleExpression: string;
}
export declare function appintegrationsDataIntegrationScheduleConfigToTerraform(struct?: AppintegrationsDataIntegrationScheduleConfigOutputReference | AppintegrationsDataIntegrationScheduleConfig): any;
export declare function appintegrationsDataIntegrationScheduleConfigToHclTerraform(struct?: AppintegrationsDataIntegrationScheduleConfigOutputReference | AppintegrationsDataIntegrationScheduleConfig): any;
export declare class AppintegrationsDataIntegrationScheduleConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppintegrationsDataIntegrationScheduleConfig | undefined;
    set internalValue(value: AppintegrationsDataIntegrationScheduleConfig | undefined);
    private _firstExecutionFrom?;
    get firstExecutionFrom(): string;
    set firstExecutionFrom(value: string);
    get firstExecutionFromInput(): string | undefined;
    private _object?;
    get object(): string;
    set object(value: string);
    get objectInput(): string | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration aws_appintegrations_data_integration}
*/
export declare class AppintegrationsDataIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appintegrations_data_integration";
    /**
    * Generates CDKTF code for importing a AppintegrationsDataIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppintegrationsDataIntegration to import
    * @param importFromId The id of the existing AppintegrationsDataIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppintegrationsDataIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_data_integration aws_appintegrations_data_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppintegrationsDataIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: AppintegrationsDataIntegrationConfig);
    get arn(): string;
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
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    get kmsKeyInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sourceUri?;
    get sourceUri(): string;
    set sourceUri(value: string);
    get sourceUriInput(): string | undefined;
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
    private _scheduleConfig;
    get scheduleConfig(): AppintegrationsDataIntegrationScheduleConfigOutputReference;
    putScheduleConfig(value: AppintegrationsDataIntegrationScheduleConfig): void;
    get scheduleConfigInput(): AppintegrationsDataIntegrationScheduleConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
