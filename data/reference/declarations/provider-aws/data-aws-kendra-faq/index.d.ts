/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKendraFaqConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_faq#faq_id DataAwsKendraFaq#faq_id}
    */
    readonly faqId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_faq#id DataAwsKendraFaq#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_faq#index_id DataAwsKendraFaq#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_faq#tags DataAwsKendraFaq#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsKendraFaqS3Path {
}
export declare function dataAwsKendraFaqS3PathToTerraform(struct?: DataAwsKendraFaqS3Path): any;
export declare function dataAwsKendraFaqS3PathToHclTerraform(struct?: DataAwsKendraFaqS3Path): any;
export declare class DataAwsKendraFaqS3PathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraFaqS3Path | undefined;
    set internalValue(value: DataAwsKendraFaqS3Path | undefined);
    get bucket(): string;
    get key(): string;
}
export declare class DataAwsKendraFaqS3PathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraFaqS3PathOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_faq aws_kendra_faq}
*/
export declare class DataAwsKendraFaq extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kendra_faq";
    /**
    * Generates CDKTF code for importing a DataAwsKendraFaq resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKendraFaq to import
    * @param importFromId The id of the existing DataAwsKendraFaq that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_faq#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKendraFaq to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_faq aws_kendra_faq} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKendraFaqConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKendraFaqConfig);
    get arn(): string;
    get createdAt(): string;
    get description(): string;
    get errorMessage(): string;
    private _faqId?;
    get faqId(): string;
    set faqId(value: string);
    get faqIdInput(): string | undefined;
    get fileFormat(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexId?;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string | undefined;
    get languageCode(): string;
    get name(): string;
    get roleArn(): string;
    private _s3Path;
    get s3Path(): DataAwsKendraFaqS3PathList;
    get status(): string;
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
    get updatedAt(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
