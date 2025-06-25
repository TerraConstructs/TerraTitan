/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PinpointEmailTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}
    */
    readonly templateName: string;
    /**
    * email_template block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#email_template PinpointEmailTemplate#email_template}
    */
    readonly emailTemplate?: PinpointEmailTemplateEmailTemplate[] | cdktf.IResolvable;
}
export interface PinpointEmailTemplateEmailTemplateHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}
    */
    readonly value?: string;
}
export declare function pinpointEmailTemplateEmailTemplateHeaderToTerraform(struct?: PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable): any;
export declare function pinpointEmailTemplateEmailTemplateHeaderToHclTerraform(struct?: PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable): any;
export declare class PinpointEmailTemplateEmailTemplateHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable | undefined;
    set internalValue(value: PinpointEmailTemplateEmailTemplateHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class PinpointEmailTemplateEmailTemplateHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PinpointEmailTemplateEmailTemplateHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PinpointEmailTemplateEmailTemplateHeaderOutputReference;
}
export interface PinpointEmailTemplateEmailTemplate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}
    */
    readonly defaultSubstitutions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}
    */
    readonly htmlPart?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}
    */
    readonly recommenderId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}
    */
    readonly subject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}
    */
    readonly textPart?: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#header PinpointEmailTemplate#header}
    */
    readonly header?: PinpointEmailTemplateEmailTemplateHeader[] | cdktf.IResolvable;
}
export declare function pinpointEmailTemplateEmailTemplateToTerraform(struct?: PinpointEmailTemplateEmailTemplate | cdktf.IResolvable): any;
export declare function pinpointEmailTemplateEmailTemplateToHclTerraform(struct?: PinpointEmailTemplateEmailTemplate | cdktf.IResolvable): any;
export declare class PinpointEmailTemplateEmailTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PinpointEmailTemplateEmailTemplate | cdktf.IResolvable | undefined;
    set internalValue(value: PinpointEmailTemplateEmailTemplate | cdktf.IResolvable | undefined);
    private _defaultSubstitutions?;
    get defaultSubstitutions(): string;
    set defaultSubstitutions(value: string);
    resetDefaultSubstitutions(): void;
    get defaultSubstitutionsInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _htmlPart?;
    get htmlPart(): string;
    set htmlPart(value: string);
    resetHtmlPart(): void;
    get htmlPartInput(): string | undefined;
    private _recommenderId?;
    get recommenderId(): string;
    set recommenderId(value: string);
    resetRecommenderId(): void;
    get recommenderIdInput(): string | undefined;
    private _subject?;
    get subject(): string;
    set subject(value: string);
    resetSubject(): void;
    get subjectInput(): string | undefined;
    private _textPart?;
    get textPart(): string;
    set textPart(value: string);
    resetTextPart(): void;
    get textPartInput(): string | undefined;
    private _header;
    get header(): PinpointEmailTemplateEmailTemplateHeaderList;
    putHeader(value: PinpointEmailTemplateEmailTemplateHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | PinpointEmailTemplateEmailTemplateHeader[] | undefined;
}
export declare class PinpointEmailTemplateEmailTemplateList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PinpointEmailTemplateEmailTemplate[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PinpointEmailTemplateEmailTemplateOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template aws_pinpoint_email_template}
*/
export declare class PinpointEmailTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpoint_email_template";
    /**
    * Generates CDKTF code for importing a PinpointEmailTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PinpointEmailTemplate to import
    * @param importFromId The id of the existing PinpointEmailTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PinpointEmailTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpoint_email_template aws_pinpoint_email_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PinpointEmailTemplateConfig
    */
    constructor(scope: Construct, id: string, config: PinpointEmailTemplateConfig);
    get arn(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _templateName?;
    get templateName(): string;
    set templateName(value: string);
    get templateNameInput(): string | undefined;
    private _emailTemplate;
    get emailTemplate(): PinpointEmailTemplateEmailTemplateList;
    putEmailTemplate(value: PinpointEmailTemplateEmailTemplate[] | cdktf.IResolvable): void;
    resetEmailTemplate(): void;
    get emailTemplateInput(): cdktf.IResolvable | PinpointEmailTemplateEmailTemplate[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
