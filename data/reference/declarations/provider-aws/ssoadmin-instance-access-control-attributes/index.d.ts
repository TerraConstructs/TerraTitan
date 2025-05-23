/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsoadminInstanceAccessControlAttributesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes#id SsoadminInstanceAccessControlAttributes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes#instance_arn SsoadminInstanceAccessControlAttributes#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * attribute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes#attribute SsoadminInstanceAccessControlAttributes#attribute}
    */
    readonly attribute: SsoadminInstanceAccessControlAttributesAttribute[] | cdktf.IResolvable;
}
export interface SsoadminInstanceAccessControlAttributesAttributeValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes#source SsoadminInstanceAccessControlAttributes#source}
    */
    readonly source: string[];
}
export declare function ssoadminInstanceAccessControlAttributesAttributeValueToTerraform(struct?: SsoadminInstanceAccessControlAttributesAttributeValue | cdktf.IResolvable): any;
export declare function ssoadminInstanceAccessControlAttributesAttributeValueToHclTerraform(struct?: SsoadminInstanceAccessControlAttributesAttributeValue | cdktf.IResolvable): any;
export declare class SsoadminInstanceAccessControlAttributesAttributeValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsoadminInstanceAccessControlAttributesAttributeValue | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminInstanceAccessControlAttributesAttributeValue | cdktf.IResolvable | undefined);
    private _source?;
    get source(): string[];
    set source(value: string[]);
    get sourceInput(): string[] | undefined;
}
export declare class SsoadminInstanceAccessControlAttributesAttributeValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsoadminInstanceAccessControlAttributesAttributeValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsoadminInstanceAccessControlAttributesAttributeValueOutputReference;
}
export interface SsoadminInstanceAccessControlAttributesAttribute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes#key SsoadminInstanceAccessControlAttributes#key}
    */
    readonly key: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes#value SsoadminInstanceAccessControlAttributes#value}
    */
    readonly value: SsoadminInstanceAccessControlAttributesAttributeValue[] | cdktf.IResolvable;
}
export declare function ssoadminInstanceAccessControlAttributesAttributeToTerraform(struct?: SsoadminInstanceAccessControlAttributesAttribute | cdktf.IResolvable): any;
export declare function ssoadminInstanceAccessControlAttributesAttributeToHclTerraform(struct?: SsoadminInstanceAccessControlAttributesAttribute | cdktf.IResolvable): any;
export declare class SsoadminInstanceAccessControlAttributesAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsoadminInstanceAccessControlAttributesAttribute | cdktf.IResolvable | undefined;
    set internalValue(value: SsoadminInstanceAccessControlAttributesAttribute | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value;
    get value(): SsoadminInstanceAccessControlAttributesAttributeValueList;
    putValue(value: SsoadminInstanceAccessControlAttributesAttributeValue[] | cdktf.IResolvable): void;
    get valueInput(): cdktf.IResolvable | SsoadminInstanceAccessControlAttributesAttributeValue[] | undefined;
}
export declare class SsoadminInstanceAccessControlAttributesAttributeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsoadminInstanceAccessControlAttributesAttribute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsoadminInstanceAccessControlAttributesAttributeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes}
*/
export declare class SsoadminInstanceAccessControlAttributes extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssoadmin_instance_access_control_attributes";
    /**
    * Generates CDKTF code for importing a SsoadminInstanceAccessControlAttributes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsoadminInstanceAccessControlAttributes to import
    * @param importFromId The id of the existing SsoadminInstanceAccessControlAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsoadminInstanceAccessControlAttributes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssoadmin_instance_access_control_attributes aws_ssoadmin_instance_access_control_attributes} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminInstanceAccessControlAttributesConfig
    */
    constructor(scope: Construct, id: string, config: SsoadminInstanceAccessControlAttributesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    get status(): string;
    get statusReason(): string;
    private _attribute;
    get attribute(): SsoadminInstanceAccessControlAttributesAttributeList;
    putAttribute(value: SsoadminInstanceAccessControlAttributesAttribute[] | cdktf.IResolvable): void;
    get attributeInput(): cdktf.IResolvable | SsoadminInstanceAccessControlAttributesAttribute[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
