/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrRepositoryConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) If `true`, will delete the repository even if it contains images. */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /** */
    readonly id?: string;
    /** (Optional) The tag mutability setting for the repository. Must be one of: `MUTABLE` or `IMMUTABLE`. Defaults to `MUTABLE`. */
    readonly imageTagMutability?: string;
    /** (Required) Name of the repository. */
    readonly name: string;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** */
    readonly encryptionConfiguration?: EcrRepositoryEncryptionConfiguration[] | cdktf.IResolvable;
    /** */
    readonly imageScanningConfiguration?: EcrRepositoryImageScanningConfiguration;
    /** */
    readonly timeouts?: EcrRepositoryTimeouts;
}
export interface EcrRepositoryEncryptionConfiguration {
    /** (Optional) The encryption type to use for the repository. Valid values are `AES256` or `KMS`. Defaults to `AES256`. */
    readonly encryptionType?: string;
    /** (Optional) The ARN of the KMS key to use when `encryptionType` is `KMS`. If not specified, uses the default AWS managed key for ECR. */
    readonly kmsKey?: string;
}
export declare function ecrRepositoryEncryptionConfigurationToTerraform(struct?: EcrRepositoryEncryptionConfiguration | cdktf.IResolvable): any;
export declare function ecrRepositoryEncryptionConfigurationToHclTerraform(struct?: EcrRepositoryEncryptionConfiguration | cdktf.IResolvable): any;
export declare class EcrRepositoryEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): EcrRepositoryEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: EcrRepositoryEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    resetEncryptionType(): void;
    get encryptionTypeInput(): string | undefined;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
}
export declare class EcrRepositoryEncryptionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: EcrRepositoryEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): EcrRepositoryEncryptionConfigurationOutputReference;
}
export interface EcrRepositoryImageScanningConfiguration {
    /** (Required) Indicates whether images are scanned after being pushed to the repository (true) or not scanned (false). */
    readonly scanOnPush: boolean | cdktf.IResolvable;
}
export declare function ecrRepositoryImageScanningConfigurationToTerraform(struct?: EcrRepositoryImageScanningConfigurationOutputReference | EcrRepositoryImageScanningConfiguration): any;
export declare function ecrRepositoryImageScanningConfigurationToHclTerraform(struct?: EcrRepositoryImageScanningConfigurationOutputReference | EcrRepositoryImageScanningConfiguration): any;
export declare class EcrRepositoryImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcrRepositoryImageScanningConfiguration | undefined;
    set internalValue(value: EcrRepositoryImageScanningConfiguration | undefined);
    private _scanOnPush?;
    get scanOnPush(): boolean | cdktf.IResolvable;
    set scanOnPush(value: boolean | cdktf.IResolvable);
    get scanOnPushInput(): boolean | cdktf.IResolvable | undefined;
}
export interface EcrRepositoryTimeouts {
    /** (Default `20m`) */
    readonly delete?: string;
}
export declare function ecrRepositoryTimeoutsToTerraform(struct?: EcrRepositoryTimeouts | cdktf.IResolvable): any;
export declare function ecrRepositoryTimeoutsToHclTerraform(struct?: EcrRepositoryTimeouts | cdktf.IResolvable): any;
export declare class EcrRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EcrRepositoryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EcrRepositoryTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository aws_ecr_repository}
*/
export declare class EcrRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecr_repository";
    /**
    * Generates CDKTF code for importing a EcrRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrRepository to import
    * @param importFromId The id of the existing EcrRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecr_repository aws_ecr_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: EcrRepositoryConfig);
    get arn(): string;
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageTagMutability?;
    get imageTagMutability(): string;
    set imageTagMutability(value: string);
    resetImageTagMutability(): void;
    get imageTagMutabilityInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get registryId(): string;
    get repositoryUrl(): string;
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
    private _encryptionConfiguration;
    get encryptionConfiguration(): EcrRepositoryEncryptionConfigurationList;
    putEncryptionConfiguration(value: EcrRepositoryEncryptionConfiguration[] | cdktf.IResolvable): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): cdktf.IResolvable | EcrRepositoryEncryptionConfiguration[] | undefined;
    private _imageScanningConfiguration;
    get imageScanningConfiguration(): EcrRepositoryImageScanningConfigurationOutputReference;
    putImageScanningConfiguration(value: EcrRepositoryImageScanningConfiguration): void;
    resetImageScanningConfiguration(): void;
    get imageScanningConfigurationInput(): EcrRepositoryImageScanningConfiguration | undefined;
    private _timeouts;
    get timeouts(): EcrRepositoryTimeoutsOutputReference;
    putTimeouts(value: EcrRepositoryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EcrRepositoryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
