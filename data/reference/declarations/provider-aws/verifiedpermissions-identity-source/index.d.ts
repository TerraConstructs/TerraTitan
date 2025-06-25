/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedpermissionsIdentitySourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#policy_store_id VerifiedpermissionsIdentitySource#policy_store_id}
    */
    readonly policyStoreId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#principal_entity_type VerifiedpermissionsIdentitySource#principal_entity_type}
    */
    readonly principalEntityType?: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#configuration VerifiedpermissionsIdentitySource#configuration}
    */
    readonly configuration?: VerifiedpermissionsIdentitySourceConfiguration[] | cdktf.IResolvable;
}
export interface VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}
    */
    readonly groupEntityType: string;
}
export declare function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration | cdktf.IResolvable | undefined);
    private _groupEntityType?;
    get groupEntityType(): string;
    set groupEntityType(value: string);
    get groupEntityTypeInput(): string | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationOutputReference;
}
export interface VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}
    */
    readonly clientIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#user_pool_arn VerifiedpermissionsIdentitySource#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * group_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}
    */
    readonly groupConfiguration?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration[] | cdktf.IResolvable;
}
export declare function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration | cdktf.IResolvable | undefined);
    private _clientIds?;
    get clientIds(): string[];
    set clientIds(value: string[]);
    resetClientIds(): void;
    get clientIdsInput(): string[] | undefined;
    private _userPoolArn?;
    get userPoolArn(): string;
    set userPoolArn(value: string);
    get userPoolArnInput(): string | undefined;
    private _groupConfiguration;
    get groupConfiguration(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfigurationList;
    putGroupConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration[] | cdktf.IResolvable): void;
    resetGroupConfiguration(): void;
    get groupConfigurationInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration[] | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationOutputReference;
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#group_claim VerifiedpermissionsIdentitySource#group_claim}
    */
    readonly groupClaim: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#group_entity_type VerifiedpermissionsIdentitySource#group_entity_type}
    */
    readonly groupEntityType: string;
}
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration | cdktf.IResolvable | undefined);
    private _groupClaim?;
    get groupClaim(): string;
    set groupClaim(value: string);
    get groupClaimInput(): string | undefined;
    private _groupEntityType?;
    get groupEntityType(): string;
    set groupEntityType(value: string);
    get groupEntityTypeInput(): string | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationOutputReference;
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#audiences VerifiedpermissionsIdentitySource#audiences}
    */
    readonly audiences?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}
    */
    readonly principalIdClaim?: string;
}
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly | cdktf.IResolvable | undefined);
    private _audiences?;
    get audiences(): string[];
    set audiences(value: string[]);
    resetAudiences(): void;
    get audiencesInput(): string[] | undefined;
    private _principalIdClaim?;
    get principalIdClaim(): string;
    set principalIdClaim(value: string);
    resetPrincipalIdClaim(): void;
    get principalIdClaimInput(): string | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyOutputReference;
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#client_ids VerifiedpermissionsIdentitySource#client_ids}
    */
    readonly clientIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#principal_id_claim VerifiedpermissionsIdentitySource#principal_id_claim}
    */
    readonly principalIdClaim?: string;
}
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly | cdktf.IResolvable | undefined);
    private _clientIds?;
    get clientIds(): string[];
    set clientIds(value: string[]);
    resetClientIds(): void;
    get clientIdsInput(): string[] | undefined;
    private _principalIdClaim?;
    get principalIdClaim(): string;
    set principalIdClaim(value: string);
    resetPrincipalIdClaim(): void;
    get principalIdClaimInput(): string | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyOutputReference;
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection {
    /**
    * access_token_only block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#access_token_only VerifiedpermissionsIdentitySource#access_token_only}
    */
    readonly accessTokenOnly?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[] | cdktf.IResolvable;
    /**
    * identity_token_only block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#identity_token_only VerifiedpermissionsIdentitySource#identity_token_only}
    */
    readonly identityTokenOnly?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[] | cdktf.IResolvable;
}
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection | cdktf.IResolvable | undefined);
    private _accessTokenOnly;
    get accessTokenOnly(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnlyList;
    putAccessTokenOnly(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[] | cdktf.IResolvable): void;
    resetAccessTokenOnly(): void;
    get accessTokenOnlyInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionAccessTokenOnly[] | undefined;
    private _identityTokenOnly;
    get identityTokenOnly(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnlyList;
    putIdentityTokenOnly(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[] | cdktf.IResolvable): void;
    resetIdentityTokenOnly(): void;
    get identityTokenOnlyInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionIdentityTokenOnly[] | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionOutputReference;
}
export interface VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#entity_id_prefix VerifiedpermissionsIdentitySource#entity_id_prefix}
    */
    readonly entityIdPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#issuer VerifiedpermissionsIdentitySource#issuer}
    */
    readonly issuer: string;
    /**
    * group_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#group_configuration VerifiedpermissionsIdentitySource#group_configuration}
    */
    readonly groupConfiguration?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration[] | cdktf.IResolvable;
    /**
    * token_selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#token_selection VerifiedpermissionsIdentitySource#token_selection}
    */
    readonly tokenSelection?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection[] | cdktf.IResolvable;
}
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration | cdktf.IResolvable | undefined);
    private _entityIdPrefix?;
    get entityIdPrefix(): string;
    set entityIdPrefix(value: string);
    resetEntityIdPrefix(): void;
    get entityIdPrefixInput(): string | undefined;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string | undefined;
    private _groupConfiguration;
    get groupConfiguration(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfigurationList;
    putGroupConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration[] | cdktf.IResolvable): void;
    resetGroupConfiguration(): void;
    get groupConfigurationInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration[] | undefined;
    private _tokenSelection;
    get tokenSelection(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelectionList;
    putTokenSelection(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection[] | cdktf.IResolvable): void;
    resetTokenSelection(): void;
    get tokenSelectionInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationTokenSelection[] | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationOutputReference;
}
export interface VerifiedpermissionsIdentitySourceConfiguration {
    /**
    * cognito_user_pool_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#cognito_user_pool_configuration VerifiedpermissionsIdentitySource#cognito_user_pool_configuration}
    */
    readonly cognitoUserPoolConfiguration?: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration[] | cdktf.IResolvable;
    /**
    * open_id_connect_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#open_id_connect_configuration VerifiedpermissionsIdentitySource#open_id_connect_configuration}
    */
    readonly openIdConnectConfiguration?: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration[] | cdktf.IResolvable;
}
export declare function verifiedpermissionsIdentitySourceConfigurationToTerraform(struct?: VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable): any;
export declare function verifiedpermissionsIdentitySourceConfigurationToHclTerraform(struct?: VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable): any;
export declare class VerifiedpermissionsIdentitySourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsIdentitySourceConfiguration | cdktf.IResolvable | undefined);
    private _cognitoUserPoolConfiguration;
    get cognitoUserPoolConfiguration(): VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfigurationList;
    putCognitoUserPoolConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration[] | cdktf.IResolvable): void;
    resetCognitoUserPoolConfiguration(): void;
    get cognitoUserPoolConfigurationInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfigurationCognitoUserPoolConfiguration[] | undefined;
    private _openIdConnectConfiguration;
    get openIdConnectConfiguration(): VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfigurationList;
    putOpenIdConnectConfiguration(value: VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration[] | cdktf.IResolvable): void;
    resetOpenIdConnectConfiguration(): void;
    get openIdConnectConfigurationInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfigurationOpenIdConnectConfiguration[] | undefined;
}
export declare class VerifiedpermissionsIdentitySourceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsIdentitySourceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsIdentitySourceConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source}
*/
export declare class VerifiedpermissionsIdentitySource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedpermissions_identity_source";
    /**
    * Generates CDKTF code for importing a VerifiedpermissionsIdentitySource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedpermissionsIdentitySource to import
    * @param importFromId The id of the existing VerifiedpermissionsIdentitySource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedpermissionsIdentitySource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/verifiedpermissions_identity_source aws_verifiedpermissions_identity_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedpermissionsIdentitySourceConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedpermissionsIdentitySourceConfig);
    get id(): string;
    private _policyStoreId?;
    get policyStoreId(): string;
    set policyStoreId(value: string);
    get policyStoreIdInput(): string | undefined;
    private _principalEntityType?;
    get principalEntityType(): string;
    set principalEntityType(value: string);
    resetPrincipalEntityType(): void;
    get principalEntityTypeInput(): string | undefined;
    private _configuration;
    get configuration(): VerifiedpermissionsIdentitySourceConfigurationList;
    putConfiguration(value: VerifiedpermissionsIdentitySourceConfiguration[] | cdktf.IResolvable): void;
    resetConfiguration(): void;
    get configurationInput(): cdktf.IResolvable | VerifiedpermissionsIdentitySourceConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
