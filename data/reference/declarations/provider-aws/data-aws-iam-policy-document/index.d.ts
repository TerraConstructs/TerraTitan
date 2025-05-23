/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#id DataAwsIamPolicyDocument#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#override_json DataAwsIamPolicyDocument#override_json}
    */
    readonly overrideJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#override_policy_documents DataAwsIamPolicyDocument#override_policy_documents}
    */
    readonly overridePolicyDocuments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#policy_id DataAwsIamPolicyDocument#policy_id}
    */
    readonly policyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#source_json DataAwsIamPolicyDocument#source_json}
    */
    readonly sourceJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#source_policy_documents DataAwsIamPolicyDocument#source_policy_documents}
    */
    readonly sourcePolicyDocuments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#version DataAwsIamPolicyDocument#version}
    */
    readonly version?: string;
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#statement DataAwsIamPolicyDocument#statement}
    */
    readonly statement?: DataAwsIamPolicyDocumentStatement[] | cdktf.IResolvable;
}
export interface DataAwsIamPolicyDocumentStatementCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#test DataAwsIamPolicyDocument#test}
    */
    readonly test: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#values DataAwsIamPolicyDocument#values}
    */
    readonly values: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#variable DataAwsIamPolicyDocument#variable}
    */
    readonly variable: string;
}
export declare function dataAwsIamPolicyDocumentStatementConditionToTerraform(struct?: DataAwsIamPolicyDocumentStatementCondition | cdktf.IResolvable): any;
export declare function dataAwsIamPolicyDocumentStatementConditionToHclTerraform(struct?: DataAwsIamPolicyDocumentStatementCondition | cdktf.IResolvable): any;
export declare class DataAwsIamPolicyDocumentStatementConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamPolicyDocumentStatementCondition | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsIamPolicyDocumentStatementCondition | cdktf.IResolvable | undefined);
    private _test?;
    get test(): string;
    set test(value: string);
    get testInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
    private _variable?;
    get variable(): string;
    set variable(value: string);
    get variableInput(): string | undefined;
}
export declare class DataAwsIamPolicyDocumentStatementConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsIamPolicyDocumentStatementCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamPolicyDocumentStatementConditionOutputReference;
}
export interface DataAwsIamPolicyDocumentStatementNotPrincipals {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}
    */
    readonly identifiers: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#type DataAwsIamPolicyDocument#type}
    */
    readonly type: string;
}
export declare function dataAwsIamPolicyDocumentStatementNotPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementNotPrincipals | cdktf.IResolvable): any;
export declare function dataAwsIamPolicyDocumentStatementNotPrincipalsToHclTerraform(struct?: DataAwsIamPolicyDocumentStatementNotPrincipals | cdktf.IResolvable): any;
export declare class DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamPolicyDocumentStatementNotPrincipals | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsIamPolicyDocumentStatementNotPrincipals | cdktf.IResolvable | undefined);
    private _identifiers?;
    get identifiers(): string[];
    set identifiers(value: string[]);
    get identifiersInput(): string[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class DataAwsIamPolicyDocumentStatementNotPrincipalsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsIamPolicyDocumentStatementNotPrincipals[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamPolicyDocumentStatementNotPrincipalsOutputReference;
}
export interface DataAwsIamPolicyDocumentStatementPrincipals {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#identifiers DataAwsIamPolicyDocument#identifiers}
    */
    readonly identifiers: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#type DataAwsIamPolicyDocument#type}
    */
    readonly type: string;
}
export declare function dataAwsIamPolicyDocumentStatementPrincipalsToTerraform(struct?: DataAwsIamPolicyDocumentStatementPrincipals | cdktf.IResolvable): any;
export declare function dataAwsIamPolicyDocumentStatementPrincipalsToHclTerraform(struct?: DataAwsIamPolicyDocumentStatementPrincipals | cdktf.IResolvable): any;
export declare class DataAwsIamPolicyDocumentStatementPrincipalsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamPolicyDocumentStatementPrincipals | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsIamPolicyDocumentStatementPrincipals | cdktf.IResolvable | undefined);
    private _identifiers?;
    get identifiers(): string[];
    set identifiers(value: string[]);
    get identifiersInput(): string[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class DataAwsIamPolicyDocumentStatementPrincipalsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsIamPolicyDocumentStatementPrincipals[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamPolicyDocumentStatementPrincipalsOutputReference;
}
export interface DataAwsIamPolicyDocumentStatement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#actions DataAwsIamPolicyDocument#actions}
    */
    readonly actions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#effect DataAwsIamPolicyDocument#effect}
    */
    readonly effect?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#not_actions DataAwsIamPolicyDocument#not_actions}
    */
    readonly notActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#not_resources DataAwsIamPolicyDocument#not_resources}
    */
    readonly notResources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#resources DataAwsIamPolicyDocument#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#sid DataAwsIamPolicyDocument#sid}
    */
    readonly sid?: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#condition DataAwsIamPolicyDocument#condition}
    */
    readonly condition?: DataAwsIamPolicyDocumentStatementCondition[] | cdktf.IResolvable;
    /**
    * not_principals block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#not_principals DataAwsIamPolicyDocument#not_principals}
    */
    readonly notPrincipals?: DataAwsIamPolicyDocumentStatementNotPrincipals[] | cdktf.IResolvable;
    /**
    * principals block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#principals DataAwsIamPolicyDocument#principals}
    */
    readonly principals?: DataAwsIamPolicyDocumentStatementPrincipals[] | cdktf.IResolvable;
}
export declare function dataAwsIamPolicyDocumentStatementToTerraform(struct?: DataAwsIamPolicyDocumentStatement | cdktf.IResolvable): any;
export declare function dataAwsIamPolicyDocumentStatementToHclTerraform(struct?: DataAwsIamPolicyDocumentStatement | cdktf.IResolvable): any;
export declare class DataAwsIamPolicyDocumentStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamPolicyDocumentStatement | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsIamPolicyDocumentStatement | cdktf.IResolvable | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    resetActions(): void;
    get actionsInput(): string[] | undefined;
    private _effect?;
    get effect(): string;
    set effect(value: string);
    resetEffect(): void;
    get effectInput(): string | undefined;
    private _notActions?;
    get notActions(): string[];
    set notActions(value: string[]);
    resetNotActions(): void;
    get notActionsInput(): string[] | undefined;
    private _notResources?;
    get notResources(): string[];
    set notResources(value: string[]);
    resetNotResources(): void;
    get notResourcesInput(): string[] | undefined;
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    resetResources(): void;
    get resourcesInput(): string[] | undefined;
    private _sid?;
    get sid(): string;
    set sid(value: string);
    resetSid(): void;
    get sidInput(): string | undefined;
    private _condition;
    get condition(): DataAwsIamPolicyDocumentStatementConditionList;
    putCondition(value: DataAwsIamPolicyDocumentStatementCondition[] | cdktf.IResolvable): void;
    resetCondition(): void;
    get conditionInput(): cdktf.IResolvable | DataAwsIamPolicyDocumentStatementCondition[] | undefined;
    private _notPrincipals;
    get notPrincipals(): DataAwsIamPolicyDocumentStatementNotPrincipalsList;
    putNotPrincipals(value: DataAwsIamPolicyDocumentStatementNotPrincipals[] | cdktf.IResolvable): void;
    resetNotPrincipals(): void;
    get notPrincipalsInput(): cdktf.IResolvable | DataAwsIamPolicyDocumentStatementNotPrincipals[] | undefined;
    private _principals;
    get principals(): DataAwsIamPolicyDocumentStatementPrincipalsList;
    putPrincipals(value: DataAwsIamPolicyDocumentStatementPrincipals[] | cdktf.IResolvable): void;
    resetPrincipals(): void;
    get principalsInput(): cdktf.IResolvable | DataAwsIamPolicyDocumentStatementPrincipals[] | undefined;
}
export declare class DataAwsIamPolicyDocumentStatementList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsIamPolicyDocumentStatement[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamPolicyDocumentStatementOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document aws_iam_policy_document}
*/
export declare class DataAwsIamPolicyDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_iam_policy_document";
    /**
    * Generates CDKTF code for importing a DataAwsIamPolicyDocument resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIamPolicyDocument to import
    * @param importFromId The id of the existing DataAwsIamPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIamPolicyDocument to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_policy_document aws_iam_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamPolicyDocumentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsIamPolicyDocumentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get json(): string;
    get minifiedJson(): string;
    private _overrideJson?;
    get overrideJson(): string;
    set overrideJson(value: string);
    resetOverrideJson(): void;
    get overrideJsonInput(): string | undefined;
    private _overridePolicyDocuments?;
    get overridePolicyDocuments(): string[];
    set overridePolicyDocuments(value: string[]);
    resetOverridePolicyDocuments(): void;
    get overridePolicyDocumentsInput(): string[] | undefined;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    resetPolicyId(): void;
    get policyIdInput(): string | undefined;
    private _sourceJson?;
    get sourceJson(): string;
    set sourceJson(value: string);
    resetSourceJson(): void;
    get sourceJsonInput(): string | undefined;
    private _sourcePolicyDocuments?;
    get sourcePolicyDocuments(): string[];
    set sourcePolicyDocuments(value: string[]);
    resetSourcePolicyDocuments(): void;
    get sourcePolicyDocumentsInput(): string[] | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _statement;
    get statement(): DataAwsIamPolicyDocumentStatementList;
    putStatement(value: DataAwsIamPolicyDocumentStatement[] | cdktf.IResolvable): void;
    resetStatement(): void;
    get statementInput(): cdktf.IResolvable | DataAwsIamPolicyDocumentStatement[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
