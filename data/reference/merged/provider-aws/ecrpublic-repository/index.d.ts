/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrpublicRepositoryConfig extends cdktf.TerraformMetaArguments {
    /** */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /** */
    readonly id?: string;
    /** (Required) Name of the repository. */
    readonly repositoryName: string;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** */
    readonly catalogData?: EcrpublicRepositoryCatalogData;
    /** */
    readonly timeouts?: EcrpublicRepositoryTimeouts;
}
export interface EcrpublicRepositoryCatalogData {
    /** (Optional) A detailed description of the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The text must be in markdown format. */
    readonly aboutText?: string;
    /** (Optional) The system architecture that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported architectures will appear as badges on the repository and are used as search filters: `ARM`, `ARM 64`, `x86`, `x86-64` */
    readonly architectures?: string[];
    /** (Optional) A short description of the contents of the repository. This text appears in both the image details and also when searching for repositories on the Amazon ECR Public Gallery. */
    readonly description?: string;
    /** (Optional) The base64-encoded repository logo payload. (Only visible for verified accounts) Note that drift detection is disabled for this attribute. */
    readonly logoImageBlob?: string;
    /** (Optional) The operating systems that the images in the repository are compatible with. On the Amazon ECR Public Gallery, the following supported operating systems will appear as badges on the repository and are used as search filters: `Linux`, `Windows` */
    readonly operatingSystems?: string[];
    /** (Optional) Detailed information on how to use the contents of the repository. It is publicly visible in the Amazon ECR Public Gallery. The usage text provides context, support information, and additional usage details for users of the repository. The text must be in markdown format. */
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
    /** (Default `20m`) */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecrpublic_repository aws_ecrpublic_repository}
*/
export declare class EcrpublicRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecrpublic_repository";
    /**
    * Generates CDKTF code for importing a EcrpublicRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrpublicRepository to import
    * @param importFromId The id of the existing EcrpublicRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecrpublic_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrpublicRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecrpublic_repository aws_ecrpublic_repository} Resource
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
