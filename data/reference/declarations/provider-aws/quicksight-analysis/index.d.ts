/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightAnalysisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#analysis_id QuicksightAnalysis#analysis_id}
    */
    readonly analysisId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#aws_account_id QuicksightAnalysis#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#id QuicksightAnalysis#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#recovery_window_in_days QuicksightAnalysis#recovery_window_in_days}
    */
    readonly recoveryWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#tags QuicksightAnalysis#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#tags_all QuicksightAnalysis#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#theme_arn QuicksightAnalysis#theme_arn}
    */
    readonly themeArn?: string;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#definition QuicksightAnalysis#definition}
    */
    readonly definition?: any;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#parameters QuicksightAnalysis#parameters}
    */
    readonly parameters?: QuicksightAnalysisParameters;
    /**
    * permissions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#permissions QuicksightAnalysis#permissions}
    */
    readonly permissions?: QuicksightAnalysisPermissions[] | cdktf.IResolvable;
    /**
    * source_entity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#source_entity QuicksightAnalysis#source_entity}
    */
    readonly sourceEntity?: QuicksightAnalysisSourceEntity;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#timeouts QuicksightAnalysis#timeouts}
    */
    readonly timeouts?: QuicksightAnalysisTimeouts;
}
export interface QuicksightAnalysisParametersDateTimeParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
    */
    readonly values: string[];
}
export declare function quicksightAnalysisParametersDateTimeParametersToTerraform(struct?: QuicksightAnalysisParametersDateTimeParameters | cdktf.IResolvable): any;
export declare function quicksightAnalysisParametersDateTimeParametersToHclTerraform(struct?: QuicksightAnalysisParametersDateTimeParameters | cdktf.IResolvable): any;
export declare class QuicksightAnalysisParametersDateTimeParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightAnalysisParametersDateTimeParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAnalysisParametersDateTimeParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class QuicksightAnalysisParametersDateTimeParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightAnalysisParametersDateTimeParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightAnalysisParametersDateTimeParametersOutputReference;
}
export interface QuicksightAnalysisParametersDecimalParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
    */
    readonly values: number[];
}
export declare function quicksightAnalysisParametersDecimalParametersToTerraform(struct?: QuicksightAnalysisParametersDecimalParameters | cdktf.IResolvable): any;
export declare function quicksightAnalysisParametersDecimalParametersToHclTerraform(struct?: QuicksightAnalysisParametersDecimalParameters | cdktf.IResolvable): any;
export declare class QuicksightAnalysisParametersDecimalParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightAnalysisParametersDecimalParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAnalysisParametersDecimalParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): number[];
    set values(value: number[]);
    get valuesInput(): number[] | undefined;
}
export declare class QuicksightAnalysisParametersDecimalParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightAnalysisParametersDecimalParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightAnalysisParametersDecimalParametersOutputReference;
}
export interface QuicksightAnalysisParametersIntegerParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
    */
    readonly values: number[];
}
export declare function quicksightAnalysisParametersIntegerParametersToTerraform(struct?: QuicksightAnalysisParametersIntegerParameters | cdktf.IResolvable): any;
export declare function quicksightAnalysisParametersIntegerParametersToHclTerraform(struct?: QuicksightAnalysisParametersIntegerParameters | cdktf.IResolvable): any;
export declare class QuicksightAnalysisParametersIntegerParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightAnalysisParametersIntegerParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAnalysisParametersIntegerParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): number[];
    set values(value: number[]);
    get valuesInput(): number[] | undefined;
}
export declare class QuicksightAnalysisParametersIntegerParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightAnalysisParametersIntegerParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightAnalysisParametersIntegerParametersOutputReference;
}
export interface QuicksightAnalysisParametersStringParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#name QuicksightAnalysis#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#values QuicksightAnalysis#values}
    */
    readonly values: string[];
}
export declare function quicksightAnalysisParametersStringParametersToTerraform(struct?: QuicksightAnalysisParametersStringParameters | cdktf.IResolvable): any;
export declare function quicksightAnalysisParametersStringParametersToHclTerraform(struct?: QuicksightAnalysisParametersStringParameters | cdktf.IResolvable): any;
export declare class QuicksightAnalysisParametersStringParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightAnalysisParametersStringParameters | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAnalysisParametersStringParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class QuicksightAnalysisParametersStringParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightAnalysisParametersStringParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightAnalysisParametersStringParametersOutputReference;
}
export interface QuicksightAnalysisParameters {
    /**
    * date_time_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#date_time_parameters QuicksightAnalysis#date_time_parameters}
    */
    readonly dateTimeParameters?: QuicksightAnalysisParametersDateTimeParameters[] | cdktf.IResolvable;
    /**
    * decimal_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#decimal_parameters QuicksightAnalysis#decimal_parameters}
    */
    readonly decimalParameters?: QuicksightAnalysisParametersDecimalParameters[] | cdktf.IResolvable;
    /**
    * integer_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#integer_parameters QuicksightAnalysis#integer_parameters}
    */
    readonly integerParameters?: QuicksightAnalysisParametersIntegerParameters[] | cdktf.IResolvable;
    /**
    * string_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#string_parameters QuicksightAnalysis#string_parameters}
    */
    readonly stringParameters?: QuicksightAnalysisParametersStringParameters[] | cdktf.IResolvable;
}
export declare function quicksightAnalysisParametersToTerraform(struct?: QuicksightAnalysisParametersOutputReference | QuicksightAnalysisParameters): any;
export declare function quicksightAnalysisParametersToHclTerraform(struct?: QuicksightAnalysisParametersOutputReference | QuicksightAnalysisParameters): any;
export declare class QuicksightAnalysisParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightAnalysisParameters | undefined;
    set internalValue(value: QuicksightAnalysisParameters | undefined);
    private _dateTimeParameters;
    get dateTimeParameters(): QuicksightAnalysisParametersDateTimeParametersList;
    putDateTimeParameters(value: QuicksightAnalysisParametersDateTimeParameters[] | cdktf.IResolvable): void;
    resetDateTimeParameters(): void;
    get dateTimeParametersInput(): cdktf.IResolvable | QuicksightAnalysisParametersDateTimeParameters[] | undefined;
    private _decimalParameters;
    get decimalParameters(): QuicksightAnalysisParametersDecimalParametersList;
    putDecimalParameters(value: QuicksightAnalysisParametersDecimalParameters[] | cdktf.IResolvable): void;
    resetDecimalParameters(): void;
    get decimalParametersInput(): cdktf.IResolvable | QuicksightAnalysisParametersDecimalParameters[] | undefined;
    private _integerParameters;
    get integerParameters(): QuicksightAnalysisParametersIntegerParametersList;
    putIntegerParameters(value: QuicksightAnalysisParametersIntegerParameters[] | cdktf.IResolvable): void;
    resetIntegerParameters(): void;
    get integerParametersInput(): cdktf.IResolvable | QuicksightAnalysisParametersIntegerParameters[] | undefined;
    private _stringParameters;
    get stringParameters(): QuicksightAnalysisParametersStringParametersList;
    putStringParameters(value: QuicksightAnalysisParametersStringParameters[] | cdktf.IResolvable): void;
    resetStringParameters(): void;
    get stringParametersInput(): cdktf.IResolvable | QuicksightAnalysisParametersStringParameters[] | undefined;
}
export interface QuicksightAnalysisPermissions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#actions QuicksightAnalysis#actions}
    */
    readonly actions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#principal QuicksightAnalysis#principal}
    */
    readonly principal: string;
}
export declare function quicksightAnalysisPermissionsToTerraform(struct?: QuicksightAnalysisPermissions | cdktf.IResolvable): any;
export declare function quicksightAnalysisPermissionsToHclTerraform(struct?: QuicksightAnalysisPermissions | cdktf.IResolvable): any;
export declare class QuicksightAnalysisPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightAnalysisPermissions | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAnalysisPermissions | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class QuicksightAnalysisPermissionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightAnalysisPermissions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightAnalysisPermissionsOutputReference;
}
export interface QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#data_set_arn QuicksightAnalysis#data_set_arn}
    */
    readonly dataSetArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#data_set_placeholder QuicksightAnalysis#data_set_placeholder}
    */
    readonly dataSetPlaceholder: string;
}
export declare function quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable): any;
export declare function quicksightAnalysisSourceEntitySourceTemplateDataSetReferencesToHclTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable): any;
export declare class QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences | cdktf.IResolvable | undefined);
    private _dataSetArn?;
    get dataSetArn(): string;
    set dataSetArn(value: string);
    get dataSetArnInput(): string | undefined;
    private _dataSetPlaceholder?;
    get dataSetPlaceholder(): string;
    set dataSetPlaceholder(value: string);
    get dataSetPlaceholderInput(): string | undefined;
}
export declare class QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesOutputReference;
}
export interface QuicksightAnalysisSourceEntitySourceTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#arn QuicksightAnalysis#arn}
    */
    readonly arn: string;
    /**
    * data_set_references block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#data_set_references QuicksightAnalysis#data_set_references}
    */
    readonly dataSetReferences: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable;
}
export declare function quicksightAnalysisSourceEntitySourceTemplateToTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateOutputReference | QuicksightAnalysisSourceEntitySourceTemplate): any;
export declare function quicksightAnalysisSourceEntitySourceTemplateToHclTerraform(struct?: QuicksightAnalysisSourceEntitySourceTemplateOutputReference | QuicksightAnalysisSourceEntitySourceTemplate): any;
export declare class QuicksightAnalysisSourceEntitySourceTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightAnalysisSourceEntitySourceTemplate | undefined;
    set internalValue(value: QuicksightAnalysisSourceEntitySourceTemplate | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _dataSetReferences;
    get dataSetReferences(): QuicksightAnalysisSourceEntitySourceTemplateDataSetReferencesList;
    putDataSetReferences(value: QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[] | cdktf.IResolvable): void;
    get dataSetReferencesInput(): cdktf.IResolvable | QuicksightAnalysisSourceEntitySourceTemplateDataSetReferences[] | undefined;
}
export interface QuicksightAnalysisSourceEntity {
    /**
    * source_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#source_template QuicksightAnalysis#source_template}
    */
    readonly sourceTemplate?: QuicksightAnalysisSourceEntitySourceTemplate;
}
export declare function quicksightAnalysisSourceEntityToTerraform(struct?: QuicksightAnalysisSourceEntityOutputReference | QuicksightAnalysisSourceEntity): any;
export declare function quicksightAnalysisSourceEntityToHclTerraform(struct?: QuicksightAnalysisSourceEntityOutputReference | QuicksightAnalysisSourceEntity): any;
export declare class QuicksightAnalysisSourceEntityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightAnalysisSourceEntity | undefined;
    set internalValue(value: QuicksightAnalysisSourceEntity | undefined);
    private _sourceTemplate;
    get sourceTemplate(): QuicksightAnalysisSourceEntitySourceTemplateOutputReference;
    putSourceTemplate(value: QuicksightAnalysisSourceEntitySourceTemplate): void;
    resetSourceTemplate(): void;
    get sourceTemplateInput(): QuicksightAnalysisSourceEntitySourceTemplate | undefined;
}
export interface QuicksightAnalysisTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#create QuicksightAnalysis#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#delete QuicksightAnalysis#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#update QuicksightAnalysis#update}
    */
    readonly update?: string;
}
export declare function quicksightAnalysisTimeoutsToTerraform(struct?: QuicksightAnalysisTimeouts | cdktf.IResolvable): any;
export declare function quicksightAnalysisTimeoutsToHclTerraform(struct?: QuicksightAnalysisTimeouts | cdktf.IResolvable): any;
export declare class QuicksightAnalysisTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QuicksightAnalysisTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightAnalysisTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis aws_quicksight_analysis}
*/
export declare class QuicksightAnalysis extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_analysis";
    /**
    * Generates CDKTF code for importing a QuicksightAnalysis resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightAnalysis to import
    * @param importFromId The id of the existing QuicksightAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightAnalysis to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_analysis aws_quicksight_analysis} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightAnalysisConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightAnalysisConfig);
    private _analysisId?;
    get analysisId(): string;
    set analysisId(value: string);
    get analysisIdInput(): string | undefined;
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get createdTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastPublishedTime(): string;
    get lastUpdatedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _recoveryWindowInDays?;
    get recoveryWindowInDays(): number;
    set recoveryWindowInDays(value: number);
    resetRecoveryWindowInDays(): void;
    get recoveryWindowInDaysInput(): number | undefined;
    get status(): string;
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
    private _themeArn?;
    get themeArn(): string;
    set themeArn(value: string);
    resetThemeArn(): void;
    get themeArnInput(): string | undefined;
    private _definition?;
    get definition(): any;
    set definition(value: any);
    resetDefinition(): void;
    get definitionInput(): any;
    private _parameters;
    get parameters(): QuicksightAnalysisParametersOutputReference;
    putParameters(value: QuicksightAnalysisParameters): void;
    resetParameters(): void;
    get parametersInput(): QuicksightAnalysisParameters | undefined;
    private _permissions;
    get permissions(): QuicksightAnalysisPermissionsList;
    putPermissions(value: QuicksightAnalysisPermissions[] | cdktf.IResolvable): void;
    resetPermissions(): void;
    get permissionsInput(): cdktf.IResolvable | QuicksightAnalysisPermissions[] | undefined;
    private _sourceEntity;
    get sourceEntity(): QuicksightAnalysisSourceEntityOutputReference;
    putSourceEntity(value: QuicksightAnalysisSourceEntity): void;
    resetSourceEntity(): void;
    get sourceEntityInput(): QuicksightAnalysisSourceEntity | undefined;
    private _timeouts;
    get timeouts(): QuicksightAnalysisTimeoutsOutputReference;
    putTimeouts(value: QuicksightAnalysisTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QuicksightAnalysisTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
