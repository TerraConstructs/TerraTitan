/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppfabricAppAuthorizationConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#app_authorization_arn AppfabricAppAuthorizationConnection#app_authorization_arn}
    */
    readonly appAuthorizationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#app_bundle_arn AppfabricAppAuthorizationConnection#app_bundle_arn}
    */
    readonly appBundleArn: string;
    /**
    * auth_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#auth_request AppfabricAppAuthorizationConnection#auth_request}
    */
    readonly authRequest?: AppfabricAppAuthorizationConnectionAuthRequest[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#timeouts AppfabricAppAuthorizationConnection#timeouts}
    */
    readonly timeouts?: AppfabricAppAuthorizationConnectionTimeouts;
}
export interface AppfabricAppAuthorizationConnectionTenant {
}
export declare function appfabricAppAuthorizationConnectionTenantToTerraform(struct?: AppfabricAppAuthorizationConnectionTenant): any;
export declare function appfabricAppAuthorizationConnectionTenantToHclTerraform(struct?: AppfabricAppAuthorizationConnectionTenant): any;
export declare class AppfabricAppAuthorizationConnectionTenantOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricAppAuthorizationConnectionTenant | undefined;
    set internalValue(value: AppfabricAppAuthorizationConnectionTenant | undefined);
    get tenantDisplayName(): string;
    get tenantIdentifier(): string;
}
export declare class AppfabricAppAuthorizationConnectionTenantList extends cdktf.ComplexList {
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
    get(index: number): AppfabricAppAuthorizationConnectionTenantOutputReference;
}
export interface AppfabricAppAuthorizationConnectionAuthRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#code AppfabricAppAuthorizationConnection#code}
    */
    readonly code: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#redirect_uri AppfabricAppAuthorizationConnection#redirect_uri}
    */
    readonly redirectUri: string;
}
export declare function appfabricAppAuthorizationConnectionAuthRequestToTerraform(struct?: AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable): any;
export declare function appfabricAppAuthorizationConnectionAuthRequestToHclTerraform(struct?: AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable): any;
export declare class AppfabricAppAuthorizationConnectionAuthRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricAppAuthorizationConnectionAuthRequest | cdktf.IResolvable | undefined);
    private _code?;
    get code(): string;
    set code(value: string);
    get codeInput(): string | undefined;
    private _redirectUri?;
    get redirectUri(): string;
    set redirectUri(value: string);
    get redirectUriInput(): string | undefined;
}
export declare class AppfabricAppAuthorizationConnectionAuthRequestList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppfabricAppAuthorizationConnectionAuthRequest[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppfabricAppAuthorizationConnectionAuthRequestOutputReference;
}
export interface AppfabricAppAuthorizationConnectionTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#create AppfabricAppAuthorizationConnection#create}
    */
    readonly create?: string;
}
export declare function appfabricAppAuthorizationConnectionTimeoutsToTerraform(struct?: AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable): any;
export declare function appfabricAppAuthorizationConnectionTimeoutsToHclTerraform(struct?: AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable): any;
export declare class AppfabricAppAuthorizationConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AppfabricAppAuthorizationConnectionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection}
*/
export declare class AppfabricAppAuthorizationConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appfabric_app_authorization_connection";
    /**
    * Generates CDKTF code for importing a AppfabricAppAuthorizationConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppfabricAppAuthorizationConnection to import
    * @param importFromId The id of the existing AppfabricAppAuthorizationConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppfabricAppAuthorizationConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appfabric_app_authorization_connection aws_appfabric_app_authorization_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppfabricAppAuthorizationConnectionConfig
    */
    constructor(scope: Construct, id: string, config: AppfabricAppAuthorizationConnectionConfig);
    get app(): string;
    private _appAuthorizationArn?;
    get appAuthorizationArn(): string;
    set appAuthorizationArn(value: string);
    get appAuthorizationArnInput(): string | undefined;
    private _appBundleArn?;
    get appBundleArn(): string;
    set appBundleArn(value: string);
    get appBundleArnInput(): string | undefined;
    get id(): string;
    private _tenant;
    get tenant(): AppfabricAppAuthorizationConnectionTenantList;
    private _authRequest;
    get authRequest(): AppfabricAppAuthorizationConnectionAuthRequestList;
    putAuthRequest(value: AppfabricAppAuthorizationConnectionAuthRequest[] | cdktf.IResolvable): void;
    resetAuthRequest(): void;
    get authRequestInput(): cdktf.IResolvable | AppfabricAppAuthorizationConnectionAuthRequest[] | undefined;
    private _timeouts;
    get timeouts(): AppfabricAppAuthorizationConnectionTimeoutsOutputReference;
    putTimeouts(value: AppfabricAppAuthorizationConnectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AppfabricAppAuthorizationConnectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
