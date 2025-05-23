/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchDomainSamlOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#domain_name OpensearchDomainSamlOptions#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#id OpensearchDomainSamlOptions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * saml_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#saml_options OpensearchDomainSamlOptions#saml_options}
    */
    readonly samlOptions?: OpensearchDomainSamlOptionsSamlOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#timeouts OpensearchDomainSamlOptions#timeouts}
    */
    readonly timeouts?: OpensearchDomainSamlOptionsTimeouts;
}
export interface OpensearchDomainSamlOptionsSamlOptionsIdp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#entity_id OpensearchDomainSamlOptions#entity_id}
    */
    readonly entityId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#metadata_content OpensearchDomainSamlOptions#metadata_content}
    */
    readonly metadataContent: string;
}
export declare function opensearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference | OpensearchDomainSamlOptionsSamlOptionsIdp): any;
export declare function opensearchDomainSamlOptionsSamlOptionsIdpToHclTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference | OpensearchDomainSamlOptionsSamlOptionsIdp): any;
export declare class OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainSamlOptionsSamlOptionsIdp | undefined;
    set internalValue(value: OpensearchDomainSamlOptionsSamlOptionsIdp | undefined);
    private _entityId?;
    get entityId(): string;
    set entityId(value: string);
    get entityIdInput(): string | undefined;
    private _metadataContent?;
    get metadataContent(): string;
    set metadataContent(value: string);
    get metadataContentInput(): string | undefined;
}
export interface OpensearchDomainSamlOptionsSamlOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#enabled OpensearchDomainSamlOptions#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#master_backend_role OpensearchDomainSamlOptions#master_backend_role}
    */
    readonly masterBackendRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#master_user_name OpensearchDomainSamlOptions#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#roles_key OpensearchDomainSamlOptions#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#session_timeout_minutes OpensearchDomainSamlOptions#session_timeout_minutes}
    */
    readonly sessionTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#subject_key OpensearchDomainSamlOptions#subject_key}
    */
    readonly subjectKey?: string;
    /**
    * idp block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#idp OpensearchDomainSamlOptions#idp}
    */
    readonly idp?: OpensearchDomainSamlOptionsSamlOptionsIdp;
}
export declare function opensearchDomainSamlOptionsSamlOptionsToTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsOutputReference | OpensearchDomainSamlOptionsSamlOptions): any;
export declare function opensearchDomainSamlOptionsSamlOptionsToHclTerraform(struct?: OpensearchDomainSamlOptionsSamlOptionsOutputReference | OpensearchDomainSamlOptionsSamlOptions): any;
export declare class OpensearchDomainSamlOptionsSamlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainSamlOptionsSamlOptions | undefined;
    set internalValue(value: OpensearchDomainSamlOptionsSamlOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _masterBackendRole?;
    get masterBackendRole(): string;
    set masterBackendRole(value: string);
    resetMasterBackendRole(): void;
    get masterBackendRoleInput(): string | undefined;
    private _masterUserName?;
    get masterUserName(): string;
    set masterUserName(value: string);
    resetMasterUserName(): void;
    get masterUserNameInput(): string | undefined;
    private _rolesKey?;
    get rolesKey(): string;
    set rolesKey(value: string);
    resetRolesKey(): void;
    get rolesKeyInput(): string | undefined;
    private _sessionTimeoutMinutes?;
    get sessionTimeoutMinutes(): number;
    set sessionTimeoutMinutes(value: number);
    resetSessionTimeoutMinutes(): void;
    get sessionTimeoutMinutesInput(): number | undefined;
    private _subjectKey?;
    get subjectKey(): string;
    set subjectKey(value: string);
    resetSubjectKey(): void;
    get subjectKeyInput(): string | undefined;
    private _idp;
    get idp(): OpensearchDomainSamlOptionsSamlOptionsIdpOutputReference;
    putIdp(value: OpensearchDomainSamlOptionsSamlOptionsIdp): void;
    resetIdp(): void;
    get idpInput(): OpensearchDomainSamlOptionsSamlOptionsIdp | undefined;
}
export interface OpensearchDomainSamlOptionsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#delete OpensearchDomainSamlOptions#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#update OpensearchDomainSamlOptions#update}
    */
    readonly update?: string;
}
export declare function opensearchDomainSamlOptionsTimeoutsToTerraform(struct?: OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable): any;
export declare function opensearchDomainSamlOptionsTimeoutsToHclTerraform(struct?: OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable): any;
export declare class OpensearchDomainSamlOptionsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchDomainSamlOptionsTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options aws_opensearch_domain_saml_options}
*/
export declare class OpensearchDomainSamlOptions extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearch_domain_saml_options";
    /**
    * Generates CDKTF code for importing a OpensearchDomainSamlOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchDomainSamlOptions to import
    * @param importFromId The id of the existing OpensearchDomainSamlOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchDomainSamlOptions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearch_domain_saml_options aws_opensearch_domain_saml_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchDomainSamlOptionsConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchDomainSamlOptionsConfig);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _samlOptions;
    get samlOptions(): OpensearchDomainSamlOptionsSamlOptionsOutputReference;
    putSamlOptions(value: OpensearchDomainSamlOptionsSamlOptions): void;
    resetSamlOptions(): void;
    get samlOptionsInput(): OpensearchDomainSamlOptionsSamlOptions | undefined;
    private _timeouts;
    get timeouts(): OpensearchDomainSamlOptionsTimeoutsOutputReference;
    putTimeouts(value: OpensearchDomainSamlOptionsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpensearchDomainSamlOptionsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
