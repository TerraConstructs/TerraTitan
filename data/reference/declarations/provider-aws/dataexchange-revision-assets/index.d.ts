/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataexchangeRevisionAssetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}
    */
    readonly dataSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}
    */
    readonly finalized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * asset block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#asset DataexchangeRevisionAssets#asset}
    */
    readonly asset?: DataexchangeRevisionAssetsAsset[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#timeouts DataexchangeRevisionAssets#timeouts}
    */
    readonly timeouts?: DataexchangeRevisionAssetsTimeouts;
}
export interface DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#kms_key_arn DataexchangeRevisionAssets#kms_key_arn}
    */
    readonly kmsKeyArn: string;
}
export declare function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantToTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantToHclTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant | cdktf.IResolvable | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    get kmsKeyArnInput(): string | undefined;
}
export declare class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference;
}
export interface DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#key_prefixes DataexchangeRevisionAssets#key_prefixes}
    */
    readonly keyPrefixes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#keys DataexchangeRevisionAssets#keys}
    */
    readonly keys?: string[];
    /**
    * kms_keys_to_grant block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#kms_keys_to_grant DataexchangeRevisionAssets#kms_keys_to_grant}
    */
    readonly kmsKeysToGrant?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant[] | cdktf.IResolvable;
}
export declare function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceToTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceToHclTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource | cdktf.IResolvable | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _keyPrefixes?;
    get keyPrefixes(): string[];
    set keyPrefixes(value: string[]);
    resetKeyPrefixes(): void;
    get keyPrefixesInput(): string[] | undefined;
    private _keys?;
    get keys(): string[];
    set keys(value: string[]);
    resetKeys(): void;
    get keysInput(): string[] | undefined;
    private _kmsKeysToGrant;
    get kmsKeysToGrant(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList;
    putKmsKeysToGrant(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant[] | cdktf.IResolvable): void;
    resetKmsKeysToGrant(): void;
    get kmsKeysToGrantInput(): cdktf.IResolvable | DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant[] | undefined;
}
export declare class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference;
}
export interface DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket {
    /**
    * asset_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}
    */
    readonly assetSource?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource[] | cdktf.IResolvable;
}
export declare function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketToTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketToHclTerraform(struct?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket | cdktf.IResolvable | undefined);
    get accessPointAlias(): string;
    get accessPointArn(): string;
    private _assetSource;
    get assetSource(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList;
    putAssetSource(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource[] | cdktf.IResolvable): void;
    resetAssetSource(): void;
    get assetSourceInput(): cdktf.IResolvable | DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource[] | undefined;
}
export declare class DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference;
}
export interface DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#key DataexchangeRevisionAssets#key}
    */
    readonly key: string;
}
export declare function dataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceToTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceToHclTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource | cdktf.IResolvable | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export declare class DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference;
}
export interface DataexchangeRevisionAssetsAssetImportAssetsFromS3 {
    /**
    * asset_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}
    */
    readonly assetSource?: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource[] | cdktf.IResolvable;
}
export declare function dataexchangeRevisionAssetsAssetImportAssetsFromS3ToTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsAssetImportAssetsFromS3ToHclTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3 | cdktf.IResolvable | undefined);
    private _assetSource;
    get assetSource(): DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList;
    putAssetSource(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource[] | cdktf.IResolvable): void;
    resetAssetSource(): void;
    get assetSourceInput(): cdktf.IResolvable | DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource[] | undefined;
}
export declare class DataexchangeRevisionAssetsAssetImportAssetsFromS3List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeRevisionAssetsAssetImportAssetsFromS3[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference;
}
export interface DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#filename DataexchangeRevisionAssets#filename}
    */
    readonly filename: string;
}
export declare function dataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlToTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlToHclTerraform(struct?: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl | cdktf.IResolvable | undefined);
    private _filename?;
    get filename(): string;
    set filename(value: string);
    get filenameInput(): string | undefined;
}
export declare class DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference;
}
export interface DataexchangeRevisionAssetsAsset {
    /**
    * create_s3_data_access_from_s3_bucket block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#create_s3_data_access_from_s3_bucket DataexchangeRevisionAssets#create_s3_data_access_from_s3_bucket}
    */
    readonly createS3DataAccessFromS3Bucket?: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket[] | cdktf.IResolvable;
    /**
    * import_assets_from_s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#import_assets_from_s3 DataexchangeRevisionAssets#import_assets_from_s3}
    */
    readonly importAssetsFromS3?: DataexchangeRevisionAssetsAssetImportAssetsFromS3[] | cdktf.IResolvable;
    /**
    * import_assets_from_signed_url block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#import_assets_from_signed_url DataexchangeRevisionAssets#import_assets_from_signed_url}
    */
    readonly importAssetsFromSignedUrl?: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl[] | cdktf.IResolvable;
}
export declare function dataexchangeRevisionAssetsAssetToTerraform(struct?: DataexchangeRevisionAssetsAsset | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsAssetToHclTerraform(struct?: DataexchangeRevisionAssetsAsset | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsAssetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataexchangeRevisionAssetsAsset | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsAsset | cdktf.IResolvable | undefined);
    get arn(): string;
    get createdAt(): string;
    get id(): string;
    get name(): string;
    get updatedAt(): string;
    private _createS3DataAccessFromS3Bucket;
    get createS3DataAccessFromS3Bucket(): DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList;
    putCreateS3DataAccessFromS3Bucket(value: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket[] | cdktf.IResolvable): void;
    resetCreateS3DataAccessFromS3Bucket(): void;
    get createS3DataAccessFromS3BucketInput(): cdktf.IResolvable | DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket[] | undefined;
    private _importAssetsFromS3;
    get importAssetsFromS3(): DataexchangeRevisionAssetsAssetImportAssetsFromS3List;
    putImportAssetsFromS3(value: DataexchangeRevisionAssetsAssetImportAssetsFromS3[] | cdktf.IResolvable): void;
    resetImportAssetsFromS3(): void;
    get importAssetsFromS3Input(): cdktf.IResolvable | DataexchangeRevisionAssetsAssetImportAssetsFromS3[] | undefined;
    private _importAssetsFromSignedUrl;
    get importAssetsFromSignedUrl(): DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList;
    putImportAssetsFromSignedUrl(value: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl[] | cdktf.IResolvable): void;
    resetImportAssetsFromSignedUrl(): void;
    get importAssetsFromSignedUrlInput(): cdktf.IResolvable | DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl[] | undefined;
}
export declare class DataexchangeRevisionAssetsAssetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataexchangeRevisionAssetsAsset[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataexchangeRevisionAssetsAssetOutputReference;
}
export interface DataexchangeRevisionAssetsTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#create DataexchangeRevisionAssets#create}
    */
    readonly create?: string;
}
export declare function dataexchangeRevisionAssetsTimeoutsToTerraform(struct?: DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable): any;
export declare function dataexchangeRevisionAssetsTimeoutsToHclTerraform(struct?: DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable): any;
export declare class DataexchangeRevisionAssetsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataexchangeRevisionAssetsTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets}
*/
export declare class DataexchangeRevisionAssets extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dataexchange_revision_assets";
    /**
    * Generates CDKTF code for importing a DataexchangeRevisionAssets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataexchangeRevisionAssets to import
    * @param importFromId The id of the existing DataexchangeRevisionAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataexchangeRevisionAssets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataexchangeRevisionAssetsConfig
    */
    constructor(scope: Construct, id: string, config: DataexchangeRevisionAssetsConfig);
    get arn(): string;
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    get createdAt(): string;
    private _dataSetId?;
    get dataSetId(): string;
    set dataSetId(value: string);
    get dataSetIdInput(): string | undefined;
    private _finalized?;
    get finalized(): boolean | cdktf.IResolvable;
    set finalized(value: boolean | cdktf.IResolvable);
    resetFinalized(): void;
    get finalizedInput(): boolean | cdktf.IResolvable | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get updatedAt(): string;
    private _asset;
    get asset(): DataexchangeRevisionAssetsAssetList;
    putAsset(value: DataexchangeRevisionAssetsAsset[] | cdktf.IResolvable): void;
    resetAsset(): void;
    get assetInput(): cdktf.IResolvable | DataexchangeRevisionAssetsAsset[] | undefined;
    private _timeouts;
    get timeouts(): DataexchangeRevisionAssetsTimeoutsOutputReference;
    putTimeouts(value: DataexchangeRevisionAssetsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataexchangeRevisionAssetsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
