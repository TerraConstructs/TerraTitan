/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchserverlessSecurityConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#description OpensearchserverlessSecurityConfig#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#name OpensearchserverlessSecurityConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#type OpensearchserverlessSecurityConfig#type}
    */
    readonly type: string;
    /**
    * saml_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#saml_options OpensearchserverlessSecurityConfig#saml_options}
    */
    readonly samlOptions?: OpensearchserverlessSecurityConfigSamlOptions;
}
export interface OpensearchserverlessSecurityConfigSamlOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#group_attribute OpensearchserverlessSecurityConfig#group_attribute}
    */
    readonly groupAttribute?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#metadata OpensearchserverlessSecurityConfig#metadata}
    */
    readonly metadata: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#session_timeout OpensearchserverlessSecurityConfig#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#user_attribute OpensearchserverlessSecurityConfig#user_attribute}
    */
    readonly userAttribute?: string;
}
export declare function opensearchserverlessSecurityConfigSamlOptionsToTerraform(struct?: OpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable): any;
export declare function opensearchserverlessSecurityConfigSamlOptionsToHclTerraform(struct?: OpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable): any;
export declare class OpensearchserverlessSecurityConfigSamlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchserverlessSecurityConfigSamlOptions | cdktf.IResolvable | undefined);
    private _groupAttribute?;
    get groupAttribute(): string;
    set groupAttribute(value: string);
    resetGroupAttribute(): void;
    get groupAttributeInput(): string | undefined;
    private _metadata?;
    get metadata(): string;
    set metadata(value: string);
    get metadataInput(): string | undefined;
    private _sessionTimeout?;
    get sessionTimeout(): number;
    set sessionTimeout(value: number);
    resetSessionTimeout(): void;
    get sessionTimeoutInput(): number | undefined;
    private _userAttribute?;
    get userAttribute(): string;
    set userAttribute(value: string);
    resetUserAttribute(): void;
    get userAttributeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config aws_opensearchserverless_security_config}
*/
export declare class OpensearchserverlessSecurityConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearchserverless_security_config";
    /**
    * Generates CDKTF code for importing a OpensearchserverlessSecurityConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchserverlessSecurityConfig to import
    * @param importFromId The id of the existing OpensearchserverlessSecurityConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchserverlessSecurityConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_security_config aws_opensearchserverless_security_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchserverlessSecurityConfigConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchserverlessSecurityConfigConfig);
    get configVersion(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _samlOptions;
    get samlOptions(): OpensearchserverlessSecurityConfigSamlOptionsOutputReference;
    putSamlOptions(value: OpensearchserverlessSecurityConfigSamlOptions): void;
    resetSamlOptions(): void;
    get samlOptionsInput(): cdktf.IResolvable | OpensearchserverlessSecurityConfigSamlOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
