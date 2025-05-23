/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmincidentsResponsePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_response_plan#arn DataAwsSsmincidentsResponsePlan#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_response_plan#id DataAwsSsmincidentsResponsePlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_response_plan#tags DataAwsSsmincidentsResponsePlan#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter {
}
export declare function dataAwsSsmincidentsResponsePlanActionSsmAutomationParameterToTerraform(struct?: DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter): any;
export declare function dataAwsSsmincidentsResponsePlanActionSsmAutomationParameterToHclTerraform(struct?: DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter): any;
export declare class DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter | undefined;
    set internalValue(value: DataAwsSsmincidentsResponsePlanActionSsmAutomationParameter | undefined);
    get name(): string;
    get values(): string[];
}
export declare class DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterOutputReference;
}
export interface DataAwsSsmincidentsResponsePlanActionSsmAutomation {
}
export declare function dataAwsSsmincidentsResponsePlanActionSsmAutomationToTerraform(struct?: DataAwsSsmincidentsResponsePlanActionSsmAutomation): any;
export declare function dataAwsSsmincidentsResponsePlanActionSsmAutomationToHclTerraform(struct?: DataAwsSsmincidentsResponsePlanActionSsmAutomation): any;
export declare class DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsResponsePlanActionSsmAutomation | undefined;
    set internalValue(value: DataAwsSsmincidentsResponsePlanActionSsmAutomation | undefined);
    get documentName(): string;
    get documentVersion(): string;
    private _dynamicParameters;
    get dynamicParameters(): cdktf.StringMap;
    private _parameter;
    get parameter(): DataAwsSsmincidentsResponsePlanActionSsmAutomationParameterList;
    get roleArn(): string;
    get targetAccount(): string;
}
export declare class DataAwsSsmincidentsResponsePlanActionSsmAutomationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsResponsePlanActionSsmAutomationOutputReference;
}
export interface DataAwsSsmincidentsResponsePlanAction {
}
export declare function dataAwsSsmincidentsResponsePlanActionToTerraform(struct?: DataAwsSsmincidentsResponsePlanAction): any;
export declare function dataAwsSsmincidentsResponsePlanActionToHclTerraform(struct?: DataAwsSsmincidentsResponsePlanAction): any;
export declare class DataAwsSsmincidentsResponsePlanActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsResponsePlanAction | undefined;
    set internalValue(value: DataAwsSsmincidentsResponsePlanAction | undefined);
    private _ssmAutomation;
    get ssmAutomation(): DataAwsSsmincidentsResponsePlanActionSsmAutomationList;
}
export declare class DataAwsSsmincidentsResponsePlanActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsResponsePlanActionOutputReference;
}
export interface DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget {
}
export declare function dataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetToTerraform(struct?: DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget): any;
export declare function dataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetToHclTerraform(struct?: DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget): any;
export declare class DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget | undefined;
    set internalValue(value: DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTarget | undefined);
    get snsTopicArn(): string;
}
export declare class DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetOutputReference;
}
export interface DataAwsSsmincidentsResponsePlanIncidentTemplate {
}
export declare function dataAwsSsmincidentsResponsePlanIncidentTemplateToTerraform(struct?: DataAwsSsmincidentsResponsePlanIncidentTemplate): any;
export declare function dataAwsSsmincidentsResponsePlanIncidentTemplateToHclTerraform(struct?: DataAwsSsmincidentsResponsePlanIncidentTemplate): any;
export declare class DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsResponsePlanIncidentTemplate | undefined;
    set internalValue(value: DataAwsSsmincidentsResponsePlanIncidentTemplate | undefined);
    get dedupeString(): string;
    get impact(): number;
    private _incidentTags;
    get incidentTags(): cdktf.StringMap;
    private _notificationTarget;
    get notificationTarget(): DataAwsSsmincidentsResponsePlanIncidentTemplateNotificationTargetList;
    get summary(): string;
    get title(): string;
}
export declare class DataAwsSsmincidentsResponsePlanIncidentTemplateList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsResponsePlanIncidentTemplateOutputReference;
}
export interface DataAwsSsmincidentsResponsePlanIntegrationPagerduty {
}
export declare function dataAwsSsmincidentsResponsePlanIntegrationPagerdutyToTerraform(struct?: DataAwsSsmincidentsResponsePlanIntegrationPagerduty): any;
export declare function dataAwsSsmincidentsResponsePlanIntegrationPagerdutyToHclTerraform(struct?: DataAwsSsmincidentsResponsePlanIntegrationPagerduty): any;
export declare class DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsResponsePlanIntegrationPagerduty | undefined;
    set internalValue(value: DataAwsSsmincidentsResponsePlanIntegrationPagerduty | undefined);
    get name(): string;
    get secretId(): string;
    get serviceId(): string;
}
export declare class DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsResponsePlanIntegrationPagerdutyOutputReference;
}
export interface DataAwsSsmincidentsResponsePlanIntegration {
}
export declare function dataAwsSsmincidentsResponsePlanIntegrationToTerraform(struct?: DataAwsSsmincidentsResponsePlanIntegration): any;
export declare function dataAwsSsmincidentsResponsePlanIntegrationToHclTerraform(struct?: DataAwsSsmincidentsResponsePlanIntegration): any;
export declare class DataAwsSsmincidentsResponsePlanIntegrationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmincidentsResponsePlanIntegration | undefined;
    set internalValue(value: DataAwsSsmincidentsResponsePlanIntegration | undefined);
    private _pagerduty;
    get pagerduty(): DataAwsSsmincidentsResponsePlanIntegrationPagerdutyList;
}
export declare class DataAwsSsmincidentsResponsePlanIntegrationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmincidentsResponsePlanIntegrationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_response_plan aws_ssmincidents_response_plan}
*/
export declare class DataAwsSsmincidentsResponsePlan extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssmincidents_response_plan";
    /**
    * Generates CDKTF code for importing a DataAwsSsmincidentsResponsePlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmincidentsResponsePlan to import
    * @param importFromId The id of the existing DataAwsSsmincidentsResponsePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmincidentsResponsePlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmincidents_response_plan aws_ssmincidents_response_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmincidentsResponsePlanConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmincidentsResponsePlanConfig);
    private _action;
    get action(): DataAwsSsmincidentsResponsePlanActionList;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get chatChannel(): string[];
    get displayName(): string;
    get engagements(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _incidentTemplate;
    get incidentTemplate(): DataAwsSsmincidentsResponsePlanIncidentTemplateList;
    private _integration;
    get integration(): DataAwsSsmincidentsResponsePlanIntegrationList;
    get name(): string;
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
