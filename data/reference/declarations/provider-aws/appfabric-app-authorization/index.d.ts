/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppfabricAppAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#app AppfabricAppAuthorization#app}
    */
    readonly app: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#app_bundle_arn AppfabricAppAuthorization#app_bundle_arn}
    */
    readonly appBundleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#auth_type AppfabricAppAuthorization#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#tags AppfabricAppAuthorization#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * credential block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#credential AppfabricAppAuthorization#credential}
    */
    readonly credential?: AppfabricAppAuthorizationCredential[] | cdktf.IResolvable;
    /**
    * tenant block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#tenant AppfabricAppAuthorization#tenant}
    */
    readonly tenant?: AppfabricAppAuthorizationTenant[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#timeouts AppfabricAppAuthorization#timeouts}
    */
    readonly timeouts?: AppfabricAppAuthorizationTimeouts;
}
export interface AppfabricAppAuthorizationCredentialApiKeyCredential {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#api_key AppfabricAppAuthorization#api_key}
    */
    readonly apiKey: string;
}
export declare function appfabricAppAuthorizationCredentialApiKeyCredentialToTerraform(struct?: AppfabricAppAuthorizationCredentialApiKeyCredential | cdktf.IResolvable): any;
export declare function appfabricAppAuthorizationCredentialApiKeyCredentialToHclTerraform(struct?: AppfabricAppAuthorizationCredentialApiKeyCredential | cdktf.IResolvable): any;
export declare class AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricAppAuthorizationCredentialApiKeyCredential | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricAppAuthorizationCredentialApiKeyCredential | cdktf.IResolvable | undefined);
    private _apiKey?;
    get apiKey(): string;
    set apiKey(value: string);
    get apiKeyInput(): string | undefined;
}
export declare class AppfabricAppAuthorizationCredentialApiKeyCredentialList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricAppAuthorizationCredentialApiKeyCredential[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricAppAuthorizationCredentialApiKeyCredentialOutputReference;
}
export interface AppfabricAppAuthorizationCredentialOauth2Credential {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#client_id AppfabricAppAuthorization#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#client_secret AppfabricAppAuthorization#client_secret}
    */
    readonly clientSecret: string;
}
export declare function appfabricAppAuthorizationCredentialOauth2CredentialToTerraform(struct?: AppfabricAppAuthorizationCredentialOauth2Credential | cdktf.IResolvable): any;
export declare function appfabricAppAuthorizationCredentialOauth2CredentialToHclTerraform(struct?: AppfabricAppAuthorizationCredentialOauth2Credential | cdktf.IResolvable): any;
export declare class AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricAppAuthorizationCredentialOauth2Credential | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricAppAuthorizationCredentialOauth2Credential | cdktf.IResolvable | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string | undefined;
}
export declare class AppfabricAppAuthorizationCredentialOauth2CredentialList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricAppAuthorizationCredentialOauth2Credential[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricAppAuthorizationCredentialOauth2CredentialOutputReference;
}
export interface AppfabricAppAuthorizationCredential {
    /**
    * api_key_credential block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#api_key_credential AppfabricAppAuthorization#api_key_credential}
    */
    readonly apiKeyCredential?: AppfabricAppAuthorizationCredentialApiKeyCredential[] | cdktf.IResolvable;
    /**
    * oauth2_credential block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#oauth2_credential AppfabricAppAuthorization#oauth2_credential}
    */
    readonly oauth2Credential?: AppfabricAppAuthorizationCredentialOauth2Credential[] | cdktf.IResolvable;
}
export declare function appfabricAppAuthorizationCredentialToTerraform(struct?: AppfabricAppAuthorizationCredential | cdktf.IResolvable): any;
export declare function appfabricAppAuthorizationCredentialToHclTerraform(struct?: AppfabricAppAuthorizationCredential | cdktf.IResolvable): any;
export declare class AppfabricAppAuthorizationCredentialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricAppAuthorizationCredential | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricAppAuthorizationCredential | cdktf.IResolvable | undefined);
    private _apiKeyCredential;
    get apiKeyCredential(): AppfabricAppAuthorizationCredentialApiKeyCredentialList;
    putApiKeyCredential(value: AppfabricAppAuthorizationCredentialApiKeyCredential[] | cdktf.IResolvable): void;
    resetApiKeyCredential(): void;
    get apiKeyCredentialInput(): cdktf.IResolvable | AppfabricAppAuthorizationCredentialApiKeyCredential[] | undefined;
    private _oauth2Credential;
    get oauth2Credential(): AppfabricAppAuthorizationCredentialOauth2CredentialList;
    putOauth2Credential(value: AppfabricAppAuthorizationCredentialOauth2Credential[] | cdktf.IResolvable): void;
    resetOauth2Credential(): void;
    get oauth2CredentialInput(): cdktf.IResolvable | AppfabricAppAuthorizationCredentialOauth2Credential[] | undefined;
}
export declare class AppfabricAppAuthorizationCredentialList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricAppAuthorizationCredential[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricAppAuthorizationCredentialOutputReference;
}
export interface AppfabricAppAuthorizationTenant {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#tenant_display_name AppfabricAppAuthorization#tenant_display_name}
    */
    readonly tenantDisplayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#tenant_identifier AppfabricAppAuthorization#tenant_identifier}
    */
    readonly tenantIdentifier: string;
}
export declare function appfabricAppAuthorizationTenantToTerraform(struct?: AppfabricAppAuthorizationTenant | cdktf.IResolvable): any;
export declare function appfabricAppAuthorizationTenantToHclTerraform(struct?: AppfabricAppAuthorizationTenant | cdktf.IResolvable): any;
export declare class AppfabricAppAuthorizationTenantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricAppAuthorizationTenant | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricAppAuthorizationTenant | cdktf.IResolvable | undefined);
    private _tenantDisplayName?;
    get tenantDisplayName(): string;
    set tenantDisplayName(value: string);
    get tenantDisplayNameInput(): string | undefined;
    private _tenantIdentifier?;
    get tenantIdentifier(): string;
    set tenantIdentifier(value: string);
    get tenantIdentifierInput(): string | undefined;
}
export declare class AppfabricAppAuthorizationTenantList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricAppAuthorizationTenant[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricAppAuthorizationTenantOutputReference;
}
export interface AppfabricAppAuthorizationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#create AppfabricAppAuthorization#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#delete AppfabricAppAuthorization#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#update AppfabricAppAuthorization#update}
    */
    readonly update?: string;
}
export declare function appfabricAppAuthorizationTimeoutsToTerraform(struct?: AppfabricAppAuthorizationTimeouts | cdktf.IResolvable): any;
export declare function appfabricAppAuthorizationTimeoutsToHclTerraform(struct?: AppfabricAppAuthorizationTimeouts | cdktf.IResolvable): any;
export declare class AppfabricAppAuthorizationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppfabricAppAuthorizationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricAppAuthorizationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization aws_appfabric_app_authorization}
*/
export declare class AppfabricAppAuthorization extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appfabric_app_authorization";
    /**
    * Generates CDKTF code for importing a AppfabricAppAuthorization resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppfabricAppAuthorization to import
    * @param importFromId The id of the existing AppfabricAppAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppfabricAppAuthorization to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization aws_appfabric_app_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppfabricAppAuthorizationConfig
    */
    constructor(scope: Construct, id: string, config: AppfabricAppAuthorizationConfig);
    private _app?;
    get app(): string;
    set app(value: string);
    get appInput(): string | undefined;
    private _appBundleArn?;
    get appBundleArn(): string;
    set appBundleArn(value: string);
    get appBundleArnInput(): string | undefined;
    get arn(): string;
    private _authType?;
    get authType(): string;
    set authType(value: string);
    get authTypeInput(): string | undefined;
    get authUrl(): string;
    get createdAt(): string;
    get id(): string;
    get persona(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get updatedAt(): string;
    private _credential;
    get credential(): AppfabricAppAuthorizationCredentialList;
    putCredential(value: AppfabricAppAuthorizationCredential[] | cdktf.IResolvable): void;
    resetCredential(): void;
    get credentialInput(): cdktf.IResolvable | AppfabricAppAuthorizationCredential[] | undefined;
    private _tenant;
    get tenant(): AppfabricAppAuthorizationTenantList;
    putTenant(value: AppfabricAppAuthorizationTenant[] | cdktf.IResolvable): void;
    resetTenant(): void;
    get tenantInput(): cdktf.IResolvable | AppfabricAppAuthorizationTenant[] | undefined;
    private _timeouts;
    get timeouts(): AppfabricAppAuthorizationTimeoutsOutputReference;
    putTimeouts(value: AppfabricAppAuthorizationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AppfabricAppAuthorizationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
