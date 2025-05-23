/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferWorkflowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#description TransferWorkflow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#id TransferWorkflow#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#tags_all TransferWorkflow#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * on_exception_steps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#on_exception_steps TransferWorkflow#on_exception_steps}
    */
    readonly onExceptionSteps?: TransferWorkflowOnExceptionSteps[] | cdktf.IResolvable;
    /**
    * steps block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#steps TransferWorkflow#steps}
    */
    readonly steps: TransferWorkflowSteps[] | cdktf.IResolvable;
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
    */
    readonly path?: string;
}
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
    */
    readonly key?: string;
}
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any;
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any;
export declare class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation {
    /**
    * efs_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
    */
    readonly efsFileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
    /**
    * s3_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): any;
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): any;
export declare class TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | undefined);
    private _efsFileLocation;
    get efsFileLocation(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
    putEfsFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): void;
    resetEfsFileLocation(): void;
    get efsFileLocationInput(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    private _s3FileLocation;
    get s3FileLocation(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;
    putS3FileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation): void;
    resetS3FileLocation(): void;
    get s3FileLocationInput(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined;
}
export interface TransferWorkflowOnExceptionStepsCopyStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * destination_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation;
}
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetails): any;
export declare function transferWorkflowOnExceptionStepsCopyStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCopyStepDetails): any;
export declare class TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsCopyStepDetails | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsCopyStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _overwriteExisting?;
    get overwriteExisting(): string;
    set overwriteExisting(value: string);
    resetOverwriteExisting(): void;
    get overwriteExistingInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _destinationFileLocation;
    get destinationFileLocation(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocationOutputReference;
    putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation): void;
    resetDestinationFileLocation(): void;
    get destinationFileLocationInput(): TransferWorkflowOnExceptionStepsCopyStepDetailsDestinationFileLocation | undefined;
}
export interface TransferWorkflowOnExceptionStepsCustomStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#target TransferWorkflow#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
}
export declare function transferWorkflowOnExceptionStepsCustomStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCustomStepDetails): any;
export declare function transferWorkflowOnExceptionStepsCustomStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference | TransferWorkflowOnExceptionStepsCustomStepDetails): any;
export declare class TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsCustomStepDetails | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsCustomStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _timeoutSeconds?;
    get timeoutSeconds(): number;
    set timeoutSeconds(value: number);
    resetTimeoutSeconds(): void;
    get timeoutSecondsInput(): number | undefined;
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
    */
    readonly path?: string;
}
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
    */
    readonly key?: string;
}
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any;
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any;
export declare class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation {
    /**
    * efs_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
    */
    readonly efsFileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
    /**
    * s3_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): any;
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): any;
export declare class TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | undefined);
    private _efsFileLocation;
    get efsFileLocation(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
    putEfsFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): void;
    resetEfsFileLocation(): void;
    get efsFileLocationInput(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    private _s3FileLocation;
    get s3FileLocation(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;
    putS3FileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): void;
    resetS3FileLocation(): void;
    get s3FileLocationInput(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined;
}
export interface TransferWorkflowOnExceptionStepsDecryptStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
    */
    readonly type: string;
    /**
    * destination_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation;
}
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetails): any;
export declare function transferWorkflowOnExceptionStepsDecryptStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDecryptStepDetails): any;
export declare class TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsDecryptStepDetails | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsDecryptStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _overwriteExisting?;
    get overwriteExisting(): string;
    set overwriteExisting(value: string);
    resetOverwriteExisting(): void;
    get overwriteExistingInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _destinationFileLocation;
    get destinationFileLocation(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocationOutputReference;
    putDestinationFileLocation(value: TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation): void;
    resetDestinationFileLocation(): void;
    get destinationFileLocationInput(): TransferWorkflowOnExceptionStepsDecryptStepDetailsDestinationFileLocation | undefined;
}
export interface TransferWorkflowOnExceptionStepsDeleteStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
}
export declare function transferWorkflowOnExceptionStepsDeleteStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDeleteStepDetails): any;
export declare function transferWorkflowOnExceptionStepsDeleteStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference | TransferWorkflowOnExceptionStepsDeleteStepDetails): any;
export declare class TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsDeleteStepDetails | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsDeleteStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
}
export interface TransferWorkflowOnExceptionStepsTagStepDetailsTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#value TransferWorkflow#value}
    */
    readonly value: string;
}
export declare function transferWorkflowOnExceptionStepsTagStepDetailsTagsToTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable): any;
export declare function transferWorkflowOnExceptionStepsTagStepDetailsTagsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable): any;
export declare class TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsTagStepDetailsTags | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class TransferWorkflowOnExceptionStepsTagStepDetailsTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TransferWorkflowOnExceptionStepsTagStepDetailsTagsOutputReference;
}
export interface TransferWorkflowOnExceptionStepsTagStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
    */
    readonly tags?: TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktf.IResolvable;
}
export declare function transferWorkflowOnExceptionStepsTagStepDetailsToTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference | TransferWorkflowOnExceptionStepsTagStepDetails): any;
export declare function transferWorkflowOnExceptionStepsTagStepDetailsToHclTerraform(struct?: TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference | TransferWorkflowOnExceptionStepsTagStepDetails): any;
export declare class TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowOnExceptionStepsTagStepDetails | undefined;
    set internalValue(value: TransferWorkflowOnExceptionStepsTagStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _tags;
    get tags(): TransferWorkflowOnExceptionStepsTagStepDetailsTagsList;
    putTags(value: TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | cdktf.IResolvable): void;
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | TransferWorkflowOnExceptionStepsTagStepDetailsTags[] | undefined;
}
export interface TransferWorkflowOnExceptionSteps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
    */
    readonly type: string;
    /**
    * copy_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}
    */
    readonly copyStepDetails?: TransferWorkflowOnExceptionStepsCopyStepDetails;
    /**
    * custom_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}
    */
    readonly customStepDetails?: TransferWorkflowOnExceptionStepsCustomStepDetails;
    /**
    * decrypt_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}
    */
    readonly decryptStepDetails?: TransferWorkflowOnExceptionStepsDecryptStepDetails;
    /**
    * delete_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}
    */
    readonly deleteStepDetails?: TransferWorkflowOnExceptionStepsDeleteStepDetails;
    /**
    * tag_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}
    */
    readonly tagStepDetails?: TransferWorkflowOnExceptionStepsTagStepDetails;
}
export declare function transferWorkflowOnExceptionStepsToTerraform(struct?: TransferWorkflowOnExceptionSteps | cdktf.IResolvable): any;
export declare function transferWorkflowOnExceptionStepsToHclTerraform(struct?: TransferWorkflowOnExceptionSteps | cdktf.IResolvable): any;
export declare class TransferWorkflowOnExceptionStepsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TransferWorkflowOnExceptionSteps | cdktf.IResolvable | undefined;
    set internalValue(value: TransferWorkflowOnExceptionSteps | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _copyStepDetails;
    get copyStepDetails(): TransferWorkflowOnExceptionStepsCopyStepDetailsOutputReference;
    putCopyStepDetails(value: TransferWorkflowOnExceptionStepsCopyStepDetails): void;
    resetCopyStepDetails(): void;
    get copyStepDetailsInput(): TransferWorkflowOnExceptionStepsCopyStepDetails | undefined;
    private _customStepDetails;
    get customStepDetails(): TransferWorkflowOnExceptionStepsCustomStepDetailsOutputReference;
    putCustomStepDetails(value: TransferWorkflowOnExceptionStepsCustomStepDetails): void;
    resetCustomStepDetails(): void;
    get customStepDetailsInput(): TransferWorkflowOnExceptionStepsCustomStepDetails | undefined;
    private _decryptStepDetails;
    get decryptStepDetails(): TransferWorkflowOnExceptionStepsDecryptStepDetailsOutputReference;
    putDecryptStepDetails(value: TransferWorkflowOnExceptionStepsDecryptStepDetails): void;
    resetDecryptStepDetails(): void;
    get decryptStepDetailsInput(): TransferWorkflowOnExceptionStepsDecryptStepDetails | undefined;
    private _deleteStepDetails;
    get deleteStepDetails(): TransferWorkflowOnExceptionStepsDeleteStepDetailsOutputReference;
    putDeleteStepDetails(value: TransferWorkflowOnExceptionStepsDeleteStepDetails): void;
    resetDeleteStepDetails(): void;
    get deleteStepDetailsInput(): TransferWorkflowOnExceptionStepsDeleteStepDetails | undefined;
    private _tagStepDetails;
    get tagStepDetails(): TransferWorkflowOnExceptionStepsTagStepDetailsOutputReference;
    putTagStepDetails(value: TransferWorkflowOnExceptionStepsTagStepDetails): void;
    resetTagStepDetails(): void;
    get tagStepDetailsInput(): TransferWorkflowOnExceptionStepsTagStepDetails | undefined;
}
export declare class TransferWorkflowOnExceptionStepsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TransferWorkflowOnExceptionSteps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TransferWorkflowOnExceptionStepsOutputReference;
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
    */
    readonly path?: string;
}
export declare function transferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare function transferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
    */
    readonly key?: string;
}
export declare function transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any;
export declare function transferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): any;
export declare class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined;
    set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
}
export interface TransferWorkflowStepsCopyStepDetailsDestinationFileLocation {
    /**
    * efs_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
    */
    readonly efsFileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation;
    /**
    * s3_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation;
}
export declare function transferWorkflowStepsCopyStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocation): any;
export declare function transferWorkflowStepsCopyStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsCopyStepDetailsDestinationFileLocation): any;
export declare class TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | undefined;
    set internalValue(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | undefined);
    private _efsFileLocation;
    get efsFileLocation(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
    putEfsFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation): void;
    resetEfsFileLocation(): void;
    get efsFileLocationInput(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    private _s3FileLocation;
    get s3FileLocation(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocationOutputReference;
    putS3FileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation): void;
    resetS3FileLocation(): void;
    get s3FileLocationInput(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationS3FileLocation | undefined;
}
export interface TransferWorkflowStepsCopyStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * destination_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation;
}
export declare function transferWorkflowStepsCopyStepDetailsToTerraform(struct?: TransferWorkflowStepsCopyStepDetailsOutputReference | TransferWorkflowStepsCopyStepDetails): any;
export declare function transferWorkflowStepsCopyStepDetailsToHclTerraform(struct?: TransferWorkflowStepsCopyStepDetailsOutputReference | TransferWorkflowStepsCopyStepDetails): any;
export declare class TransferWorkflowStepsCopyStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsCopyStepDetails | undefined;
    set internalValue(value: TransferWorkflowStepsCopyStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _overwriteExisting?;
    get overwriteExisting(): string;
    set overwriteExisting(value: string);
    resetOverwriteExisting(): void;
    get overwriteExistingInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _destinationFileLocation;
    get destinationFileLocation(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocationOutputReference;
    putDestinationFileLocation(value: TransferWorkflowStepsCopyStepDetailsDestinationFileLocation): void;
    resetDestinationFileLocation(): void;
    get destinationFileLocationInput(): TransferWorkflowStepsCopyStepDetailsDestinationFileLocation | undefined;
}
export interface TransferWorkflowStepsCustomStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#target TransferWorkflow#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#timeout_seconds TransferWorkflow#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
}
export declare function transferWorkflowStepsCustomStepDetailsToTerraform(struct?: TransferWorkflowStepsCustomStepDetailsOutputReference | TransferWorkflowStepsCustomStepDetails): any;
export declare function transferWorkflowStepsCustomStepDetailsToHclTerraform(struct?: TransferWorkflowStepsCustomStepDetailsOutputReference | TransferWorkflowStepsCustomStepDetails): any;
export declare class TransferWorkflowStepsCustomStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsCustomStepDetails | undefined;
    set internalValue(value: TransferWorkflowStepsCustomStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _timeoutSeconds?;
    get timeoutSeconds(): number;
    set timeoutSeconds(value: number);
    resetTimeoutSeconds(): void;
    get timeoutSecondsInput(): number | undefined;
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#file_system_id TransferWorkflow#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#path TransferWorkflow#path}
    */
    readonly path?: string;
}
export declare function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): any;
export declare class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined);
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#bucket TransferWorkflow#bucket}
    */
    readonly bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
    */
    readonly key?: string;
}
export declare function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any;
export declare function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): any;
export declare class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined;
    set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    resetBucket(): void;
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
}
export interface TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation {
    /**
    * efs_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#efs_file_location TransferWorkflow#efs_file_location}
    */
    readonly efsFileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation;
    /**
    * s3_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#s3_file_location TransferWorkflow#s3_file_location}
    */
    readonly s3FileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation;
}
export declare function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): any;
export declare function transferWorkflowStepsDecryptStepDetailsDestinationFileLocationToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference | TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): any;
export declare class TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | undefined;
    set internalValue(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | undefined);
    private _efsFileLocation;
    get efsFileLocation(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocationOutputReference;
    putEfsFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation): void;
    resetEfsFileLocation(): void;
    get efsFileLocationInput(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationEfsFileLocation | undefined;
    private _s3FileLocation;
    get s3FileLocation(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocationOutputReference;
    putS3FileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation): void;
    resetS3FileLocation(): void;
    get s3FileLocationInput(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationS3FileLocation | undefined;
}
export interface TransferWorkflowStepsDecryptStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#overwrite_existing TransferWorkflow#overwrite_existing}
    */
    readonly overwriteExisting?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
    */
    readonly type: string;
    /**
    * destination_file_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#destination_file_location TransferWorkflow#destination_file_location}
    */
    readonly destinationFileLocation?: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation;
}
export declare function transferWorkflowStepsDecryptStepDetailsToTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsOutputReference | TransferWorkflowStepsDecryptStepDetails): any;
export declare function transferWorkflowStepsDecryptStepDetailsToHclTerraform(struct?: TransferWorkflowStepsDecryptStepDetailsOutputReference | TransferWorkflowStepsDecryptStepDetails): any;
export declare class TransferWorkflowStepsDecryptStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsDecryptStepDetails | undefined;
    set internalValue(value: TransferWorkflowStepsDecryptStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _overwriteExisting?;
    get overwriteExisting(): string;
    set overwriteExisting(value: string);
    resetOverwriteExisting(): void;
    get overwriteExistingInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _destinationFileLocation;
    get destinationFileLocation(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocationOutputReference;
    putDestinationFileLocation(value: TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation): void;
    resetDestinationFileLocation(): void;
    get destinationFileLocationInput(): TransferWorkflowStepsDecryptStepDetailsDestinationFileLocation | undefined;
}
export interface TransferWorkflowStepsDeleteStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
}
export declare function transferWorkflowStepsDeleteStepDetailsToTerraform(struct?: TransferWorkflowStepsDeleteStepDetailsOutputReference | TransferWorkflowStepsDeleteStepDetails): any;
export declare function transferWorkflowStepsDeleteStepDetailsToHclTerraform(struct?: TransferWorkflowStepsDeleteStepDetailsOutputReference | TransferWorkflowStepsDeleteStepDetails): any;
export declare class TransferWorkflowStepsDeleteStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsDeleteStepDetails | undefined;
    set internalValue(value: TransferWorkflowStepsDeleteStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
}
export interface TransferWorkflowStepsTagStepDetailsTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#key TransferWorkflow#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#value TransferWorkflow#value}
    */
    readonly value: string;
}
export declare function transferWorkflowStepsTagStepDetailsTagsToTerraform(struct?: TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable): any;
export declare function transferWorkflowStepsTagStepDetailsTagsToHclTerraform(struct?: TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable): any;
export declare class TransferWorkflowStepsTagStepDetailsTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable | undefined;
    set internalValue(value: TransferWorkflowStepsTagStepDetailsTags | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class TransferWorkflowStepsTagStepDetailsTagsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TransferWorkflowStepsTagStepDetailsTags[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TransferWorkflowStepsTagStepDetailsTagsOutputReference;
}
export interface TransferWorkflowStepsTagStepDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#name TransferWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#source_file_location TransferWorkflow#source_file_location}
    */
    readonly sourceFileLocation?: string;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#tags TransferWorkflow#tags}
    */
    readonly tags?: TransferWorkflowStepsTagStepDetailsTags[] | cdktf.IResolvable;
}
export declare function transferWorkflowStepsTagStepDetailsToTerraform(struct?: TransferWorkflowStepsTagStepDetailsOutputReference | TransferWorkflowStepsTagStepDetails): any;
export declare function transferWorkflowStepsTagStepDetailsToHclTerraform(struct?: TransferWorkflowStepsTagStepDetailsOutputReference | TransferWorkflowStepsTagStepDetails): any;
export declare class TransferWorkflowStepsTagStepDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferWorkflowStepsTagStepDetails | undefined;
    set internalValue(value: TransferWorkflowStepsTagStepDetails | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _sourceFileLocation?;
    get sourceFileLocation(): string;
    set sourceFileLocation(value: string);
    resetSourceFileLocation(): void;
    get sourceFileLocationInput(): string | undefined;
    private _tags;
    get tags(): TransferWorkflowStepsTagStepDetailsTagsList;
    putTags(value: TransferWorkflowStepsTagStepDetailsTags[] | cdktf.IResolvable): void;
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | TransferWorkflowStepsTagStepDetailsTags[] | undefined;
}
export interface TransferWorkflowSteps {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#type TransferWorkflow#type}
    */
    readonly type: string;
    /**
    * copy_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#copy_step_details TransferWorkflow#copy_step_details}
    */
    readonly copyStepDetails?: TransferWorkflowStepsCopyStepDetails;
    /**
    * custom_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#custom_step_details TransferWorkflow#custom_step_details}
    */
    readonly customStepDetails?: TransferWorkflowStepsCustomStepDetails;
    /**
    * decrypt_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#decrypt_step_details TransferWorkflow#decrypt_step_details}
    */
    readonly decryptStepDetails?: TransferWorkflowStepsDecryptStepDetails;
    /**
    * delete_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#delete_step_details TransferWorkflow#delete_step_details}
    */
    readonly deleteStepDetails?: TransferWorkflowStepsDeleteStepDetails;
    /**
    * tag_step_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#tag_step_details TransferWorkflow#tag_step_details}
    */
    readonly tagStepDetails?: TransferWorkflowStepsTagStepDetails;
}
export declare function transferWorkflowStepsToTerraform(struct?: TransferWorkflowSteps | cdktf.IResolvable): any;
export declare function transferWorkflowStepsToHclTerraform(struct?: TransferWorkflowSteps | cdktf.IResolvable): any;
export declare class TransferWorkflowStepsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): TransferWorkflowSteps | cdktf.IResolvable | undefined;
    set internalValue(value: TransferWorkflowSteps | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _copyStepDetails;
    get copyStepDetails(): TransferWorkflowStepsCopyStepDetailsOutputReference;
    putCopyStepDetails(value: TransferWorkflowStepsCopyStepDetails): void;
    resetCopyStepDetails(): void;
    get copyStepDetailsInput(): TransferWorkflowStepsCopyStepDetails | undefined;
    private _customStepDetails;
    get customStepDetails(): TransferWorkflowStepsCustomStepDetailsOutputReference;
    putCustomStepDetails(value: TransferWorkflowStepsCustomStepDetails): void;
    resetCustomStepDetails(): void;
    get customStepDetailsInput(): TransferWorkflowStepsCustomStepDetails | undefined;
    private _decryptStepDetails;
    get decryptStepDetails(): TransferWorkflowStepsDecryptStepDetailsOutputReference;
    putDecryptStepDetails(value: TransferWorkflowStepsDecryptStepDetails): void;
    resetDecryptStepDetails(): void;
    get decryptStepDetailsInput(): TransferWorkflowStepsDecryptStepDetails | undefined;
    private _deleteStepDetails;
    get deleteStepDetails(): TransferWorkflowStepsDeleteStepDetailsOutputReference;
    putDeleteStepDetails(value: TransferWorkflowStepsDeleteStepDetails): void;
    resetDeleteStepDetails(): void;
    get deleteStepDetailsInput(): TransferWorkflowStepsDeleteStepDetails | undefined;
    private _tagStepDetails;
    get tagStepDetails(): TransferWorkflowStepsTagStepDetailsOutputReference;
    putTagStepDetails(value: TransferWorkflowStepsTagStepDetails): void;
    resetTagStepDetails(): void;
    get tagStepDetailsInput(): TransferWorkflowStepsTagStepDetails | undefined;
}
export declare class TransferWorkflowStepsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: TransferWorkflowSteps[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): TransferWorkflowStepsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow aws_transfer_workflow}
*/
export declare class TransferWorkflow extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_workflow";
    /**
    * Generates CDKTF code for importing a TransferWorkflow resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferWorkflow to import
    * @param importFromId The id of the existing TransferWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferWorkflow to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_workflow aws_transfer_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferWorkflowConfig
    */
    constructor(scope: Construct, id: string, config: TransferWorkflowConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    private _onExceptionSteps;
    get onExceptionSteps(): TransferWorkflowOnExceptionStepsList;
    putOnExceptionSteps(value: TransferWorkflowOnExceptionSteps[] | cdktf.IResolvable): void;
    resetOnExceptionSteps(): void;
    get onExceptionStepsInput(): cdktf.IResolvable | TransferWorkflowOnExceptionSteps[] | undefined;
    private _steps;
    get steps(): TransferWorkflowStepsList;
    putSteps(value: TransferWorkflowSteps[] | cdktf.IResolvable): void;
    get stepsInput(): cdktf.IResolvable | TransferWorkflowSteps[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
