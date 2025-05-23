/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerNotebookInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#accelerator_types SagemakerNotebookInstance#accelerator_types}
    */
    readonly acceleratorTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}
    */
    readonly additionalCodeRepositories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#default_code_repository SagemakerNotebookInstance#default_code_repository}
    */
    readonly defaultCodeRepository?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#direct_internet_access SagemakerNotebookInstance#direct_internet_access}
    */
    readonly directInternetAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#id SagemakerNotebookInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#instance_type SagemakerNotebookInstance#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#kms_key_id SagemakerNotebookInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}
    */
    readonly lifecycleConfigName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#name SagemakerNotebookInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#platform_identifier SagemakerNotebookInstance#platform_identifier}
    */
    readonly platformIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#role_arn SagemakerNotebookInstance#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#root_access SagemakerNotebookInstance#root_access}
    */
    readonly rootAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#security_groups SagemakerNotebookInstance#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#subnet_id SagemakerNotebookInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#tags SagemakerNotebookInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#tags_all SagemakerNotebookInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#volume_size SagemakerNotebookInstance#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * instance_metadata_service_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#instance_metadata_service_configuration SagemakerNotebookInstance#instance_metadata_service_configuration}
    */
    readonly instanceMetadataServiceConfiguration?: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration;
}
export interface SagemakerNotebookInstanceInstanceMetadataServiceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#minimum_instance_metadata_service_version SagemakerNotebookInstance#minimum_instance_metadata_service_version}
    */
    readonly minimumInstanceMetadataServiceVersion?: string;
}
export declare function sagemakerNotebookInstanceInstanceMetadataServiceConfigurationToTerraform(struct?: SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference | SagemakerNotebookInstanceInstanceMetadataServiceConfiguration): any;
export declare function sagemakerNotebookInstanceInstanceMetadataServiceConfigurationToHclTerraform(struct?: SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference | SagemakerNotebookInstanceInstanceMetadataServiceConfiguration): any;
export declare class SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerNotebookInstanceInstanceMetadataServiceConfiguration | undefined;
    set internalValue(value: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration | undefined);
    private _minimumInstanceMetadataServiceVersion?;
    get minimumInstanceMetadataServiceVersion(): string;
    set minimumInstanceMetadataServiceVersion(value: string);
    resetMinimumInstanceMetadataServiceVersion(): void;
    get minimumInstanceMetadataServiceVersionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance aws_sagemaker_notebook_instance}
*/
export declare class SagemakerNotebookInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_notebook_instance";
    /**
    * Generates CDKTF code for importing a SagemakerNotebookInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerNotebookInstance to import
    * @param importFromId The id of the existing SagemakerNotebookInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerNotebookInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_notebook_instance aws_sagemaker_notebook_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceConfig);
    private _acceleratorTypes?;
    get acceleratorTypes(): string[];
    set acceleratorTypes(value: string[]);
    resetAcceleratorTypes(): void;
    get acceleratorTypesInput(): string[] | undefined;
    private _additionalCodeRepositories?;
    get additionalCodeRepositories(): string[];
    set additionalCodeRepositories(value: string[]);
    resetAdditionalCodeRepositories(): void;
    get additionalCodeRepositoriesInput(): string[] | undefined;
    get arn(): string;
    private _defaultCodeRepository?;
    get defaultCodeRepository(): string;
    set defaultCodeRepository(value: string);
    resetDefaultCodeRepository(): void;
    get defaultCodeRepositoryInput(): string | undefined;
    private _directInternetAccess?;
    get directInternetAccess(): string;
    set directInternetAccess(value: string);
    resetDirectInternetAccess(): void;
    get directInternetAccessInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _lifecycleConfigName?;
    get lifecycleConfigName(): string;
    set lifecycleConfigName(value: string);
    resetLifecycleConfigName(): void;
    get lifecycleConfigNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get networkInterfaceId(): string;
    private _platformIdentifier?;
    get platformIdentifier(): string;
    set platformIdentifier(value: string);
    resetPlatformIdentifier(): void;
    get platformIdentifierInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _rootAccess?;
    get rootAccess(): string;
    set rootAccess(value: string);
    resetRootAccess(): void;
    get rootAccessInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    get url(): string;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _instanceMetadataServiceConfiguration;
    get instanceMetadataServiceConfiguration(): SagemakerNotebookInstanceInstanceMetadataServiceConfigurationOutputReference;
    putInstanceMetadataServiceConfiguration(value: SagemakerNotebookInstanceInstanceMetadataServiceConfiguration): void;
    resetInstanceMetadataServiceConfiguration(): void;
    get instanceMetadataServiceConfigurationInput(): SagemakerNotebookInstanceInstanceMetadataServiceConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
