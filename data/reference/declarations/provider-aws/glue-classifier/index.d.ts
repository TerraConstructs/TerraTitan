/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#id GlueClassifier#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#name GlueClassifier#name}
    */
    readonly name: string;
    /**
    * csv_classifier block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#csv_classifier GlueClassifier#csv_classifier}
    */
    readonly csvClassifier?: GlueClassifierCsvClassifier;
    /**
    * grok_classifier block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#grok_classifier GlueClassifier#grok_classifier}
    */
    readonly grokClassifier?: GlueClassifierGrokClassifier;
    /**
    * json_classifier block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#json_classifier GlueClassifier#json_classifier}
    */
    readonly jsonClassifier?: GlueClassifierJsonClassifier;
    /**
    * xml_classifier block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#xml_classifier GlueClassifier#xml_classifier}
    */
    readonly xmlClassifier?: GlueClassifierXmlClassifier;
}
export interface GlueClassifierCsvClassifier {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#allow_single_column GlueClassifier#allow_single_column}
    */
    readonly allowSingleColumn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#contains_header GlueClassifier#contains_header}
    */
    readonly containsHeader?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#custom_datatype_configured GlueClassifier#custom_datatype_configured}
    */
    readonly customDatatypeConfigured?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#custom_datatypes GlueClassifier#custom_datatypes}
    */
    readonly customDatatypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#delimiter GlueClassifier#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#disable_value_trimming GlueClassifier#disable_value_trimming}
    */
    readonly disableValueTrimming?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#header GlueClassifier#header}
    */
    readonly header?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#quote_symbol GlueClassifier#quote_symbol}
    */
    readonly quoteSymbol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#serde GlueClassifier#serde}
    */
    readonly serde?: string;
}
export declare function glueClassifierCsvClassifierToTerraform(struct?: GlueClassifierCsvClassifierOutputReference | GlueClassifierCsvClassifier): any;
export declare function glueClassifierCsvClassifierToHclTerraform(struct?: GlueClassifierCsvClassifierOutputReference | GlueClassifierCsvClassifier): any;
export declare class GlueClassifierCsvClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueClassifierCsvClassifier | undefined;
    set internalValue(value: GlueClassifierCsvClassifier | undefined);
    private _allowSingleColumn?;
    get allowSingleColumn(): boolean | cdktf.IResolvable;
    set allowSingleColumn(value: boolean | cdktf.IResolvable);
    resetAllowSingleColumn(): void;
    get allowSingleColumnInput(): boolean | cdktf.IResolvable | undefined;
    private _containsHeader?;
    get containsHeader(): string;
    set containsHeader(value: string);
    resetContainsHeader(): void;
    get containsHeaderInput(): string | undefined;
    private _customDatatypeConfigured?;
    get customDatatypeConfigured(): boolean | cdktf.IResolvable;
    set customDatatypeConfigured(value: boolean | cdktf.IResolvable);
    resetCustomDatatypeConfigured(): void;
    get customDatatypeConfiguredInput(): boolean | cdktf.IResolvable | undefined;
    private _customDatatypes?;
    get customDatatypes(): string[];
    set customDatatypes(value: string[]);
    resetCustomDatatypes(): void;
    get customDatatypesInput(): string[] | undefined;
    private _delimiter?;
    get delimiter(): string;
    set delimiter(value: string);
    resetDelimiter(): void;
    get delimiterInput(): string | undefined;
    private _disableValueTrimming?;
    get disableValueTrimming(): boolean | cdktf.IResolvable;
    set disableValueTrimming(value: boolean | cdktf.IResolvable);
    resetDisableValueTrimming(): void;
    get disableValueTrimmingInput(): boolean | cdktf.IResolvable | undefined;
    private _header?;
    get header(): string[];
    set header(value: string[]);
    resetHeader(): void;
    get headerInput(): string[] | undefined;
    private _quoteSymbol?;
    get quoteSymbol(): string;
    set quoteSymbol(value: string);
    resetQuoteSymbol(): void;
    get quoteSymbolInput(): string | undefined;
    private _serde?;
    get serde(): string;
    set serde(value: string);
    resetSerde(): void;
    get serdeInput(): string | undefined;
}
export interface GlueClassifierGrokClassifier {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#classification GlueClassifier#classification}
    */
    readonly classification: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#custom_patterns GlueClassifier#custom_patterns}
    */
    readonly customPatterns?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#grok_pattern GlueClassifier#grok_pattern}
    */
    readonly grokPattern: string;
}
export declare function glueClassifierGrokClassifierToTerraform(struct?: GlueClassifierGrokClassifierOutputReference | GlueClassifierGrokClassifier): any;
export declare function glueClassifierGrokClassifierToHclTerraform(struct?: GlueClassifierGrokClassifierOutputReference | GlueClassifierGrokClassifier): any;
export declare class GlueClassifierGrokClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueClassifierGrokClassifier | undefined;
    set internalValue(value: GlueClassifierGrokClassifier | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
    get classificationInput(): string | undefined;
    private _customPatterns?;
    get customPatterns(): string;
    set customPatterns(value: string);
    resetCustomPatterns(): void;
    get customPatternsInput(): string | undefined;
    private _grokPattern?;
    get grokPattern(): string;
    set grokPattern(value: string);
    get grokPatternInput(): string | undefined;
}
export interface GlueClassifierJsonClassifier {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#json_path GlueClassifier#json_path}
    */
    readonly jsonPath: string;
}
export declare function glueClassifierJsonClassifierToTerraform(struct?: GlueClassifierJsonClassifierOutputReference | GlueClassifierJsonClassifier): any;
export declare function glueClassifierJsonClassifierToHclTerraform(struct?: GlueClassifierJsonClassifierOutputReference | GlueClassifierJsonClassifier): any;
export declare class GlueClassifierJsonClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueClassifierJsonClassifier | undefined;
    set internalValue(value: GlueClassifierJsonClassifier | undefined);
    private _jsonPath?;
    get jsonPath(): string;
    set jsonPath(value: string);
    get jsonPathInput(): string | undefined;
}
export interface GlueClassifierXmlClassifier {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#classification GlueClassifier#classification}
    */
    readonly classification: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#row_tag GlueClassifier#row_tag}
    */
    readonly rowTag: string;
}
export declare function glueClassifierXmlClassifierToTerraform(struct?: GlueClassifierXmlClassifierOutputReference | GlueClassifierXmlClassifier): any;
export declare function glueClassifierXmlClassifierToHclTerraform(struct?: GlueClassifierXmlClassifierOutputReference | GlueClassifierXmlClassifier): any;
export declare class GlueClassifierXmlClassifierOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueClassifierXmlClassifier | undefined;
    set internalValue(value: GlueClassifierXmlClassifier | undefined);
    private _classification?;
    get classification(): string;
    set classification(value: string);
    get classificationInput(): string | undefined;
    private _rowTag?;
    get rowTag(): string;
    set rowTag(value: string);
    get rowTagInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier aws_glue_classifier}
*/
export declare class GlueClassifier extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_classifier";
    /**
    * Generates CDKTF code for importing a GlueClassifier resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueClassifier to import
    * @param importFromId The id of the existing GlueClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueClassifier to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_classifier aws_glue_classifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueClassifierConfig
    */
    constructor(scope: Construct, id: string, config: GlueClassifierConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _csvClassifier;
    get csvClassifier(): GlueClassifierCsvClassifierOutputReference;
    putCsvClassifier(value: GlueClassifierCsvClassifier): void;
    resetCsvClassifier(): void;
    get csvClassifierInput(): GlueClassifierCsvClassifier | undefined;
    private _grokClassifier;
    get grokClassifier(): GlueClassifierGrokClassifierOutputReference;
    putGrokClassifier(value: GlueClassifierGrokClassifier): void;
    resetGrokClassifier(): void;
    get grokClassifierInput(): GlueClassifierGrokClassifier | undefined;
    private _jsonClassifier;
    get jsonClassifier(): GlueClassifierJsonClassifierOutputReference;
    putJsonClassifier(value: GlueClassifierJsonClassifier): void;
    resetJsonClassifier(): void;
    get jsonClassifierInput(): GlueClassifierJsonClassifier | undefined;
    private _xmlClassifier;
    get xmlClassifier(): GlueClassifierXmlClassifierOutputReference;
    putXmlClassifier(value: GlueClassifierXmlClassifier): void;
    resetXmlClassifier(): void;
    get xmlClassifierInput(): GlueClassifierXmlClassifier | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
