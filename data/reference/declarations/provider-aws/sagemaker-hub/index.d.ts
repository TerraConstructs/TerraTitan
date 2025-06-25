/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerHubConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_description SagemakerHub#hub_description}
    */
    readonly hubDescription: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_display_name SagemakerHub#hub_display_name}
    */
    readonly hubDisplayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_name SagemakerHub#hub_name}
    */
    readonly hubName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_search_keywords SagemakerHub#hub_search_keywords}
    */
    readonly hubSearchKeywords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#id SagemakerHub#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#tags SagemakerHub#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#tags_all SagemakerHub#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * s3_storage_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#s3_storage_config SagemakerHub#s3_storage_config}
    */
    readonly s3StorageConfig?: SagemakerHubS3StorageConfig;
}
export interface SagemakerHubS3StorageConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#s3_output_path SagemakerHub#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export declare function sagemakerHubS3StorageConfigToTerraform(struct?: SagemakerHubS3StorageConfigOutputReference | SagemakerHubS3StorageConfig): any;
export declare function sagemakerHubS3StorageConfigToHclTerraform(struct?: SagemakerHubS3StorageConfigOutputReference | SagemakerHubS3StorageConfig): any;
export declare class SagemakerHubS3StorageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerHubS3StorageConfig | undefined;
    set internalValue(value: SagemakerHubS3StorageConfig | undefined);
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    resetS3OutputPath(): void;
    get s3OutputPathInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub aws_sagemaker_hub}
*/
export declare class SagemakerHub extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_hub";
    /**
    * Generates CDKTF code for importing a SagemakerHub resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerHub to import
    * @param importFromId The id of the existing SagemakerHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerHub to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub aws_sagemaker_hub} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerHubConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerHubConfig);
    get arn(): string;
    private _hubDescription?;
    get hubDescription(): string;
    set hubDescription(value: string);
    get hubDescriptionInput(): string | undefined;
    private _hubDisplayName?;
    get hubDisplayName(): string;
    set hubDisplayName(value: string);
    resetHubDisplayName(): void;
    get hubDisplayNameInput(): string | undefined;
    private _hubName?;
    get hubName(): string;
    set hubName(value: string);
    get hubNameInput(): string | undefined;
    private _hubSearchKeywords?;
    get hubSearchKeywords(): string[];
    set hubSearchKeywords(value: string[]);
    resetHubSearchKeywords(): void;
    get hubSearchKeywordsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _s3StorageConfig;
    get s3StorageConfig(): SagemakerHubS3StorageConfigOutputReference;
    putS3StorageConfig(value: SagemakerHubS3StorageConfig): void;
    resetS3StorageConfig(): void;
    get s3StorageConfigInput(): SagemakerHubS3StorageConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
