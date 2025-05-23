/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerAppImageConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#app_image_config_name SagemakerAppImageConfig#app_image_config_name}
    */
    readonly appImageConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#id SagemakerAppImageConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#tags SagemakerAppImageConfig#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#tags_all SagemakerAppImageConfig#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * code_editor_app_image_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#code_editor_app_image_config SagemakerAppImageConfig#code_editor_app_image_config}
    */
    readonly codeEditorAppImageConfig?: SagemakerAppImageConfigCodeEditorAppImageConfig;
    /**
    * jupyter_lab_image_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#jupyter_lab_image_config SagemakerAppImageConfig#jupyter_lab_image_config}
    */
    readonly jupyterLabImageConfig?: SagemakerAppImageConfigJupyterLabImageConfig;
    /**
    * kernel_gateway_image_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#kernel_gateway_image_config SagemakerAppImageConfig#kernel_gateway_image_config}
    */
    readonly kernelGatewayImageConfig?: SagemakerAppImageConfigKernelGatewayImageConfig;
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}
    */
    readonly containerArguments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}
    */
    readonly containerEntrypoint?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}
    */
    readonly containerEnvironmentVariables?: {
        [key: string]: string;
    };
}
export declare function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): any;
export declare function sagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): any;
export declare class SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | undefined);
    private _containerArguments?;
    get containerArguments(): string[];
    set containerArguments(value: string[]);
    resetContainerArguments(): void;
    get containerArgumentsInput(): string[] | undefined;
    private _containerEntrypoint?;
    get containerEntrypoint(): string[];
    set containerEntrypoint(value: string[]);
    resetContainerEntrypoint(): void;
    get containerEntrypointInput(): string[] | undefined;
    private _containerEnvironmentVariables?;
    get containerEnvironmentVariables(): {
        [key: string]: string;
    };
    set containerEnvironmentVariables(value: {
        [key: string]: string;
    });
    resetContainerEnvironmentVariables(): void;
    get containerEnvironmentVariablesInput(): {
        [key: string]: string;
    } | undefined;
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
    */
    readonly defaultGid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
    */
    readonly defaultUid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
    */
    readonly mountPath?: string;
}
export declare function sagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig): any;
export declare function sagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig): any;
export declare class SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig | undefined);
    private _defaultGid?;
    get defaultGid(): number;
    set defaultGid(value: number);
    resetDefaultGid(): void;
    get defaultGidInput(): number | undefined;
    private _defaultUid?;
    get defaultUid(): number;
    set defaultUid(value: number);
    resetDefaultUid(): void;
    get defaultUidInput(): number | undefined;
    private _mountPath?;
    get mountPath(): string;
    set mountPath(value: string);
    resetMountPath(): void;
    get mountPathInput(): string | undefined;
}
export interface SagemakerAppImageConfigCodeEditorAppImageConfig {
    /**
    * container_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}
    */
    readonly containerConfig?: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig;
    /**
    * file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
    */
    readonly fileSystemConfig?: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig;
}
export declare function sagemakerAppImageConfigCodeEditorAppImageConfigToTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfig): any;
export declare function sagemakerAppImageConfigCodeEditorAppImageConfigToHclTerraform(struct?: SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference | SagemakerAppImageConfigCodeEditorAppImageConfig): any;
export declare class SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigCodeEditorAppImageConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigCodeEditorAppImageConfig | undefined);
    private _containerConfig;
    get containerConfig(): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference;
    putContainerConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig): void;
    resetContainerConfig(): void;
    get containerConfigInput(): SagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig | undefined;
    private _fileSystemConfig;
    get fileSystemConfig(): SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfigOutputReference;
    putFileSystemConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig): void;
    resetFileSystemConfig(): void;
    get fileSystemConfigInput(): SagemakerAppImageConfigCodeEditorAppImageConfigFileSystemConfig | undefined;
}
export interface SagemakerAppImageConfigJupyterLabImageConfigContainerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_arguments SagemakerAppImageConfig#container_arguments}
    */
    readonly containerArguments?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_entrypoint SagemakerAppImageConfig#container_entrypoint}
    */
    readonly containerEntrypoint?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_environment_variables SagemakerAppImageConfig#container_environment_variables}
    */
    readonly containerEnvironmentVariables?: {
        [key: string]: string;
    };
}
export declare function sagemakerAppImageConfigJupyterLabImageConfigContainerConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigContainerConfig): any;
export declare function sagemakerAppImageConfigJupyterLabImageConfigContainerConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigContainerConfig): any;
export declare class SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigJupyterLabImageConfigContainerConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig | undefined);
    private _containerArguments?;
    get containerArguments(): string[];
    set containerArguments(value: string[]);
    resetContainerArguments(): void;
    get containerArgumentsInput(): string[] | undefined;
    private _containerEntrypoint?;
    get containerEntrypoint(): string[];
    set containerEntrypoint(value: string[]);
    resetContainerEntrypoint(): void;
    get containerEntrypointInput(): string[] | undefined;
    private _containerEnvironmentVariables?;
    get containerEnvironmentVariables(): {
        [key: string]: string;
    };
    set containerEnvironmentVariables(value: {
        [key: string]: string;
    });
    resetContainerEnvironmentVariables(): void;
    get containerEnvironmentVariablesInput(): {
        [key: string]: string;
    } | undefined;
}
export interface SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
    */
    readonly defaultGid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
    */
    readonly defaultUid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
    */
    readonly mountPath?: string;
}
export declare function sagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig): any;
export declare function sagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig): any;
export declare class SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig | undefined);
    private _defaultGid?;
    get defaultGid(): number;
    set defaultGid(value: number);
    resetDefaultGid(): void;
    get defaultGidInput(): number | undefined;
    private _defaultUid?;
    get defaultUid(): number;
    set defaultUid(value: number);
    resetDefaultUid(): void;
    get defaultUidInput(): number | undefined;
    private _mountPath?;
    get mountPath(): string;
    set mountPath(value: string);
    resetMountPath(): void;
    get mountPathInput(): string | undefined;
}
export interface SagemakerAppImageConfigJupyterLabImageConfig {
    /**
    * container_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#container_config SagemakerAppImageConfig#container_config}
    */
    readonly containerConfig?: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig;
    /**
    * file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
    */
    readonly fileSystemConfig?: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig;
}
export declare function sagemakerAppImageConfigJupyterLabImageConfigToTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfig): any;
export declare function sagemakerAppImageConfigJupyterLabImageConfigToHclTerraform(struct?: SagemakerAppImageConfigJupyterLabImageConfigOutputReference | SagemakerAppImageConfigJupyterLabImageConfig): any;
export declare class SagemakerAppImageConfigJupyterLabImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigJupyterLabImageConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigJupyterLabImageConfig | undefined);
    private _containerConfig;
    get containerConfig(): SagemakerAppImageConfigJupyterLabImageConfigContainerConfigOutputReference;
    putContainerConfig(value: SagemakerAppImageConfigJupyterLabImageConfigContainerConfig): void;
    resetContainerConfig(): void;
    get containerConfigInput(): SagemakerAppImageConfigJupyterLabImageConfigContainerConfig | undefined;
    private _fileSystemConfig;
    get fileSystemConfig(): SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfigOutputReference;
    putFileSystemConfig(value: SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig): void;
    resetFileSystemConfig(): void;
    get fileSystemConfigInput(): SagemakerAppImageConfigJupyterLabImageConfigFileSystemConfig | undefined;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#default_gid SagemakerAppImageConfig#default_gid}
    */
    readonly defaultGid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#default_uid SagemakerAppImageConfig#default_uid}
    */
    readonly defaultUid?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#mount_path SagemakerAppImageConfig#mount_path}
    */
    readonly mountPath?: string;
}
export declare function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any;
export declare function sagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): any;
export declare class SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined);
    private _defaultGid?;
    get defaultGid(): number;
    set defaultGid(value: number);
    resetDefaultGid(): void;
    get defaultGidInput(): number | undefined;
    private _defaultUid?;
    get defaultUid(): number;
    set defaultUid(value: number);
    resetDefaultUid(): void;
    get defaultUidInput(): number | undefined;
    private _mountPath?;
    get mountPath(): string;
    set mountPath(value: string);
    resetMountPath(): void;
    get mountPathInput(): string | undefined;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#display_name SagemakerAppImageConfig#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#name SagemakerAppImageConfig#name}
    */
    readonly name: string;
}
export declare function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable): any;
export declare function sagemakerAppImageConfigKernelGatewayImageConfigKernelSpecToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable): any;
export declare class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec | cdktf.IResolvable | undefined);
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecOutputReference;
}
export interface SagemakerAppImageConfigKernelGatewayImageConfig {
    /**
    * file_system_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#file_system_config SagemakerAppImageConfig#file_system_config}
    */
    readonly fileSystemConfig?: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig;
    /**
    * kernel_spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#kernel_spec SagemakerAppImageConfig#kernel_spec}
    */
    readonly kernelSpec: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[] | cdktf.IResolvable;
}
export declare function sagemakerAppImageConfigKernelGatewayImageConfigToTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any;
export declare function sagemakerAppImageConfigKernelGatewayImageConfigToHclTerraform(struct?: SagemakerAppImageConfigKernelGatewayImageConfigOutputReference | SagemakerAppImageConfigKernelGatewayImageConfig): any;
export declare class SagemakerAppImageConfigKernelGatewayImageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerAppImageConfigKernelGatewayImageConfig | undefined;
    set internalValue(value: SagemakerAppImageConfigKernelGatewayImageConfig | undefined);
    private _fileSystemConfig;
    get fileSystemConfig(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference;
    putFileSystemConfig(value: SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig): void;
    resetFileSystemConfig(): void;
    get fileSystemConfigInput(): SagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig | undefined;
    private _kernelSpec;
    get kernelSpec(): SagemakerAppImageConfigKernelGatewayImageConfigKernelSpecList;
    putKernelSpec(value: SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[] | cdktf.IResolvable): void;
    get kernelSpecInput(): cdktf.IResolvable | SagemakerAppImageConfigKernelGatewayImageConfigKernelSpec[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config}
*/
export declare class SagemakerAppImageConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_app_image_config";
    /**
    * Generates CDKTF code for importing a SagemakerAppImageConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerAppImageConfig to import
    * @param importFromId The id of the existing SagemakerAppImageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerAppImageConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_app_image_config aws_sagemaker_app_image_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerAppImageConfigConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerAppImageConfigConfig);
    private _appImageConfigName?;
    get appImageConfigName(): string;
    set appImageConfigName(value: string);
    get appImageConfigNameInput(): string | undefined;
    get arn(): string;
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
    private _codeEditorAppImageConfig;
    get codeEditorAppImageConfig(): SagemakerAppImageConfigCodeEditorAppImageConfigOutputReference;
    putCodeEditorAppImageConfig(value: SagemakerAppImageConfigCodeEditorAppImageConfig): void;
    resetCodeEditorAppImageConfig(): void;
    get codeEditorAppImageConfigInput(): SagemakerAppImageConfigCodeEditorAppImageConfig | undefined;
    private _jupyterLabImageConfig;
    get jupyterLabImageConfig(): SagemakerAppImageConfigJupyterLabImageConfigOutputReference;
    putJupyterLabImageConfig(value: SagemakerAppImageConfigJupyterLabImageConfig): void;
    resetJupyterLabImageConfig(): void;
    get jupyterLabImageConfigInput(): SagemakerAppImageConfigJupyterLabImageConfig | undefined;
    private _kernelGatewayImageConfig;
    get kernelGatewayImageConfig(): SagemakerAppImageConfigKernelGatewayImageConfigOutputReference;
    putKernelGatewayImageConfig(value: SagemakerAppImageConfigKernelGatewayImageConfig): void;
    resetKernelGatewayImageConfig(): void;
    get kernelGatewayImageConfigInput(): SagemakerAppImageConfigKernelGatewayImageConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
