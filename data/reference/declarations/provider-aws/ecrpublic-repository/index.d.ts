/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrpublicRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#force_destroy EcrpublicRepository#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#id EcrpublicRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#repository_name EcrpublicRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#tags EcrpublicRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#tags_all EcrpublicRepository#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * catalog_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#catalog_data EcrpublicRepository#catalog_data}
    */
    readonly catalogData?: EcrpublicRepositoryCatalogData;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#timeouts EcrpublicRepository#timeouts}
    */
    readonly timeouts?: EcrpublicRepositoryTimeouts;
}
export interface EcrpublicRepositoryCatalogData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#about_text EcrpublicRepository#about_text}
    */
    readonly aboutText?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#architectures EcrpublicRepository#architectures}
    */
    readonly architectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#description EcrpublicRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#logo_image_blob EcrpublicRepository#logo_image_blob}
    */
    readonly logoImageBlob?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#operating_systems EcrpublicRepository#operating_systems}
    */
    readonly operatingSystems?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#usage_text EcrpublicRepository#usage_text}
    */
    readonly usageText?: string;
}
export declare function ecrpublicRepositoryCatalogDataToTerraform(struct?: EcrpublicRepositoryCatalogDataOutputReference | EcrpublicRepositoryCatalogData): any;
export declare function ecrpublicRepositoryCatalogDataToHclTerraform(struct?: EcrpublicRepositoryCatalogDataOutputReference | EcrpublicRepositoryCatalogData): any;
export declare class EcrpublicRepositoryCatalogDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcrpublicRepositoryCatalogData | undefined;
    set internalValue(value: EcrpublicRepositoryCatalogData | undefined);
    private _aboutText?;
    get aboutText(): string;
    set aboutText(value: string);
    resetAboutText(): void;
    get aboutTextInput(): string | undefined;
    private _architectures?;
    get architectures(): string[];
    set architectures(value: string[]);
    resetArchitectures(): void;
    get architecturesInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _logoImageBlob?;
    get logoImageBlob(): string;
    set logoImageBlob(value: string);
    resetLogoImageBlob(): void;
    get logoImageBlobInput(): string | undefined;
    private _operatingSystems?;
    get operatingSystems(): string[];
    set operatingSystems(value: string[]);
    resetOperatingSystems(): void;
    get operatingSystemsInput(): string[] | undefined;
    private _usageText?;
    get usageText(): string;
    set usageText(value: string);
    resetUsageText(): void;
    get usageTextInput(): string | undefined;
}
export interface EcrpublicRepositoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#delete EcrpublicRepository#delete}
    */
    readonly delete?: string;
}
export declare function ecrpublicRepositoryTimeoutsToTerraform(struct?: EcrpublicRepositoryTimeouts | cdktf.IResolvable): any;
export declare function ecrpublicRepositoryTimeoutsToHclTerraform(struct?: EcrpublicRepositoryTimeouts | cdktf.IResolvable): any;
export declare class EcrpublicRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcrpublicRepositoryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EcrpublicRepositoryTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository aws_ecrpublic_repository}
*/
export declare class EcrpublicRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecrpublic_repository";
    /**
    * Generates CDKTF code for importing a EcrpublicRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrpublicRepository to import
    * @param importFromId The id of the existing EcrpublicRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrpublicRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecrpublic_repository aws_ecrpublic_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrpublicRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: EcrpublicRepositoryConfig);
    get arn(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get registryId(): string;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
    get repositoryUri(): string;
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
    private _catalogData;
    get catalogData(): EcrpublicRepositoryCatalogDataOutputReference;
    putCatalogData(value: EcrpublicRepositoryCatalogData): void;
    resetCatalogData(): void;
    get catalogDataInput(): EcrpublicRepositoryCatalogData | undefined;
    private _timeouts;
    get timeouts(): EcrpublicRepositoryTimeoutsOutputReference;
    putTimeouts(value: EcrpublicRepositoryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EcrpublicRepositoryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
