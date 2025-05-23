/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsWafv2RegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/wafv2_regex_pattern_set#id DataAwsWafv2RegexPatternSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/wafv2_regex_pattern_set#name DataAwsWafv2RegexPatternSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/wafv2_regex_pattern_set#scope DataAwsWafv2RegexPatternSet#scope}
    */
    readonly scope: string;
}
export interface DataAwsWafv2RegexPatternSetRegularExpression {
}
export declare function dataAwsWafv2RegexPatternSetRegularExpressionToTerraform(struct?: DataAwsWafv2RegexPatternSetRegularExpression): any;
export declare function dataAwsWafv2RegexPatternSetRegularExpressionToHclTerraform(struct?: DataAwsWafv2RegexPatternSetRegularExpression): any;
export declare class DataAwsWafv2RegexPatternSetRegularExpressionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsWafv2RegexPatternSetRegularExpression | undefined;
    set internalValue(value: DataAwsWafv2RegexPatternSetRegularExpression | undefined);
    get regexString(): string;
}
export declare class DataAwsWafv2RegexPatternSetRegularExpressionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsWafv2RegexPatternSetRegularExpressionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set}
*/
export declare class DataAwsWafv2RegexPatternSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_wafv2_regex_pattern_set";
    /**
    * Generates CDKTF code for importing a DataAwsWafv2RegexPatternSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsWafv2RegexPatternSet to import
    * @param importFromId The id of the existing DataAwsWafv2RegexPatternSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/wafv2_regex_pattern_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsWafv2RegexPatternSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/wafv2_regex_pattern_set aws_wafv2_regex_pattern_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafv2RegexPatternSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsWafv2RegexPatternSetConfig);
    get arn(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _regularExpression;
    get regularExpression(): DataAwsWafv2RegexPatternSetRegularExpressionList;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
