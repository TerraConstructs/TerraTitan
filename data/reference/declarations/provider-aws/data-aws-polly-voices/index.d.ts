/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsPollyVoicesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}
    */
    readonly includeAdditionalLanguageCodes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}
    */
    readonly languageCode?: string;
    /**
    * voices block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/polly_voices#voices DataAwsPollyVoices#voices}
    */
    readonly voices?: DataAwsPollyVoicesVoices[] | cdktf.IResolvable;
}
export interface DataAwsPollyVoicesVoices {
}
export declare function dataAwsPollyVoicesVoicesToTerraform(struct?: DataAwsPollyVoicesVoices | cdktf.IResolvable): any;
export declare function dataAwsPollyVoicesVoicesToHclTerraform(struct?: DataAwsPollyVoicesVoices | cdktf.IResolvable): any;
export declare class DataAwsPollyVoicesVoicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsPollyVoicesVoices | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsPollyVoicesVoices | cdktf.IResolvable | undefined);
    get additionalLanguageCodes(): string[];
    get gender(): string;
    get id(): string;
    get languageCode(): string;
    get languageName(): string;
    get name(): string;
    get supportedEngines(): string[];
}
export declare class DataAwsPollyVoicesVoicesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsPollyVoicesVoices[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsPollyVoicesVoicesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/polly_voices aws_polly_voices}
*/
export declare class DataAwsPollyVoices extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_polly_voices";
    /**
    * Generates CDKTF code for importing a DataAwsPollyVoices resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsPollyVoices to import
    * @param importFromId The id of the existing DataAwsPollyVoices that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/polly_voices#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsPollyVoices to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/polly_voices aws_polly_voices} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPollyVoicesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsPollyVoicesConfig);
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    get id(): string;
    private _includeAdditionalLanguageCodes?;
    get includeAdditionalLanguageCodes(): boolean | cdktf.IResolvable;
    set includeAdditionalLanguageCodes(value: boolean | cdktf.IResolvable);
    resetIncludeAdditionalLanguageCodes(): void;
    get includeAdditionalLanguageCodesInput(): boolean | cdktf.IResolvable | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    resetLanguageCode(): void;
    get languageCodeInput(): string | undefined;
    private _voices;
    get voices(): DataAwsPollyVoicesVoicesList;
    putVoices(value: DataAwsPollyVoicesVoices[] | cdktf.IResolvable): void;
    resetVoices(): void;
    get voicesInput(): cdktf.IResolvable | DataAwsPollyVoicesVoices[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
