/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#container_properties BatchJobDefinition#container_properties}
    */
    readonly containerProperties?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#deregister_on_new_revision BatchJobDefinition#deregister_on_new_revision}
    */
    readonly deregisterOnNewRevision?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#ecs_properties BatchJobDefinition#ecs_properties}
    */
    readonly ecsProperties?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#id BatchJobDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#node_properties BatchJobDefinition#node_properties}
    */
    readonly nodeProperties?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#parameters BatchJobDefinition#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}
    */
    readonly platformCapabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}
    */
    readonly propagateTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#scheduling_priority BatchJobDefinition#scheduling_priority}
    */
    readonly schedulingPriority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#tags BatchJobDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#tags_all BatchJobDefinition#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#type BatchJobDefinition#type}
    */
    readonly type: string;
    /**
    * eks_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#eks_properties BatchJobDefinition#eks_properties}
    */
    readonly eksProperties?: BatchJobDefinitionEksProperties;
    /**
    * retry_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}
    */
    readonly retryStrategy?: BatchJobDefinitionRetryStrategy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#timeout BatchJobDefinition#timeout}
    */
    readonly timeout?: BatchJobDefinitionTimeout;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#value BatchJobDefinition#value}
    */
    readonly value: string;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersEnvToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersEnvToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesContainersResources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}
    */
    readonly limits?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}
    */
    readonly requests?: {
        [key: string]: string;
    };
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined);
    private _limits?;
    get limits(): {
        [key: string]: string;
    };
    set limits(value: {
        [key: string]: string;
    });
    resetLimits(): void;
    get limitsInput(): {
        [key: string]: string;
    } | undefined;
    private _requests?;
    get requests(): {
        [key: string]: string;
    };
    set requests(value: {
        [key: string]: string;
    });
    resetRequests(): void;
    get requestsInput(): {
        [key: string]: string;
    } | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}
    */
    readonly privileged?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}
    */
    readonly readOnlyRootFileSystem?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}
    */
    readonly runAsGroup?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}
    */
    readonly runAsNonRoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}
    */
    readonly runAsUser?: number;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined);
    private _privileged?;
    get privileged(): boolean | cdktf.IResolvable;
    set privileged(value: boolean | cdktf.IResolvable);
    resetPrivileged(): void;
    get privilegedInput(): boolean | cdktf.IResolvable | undefined;
    private _readOnlyRootFileSystem?;
    get readOnlyRootFileSystem(): boolean | cdktf.IResolvable;
    set readOnlyRootFileSystem(value: boolean | cdktf.IResolvable);
    resetReadOnlyRootFileSystem(): void;
    get readOnlyRootFileSystemInput(): boolean | cdktf.IResolvable | undefined;
    private _runAsGroup?;
    get runAsGroup(): number;
    set runAsGroup(value: number);
    resetRunAsGroup(): void;
    get runAsGroupInput(): number | undefined;
    private _runAsNonRoot?;
    get runAsNonRoot(): boolean | cdktf.IResolvable;
    set runAsNonRoot(value: boolean | cdktf.IResolvable);
    resetRunAsNonRoot(): void;
    get runAsNonRootInput(): boolean | cdktf.IResolvable | undefined;
    private _runAsUser?;
    get runAsUser(): number;
    set runAsUser(value: number);
    resetRunAsUser(): void;
    get runAsUserInput(): number | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}
    */
    readonly mountPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | cdktf.IResolvable | undefined);
    private _mountPath?;
    get mountPath(): string;
    set mountPath(value: string);
    get mountPathInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesContainers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#args BatchJobDefinition#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#command BatchJobDefinition#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#image BatchJobDefinition#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}
    */
    readonly imagePullPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name?: string;
    /**
    * env block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#env BatchJobDefinition#env}
    */
    readonly env?: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[] | cdktf.IResolvable;
    /**
    * resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#resources BatchJobDefinition#resources}
    */
    readonly resources?: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources;
    /**
    * security_context block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#security_context BatchJobDefinition#security_context}
    */
    readonly securityContext?: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext;
    /**
    * volume_mounts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#volume_mounts BatchJobDefinition#volume_mounts}
    */
    readonly volumeMounts?: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[] | cdktf.IResolvable;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainers | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesContainersToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesContainers | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesContainers | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesContainers | cdktf.IResolvable | undefined);
    private _args?;
    get args(): string[];
    set args(value: string[]);
    resetArgs(): void;
    get argsInput(): string[] | undefined;
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[] | undefined;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string | undefined;
    private _imagePullPolicy?;
    get imagePullPolicy(): string;
    set imagePullPolicy(value: string);
    resetImagePullPolicy(): void;
    get imagePullPolicyInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _env;
    get env(): BatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList;
    putEnv(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[] | cdktf.IResolvable): void;
    resetEnv(): void;
    get envInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersEnv[] | undefined;
    private _resources;
    get resources(): BatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference;
    putResources(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersResources): void;
    resetResources(): void;
    get resourcesInput(): BatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined;
    private _securityContext;
    get securityContext(): BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference;
    putSecurityContext(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): void;
    resetSecurityContext(): void;
    get securityContextInput(): BatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined;
    private _volumeMounts;
    get volumeMounts(): BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList;
    putVolumeMounts(value: BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[] | cdktf.IResolvable): void;
    resetVolumeMounts(): void;
    get volumeMountsInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts[] | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesContainersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesContainers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name: string;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesImagePullSecretToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesImagePullSecretToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#value BatchJobDefinition#value}
    */
    readonly value: string;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#limits BatchJobDefinition#limits}
    */
    readonly limits?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#requests BatchJobDefinition#requests}
    */
    readonly requests?: {
        [key: string]: string;
    };
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined);
    private _limits?;
    get limits(): {
        [key: string]: string;
    };
    set limits(value: {
        [key: string]: string;
    });
    resetLimits(): void;
    get limitsInput(): {
        [key: string]: string;
    } | undefined;
    private _requests?;
    get requests(): {
        [key: string]: string;
    };
    set requests(value: {
        [key: string]: string;
    });
    resetRequests(): void;
    get requestsInput(): {
        [key: string]: string;
    } | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#privileged BatchJobDefinition#privileged}
    */
    readonly privileged?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#read_only_root_file_system BatchJobDefinition#read_only_root_file_system}
    */
    readonly readOnlyRootFileSystem?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#run_as_group BatchJobDefinition#run_as_group}
    */
    readonly runAsGroup?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#run_as_non_root BatchJobDefinition#run_as_non_root}
    */
    readonly runAsNonRoot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#run_as_user BatchJobDefinition#run_as_user}
    */
    readonly runAsUser?: number;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined);
    private _privileged?;
    get privileged(): boolean | cdktf.IResolvable;
    set privileged(value: boolean | cdktf.IResolvable);
    resetPrivileged(): void;
    get privilegedInput(): boolean | cdktf.IResolvable | undefined;
    private _readOnlyRootFileSystem?;
    get readOnlyRootFileSystem(): boolean | cdktf.IResolvable;
    set readOnlyRootFileSystem(value: boolean | cdktf.IResolvable);
    resetReadOnlyRootFileSystem(): void;
    get readOnlyRootFileSystemInput(): boolean | cdktf.IResolvable | undefined;
    private _runAsGroup?;
    get runAsGroup(): number;
    set runAsGroup(value: number);
    resetRunAsGroup(): void;
    get runAsGroupInput(): number | undefined;
    private _runAsNonRoot?;
    get runAsNonRoot(): boolean | cdktf.IResolvable;
    set runAsNonRoot(value: boolean | cdktf.IResolvable);
    resetRunAsNonRoot(): void;
    get runAsNonRootInput(): boolean | cdktf.IResolvable | undefined;
    private _runAsUser?;
    get runAsUser(): number;
    set runAsUser(value: number);
    resetRunAsUser(): void;
    get runAsUserInput(): number | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#mount_path BatchJobDefinition#mount_path}
    */
    readonly mountPath: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#read_only BatchJobDefinition#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | cdktf.IResolvable | undefined);
    private _mountPath?;
    get mountPath(): string;
    set mountPath(value: string);
    get mountPathInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesInitContainers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#args BatchJobDefinition#args}
    */
    readonly args?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#command BatchJobDefinition#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#image BatchJobDefinition#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#image_pull_policy BatchJobDefinition#image_pull_policy}
    */
    readonly imagePullPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name?: string;
    /**
    * env block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#env BatchJobDefinition#env}
    */
    readonly env?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[] | cdktf.IResolvable;
    /**
    * resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#resources BatchJobDefinition#resources}
    */
    readonly resources?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources;
    /**
    * security_context block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#security_context BatchJobDefinition#security_context}
    */
    readonly securityContext?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext;
    /**
    * volume_mounts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#volume_mounts BatchJobDefinition#volume_mounts}
    */
    readonly volumeMounts?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[] | cdktf.IResolvable;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainers | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesInitContainersToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainers | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainers | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainers | cdktf.IResolvable | undefined);
    private _args?;
    get args(): string[];
    set args(value: string[]);
    resetArgs(): void;
    get argsInput(): string[] | undefined;
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[] | undefined;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string | undefined;
    private _imagePullPolicy?;
    get imagePullPolicy(): string;
    set imagePullPolicy(value: string);
    resetImagePullPolicy(): void;
    get imagePullPolicyInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _env;
    get env(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList;
    putEnv(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[] | cdktf.IResolvable): void;
    resetEnv(): void;
    get envInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv[] | undefined;
    private _resources;
    get resources(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference;
    putResources(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): void;
    resetResources(): void;
    get resourcesInput(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined;
    private _securityContext;
    get securityContext(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference;
    putSecurityContext(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): void;
    resetSecurityContext(): void;
    get securityContextInput(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined;
    private _volumeMounts;
    get volumeMounts(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList;
    putVolumeMounts(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[] | cdktf.IResolvable): void;
    resetVolumeMounts(): void;
    get volumeMountsInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts[] | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesMetadata {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#labels BatchJobDefinition#labels}
    */
    readonly labels?: {
        [key: string]: string;
    };
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesMetadataToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesMetadata): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesMetadataToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesMetadata): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined);
    private _labels?;
    get labels(): {
        [key: string]: string;
    };
    set labels(value: {
        [key: string]: string;
    });
    resetLabels(): void;
    get labelsInput(): {
        [key: string]: string;
    } | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#medium BatchJobDefinition#medium}
    */
    readonly medium?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#size_limit BatchJobDefinition#size_limit}
    */
    readonly sizeLimit: string;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined);
    private _medium?;
    get medium(): string;
    set medium(value: string);
    resetMedium(): void;
    get mediumInput(): string | undefined;
    private _sizeLimit?;
    get sizeLimit(): string;
    set sizeLimit(value: string);
    get sizeLimitInput(): string | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#path BatchJobDefinition#path}
    */
    readonly path: string;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined);
    private _path?;
    get path(): string;
    set path(value: string);
    get pathInput(): string | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#optional BatchJobDefinition#optional}
    */
    readonly optional?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#secret_name BatchJobDefinition#secret_name}
    */
    readonly secretName: string;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference | BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined);
    private _optional?;
    get optional(): boolean | cdktf.IResolvable;
    set optional(value: boolean | cdktf.IResolvable);
    resetOptional(): void;
    get optionalInput(): boolean | cdktf.IResolvable | undefined;
    private _secretName?;
    get secretName(): string;
    set secretName(value: string);
    get secretNameInput(): string | undefined;
}
export interface BatchJobDefinitionEksPropertiesPodPropertiesVolumes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#name BatchJobDefinition#name}
    */
    readonly name?: string;
    /**
    * empty_dir block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#empty_dir BatchJobDefinition#empty_dir}
    */
    readonly emptyDir?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir;
    /**
    * host_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#host_path BatchJobDefinition#host_path}
    */
    readonly hostPath?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath;
    /**
    * secret block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#secret BatchJobDefinition#secret}
    */
    readonly secret?: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumes | cdktf.IResolvable): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesVolumesToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesVolumes | cdktf.IResolvable): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionEksPropertiesPodPropertiesVolumes | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumes | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _emptyDir;
    get emptyDir(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference;
    putEmptyDir(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): void;
    resetEmptyDir(): void;
    get emptyDirInput(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined;
    private _hostPath;
    get hostPath(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference;
    putHostPath(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): void;
    resetHostPath(): void;
    get hostPathInput(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined;
    private _secret;
    get secret(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference;
    putSecret(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): void;
    resetSecret(): void;
    get secretInput(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined;
}
export declare class BatchJobDefinitionEksPropertiesPodPropertiesVolumesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionEksPropertiesPodPropertiesVolumes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference;
}
export interface BatchJobDefinitionEksPropertiesPodProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#dns_policy BatchJobDefinition#dns_policy}
    */
    readonly dnsPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#host_network BatchJobDefinition#host_network}
    */
    readonly hostNetwork?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#service_account_name BatchJobDefinition#service_account_name}
    */
    readonly serviceAccountName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#share_process_namespace BatchJobDefinition#share_process_namespace}
    */
    readonly shareProcessNamespace?: boolean | cdktf.IResolvable;
    /**
    * containers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#containers BatchJobDefinition#containers}
    */
    readonly containers: BatchJobDefinitionEksPropertiesPodPropertiesContainers[] | cdktf.IResolvable;
    /**
    * image_pull_secret block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#image_pull_secret BatchJobDefinition#image_pull_secret}
    */
    readonly imagePullSecret?: BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[] | cdktf.IResolvable;
    /**
    * init_containers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#init_containers BatchJobDefinition#init_containers}
    */
    readonly initContainers?: BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[] | cdktf.IResolvable;
    /**
    * metadata block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#metadata BatchJobDefinition#metadata}
    */
    readonly metadata?: BatchJobDefinitionEksPropertiesPodPropertiesMetadata;
    /**
    * volumes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#volumes BatchJobDefinition#volumes}
    */
    readonly volumes?: BatchJobDefinitionEksPropertiesPodPropertiesVolumes[] | cdktf.IResolvable;
}
export declare function batchJobDefinitionEksPropertiesPodPropertiesToTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesOutputReference | BatchJobDefinitionEksPropertiesPodProperties): any;
export declare function batchJobDefinitionEksPropertiesPodPropertiesToHclTerraform(struct?: BatchJobDefinitionEksPropertiesPodPropertiesOutputReference | BatchJobDefinitionEksPropertiesPodProperties): any;
export declare class BatchJobDefinitionEksPropertiesPodPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksPropertiesPodProperties | undefined;
    set internalValue(value: BatchJobDefinitionEksPropertiesPodProperties | undefined);
    private _dnsPolicy?;
    get dnsPolicy(): string;
    set dnsPolicy(value: string);
    resetDnsPolicy(): void;
    get dnsPolicyInput(): string | undefined;
    private _hostNetwork?;
    get hostNetwork(): boolean | cdktf.IResolvable;
    set hostNetwork(value: boolean | cdktf.IResolvable);
    resetHostNetwork(): void;
    get hostNetworkInput(): boolean | cdktf.IResolvable | undefined;
    private _serviceAccountName?;
    get serviceAccountName(): string;
    set serviceAccountName(value: string);
    resetServiceAccountName(): void;
    get serviceAccountNameInput(): string | undefined;
    private _shareProcessNamespace?;
    get shareProcessNamespace(): boolean | cdktf.IResolvable;
    set shareProcessNamespace(value: boolean | cdktf.IResolvable);
    resetShareProcessNamespace(): void;
    get shareProcessNamespaceInput(): boolean | cdktf.IResolvable | undefined;
    private _containers;
    get containers(): BatchJobDefinitionEksPropertiesPodPropertiesContainersList;
    putContainers(value: BatchJobDefinitionEksPropertiesPodPropertiesContainers[] | cdktf.IResolvable): void;
    get containersInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesContainers[] | undefined;
    private _imagePullSecret;
    get imagePullSecret(): BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretList;
    putImagePullSecret(value: BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[] | cdktf.IResolvable): void;
    resetImagePullSecret(): void;
    get imagePullSecretInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesImagePullSecret[] | undefined;
    private _initContainers;
    get initContainers(): BatchJobDefinitionEksPropertiesPodPropertiesInitContainersList;
    putInitContainers(value: BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[] | cdktf.IResolvable): void;
    resetInitContainers(): void;
    get initContainersInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesInitContainers[] | undefined;
    private _metadata;
    get metadata(): BatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference;
    putMetadata(value: BatchJobDefinitionEksPropertiesPodPropertiesMetadata): void;
    resetMetadata(): void;
    get metadataInput(): BatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined;
    private _volumes;
    get volumes(): BatchJobDefinitionEksPropertiesPodPropertiesVolumesList;
    putVolumes(value: BatchJobDefinitionEksPropertiesPodPropertiesVolumes[] | cdktf.IResolvable): void;
    resetVolumes(): void;
    get volumesInput(): cdktf.IResolvable | BatchJobDefinitionEksPropertiesPodPropertiesVolumes[] | undefined;
}
export interface BatchJobDefinitionEksProperties {
    /**
    * pod_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#pod_properties BatchJobDefinition#pod_properties}
    */
    readonly podProperties: BatchJobDefinitionEksPropertiesPodProperties;
}
export declare function batchJobDefinitionEksPropertiesToTerraform(struct?: BatchJobDefinitionEksPropertiesOutputReference | BatchJobDefinitionEksProperties): any;
export declare function batchJobDefinitionEksPropertiesToHclTerraform(struct?: BatchJobDefinitionEksPropertiesOutputReference | BatchJobDefinitionEksProperties): any;
export declare class BatchJobDefinitionEksPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionEksProperties | undefined;
    set internalValue(value: BatchJobDefinitionEksProperties | undefined);
    private _podProperties;
    get podProperties(): BatchJobDefinitionEksPropertiesPodPropertiesOutputReference;
    putPodProperties(value: BatchJobDefinitionEksPropertiesPodProperties): void;
    get podPropertiesInput(): BatchJobDefinitionEksPropertiesPodProperties | undefined;
}
export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#action BatchJobDefinition#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}
    */
    readonly onExitCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#on_reason BatchJobDefinition#on_reason}
    */
    readonly onReason?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}
    */
    readonly onStatusReason?: string;
}
export declare function batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable): any;
export declare function batchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable): any;
export declare class BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable | undefined;
    set internalValue(value: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _onExitCode?;
    get onExitCode(): string;
    set onExitCode(value: string);
    resetOnExitCode(): void;
    get onExitCodeInput(): string | undefined;
    private _onReason?;
    get onReason(): string;
    set onReason(value: string);
    resetOnReason(): void;
    get onReasonInput(): string | undefined;
    private _onStatusReason?;
    get onStatusReason(): string;
    set onStatusReason(value: string);
    resetOnStatusReason(): void;
    get onStatusReasonInput(): string | undefined;
}
export declare class BatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference;
}
export interface BatchJobDefinitionRetryStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#attempts BatchJobDefinition#attempts}
    */
    readonly attempts?: number;
    /**
    * evaluate_on_exit block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}
    */
    readonly evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable;
}
export declare function batchJobDefinitionRetryStrategyToTerraform(struct?: BatchJobDefinitionRetryStrategyOutputReference | BatchJobDefinitionRetryStrategy): any;
export declare function batchJobDefinitionRetryStrategyToHclTerraform(struct?: BatchJobDefinitionRetryStrategyOutputReference | BatchJobDefinitionRetryStrategy): any;
export declare class BatchJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionRetryStrategy | undefined;
    set internalValue(value: BatchJobDefinitionRetryStrategy | undefined);
    private _attempts?;
    get attempts(): number;
    set attempts(value: number);
    resetAttempts(): void;
    get attemptsInput(): number | undefined;
    private _evaluateOnExit;
    get evaluateOnExit(): BatchJobDefinitionRetryStrategyEvaluateOnExitList;
    putEvaluateOnExit(value: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable): void;
    resetEvaluateOnExit(): void;
    get evaluateOnExitInput(): cdktf.IResolvable | BatchJobDefinitionRetryStrategyEvaluateOnExit[] | undefined;
}
export interface BatchJobDefinitionTimeout {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}
    */
    readonly attemptDurationSeconds?: number;
}
export declare function batchJobDefinitionTimeoutToTerraform(struct?: BatchJobDefinitionTimeoutOutputReference | BatchJobDefinitionTimeout): any;
export declare function batchJobDefinitionTimeoutToHclTerraform(struct?: BatchJobDefinitionTimeoutOutputReference | BatchJobDefinitionTimeout): any;
export declare class BatchJobDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchJobDefinitionTimeout | undefined;
    set internalValue(value: BatchJobDefinitionTimeout | undefined);
    private _attemptDurationSeconds?;
    get attemptDurationSeconds(): number;
    set attemptDurationSeconds(value: number);
    resetAttemptDurationSeconds(): void;
    get attemptDurationSecondsInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition aws_batch_job_definition}
*/
export declare class BatchJobDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_batch_job_definition";
    /**
    * Generates CDKTF code for importing a BatchJobDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BatchJobDefinition to import
    * @param importFromId The id of the existing BatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BatchJobDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/batch_job_definition aws_batch_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig);
    get arn(): string;
    get arnPrefix(): string;
    private _containerProperties?;
    get containerProperties(): string;
    set containerProperties(value: string);
    resetContainerProperties(): void;
    get containerPropertiesInput(): string | undefined;
    private _deregisterOnNewRevision?;
    get deregisterOnNewRevision(): boolean | cdktf.IResolvable;
    set deregisterOnNewRevision(value: boolean | cdktf.IResolvable);
    resetDeregisterOnNewRevision(): void;
    get deregisterOnNewRevisionInput(): boolean | cdktf.IResolvable | undefined;
    private _ecsProperties?;
    get ecsProperties(): string;
    set ecsProperties(value: string);
    resetEcsProperties(): void;
    get ecsPropertiesInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _nodeProperties?;
    get nodeProperties(): string;
    set nodeProperties(value: string);
    resetNodeProperties(): void;
    get nodePropertiesInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _platformCapabilities?;
    get platformCapabilities(): string[];
    set platformCapabilities(value: string[]);
    resetPlatformCapabilities(): void;
    get platformCapabilitiesInput(): string[] | undefined;
    private _propagateTags?;
    get propagateTags(): boolean | cdktf.IResolvable;
    set propagateTags(value: boolean | cdktf.IResolvable);
    resetPropagateTags(): void;
    get propagateTagsInput(): boolean | cdktf.IResolvable | undefined;
    get revision(): number;
    private _schedulingPriority?;
    get schedulingPriority(): number;
    set schedulingPriority(value: number);
    resetSchedulingPriority(): void;
    get schedulingPriorityInput(): number | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _eksProperties;
    get eksProperties(): BatchJobDefinitionEksPropertiesOutputReference;
    putEksProperties(value: BatchJobDefinitionEksProperties): void;
    resetEksProperties(): void;
    get eksPropertiesInput(): BatchJobDefinitionEksProperties | undefined;
    private _retryStrategy;
    get retryStrategy(): BatchJobDefinitionRetryStrategyOutputReference;
    putRetryStrategy(value: BatchJobDefinitionRetryStrategy): void;
    resetRetryStrategy(): void;
    get retryStrategyInput(): BatchJobDefinitionRetryStrategy | undefined;
    private _timeout;
    get timeout(): BatchJobDefinitionTimeoutOutputReference;
    putTimeout(value: BatchJobDefinitionTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): BatchJobDefinitionTimeout | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
