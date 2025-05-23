/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsCustomKeyStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#cloud_hsm_cluster_id KmsCustomKeyStore#cloud_hsm_cluster_id}
    */
    readonly cloudHsmClusterId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#custom_key_store_name KmsCustomKeyStore#custom_key_store_name}
    */
    readonly customKeyStoreName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#custom_key_store_type KmsCustomKeyStore#custom_key_store_type}
    */
    readonly customKeyStoreType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#id KmsCustomKeyStore#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#key_store_password KmsCustomKeyStore#key_store_password}
    */
    readonly keyStorePassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#trust_anchor_certificate KmsCustomKeyStore#trust_anchor_certificate}
    */
    readonly trustAnchorCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#xks_proxy_connectivity KmsCustomKeyStore#xks_proxy_connectivity}
    */
    readonly xksProxyConnectivity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#xks_proxy_uri_endpoint KmsCustomKeyStore#xks_proxy_uri_endpoint}
    */
    readonly xksProxyUriEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#xks_proxy_uri_path KmsCustomKeyStore#xks_proxy_uri_path}
    */
    readonly xksProxyUriPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#xks_proxy_vpc_endpoint_service_name KmsCustomKeyStore#xks_proxy_vpc_endpoint_service_name}
    */
    readonly xksProxyVpcEndpointServiceName?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#timeouts KmsCustomKeyStore#timeouts}
    */
    readonly timeouts?: KmsCustomKeyStoreTimeouts;
    /**
    * xks_proxy_authentication_credential block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#xks_proxy_authentication_credential KmsCustomKeyStore#xks_proxy_authentication_credential}
    */
    readonly xksProxyAuthenticationCredential?: KmsCustomKeyStoreXksProxyAuthenticationCredential;
}
export interface KmsCustomKeyStoreTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#create KmsCustomKeyStore#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#delete KmsCustomKeyStore#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#update KmsCustomKeyStore#update}
    */
    readonly update?: string;
}
export declare function kmsCustomKeyStoreTimeoutsToTerraform(struct?: KmsCustomKeyStoreTimeouts | cdktf.IResolvable): any;
export declare function kmsCustomKeyStoreTimeoutsToHclTerraform(struct?: KmsCustomKeyStoreTimeouts | cdktf.IResolvable): any;
export declare class KmsCustomKeyStoreTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KmsCustomKeyStoreTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KmsCustomKeyStoreTimeouts | cdktf.IResolvable | undefined);
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
export interface KmsCustomKeyStoreXksProxyAuthenticationCredential {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#access_key_id KmsCustomKeyStore#access_key_id}
    */
    readonly accessKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#raw_secret_access_key KmsCustomKeyStore#raw_secret_access_key}
    */
    readonly rawSecretAccessKey: string;
}
export declare function kmsCustomKeyStoreXksProxyAuthenticationCredentialToTerraform(struct?: KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference | KmsCustomKeyStoreXksProxyAuthenticationCredential): any;
export declare function kmsCustomKeyStoreXksProxyAuthenticationCredentialToHclTerraform(struct?: KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference | KmsCustomKeyStoreXksProxyAuthenticationCredential): any;
export declare class KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KmsCustomKeyStoreXksProxyAuthenticationCredential | undefined;
    set internalValue(value: KmsCustomKeyStoreXksProxyAuthenticationCredential | undefined);
    private _accessKeyId?;
    get accessKeyId(): string;
    set accessKeyId(value: string);
    get accessKeyIdInput(): string | undefined;
    private _rawSecretAccessKey?;
    get rawSecretAccessKey(): string;
    set rawSecretAccessKey(value: string);
    get rawSecretAccessKeyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store aws_kms_custom_key_store}
*/
export declare class KmsCustomKeyStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kms_custom_key_store";
    /**
    * Generates CDKTF code for importing a KmsCustomKeyStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KmsCustomKeyStore to import
    * @param importFromId The id of the existing KmsCustomKeyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KmsCustomKeyStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_custom_key_store aws_kms_custom_key_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsCustomKeyStoreConfig
    */
    constructor(scope: Construct, id: string, config: KmsCustomKeyStoreConfig);
    private _cloudHsmClusterId?;
    get cloudHsmClusterId(): string;
    set cloudHsmClusterId(value: string);
    resetCloudHsmClusterId(): void;
    get cloudHsmClusterIdInput(): string | undefined;
    private _customKeyStoreName?;
    get customKeyStoreName(): string;
    set customKeyStoreName(value: string);
    get customKeyStoreNameInput(): string | undefined;
    private _customKeyStoreType?;
    get customKeyStoreType(): string;
    set customKeyStoreType(value: string);
    resetCustomKeyStoreType(): void;
    get customKeyStoreTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyStorePassword?;
    get keyStorePassword(): string;
    set keyStorePassword(value: string);
    resetKeyStorePassword(): void;
    get keyStorePasswordInput(): string | undefined;
    private _trustAnchorCertificate?;
    get trustAnchorCertificate(): string;
    set trustAnchorCertificate(value: string);
    resetTrustAnchorCertificate(): void;
    get trustAnchorCertificateInput(): string | undefined;
    private _xksProxyConnectivity?;
    get xksProxyConnectivity(): string;
    set xksProxyConnectivity(value: string);
    resetXksProxyConnectivity(): void;
    get xksProxyConnectivityInput(): string | undefined;
    private _xksProxyUriEndpoint?;
    get xksProxyUriEndpoint(): string;
    set xksProxyUriEndpoint(value: string);
    resetXksProxyUriEndpoint(): void;
    get xksProxyUriEndpointInput(): string | undefined;
    private _xksProxyUriPath?;
    get xksProxyUriPath(): string;
    set xksProxyUriPath(value: string);
    resetXksProxyUriPath(): void;
    get xksProxyUriPathInput(): string | undefined;
    private _xksProxyVpcEndpointServiceName?;
    get xksProxyVpcEndpointServiceName(): string;
    set xksProxyVpcEndpointServiceName(value: string);
    resetXksProxyVpcEndpointServiceName(): void;
    get xksProxyVpcEndpointServiceNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): KmsCustomKeyStoreTimeoutsOutputReference;
    putTimeouts(value: KmsCustomKeyStoreTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KmsCustomKeyStoreTimeouts | undefined;
    private _xksProxyAuthenticationCredential;
    get xksProxyAuthenticationCredential(): KmsCustomKeyStoreXksProxyAuthenticationCredentialOutputReference;
    putXksProxyAuthenticationCredential(value: KmsCustomKeyStoreXksProxyAuthenticationCredential): void;
    resetXksProxyAuthenticationCredential(): void;
    get xksProxyAuthenticationCredentialInput(): KmsCustomKeyStoreXksProxyAuthenticationCredential | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
