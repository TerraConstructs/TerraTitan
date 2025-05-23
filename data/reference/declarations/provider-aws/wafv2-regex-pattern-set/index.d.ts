/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#description Wafv2RegexPatternSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#id Wafv2RegexPatternSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#name Wafv2RegexPatternSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#scope Wafv2RegexPatternSet#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#tags Wafv2RegexPatternSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#tags_all Wafv2RegexPatternSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * regular_expression block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#regular_expression Wafv2RegexPatternSet#regular_expression}
    */
    readonly regularExpression?: Wafv2RegexPatternSetRegularExpression[] | cdktf.IResolvable;
}
export interface Wafv2RegexPatternSetRegularExpression {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#regex_string Wafv2RegexPatternSet#regex_string}
    */
    readonly regexString: string;
}
export declare function wafv2RegexPatternSetRegularExpressionToTerraform(struct?: Wafv2RegexPatternSetRegularExpression | cdktf.IResolvable): any;
export declare function wafv2RegexPatternSetRegularExpressionToHclTerraform(struct?: Wafv2RegexPatternSetRegularExpression | cdktf.IResolvable): any;
export declare class Wafv2RegexPatternSetRegularExpressionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2RegexPatternSetRegularExpression | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2RegexPatternSetRegularExpression | cdktf.IResolvable | undefined);
    private _regexString?;
    get regexString(): string;
    set regexString(value: string);
    get regexStringInput(): string | undefined;
}
export declare class Wafv2RegexPatternSetRegularExpressionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2RegexPatternSetRegularExpression[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2RegexPatternSetRegularExpressionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set}
*/
export declare class Wafv2RegexPatternSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafv2_regex_pattern_set";
    /**
    * Generates CDKTF code for importing a Wafv2RegexPatternSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2RegexPatternSet to import
    * @param importFromId The id of the existing Wafv2RegexPatternSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2RegexPatternSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2RegexPatternSetConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2RegexPatternSetConfig);
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
    get lockToken(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
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
    private _regularExpression;
    get regularExpression(): Wafv2RegexPatternSetRegularExpressionList;
    putRegularExpression(value: Wafv2RegexPatternSetRegularExpression[] | cdktf.IResolvable): void;
    resetRegularExpression(): void;
    get regularExpressionInput(): cdktf.IResolvable | Wafv2RegexPatternSetRegularExpression[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
