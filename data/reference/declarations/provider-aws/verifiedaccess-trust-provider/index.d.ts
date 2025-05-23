/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedaccessTrustProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#description VerifiedaccessTrustProvider#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#device_trust_provider_type VerifiedaccessTrustProvider#device_trust_provider_type}
    */
    readonly deviceTrustProviderType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#id VerifiedaccessTrustProvider#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#policy_reference_name VerifiedaccessTrustProvider#policy_reference_name}
    */
    readonly policyReferenceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#tags VerifiedaccessTrustProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#tags_all VerifiedaccessTrustProvider#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#trust_provider_type VerifiedaccessTrustProvider#trust_provider_type}
    */
    readonly trustProviderType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#user_trust_provider_type VerifiedaccessTrustProvider#user_trust_provider_type}
    */
    readonly userTrustProviderType?: string;
    /**
    * device_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#device_options VerifiedaccessTrustProvider#device_options}
    */
    readonly deviceOptions?: VerifiedaccessTrustProviderDeviceOptions;
    /**
    * oidc_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#oidc_options VerifiedaccessTrustProvider#oidc_options}
    */
    readonly oidcOptions?: VerifiedaccessTrustProviderOidcOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#timeouts VerifiedaccessTrustProvider#timeouts}
    */
    readonly timeouts?: VerifiedaccessTrustProviderTimeouts;
}
export interface VerifiedaccessTrustProviderDeviceOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#tenant_id VerifiedaccessTrustProvider#tenant_id}
    */
    readonly tenantId?: string;
}
export declare function verifiedaccessTrustProviderDeviceOptionsToTerraform(struct?: VerifiedaccessTrustProviderDeviceOptionsOutputReference | VerifiedaccessTrustProviderDeviceOptions): any;
export declare function verifiedaccessTrustProviderDeviceOptionsToHclTerraform(struct?: VerifiedaccessTrustProviderDeviceOptionsOutputReference | VerifiedaccessTrustProviderDeviceOptions): any;
export declare class VerifiedaccessTrustProviderDeviceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessTrustProviderDeviceOptions | undefined;
    set internalValue(value: VerifiedaccessTrustProviderDeviceOptions | undefined);
    private _tenantId?;
    get tenantId(): string;
    set tenantId(value: string);
    resetTenantId(): void;
    get tenantIdInput(): string | undefined;
}
export interface VerifiedaccessTrustProviderOidcOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#authorization_endpoint VerifiedaccessTrustProvider#authorization_endpoint}
    */
    readonly authorizationEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#client_id VerifiedaccessTrustProvider#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#client_secret VerifiedaccessTrustProvider#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#issuer VerifiedaccessTrustProvider#issuer}
    */
    readonly issuer?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#scope VerifiedaccessTrustProvider#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#token_endpoint VerifiedaccessTrustProvider#token_endpoint}
    */
    readonly tokenEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#user_info_endpoint VerifiedaccessTrustProvider#user_info_endpoint}
    */
    readonly userInfoEndpoint?: string;
}
export declare function verifiedaccessTrustProviderOidcOptionsToTerraform(struct?: VerifiedaccessTrustProviderOidcOptionsOutputReference | VerifiedaccessTrustProviderOidcOptions): any;
export declare function verifiedaccessTrustProviderOidcOptionsToHclTerraform(struct?: VerifiedaccessTrustProviderOidcOptionsOutputReference | VerifiedaccessTrustProviderOidcOptions): any;
export declare class VerifiedaccessTrustProviderOidcOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessTrustProviderOidcOptions | undefined;
    set internalValue(value: VerifiedaccessTrustProviderOidcOptions | undefined);
    private _authorizationEndpoint?;
    get authorizationEndpoint(): string;
    set authorizationEndpoint(value: string);
    resetAuthorizationEndpoint(): void;
    get authorizationEndpointInput(): string | undefined;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    resetIssuer(): void;
    get issuerInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    resetScope(): void;
    get scopeInput(): string | undefined;
    private _tokenEndpoint?;
    get tokenEndpoint(): string;
    set tokenEndpoint(value: string);
    resetTokenEndpoint(): void;
    get tokenEndpointInput(): string | undefined;
    private _userInfoEndpoint?;
    get userInfoEndpoint(): string;
    set userInfoEndpoint(value: string);
    resetUserInfoEndpoint(): void;
    get userInfoEndpointInput(): string | undefined;
}
export interface VerifiedaccessTrustProviderTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#create VerifiedaccessTrustProvider#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#delete VerifiedaccessTrustProvider#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#update VerifiedaccessTrustProvider#update}
    */
    readonly update?: string;
}
export declare function verifiedaccessTrustProviderTimeoutsToTerraform(struct?: VerifiedaccessTrustProviderTimeouts | cdktf.IResolvable): any;
export declare function verifiedaccessTrustProviderTimeoutsToHclTerraform(struct?: VerifiedaccessTrustProviderTimeouts | cdktf.IResolvable): any;
export declare class VerifiedaccessTrustProviderTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessTrustProviderTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedaccessTrustProviderTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider aws_verifiedaccess_trust_provider}
*/
export declare class VerifiedaccessTrustProvider extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedaccess_trust_provider";
    /**
    * Generates CDKTF code for importing a VerifiedaccessTrustProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedaccessTrustProvider to import
    * @param importFromId The id of the existing VerifiedaccessTrustProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedaccessTrustProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_trust_provider aws_verifiedaccess_trust_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedaccessTrustProviderConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedaccessTrustProviderConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _deviceTrustProviderType?;
    get deviceTrustProviderType(): string;
    set deviceTrustProviderType(value: string);
    resetDeviceTrustProviderType(): void;
    get deviceTrustProviderTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policyReferenceName?;
    get policyReferenceName(): string;
    set policyReferenceName(value: string);
    get policyReferenceNameInput(): string | undefined;
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
    private _trustProviderType?;
    get trustProviderType(): string;
    set trustProviderType(value: string);
    get trustProviderTypeInput(): string | undefined;
    private _userTrustProviderType?;
    get userTrustProviderType(): string;
    set userTrustProviderType(value: string);
    resetUserTrustProviderType(): void;
    get userTrustProviderTypeInput(): string | undefined;
    private _deviceOptions;
    get deviceOptions(): VerifiedaccessTrustProviderDeviceOptionsOutputReference;
    putDeviceOptions(value: VerifiedaccessTrustProviderDeviceOptions): void;
    resetDeviceOptions(): void;
    get deviceOptionsInput(): VerifiedaccessTrustProviderDeviceOptions | undefined;
    private _oidcOptions;
    get oidcOptions(): VerifiedaccessTrustProviderOidcOptionsOutputReference;
    putOidcOptions(value: VerifiedaccessTrustProviderOidcOptions): void;
    resetOidcOptions(): void;
    get oidcOptionsInput(): VerifiedaccessTrustProviderOidcOptions | undefined;
    private _timeouts;
    get timeouts(): VerifiedaccessTrustProviderTimeoutsOutputReference;
    putTimeouts(value: VerifiedaccessTrustProviderTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VerifiedaccessTrustProviderTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
