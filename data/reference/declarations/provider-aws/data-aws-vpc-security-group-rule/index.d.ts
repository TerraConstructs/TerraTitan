/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcSecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rule#security_group_rule_id DataAwsVpcSecurityGroupRule#security_group_rule_id}
    */
    readonly securityGroupRuleId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rule#filter DataAwsVpcSecurityGroupRule#filter}
    */
    readonly filter?: DataAwsVpcSecurityGroupRuleFilter[] | cdktf.IResolvable;
}
export interface DataAwsVpcSecurityGroupRuleFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rule#name DataAwsVpcSecurityGroupRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rule#values DataAwsVpcSecurityGroupRule#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcSecurityGroupRuleFilterToTerraform(struct?: DataAwsVpcSecurityGroupRuleFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcSecurityGroupRuleFilterToHclTerraform(struct?: DataAwsVpcSecurityGroupRuleFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcSecurityGroupRuleFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcSecurityGroupRuleFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcSecurityGroupRuleFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcSecurityGroupRuleFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcSecurityGroupRuleFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcSecurityGroupRuleFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rule aws_vpc_security_group_rule}
*/
export declare class DataAwsVpcSecurityGroupRule extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_security_group_rule";
    /**
    * Generates CDKTF code for importing a DataAwsVpcSecurityGroupRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcSecurityGroupRule to import
    * @param importFromId The id of the existing DataAwsVpcSecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcSecurityGroupRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rule aws_vpc_security_group_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcSecurityGroupRuleConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcSecurityGroupRuleConfig);
    get arn(): string;
    get cidrIpv4(): string;
    get cidrIpv6(): string;
    get description(): string;
    get fromPort(): number;
    get id(): string;
    get ipProtocol(): string;
    get isEgress(): cdktf.IResolvable;
    get prefixListId(): string;
    get referencedSecurityGroupId(): string;
    get securityGroupId(): string;
    private _securityGroupRuleId?;
    get securityGroupRuleId(): string;
    set securityGroupRuleId(value: string);
    resetSecurityGroupRuleId(): void;
    get securityGroupRuleIdInput(): string | undefined;
    private _tags;
    get tags(): cdktf.StringMap;
    get toPort(): number;
    private _filter;
    get filter(): DataAwsVpcSecurityGroupRuleFilterList;
    putFilter(value: DataAwsVpcSecurityGroupRuleFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcSecurityGroupRuleFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
