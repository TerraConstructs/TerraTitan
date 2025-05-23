/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewayNfsFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#audit_destination_arn StoragegatewayNfsFileShare#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#bucket_region StoragegatewayNfsFileShare#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#client_list StoragegatewayNfsFileShare#client_list}
    */
    readonly clientList: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#default_storage_class StoragegatewayNfsFileShare#default_storage_class}
    */
    readonly defaultStorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#file_share_name StoragegatewayNfsFileShare#file_share_name}
    */
    readonly fileShareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#gateway_arn StoragegatewayNfsFileShare#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#guess_mime_type_enabled StoragegatewayNfsFileShare#guess_mime_type_enabled}
    */
    readonly guessMimeTypeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#id StoragegatewayNfsFileShare#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#kms_encrypted StoragegatewayNfsFileShare#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#kms_key_arn StoragegatewayNfsFileShare#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#location_arn StoragegatewayNfsFileShare#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#notification_policy StoragegatewayNfsFileShare#notification_policy}
    */
    readonly notificationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#object_acl StoragegatewayNfsFileShare#object_acl}
    */
    readonly objectAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#read_only StoragegatewayNfsFileShare#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#requester_pays StoragegatewayNfsFileShare#requester_pays}
    */
    readonly requesterPays?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#role_arn StoragegatewayNfsFileShare#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#squash StoragegatewayNfsFileShare#squash}
    */
    readonly squash?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#tags StoragegatewayNfsFileShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#tags_all StoragegatewayNfsFileShare#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#vpc_endpoint_dns_name StoragegatewayNfsFileShare#vpc_endpoint_dns_name}
    */
    readonly vpcEndpointDnsName?: string;
    /**
    * cache_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#cache_attributes StoragegatewayNfsFileShare#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewayNfsFileShareCacheAttributes;
    /**
    * nfs_file_share_defaults block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#nfs_file_share_defaults StoragegatewayNfsFileShare#nfs_file_share_defaults}
    */
    readonly nfsFileShareDefaults?: StoragegatewayNfsFileShareNfsFileShareDefaults;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#timeouts StoragegatewayNfsFileShare#timeouts}
    */
    readonly timeouts?: StoragegatewayNfsFileShareTimeouts;
}
export interface StoragegatewayNfsFileShareCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#cache_stale_timeout_in_seconds StoragegatewayNfsFileShare#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export declare function storagegatewayNfsFileShareCacheAttributesToTerraform(struct?: StoragegatewayNfsFileShareCacheAttributesOutputReference | StoragegatewayNfsFileShareCacheAttributes): any;
export declare function storagegatewayNfsFileShareCacheAttributesToHclTerraform(struct?: StoragegatewayNfsFileShareCacheAttributesOutputReference | StoragegatewayNfsFileShareCacheAttributes): any;
export declare class StoragegatewayNfsFileShareCacheAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewayNfsFileShareCacheAttributes | undefined;
    set internalValue(value: StoragegatewayNfsFileShareCacheAttributes | undefined);
    private _cacheStaleTimeoutInSeconds?;
    get cacheStaleTimeoutInSeconds(): number;
    set cacheStaleTimeoutInSeconds(value: number);
    resetCacheStaleTimeoutInSeconds(): void;
    get cacheStaleTimeoutInSecondsInput(): number | undefined;
}
export interface StoragegatewayNfsFileShareNfsFileShareDefaults {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#directory_mode StoragegatewayNfsFileShare#directory_mode}
    */
    readonly directoryMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#file_mode StoragegatewayNfsFileShare#file_mode}
    */
    readonly fileMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#group_id StoragegatewayNfsFileShare#group_id}
    */
    readonly groupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#owner_id StoragegatewayNfsFileShare#owner_id}
    */
    readonly ownerId?: string;
}
export declare function storagegatewayNfsFileShareNfsFileShareDefaultsToTerraform(struct?: StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference | StoragegatewayNfsFileShareNfsFileShareDefaults): any;
export declare function storagegatewayNfsFileShareNfsFileShareDefaultsToHclTerraform(struct?: StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference | StoragegatewayNfsFileShareNfsFileShareDefaults): any;
export declare class StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewayNfsFileShareNfsFileShareDefaults | undefined;
    set internalValue(value: StoragegatewayNfsFileShareNfsFileShareDefaults | undefined);
    private _directoryMode?;
    get directoryMode(): string;
    set directoryMode(value: string);
    resetDirectoryMode(): void;
    get directoryModeInput(): string | undefined;
    private _fileMode?;
    get fileMode(): string;
    set fileMode(value: string);
    resetFileMode(): void;
    get fileModeInput(): string | undefined;
    private _groupId?;
    get groupId(): string;
    set groupId(value: string);
    resetGroupId(): void;
    get groupIdInput(): string | undefined;
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string | undefined;
}
export interface StoragegatewayNfsFileShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#create StoragegatewayNfsFileShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#delete StoragegatewayNfsFileShare#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#update StoragegatewayNfsFileShare#update}
    */
    readonly update?: string;
}
export declare function storagegatewayNfsFileShareTimeoutsToTerraform(struct?: StoragegatewayNfsFileShareTimeouts | cdktf.IResolvable): any;
export declare function storagegatewayNfsFileShareTimeoutsToHclTerraform(struct?: StoragegatewayNfsFileShareTimeouts | cdktf.IResolvable): any;
export declare class StoragegatewayNfsFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewayNfsFileShareTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: StoragegatewayNfsFileShareTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share aws_storagegateway_nfs_file_share}
*/
export declare class StoragegatewayNfsFileShare extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_storagegateway_nfs_file_share";
    /**
    * Generates CDKTF code for importing a StoragegatewayNfsFileShare resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewayNfsFileShare to import
    * @param importFromId The id of the existing StoragegatewayNfsFileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewayNfsFileShare to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_nfs_file_share aws_storagegateway_nfs_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayNfsFileShareConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayNfsFileShareConfig);
    get arn(): string;
    private _auditDestinationArn?;
    get auditDestinationArn(): string;
    set auditDestinationArn(value: string);
    resetAuditDestinationArn(): void;
    get auditDestinationArnInput(): string | undefined;
    private _bucketRegion?;
    get bucketRegion(): string;
    set bucketRegion(value: string);
    resetBucketRegion(): void;
    get bucketRegionInput(): string | undefined;
    private _clientList?;
    get clientList(): string[];
    set clientList(value: string[]);
    get clientListInput(): string[] | undefined;
    private _defaultStorageClass?;
    get defaultStorageClass(): string;
    set defaultStorageClass(value: string);
    resetDefaultStorageClass(): void;
    get defaultStorageClassInput(): string | undefined;
    private _fileShareName?;
    get fileShareName(): string;
    set fileShareName(value: string);
    resetFileShareName(): void;
    get fileShareNameInput(): string | undefined;
    get fileshareId(): string;
    private _gatewayArn?;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string | undefined;
    private _guessMimeTypeEnabled?;
    get guessMimeTypeEnabled(): boolean | cdktf.IResolvable;
    set guessMimeTypeEnabled(value: boolean | cdktf.IResolvable);
    resetGuessMimeTypeEnabled(): void;
    get guessMimeTypeEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsEncrypted?;
    get kmsEncrypted(): boolean | cdktf.IResolvable;
    set kmsEncrypted(value: boolean | cdktf.IResolvable);
    resetKmsEncrypted(): void;
    get kmsEncryptedInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _locationArn?;
    get locationArn(): string;
    set locationArn(value: string);
    get locationArnInput(): string | undefined;
    private _notificationPolicy?;
    get notificationPolicy(): string;
    set notificationPolicy(value: string);
    resetNotificationPolicy(): void;
    get notificationPolicyInput(): string | undefined;
    private _objectAcl?;
    get objectAcl(): string;
    set objectAcl(value: string);
    resetObjectAcl(): void;
    get objectAclInput(): string | undefined;
    get path(): string;
    private _readOnly?;
    get readOnly(): boolean | cdktf.IResolvable;
    set readOnly(value: boolean | cdktf.IResolvable);
    resetReadOnly(): void;
    get readOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _requesterPays?;
    get requesterPays(): boolean | cdktf.IResolvable;
    set requesterPays(value: boolean | cdktf.IResolvable);
    resetRequesterPays(): void;
    get requesterPaysInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _squash?;
    get squash(): string;
    set squash(value: string);
    resetSquash(): void;
    get squashInput(): string | undefined;
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
    private _vpcEndpointDnsName?;
    get vpcEndpointDnsName(): string;
    set vpcEndpointDnsName(value: string);
    resetVpcEndpointDnsName(): void;
    get vpcEndpointDnsNameInput(): string | undefined;
    private _cacheAttributes;
    get cacheAttributes(): StoragegatewayNfsFileShareCacheAttributesOutputReference;
    putCacheAttributes(value: StoragegatewayNfsFileShareCacheAttributes): void;
    resetCacheAttributes(): void;
    get cacheAttributesInput(): StoragegatewayNfsFileShareCacheAttributes | undefined;
    private _nfsFileShareDefaults;
    get nfsFileShareDefaults(): StoragegatewayNfsFileShareNfsFileShareDefaultsOutputReference;
    putNfsFileShareDefaults(value: StoragegatewayNfsFileShareNfsFileShareDefaults): void;
    resetNfsFileShareDefaults(): void;
    get nfsFileShareDefaultsInput(): StoragegatewayNfsFileShareNfsFileShareDefaults | undefined;
    private _timeouts;
    get timeouts(): StoragegatewayNfsFileShareTimeoutsOutputReference;
    putTimeouts(value: StoragegatewayNfsFileShareTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | StoragegatewayNfsFileShareTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
