/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraFaqConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#description KendraFaq#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#file_format KendraFaq#file_format}
    */
    readonly fileFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#id KendraFaq#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#index_id KendraFaq#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#language_code KendraFaq#language_code}
    */
    readonly languageCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#name KendraFaq#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#role_arn KendraFaq#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#tags KendraFaq#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#tags_all KendraFaq#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * s3_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#s3_path KendraFaq#s3_path}
    */
    readonly s3Path: KendraFaqS3Path;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#timeouts KendraFaq#timeouts}
    */
    readonly timeouts?: KendraFaqTimeouts;
}
export interface KendraFaqS3Path {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#bucket KendraFaq#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#key KendraFaq#key}
    */
    readonly key: string;
}
export declare function kendraFaqS3PathToTerraform(struct?: KendraFaqS3PathOutputReference | KendraFaqS3Path): any;
export declare function kendraFaqS3PathToHclTerraform(struct?: KendraFaqS3PathOutputReference | KendraFaqS3Path): any;
export declare class KendraFaqS3PathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraFaqS3Path | undefined;
    set internalValue(value: KendraFaqS3Path | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export interface KendraFaqTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#create KendraFaq#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#delete KendraFaq#delete}
    */
    readonly delete?: string;
}
export declare function kendraFaqTimeoutsToTerraform(struct?: KendraFaqTimeouts | cdktf.IResolvable): any;
export declare function kendraFaqTimeoutsToHclTerraform(struct?: KendraFaqTimeouts | cdktf.IResolvable): any;
export declare class KendraFaqTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraFaqTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KendraFaqTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq aws_kendra_faq}
*/
export declare class KendraFaq extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kendra_faq";
    /**
    * Generates CDKTF code for importing a KendraFaq resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KendraFaq to import
    * @param importFromId The id of the existing KendraFaq that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KendraFaq to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_faq aws_kendra_faq} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraFaqConfig
    */
    constructor(scope: Construct, id: string, config: KendraFaqConfig);
    get arn(): string;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get errorMessage(): string;
    get faqId(): string;
    private _fileFormat?;
    get fileFormat(): string;
    set fileFormat(value: string);
    resetFileFormat(): void;
    get fileFormatInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexId?;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    resetLanguageCode(): void;
    get languageCodeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get updatedAt(): string;
    private _s3Path;
    get s3Path(): KendraFaqS3PathOutputReference;
    putS3Path(value: KendraFaqS3Path): void;
    get s3PathInput(): KendraFaqS3Path | undefined;
    private _timeouts;
    get timeouts(): KendraFaqTimeoutsOutputReference;
    putTimeouts(value: KendraFaqTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KendraFaqTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
