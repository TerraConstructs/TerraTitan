/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticsearchDomainSamlOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#domain_name ElasticsearchDomainSamlOptions#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#id ElasticsearchDomainSamlOptions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * saml_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#saml_options ElasticsearchDomainSamlOptions#saml_options}
    */
    readonly samlOptions?: ElasticsearchDomainSamlOptionsSamlOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#timeouts ElasticsearchDomainSamlOptions#timeouts}
    */
    readonly timeouts?: ElasticsearchDomainSamlOptionsTimeouts;
}
export interface ElasticsearchDomainSamlOptionsSamlOptionsIdp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#entity_id ElasticsearchDomainSamlOptions#entity_id}
    */
    readonly entityId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#metadata_content ElasticsearchDomainSamlOptions#metadata_content}
    */
    readonly metadataContent: string;
}
export declare function elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference | ElasticsearchDomainSamlOptionsSamlOptionsIdp): any;
export declare function elasticsearchDomainSamlOptionsSamlOptionsIdpToHclTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference | ElasticsearchDomainSamlOptionsSamlOptionsIdp): any;
export declare class ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainSamlOptionsSamlOptionsIdp | undefined;
    set internalValue(value: ElasticsearchDomainSamlOptionsSamlOptionsIdp | undefined);
    private _entityId?;
    get entityId(): string;
    set entityId(value: string);
    get entityIdInput(): string | undefined;
    private _metadataContent?;
    get metadataContent(): string;
    set metadataContent(value: string);
    get metadataContentInput(): string | undefined;
}
export interface ElasticsearchDomainSamlOptionsSamlOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#enabled ElasticsearchDomainSamlOptions#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}
    */
    readonly masterBackendRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#master_user_name ElasticsearchDomainSamlOptions#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#roles_key ElasticsearchDomainSamlOptions#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}
    */
    readonly sessionTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#subject_key ElasticsearchDomainSamlOptions#subject_key}
    */
    readonly subjectKey?: string;
    /**
    * idp block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#idp ElasticsearchDomainSamlOptions#idp}
    */
    readonly idp?: ElasticsearchDomainSamlOptionsSamlOptionsIdp;
}
export declare function elasticsearchDomainSamlOptionsSamlOptionsToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsOutputReference | ElasticsearchDomainSamlOptionsSamlOptions): any;
export declare function elasticsearchDomainSamlOptionsSamlOptionsToHclTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsOutputReference | ElasticsearchDomainSamlOptionsSamlOptions): any;
export declare class ElasticsearchDomainSamlOptionsSamlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainSamlOptionsSamlOptions | undefined;
    set internalValue(value: ElasticsearchDomainSamlOptionsSamlOptions | undefined);
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
    get idp(): ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference;
    putIdp(value: ElasticsearchDomainSamlOptionsSamlOptionsIdp): void;
    resetIdp(): void;
    get idpInput(): ElasticsearchDomainSamlOptionsSamlOptionsIdp | undefined;
}
export interface ElasticsearchDomainSamlOptionsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#delete ElasticsearchDomainSamlOptions#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#update ElasticsearchDomainSamlOptions#update}
    */
    readonly update?: string;
}
export declare function elasticsearchDomainSamlOptionsTimeoutsToTerraform(struct?: ElasticsearchDomainSamlOptionsTimeouts | cdktf.IResolvable): any;
export declare function elasticsearchDomainSamlOptionsTimeoutsToHclTerraform(struct?: ElasticsearchDomainSamlOptionsTimeouts | cdktf.IResolvable): any;
export declare class ElasticsearchDomainSamlOptionsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticsearchDomainSamlOptionsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticsearchDomainSamlOptionsTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options aws_elasticsearch_domain_saml_options}
*/
export declare class ElasticsearchDomainSamlOptions extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elasticsearch_domain_saml_options";
    /**
    * Generates CDKTF code for importing a ElasticsearchDomainSamlOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticsearchDomainSamlOptions to import
    * @param importFromId The id of the existing ElasticsearchDomainSamlOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticsearchDomainSamlOptions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elasticsearch_domain_saml_options aws_elasticsearch_domain_saml_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainSamlOptionsConfig
    */
    constructor(scope: Construct, id: string, config: ElasticsearchDomainSamlOptionsConfig);
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
    get samlOptions(): ElasticsearchDomainSamlOptionsSamlOptionsOutputReference;
    putSamlOptions(value: ElasticsearchDomainSamlOptionsSamlOptions): void;
    resetSamlOptions(): void;
    get samlOptionsInput(): ElasticsearchDomainSamlOptionsSamlOptions | undefined;
    private _timeouts;
    get timeouts(): ElasticsearchDomainSamlOptionsTimeoutsOutputReference;
    putTimeouts(value: ElasticsearchDomainSamlOptionsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ElasticsearchDomainSamlOptionsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
