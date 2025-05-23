/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface StoragegatewaySmbFileShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#access_based_enumeration StoragegatewaySmbFileShare#access_based_enumeration}
    */
    readonly accessBasedEnumeration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#admin_user_list StoragegatewaySmbFileShare#admin_user_list}
    */
    readonly adminUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#audit_destination_arn StoragegatewaySmbFileShare#audit_destination_arn}
    */
    readonly auditDestinationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#authentication StoragegatewaySmbFileShare#authentication}
    */
    readonly authentication?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#bucket_region StoragegatewaySmbFileShare#bucket_region}
    */
    readonly bucketRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#case_sensitivity StoragegatewaySmbFileShare#case_sensitivity}
    */
    readonly caseSensitivity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#default_storage_class StoragegatewaySmbFileShare#default_storage_class}
    */
    readonly defaultStorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#file_share_name StoragegatewaySmbFileShare#file_share_name}
    */
    readonly fileShareName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#gateway_arn StoragegatewaySmbFileShare#gateway_arn}
    */
    readonly gatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#guess_mime_type_enabled StoragegatewaySmbFileShare#guess_mime_type_enabled}
    */
    readonly guessMimeTypeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#id StoragegatewaySmbFileShare#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#invalid_user_list StoragegatewaySmbFileShare#invalid_user_list}
    */
    readonly invalidUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#kms_encrypted StoragegatewaySmbFileShare#kms_encrypted}
    */
    readonly kmsEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#kms_key_arn StoragegatewaySmbFileShare#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#location_arn StoragegatewaySmbFileShare#location_arn}
    */
    readonly locationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#notification_policy StoragegatewaySmbFileShare#notification_policy}
    */
    readonly notificationPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#object_acl StoragegatewaySmbFileShare#object_acl}
    */
    readonly objectAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#oplocks_enabled StoragegatewaySmbFileShare#oplocks_enabled}
    */
    readonly oplocksEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#read_only StoragegatewaySmbFileShare#read_only}
    */
    readonly readOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#requester_pays StoragegatewaySmbFileShare#requester_pays}
    */
    readonly requesterPays?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#role_arn StoragegatewaySmbFileShare#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#smb_acl_enabled StoragegatewaySmbFileShare#smb_acl_enabled}
    */
    readonly smbAclEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#tags StoragegatewaySmbFileShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#tags_all StoragegatewaySmbFileShare#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#valid_user_list StoragegatewaySmbFileShare#valid_user_list}
    */
    readonly validUserList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#vpc_endpoint_dns_name StoragegatewaySmbFileShare#vpc_endpoint_dns_name}
    */
    readonly vpcEndpointDnsName?: string;
    /**
    * cache_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#cache_attributes StoragegatewaySmbFileShare#cache_attributes}
    */
    readonly cacheAttributes?: StoragegatewaySmbFileShareCacheAttributes;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#timeouts StoragegatewaySmbFileShare#timeouts}
    */
    readonly timeouts?: StoragegatewaySmbFileShareTimeouts;
}
export interface StoragegatewaySmbFileShareCacheAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#cache_stale_timeout_in_seconds StoragegatewaySmbFileShare#cache_stale_timeout_in_seconds}
    */
    readonly cacheStaleTimeoutInSeconds?: number;
}
export declare function storagegatewaySmbFileShareCacheAttributesToTerraform(struct?: StoragegatewaySmbFileShareCacheAttributesOutputReference | StoragegatewaySmbFileShareCacheAttributes): any;
export declare function storagegatewaySmbFileShareCacheAttributesToHclTerraform(struct?: StoragegatewaySmbFileShareCacheAttributesOutputReference | StoragegatewaySmbFileShareCacheAttributes): any;
export declare class StoragegatewaySmbFileShareCacheAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewaySmbFileShareCacheAttributes | undefined;
    set internalValue(value: StoragegatewaySmbFileShareCacheAttributes | undefined);
    private _cacheStaleTimeoutInSeconds?;
    get cacheStaleTimeoutInSeconds(): number;
    set cacheStaleTimeoutInSeconds(value: number);
    resetCacheStaleTimeoutInSeconds(): void;
    get cacheStaleTimeoutInSecondsInput(): number | undefined;
}
export interface StoragegatewaySmbFileShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#create StoragegatewaySmbFileShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#delete StoragegatewaySmbFileShare#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#update StoragegatewaySmbFileShare#update}
    */
    readonly update?: string;
}
export declare function storagegatewaySmbFileShareTimeoutsToTerraform(struct?: StoragegatewaySmbFileShareTimeouts | cdktf.IResolvable): any;
export declare function storagegatewaySmbFileShareTimeoutsToHclTerraform(struct?: StoragegatewaySmbFileShareTimeouts | cdktf.IResolvable): any;
export declare class StoragegatewaySmbFileShareTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): StoragegatewaySmbFileShareTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: StoragegatewaySmbFileShareTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share aws_storagegateway_smb_file_share}
*/
export declare class StoragegatewaySmbFileShare extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_storagegateway_smb_file_share";
    /**
    * Generates CDKTF code for importing a StoragegatewaySmbFileShare resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the StoragegatewaySmbFileShare to import
    * @param importFromId The id of the existing StoragegatewaySmbFileShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the StoragegatewaySmbFileShare to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/storagegateway_smb_file_share aws_storagegateway_smb_file_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewaySmbFileShareConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewaySmbFileShareConfig);
    private _accessBasedEnumeration?;
    get accessBasedEnumeration(): boolean | cdktf.IResolvable;
    set accessBasedEnumeration(value: boolean | cdktf.IResolvable);
    resetAccessBasedEnumeration(): void;
    get accessBasedEnumerationInput(): boolean | cdktf.IResolvable | undefined;
    private _adminUserList?;
    get adminUserList(): string[];
    set adminUserList(value: string[]);
    resetAdminUserList(): void;
    get adminUserListInput(): string[] | undefined;
    get arn(): string;
    private _auditDestinationArn?;
    get auditDestinationArn(): string;
    set auditDestinationArn(value: string);
    resetAuditDestinationArn(): void;
    get auditDestinationArnInput(): string | undefined;
    private _authentication?;
    get authentication(): string;
    set authentication(value: string);
    resetAuthentication(): void;
    get authenticationInput(): string | undefined;
    private _bucketRegion?;
    get bucketRegion(): string;
    set bucketRegion(value: string);
    resetBucketRegion(): void;
    get bucketRegionInput(): string | undefined;
    private _caseSensitivity?;
    get caseSensitivity(): string;
    set caseSensitivity(value: string);
    resetCaseSensitivity(): void;
    get caseSensitivityInput(): string | undefined;
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
    private _invalidUserList?;
    get invalidUserList(): string[];
    set invalidUserList(value: string[]);
    resetInvalidUserList(): void;
    get invalidUserListInput(): string[] | undefined;
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
    private _oplocksEnabled?;
    get oplocksEnabled(): boolean | cdktf.IResolvable;
    set oplocksEnabled(value: boolean | cdktf.IResolvable);
    resetOplocksEnabled(): void;
    get oplocksEnabledInput(): boolean | cdktf.IResolvable | undefined;
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
    private _smbAclEnabled?;
    get smbAclEnabled(): boolean | cdktf.IResolvable;
    set smbAclEnabled(value: boolean | cdktf.IResolvable);
    resetSmbAclEnabled(): void;
    get smbAclEnabledInput(): boolean | cdktf.IResolvable | undefined;
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
    private _validUserList?;
    get validUserList(): string[];
    set validUserList(value: string[]);
    resetValidUserList(): void;
    get validUserListInput(): string[] | undefined;
    private _vpcEndpointDnsName?;
    get vpcEndpointDnsName(): string;
    set vpcEndpointDnsName(value: string);
    resetVpcEndpointDnsName(): void;
    get vpcEndpointDnsNameInput(): string | undefined;
    private _cacheAttributes;
    get cacheAttributes(): StoragegatewaySmbFileShareCacheAttributesOutputReference;
    putCacheAttributes(value: StoragegatewaySmbFileShareCacheAttributes): void;
    resetCacheAttributes(): void;
    get cacheAttributesInput(): StoragegatewaySmbFileShareCacheAttributes | undefined;
    private _timeouts;
    get timeouts(): StoragegatewaySmbFileShareTimeoutsOutputReference;
    putTimeouts(value: StoragegatewaySmbFileShareTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | StoragegatewaySmbFileShareTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
