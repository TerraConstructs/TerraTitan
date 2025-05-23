/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function#function_name DataAwsLambdaFunction#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function#id DataAwsLambdaFunction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function#qualifier DataAwsLambdaFunction#qualifier}
    */
    readonly qualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function#tags DataAwsLambdaFunction#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsLambdaFunctionDeadLetterConfig {
}
export declare function dataAwsLambdaFunctionDeadLetterConfigToTerraform(struct?: DataAwsLambdaFunctionDeadLetterConfig): any;
export declare function dataAwsLambdaFunctionDeadLetterConfigToHclTerraform(struct?: DataAwsLambdaFunctionDeadLetterConfig): any;
export declare class DataAwsLambdaFunctionDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionDeadLetterConfig | undefined;
    set internalValue(value: DataAwsLambdaFunctionDeadLetterConfig | undefined);
    get targetArn(): string;
}
export declare class DataAwsLambdaFunctionDeadLetterConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionDeadLetterConfigOutputReference;
}
export interface DataAwsLambdaFunctionEnvironment {
}
export declare function dataAwsLambdaFunctionEnvironmentToTerraform(struct?: DataAwsLambdaFunctionEnvironment): any;
export declare function dataAwsLambdaFunctionEnvironmentToHclTerraform(struct?: DataAwsLambdaFunctionEnvironment): any;
export declare class DataAwsLambdaFunctionEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionEnvironment | undefined;
    set internalValue(value: DataAwsLambdaFunctionEnvironment | undefined);
    private _variables;
    get variables(): cdktf.StringMap;
}
export declare class DataAwsLambdaFunctionEnvironmentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionEnvironmentOutputReference;
}
export interface DataAwsLambdaFunctionEphemeralStorage {
}
export declare function dataAwsLambdaFunctionEphemeralStorageToTerraform(struct?: DataAwsLambdaFunctionEphemeralStorage): any;
export declare function dataAwsLambdaFunctionEphemeralStorageToHclTerraform(struct?: DataAwsLambdaFunctionEphemeralStorage): any;
export declare class DataAwsLambdaFunctionEphemeralStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionEphemeralStorage | undefined;
    set internalValue(value: DataAwsLambdaFunctionEphemeralStorage | undefined);
    get size(): number;
}
export declare class DataAwsLambdaFunctionEphemeralStorageList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionEphemeralStorageOutputReference;
}
export interface DataAwsLambdaFunctionFileSystemConfig {
}
export declare function dataAwsLambdaFunctionFileSystemConfigToTerraform(struct?: DataAwsLambdaFunctionFileSystemConfig): any;
export declare function dataAwsLambdaFunctionFileSystemConfigToHclTerraform(struct?: DataAwsLambdaFunctionFileSystemConfig): any;
export declare class DataAwsLambdaFunctionFileSystemConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionFileSystemConfig | undefined;
    set internalValue(value: DataAwsLambdaFunctionFileSystemConfig | undefined);
    get arn(): string;
    get localMountPath(): string;
}
export declare class DataAwsLambdaFunctionFileSystemConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionFileSystemConfigOutputReference;
}
export interface DataAwsLambdaFunctionLoggingConfig {
}
export declare function dataAwsLambdaFunctionLoggingConfigToTerraform(struct?: DataAwsLambdaFunctionLoggingConfig): any;
export declare function dataAwsLambdaFunctionLoggingConfigToHclTerraform(struct?: DataAwsLambdaFunctionLoggingConfig): any;
export declare class DataAwsLambdaFunctionLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionLoggingConfig | undefined;
    set internalValue(value: DataAwsLambdaFunctionLoggingConfig | undefined);
    get applicationLogLevel(): string;
    get logFormat(): string;
    get logGroup(): string;
    get systemLogLevel(): string;
}
export declare class DataAwsLambdaFunctionLoggingConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionLoggingConfigOutputReference;
}
export interface DataAwsLambdaFunctionTracingConfig {
}
export declare function dataAwsLambdaFunctionTracingConfigToTerraform(struct?: DataAwsLambdaFunctionTracingConfig): any;
export declare function dataAwsLambdaFunctionTracingConfigToHclTerraform(struct?: DataAwsLambdaFunctionTracingConfig): any;
export declare class DataAwsLambdaFunctionTracingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionTracingConfig | undefined;
    set internalValue(value: DataAwsLambdaFunctionTracingConfig | undefined);
    get mode(): string;
}
export declare class DataAwsLambdaFunctionTracingConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionTracingConfigOutputReference;
}
export interface DataAwsLambdaFunctionVpcConfig {
}
export declare function dataAwsLambdaFunctionVpcConfigToTerraform(struct?: DataAwsLambdaFunctionVpcConfig): any;
export declare function dataAwsLambdaFunctionVpcConfigToHclTerraform(struct?: DataAwsLambdaFunctionVpcConfig): any;
export declare class DataAwsLambdaFunctionVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionVpcConfig | undefined;
    set internalValue(value: DataAwsLambdaFunctionVpcConfig | undefined);
    get ipv6AllowedForDualStack(): cdktf.IResolvable;
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare class DataAwsLambdaFunctionVpcConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionVpcConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function aws_lambda_function}
*/
export declare class DataAwsLambdaFunction extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lambda_function";
    /**
    * Generates CDKTF code for importing a DataAwsLambdaFunction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLambdaFunction to import
    * @param importFromId The id of the existing DataAwsLambdaFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLambdaFunction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function aws_lambda_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaFunctionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaFunctionConfig);
    get architectures(): string[];
    get arn(): string;
    get codeSha256(): string;
    get codeSigningConfigArn(): string;
    private _deadLetterConfig;
    get deadLetterConfig(): DataAwsLambdaFunctionDeadLetterConfigList;
    get description(): string;
    private _environment;
    get environment(): DataAwsLambdaFunctionEnvironmentList;
    private _ephemeralStorage;
    get ephemeralStorage(): DataAwsLambdaFunctionEphemeralStorageList;
    private _fileSystemConfig;
    get fileSystemConfig(): DataAwsLambdaFunctionFileSystemConfigList;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    get handler(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageUri(): string;
    get invokeArn(): string;
    get kmsKeyArn(): string;
    get lastModified(): string;
    get layers(): string[];
    private _loggingConfig;
    get loggingConfig(): DataAwsLambdaFunctionLoggingConfigList;
    get memorySize(): number;
    get qualifiedArn(): string;
    get qualifiedInvokeArn(): string;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    get reservedConcurrentExecutions(): number;
    get role(): string;
    get runtime(): string;
    get signingJobArn(): string;
    get signingProfileVersionArn(): string;
    get sourceCodeHash(): string;
    get sourceCodeSize(): number;
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
    get timeout(): number;
    private _tracingConfig;
    get tracingConfig(): DataAwsLambdaFunctionTracingConfigList;
    get version(): string;
    private _vpcConfig;
    get vpcConfig(): DataAwsLambdaFunctionVpcConfigList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
