/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationAzureBlobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#access_tier DatasyncLocationAzureBlob#access_tier}
    */
    readonly accessTier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#agent_arns DatasyncLocationAzureBlob#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#authentication_type DatasyncLocationAzureBlob#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#blob_type DatasyncLocationAzureBlob#blob_type}
    */
    readonly blobType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#container_url DatasyncLocationAzureBlob#container_url}
    */
    readonly containerUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#id DatasyncLocationAzureBlob#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#subdirectory DatasyncLocationAzureBlob#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#tags DatasyncLocationAzureBlob#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#tags_all DatasyncLocationAzureBlob#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * sas_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#sas_configuration DatasyncLocationAzureBlob#sas_configuration}
    */
    readonly sasConfiguration?: DatasyncLocationAzureBlobSasConfiguration;
}
export interface DatasyncLocationAzureBlobSasConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#token DatasyncLocationAzureBlob#token}
    */
    readonly token: string;
}
export declare function datasyncLocationAzureBlobSasConfigurationToTerraform(struct?: DatasyncLocationAzureBlobSasConfigurationOutputReference | DatasyncLocationAzureBlobSasConfiguration): any;
export declare function datasyncLocationAzureBlobSasConfigurationToHclTerraform(struct?: DatasyncLocationAzureBlobSasConfigurationOutputReference | DatasyncLocationAzureBlobSasConfiguration): any;
export declare class DatasyncLocationAzureBlobSasConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationAzureBlobSasConfiguration | undefined;
    set internalValue(value: DatasyncLocationAzureBlobSasConfiguration | undefined);
    private _token?;
    get token(): string;
    set token(value: string);
    get tokenInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob aws_datasync_location_azure_blob}
*/
export declare class DatasyncLocationAzureBlob extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_azure_blob";
    /**
    * Generates CDKTF code for importing a DatasyncLocationAzureBlob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationAzureBlob to import
    * @param importFromId The id of the existing DatasyncLocationAzureBlob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationAzureBlob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_azure_blob aws_datasync_location_azure_blob} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationAzureBlobConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationAzureBlobConfig);
    private _accessTier?;
    get accessTier(): string;
    set accessTier(value: string);
    resetAccessTier(): void;
    get accessTierInput(): string | undefined;
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[] | undefined;
    get arn(): string;
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string | undefined;
    private _blobType?;
    get blobType(): string;
    set blobType(value: string);
    resetBlobType(): void;
    get blobTypeInput(): string | undefined;
    private _containerUrl?;
    get containerUrl(): string;
    set containerUrl(value: string);
    get containerUrlInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _sasConfiguration;
    get sasConfiguration(): DatasyncLocationAzureBlobSasConfigurationOutputReference;
    putSasConfiguration(value: DatasyncLocationAzureBlobSasConfiguration): void;
    resetSasConfiguration(): void;
    get sasConfigurationInput(): DatasyncLocationAzureBlobSasConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
