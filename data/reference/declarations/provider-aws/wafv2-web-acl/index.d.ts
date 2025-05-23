/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2WebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#description Wafv2WebAcl#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#id Wafv2WebAcl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#rule_json Wafv2WebAcl#rule_json}
    */
    readonly ruleJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#tags Wafv2WebAcl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#tags_all Wafv2WebAcl#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#token_domains Wafv2WebAcl#token_domains}
    */
    readonly tokenDomains?: string[];
    /**
    * association_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#association_config Wafv2WebAcl#association_config}
    */
    readonly associationConfig?: Wafv2WebAclAssociationConfig;
    /**
    * captcha_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}
    */
    readonly captchaConfig?: Wafv2WebAclCaptchaConfig;
    /**
    * challenge_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#challenge_config Wafv2WebAcl#challenge_config}
    */
    readonly challengeConfig?: Wafv2WebAclChallengeConfig;
    /**
    * custom_response_body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body Wafv2WebAcl#custom_response_body}
    */
    readonly customResponseBody?: Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable;
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_action Wafv2WebAcl#default_action}
    */
    readonly defaultAction: Wafv2WebAclDefaultAction;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#rule Wafv2WebAcl#rule}
    */
    readonly rule?: Wafv2WebAclRule[] | cdktf.IResolvable;
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}
    */
    readonly visibilityConfig: Wafv2WebAclVisibilityConfig;
}
export interface Wafv2WebAclAssociationConfigRequestBodyApiGateway {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}
    */
    readonly defaultSizeInspectionLimit: string;
}
export declare function wafv2WebAclAssociationConfigRequestBodyApiGatewayToTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference | Wafv2WebAclAssociationConfigRequestBodyApiGateway): any;
export declare function wafv2WebAclAssociationConfigRequestBodyApiGatewayToHclTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference | Wafv2WebAclAssociationConfigRequestBodyApiGateway): any;
export declare class Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclAssociationConfigRequestBodyApiGateway | undefined;
    set internalValue(value: Wafv2WebAclAssociationConfigRequestBodyApiGateway | undefined);
    private _defaultSizeInspectionLimit?;
    get defaultSizeInspectionLimit(): string;
    set defaultSizeInspectionLimit(value: string);
    get defaultSizeInspectionLimitInput(): string | undefined;
}
export interface Wafv2WebAclAssociationConfigRequestBodyAppRunnerService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}
    */
    readonly defaultSizeInspectionLimit: string;
}
export declare function wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceToTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference | Wafv2WebAclAssociationConfigRequestBodyAppRunnerService): any;
export declare function wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceToHclTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference | Wafv2WebAclAssociationConfigRequestBodyAppRunnerService): any;
export declare class Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclAssociationConfigRequestBodyAppRunnerService | undefined;
    set internalValue(value: Wafv2WebAclAssociationConfigRequestBodyAppRunnerService | undefined);
    private _defaultSizeInspectionLimit?;
    get defaultSizeInspectionLimit(): string;
    set defaultSizeInspectionLimit(value: string);
    get defaultSizeInspectionLimitInput(): string | undefined;
}
export interface Wafv2WebAclAssociationConfigRequestBodyCloudfront {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}
    */
    readonly defaultSizeInspectionLimit: string;
}
export declare function wafv2WebAclAssociationConfigRequestBodyCloudfrontToTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference | Wafv2WebAclAssociationConfigRequestBodyCloudfront): any;
export declare function wafv2WebAclAssociationConfigRequestBodyCloudfrontToHclTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference | Wafv2WebAclAssociationConfigRequestBodyCloudfront): any;
export declare class Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclAssociationConfigRequestBodyCloudfront | undefined;
    set internalValue(value: Wafv2WebAclAssociationConfigRequestBodyCloudfront | undefined);
    private _defaultSizeInspectionLimit?;
    get defaultSizeInspectionLimit(): string;
    set defaultSizeInspectionLimit(value: string);
    get defaultSizeInspectionLimitInput(): string | undefined;
}
export interface Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}
    */
    readonly defaultSizeInspectionLimit: string;
}
export declare function wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolToTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference | Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool): any;
export declare function wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolToHclTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference | Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool): any;
export declare class Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool | undefined;
    set internalValue(value: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool | undefined);
    private _defaultSizeInspectionLimit?;
    get defaultSizeInspectionLimit(): string;
    set defaultSizeInspectionLimit(value: string);
    get defaultSizeInspectionLimitInput(): string | undefined;
}
export interface Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#default_size_inspection_limit Wafv2WebAcl#default_size_inspection_limit}
    */
    readonly defaultSizeInspectionLimit: string;
}
export declare function wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceToTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference | Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance): any;
export declare function wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceToHclTerraform(struct?: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference | Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance): any;
export declare class Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance | undefined;
    set internalValue(value: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance | undefined);
    private _defaultSizeInspectionLimit?;
    get defaultSizeInspectionLimit(): string;
    set defaultSizeInspectionLimit(value: string);
    get defaultSizeInspectionLimitInput(): string | undefined;
}
export interface Wafv2WebAclAssociationConfigRequestBody {
    /**
    * api_gateway block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#api_gateway Wafv2WebAcl#api_gateway}
    */
    readonly apiGateway?: Wafv2WebAclAssociationConfigRequestBodyApiGateway;
    /**
    * app_runner_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#app_runner_service Wafv2WebAcl#app_runner_service}
    */
    readonly appRunnerService?: Wafv2WebAclAssociationConfigRequestBodyAppRunnerService;
    /**
    * cloudfront block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudfront Wafv2WebAcl#cloudfront}
    */
    readonly cloudfront?: Wafv2WebAclAssociationConfigRequestBodyCloudfront;
    /**
    * cognito_user_pool block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cognito_user_pool Wafv2WebAcl#cognito_user_pool}
    */
    readonly cognitoUserPool?: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool;
    /**
    * verified_access_instance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#verified_access_instance Wafv2WebAcl#verified_access_instance}
    */
    readonly verifiedAccessInstance?: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance;
}
export declare function wafv2WebAclAssociationConfigRequestBodyToTerraform(struct?: Wafv2WebAclAssociationConfigRequestBody | cdktf.IResolvable): any;
export declare function wafv2WebAclAssociationConfigRequestBodyToHclTerraform(struct?: Wafv2WebAclAssociationConfigRequestBody | cdktf.IResolvable): any;
export declare class Wafv2WebAclAssociationConfigRequestBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclAssociationConfigRequestBody | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclAssociationConfigRequestBody | cdktf.IResolvable | undefined);
    private _apiGateway;
    get apiGateway(): Wafv2WebAclAssociationConfigRequestBodyApiGatewayOutputReference;
    putApiGateway(value: Wafv2WebAclAssociationConfigRequestBodyApiGateway): void;
    resetApiGateway(): void;
    get apiGatewayInput(): Wafv2WebAclAssociationConfigRequestBodyApiGateway | undefined;
    private _appRunnerService;
    get appRunnerService(): Wafv2WebAclAssociationConfigRequestBodyAppRunnerServiceOutputReference;
    putAppRunnerService(value: Wafv2WebAclAssociationConfigRequestBodyAppRunnerService): void;
    resetAppRunnerService(): void;
    get appRunnerServiceInput(): Wafv2WebAclAssociationConfigRequestBodyAppRunnerService | undefined;
    private _cloudfront;
    get cloudfront(): Wafv2WebAclAssociationConfigRequestBodyCloudfrontOutputReference;
    putCloudfront(value: Wafv2WebAclAssociationConfigRequestBodyCloudfront): void;
    resetCloudfront(): void;
    get cloudfrontInput(): Wafv2WebAclAssociationConfigRequestBodyCloudfront | undefined;
    private _cognitoUserPool;
    get cognitoUserPool(): Wafv2WebAclAssociationConfigRequestBodyCognitoUserPoolOutputReference;
    putCognitoUserPool(value: Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool): void;
    resetCognitoUserPool(): void;
    get cognitoUserPoolInput(): Wafv2WebAclAssociationConfigRequestBodyCognitoUserPool | undefined;
    private _verifiedAccessInstance;
    get verifiedAccessInstance(): Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstanceOutputReference;
    putVerifiedAccessInstance(value: Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance): void;
    resetVerifiedAccessInstance(): void;
    get verifiedAccessInstanceInput(): Wafv2WebAclAssociationConfigRequestBodyVerifiedAccessInstance | undefined;
}
export declare class Wafv2WebAclAssociationConfigRequestBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclAssociationConfigRequestBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclAssociationConfigRequestBodyOutputReference;
}
export interface Wafv2WebAclAssociationConfig {
    /**
    * request_body block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#request_body Wafv2WebAcl#request_body}
    */
    readonly requestBody?: Wafv2WebAclAssociationConfigRequestBody[] | cdktf.IResolvable;
}
export declare function wafv2WebAclAssociationConfigToTerraform(struct?: Wafv2WebAclAssociationConfigOutputReference | Wafv2WebAclAssociationConfig): any;
export declare function wafv2WebAclAssociationConfigToHclTerraform(struct?: Wafv2WebAclAssociationConfigOutputReference | Wafv2WebAclAssociationConfig): any;
export declare class Wafv2WebAclAssociationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclAssociationConfig | undefined;
    set internalValue(value: Wafv2WebAclAssociationConfig | undefined);
    private _requestBody;
    get requestBody(): Wafv2WebAclAssociationConfigRequestBodyList;
    putRequestBody(value: Wafv2WebAclAssociationConfigRequestBody[] | cdktf.IResolvable): void;
    resetRequestBody(): void;
    get requestBodyInput(): cdktf.IResolvable | Wafv2WebAclAssociationConfigRequestBody[] | undefined;
}
export interface Wafv2WebAclCaptchaConfigImmunityTimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}
    */
    readonly immunityTime?: number;
}
export declare function wafv2WebAclCaptchaConfigImmunityTimePropertyToTerraform(struct?: Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclCaptchaConfigImmunityTimeProperty): any;
export declare function wafv2WebAclCaptchaConfigImmunityTimePropertyToHclTerraform(struct?: Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclCaptchaConfigImmunityTimeProperty): any;
export declare class Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclCaptchaConfigImmunityTimeProperty | undefined;
    set internalValue(value: Wafv2WebAclCaptchaConfigImmunityTimeProperty | undefined);
    private _immunityTime?;
    get immunityTime(): number;
    set immunityTime(value: number);
    resetImmunityTime(): void;
    get immunityTimeInput(): number | undefined;
}
export interface Wafv2WebAclCaptchaConfig {
    /**
    * immunity_time_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}
    */
    readonly immunityTimeProperty?: Wafv2WebAclCaptchaConfigImmunityTimeProperty;
}
export declare function wafv2WebAclCaptchaConfigToTerraform(struct?: Wafv2WebAclCaptchaConfigOutputReference | Wafv2WebAclCaptchaConfig): any;
export declare function wafv2WebAclCaptchaConfigToHclTerraform(struct?: Wafv2WebAclCaptchaConfigOutputReference | Wafv2WebAclCaptchaConfig): any;
export declare class Wafv2WebAclCaptchaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclCaptchaConfig | undefined;
    set internalValue(value: Wafv2WebAclCaptchaConfig | undefined);
    private _immunityTimeProperty;
    get immunityTimeProperty(): Wafv2WebAclCaptchaConfigImmunityTimePropertyOutputReference;
    putImmunityTimeProperty(value: Wafv2WebAclCaptchaConfigImmunityTimeProperty): void;
    resetImmunityTimeProperty(): void;
    get immunityTimePropertyInput(): Wafv2WebAclCaptchaConfigImmunityTimeProperty | undefined;
}
export interface Wafv2WebAclChallengeConfigImmunityTimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}
    */
    readonly immunityTime?: number;
}
export declare function wafv2WebAclChallengeConfigImmunityTimePropertyToTerraform(struct?: Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference | Wafv2WebAclChallengeConfigImmunityTimeProperty): any;
export declare function wafv2WebAclChallengeConfigImmunityTimePropertyToHclTerraform(struct?: Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference | Wafv2WebAclChallengeConfigImmunityTimeProperty): any;
export declare class Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclChallengeConfigImmunityTimeProperty | undefined;
    set internalValue(value: Wafv2WebAclChallengeConfigImmunityTimeProperty | undefined);
    private _immunityTime?;
    get immunityTime(): number;
    set immunityTime(value: number);
    resetImmunityTime(): void;
    get immunityTimeInput(): number | undefined;
}
export interface Wafv2WebAclChallengeConfig {
    /**
    * immunity_time_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}
    */
    readonly immunityTimeProperty?: Wafv2WebAclChallengeConfigImmunityTimeProperty;
}
export declare function wafv2WebAclChallengeConfigToTerraform(struct?: Wafv2WebAclChallengeConfigOutputReference | Wafv2WebAclChallengeConfig): any;
export declare function wafv2WebAclChallengeConfigToHclTerraform(struct?: Wafv2WebAclChallengeConfigOutputReference | Wafv2WebAclChallengeConfig): any;
export declare class Wafv2WebAclChallengeConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclChallengeConfig | undefined;
    set internalValue(value: Wafv2WebAclChallengeConfig | undefined);
    private _immunityTimeProperty;
    get immunityTimeProperty(): Wafv2WebAclChallengeConfigImmunityTimePropertyOutputReference;
    putImmunityTimeProperty(value: Wafv2WebAclChallengeConfigImmunityTimeProperty): void;
    resetImmunityTimeProperty(): void;
    get immunityTimePropertyInput(): Wafv2WebAclChallengeConfigImmunityTimeProperty | undefined;
}
export interface Wafv2WebAclCustomResponseBody {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#content Wafv2WebAcl#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#content_type Wafv2WebAcl#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#key Wafv2WebAcl#key}
    */
    readonly key: string;
}
export declare function wafv2WebAclCustomResponseBodyToTerraform(struct?: Wafv2WebAclCustomResponseBody | cdktf.IResolvable): any;
export declare function wafv2WebAclCustomResponseBodyToHclTerraform(struct?: Wafv2WebAclCustomResponseBody | cdktf.IResolvable): any;
export declare class Wafv2WebAclCustomResponseBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclCustomResponseBody | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclCustomResponseBody | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string | undefined;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export declare class Wafv2WebAclCustomResponseBodyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclCustomResponseBodyOutputReference;
}
export interface Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
    */
    readonly value: string;
}
export declare function wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2WebAclDefaultActionAllowCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
    */
    readonly insertHeader: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2WebAclDefaultActionAllowCustomRequestHandlingToTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclDefaultActionAllowCustomRequestHandling): any;
export declare function wafv2WebAclDefaultActionAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclDefaultActionAllowCustomRequestHandling): any;
export declare class Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclDefaultActionAllowCustomRequestHandling | undefined;
    set internalValue(value: Wafv2WebAclDefaultActionAllowCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2WebAclDefaultActionAllowCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2WebAclDefaultActionAllow {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2WebAclDefaultActionAllowCustomRequestHandling;
}
export declare function wafv2WebAclDefaultActionAllowToTerraform(struct?: Wafv2WebAclDefaultActionAllowOutputReference | Wafv2WebAclDefaultActionAllow): any;
export declare function wafv2WebAclDefaultActionAllowToHclTerraform(struct?: Wafv2WebAclDefaultActionAllowOutputReference | Wafv2WebAclDefaultActionAllow): any;
export declare class Wafv2WebAclDefaultActionAllowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclDefaultActionAllow | undefined;
    set internalValue(value: Wafv2WebAclDefaultActionAllow | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2WebAclDefaultActionAllowCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2WebAclDefaultActionAllowCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2WebAclDefaultActionAllowCustomRequestHandling | undefined;
}
export interface Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
    */
    readonly value: string;
}
export declare function wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare function wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare class Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderOutputReference;
}
export interface Wafv2WebAclDefaultActionBlockCustomResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}
    */
    readonly customResponseBodyKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}
    */
    readonly responseCode: number;
    /**
    * response_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}
    */
    readonly responseHeader?: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
}
export declare function wafv2WebAclDefaultActionBlockCustomResponseToTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseOutputReference | Wafv2WebAclDefaultActionBlockCustomResponse): any;
export declare function wafv2WebAclDefaultActionBlockCustomResponseToHclTerraform(struct?: Wafv2WebAclDefaultActionBlockCustomResponseOutputReference | Wafv2WebAclDefaultActionBlockCustomResponse): any;
export declare class Wafv2WebAclDefaultActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclDefaultActionBlockCustomResponse | undefined;
    set internalValue(value: Wafv2WebAclDefaultActionBlockCustomResponse | undefined);
    private _customResponseBodyKey?;
    get customResponseBodyKey(): string;
    set customResponseBodyKey(value: string);
    resetCustomResponseBodyKey(): void;
    get customResponseBodyKeyInput(): string | undefined;
    private _responseCode?;
    get responseCode(): number;
    set responseCode(value: number);
    get responseCodeInput(): number | undefined;
    private _responseHeader;
    get responseHeader(): Wafv2WebAclDefaultActionBlockCustomResponseResponseHeaderList;
    putResponseHeader(value: Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable): void;
    resetResponseHeader(): void;
    get responseHeaderInput(): cdktf.IResolvable | Wafv2WebAclDefaultActionBlockCustomResponseResponseHeader[] | undefined;
}
export interface Wafv2WebAclDefaultActionBlock {
    /**
    * custom_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}
    */
    readonly customResponse?: Wafv2WebAclDefaultActionBlockCustomResponse;
}
export declare function wafv2WebAclDefaultActionBlockToTerraform(struct?: Wafv2WebAclDefaultActionBlockOutputReference | Wafv2WebAclDefaultActionBlock): any;
export declare function wafv2WebAclDefaultActionBlockToHclTerraform(struct?: Wafv2WebAclDefaultActionBlockOutputReference | Wafv2WebAclDefaultActionBlock): any;
export declare class Wafv2WebAclDefaultActionBlockOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclDefaultActionBlock | undefined;
    set internalValue(value: Wafv2WebAclDefaultActionBlock | undefined);
    private _customResponse;
    get customResponse(): Wafv2WebAclDefaultActionBlockCustomResponseOutputReference;
    putCustomResponse(value: Wafv2WebAclDefaultActionBlockCustomResponse): void;
    resetCustomResponse(): void;
    get customResponseInput(): Wafv2WebAclDefaultActionBlockCustomResponse | undefined;
}
export interface Wafv2WebAclDefaultAction {
    /**
    * allow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}
    */
    readonly allow?: Wafv2WebAclDefaultActionAllow;
    /**
    * block block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}
    */
    readonly block?: Wafv2WebAclDefaultActionBlock;
}
export declare function wafv2WebAclDefaultActionToTerraform(struct?: Wafv2WebAclDefaultActionOutputReference | Wafv2WebAclDefaultAction): any;
export declare function wafv2WebAclDefaultActionToHclTerraform(struct?: Wafv2WebAclDefaultActionOutputReference | Wafv2WebAclDefaultAction): any;
export declare class Wafv2WebAclDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclDefaultAction | undefined;
    set internalValue(value: Wafv2WebAclDefaultAction | undefined);
    private _allow;
    get allow(): Wafv2WebAclDefaultActionAllowOutputReference;
    putAllow(value: Wafv2WebAclDefaultActionAllow): void;
    resetAllow(): void;
    get allowInput(): Wafv2WebAclDefaultActionAllow | undefined;
    private _block;
    get block(): Wafv2WebAclDefaultActionBlockOutputReference;
    putBlock(value: Wafv2WebAclDefaultActionBlock): void;
    resetBlock(): void;
    get blockInput(): Wafv2WebAclDefaultActionBlock | undefined;
}
export interface Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
    */
    readonly value: string;
}
export declare function wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2WebAclRuleActionAllowCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
    */
    readonly insertHeader: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleActionAllowCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionAllowCustomRequestHandling): any;
export declare function wafv2WebAclRuleActionAllowCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionAllowCustomRequestHandling): any;
export declare class Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionAllowCustomRequestHandling | undefined;
    set internalValue(value: Wafv2WebAclRuleActionAllowCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2WebAclRuleActionAllowCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2WebAclRuleActionAllow {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2WebAclRuleActionAllowCustomRequestHandling;
}
export declare function wafv2WebAclRuleActionAllowToTerraform(struct?: Wafv2WebAclRuleActionAllowOutputReference | Wafv2WebAclRuleActionAllow): any;
export declare function wafv2WebAclRuleActionAllowToHclTerraform(struct?: Wafv2WebAclRuleActionAllowOutputReference | Wafv2WebAclRuleActionAllow): any;
export declare class Wafv2WebAclRuleActionAllowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionAllow | undefined;
    set internalValue(value: Wafv2WebAclRuleActionAllow | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2WebAclRuleActionAllowCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2WebAclRuleActionAllowCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2WebAclRuleActionAllowCustomRequestHandling | undefined;
}
export interface Wafv2WebAclRuleActionBlockCustomResponseResponseHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
    */
    readonly value: string;
}
export declare function wafv2WebAclRuleActionBlockCustomResponseResponseHeaderToTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleActionBlockCustomResponseResponseHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderOutputReference;
}
export interface Wafv2WebAclRuleActionBlockCustomResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response_body_key Wafv2WebAcl#custom_response_body_key}
    */
    readonly customResponseBodyKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_code Wafv2WebAcl#response_code}
    */
    readonly responseCode: number;
    /**
    * response_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#response_header Wafv2WebAcl#response_header}
    */
    readonly responseHeader?: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleActionBlockCustomResponseToTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseOutputReference | Wafv2WebAclRuleActionBlockCustomResponse): any;
export declare function wafv2WebAclRuleActionBlockCustomResponseToHclTerraform(struct?: Wafv2WebAclRuleActionBlockCustomResponseOutputReference | Wafv2WebAclRuleActionBlockCustomResponse): any;
export declare class Wafv2WebAclRuleActionBlockCustomResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionBlockCustomResponse | undefined;
    set internalValue(value: Wafv2WebAclRuleActionBlockCustomResponse | undefined);
    private _customResponseBodyKey?;
    get customResponseBodyKey(): string;
    set customResponseBodyKey(value: string);
    resetCustomResponseBodyKey(): void;
    get customResponseBodyKeyInput(): string | undefined;
    private _responseCode?;
    get responseCode(): number;
    set responseCode(value: number);
    get responseCodeInput(): number | undefined;
    private _responseHeader;
    get responseHeader(): Wafv2WebAclRuleActionBlockCustomResponseResponseHeaderList;
    putResponseHeader(value: Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[] | cdktf.IResolvable): void;
    resetResponseHeader(): void;
    get responseHeaderInput(): cdktf.IResolvable | Wafv2WebAclRuleActionBlockCustomResponseResponseHeader[] | undefined;
}
export interface Wafv2WebAclRuleActionBlock {
    /**
    * custom_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_response Wafv2WebAcl#custom_response}
    */
    readonly customResponse?: Wafv2WebAclRuleActionBlockCustomResponse;
}
export declare function wafv2WebAclRuleActionBlockToTerraform(struct?: Wafv2WebAclRuleActionBlockOutputReference | Wafv2WebAclRuleActionBlock): any;
export declare function wafv2WebAclRuleActionBlockToHclTerraform(struct?: Wafv2WebAclRuleActionBlockOutputReference | Wafv2WebAclRuleActionBlock): any;
export declare class Wafv2WebAclRuleActionBlockOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionBlock | undefined;
    set internalValue(value: Wafv2WebAclRuleActionBlock | undefined);
    private _customResponse;
    get customResponse(): Wafv2WebAclRuleActionBlockCustomResponseOutputReference;
    putCustomResponse(value: Wafv2WebAclRuleActionBlockCustomResponse): void;
    resetCustomResponse(): void;
    get customResponseInput(): Wafv2WebAclRuleActionBlockCustomResponse | undefined;
}
export interface Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
    */
    readonly value: string;
}
export declare function wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2WebAclRuleActionCaptchaCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
    */
    readonly insertHeader: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleActionCaptchaCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCaptchaCustomRequestHandling): any;
export declare function wafv2WebAclRuleActionCaptchaCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCaptchaCustomRequestHandling): any;
export declare class Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionCaptchaCustomRequestHandling | undefined;
    set internalValue(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2WebAclRuleActionCaptchaCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2WebAclRuleActionCaptcha {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2WebAclRuleActionCaptchaCustomRequestHandling;
}
export declare function wafv2WebAclRuleActionCaptchaToTerraform(struct?: Wafv2WebAclRuleActionCaptchaOutputReference | Wafv2WebAclRuleActionCaptcha): any;
export declare function wafv2WebAclRuleActionCaptchaToHclTerraform(struct?: Wafv2WebAclRuleActionCaptchaOutputReference | Wafv2WebAclRuleActionCaptcha): any;
export declare class Wafv2WebAclRuleActionCaptchaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionCaptcha | undefined;
    set internalValue(value: Wafv2WebAclRuleActionCaptcha | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2WebAclRuleActionCaptchaCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2WebAclRuleActionCaptchaCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2WebAclRuleActionCaptchaCustomRequestHandling | undefined;
}
export interface Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
    */
    readonly value: string;
}
export declare function wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2WebAclRuleActionChallengeCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
    */
    readonly insertHeader: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleActionChallengeCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionChallengeCustomRequestHandling): any;
export declare function wafv2WebAclRuleActionChallengeCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionChallengeCustomRequestHandling): any;
export declare class Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionChallengeCustomRequestHandling | undefined;
    set internalValue(value: Wafv2WebAclRuleActionChallengeCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2WebAclRuleActionChallengeCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2WebAclRuleActionChallenge {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2WebAclRuleActionChallengeCustomRequestHandling;
}
export declare function wafv2WebAclRuleActionChallengeToTerraform(struct?: Wafv2WebAclRuleActionChallengeOutputReference | Wafv2WebAclRuleActionChallenge): any;
export declare function wafv2WebAclRuleActionChallengeToHclTerraform(struct?: Wafv2WebAclRuleActionChallengeOutputReference | Wafv2WebAclRuleActionChallenge): any;
export declare class Wafv2WebAclRuleActionChallengeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionChallenge | undefined;
    set internalValue(value: Wafv2WebAclRuleActionChallenge | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2WebAclRuleActionChallengeCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2WebAclRuleActionChallengeCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2WebAclRuleActionChallengeCustomRequestHandling | undefined;
}
export interface Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#value Wafv2WebAcl#value}
    */
    readonly value: string;
}
export declare function wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderToTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderToHclTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderOutputReference;
}
export interface Wafv2WebAclRuleActionCountCustomRequestHandling {
    /**
    * insert_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#insert_header Wafv2WebAcl#insert_header}
    */
    readonly insertHeader: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleActionCountCustomRequestHandlingToTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCountCustomRequestHandling): any;
export declare function wafv2WebAclRuleActionCountCustomRequestHandlingToHclTerraform(struct?: Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference | Wafv2WebAclRuleActionCountCustomRequestHandling): any;
export declare class Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionCountCustomRequestHandling | undefined;
    set internalValue(value: Wafv2WebAclRuleActionCountCustomRequestHandling | undefined);
    private _insertHeader;
    get insertHeader(): Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeaderList;
    putInsertHeader(value: Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[] | cdktf.IResolvable): void;
    get insertHeaderInput(): cdktf.IResolvable | Wafv2WebAclRuleActionCountCustomRequestHandlingInsertHeader[] | undefined;
}
export interface Wafv2WebAclRuleActionCount {
    /**
    * custom_request_handling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#custom_request_handling Wafv2WebAcl#custom_request_handling}
    */
    readonly customRequestHandling?: Wafv2WebAclRuleActionCountCustomRequestHandling;
}
export declare function wafv2WebAclRuleActionCountToTerraform(struct?: Wafv2WebAclRuleActionCountOutputReference | Wafv2WebAclRuleActionCount): any;
export declare function wafv2WebAclRuleActionCountToHclTerraform(struct?: Wafv2WebAclRuleActionCountOutputReference | Wafv2WebAclRuleActionCount): any;
export declare class Wafv2WebAclRuleActionCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleActionCount | undefined;
    set internalValue(value: Wafv2WebAclRuleActionCount | undefined);
    private _customRequestHandling;
    get customRequestHandling(): Wafv2WebAclRuleActionCountCustomRequestHandlingOutputReference;
    putCustomRequestHandling(value: Wafv2WebAclRuleActionCountCustomRequestHandling): void;
    resetCustomRequestHandling(): void;
    get customRequestHandlingInput(): Wafv2WebAclRuleActionCountCustomRequestHandling | undefined;
}
export interface Wafv2WebAclRuleAction {
    /**
    * allow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#allow Wafv2WebAcl#allow}
    */
    readonly allow?: Wafv2WebAclRuleActionAllow;
    /**
    * block block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#block Wafv2WebAcl#block}
    */
    readonly block?: Wafv2WebAclRuleActionBlock;
    /**
    * captcha block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#captcha Wafv2WebAcl#captcha}
    */
    readonly captcha?: Wafv2WebAclRuleActionCaptcha;
    /**
    * challenge block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#challenge Wafv2WebAcl#challenge}
    */
    readonly challenge?: Wafv2WebAclRuleActionChallenge;
    /**
    * count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}
    */
    readonly count?: Wafv2WebAclRuleActionCount;
}
export declare function wafv2WebAclRuleActionToTerraform(struct?: Wafv2WebAclRuleActionOutputReference | Wafv2WebAclRuleAction): any;
export declare function wafv2WebAclRuleActionToHclTerraform(struct?: Wafv2WebAclRuleActionOutputReference | Wafv2WebAclRuleAction): any;
export declare class Wafv2WebAclRuleActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleAction | undefined;
    set internalValue(value: Wafv2WebAclRuleAction | undefined);
    private _allow;
    get allow(): Wafv2WebAclRuleActionAllowOutputReference;
    putAllow(value: Wafv2WebAclRuleActionAllow): void;
    resetAllow(): void;
    get allowInput(): Wafv2WebAclRuleActionAllow | undefined;
    private _block;
    get block(): Wafv2WebAclRuleActionBlockOutputReference;
    putBlock(value: Wafv2WebAclRuleActionBlock): void;
    resetBlock(): void;
    get blockInput(): Wafv2WebAclRuleActionBlock | undefined;
    private _captcha;
    get captcha(): Wafv2WebAclRuleActionCaptchaOutputReference;
    putCaptcha(value: Wafv2WebAclRuleActionCaptcha): void;
    resetCaptcha(): void;
    get captchaInput(): Wafv2WebAclRuleActionCaptcha | undefined;
    private _challenge;
    get challenge(): Wafv2WebAclRuleActionChallengeOutputReference;
    putChallenge(value: Wafv2WebAclRuleActionChallenge): void;
    resetChallenge(): void;
    get challengeInput(): Wafv2WebAclRuleActionChallenge | undefined;
    private _count;
    get count(): Wafv2WebAclRuleActionCountOutputReference;
    putCount(value: Wafv2WebAclRuleActionCount): void;
    resetCount(): void;
    get countInput(): Wafv2WebAclRuleActionCount | undefined;
}
export interface Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time Wafv2WebAcl#immunity_time}
    */
    readonly immunityTime?: number;
}
export declare function wafv2WebAclRuleCaptchaConfigImmunityTimePropertyToTerraform(struct?: Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty): any;
export declare function wafv2WebAclRuleCaptchaConfigImmunityTimePropertyToHclTerraform(struct?: Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference | Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty): any;
export declare class Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty | undefined;
    set internalValue(value: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty | undefined);
    private _immunityTime?;
    get immunityTime(): number;
    set immunityTime(value: number);
    resetImmunityTime(): void;
    get immunityTimeInput(): number | undefined;
}
export interface Wafv2WebAclRuleCaptchaConfig {
    /**
    * immunity_time_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#immunity_time_property Wafv2WebAcl#immunity_time_property}
    */
    readonly immunityTimeProperty?: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty;
}
export declare function wafv2WebAclRuleCaptchaConfigToTerraform(struct?: Wafv2WebAclRuleCaptchaConfigOutputReference | Wafv2WebAclRuleCaptchaConfig): any;
export declare function wafv2WebAclRuleCaptchaConfigToHclTerraform(struct?: Wafv2WebAclRuleCaptchaConfigOutputReference | Wafv2WebAclRuleCaptchaConfig): any;
export declare class Wafv2WebAclRuleCaptchaConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleCaptchaConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleCaptchaConfig | undefined);
    private _immunityTimeProperty;
    get immunityTimeProperty(): Wafv2WebAclRuleCaptchaConfigImmunityTimePropertyOutputReference;
    putImmunityTimeProperty(value: Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty): void;
    resetImmunityTimeProperty(): void;
    get immunityTimePropertyInput(): Wafv2WebAclRuleCaptchaConfigImmunityTimeProperty | undefined;
}
export interface Wafv2WebAclRuleOverrideActionCount {
}
export declare function wafv2WebAclRuleOverrideActionCountToTerraform(struct?: Wafv2WebAclRuleOverrideActionCountOutputReference | Wafv2WebAclRuleOverrideActionCount): any;
export declare function wafv2WebAclRuleOverrideActionCountToHclTerraform(struct?: Wafv2WebAclRuleOverrideActionCountOutputReference | Wafv2WebAclRuleOverrideActionCount): any;
export declare class Wafv2WebAclRuleOverrideActionCountOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleOverrideActionCount | undefined;
    set internalValue(value: Wafv2WebAclRuleOverrideActionCount | undefined);
}
export interface Wafv2WebAclRuleOverrideActionNone {
}
export declare function wafv2WebAclRuleOverrideActionNoneToTerraform(struct?: Wafv2WebAclRuleOverrideActionNoneOutputReference | Wafv2WebAclRuleOverrideActionNone): any;
export declare function wafv2WebAclRuleOverrideActionNoneToHclTerraform(struct?: Wafv2WebAclRuleOverrideActionNoneOutputReference | Wafv2WebAclRuleOverrideActionNone): any;
export declare class Wafv2WebAclRuleOverrideActionNoneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleOverrideActionNone | undefined;
    set internalValue(value: Wafv2WebAclRuleOverrideActionNone | undefined);
}
export interface Wafv2WebAclRuleOverrideAction {
    /**
    * count block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#count Wafv2WebAcl#count}
    */
    readonly count?: Wafv2WebAclRuleOverrideActionCount;
    /**
    * none block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#none Wafv2WebAcl#none}
    */
    readonly none?: Wafv2WebAclRuleOverrideActionNone;
}
export declare function wafv2WebAclRuleOverrideActionToTerraform(struct?: Wafv2WebAclRuleOverrideActionOutputReference | Wafv2WebAclRuleOverrideAction): any;
export declare function wafv2WebAclRuleOverrideActionToHclTerraform(struct?: Wafv2WebAclRuleOverrideActionOutputReference | Wafv2WebAclRuleOverrideAction): any;
export declare class Wafv2WebAclRuleOverrideActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleOverrideAction | undefined;
    set internalValue(value: Wafv2WebAclRuleOverrideAction | undefined);
    private _count;
    get count(): Wafv2WebAclRuleOverrideActionCountOutputReference;
    putCount(value: Wafv2WebAclRuleOverrideActionCount): void;
    resetCount(): void;
    get countInput(): Wafv2WebAclRuleOverrideActionCount | undefined;
    private _none;
    get none(): Wafv2WebAclRuleOverrideActionNoneOutputReference;
    putNone(value: Wafv2WebAclRuleOverrideActionNone): void;
    resetNone(): void;
    get noneInput(): Wafv2WebAclRuleOverrideActionNone | undefined;
}
export interface Wafv2WebAclRuleRuleLabel {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleRuleLabelToTerraform(struct?: Wafv2WebAclRuleRuleLabel | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleRuleLabelToHclTerraform(struct?: Wafv2WebAclRuleRuleLabel | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleRuleLabelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRuleRuleLabel | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRuleRuleLabel | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class Wafv2WebAclRuleRuleLabelList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleRuleLabelOutputReference;
}
export interface Wafv2WebAclRuleVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2WebAclRuleVisibilityConfigToTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any;
export declare function wafv2WebAclRuleVisibilityConfigToHclTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any;
export declare class Wafv2WebAclRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclRuleVisibilityConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleVisibilityConfig | undefined);
    private _cloudwatchMetricsEnabled?;
    get cloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    get cloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _sampledRequestsEnabled?;
    get sampledRequestsEnabled(): boolean | cdktf.IResolvable;
    set sampledRequestsEnabled(value: boolean | cdktf.IResolvable);
    get sampledRequestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface Wafv2WebAclRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#action Wafv2WebAcl#action}
    */
    readonly action?: Wafv2WebAclRuleAction;
    /**
    * captcha_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#captcha_config Wafv2WebAcl#captcha_config}
    */
    readonly captchaConfig?: Wafv2WebAclRuleCaptchaConfig;
    /**
    * override_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#override_action Wafv2WebAcl#override_action}
    */
    readonly overrideAction?: Wafv2WebAclRuleOverrideAction;
    /**
    * rule_label block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#rule_label Wafv2WebAcl#rule_label}
    */
    readonly ruleLabel?: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable;
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#statement Wafv2WebAcl#statement}
    */
    readonly statement?: any;
    /**
    * visibility_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}
    */
    readonly visibilityConfig: Wafv2WebAclRuleVisibilityConfig;
}
export declare function wafv2WebAclRuleToTerraform(struct?: Wafv2WebAclRule | cdktf.IResolvable): any;
export declare function wafv2WebAclRuleToHclTerraform(struct?: Wafv2WebAclRule | cdktf.IResolvable): any;
export declare class Wafv2WebAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Wafv2WebAclRule | cdktf.IResolvable | undefined;
    set internalValue(value: Wafv2WebAclRule | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _action;
    get action(): Wafv2WebAclRuleActionOutputReference;
    putAction(value: Wafv2WebAclRuleAction): void;
    resetAction(): void;
    get actionInput(): Wafv2WebAclRuleAction | undefined;
    private _captchaConfig;
    get captchaConfig(): Wafv2WebAclRuleCaptchaConfigOutputReference;
    putCaptchaConfig(value: Wafv2WebAclRuleCaptchaConfig): void;
    resetCaptchaConfig(): void;
    get captchaConfigInput(): Wafv2WebAclRuleCaptchaConfig | undefined;
    private _overrideAction;
    get overrideAction(): Wafv2WebAclRuleOverrideActionOutputReference;
    putOverrideAction(value: Wafv2WebAclRuleOverrideAction): void;
    resetOverrideAction(): void;
    get overrideActionInput(): Wafv2WebAclRuleOverrideAction | undefined;
    private _ruleLabel;
    get ruleLabel(): Wafv2WebAclRuleRuleLabelList;
    putRuleLabel(value: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable): void;
    resetRuleLabel(): void;
    get ruleLabelInput(): cdktf.IResolvable | Wafv2WebAclRuleRuleLabel[] | undefined;
    private _statement?;
    get statement(): any;
    set statement(value: any);
    resetStatement(): void;
    get statementInput(): any;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2WebAclRuleVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2WebAclRuleVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2WebAclRuleVisibilityConfig | undefined;
}
export declare class Wafv2WebAclRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Wafv2WebAclRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Wafv2WebAclRuleOutputReference;
}
export interface Wafv2WebAclVisibilityConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
    */
    readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
    */
    readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}
export declare function wafv2WebAclVisibilityConfigToTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any;
export declare function wafv2WebAclVisibilityConfigToHclTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any;
export declare class Wafv2WebAclVisibilityConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Wafv2WebAclVisibilityConfig | undefined;
    set internalValue(value: Wafv2WebAclVisibilityConfig | undefined);
    private _cloudwatchMetricsEnabled?;
    get cloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    get cloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _sampledRequestsEnabled?;
    get sampledRequestsEnabled(): boolean | cdktf.IResolvable;
    set sampledRequestsEnabled(value: boolean | cdktf.IResolvable);
    get sampledRequestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl}
*/
export declare class Wafv2WebAcl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafv2_web_acl";
    /**
    * Generates CDKTF code for importing a Wafv2WebAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2WebAcl to import
    * @param importFromId The id of the existing Wafv2WebAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2WebAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/wafv2_web_acl aws_wafv2_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2WebAclConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2WebAclConfig);
    get applicationIntegrationUrl(): string;
    get arn(): string;
    get capacity(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lockToken(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _ruleJson?;
    get ruleJson(): string;
    set ruleJson(value: string);
    resetRuleJson(): void;
    get ruleJsonInput(): string | undefined;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
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
    private _tokenDomains?;
    get tokenDomains(): string[];
    set tokenDomains(value: string[]);
    resetTokenDomains(): void;
    get tokenDomainsInput(): string[] | undefined;
    private _associationConfig;
    get associationConfig(): Wafv2WebAclAssociationConfigOutputReference;
    putAssociationConfig(value: Wafv2WebAclAssociationConfig): void;
    resetAssociationConfig(): void;
    get associationConfigInput(): Wafv2WebAclAssociationConfig | undefined;
    private _captchaConfig;
    get captchaConfig(): Wafv2WebAclCaptchaConfigOutputReference;
    putCaptchaConfig(value: Wafv2WebAclCaptchaConfig): void;
    resetCaptchaConfig(): void;
    get captchaConfigInput(): Wafv2WebAclCaptchaConfig | undefined;
    private _challengeConfig;
    get challengeConfig(): Wafv2WebAclChallengeConfigOutputReference;
    putChallengeConfig(value: Wafv2WebAclChallengeConfig): void;
    resetChallengeConfig(): void;
    get challengeConfigInput(): Wafv2WebAclChallengeConfig | undefined;
    private _customResponseBody;
    get customResponseBody(): Wafv2WebAclCustomResponseBodyList;
    putCustomResponseBody(value: Wafv2WebAclCustomResponseBody[] | cdktf.IResolvable): void;
    resetCustomResponseBody(): void;
    get customResponseBodyInput(): cdktf.IResolvable | Wafv2WebAclCustomResponseBody[] | undefined;
    private _defaultAction;
    get defaultAction(): Wafv2WebAclDefaultActionOutputReference;
    putDefaultAction(value: Wafv2WebAclDefaultAction): void;
    get defaultActionInput(): Wafv2WebAclDefaultAction | undefined;
    private _rule;
    get rule(): Wafv2WebAclRuleList;
    putRule(value: Wafv2WebAclRule[] | cdktf.IResolvable): void;
    resetRule(): void;
    get ruleInput(): cdktf.IResolvable | Wafv2WebAclRule[] | undefined;
    private _visibilityConfig;
    get visibilityConfig(): Wafv2WebAclVisibilityConfigOutputReference;
    putVisibilityConfig(value: Wafv2WebAclVisibilityConfig): void;
    get visibilityConfigInput(): Wafv2WebAclVisibilityConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
