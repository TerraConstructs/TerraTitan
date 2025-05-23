/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#id DataAwsSecurityGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#name DataAwsSecurityGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#tags DataAwsSecurityGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#vpc_id DataAwsSecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#filter DataAwsSecurityGroup#filter}
    */
    readonly filter?: DataAwsSecurityGroupFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#timeouts DataAwsSecurityGroup#timeouts}
    */
    readonly timeouts?: DataAwsSecurityGroupTimeouts;
}
export interface DataAwsSecurityGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#name DataAwsSecurityGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#values DataAwsSecurityGroup#values}
    */
    readonly values: string[];
}
export declare function dataAwsSecurityGroupFilterToTerraform(struct?: DataAwsSecurityGroupFilter | cdktf.IResolvable): any;
export declare function dataAwsSecurityGroupFilterToHclTerraform(struct?: DataAwsSecurityGroupFilter | cdktf.IResolvable): any;
export declare class DataAwsSecurityGroupFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSecurityGroupFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSecurityGroupFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsSecurityGroupFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSecurityGroupFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSecurityGroupFilterOutputReference;
}
export interface DataAwsSecurityGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#read DataAwsSecurityGroup#read}
    */
    readonly read?: string;
}
export declare function dataAwsSecurityGroupTimeoutsToTerraform(struct?: DataAwsSecurityGroupTimeouts | cdktf.IResolvable): any;
export declare function dataAwsSecurityGroupTimeoutsToHclTerraform(struct?: DataAwsSecurityGroupTimeouts | cdktf.IResolvable): any;
export declare class DataAwsSecurityGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsSecurityGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSecurityGroupTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group aws_security_group}
*/
export declare class DataAwsSecurityGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_security_group";
    /**
    * Generates CDKTF code for importing a DataAwsSecurityGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSecurityGroup to import
    * @param importFromId The id of the existing DataAwsSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSecurityGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_group aws_security_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecurityGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSecurityGroupConfig);
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
    resetName(): void;
    get nameInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsSecurityGroupFilterList;
    putFilter(value: DataAwsSecurityGroupFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsSecurityGroupFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsSecurityGroupTimeoutsOutputReference;
    putTimeouts(value: DataAwsSecurityGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsSecurityGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
