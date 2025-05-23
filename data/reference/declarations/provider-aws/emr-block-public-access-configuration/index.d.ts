/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrBlockPublicAccessConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration#block_public_security_group_rules EmrBlockPublicAccessConfiguration#block_public_security_group_rules}
    */
    readonly blockPublicSecurityGroupRules: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration#id EmrBlockPublicAccessConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * permitted_public_security_group_rule_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration#permitted_public_security_group_rule_range EmrBlockPublicAccessConfiguration#permitted_public_security_group_rule_range}
    */
    readonly permittedPublicSecurityGroupRuleRange?: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange[] | cdktf.IResolvable;
}
export interface EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration#max_range EmrBlockPublicAccessConfiguration#max_range}
    */
    readonly maxRange: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration#min_range EmrBlockPublicAccessConfiguration#min_range}
    */
    readonly minRange: number;
}
export declare function emrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeToTerraform(struct?: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable): any;
export declare function emrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeToHclTerraform(struct?: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable): any;
export declare class EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable | undefined;
    set internalValue(value: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange | cdktf.IResolvable | undefined);
    private _maxRange?;
    get maxRange(): number;
    set maxRange(value: number);
    get maxRangeInput(): number | undefined;
    private _minRange?;
    get minRange(): number;
    set minRange(value: number);
    get minRangeInput(): number | undefined;
}
export declare class EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration aws_emr_block_public_access_configuration}
*/
export declare class EmrBlockPublicAccessConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emr_block_public_access_configuration";
    /**
    * Generates CDKTF code for importing a EmrBlockPublicAccessConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrBlockPublicAccessConfiguration to import
    * @param importFromId The id of the existing EmrBlockPublicAccessConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrBlockPublicAccessConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_block_public_access_configuration aws_emr_block_public_access_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrBlockPublicAccessConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: EmrBlockPublicAccessConfigurationConfig);
    private _blockPublicSecurityGroupRules?;
    get blockPublicSecurityGroupRules(): boolean | cdktf.IResolvable;
    set blockPublicSecurityGroupRules(value: boolean | cdktf.IResolvable);
    get blockPublicSecurityGroupRulesInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _permittedPublicSecurityGroupRuleRange;
    get permittedPublicSecurityGroupRuleRange(): EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRangeList;
    putPermittedPublicSecurityGroupRuleRange(value: EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange[] | cdktf.IResolvable): void;
    resetPermittedPublicSecurityGroupRuleRange(): void;
    get permittedPublicSecurityGroupRuleRangeInput(): cdktf.IResolvable | EmrBlockPublicAccessConfigurationPermittedPublicSecurityGroupRuleRange[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
