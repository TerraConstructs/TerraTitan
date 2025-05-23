/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_definition#arn DataAwsBatchJobDefinition#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_definition#name DataAwsBatchJobDefinition#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_definition#revision DataAwsBatchJobDefinition#revision}
    */
    readonly revision?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_definition#status DataAwsBatchJobDefinition#status}
    */
    readonly status?: string;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnv | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResources | undefined);
    private _limits;
    get limits(): cdktf.StringMap;
    private _requests;
    get requests(): cdktf.StringMap;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContext | undefined);
    get privileged(): cdktf.IResolvable;
    get readOnlyRootFileSystem(): cdktf.IResolvable;
    get runAsGroup(): number;
    get runAsNonRoot(): cdktf.IResolvable;
    get runAsUser(): number;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMounts | undefined);
    get mountPath(): string;
    get name(): string;
    get readOnly(): cdktf.IResolvable;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainers | undefined);
    get args(): string[];
    get command(): string[];
    private _env;
    get env(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersEnvList;
    get image(): string;
    get imagePullPolicy(): string;
    get name(): string;
    private _resources;
    get resources(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersResourcesList;
    private _securityContext;
    get securityContext(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersSecurityContextList;
    private _volumeMounts;
    get volumeMounts(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersVolumeMountsList;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecrets | undefined);
    get name(): string;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnv | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResources | undefined);
    private _limits;
    get limits(): cdktf.StringMap;
    private _requests;
    get requests(): cdktf.StringMap;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContext | undefined);
    get privileged(): cdktf.IResolvable;
    get readOnlyRootFileSystem(): cdktf.IResolvable;
    get runAsGroup(): number;
    get runAsNonRoot(): cdktf.IResolvable;
    get runAsUser(): number;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMounts | undefined);
    get mountPath(): string;
    get name(): string;
    get readOnly(): cdktf.IResolvable;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainers | undefined);
    get args(): string[];
    get command(): string[];
    private _env;
    get env(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersEnvList;
    get image(): string;
    get imagePullPolicy(): string;
    get name(): string;
    private _resources;
    get resources(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersResourcesList;
    private _securityContext;
    get securityContext(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersSecurityContextList;
    private _volumeMounts;
    get volumeMounts(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersVolumeMountsList;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadata | undefined);
    private _labels;
    get labels(): cdktf.StringMap;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDir | undefined);
    get medium(): string;
    get sizeLimit(): string;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPath | undefined);
    get path(): string;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecret | undefined);
    get optional(): cdktf.IResolvable;
    get secretName(): string;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumes | undefined);
    private _emptyDir;
    get emptyDir(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesEmptyDirList;
    private _hostPath;
    get hostPath(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesHostPathList;
    get name(): string;
    private _secret;
    get secret(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesSecretList;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesOutputReference;
}
export interface DataAwsBatchJobDefinitionEksPropertiesPodProperties {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesToTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodProperties): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesPodPropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksPropertiesPodProperties): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksPropertiesPodProperties | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksPropertiesPodProperties | undefined);
    private _containers;
    get containers(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesContainersList;
    get dnsPolicy(): string;
    get hostNetwork(): cdktf.IResolvable;
    private _imagePullSecrets;
    get imagePullSecrets(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesImagePullSecretsList;
    private _initContainers;
    get initContainers(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesInitContainersList;
    private _metadata;
    get metadata(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesMetadataList;
    get serviceAccountName(): string;
    get shareProcessNamespace(): cdktf.IResolvable;
    private _volumes;
    get volumes(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesVolumesList;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesPodPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesOutputReference;
}
export interface DataAwsBatchJobDefinitionEksProperties {
}
export declare function dataAwsBatchJobDefinitionEksPropertiesToTerraform(struct?: DataAwsBatchJobDefinitionEksProperties): any;
export declare function dataAwsBatchJobDefinitionEksPropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionEksProperties): any;
export declare class DataAwsBatchJobDefinitionEksPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionEksProperties | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionEksProperties | undefined);
    private _podProperties;
    get podProperties(): DataAwsBatchJobDefinitionEksPropertiesPodPropertiesList;
}
export declare class DataAwsBatchJobDefinitionEksPropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionEksPropertiesOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironment | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorage | undefined);
    get sizeInGib(): number;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfiguration | undefined);
    get platformVersion(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevices | undefined);
    get containerPath(): string;
    get hostPath(): string;
    get permissions(): string[];
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfs | undefined);
    get containerPath(): string;
    get mountOptions(): string[];
    get size(): number;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParameters | undefined);
    private _devices;
    get devices(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersDevicesList;
    get initProcessEnabled(): cdktf.IResolvable;
    get maxSwap(): number;
    get sharedMemorySize(): number;
    get swappiness(): number;
    private _tmpfs;
    get tmpfs(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersTmpfsList;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptions | undefined);
    get name(): string;
    get valueFrom(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfiguration | undefined);
    get logDriver(): string;
    private _options;
    get options(): cdktf.StringMap;
    private _secretOptions;
    get secretOptions(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationSecretOptionsList;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPoints | undefined);
    get containerPath(): string;
    get readOnly(): cdktf.IResolvable;
    get sourceVolume(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfiguration | undefined);
    get assignPublicIp(): cdktf.IResolvable;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirements | undefined);
    get type(): string;
    get value(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatform | undefined);
    get cpuArchitecture(): string;
    get operatingSystemFamily(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecrets | undefined);
    get name(): string;
    get valueFrom(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimits | undefined);
    get hardLimit(): number;
    get name(): string;
    get softLimit(): number;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfig | undefined);
    get accessPointId(): string;
    get iam(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfiguration | undefined);
    private _authorizationConfig;
    get authorizationConfig(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationAuthorizationConfigList;
    get fileSystemId(): string;
    get rootDirectory(): string;
    get transitEncryption(): string;
    get transitEncryptionPort(): number;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHost | undefined);
    get sourcePath(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumes | undefined);
    private _efsVolumeConfiguration;
    get efsVolumeConfiguration(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesEfsVolumeConfigurationList;
    private _host;
    get host(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesHostList;
    get name(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainer | undefined);
    get command(): string[];
    private _environment;
    get environment(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEnvironmentList;
    private _ephemeralStorage;
    get ephemeralStorage(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerEphemeralStorageList;
    get executionRoleArn(): string;
    private _fargatePlatformConfiguration;
    get fargatePlatformConfiguration(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerFargatePlatformConfigurationList;
    get image(): string;
    get instanceType(): string;
    get jobRoleArn(): string;
    private _linuxParameters;
    get linuxParameters(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLinuxParametersList;
    private _logConfiguration;
    get logConfiguration(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerLogConfigurationList;
    private _mountPoints;
    get mountPoints(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerMountPointsList;
    private _networkConfiguration;
    get networkConfiguration(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerNetworkConfigurationList;
    get privileged(): cdktf.IResolvable;
    get readonlyRootFilesystem(): cdktf.IResolvable;
    private _resourceRequirements;
    get resourceRequirements(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerResourceRequirementsList;
    private _runtimePlatform;
    get runtimePlatform(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerRuntimePlatformList;
    private _secrets;
    get secrets(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerSecretsList;
    private _ulimits;
    get ulimits(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerUlimitsList;
    get user(): string;
    private _volumes;
    get volumes(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerVolumesList;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerOutputReference;
}
export interface DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesToTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodePropertiesNodeRangeProperties | undefined);
    private _container;
    get container(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesContainerList;
    get targetNodes(): string;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesOutputReference;
}
export interface DataAwsBatchJobDefinitionNodeProperties {
}
export declare function dataAwsBatchJobDefinitionNodePropertiesToTerraform(struct?: DataAwsBatchJobDefinitionNodeProperties): any;
export declare function dataAwsBatchJobDefinitionNodePropertiesToHclTerraform(struct?: DataAwsBatchJobDefinitionNodeProperties): any;
export declare class DataAwsBatchJobDefinitionNodePropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionNodeProperties | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionNodeProperties | undefined);
    get mainNode(): number;
    private _nodeRangeProperties;
    get nodeRangeProperties(): DataAwsBatchJobDefinitionNodePropertiesNodeRangePropertiesList;
    get numNodes(): number;
}
export declare class DataAwsBatchJobDefinitionNodePropertiesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionNodePropertiesOutputReference;
}
export interface DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit {
}
export declare function dataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit): any;
export declare function dataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitToHclTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit): any;
export declare class DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExit | undefined);
    get action(): string;
    get onExitCode(): string;
    get onReason(): string;
    get onStatusReason(): string;
}
export declare class DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference;
}
export interface DataAwsBatchJobDefinitionRetryStrategy {
}
export declare function dataAwsBatchJobDefinitionRetryStrategyToTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategy): any;
export declare function dataAwsBatchJobDefinitionRetryStrategyToHclTerraform(struct?: DataAwsBatchJobDefinitionRetryStrategy): any;
export declare class DataAwsBatchJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionRetryStrategy | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionRetryStrategy | undefined);
    get attempts(): number;
    private _evaluateOnExit;
    get evaluateOnExit(): DataAwsBatchJobDefinitionRetryStrategyEvaluateOnExitList;
}
export declare class DataAwsBatchJobDefinitionRetryStrategyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionRetryStrategyOutputReference;
}
export interface DataAwsBatchJobDefinitionTimeout {
}
export declare function dataAwsBatchJobDefinitionTimeoutToTerraform(struct?: DataAwsBatchJobDefinitionTimeout): any;
export declare function dataAwsBatchJobDefinitionTimeoutToHclTerraform(struct?: DataAwsBatchJobDefinitionTimeout): any;
export declare class DataAwsBatchJobDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobDefinitionTimeout | undefined;
    set internalValue(value: DataAwsBatchJobDefinitionTimeout | undefined);
    get attemptDurationSeconds(): number;
}
export declare class DataAwsBatchJobDefinitionTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchJobDefinitionTimeoutOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_definition aws_batch_job_definition}
*/
export declare class DataAwsBatchJobDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_batch_job_definition";
    /**
    * Generates CDKTF code for importing a DataAwsBatchJobDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBatchJobDefinition to import
    * @param importFromId The id of the existing DataAwsBatchJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBatchJobDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_definition aws_batch_job_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchJobDefinitionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsBatchJobDefinitionConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get arnPrefix(): string;
    get containerOrchestrationType(): string;
    private _eksProperties;
    get eksProperties(): DataAwsBatchJobDefinitionEksPropertiesList;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _nodeProperties;
    get nodeProperties(): DataAwsBatchJobDefinitionNodePropertiesList;
    private _retryStrategy;
    get retryStrategy(): DataAwsBatchJobDefinitionRetryStrategyList;
    private _revision?;
    get revision(): number;
    set revision(value: number);
    resetRevision(): void;
    get revisionInput(): number | undefined;
    get schedulingPriority(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _tags;
    get tags(): cdktf.StringMap;
    private _timeout;
    get timeout(): DataAwsBatchJobDefinitionTimeoutList;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
