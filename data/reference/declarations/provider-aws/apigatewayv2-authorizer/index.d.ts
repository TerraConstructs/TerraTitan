/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2AuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#api_id Apigatewayv2Authorizer#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#authorizer_credentials_arn Apigatewayv2Authorizer#authorizer_credentials_arn}
    */
    readonly authorizerCredentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#authorizer_payload_format_version Apigatewayv2Authorizer#authorizer_payload_format_version}
    */
    readonly authorizerPayloadFormatVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#authorizer_result_ttl_in_seconds Apigatewayv2Authorizer#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#authorizer_type Apigatewayv2Authorizer#authorizer_type}
    */
    readonly authorizerType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#authorizer_uri Apigatewayv2Authorizer#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#enable_simple_responses Apigatewayv2Authorizer#enable_simple_responses}
    */
    readonly enableSimpleResponses?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#id Apigatewayv2Authorizer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#identity_sources Apigatewayv2Authorizer#identity_sources}
    */
    readonly identitySources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#name Apigatewayv2Authorizer#name}
    */
    readonly name: string;
    /**
    * jwt_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#jwt_configuration Apigatewayv2Authorizer#jwt_configuration}
    */
    readonly jwtConfiguration?: Apigatewayv2AuthorizerJwtConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#timeouts Apigatewayv2Authorizer#timeouts}
    */
    readonly timeouts?: Apigatewayv2AuthorizerTimeouts;
}
export interface Apigatewayv2AuthorizerJwtConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#audience Apigatewayv2Authorizer#audience}
    */
    readonly audience?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#issuer Apigatewayv2Authorizer#issuer}
    */
    readonly issuer?: string;
}
export declare function apigatewayv2AuthorizerJwtConfigurationToTerraform(struct?: Apigatewayv2AuthorizerJwtConfigurationOutputReference | Apigatewayv2AuthorizerJwtConfiguration): any;
export declare function apigatewayv2AuthorizerJwtConfigurationToHclTerraform(struct?: Apigatewayv2AuthorizerJwtConfigurationOutputReference | Apigatewayv2AuthorizerJwtConfiguration): any;
export declare class Apigatewayv2AuthorizerJwtConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2AuthorizerJwtConfiguration | undefined;
    set internalValue(value: Apigatewayv2AuthorizerJwtConfiguration | undefined);
    private _audience?;
    get audience(): string[];
    set audience(value: string[]);
    resetAudience(): void;
    get audienceInput(): string[] | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    resetIssuer(): void;
    get issuerInput(): string | undefined;
}
export interface Apigatewayv2AuthorizerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#delete Apigatewayv2Authorizer#delete}
    */
    readonly delete?: string;
}
export declare function apigatewayv2AuthorizerTimeoutsToTerraform(struct?: Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable): any;
export declare function apigatewayv2AuthorizerTimeoutsToHclTerraform(struct?: Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable): any;
export declare class Apigatewayv2AuthorizerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Apigatewayv2AuthorizerTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer aws_apigatewayv2_authorizer}
*/
export declare class Apigatewayv2Authorizer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_authorizer";
    /**
    * Generates CDKTF code for importing a Apigatewayv2Authorizer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2Authorizer to import
    * @param importFromId The id of the existing Apigatewayv2Authorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2Authorizer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_authorizer aws_apigatewayv2_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2AuthorizerConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2AuthorizerConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    private _authorizerCredentialsArn?;
    get authorizerCredentialsArn(): string;
    set authorizerCredentialsArn(value: string);
    resetAuthorizerCredentialsArn(): void;
    get authorizerCredentialsArnInput(): string | undefined;
    private _authorizerPayloadFormatVersion?;
    get authorizerPayloadFormatVersion(): string;
    set authorizerPayloadFormatVersion(value: string);
    resetAuthorizerPayloadFormatVersion(): void;
    get authorizerPayloadFormatVersionInput(): string | undefined;
    private _authorizerResultTtlInSeconds?;
    get authorizerResultTtlInSeconds(): number;
    set authorizerResultTtlInSeconds(value: number);
    resetAuthorizerResultTtlInSeconds(): void;
    get authorizerResultTtlInSecondsInput(): number | undefined;
    private _authorizerType?;
    get authorizerType(): string;
    set authorizerType(value: string);
    get authorizerTypeInput(): string | undefined;
    private _authorizerUri?;
    get authorizerUri(): string;
    set authorizerUri(value: string);
    resetAuthorizerUri(): void;
    get authorizerUriInput(): string | undefined;
    private _enableSimpleResponses?;
    get enableSimpleResponses(): boolean | cdktf.IResolvable;
    set enableSimpleResponses(value: boolean | cdktf.IResolvable);
    resetEnableSimpleResponses(): void;
    get enableSimpleResponsesInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identitySources?;
    get identitySources(): string[];
    set identitySources(value: string[]);
    resetIdentitySources(): void;
    get identitySourcesInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _jwtConfiguration;
    get jwtConfiguration(): Apigatewayv2AuthorizerJwtConfigurationOutputReference;
    putJwtConfiguration(value: Apigatewayv2AuthorizerJwtConfiguration): void;
    resetJwtConfiguration(): void;
    get jwtConfigurationInput(): Apigatewayv2AuthorizerJwtConfiguration | undefined;
    private _timeouts;
    get timeouts(): Apigatewayv2AuthorizerTimeoutsOutputReference;
    putTimeouts(value: Apigatewayv2AuthorizerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Apigatewayv2AuthorizerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
