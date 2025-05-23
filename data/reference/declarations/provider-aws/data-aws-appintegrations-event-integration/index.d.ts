/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppintegrationsEventIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appintegrations_event_integration#id DataAwsAppintegrationsEventIntegration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appintegrations_event_integration#name DataAwsAppintegrationsEventIntegration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appintegrations_event_integration#tags DataAwsAppintegrationsEventIntegration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppintegrationsEventIntegrationEventFilter {
}
export declare function dataAwsAppintegrationsEventIntegrationEventFilterToTerraform(struct?: DataAwsAppintegrationsEventIntegrationEventFilter): any;
export declare function dataAwsAppintegrationsEventIntegrationEventFilterToHclTerraform(struct?: DataAwsAppintegrationsEventIntegrationEventFilter): any;
export declare class DataAwsAppintegrationsEventIntegrationEventFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppintegrationsEventIntegrationEventFilter | undefined;
    set internalValue(value: DataAwsAppintegrationsEventIntegrationEventFilter | undefined);
    get source(): string;
}
export declare class DataAwsAppintegrationsEventIntegrationEventFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAppintegrationsEventIntegrationEventFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appintegrations_event_integration aws_appintegrations_event_integration}
*/
export declare class DataAwsAppintegrationsEventIntegration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appintegrations_event_integration";
    /**
    * Generates CDKTF code for importing a DataAwsAppintegrationsEventIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppintegrationsEventIntegration to import
    * @param importFromId The id of the existing DataAwsAppintegrationsEventIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appintegrations_event_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppintegrationsEventIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appintegrations_event_integration aws_appintegrations_event_integration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppintegrationsEventIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppintegrationsEventIntegrationConfig);
    get arn(): string;
    get description(): string;
    private _eventFilter;
    get eventFilter(): DataAwsAppintegrationsEventIntegrationEventFilterList;
    get eventbridgeBus(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
