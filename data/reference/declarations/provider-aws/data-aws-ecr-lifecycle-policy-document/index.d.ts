/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrLifecyclePolicyDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#rule DataAwsEcrLifecyclePolicyDocument#rule}
    */
    readonly rule?: DataAwsEcrLifecyclePolicyDocumentRule[] | cdktf.IResolvable;
}
export interface DataAwsEcrLifecyclePolicyDocumentRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#type DataAwsEcrLifecyclePolicyDocument#type}
    */
    readonly type: string;
}
export declare function dataAwsEcrLifecyclePolicyDocumentRuleActionToTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable): any;
export declare function dataAwsEcrLifecyclePolicyDocumentRuleActionToHclTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable): any;
export declare class DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcrLifecyclePolicyDocumentRuleAction | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class DataAwsEcrLifecyclePolicyDocumentRuleActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcrLifecyclePolicyDocumentRuleAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcrLifecyclePolicyDocumentRuleActionOutputReference;
}
export interface DataAwsEcrLifecyclePolicyDocumentRuleSelection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#count_number DataAwsEcrLifecyclePolicyDocument#count_number}
    */
    readonly countNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#count_type DataAwsEcrLifecyclePolicyDocument#count_type}
    */
    readonly countType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#count_unit DataAwsEcrLifecyclePolicyDocument#count_unit}
    */
    readonly countUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#tag_pattern_list DataAwsEcrLifecyclePolicyDocument#tag_pattern_list}
    */
    readonly tagPatternList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#tag_prefix_list DataAwsEcrLifecyclePolicyDocument#tag_prefix_list}
    */
    readonly tagPrefixList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#tag_status DataAwsEcrLifecyclePolicyDocument#tag_status}
    */
    readonly tagStatus: string;
}
export declare function dataAwsEcrLifecyclePolicyDocumentRuleSelectionToTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable): any;
export declare function dataAwsEcrLifecyclePolicyDocumentRuleSelectionToHclTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable): any;
export declare class DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcrLifecyclePolicyDocumentRuleSelection | cdktf.IResolvable | undefined);
    private _countNumber?;
    get countNumber(): number;
    set countNumber(value: number);
    get countNumberInput(): number | undefined;
    private _countType?;
    get countType(): string;
    set countType(value: string);
    get countTypeInput(): string | undefined;
    private _countUnit?;
    get countUnit(): string;
    set countUnit(value: string);
    resetCountUnit(): void;
    get countUnitInput(): string | undefined;
    private _tagPatternList?;
    get tagPatternList(): string[];
    set tagPatternList(value: string[]);
    resetTagPatternList(): void;
    get tagPatternListInput(): string[] | undefined;
    private _tagPrefixList?;
    get tagPrefixList(): string[];
    set tagPrefixList(value: string[]);
    resetTagPrefixList(): void;
    get tagPrefixListInput(): string[] | undefined;
    private _tagStatus?;
    get tagStatus(): string;
    set tagStatus(value: string);
    get tagStatusInput(): string | undefined;
}
export declare class DataAwsEcrLifecyclePolicyDocumentRuleSelectionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcrLifecyclePolicyDocumentRuleSelection[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcrLifecyclePolicyDocumentRuleSelectionOutputReference;
}
export interface DataAwsEcrLifecyclePolicyDocumentRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#description DataAwsEcrLifecyclePolicyDocument#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#priority DataAwsEcrLifecyclePolicyDocument#priority}
    */
    readonly priority: number;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#action DataAwsEcrLifecyclePolicyDocument#action}
    */
    readonly action?: DataAwsEcrLifecyclePolicyDocumentRuleAction[] | cdktf.IResolvable;
    /**
    * selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#selection DataAwsEcrLifecyclePolicyDocument#selection}
    */
    readonly selection?: DataAwsEcrLifecyclePolicyDocumentRuleSelection[] | cdktf.IResolvable;
}
export declare function dataAwsEcrLifecyclePolicyDocumentRuleToTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable): any;
export declare function dataAwsEcrLifecyclePolicyDocumentRuleToHclTerraform(struct?: DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable): any;
export declare class DataAwsEcrLifecyclePolicyDocumentRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEcrLifecyclePolicyDocumentRule | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _action;
    get action(): DataAwsEcrLifecyclePolicyDocumentRuleActionList;
    putAction(value: DataAwsEcrLifecyclePolicyDocumentRuleAction[] | cdktf.IResolvable): void;
    resetAction(): void;
    get actionInput(): cdktf.IResolvable | DataAwsEcrLifecyclePolicyDocumentRuleAction[] | undefined;
    private _selection;
    get selection(): DataAwsEcrLifecyclePolicyDocumentRuleSelectionList;
    putSelection(value: DataAwsEcrLifecyclePolicyDocumentRuleSelection[] | cdktf.IResolvable): void;
    resetSelection(): void;
    get selectionInput(): cdktf.IResolvable | DataAwsEcrLifecyclePolicyDocumentRuleSelection[] | undefined;
}
export declare class DataAwsEcrLifecyclePolicyDocumentRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEcrLifecyclePolicyDocumentRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEcrLifecyclePolicyDocumentRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document aws_ecr_lifecycle_policy_document}
*/
export declare class DataAwsEcrLifecyclePolicyDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecr_lifecycle_policy_document";
    /**
    * Generates CDKTF code for importing a DataAwsEcrLifecyclePolicyDocument resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcrLifecyclePolicyDocument to import
    * @param importFromId The id of the existing DataAwsEcrLifecyclePolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcrLifecyclePolicyDocument to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_lifecycle_policy_document aws_ecr_lifecycle_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrLifecyclePolicyDocumentConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEcrLifecyclePolicyDocumentConfig);
    get json(): string;
    private _rule;
    get rule(): DataAwsEcrLifecyclePolicyDocumentRuleList;
    putRule(value: DataAwsEcrLifecyclePolicyDocumentRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | DataAwsEcrLifecyclePolicyDocumentRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
