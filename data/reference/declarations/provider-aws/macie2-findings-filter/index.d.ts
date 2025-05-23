/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Macie2FindingsFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#action Macie2FindingsFilter#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#description Macie2FindingsFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#id Macie2FindingsFilter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#name Macie2FindingsFilter#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#name_prefix Macie2FindingsFilter#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#position Macie2FindingsFilter#position}
    */
    readonly position?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#tags Macie2FindingsFilter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#tags_all Macie2FindingsFilter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * finding_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#finding_criteria Macie2FindingsFilter#finding_criteria}
    */
    readonly findingCriteria: Macie2FindingsFilterFindingCriteria;
}
export interface Macie2FindingsFilterFindingCriteriaCriterion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#eq Macie2FindingsFilter#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#eq_exact_match Macie2FindingsFilter#eq_exact_match}
    */
    readonly eqExactMatch?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#field Macie2FindingsFilter#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#gt Macie2FindingsFilter#gt}
    */
    readonly gt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#gte Macie2FindingsFilter#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#lt Macie2FindingsFilter#lt}
    */
    readonly lt?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#lte Macie2FindingsFilter#lte}
    */
    readonly lte?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#neq Macie2FindingsFilter#neq}
    */
    readonly neq?: string[];
}
export declare function macie2FindingsFilterFindingCriteriaCriterionToTerraform(struct?: Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable): any;
export declare function macie2FindingsFilterFindingCriteriaCriterionToHclTerraform(struct?: Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable): any;
export declare class Macie2FindingsFilterFindingCriteriaCriterionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined;
    set internalValue(value: Macie2FindingsFilterFindingCriteriaCriterion | cdktf.IResolvable | undefined);
    private _eq?;
    get eq(): string[];
    set eq(value: string[]);
    resetEq(): void;
    get eqInput(): string[] | undefined;
    private _eqExactMatch?;
    get eqExactMatch(): string[];
    set eqExactMatch(value: string[]);
    resetEqExactMatch(): void;
    get eqExactMatchInput(): string[] | undefined;
    private _field?;
    get field(): string;
    set field(value: string);
    get fieldInput(): string | undefined;
    private _gt?;
    get gt(): string;
    set gt(value: string);
    resetGt(): void;
    get gtInput(): string | undefined;
    private _gte?;
    get gte(): string;
    set gte(value: string);
    resetGte(): void;
    get gteInput(): string | undefined;
    private _lt?;
    get lt(): string;
    set lt(value: string);
    resetLt(): void;
    get ltInput(): string | undefined;
    private _lte?;
    get lte(): string;
    set lte(value: string);
    resetLte(): void;
    get lteInput(): string | undefined;
    private _neq?;
    get neq(): string[];
    set neq(value: string[]);
    resetNeq(): void;
    get neqInput(): string[] | undefined;
}
export declare class Macie2FindingsFilterFindingCriteriaCriterionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Macie2FindingsFilterFindingCriteriaCriterion[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Macie2FindingsFilterFindingCriteriaCriterionOutputReference;
}
export interface Macie2FindingsFilterFindingCriteria {
    /**
    * criterion block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#criterion Macie2FindingsFilter#criterion}
    */
    readonly criterion?: Macie2FindingsFilterFindingCriteriaCriterion[] | cdktf.IResolvable;
}
export declare function macie2FindingsFilterFindingCriteriaToTerraform(struct?: Macie2FindingsFilterFindingCriteriaOutputReference | Macie2FindingsFilterFindingCriteria): any;
export declare function macie2FindingsFilterFindingCriteriaToHclTerraform(struct?: Macie2FindingsFilterFindingCriteriaOutputReference | Macie2FindingsFilterFindingCriteria): any;
export declare class Macie2FindingsFilterFindingCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Macie2FindingsFilterFindingCriteria | undefined;
    set internalValue(value: Macie2FindingsFilterFindingCriteria | undefined);
    private _criterion;
    get criterion(): Macie2FindingsFilterFindingCriteriaCriterionList;
    putCriterion(value: Macie2FindingsFilterFindingCriteriaCriterion[] | cdktf.IResolvable): void;
    resetCriterion(): void;
    get criterionInput(): cdktf.IResolvable | Macie2FindingsFilterFindingCriteriaCriterion[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter aws_macie2_findings_filter}
*/
export declare class Macie2FindingsFilter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_macie2_findings_filter";
    /**
    * Generates CDKTF code for importing a Macie2FindingsFilter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Macie2FindingsFilter to import
    * @param importFromId The id of the existing Macie2FindingsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Macie2FindingsFilter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/macie2_findings_filter aws_macie2_findings_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2FindingsFilterConfig
    */
    constructor(scope: Construct, id: string, config: Macie2FindingsFilterConfig);
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
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _position?;
    get position(): number;
    set position(value: number);
    resetPosition(): void;
    get positionInput(): number | undefined;
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
    get findingCriteria(): Macie2FindingsFilterFindingCriteriaOutputReference;
    putFindingCriteria(value: Macie2FindingsFilterFindingCriteria): void;
    get findingCriteriaInput(): Macie2FindingsFilterFindingCriteria | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
