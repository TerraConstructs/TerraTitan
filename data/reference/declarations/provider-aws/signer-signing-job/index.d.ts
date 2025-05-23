/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerSigningJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#id SignerSigningJob#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#ignore_signing_job_failure SignerSigningJob#ignore_signing_job_failure}
    */
    readonly ignoreSigningJobFailure?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#profile_name SignerSigningJob#profile_name}
    */
    readonly profileName: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#destination SignerSigningJob#destination}
    */
    readonly destination: SignerSigningJobDestination;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#source SignerSigningJob#source}
    */
    readonly source: SignerSigningJobSource;
}
export interface SignerSigningJobRevocationRecord {
}
export declare function signerSigningJobRevocationRecordToTerraform(struct?: SignerSigningJobRevocationRecord): any;
export declare function signerSigningJobRevocationRecordToHclTerraform(struct?: SignerSigningJobRevocationRecord): any;
export declare class SignerSigningJobRevocationRecordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SignerSigningJobRevocationRecord | undefined;
    set internalValue(value: SignerSigningJobRevocationRecord | undefined);
    get reason(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class SignerSigningJobRevocationRecordList extends cdktf.ComplexList {
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
    get(index: number): SignerSigningJobRevocationRecordOutputReference;
}
export interface SignerSigningJobSignedObjectS3 {
}
export declare function signerSigningJobSignedObjectS3ToTerraform(struct?: SignerSigningJobSignedObjectS3): any;
export declare function signerSigningJobSignedObjectS3ToHclTerraform(struct?: SignerSigningJobSignedObjectS3): any;
export declare class SignerSigningJobSignedObjectS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SignerSigningJobSignedObjectS3 | undefined;
    set internalValue(value: SignerSigningJobSignedObjectS3 | undefined);
    get bucket(): string;
    get key(): string;
}
export declare class SignerSigningJobSignedObjectS3List extends cdktf.ComplexList {
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
    get(index: number): SignerSigningJobSignedObjectS3OutputReference;
}
export interface SignerSigningJobSignedObject {
}
export declare function signerSigningJobSignedObjectToTerraform(struct?: SignerSigningJobSignedObject): any;
export declare function signerSigningJobSignedObjectToHclTerraform(struct?: SignerSigningJobSignedObject): any;
export declare class SignerSigningJobSignedObjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SignerSigningJobSignedObject | undefined;
    set internalValue(value: SignerSigningJobSignedObject | undefined);
    private _s3;
    get s3(): SignerSigningJobSignedObjectS3List;
}
export declare class SignerSigningJobSignedObjectList extends cdktf.ComplexList {
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
    get(index: number): SignerSigningJobSignedObjectOutputReference;
}
export interface SignerSigningJobDestinationS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#bucket SignerSigningJob#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#prefix SignerSigningJob#prefix}
    */
    readonly prefix?: string;
}
export declare function signerSigningJobDestinationS3ToTerraform(struct?: SignerSigningJobDestinationS3OutputReference | SignerSigningJobDestinationS3): any;
export declare function signerSigningJobDestinationS3ToHclTerraform(struct?: SignerSigningJobDestinationS3OutputReference | SignerSigningJobDestinationS3): any;
export declare class SignerSigningJobDestinationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SignerSigningJobDestinationS3 | undefined;
    set internalValue(value: SignerSigningJobDestinationS3 | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface SignerSigningJobDestination {
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#s3 SignerSigningJob#s3}
    */
    readonly s3: SignerSigningJobDestinationS3;
}
export declare function signerSigningJobDestinationToTerraform(struct?: SignerSigningJobDestinationOutputReference | SignerSigningJobDestination): any;
export declare function signerSigningJobDestinationToHclTerraform(struct?: SignerSigningJobDestinationOutputReference | SignerSigningJobDestination): any;
export declare class SignerSigningJobDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SignerSigningJobDestination | undefined;
    set internalValue(value: SignerSigningJobDestination | undefined);
    private _s3;
    get s3(): SignerSigningJobDestinationS3OutputReference;
    putS3(value: SignerSigningJobDestinationS3): void;
    get s3Input(): SignerSigningJobDestinationS3 | undefined;
}
export interface SignerSigningJobSourceS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#bucket SignerSigningJob#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#key SignerSigningJob#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#version SignerSigningJob#version}
    */
    readonly version: string;
}
export declare function signerSigningJobSourceS3ToTerraform(struct?: SignerSigningJobSourceS3OutputReference | SignerSigningJobSourceS3): any;
export declare function signerSigningJobSourceS3ToHclTerraform(struct?: SignerSigningJobSourceS3OutputReference | SignerSigningJobSourceS3): any;
export declare class SignerSigningJobSourceS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SignerSigningJobSourceS3 | undefined;
    set internalValue(value: SignerSigningJobSourceS3 | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
export interface SignerSigningJobSource {
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#s3 SignerSigningJob#s3}
    */
    readonly s3: SignerSigningJobSourceS3;
}
export declare function signerSigningJobSourceToTerraform(struct?: SignerSigningJobSourceOutputReference | SignerSigningJobSource): any;
export declare function signerSigningJobSourceToHclTerraform(struct?: SignerSigningJobSourceOutputReference | SignerSigningJobSource): any;
export declare class SignerSigningJobSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SignerSigningJobSource | undefined;
    set internalValue(value: SignerSigningJobSource | undefined);
    private _s3;
    get s3(): SignerSigningJobSourceS3OutputReference;
    putS3(value: SignerSigningJobSourceS3): void;
    get s3Input(): SignerSigningJobSourceS3 | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job aws_signer_signing_job}
*/
export declare class SignerSigningJob extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_signer_signing_job";
    /**
    * Generates CDKTF code for importing a SignerSigningJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SignerSigningJob to import
    * @param importFromId The id of the existing SignerSigningJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SignerSigningJob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_job aws_signer_signing_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningJobConfig
    */
    constructor(scope: Construct, id: string, config: SignerSigningJobConfig);
    get completedAt(): string;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ignoreSigningJobFailure?;
    get ignoreSigningJobFailure(): boolean | cdktf.IResolvable;
    set ignoreSigningJobFailure(value: boolean | cdktf.IResolvable);
    resetIgnoreSigningJobFailure(): void;
    get ignoreSigningJobFailureInput(): boolean | cdktf.IResolvable | undefined;
    get jobId(): string;
    get jobInvoker(): string;
    get jobOwner(): string;
    get platformDisplayName(): string;
    get platformId(): string;
    private _profileName?;
    get profileName(): string;
    set profileName(value: string);
    get profileNameInput(): string | undefined;
    get profileVersion(): string;
    get requestedBy(): string;
    private _revocationRecord;
    get revocationRecord(): SignerSigningJobRevocationRecordList;
    get signatureExpiresAt(): string;
    private _signedObject;
    get signedObject(): SignerSigningJobSignedObjectList;
    get status(): string;
    get statusReason(): string;
    private _destination;
    get destination(): SignerSigningJobDestinationOutputReference;
    putDestination(value: SignerSigningJobDestination): void;
    get destinationInput(): SignerSigningJobDestination | undefined;
    private _source;
    get source(): SignerSigningJobSourceOutputReference;
    putSource(value: SignerSigningJobSource): void;
    get sourceInput(): SignerSigningJobSource | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
