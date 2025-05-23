/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectInstanceStorageConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance_storage_config#association_id DataAwsConnectInstanceStorageConfig#association_id}
    */
    readonly associationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance_storage_config#id DataAwsConnectInstanceStorageConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance_storage_config#instance_id DataAwsConnectInstanceStorageConfig#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance_storage_config#resource_type DataAwsConnectInstanceStorageConfig#resource_type}
    */
    readonly resourceType: string;
}
export interface DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig {
}
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigToTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig): any;
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigToHclTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig): any;
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig | undefined;
    set internalValue(value: DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfig | undefined);
    get firehoseArn(): string;
}
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigOutputReference;
}
export interface DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig {
}
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigToTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig): any;
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigToHclTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig): any;
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig | undefined;
    set internalValue(value: DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfig | undefined);
    get streamArn(): string;
}
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigOutputReference;
}
export interface DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig {
}
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigToTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig): any;
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigToHclTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig): any;
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig | undefined;
    set internalValue(value: DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfig | undefined);
    get encryptionType(): string;
    get keyId(): string;
}
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference;
}
export interface DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig {
}
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigToTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig): any;
export declare function dataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigToHclTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig): any;
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig | undefined;
    set internalValue(value: DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfig | undefined);
    private _encryptionConfig;
    get encryptionConfig(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigEncryptionConfigList;
    get prefix(): string;
    get retentionPeriodHours(): number;
}
export declare class DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigOutputReference;
}
export interface DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig {
}
export declare function dataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigToTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig): any;
export declare function dataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigToHclTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig): any;
export declare class DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig | undefined;
    set internalValue(value: DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfig | undefined);
    get encryptionType(): string;
    get keyId(): string;
}
export declare class DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigOutputReference;
}
export interface DataAwsConnectInstanceStorageConfigStorageConfigS3Config {
}
export declare function dataAwsConnectInstanceStorageConfigStorageConfigS3ConfigToTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigS3Config): any;
export declare function dataAwsConnectInstanceStorageConfigStorageConfigS3ConfigToHclTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfigS3Config): any;
export declare class DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectInstanceStorageConfigStorageConfigS3Config | undefined;
    set internalValue(value: DataAwsConnectInstanceStorageConfigStorageConfigS3Config | undefined);
    get bucketName(): string;
    get bucketPrefix(): string;
    private _encryptionConfig;
    get encryptionConfig(): DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigEncryptionConfigList;
}
export declare class DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigOutputReference;
}
export interface DataAwsConnectInstanceStorageConfigStorageConfig {
}
export declare function dataAwsConnectInstanceStorageConfigStorageConfigToTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfig): any;
export declare function dataAwsConnectInstanceStorageConfigStorageConfigToHclTerraform(struct?: DataAwsConnectInstanceStorageConfigStorageConfig): any;
export declare class DataAwsConnectInstanceStorageConfigStorageConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectInstanceStorageConfigStorageConfig | undefined;
    set internalValue(value: DataAwsConnectInstanceStorageConfigStorageConfig | undefined);
    private _kinesisFirehoseConfig;
    get kinesisFirehoseConfig(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisFirehoseConfigList;
    private _kinesisStreamConfig;
    get kinesisStreamConfig(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisStreamConfigList;
    private _kinesisVideoStreamConfig;
    get kinesisVideoStreamConfig(): DataAwsConnectInstanceStorageConfigStorageConfigKinesisVideoStreamConfigList;
    private _s3Config;
    get s3Config(): DataAwsConnectInstanceStorageConfigStorageConfigS3ConfigList;
    get storageType(): string;
}
export declare class DataAwsConnectInstanceStorageConfigStorageConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectInstanceStorageConfigStorageConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance_storage_config aws_connect_instance_storage_config}
*/
export declare class DataAwsConnectInstanceStorageConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_instance_storage_config";
    /**
    * Generates CDKTF code for importing a DataAwsConnectInstanceStorageConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectInstanceStorageConfig to import
    * @param importFromId The id of the existing DataAwsConnectInstanceStorageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectInstanceStorageConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_instance_storage_config aws_connect_instance_storage_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectInstanceStorageConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectInstanceStorageConfigConfig);
    private _associationId?;
    get associationId(): string;
    set associationId(value: string);
    get associationIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _storageConfig;
    get storageConfig(): DataAwsConnectInstanceStorageConfigStorageConfigList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
