/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppintegrationsEventIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#description AppintegrationsEventIntegration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#eventbridge_bus AppintegrationsEventIntegration#eventbridge_bus}
    */
    readonly eventbridgeBus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#id AppintegrationsEventIntegration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#name AppintegrationsEventIntegration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#tags AppintegrationsEventIntegration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#tags_all AppintegrationsEventIntegration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * event_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#event_filter AppintegrationsEventIntegration#event_filter}
    */
    readonly eventFilter: AppintegrationsEventIntegrationEventFilter;
}
export interface AppintegrationsEventIntegrationEventFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#source AppintegrationsEventIntegration#source}
    */
    readonly source: string;
}
export declare function appintegrationsEventIntegrationEventFilterToTerraform(struct?: AppintegrationsEventIntegrationEventFilterOutputReference | AppintegrationsEventIntegrationEventFilter): any;
export declare function appintegrationsEventIntegrationEventFilterToHclTerraform(struct?: AppintegrationsEventIntegrationEventFilterOutputReference | AppintegrationsEventIntegrationEventFilter): any;
export declare class AppintegrationsEventIntegrationEventFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppintegrationsEventIntegrationEventFilter | undefined;
    set internalValue(value: AppintegrationsEventIntegrationEventFilter | undefined);
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration aws_appintegrations_event_integration}
*/
export declare class AppintegrationsEventIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appintegrations_event_integration";
    /**
    * Generates CDKTF code for importing a AppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppintegrationsEventIntegration to import
    * @param importFromId The id of the existing AppintegrationsEventIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppintegrationsEventIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appintegrations_event_integration aws_appintegrations_event_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppintegrationsEventIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: AppintegrationsEventIntegrationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _eventbridgeBus?;
    get eventbridgeBus(): string;
    set eventbridgeBus(value: string);
    get eventbridgeBusInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _eventFilter;
    get eventFilter(): AppintegrationsEventIntegrationEventFilterOutputReference;
    putEventFilter(value: AppintegrationsEventIntegrationEventFilter): void;
    get eventFilterInput(): AppintegrationsEventIntegrationEventFilter | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
