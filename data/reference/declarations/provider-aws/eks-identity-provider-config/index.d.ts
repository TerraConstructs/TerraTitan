/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EksIdentityProviderConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#id EksIdentityProviderConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * oidc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}
    */
    readonly oidc: EksIdentityProviderConfigOidc;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#timeouts EksIdentityProviderConfig#timeouts}
    */
    readonly timeouts?: EksIdentityProviderConfigTimeouts;
}
export interface EksIdentityProviderConfigOidc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}
    */
    readonly groupsClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}
    */
    readonly groupsPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}
    */
    readonly identityProviderConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}
    */
    readonly issuerUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}
    */
    readonly requiredClaims?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}
    */
    readonly usernameClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}
    */
    readonly usernamePrefix?: string;
}
export declare function eksIdentityProviderConfigOidcToTerraform(struct?: EksIdentityProviderConfigOidcOutputReference | EksIdentityProviderConfigOidc): any;
export declare function eksIdentityProviderConfigOidcToHclTerraform(struct?: EksIdentityProviderConfigOidcOutputReference | EksIdentityProviderConfigOidc): any;
export declare class EksIdentityProviderConfigOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksIdentityProviderConfigOidc | undefined;
    set internalValue(value: EksIdentityProviderConfigOidc | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _groupsClaim?;
    get groupsClaim(): string;
    set groupsClaim(value: string);
    resetGroupsClaim(): void;
    get groupsClaimInput(): string | undefined;
    private _groupsPrefix?;
    get groupsPrefix(): string;
    set groupsPrefix(value: string);
    resetGroupsPrefix(): void;
    get groupsPrefixInput(): string | undefined;
    private _identityProviderConfigName?;
    get identityProviderConfigName(): string;
    set identityProviderConfigName(value: string);
    get identityProviderConfigNameInput(): string | undefined;
    private _issuerUrl?;
    get issuerUrl(): string;
    set issuerUrl(value: string);
    get issuerUrlInput(): string | undefined;
    private _requiredClaims?;
    get requiredClaims(): {
        [key: string]: string;
    };
    set requiredClaims(value: {
        [key: string]: string;
    });
    resetRequiredClaims(): void;
    get requiredClaimsInput(): {
        [key: string]: string;
    } | undefined;
    private _usernameClaim?;
    get usernameClaim(): string;
    set usernameClaim(value: string);
    resetUsernameClaim(): void;
    get usernameClaimInput(): string | undefined;
    private _usernamePrefix?;
    get usernamePrefix(): string;
    set usernamePrefix(value: string);
    resetUsernamePrefix(): void;
    get usernamePrefixInput(): string | undefined;
}
export interface EksIdentityProviderConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#create EksIdentityProviderConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}
    */
    readonly delete?: string;
}
export declare function eksIdentityProviderConfigTimeoutsToTerraform(struct?: EksIdentityProviderConfigTimeouts | cdktf.IResolvable): any;
export declare function eksIdentityProviderConfigTimeoutsToHclTerraform(struct?: EksIdentityProviderConfigTimeouts | cdktf.IResolvable): any;
export declare class EksIdentityProviderConfigTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EksIdentityProviderConfigTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EksIdentityProviderConfigTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config aws_eks_identity_provider_config}
*/
export declare class EksIdentityProviderConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eks_identity_provider_config";
    /**
    * Generates CDKTF code for importing a EksIdentityProviderConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EksIdentityProviderConfig to import
    * @param importFromId The id of the existing EksIdentityProviderConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EksIdentityProviderConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eks_identity_provider_config aws_eks_identity_provider_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksIdentityProviderConfigConfig
    */
    constructor(scope: Construct, id: string, config: EksIdentityProviderConfigConfig);
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get status(): string;
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
    private _oidc;
    get oidc(): EksIdentityProviderConfigOidcOutputReference;
    putOidc(value: EksIdentityProviderConfigOidc): void;
    get oidcInput(): EksIdentityProviderConfigOidc | undefined;
    private _timeouts;
    get timeouts(): EksIdentityProviderConfigTimeoutsOutputReference;
    putTimeouts(value: EksIdentityProviderConfigTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EksIdentityProviderConfigTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
