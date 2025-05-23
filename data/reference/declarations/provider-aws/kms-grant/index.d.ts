/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KmsGrantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#grant_creation_tokens KmsGrant#grant_creation_tokens}
    */
    readonly grantCreationTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#grantee_principal KmsGrant#grantee_principal}
    */
    readonly granteePrincipal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#id KmsGrant#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#key_id KmsGrant#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#name KmsGrant#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#operations KmsGrant#operations}
    */
    readonly operations: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#retire_on_delete KmsGrant#retire_on_delete}
    */
    readonly retireOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#retiring_principal KmsGrant#retiring_principal}
    */
    readonly retiringPrincipal?: string;
    /**
    * constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#constraints KmsGrant#constraints}
    */
    readonly constraints?: KmsGrantConstraints[] | cdktf.IResolvable;
}
export interface KmsGrantConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#encryption_context_equals KmsGrant#encryption_context_equals}
    */
    readonly encryptionContextEquals?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#encryption_context_subset KmsGrant#encryption_context_subset}
    */
    readonly encryptionContextSubset?: {
        [key: string]: string;
    };
}
export declare function kmsGrantConstraintsToTerraform(struct?: KmsGrantConstraints | cdktf.IResolvable): any;
export declare function kmsGrantConstraintsToHclTerraform(struct?: KmsGrantConstraints | cdktf.IResolvable): any;
export declare class KmsGrantConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KmsGrantConstraints | cdktf.IResolvable | undefined;
    set internalValue(value: KmsGrantConstraints | cdktf.IResolvable | undefined);
    private _encryptionContextEquals?;
    get encryptionContextEquals(): {
        [key: string]: string;
    };
    set encryptionContextEquals(value: {
        [key: string]: string;
    });
    resetEncryptionContextEquals(): void;
    get encryptionContextEqualsInput(): {
        [key: string]: string;
    } | undefined;
    private _encryptionContextSubset?;
    get encryptionContextSubset(): {
        [key: string]: string;
    };
    set encryptionContextSubset(value: {
        [key: string]: string;
    });
    resetEncryptionContextSubset(): void;
    get encryptionContextSubsetInput(): {
        [key: string]: string;
    } | undefined;
}
export declare class KmsGrantConstraintsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KmsGrantConstraints[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KmsGrantConstraintsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant aws_kms_grant}
*/
export declare class KmsGrant extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kms_grant";
    /**
    * Generates CDKTF code for importing a KmsGrant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KmsGrant to import
    * @param importFromId The id of the existing KmsGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KmsGrant to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kms_grant aws_kms_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KmsGrantConfig
    */
    constructor(scope: Construct, id: string, config: KmsGrantConfig);
    private _grantCreationTokens?;
    get grantCreationTokens(): string[];
    set grantCreationTokens(value: string[]);
    resetGrantCreationTokens(): void;
    get grantCreationTokensInput(): string[] | undefined;
    get grantId(): string;
    get grantToken(): string;
    private _granteePrincipal?;
    get granteePrincipal(): string;
    set granteePrincipal(value: string);
    get granteePrincipalInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _operations?;
    get operations(): string[];
    set operations(value: string[]);
    get operationsInput(): string[] | undefined;
    private _retireOnDelete?;
    get retireOnDelete(): boolean | cdktf.IResolvable;
    set retireOnDelete(value: boolean | cdktf.IResolvable);
    resetRetireOnDelete(): void;
    get retireOnDeleteInput(): boolean | cdktf.IResolvable | undefined;
    private _retiringPrincipal?;
    get retiringPrincipal(): string;
    set retiringPrincipal(value: string);
    resetRetiringPrincipal(): void;
    get retiringPrincipalInput(): string | undefined;
    private _constraints;
    get constraints(): KmsGrantConstraintsList;
    putConstraints(value: KmsGrantConstraints[] | cdktf.IResolvable): void;
    resetConstraints(): void;
    get constraintsInput(): cdktf.IResolvable | KmsGrantConstraints[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
