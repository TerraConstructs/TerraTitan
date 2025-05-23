/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#certificate TransferServer#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#directory_id TransferServer#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#domain TransferServer#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#endpoint_type TransferServer#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#force_destroy TransferServer#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#function TransferServer#function}
    */
    readonly function?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#host_key TransferServer#host_key}
    */
    readonly hostKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#id TransferServer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#identity_provider_type TransferServer#identity_provider_type}
    */
    readonly identityProviderType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#invocation_role TransferServer#invocation_role}
    */
    readonly invocationRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#logging_role TransferServer#logging_role}
    */
    readonly loggingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#post_authentication_login_banner TransferServer#post_authentication_login_banner}
    */
    readonly postAuthenticationLoginBanner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#pre_authentication_login_banner TransferServer#pre_authentication_login_banner}
    */
    readonly preAuthenticationLoginBanner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#protocols TransferServer#protocols}
    */
    readonly protocols?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#security_policy_name TransferServer#security_policy_name}
    */
    readonly securityPolicyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#sftp_authentication_methods TransferServer#sftp_authentication_methods}
    */
    readonly sftpAuthenticationMethods?: string;
    /**
    * This is a set of arns of destinations that will receive structured logs from the transfer server
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#structured_log_destinations TransferServer#structured_log_destinations}
    */
    readonly structuredLogDestinations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#tags TransferServer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#tags_all TransferServer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#url TransferServer#url}
    */
    readonly url?: string;
    /**
    * endpoint_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#endpoint_details TransferServer#endpoint_details}
    */
    readonly endpointDetails?: TransferServerEndpointDetails;
    /**
    * protocol_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#protocol_details TransferServer#protocol_details}
    */
    readonly protocolDetails?: TransferServerProtocolDetails;
    /**
    * s3_storage_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#s3_storage_options TransferServer#s3_storage_options}
    */
    readonly s3StorageOptions?: TransferServerS3StorageOptions;
    /**
    * workflow_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#workflow_details TransferServer#workflow_details}
    */
    readonly workflowDetails?: TransferServerWorkflowDetails;
}
export interface TransferServerEndpointDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#address_allocation_ids TransferServer#address_allocation_ids}
    */
    readonly addressAllocationIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#security_group_ids TransferServer#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#subnet_ids TransferServer#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#vpc_endpoint_id TransferServer#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#vpc_id TransferServer#vpc_id}
    */
    readonly vpcId?: string;
}
export declare function transferServerEndpointDetailsToTerraform(struct?: TransferServerEndpointDetailsOutputReference | TransferServerEndpointDetails): any;
export declare function transferServerEndpointDetailsToHclTerraform(struct?: TransferServerEndpointDetailsOutputReference | TransferServerEndpointDetails): any;
export declare class TransferServerEndpointDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferServerEndpointDetails | undefined;
    set internalValue(value: TransferServerEndpointDetails | undefined);
    private _addressAllocationIds?;
    get addressAllocationIds(): string[];
    set addressAllocationIds(value: string[]);
    resetAddressAllocationIds(): void;
    get addressAllocationIdsInput(): string[] | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
}
export interface TransferServerProtocolDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#as2_transports TransferServer#as2_transports}
    */
    readonly as2Transports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#passive_ip TransferServer#passive_ip}
    */
    readonly passiveIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#set_stat_option TransferServer#set_stat_option}
    */
    readonly setStatOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#tls_session_resumption_mode TransferServer#tls_session_resumption_mode}
    */
    readonly tlsSessionResumptionMode?: string;
}
export declare function transferServerProtocolDetailsToTerraform(struct?: TransferServerProtocolDetailsOutputReference | TransferServerProtocolDetails): any;
export declare function transferServerProtocolDetailsToHclTerraform(struct?: TransferServerProtocolDetailsOutputReference | TransferServerProtocolDetails): any;
export declare class TransferServerProtocolDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferServerProtocolDetails | undefined;
    set internalValue(value: TransferServerProtocolDetails | undefined);
    private _as2Transports?;
    get as2Transports(): string[];
    set as2Transports(value: string[]);
    resetAs2Transports(): void;
    get as2TransportsInput(): string[] | undefined;
    private _passiveIp?;
    get passiveIp(): string;
    set passiveIp(value: string);
    resetPassiveIp(): void;
    get passiveIpInput(): string | undefined;
    private _setStatOption?;
    get setStatOption(): string;
    set setStatOption(value: string);
    resetSetStatOption(): void;
    get setStatOptionInput(): string | undefined;
    private _tlsSessionResumptionMode?;
    get tlsSessionResumptionMode(): string;
    set tlsSessionResumptionMode(value: string);
    resetTlsSessionResumptionMode(): void;
    get tlsSessionResumptionModeInput(): string | undefined;
}
export interface TransferServerS3StorageOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#directory_listing_optimization TransferServer#directory_listing_optimization}
    */
    readonly directoryListingOptimization?: string;
}
export declare function transferServerS3StorageOptionsToTerraform(struct?: TransferServerS3StorageOptionsOutputReference | TransferServerS3StorageOptions): any;
export declare function transferServerS3StorageOptionsToHclTerraform(struct?: TransferServerS3StorageOptionsOutputReference | TransferServerS3StorageOptions): any;
export declare class TransferServerS3StorageOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferServerS3StorageOptions | undefined;
    set internalValue(value: TransferServerS3StorageOptions | undefined);
    private _directoryListingOptimization?;
    get directoryListingOptimization(): string;
    set directoryListingOptimization(value: string);
    resetDirectoryListingOptimization(): void;
    get directoryListingOptimizationInput(): string | undefined;
}
export interface TransferServerWorkflowDetailsOnPartialUpload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}
    */
    readonly workflowId: string;
}
export declare function transferServerWorkflowDetailsOnPartialUploadToTerraform(struct?: TransferServerWorkflowDetailsOnPartialUploadOutputReference | TransferServerWorkflowDetailsOnPartialUpload): any;
export declare function transferServerWorkflowDetailsOnPartialUploadToHclTerraform(struct?: TransferServerWorkflowDetailsOnPartialUploadOutputReference | TransferServerWorkflowDetailsOnPartialUpload): any;
export declare class TransferServerWorkflowDetailsOnPartialUploadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferServerWorkflowDetailsOnPartialUpload | undefined;
    set internalValue(value: TransferServerWorkflowDetailsOnPartialUpload | undefined);
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string | undefined;
    private _workflowId?;
    get workflowId(): string;
    set workflowId(value: string);
    get workflowIdInput(): string | undefined;
}
export interface TransferServerWorkflowDetailsOnUpload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#execution_role TransferServer#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#workflow_id TransferServer#workflow_id}
    */
    readonly workflowId: string;
}
export declare function transferServerWorkflowDetailsOnUploadToTerraform(struct?: TransferServerWorkflowDetailsOnUploadOutputReference | TransferServerWorkflowDetailsOnUpload): any;
export declare function transferServerWorkflowDetailsOnUploadToHclTerraform(struct?: TransferServerWorkflowDetailsOnUploadOutputReference | TransferServerWorkflowDetailsOnUpload): any;
export declare class TransferServerWorkflowDetailsOnUploadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferServerWorkflowDetailsOnUpload | undefined;
    set internalValue(value: TransferServerWorkflowDetailsOnUpload | undefined);
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string | undefined;
    private _workflowId?;
    get workflowId(): string;
    set workflowId(value: string);
    get workflowIdInput(): string | undefined;
}
export interface TransferServerWorkflowDetails {
    /**
    * on_partial_upload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#on_partial_upload TransferServer#on_partial_upload}
    */
    readonly onPartialUpload?: TransferServerWorkflowDetailsOnPartialUpload;
    /**
    * on_upload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#on_upload TransferServer#on_upload}
    */
    readonly onUpload?: TransferServerWorkflowDetailsOnUpload;
}
export declare function transferServerWorkflowDetailsToTerraform(struct?: TransferServerWorkflowDetailsOutputReference | TransferServerWorkflowDetails): any;
export declare function transferServerWorkflowDetailsToHclTerraform(struct?: TransferServerWorkflowDetailsOutputReference | TransferServerWorkflowDetails): any;
export declare class TransferServerWorkflowDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferServerWorkflowDetails | undefined;
    set internalValue(value: TransferServerWorkflowDetails | undefined);
    private _onPartialUpload;
    get onPartialUpload(): TransferServerWorkflowDetailsOnPartialUploadOutputReference;
    putOnPartialUpload(value: TransferServerWorkflowDetailsOnPartialUpload): void;
    resetOnPartialUpload(): void;
    get onPartialUploadInput(): TransferServerWorkflowDetailsOnPartialUpload | undefined;
    private _onUpload;
    get onUpload(): TransferServerWorkflowDetailsOnUploadOutputReference;
    putOnUpload(value: TransferServerWorkflowDetailsOnUpload): void;
    resetOnUpload(): void;
    get onUploadInput(): TransferServerWorkflowDetailsOnUpload | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server aws_transfer_server}
*/
export declare class TransferServer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_server";
    /**
    * Generates CDKTF code for importing a TransferServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferServer to import
    * @param importFromId The id of the existing TransferServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferServer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_server aws_transfer_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferServerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: TransferServerConfig);
    get arn(): string;
    private _certificate?;
    get certificate(): string;
    set certificate(value: string);
    resetCertificate(): void;
    get certificateInput(): string | undefined;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    resetDirectoryId(): void;
    get directoryIdInput(): string | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    get endpoint(): string;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    resetEndpointType(): void;
    get endpointTypeInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _function?;
    get function(): string;
    set function(value: string);
    resetFunction(): void;
    get functionInput(): string | undefined;
    private _hostKey?;
    get hostKey(): string;
    set hostKey(value: string);
    resetHostKey(): void;
    get hostKeyInput(): string | undefined;
    get hostKeyFingerprint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityProviderType?;
    get identityProviderType(): string;
    set identityProviderType(value: string);
    resetIdentityProviderType(): void;
    get identityProviderTypeInput(): string | undefined;
    private _invocationRole?;
    get invocationRole(): string;
    set invocationRole(value: string);
    resetInvocationRole(): void;
    get invocationRoleInput(): string | undefined;
    private _loggingRole?;
    get loggingRole(): string;
    set loggingRole(value: string);
    resetLoggingRole(): void;
    get loggingRoleInput(): string | undefined;
    private _postAuthenticationLoginBanner?;
    get postAuthenticationLoginBanner(): string;
    set postAuthenticationLoginBanner(value: string);
    resetPostAuthenticationLoginBanner(): void;
    get postAuthenticationLoginBannerInput(): string | undefined;
    private _preAuthenticationLoginBanner?;
    get preAuthenticationLoginBanner(): string;
    set preAuthenticationLoginBanner(value: string);
    resetPreAuthenticationLoginBanner(): void;
    get preAuthenticationLoginBannerInput(): string | undefined;
    private _protocols?;
    get protocols(): string[];
    set protocols(value: string[]);
    resetProtocols(): void;
    get protocolsInput(): string[] | undefined;
    private _securityPolicyName?;
    get securityPolicyName(): string;
    set securityPolicyName(value: string);
    resetSecurityPolicyName(): void;
    get securityPolicyNameInput(): string | undefined;
    private _sftpAuthenticationMethods?;
    get sftpAuthenticationMethods(): string;
    set sftpAuthenticationMethods(value: string);
    resetSftpAuthenticationMethods(): void;
    get sftpAuthenticationMethodsInput(): string | undefined;
    private _structuredLogDestinations?;
    get structuredLogDestinations(): string[];
    set structuredLogDestinations(value: string[]);
    resetStructuredLogDestinations(): void;
    get structuredLogDestinationsInput(): string[] | undefined;
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
    private _url?;
    get url(): string;
    set url(value: string);
    resetUrl(): void;
    get urlInput(): string | undefined;
    private _endpointDetails;
    get endpointDetails(): TransferServerEndpointDetailsOutputReference;
    putEndpointDetails(value: TransferServerEndpointDetails): void;
    resetEndpointDetails(): void;
    get endpointDetailsInput(): TransferServerEndpointDetails | undefined;
    private _protocolDetails;
    get protocolDetails(): TransferServerProtocolDetailsOutputReference;
    putProtocolDetails(value: TransferServerProtocolDetails): void;
    resetProtocolDetails(): void;
    get protocolDetailsInput(): TransferServerProtocolDetails | undefined;
    private _s3StorageOptions;
    get s3StorageOptions(): TransferServerS3StorageOptionsOutputReference;
    putS3StorageOptions(value: TransferServerS3StorageOptions): void;
    resetS3StorageOptions(): void;
    get s3StorageOptionsInput(): TransferServerS3StorageOptions | undefined;
    private _workflowDetails;
    get workflowDetails(): TransferServerWorkflowDetailsOutputReference;
    putWorkflowDetails(value: TransferServerWorkflowDetails): void;
    resetWorkflowDetails(): void;
    get workflowDetailsInput(): TransferServerWorkflowDetails | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
