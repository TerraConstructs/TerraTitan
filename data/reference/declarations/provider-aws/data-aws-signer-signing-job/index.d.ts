/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSignerSigningJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_job#id DataAwsSignerSigningJob#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_job#job_id DataAwsSignerSigningJob#job_id}
    */
    readonly jobId: string;
}
export interface DataAwsSignerSigningJobRevocationRecord {
}
export declare function dataAwsSignerSigningJobRevocationRecordToTerraform(struct?: DataAwsSignerSigningJobRevocationRecord): any;
export declare function dataAwsSignerSigningJobRevocationRecordToHclTerraform(struct?: DataAwsSignerSigningJobRevocationRecord): any;
export declare class DataAwsSignerSigningJobRevocationRecordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSignerSigningJobRevocationRecord | undefined;
    set internalValue(value: DataAwsSignerSigningJobRevocationRecord | undefined);
    get reason(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class DataAwsSignerSigningJobRevocationRecordList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSignerSigningJobRevocationRecordOutputReference;
}
export interface DataAwsSignerSigningJobSignedObjectS3 {
}
export declare function dataAwsSignerSigningJobSignedObjectS3ToTerraform(struct?: DataAwsSignerSigningJobSignedObjectS3): any;
export declare function dataAwsSignerSigningJobSignedObjectS3ToHclTerraform(struct?: DataAwsSignerSigningJobSignedObjectS3): any;
export declare class DataAwsSignerSigningJobSignedObjectS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSignerSigningJobSignedObjectS3 | undefined;
    set internalValue(value: DataAwsSignerSigningJobSignedObjectS3 | undefined);
    get bucket(): string;
    get key(): string;
}
export declare class DataAwsSignerSigningJobSignedObjectS3List extends cdktf.ComplexList {
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
    get(index: number): DataAwsSignerSigningJobSignedObjectS3OutputReference;
}
export interface DataAwsSignerSigningJobSignedObject {
}
export declare function dataAwsSignerSigningJobSignedObjectToTerraform(struct?: DataAwsSignerSigningJobSignedObject): any;
export declare function dataAwsSignerSigningJobSignedObjectToHclTerraform(struct?: DataAwsSignerSigningJobSignedObject): any;
export declare class DataAwsSignerSigningJobSignedObjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSignerSigningJobSignedObject | undefined;
    set internalValue(value: DataAwsSignerSigningJobSignedObject | undefined);
    private _s3;
    get s3(): DataAwsSignerSigningJobSignedObjectS3List;
}
export declare class DataAwsSignerSigningJobSignedObjectList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSignerSigningJobSignedObjectOutputReference;
}
export interface DataAwsSignerSigningJobSourceS3 {
}
export declare function dataAwsSignerSigningJobSourceS3ToTerraform(struct?: DataAwsSignerSigningJobSourceS3): any;
export declare function dataAwsSignerSigningJobSourceS3ToHclTerraform(struct?: DataAwsSignerSigningJobSourceS3): any;
export declare class DataAwsSignerSigningJobSourceS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSignerSigningJobSourceS3 | undefined;
    set internalValue(value: DataAwsSignerSigningJobSourceS3 | undefined);
    get bucket(): string;
    get key(): string;
    get version(): string;
}
export declare class DataAwsSignerSigningJobSourceS3List extends cdktf.ComplexList {
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
    get(index: number): DataAwsSignerSigningJobSourceS3OutputReference;
}
export interface DataAwsSignerSigningJobSource {
}
export declare function dataAwsSignerSigningJobSourceToTerraform(struct?: DataAwsSignerSigningJobSource): any;
export declare function dataAwsSignerSigningJobSourceToHclTerraform(struct?: DataAwsSignerSigningJobSource): any;
export declare class DataAwsSignerSigningJobSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSignerSigningJobSource | undefined;
    set internalValue(value: DataAwsSignerSigningJobSource | undefined);
    private _s3;
    get s3(): DataAwsSignerSigningJobSourceS3List;
}
export declare class DataAwsSignerSigningJobSourceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSignerSigningJobSourceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_job aws_signer_signing_job}
*/
export declare class DataAwsSignerSigningJob extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_signer_signing_job";
    /**
    * Generates CDKTF code for importing a DataAwsSignerSigningJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSignerSigningJob to import
    * @param importFromId The id of the existing DataAwsSignerSigningJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSignerSigningJob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_job aws_signer_signing_job} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSignerSigningJobConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSignerSigningJobConfig);
    get completedAt(): string;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _jobId?;
    get jobId(): string;
    set jobId(value: string);
    get jobIdInput(): string | undefined;
    get jobInvoker(): string;
    get jobOwner(): string;
    get platformDisplayName(): string;
    get platformId(): string;
    get profileName(): string;
    get profileVersion(): string;
    get requestedBy(): string;
    private _revocationRecord;
    get revocationRecord(): DataAwsSignerSigningJobRevocationRecordList;
    get signatureExpiresAt(): string;
    private _signedObject;
    get signedObject(): DataAwsSignerSigningJobSignedObjectList;
    private _source;
    get source(): DataAwsSignerSigningJobSourceList;
    get status(): string;
    get statusReason(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
