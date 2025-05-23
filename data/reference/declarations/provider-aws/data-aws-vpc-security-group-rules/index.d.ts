/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcSecurityGroupRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rules#tags DataAwsVpcSecurityGroupRules#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rules#filter DataAwsVpcSecurityGroupRules#filter}
    */
    readonly filter?: DataAwsVpcSecurityGroupRulesFilter[] | cdktf.IResolvable;
}
export interface DataAwsVpcSecurityGroupRulesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rules#name DataAwsVpcSecurityGroupRules#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rules#values DataAwsVpcSecurityGroupRules#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcSecurityGroupRulesFilterToTerraform(struct?: DataAwsVpcSecurityGroupRulesFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcSecurityGroupRulesFilterToHclTerraform(struct?: DataAwsVpcSecurityGroupRulesFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcSecurityGroupRulesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcSecurityGroupRulesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcSecurityGroupRulesFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcSecurityGroupRulesFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcSecurityGroupRulesFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcSecurityGroupRulesFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rules aws_vpc_security_group_rules}
*/
export declare class DataAwsVpcSecurityGroupRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_security_group_rules";
    /**
    * Generates CDKTF code for importing a DataAwsVpcSecurityGroupRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcSecurityGroupRules to import
    * @param importFromId The id of the existing DataAwsVpcSecurityGroupRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcSecurityGroupRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_security_group_rules aws_vpc_security_group_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcSecurityGroupRulesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcSecurityGroupRulesConfig);
    get id(): string;
    get ids(): string[];
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
    private _filter;
    get filter(): DataAwsVpcSecurityGroupRulesFilterList;
    putFilter(value: DataAwsVpcSecurityGroupRulesFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcSecurityGroupRulesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
