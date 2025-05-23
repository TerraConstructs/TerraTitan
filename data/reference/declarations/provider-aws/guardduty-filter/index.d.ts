/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#action GuarddutyFilter#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#description GuarddutyFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#detector_id GuarddutyFilter#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#id GuarddutyFilter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#name GuarddutyFilter#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#rank GuarddutyFilter#rank}
    */
    readonly rank: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#tags GuarddutyFilter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#tags_all GuarddutyFilter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * finding_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#finding_criteria GuarddutyFilter#finding_criteria}
    */
    readonly findingCriteria: GuarddutyFilterFindingCriteria;
}
export interface GuarddutyFilterFindingCriteriaCriterion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#equals GuarddutyFilter#equals}
    */
    readonly equalTo?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#field GuarddutyFilter#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#greater_than GuarddutyFilter#greater_than}
    */
    readonly greaterThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#greater_than_or_equal GuarddutyFilter#greater_than_or_equal}
    */
    readonly greaterThanOrEqual?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#less_than GuarddutyFilter#less_than}
    */
    readonly lessThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#less_than_or_equal GuarddutyFilter#less_than_or_equal}
    */
    readonly lessThanOrEqual?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#not_equals GuarddutyFilter#not_equals}
    */
    readonly notEquals?: string[];
}
export declare function guarddutyFilterFindingCriteriaCriterionToTerraform(struct?: GuarddutyFilterFindingCriteriaCriterion | cdktf.IResolvable): any;
export declare function guarddutyFilterFindingCriteriaCriterionToHclTerraform(struct?: GuarddutyFilterFindingCriteriaCriterion | cdktf.IResolvable): any;
export declare class GuarddutyFilterFindingCriteriaCriterionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GuarddutyFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined;
    set internalValue(value: GuarddutyFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined);
    private _equals?;
    get equalTo(): string[];
    set equalTo(value: string[]);
    resetEqualTo(): void;
    get equalToInput(): string[] | undefined;
    private _field?;
    get field(): string;
    set field(value: string);
    get fieldInput(): string | undefined;
    private _greaterThan?;
    get greaterThan(): string;
    set greaterThan(value: string);
    resetGreaterThan(): void;
    get greaterThanInput(): string | undefined;
    private _greaterThanOrEqual?;
    get greaterThanOrEqual(): string;
    set greaterThanOrEqual(value: string);
    resetGreaterThanOrEqual(): void;
    get greaterThanOrEqualInput(): string | undefined;
    private _lessThan?;
    get lessThan(): string;
    set lessThan(value: string);
    resetLessThan(): void;
    get lessThanInput(): string | undefined;
    private _lessThanOrEqual?;
    get lessThanOrEqual(): string;
    set lessThanOrEqual(value: string);
    resetLessThanOrEqual(): void;
    get lessThanOrEqualInput(): string | undefined;
    private _notEquals?;
    get notEquals(): string[];
    set notEquals(value: string[]);
    resetNotEquals(): void;
    get notEqualsInput(): string[] | undefined;
}
export declare class GuarddutyFilterFindingCriteriaCriterionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GuarddutyFilterFindingCriteriaCriterion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GuarddutyFilterFindingCriteriaCriterionOutputReference;
}
export interface GuarddutyFilterFindingCriteria {
    /**
    * criterion block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#criterion GuarddutyFilter#criterion}
    */
    readonly criterion: GuarddutyFilterFindingCriteriaCriterion[] | cdktf.IResolvable;
}
export declare function guarddutyFilterFindingCriteriaToTerraform(struct?: GuarddutyFilterFindingCriteriaOutputReference | GuarddutyFilterFindingCriteria): any;
export declare function guarddutyFilterFindingCriteriaToHclTerraform(struct?: GuarddutyFilterFindingCriteriaOutputReference | GuarddutyFilterFindingCriteria): any;
export declare class GuarddutyFilterFindingCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyFilterFindingCriteria | undefined;
    set internalValue(value: GuarddutyFilterFindingCriteria | undefined);
    private _criterion;
    get criterion(): GuarddutyFilterFindingCriteriaCriterionList;
    putCriterion(value: GuarddutyFilterFindingCriteriaCriterion[] | cdktf.IResolvable): void;
    get criterionInput(): cdktf.IResolvable | GuarddutyFilterFindingCriteriaCriterion[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter aws_guardduty_filter}
*/
export declare class GuarddutyFilter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_filter";
    /**
    * Generates CDKTF code for importing a GuarddutyFilter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyFilter to import
    * @param importFromId The id of the existing GuarddutyFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyFilter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_filter aws_guardduty_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyFilterConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyFilterConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _rank?;
    get rank(): number;
    set rank(value: number);
    get rankInput(): number | undefined;
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
    private _findingCriteria;
    get findingCriteria(): GuarddutyFilterFindingCriteriaOutputReference;
    putFindingCriteria(value: GuarddutyFilterFindingCriteria): void;
    get findingCriteriaInput(): GuarddutyFilterFindingCriteria | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
