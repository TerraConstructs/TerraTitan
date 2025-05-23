/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoIdentityPoolRolesAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#id CognitoIdentityPoolRolesAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#identity_pool_id CognitoIdentityPoolRolesAttachment#identity_pool_id}
    */
    readonly identityPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#roles CognitoIdentityPoolRolesAttachment#roles}
    */
    readonly roles: {
        [key: string]: string;
    };
    /**
    * role_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#role_mapping CognitoIdentityPoolRolesAttachment#role_mapping}
    */
    readonly roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[] | cdktf.IResolvable;
}
export interface CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#claim CognitoIdentityPoolRolesAttachment#claim}
    */
    readonly claim: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#match_type CognitoIdentityPoolRolesAttachment#match_type}
    */
    readonly matchType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#role_arn CognitoIdentityPoolRolesAttachment#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#value CognitoIdentityPoolRolesAttachment#value}
    */
    readonly value: string;
}
export declare function cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule | cdktf.IResolvable): any;
export declare function cognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleToHclTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule | cdktf.IResolvable): any;
export declare class CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule | cdktf.IResolvable | undefined);
    private _claim?;
    get claim(): string;
    set claim(value: string);
    get claimInput(): string | undefined;
    private _matchType?;
    get matchType(): string;
    set matchType(value: string);
    get matchTypeInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleOutputReference;
}
export interface CognitoIdentityPoolRolesAttachmentRoleMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#ambiguous_role_resolution CognitoIdentityPoolRolesAttachment#ambiguous_role_resolution}
    */
    readonly ambiguousRoleResolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#identity_provider CognitoIdentityPoolRolesAttachment#identity_provider}
    */
    readonly identityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#type CognitoIdentityPoolRolesAttachment#type}
    */
    readonly type: string;
    /**
    * mapping_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#mapping_rule CognitoIdentityPoolRolesAttachment#mapping_rule}
    */
    readonly mappingRule?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[] | cdktf.IResolvable;
}
export declare function cognitoIdentityPoolRolesAttachmentRoleMappingToTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMapping | cdktf.IResolvable): any;
export declare function cognitoIdentityPoolRolesAttachmentRoleMappingToHclTerraform(struct?: CognitoIdentityPoolRolesAttachmentRoleMapping | cdktf.IResolvable): any;
export declare class CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CognitoIdentityPoolRolesAttachmentRoleMapping | cdktf.IResolvable | undefined;
    set internalValue(value: CognitoIdentityPoolRolesAttachmentRoleMapping | cdktf.IResolvable | undefined);
    private _ambiguousRoleResolution?;
    get ambiguousRoleResolution(): string;
    set ambiguousRoleResolution(value: string);
    resetAmbiguousRoleResolution(): void;
    get ambiguousRoleResolutionInput(): string | undefined;
    private _identityProvider?;
    get identityProvider(): string;
    set identityProvider(value: string);
    get identityProviderInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _mappingRule;
    get mappingRule(): CognitoIdentityPoolRolesAttachmentRoleMappingMappingRuleList;
    putMappingRule(value: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[] | cdktf.IResolvable): void;
    resetMappingRule(): void;
    get mappingRuleInput(): cdktf.IResolvable | CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[] | undefined;
}
export declare class CognitoIdentityPoolRolesAttachmentRoleMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CognitoIdentityPoolRolesAttachmentRoleMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CognitoIdentityPoolRolesAttachmentRoleMappingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment aws_cognito_identity_pool_roles_attachment}
*/
export declare class CognitoIdentityPoolRolesAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cognito_identity_pool_roles_attachment";
    /**
    * Generates CDKTF code for importing a CognitoIdentityPoolRolesAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CognitoIdentityPoolRolesAttachment to import
    * @param importFromId The id of the existing CognitoIdentityPoolRolesAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CognitoIdentityPoolRolesAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cognito_identity_pool_roles_attachment aws_cognito_identity_pool_roles_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolRolesAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: CognitoIdentityPoolRolesAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityPoolId?;
    get identityPoolId(): string;
    set identityPoolId(value: string);
    get identityPoolIdInput(): string | undefined;
    private _roles?;
    get roles(): {
        [key: string]: string;
    };
    set roles(value: {
        [key: string]: string;
    });
    get rolesInput(): {
        [key: string]: string;
    } | undefined;
    private _roleMapping;
    get roleMapping(): CognitoIdentityPoolRolesAttachmentRoleMappingList;
    putRoleMapping(value: CognitoIdentityPoolRolesAttachmentRoleMapping[] | cdktf.IResolvable): void;
    resetRoleMapping(): void;
    get roleMappingInput(): cdktf.IResolvable | CognitoIdentityPoolRolesAttachmentRoleMapping[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
