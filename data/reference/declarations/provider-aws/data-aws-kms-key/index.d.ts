/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_key#grant_tokens DataAwsKmsKey#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_key#id DataAwsKmsKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_key#key_id DataAwsKmsKey#key_id}
    */
    readonly keyId: string;
}
export interface DataAwsKmsKeyMultiRegionConfigurationPrimaryKey {
}
export declare function dataAwsKmsKeyMultiRegionConfigurationPrimaryKeyToTerraform(struct?: DataAwsKmsKeyMultiRegionConfigurationPrimaryKey): any;
export declare function dataAwsKmsKeyMultiRegionConfigurationPrimaryKeyToHclTerraform(struct?: DataAwsKmsKeyMultiRegionConfigurationPrimaryKey): any;
export declare class DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKmsKeyMultiRegionConfigurationPrimaryKey | undefined;
    set internalValue(value: DataAwsKmsKeyMultiRegionConfigurationPrimaryKey | undefined);
    get arn(): string;
    get region(): string;
}
export declare class DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyOutputReference;
}
export interface DataAwsKmsKeyMultiRegionConfigurationReplicaKeys {
}
export declare function dataAwsKmsKeyMultiRegionConfigurationReplicaKeysToTerraform(struct?: DataAwsKmsKeyMultiRegionConfigurationReplicaKeys): any;
export declare function dataAwsKmsKeyMultiRegionConfigurationReplicaKeysToHclTerraform(struct?: DataAwsKmsKeyMultiRegionConfigurationReplicaKeys): any;
export declare class DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKmsKeyMultiRegionConfigurationReplicaKeys | undefined;
    set internalValue(value: DataAwsKmsKeyMultiRegionConfigurationReplicaKeys | undefined);
    get arn(): string;
    get region(): string;
}
export declare class DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKmsKeyMultiRegionConfigurationReplicaKeysOutputReference;
}
export interface DataAwsKmsKeyMultiRegionConfiguration {
}
export declare function dataAwsKmsKeyMultiRegionConfigurationToTerraform(struct?: DataAwsKmsKeyMultiRegionConfiguration): any;
export declare function dataAwsKmsKeyMultiRegionConfigurationToHclTerraform(struct?: DataAwsKmsKeyMultiRegionConfiguration): any;
export declare class DataAwsKmsKeyMultiRegionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKmsKeyMultiRegionConfiguration | undefined;
    set internalValue(value: DataAwsKmsKeyMultiRegionConfiguration | undefined);
    get multiRegionKeyType(): string;
    private _primaryKey;
    get primaryKey(): DataAwsKmsKeyMultiRegionConfigurationPrimaryKeyList;
    private _replicaKeys;
    get replicaKeys(): DataAwsKmsKeyMultiRegionConfigurationReplicaKeysList;
}
export declare class DataAwsKmsKeyMultiRegionConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKmsKeyMultiRegionConfigurationOutputReference;
}
export interface DataAwsKmsKeyXksKeyConfiguration {
}
export declare function dataAwsKmsKeyXksKeyConfigurationToTerraform(struct?: DataAwsKmsKeyXksKeyConfiguration): any;
export declare function dataAwsKmsKeyXksKeyConfigurationToHclTerraform(struct?: DataAwsKmsKeyXksKeyConfiguration): any;
export declare class DataAwsKmsKeyXksKeyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKmsKeyXksKeyConfiguration | undefined;
    set internalValue(value: DataAwsKmsKeyXksKeyConfiguration | undefined);
    get id(): string;
}
export declare class DataAwsKmsKeyXksKeyConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKmsKeyXksKeyConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_key aws_kms_key}
*/
export declare class DataAwsKmsKey extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kms_key";
    /**
    * Generates CDKTF code for importing a DataAwsKmsKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKmsKey to import
    * @param importFromId The id of the existing DataAwsKmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKmsKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_key aws_kms_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsKeyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKmsKeyConfig);
    get arn(): string;
    get awsAccountId(): string;
    get cloudHsmClusterId(): string;
    get creationDate(): string;
    get customKeyStoreId(): string;
    get customerMasterKeySpec(): string;
    get deletionDate(): string;
    get description(): string;
    get enabled(): cdktf.IResolvable;
    get expirationModel(): string;
    private _grantTokens?;
    get grantTokens(): string[];
    set grantTokens(value: string[]);
    resetGrantTokens(): void;
    get grantTokensInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
    get keyManager(): string;
    get keySpec(): string;
    get keyState(): string;
    get keyUsage(): string;
    get multiRegion(): cdktf.IResolvable;
    private _multiRegionConfiguration;
    get multiRegionConfiguration(): DataAwsKmsKeyMultiRegionConfigurationList;
    get origin(): string;
    get pendingDeletionWindowInDays(): number;
    get validTo(): string;
    private _xksKeyConfiguration;
    get xksKeyConfiguration(): DataAwsKmsKeyXksKeyConfigurationList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
