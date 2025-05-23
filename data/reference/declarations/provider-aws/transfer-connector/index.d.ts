/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TransferConnectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#access_role TransferConnector#access_role}
    */
    readonly accessRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#id TransferConnector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#logging_role TransferConnector#logging_role}
    */
    readonly loggingRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#security_policy_name TransferConnector#security_policy_name}
    */
    readonly securityPolicyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#tags TransferConnector#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#tags_all TransferConnector#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#url TransferConnector#url}
    */
    readonly url: string;
    /**
    * as2_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#as2_config TransferConnector#as2_config}
    */
    readonly as2Config?: TransferConnectorAs2Config;
    /**
    * sftp_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#sftp_config TransferConnector#sftp_config}
    */
    readonly sftpConfig?: TransferConnectorSftpConfig;
}
export interface TransferConnectorAs2Config {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#compression TransferConnector#compression}
    */
    readonly compression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#encryption_algorithm TransferConnector#encryption_algorithm}
    */
    readonly encryptionAlgorithm: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#local_profile_id TransferConnector#local_profile_id}
    */
    readonly localProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#mdn_response TransferConnector#mdn_response}
    */
    readonly mdnResponse: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#mdn_signing_algorithm TransferConnector#mdn_signing_algorithm}
    */
    readonly mdnSigningAlgorithm?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#message_subject TransferConnector#message_subject}
    */
    readonly messageSubject?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#partner_profile_id TransferConnector#partner_profile_id}
    */
    readonly partnerProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#signing_algorithm TransferConnector#signing_algorithm}
    */
    readonly signingAlgorithm: string;
}
export declare function transferConnectorAs2ConfigToTerraform(struct?: TransferConnectorAs2ConfigOutputReference | TransferConnectorAs2Config): any;
export declare function transferConnectorAs2ConfigToHclTerraform(struct?: TransferConnectorAs2ConfigOutputReference | TransferConnectorAs2Config): any;
export declare class TransferConnectorAs2ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferConnectorAs2Config | undefined;
    set internalValue(value: TransferConnectorAs2Config | undefined);
    private _compression?;
    get compression(): string;
    set compression(value: string);
    get compressionInput(): string | undefined;
    private _encryptionAlgorithm?;
    get encryptionAlgorithm(): string;
    set encryptionAlgorithm(value: string);
    get encryptionAlgorithmInput(): string | undefined;
    private _localProfileId?;
    get localProfileId(): string;
    set localProfileId(value: string);
    get localProfileIdInput(): string | undefined;
    private _mdnResponse?;
    get mdnResponse(): string;
    set mdnResponse(value: string);
    get mdnResponseInput(): string | undefined;
    private _mdnSigningAlgorithm?;
    get mdnSigningAlgorithm(): string;
    set mdnSigningAlgorithm(value: string);
    resetMdnSigningAlgorithm(): void;
    get mdnSigningAlgorithmInput(): string | undefined;
    private _messageSubject?;
    get messageSubject(): string;
    set messageSubject(value: string);
    resetMessageSubject(): void;
    get messageSubjectInput(): string | undefined;
    private _partnerProfileId?;
    get partnerProfileId(): string;
    set partnerProfileId(value: string);
    get partnerProfileIdInput(): string | undefined;
    private _signingAlgorithm?;
    get signingAlgorithm(): string;
    set signingAlgorithm(value: string);
    get signingAlgorithmInput(): string | undefined;
}
export interface TransferConnectorSftpConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#trusted_host_keys TransferConnector#trusted_host_keys}
    */
    readonly trustedHostKeys?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#user_secret_id TransferConnector#user_secret_id}
    */
    readonly userSecretId?: string;
}
export declare function transferConnectorSftpConfigToTerraform(struct?: TransferConnectorSftpConfigOutputReference | TransferConnectorSftpConfig): any;
export declare function transferConnectorSftpConfigToHclTerraform(struct?: TransferConnectorSftpConfigOutputReference | TransferConnectorSftpConfig): any;
export declare class TransferConnectorSftpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TransferConnectorSftpConfig | undefined;
    set internalValue(value: TransferConnectorSftpConfig | undefined);
    private _trustedHostKeys?;
    get trustedHostKeys(): string[];
    set trustedHostKeys(value: string[]);
    resetTrustedHostKeys(): void;
    get trustedHostKeysInput(): string[] | undefined;
    private _userSecretId?;
    get userSecretId(): string;
    set userSecretId(value: string);
    resetUserSecretId(): void;
    get userSecretIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector aws_transfer_connector}
*/
export declare class TransferConnector extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transfer_connector";
    /**
    * Generates CDKTF code for importing a TransferConnector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TransferConnector to import
    * @param importFromId The id of the existing TransferConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TransferConnector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transfer_connector aws_transfer_connector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TransferConnectorConfig
    */
    constructor(scope: Construct, id: string, config: TransferConnectorConfig);
    private _accessRole?;
    get accessRole(): string;
    set accessRole(value: string);
    get accessRoleInput(): string | undefined;
    get arn(): string;
    get connectorId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _loggingRole?;
    get loggingRole(): string;
    set loggingRole(value: string);
    resetLoggingRole(): void;
    get loggingRoleInput(): string | undefined;
    private _securityPolicyName?;
    get securityPolicyName(): string;
    set securityPolicyName(value: string);
    resetSecurityPolicyName(): void;
    get securityPolicyNameInput(): string | undefined;
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
    get urlInput(): string | undefined;
    private _as2Config;
    get as2Config(): TransferConnectorAs2ConfigOutputReference;
    putAs2Config(value: TransferConnectorAs2Config): void;
    resetAs2Config(): void;
    get as2ConfigInput(): TransferConnectorAs2Config | undefined;
    private _sftpConfig;
    get sftpConfig(): TransferConnectorSftpConfigOutputReference;
    putSftpConfig(value: TransferConnectorSftpConfig): void;
    resetSftpConfig(): void;
    get sftpConfigInput(): TransferConnectorSftpConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
