/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WafIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset#id WafIpset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset#name WafIpset#name}
    */
    readonly name: string;
    /**
    * ip_set_descriptors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset#ip_set_descriptors WafIpset#ip_set_descriptors}
    */
    readonly ipSetDescriptors?: WafIpsetIpSetDescriptors[] | cdktf.IResolvable;
}
export interface WafIpsetIpSetDescriptors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset#type WafIpset#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset#value WafIpset#value}
    */
    readonly value: string;
}
export declare function wafIpsetIpSetDescriptorsToTerraform(struct?: WafIpsetIpSetDescriptors | cdktf.IResolvable): any;
export declare function wafIpsetIpSetDescriptorsToHclTerraform(struct?: WafIpsetIpSetDescriptors | cdktf.IResolvable): any;
export declare class WafIpsetIpSetDescriptorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WafIpsetIpSetDescriptors | cdktf.IResolvable | undefined;
    set internalValue(value: WafIpsetIpSetDescriptors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class WafIpsetIpSetDescriptorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WafIpsetIpSetDescriptors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WafIpsetIpSetDescriptorsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset aws_waf_ipset}
*/
export declare class WafIpset extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_waf_ipset";
    /**
    * Generates CDKTF code for importing a WafIpset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WafIpset to import
    * @param importFromId The id of the existing WafIpset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WafIpset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/waf_ipset aws_waf_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafIpsetConfig
    */
    constructor(scope: Construct, id: string, config: WafIpsetConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _ipSetDescriptors;
    get ipSetDescriptors(): WafIpsetIpSetDescriptorsList;
    putIpSetDescriptors(value: WafIpsetIpSetDescriptors[] | cdktf.IResolvable): void;
    resetIpSetDescriptors(): void;
    get ipSetDescriptorsInput(): cdktf.IResolvable | WafIpsetIpSetDescriptors[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
