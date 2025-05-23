/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubAutomationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#description SecurityhubAutomationRule#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#is_terminal SecurityhubAutomationRule#is_terminal}
    */
    readonly isTerminal?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#rule_name SecurityhubAutomationRule#rule_name}
    */
    readonly ruleName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#rule_order SecurityhubAutomationRule#rule_order}
    */
    readonly ruleOrder: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#rule_status SecurityhubAutomationRule#rule_status}
    */
    readonly ruleStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#tags SecurityhubAutomationRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * actions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#actions SecurityhubAutomationRule#actions}
    */
    readonly actions?: SecurityhubAutomationRuleActions[] | cdktf.IResolvable;
    /**
    * criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#criteria SecurityhubAutomationRule#criteria}
    */
    readonly criteria?: SecurityhubAutomationRuleCriteria[] | cdktf.IResolvable;
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateNote {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#text SecurityhubAutomationRule#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#updated_by SecurityhubAutomationRule#updated_by}
    */
    readonly updatedBy: string;
}
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateNoteToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateNoteToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _updatedBy?;
    get updatedBy(): string;
    set updatedBy(value: string);
    get updatedByInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteOutputReference;
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#id SecurityhubAutomationRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#product_arn SecurityhubAutomationRule#product_arn}
    */
    readonly productArn: string;
}
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _productArn?;
    get productArn(): string;
    set productArn(value: string);
    get productArnInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsOutputReference;
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#label SecurityhubAutomationRule#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#product SecurityhubAutomationRule#product}
    */
    readonly product?: number;
}
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateSeverityToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateSeverityToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity | cdktf.IResolvable | undefined);
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string | undefined;
    private _product?;
    get product(): number;
    set product(value: number);
    resetProduct(): void;
    get productInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityOutputReference;
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#status SecurityhubAutomationRule#status}
    */
    readonly status?: string;
}
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateWorkflowToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateWorkflowToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow | cdktf.IResolvable | undefined);
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowOutputReference;
}
export interface SecurityhubAutomationRuleActionsFindingFieldsUpdate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#confidence SecurityhubAutomationRule#confidence}
    */
    readonly confidence?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#criticality SecurityhubAutomationRule#criticality}
    */
    readonly criticality?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#types SecurityhubAutomationRule#types}
    */
    readonly types?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#user_defined_fields SecurityhubAutomationRule#user_defined_fields}
    */
    readonly userDefinedFields?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#verification_state SecurityhubAutomationRule#verification_state}
    */
    readonly verificationState?: string;
    /**
    * note block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#note SecurityhubAutomationRule#note}
    */
    readonly note?: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote[] | cdktf.IResolvable;
    /**
    * related_findings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#related_findings SecurityhubAutomationRule#related_findings}
    */
    readonly relatedFindings?: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings[] | cdktf.IResolvable;
    /**
    * severity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#severity SecurityhubAutomationRule#severity}
    */
    readonly severity?: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity[] | cdktf.IResolvable;
    /**
    * workflow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#workflow SecurityhubAutomationRule#workflow}
    */
    readonly workflow?: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateToTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleActionsFindingFieldsUpdateToHclTerraform(struct?: SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleActionsFindingFieldsUpdate | cdktf.IResolvable | undefined);
    private _confidence?;
    get confidence(): number;
    set confidence(value: number);
    resetConfidence(): void;
    get confidenceInput(): number | undefined;
    private _criticality?;
    get criticality(): number;
    set criticality(value: number);
    resetCriticality(): void;
    get criticalityInput(): number | undefined;
    private _types?;
    get types(): string[];
    set types(value: string[]);
    resetTypes(): void;
    get typesInput(): string[] | undefined;
    private _userDefinedFields?;
    get userDefinedFields(): {
        [key: string]: string;
    };
    set userDefinedFields(value: {
        [key: string]: string;
    });
    resetUserDefinedFields(): void;
    get userDefinedFieldsInput(): {
        [key: string]: string;
    } | undefined;
    private _verificationState?;
    get verificationState(): string;
    set verificationState(value: string);
    resetVerificationState(): void;
    get verificationStateInput(): string | undefined;
    private _note;
    get note(): SecurityhubAutomationRuleActionsFindingFieldsUpdateNoteList;
    putNote(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateNote[] | cdktf.IResolvable): void;
    resetNote(): void;
    get noteInput(): cdktf.IResolvable | SecurityhubAutomationRuleActionsFindingFieldsUpdateNote[] | undefined;
    private _relatedFindings;
    get relatedFindings(): SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindingsList;
    putRelatedFindings(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings[] | cdktf.IResolvable): void;
    resetRelatedFindings(): void;
    get relatedFindingsInput(): cdktf.IResolvable | SecurityhubAutomationRuleActionsFindingFieldsUpdateRelatedFindings[] | undefined;
    private _severity;
    get severity(): SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverityList;
    putSeverity(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity[] | cdktf.IResolvable): void;
    resetSeverity(): void;
    get severityInput(): cdktf.IResolvable | SecurityhubAutomationRuleActionsFindingFieldsUpdateSeverity[] | undefined;
    private _workflow;
    get workflow(): SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflowList;
    putWorkflow(value: SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow[] | cdktf.IResolvable): void;
    resetWorkflow(): void;
    get workflowInput(): cdktf.IResolvable | SecurityhubAutomationRuleActionsFindingFieldsUpdateWorkflow[] | undefined;
}
export declare class SecurityhubAutomationRuleActionsFindingFieldsUpdateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleActionsFindingFieldsUpdate[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleActionsFindingFieldsUpdateOutputReference;
}
export interface SecurityhubAutomationRuleActions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#type SecurityhubAutomationRule#type}
    */
    readonly type?: string;
    /**
    * finding_fields_update block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#finding_fields_update SecurityhubAutomationRule#finding_fields_update}
    */
    readonly findingFieldsUpdate?: SecurityhubAutomationRuleActionsFindingFieldsUpdate[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleActionsToTerraform(struct?: SecurityhubAutomationRuleActions | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleActionsToHclTerraform(struct?: SecurityhubAutomationRuleActions | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleActions | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleActions | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _findingFieldsUpdate;
    get findingFieldsUpdate(): SecurityhubAutomationRuleActionsFindingFieldsUpdateList;
    putFindingFieldsUpdate(value: SecurityhubAutomationRuleActionsFindingFieldsUpdate[] | cdktf.IResolvable): void;
    resetFindingFieldsUpdate(): void;
    get findingFieldsUpdateInput(): cdktf.IResolvable | SecurityhubAutomationRuleActionsFindingFieldsUpdate[] | undefined;
}
export declare class SecurityhubAutomationRuleActionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleActions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleActionsOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaAwsAccountId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaAwsAccountIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountId | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaAwsAccountIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountId | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaAwsAccountIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaAwsAccountId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaAwsAccountId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaAwsAccountIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaAwsAccountId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaAwsAccountIdOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaAwsAccountName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaAwsAccountNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountName | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaAwsAccountNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaAwsAccountName | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaAwsAccountNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaAwsAccountName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaAwsAccountName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaAwsAccountNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaAwsAccountName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaAwsAccountNameOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaCompanyName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaCompanyNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaCompanyName | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaCompanyNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCompanyName | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaCompanyNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaCompanyName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaCompanyName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaCompanyNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaCompanyName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaCompanyNameOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaComplianceSecurityControlId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaComplianceSecurityControlIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaComplianceSecurityControlIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaComplianceStatus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaComplianceStatusToTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceStatus | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaComplianceStatusToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaComplianceStatus | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaComplianceStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaComplianceStatus | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaComplianceStatus | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaComplianceStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaComplianceStatus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaComplianceStatusOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaConfidence {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#eq SecurityhubAutomationRule#eq}
    */
    readonly eq?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#gt SecurityhubAutomationRule#gt}
    */
    readonly gt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#gte SecurityhubAutomationRule#gte}
    */
    readonly gte?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#lt SecurityhubAutomationRule#lt}
    */
    readonly lt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#lte SecurityhubAutomationRule#lte}
    */
    readonly lte?: number;
}
export declare function securityhubAutomationRuleCriteriaConfidenceToTerraform(struct?: SecurityhubAutomationRuleCriteriaConfidence | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaConfidenceToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaConfidence | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaConfidenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaConfidence | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaConfidence | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): number;
    set eq(value: number);
    resetEq(): void;
    get eqInput(): number | undefined;
    private _gt?;
    get gt(): number;
    set gt(value: number);
    resetGt(): void;
    get gtInput(): number | undefined;
    private _gte?;
    get gte(): number;
    set gte(value: number);
    resetGte(): void;
    get gteInput(): number | undefined;
    private _lt?;
    get lt(): number;
    set lt(value: number);
    resetLt(): void;
    get ltInput(): number | undefined;
    private _lte?;
    get lte(): number;
    set lte(value: number);
    resetLte(): void;
    get lteInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaConfidenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaConfidence[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaConfidenceOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaCreatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: number;
}
export declare function securityhubAutomationRuleCriteriaCreatedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaCreatedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaCreatedAtDateRange | cdktf.IResolvable | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaCreatedAtDateRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaCreatedAtDateRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaCreatedAtDateRangeOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaCreatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
    */
    readonly dateRange?: SecurityhubAutomationRuleCriteriaCreatedAtDateRange[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleCriteriaCreatedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAt | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaCreatedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCreatedAt | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaCreatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaCreatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaCreatedAt | cdktf.IResolvable | undefined);
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
    private _dateRange;
    get dateRange(): SecurityhubAutomationRuleCriteriaCreatedAtDateRangeList;
    putDateRange(value: SecurityhubAutomationRuleCriteriaCreatedAtDateRange[] | cdktf.IResolvable): void;
    resetDateRange(): void;
    get dateRangeInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaCreatedAtDateRange[] | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaCreatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaCreatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaCreatedAtOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaCriticality {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#eq SecurityhubAutomationRule#eq}
    */
    readonly eq?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#gt SecurityhubAutomationRule#gt}
    */
    readonly gt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#gte SecurityhubAutomationRule#gte}
    */
    readonly gte?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#lt SecurityhubAutomationRule#lt}
    */
    readonly lt?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#lte SecurityhubAutomationRule#lte}
    */
    readonly lte?: number;
}
export declare function securityhubAutomationRuleCriteriaCriticalityToTerraform(struct?: SecurityhubAutomationRuleCriteriaCriticality | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaCriticalityToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaCriticality | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaCriticalityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaCriticality | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaCriticality | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): number;
    set eq(value: number);
    resetEq(): void;
    get eqInput(): number | undefined;
    private _gt?;
    get gt(): number;
    set gt(value: number);
    resetGt(): void;
    get gtInput(): number | undefined;
    private _gte?;
    get gte(): number;
    set gte(value: number);
    resetGte(): void;
    get gteInput(): number | undefined;
    private _lt?;
    get lt(): number;
    set lt(value: number);
    resetLt(): void;
    get ltInput(): number | undefined;
    private _lte?;
    get lte(): number;
    set lte(value: number);
    resetLte(): void;
    get lteInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaCriticalityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaCriticality[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaCriticalityOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaDescription {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaDescriptionToTerraform(struct?: SecurityhubAutomationRuleCriteriaDescription | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaDescriptionToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaDescription | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaDescriptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaDescription | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaDescription | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaDescriptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaDescription[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaDescriptionOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: number;
}
export declare function securityhubAutomationRuleCriteriaFirstObservedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaFirstObservedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange | cdktf.IResolvable | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaFirstObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
    */
    readonly dateRange?: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleCriteriaFirstObservedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaFirstObservedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaFirstObservedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaFirstObservedAt | cdktf.IResolvable | undefined);
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
    private _dateRange;
    get dateRange(): SecurityhubAutomationRuleCriteriaFirstObservedAtDateRangeList;
    putDateRange(value: SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange[] | cdktf.IResolvable): void;
    resetDateRange(): void;
    get dateRangeInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaFirstObservedAtDateRange[] | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaFirstObservedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaFirstObservedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaFirstObservedAtOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaGeneratorId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaGeneratorIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaGeneratorId | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaGeneratorIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaGeneratorId | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaGeneratorIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaGeneratorId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaGeneratorId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaGeneratorIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaGeneratorId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaGeneratorIdOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaId | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaId | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaIdOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaLastObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: number;
}
export declare function securityhubAutomationRuleCriteriaLastObservedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaLastObservedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange | cdktf.IResolvable | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaLastObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
    */
    readonly dateRange?: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleCriteriaLastObservedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAt | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaLastObservedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaLastObservedAt | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaLastObservedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaLastObservedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaLastObservedAt | cdktf.IResolvable | undefined);
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
    private _dateRange;
    get dateRange(): SecurityhubAutomationRuleCriteriaLastObservedAtDateRangeList;
    putDateRange(value: SecurityhubAutomationRuleCriteriaLastObservedAtDateRange[] | cdktf.IResolvable): void;
    resetDateRange(): void;
    get dateRangeInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaLastObservedAtDateRange[] | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaLastObservedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaLastObservedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaLastObservedAtOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaNoteText {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaNoteTextToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteText | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaNoteTextToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteText | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaNoteTextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaNoteText | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaNoteText | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaNoteTextList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaNoteText[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaNoteTextOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: number;
}
export declare function securityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange | cdktf.IResolvable | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaNoteUpdatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
    */
    readonly dateRange?: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleCriteriaNoteUpdatedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaNoteUpdatedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaNoteUpdatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAt | cdktf.IResolvable | undefined);
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
    private _dateRange;
    get dateRange(): SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRangeList;
    putDateRange(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange[] | cdktf.IResolvable): void;
    resetDateRange(): void;
    get dateRangeInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaNoteUpdatedAtDateRange[] | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaNoteUpdatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaNoteUpdatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaNoteUpdatedAtOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaNoteUpdatedBy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaNoteUpdatedByToTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaNoteUpdatedByToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaNoteUpdatedByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaNoteUpdatedBy | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaNoteUpdatedByList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaNoteUpdatedBy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaNoteUpdatedByOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaProductArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaProductArnToTerraform(struct?: SecurityhubAutomationRuleCriteriaProductArn | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaProductArnToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaProductArn | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaProductArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaProductArn | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaProductArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaProductArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaProductArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaProductArnOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaProductName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaProductNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaProductName | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaProductNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaProductName | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaProductNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaProductName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaProductName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaProductNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaProductName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaProductNameOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaRecordState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaRecordStateToTerraform(struct?: SecurityhubAutomationRuleCriteriaRecordState | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaRecordStateToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaRecordState | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaRecordStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaRecordState | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaRecordState | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaRecordStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaRecordState[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaRecordStateOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaRelatedFindingsId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaRelatedFindingsIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaRelatedFindingsIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaRelatedFindingsIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaRelatedFindingsId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaRelatedFindingsIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaRelatedFindingsId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaRelatedFindingsIdOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaRelatedFindingsProductArnToTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaRelatedFindingsProductArnToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourceApplicationArn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourceApplicationArnToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourceApplicationArnToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourceApplicationArnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourceApplicationArn | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourceApplicationArnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourceApplicationArn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourceApplicationArnOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourceApplicationName {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourceApplicationNameToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourceApplicationNameToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourceApplicationNameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourceApplicationName | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourceApplicationNameList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourceApplicationName[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourceApplicationNameOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourceDetailsOther {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#key SecurityhubAutomationRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourceDetailsOtherToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourceDetailsOtherToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourceDetailsOtherOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourceDetailsOther | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourceDetailsOtherList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourceDetailsOther[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourceDetailsOtherOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourceId {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourceIdToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceId | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourceIdToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceId | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourceIdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourceId | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourceId | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourceIdList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourceId[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourceIdOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourcePartition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourcePartitionToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourcePartition | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourcePartitionToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourcePartition | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourcePartitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourcePartition | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourcePartition | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourcePartitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourcePartition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourcePartitionOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourceRegion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourceRegionToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceRegion | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourceRegionToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceRegion | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourceRegionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourceRegion | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourceRegion | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourceRegionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourceRegion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourceRegionOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourceTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#key SecurityhubAutomationRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourceTagsToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceTags | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourceTagsToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceTags | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourceTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourceTags | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourceTags | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourceTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourceTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourceTagsOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaResourceType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaResourceTypeToTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceType | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaResourceTypeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaResourceType | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaResourceTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaResourceType | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaResourceType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaResourceTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaResourceType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaResourceTypeOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaSeverityLabel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaSeverityLabelToTerraform(struct?: SecurityhubAutomationRuleCriteriaSeverityLabel | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaSeverityLabelToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaSeverityLabel | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaSeverityLabelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaSeverityLabel | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaSeverityLabel | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaSeverityLabelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaSeverityLabel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaSeverityLabelOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaSourceUrl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaSourceUrlToTerraform(struct?: SecurityhubAutomationRuleCriteriaSourceUrl | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaSourceUrlToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaSourceUrl | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaSourceUrlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaSourceUrl | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaSourceUrl | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaSourceUrlList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaSourceUrl[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaSourceUrlOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaTitle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaTitleToTerraform(struct?: SecurityhubAutomationRuleCriteriaTitle | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaTitleToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaTitle | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaTitleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaTitle | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaTitle | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaTitleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaTitle[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaTitleOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaType {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaTypeToTerraform(struct?: SecurityhubAutomationRuleCriteriaType | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaTypeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaType | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaTypeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaType | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaType | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaTypeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaType[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaTypeOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaUpdatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#unit SecurityhubAutomationRule#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: number;
}
export declare function securityhubAutomationRuleCriteriaUpdatedAtDateRangeToTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaUpdatedAtDateRangeToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange | cdktf.IResolvable | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaUpdatedAt {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#end SecurityhubAutomationRule#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#start SecurityhubAutomationRule#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#date_range SecurityhubAutomationRule#date_range}
    */
    readonly dateRange?: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleCriteriaUpdatedAtToTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAt | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaUpdatedAtToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaUpdatedAt | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaUpdatedAtOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaUpdatedAt | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaUpdatedAt | cdktf.IResolvable | undefined);
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
    private _dateRange;
    get dateRange(): SecurityhubAutomationRuleCriteriaUpdatedAtDateRangeList;
    putDateRange(value: SecurityhubAutomationRuleCriteriaUpdatedAtDateRange[] | cdktf.IResolvable): void;
    resetDateRange(): void;
    get dateRangeInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaUpdatedAtDateRange[] | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaUpdatedAtList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaUpdatedAt[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaUpdatedAtOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaUserDefinedFields {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#key SecurityhubAutomationRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaUserDefinedFieldsToTerraform(struct?: SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaUserDefinedFieldsToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaUserDefinedFieldsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaUserDefinedFields | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaUserDefinedFieldsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaUserDefinedFields[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaUserDefinedFieldsOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaVerificationState {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaVerificationStateToTerraform(struct?: SecurityhubAutomationRuleCriteriaVerificationState | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaVerificationStateToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaVerificationState | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaVerificationStateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaVerificationState | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaVerificationState | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaVerificationStateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaVerificationState[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaVerificationStateOutputReference;
}
export interface SecurityhubAutomationRuleCriteriaWorkflowStatus {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#comparison SecurityhubAutomationRule#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#value SecurityhubAutomationRule#value}
    */
    readonly value: string;
}
export declare function securityhubAutomationRuleCriteriaWorkflowStatusToTerraform(struct?: SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaWorkflowStatusToHclTerraform(struct?: SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaWorkflowStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteriaWorkflowStatus | cdktf.IResolvable | undefined);
    private _comparison?;
    get comparison(): string;
    set comparison(value: string);
    get comparisonInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaWorkflowStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteriaWorkflowStatus[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaWorkflowStatusOutputReference;
}
export interface SecurityhubAutomationRuleCriteria {
    /**
    * aws_account_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#aws_account_id SecurityhubAutomationRule#aws_account_id}
    */
    readonly awsAccountId?: SecurityhubAutomationRuleCriteriaAwsAccountId[] | cdktf.IResolvable;
    /**
    * aws_account_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#aws_account_name SecurityhubAutomationRule#aws_account_name}
    */
    readonly awsAccountName?: SecurityhubAutomationRuleCriteriaAwsAccountName[] | cdktf.IResolvable;
    /**
    * company_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#company_name SecurityhubAutomationRule#company_name}
    */
    readonly companyName?: SecurityhubAutomationRuleCriteriaCompanyName[] | cdktf.IResolvable;
    /**
    * compliance_associated_standards_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#compliance_associated_standards_id SecurityhubAutomationRule#compliance_associated_standards_id}
    */
    readonly complianceAssociatedStandardsId?: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId[] | cdktf.IResolvable;
    /**
    * compliance_security_control_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#compliance_security_control_id SecurityhubAutomationRule#compliance_security_control_id}
    */
    readonly complianceSecurityControlId?: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId[] | cdktf.IResolvable;
    /**
    * compliance_status block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#compliance_status SecurityhubAutomationRule#compliance_status}
    */
    readonly complianceStatus?: SecurityhubAutomationRuleCriteriaComplianceStatus[] | cdktf.IResolvable;
    /**
    * confidence block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#confidence SecurityhubAutomationRule#confidence}
    */
    readonly confidence?: SecurityhubAutomationRuleCriteriaConfidence[] | cdktf.IResolvable;
    /**
    * created_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#created_at SecurityhubAutomationRule#created_at}
    */
    readonly createdAt?: SecurityhubAutomationRuleCriteriaCreatedAt[] | cdktf.IResolvable;
    /**
    * criticality block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#criticality SecurityhubAutomationRule#criticality}
    */
    readonly criticality?: SecurityhubAutomationRuleCriteriaCriticality[] | cdktf.IResolvable;
    /**
    * description block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#description SecurityhubAutomationRule#description}
    */
    readonly description?: SecurityhubAutomationRuleCriteriaDescription[] | cdktf.IResolvable;
    /**
    * first_observed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#first_observed_at SecurityhubAutomationRule#first_observed_at}
    */
    readonly firstObservedAt?: SecurityhubAutomationRuleCriteriaFirstObservedAt[] | cdktf.IResolvable;
    /**
    * generator_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#generator_id SecurityhubAutomationRule#generator_id}
    */
    readonly generatorId?: SecurityhubAutomationRuleCriteriaGeneratorId[] | cdktf.IResolvable;
    /**
    * id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#id SecurityhubAutomationRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: SecurityhubAutomationRuleCriteriaId[] | cdktf.IResolvable;
    /**
    * last_observed_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#last_observed_at SecurityhubAutomationRule#last_observed_at}
    */
    readonly lastObservedAt?: SecurityhubAutomationRuleCriteriaLastObservedAt[] | cdktf.IResolvable;
    /**
    * note_text block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#note_text SecurityhubAutomationRule#note_text}
    */
    readonly noteText?: SecurityhubAutomationRuleCriteriaNoteText[] | cdktf.IResolvable;
    /**
    * note_updated_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#note_updated_at SecurityhubAutomationRule#note_updated_at}
    */
    readonly noteUpdatedAt?: SecurityhubAutomationRuleCriteriaNoteUpdatedAt[] | cdktf.IResolvable;
    /**
    * note_updated_by block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#note_updated_by SecurityhubAutomationRule#note_updated_by}
    */
    readonly noteUpdatedBy?: SecurityhubAutomationRuleCriteriaNoteUpdatedBy[] | cdktf.IResolvable;
    /**
    * product_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#product_arn SecurityhubAutomationRule#product_arn}
    */
    readonly productArn?: SecurityhubAutomationRuleCriteriaProductArn[] | cdktf.IResolvable;
    /**
    * product_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#product_name SecurityhubAutomationRule#product_name}
    */
    readonly productName?: SecurityhubAutomationRuleCriteriaProductName[] | cdktf.IResolvable;
    /**
    * record_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#record_state SecurityhubAutomationRule#record_state}
    */
    readonly recordState?: SecurityhubAutomationRuleCriteriaRecordState[] | cdktf.IResolvable;
    /**
    * related_findings_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#related_findings_id SecurityhubAutomationRule#related_findings_id}
    */
    readonly relatedFindingsId?: SecurityhubAutomationRuleCriteriaRelatedFindingsId[] | cdktf.IResolvable;
    /**
    * related_findings_product_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#related_findings_product_arn SecurityhubAutomationRule#related_findings_product_arn}
    */
    readonly relatedFindingsProductArn?: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn[] | cdktf.IResolvable;
    /**
    * resource_application_arn block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_application_arn SecurityhubAutomationRule#resource_application_arn}
    */
    readonly resourceApplicationArn?: SecurityhubAutomationRuleCriteriaResourceApplicationArn[] | cdktf.IResolvable;
    /**
    * resource_application_name block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_application_name SecurityhubAutomationRule#resource_application_name}
    */
    readonly resourceApplicationName?: SecurityhubAutomationRuleCriteriaResourceApplicationName[] | cdktf.IResolvable;
    /**
    * resource_details_other block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_details_other SecurityhubAutomationRule#resource_details_other}
    */
    readonly resourceDetailsOther?: SecurityhubAutomationRuleCriteriaResourceDetailsOther[] | cdktf.IResolvable;
    /**
    * resource_id block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_id SecurityhubAutomationRule#resource_id}
    */
    readonly resourceId?: SecurityhubAutomationRuleCriteriaResourceId[] | cdktf.IResolvable;
    /**
    * resource_partition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_partition SecurityhubAutomationRule#resource_partition}
    */
    readonly resourcePartition?: SecurityhubAutomationRuleCriteriaResourcePartition[] | cdktf.IResolvable;
    /**
    * resource_region block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_region SecurityhubAutomationRule#resource_region}
    */
    readonly resourceRegion?: SecurityhubAutomationRuleCriteriaResourceRegion[] | cdktf.IResolvable;
    /**
    * resource_tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_tags SecurityhubAutomationRule#resource_tags}
    */
    readonly resourceTags?: SecurityhubAutomationRuleCriteriaResourceTags[] | cdktf.IResolvable;
    /**
    * resource_type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#resource_type SecurityhubAutomationRule#resource_type}
    */
    readonly resourceType?: SecurityhubAutomationRuleCriteriaResourceType[] | cdktf.IResolvable;
    /**
    * severity_label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#severity_label SecurityhubAutomationRule#severity_label}
    */
    readonly severityLabel?: SecurityhubAutomationRuleCriteriaSeverityLabel[] | cdktf.IResolvable;
    /**
    * source_url block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#source_url SecurityhubAutomationRule#source_url}
    */
    readonly sourceUrl?: SecurityhubAutomationRuleCriteriaSourceUrl[] | cdktf.IResolvable;
    /**
    * title block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#title SecurityhubAutomationRule#title}
    */
    readonly title?: SecurityhubAutomationRuleCriteriaTitle[] | cdktf.IResolvable;
    /**
    * type block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#type SecurityhubAutomationRule#type}
    */
    readonly type?: SecurityhubAutomationRuleCriteriaType[] | cdktf.IResolvable;
    /**
    * updated_at block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#updated_at SecurityhubAutomationRule#updated_at}
    */
    readonly updatedAt?: SecurityhubAutomationRuleCriteriaUpdatedAt[] | cdktf.IResolvable;
    /**
    * user_defined_fields block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#user_defined_fields SecurityhubAutomationRule#user_defined_fields}
    */
    readonly userDefinedFields?: SecurityhubAutomationRuleCriteriaUserDefinedFields[] | cdktf.IResolvable;
    /**
    * verification_state block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#verification_state SecurityhubAutomationRule#verification_state}
    */
    readonly verificationState?: SecurityhubAutomationRuleCriteriaVerificationState[] | cdktf.IResolvable;
    /**
    * workflow_status block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#workflow_status SecurityhubAutomationRule#workflow_status}
    */
    readonly workflowStatus?: SecurityhubAutomationRuleCriteriaWorkflowStatus[] | cdktf.IResolvable;
}
export declare function securityhubAutomationRuleCriteriaToTerraform(struct?: SecurityhubAutomationRuleCriteria | cdktf.IResolvable): any;
export declare function securityhubAutomationRuleCriteriaToHclTerraform(struct?: SecurityhubAutomationRuleCriteria | cdktf.IResolvable): any;
export declare class SecurityhubAutomationRuleCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecurityhubAutomationRuleCriteria | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityhubAutomationRuleCriteria | cdktf.IResolvable | undefined);
    private _awsAccountId;
    get awsAccountId(): SecurityhubAutomationRuleCriteriaAwsAccountIdList;
    putAwsAccountId(value: SecurityhubAutomationRuleCriteriaAwsAccountId[] | cdktf.IResolvable): void;
    resetAwsAccountId(): void;
    get awsAccountIdInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaAwsAccountId[] | undefined;
    private _awsAccountName;
    get awsAccountName(): SecurityhubAutomationRuleCriteriaAwsAccountNameList;
    putAwsAccountName(value: SecurityhubAutomationRuleCriteriaAwsAccountName[] | cdktf.IResolvable): void;
    resetAwsAccountName(): void;
    get awsAccountNameInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaAwsAccountName[] | undefined;
    private _companyName;
    get companyName(): SecurityhubAutomationRuleCriteriaCompanyNameList;
    putCompanyName(value: SecurityhubAutomationRuleCriteriaCompanyName[] | cdktf.IResolvable): void;
    resetCompanyName(): void;
    get companyNameInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaCompanyName[] | undefined;
    private _complianceAssociatedStandardsId;
    get complianceAssociatedStandardsId(): SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsIdList;
    putComplianceAssociatedStandardsId(value: SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId[] | cdktf.IResolvable): void;
    resetComplianceAssociatedStandardsId(): void;
    get complianceAssociatedStandardsIdInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaComplianceAssociatedStandardsId[] | undefined;
    private _complianceSecurityControlId;
    get complianceSecurityControlId(): SecurityhubAutomationRuleCriteriaComplianceSecurityControlIdList;
    putComplianceSecurityControlId(value: SecurityhubAutomationRuleCriteriaComplianceSecurityControlId[] | cdktf.IResolvable): void;
    resetComplianceSecurityControlId(): void;
    get complianceSecurityControlIdInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaComplianceSecurityControlId[] | undefined;
    private _complianceStatus;
    get complianceStatus(): SecurityhubAutomationRuleCriteriaComplianceStatusList;
    putComplianceStatus(value: SecurityhubAutomationRuleCriteriaComplianceStatus[] | cdktf.IResolvable): void;
    resetComplianceStatus(): void;
    get complianceStatusInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaComplianceStatus[] | undefined;
    private _confidence;
    get confidence(): SecurityhubAutomationRuleCriteriaConfidenceList;
    putConfidence(value: SecurityhubAutomationRuleCriteriaConfidence[] | cdktf.IResolvable): void;
    resetConfidence(): void;
    get confidenceInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaConfidence[] | undefined;
    private _createdAt;
    get createdAt(): SecurityhubAutomationRuleCriteriaCreatedAtList;
    putCreatedAt(value: SecurityhubAutomationRuleCriteriaCreatedAt[] | cdktf.IResolvable): void;
    resetCreatedAt(): void;
    get createdAtInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaCreatedAt[] | undefined;
    private _criticality;
    get criticality(): SecurityhubAutomationRuleCriteriaCriticalityList;
    putCriticality(value: SecurityhubAutomationRuleCriteriaCriticality[] | cdktf.IResolvable): void;
    resetCriticality(): void;
    get criticalityInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaCriticality[] | undefined;
    private _description;
    get description(): SecurityhubAutomationRuleCriteriaDescriptionList;
    putDescription(value: SecurityhubAutomationRuleCriteriaDescription[] | cdktf.IResolvable): void;
    resetDescription(): void;
    get descriptionInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaDescription[] | undefined;
    private _firstObservedAt;
    get firstObservedAt(): SecurityhubAutomationRuleCriteriaFirstObservedAtList;
    putFirstObservedAt(value: SecurityhubAutomationRuleCriteriaFirstObservedAt[] | cdktf.IResolvable): void;
    resetFirstObservedAt(): void;
    get firstObservedAtInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaFirstObservedAt[] | undefined;
    private _generatorId;
    get generatorId(): SecurityhubAutomationRuleCriteriaGeneratorIdList;
    putGeneratorId(value: SecurityhubAutomationRuleCriteriaGeneratorId[] | cdktf.IResolvable): void;
    resetGeneratorId(): void;
    get generatorIdInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaGeneratorId[] | undefined;
    private _id;
    get id(): SecurityhubAutomationRuleCriteriaIdList;
    putId(value: SecurityhubAutomationRuleCriteriaId[] | cdktf.IResolvable): void;
    resetId(): void;
    get idInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaId[] | undefined;
    private _lastObservedAt;
    get lastObservedAt(): SecurityhubAutomationRuleCriteriaLastObservedAtList;
    putLastObservedAt(value: SecurityhubAutomationRuleCriteriaLastObservedAt[] | cdktf.IResolvable): void;
    resetLastObservedAt(): void;
    get lastObservedAtInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaLastObservedAt[] | undefined;
    private _noteText;
    get noteText(): SecurityhubAutomationRuleCriteriaNoteTextList;
    putNoteText(value: SecurityhubAutomationRuleCriteriaNoteText[] | cdktf.IResolvable): void;
    resetNoteText(): void;
    get noteTextInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaNoteText[] | undefined;
    private _noteUpdatedAt;
    get noteUpdatedAt(): SecurityhubAutomationRuleCriteriaNoteUpdatedAtList;
    putNoteUpdatedAt(value: SecurityhubAutomationRuleCriteriaNoteUpdatedAt[] | cdktf.IResolvable): void;
    resetNoteUpdatedAt(): void;
    get noteUpdatedAtInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaNoteUpdatedAt[] | undefined;
    private _noteUpdatedBy;
    get noteUpdatedBy(): SecurityhubAutomationRuleCriteriaNoteUpdatedByList;
    putNoteUpdatedBy(value: SecurityhubAutomationRuleCriteriaNoteUpdatedBy[] | cdktf.IResolvable): void;
    resetNoteUpdatedBy(): void;
    get noteUpdatedByInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaNoteUpdatedBy[] | undefined;
    private _productArn;
    get productArn(): SecurityhubAutomationRuleCriteriaProductArnList;
    putProductArn(value: SecurityhubAutomationRuleCriteriaProductArn[] | cdktf.IResolvable): void;
    resetProductArn(): void;
    get productArnInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaProductArn[] | undefined;
    private _productName;
    get productName(): SecurityhubAutomationRuleCriteriaProductNameList;
    putProductName(value: SecurityhubAutomationRuleCriteriaProductName[] | cdktf.IResolvable): void;
    resetProductName(): void;
    get productNameInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaProductName[] | undefined;
    private _recordState;
    get recordState(): SecurityhubAutomationRuleCriteriaRecordStateList;
    putRecordState(value: SecurityhubAutomationRuleCriteriaRecordState[] | cdktf.IResolvable): void;
    resetRecordState(): void;
    get recordStateInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaRecordState[] | undefined;
    private _relatedFindingsId;
    get relatedFindingsId(): SecurityhubAutomationRuleCriteriaRelatedFindingsIdList;
    putRelatedFindingsId(value: SecurityhubAutomationRuleCriteriaRelatedFindingsId[] | cdktf.IResolvable): void;
    resetRelatedFindingsId(): void;
    get relatedFindingsIdInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaRelatedFindingsId[] | undefined;
    private _relatedFindingsProductArn;
    get relatedFindingsProductArn(): SecurityhubAutomationRuleCriteriaRelatedFindingsProductArnList;
    putRelatedFindingsProductArn(value: SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn[] | cdktf.IResolvable): void;
    resetRelatedFindingsProductArn(): void;
    get relatedFindingsProductArnInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaRelatedFindingsProductArn[] | undefined;
    private _resourceApplicationArn;
    get resourceApplicationArn(): SecurityhubAutomationRuleCriteriaResourceApplicationArnList;
    putResourceApplicationArn(value: SecurityhubAutomationRuleCriteriaResourceApplicationArn[] | cdktf.IResolvable): void;
    resetResourceApplicationArn(): void;
    get resourceApplicationArnInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourceApplicationArn[] | undefined;
    private _resourceApplicationName;
    get resourceApplicationName(): SecurityhubAutomationRuleCriteriaResourceApplicationNameList;
    putResourceApplicationName(value: SecurityhubAutomationRuleCriteriaResourceApplicationName[] | cdktf.IResolvable): void;
    resetResourceApplicationName(): void;
    get resourceApplicationNameInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourceApplicationName[] | undefined;
    private _resourceDetailsOther;
    get resourceDetailsOther(): SecurityhubAutomationRuleCriteriaResourceDetailsOtherList;
    putResourceDetailsOther(value: SecurityhubAutomationRuleCriteriaResourceDetailsOther[] | cdktf.IResolvable): void;
    resetResourceDetailsOther(): void;
    get resourceDetailsOtherInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourceDetailsOther[] | undefined;
    private _resourceId;
    get resourceId(): SecurityhubAutomationRuleCriteriaResourceIdList;
    putResourceId(value: SecurityhubAutomationRuleCriteriaResourceId[] | cdktf.IResolvable): void;
    resetResourceId(): void;
    get resourceIdInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourceId[] | undefined;
    private _resourcePartition;
    get resourcePartition(): SecurityhubAutomationRuleCriteriaResourcePartitionList;
    putResourcePartition(value: SecurityhubAutomationRuleCriteriaResourcePartition[] | cdktf.IResolvable): void;
    resetResourcePartition(): void;
    get resourcePartitionInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourcePartition[] | undefined;
    private _resourceRegion;
    get resourceRegion(): SecurityhubAutomationRuleCriteriaResourceRegionList;
    putResourceRegion(value: SecurityhubAutomationRuleCriteriaResourceRegion[] | cdktf.IResolvable): void;
    resetResourceRegion(): void;
    get resourceRegionInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourceRegion[] | undefined;
    private _resourceTags;
    get resourceTags(): SecurityhubAutomationRuleCriteriaResourceTagsList;
    putResourceTags(value: SecurityhubAutomationRuleCriteriaResourceTags[] | cdktf.IResolvable): void;
    resetResourceTags(): void;
    get resourceTagsInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourceTags[] | undefined;
    private _resourceType;
    get resourceType(): SecurityhubAutomationRuleCriteriaResourceTypeList;
    putResourceType(value: SecurityhubAutomationRuleCriteriaResourceType[] | cdktf.IResolvable): void;
    resetResourceType(): void;
    get resourceTypeInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaResourceType[] | undefined;
    private _severityLabel;
    get severityLabel(): SecurityhubAutomationRuleCriteriaSeverityLabelList;
    putSeverityLabel(value: SecurityhubAutomationRuleCriteriaSeverityLabel[] | cdktf.IResolvable): void;
    resetSeverityLabel(): void;
    get severityLabelInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaSeverityLabel[] | undefined;
    private _sourceUrl;
    get sourceUrl(): SecurityhubAutomationRuleCriteriaSourceUrlList;
    putSourceUrl(value: SecurityhubAutomationRuleCriteriaSourceUrl[] | cdktf.IResolvable): void;
    resetSourceUrl(): void;
    get sourceUrlInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaSourceUrl[] | undefined;
    private _title;
    get title(): SecurityhubAutomationRuleCriteriaTitleList;
    putTitle(value: SecurityhubAutomationRuleCriteriaTitle[] | cdktf.IResolvable): void;
    resetTitle(): void;
    get titleInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaTitle[] | undefined;
    private _type;
    get type(): SecurityhubAutomationRuleCriteriaTypeList;
    putType(value: SecurityhubAutomationRuleCriteriaType[] | cdktf.IResolvable): void;
    resetType(): void;
    get typeInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaType[] | undefined;
    private _updatedAt;
    get updatedAt(): SecurityhubAutomationRuleCriteriaUpdatedAtList;
    putUpdatedAt(value: SecurityhubAutomationRuleCriteriaUpdatedAt[] | cdktf.IResolvable): void;
    resetUpdatedAt(): void;
    get updatedAtInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaUpdatedAt[] | undefined;
    private _userDefinedFields;
    get userDefinedFields(): SecurityhubAutomationRuleCriteriaUserDefinedFieldsList;
    putUserDefinedFields(value: SecurityhubAutomationRuleCriteriaUserDefinedFields[] | cdktf.IResolvable): void;
    resetUserDefinedFields(): void;
    get userDefinedFieldsInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaUserDefinedFields[] | undefined;
    private _verificationState;
    get verificationState(): SecurityhubAutomationRuleCriteriaVerificationStateList;
    putVerificationState(value: SecurityhubAutomationRuleCriteriaVerificationState[] | cdktf.IResolvable): void;
    resetVerificationState(): void;
    get verificationStateInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaVerificationState[] | undefined;
    private _workflowStatus;
    get workflowStatus(): SecurityhubAutomationRuleCriteriaWorkflowStatusList;
    putWorkflowStatus(value: SecurityhubAutomationRuleCriteriaWorkflowStatus[] | cdktf.IResolvable): void;
    resetWorkflowStatus(): void;
    get workflowStatusInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteriaWorkflowStatus[] | undefined;
}
export declare class SecurityhubAutomationRuleCriteriaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecurityhubAutomationRuleCriteria[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecurityhubAutomationRuleCriteriaOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule aws_securityhub_automation_rule}
*/
export declare class SecurityhubAutomationRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_automation_rule";
    /**
    * Generates CDKTF code for importing a SecurityhubAutomationRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubAutomationRule to import
    * @param importFromId The id of the existing SecurityhubAutomationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubAutomationRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_automation_rule aws_securityhub_automation_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubAutomationRuleConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubAutomationRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
    get id(): string;
    private _isTerminal?;
    get isTerminal(): boolean | cdktf.IResolvable;
    set isTerminal(value: boolean | cdktf.IResolvable);
    resetIsTerminal(): void;
    get isTerminalInput(): boolean | cdktf.IResolvable | undefined;
    private _ruleName?;
    get ruleName(): string;
    set ruleName(value: string);
    get ruleNameInput(): string | undefined;
    private _ruleOrder?;
    get ruleOrder(): number;
    set ruleOrder(value: number);
    get ruleOrderInput(): number | undefined;
    private _ruleStatus?;
    get ruleStatus(): string;
    set ruleStatus(value: string);
    resetRuleStatus(): void;
    get ruleStatusInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _actions;
    get actions(): SecurityhubAutomationRuleActionsList;
    putActions(value: SecurityhubAutomationRuleActions[] | cdktf.IResolvable): void;
    resetActions(): void;
    get actionsInput(): cdktf.IResolvable | SecurityhubAutomationRuleActions[] | undefined;
    private _criteria;
    get criteria(): SecurityhubAutomationRuleCriteriaList;
    putCriteria(value: SecurityhubAutomationRuleCriteria[] | cdktf.IResolvable): void;
    resetCriteria(): void;
    get criteriaInput(): cdktf.IResolvable | SecurityhubAutomationRuleCriteria[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
