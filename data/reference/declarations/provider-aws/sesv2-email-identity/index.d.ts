/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2EmailIdentityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}
    */
    readonly configurationSetName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}
    */
    readonly emailIdentity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#id Sesv2EmailIdentity#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#tags Sesv2EmailIdentity#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * dkim_signing_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}
    */
    readonly dkimSigningAttributes?: Sesv2EmailIdentityDkimSigningAttributes;
}
export interface Sesv2EmailIdentityDkimSigningAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}
    */
    readonly domainSigningPrivateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}
    */
    readonly domainSigningSelector?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}
    */
    readonly nextSigningKeyLength?: string;
}
export declare function sesv2EmailIdentityDkimSigningAttributesToTerraform(struct?: Sesv2EmailIdentityDkimSigningAttributesOutputReference | Sesv2EmailIdentityDkimSigningAttributes): any;
export declare function sesv2EmailIdentityDkimSigningAttributesToHclTerraform(struct?: Sesv2EmailIdentityDkimSigningAttributesOutputReference | Sesv2EmailIdentityDkimSigningAttributes): any;
export declare class Sesv2EmailIdentityDkimSigningAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2EmailIdentityDkimSigningAttributes | undefined;
    set internalValue(value: Sesv2EmailIdentityDkimSigningAttributes | undefined);
    get currentSigningKeyLength(): string;
    private _domainSigningPrivateKey?;
    get domainSigningPrivateKey(): string;
    set domainSigningPrivateKey(value: string);
    resetDomainSigningPrivateKey(): void;
    get domainSigningPrivateKeyInput(): string | undefined;
    private _domainSigningSelector?;
    get domainSigningSelector(): string;
    set domainSigningSelector(value: string);
    resetDomainSigningSelector(): void;
    get domainSigningSelectorInput(): string | undefined;
    get lastKeyGenerationTimestamp(): string;
    private _nextSigningKeyLength?;
    get nextSigningKeyLength(): string;
    set nextSigningKeyLength(value: string);
    resetNextSigningKeyLength(): void;
    get nextSigningKeyLengthInput(): string | undefined;
    get signingAttributesOrigin(): string;
    get status(): string;
    get tokens(): string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity aws_sesv2_email_identity}
*/
export declare class Sesv2EmailIdentity extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_email_identity";
    /**
    * Generates CDKTF code for importing a Sesv2EmailIdentity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2EmailIdentity to import
    * @param importFromId The id of the existing Sesv2EmailIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2EmailIdentity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_email_identity aws_sesv2_email_identity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2EmailIdentityConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2EmailIdentityConfig);
    get arn(): string;
    private _configurationSetName?;
    get configurationSetName(): string;
    set configurationSetName(value: string);
    resetConfigurationSetName(): void;
    get configurationSetNameInput(): string | undefined;
    private _emailIdentity?;
    get emailIdentity(): string;
    set emailIdentity(value: string);
    get emailIdentityInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get identityType(): string;
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
    get verifiedForSendingStatus(): cdktf.IResolvable;
    private _dkimSigningAttributes;
    get dkimSigningAttributes(): Sesv2EmailIdentityDkimSigningAttributesOutputReference;
    putDkimSigningAttributes(value: Sesv2EmailIdentityDkimSigningAttributes): void;
    resetDkimSigningAttributes(): void;
    get dkimSigningAttributesInput(): Sesv2EmailIdentityDkimSigningAttributes | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
