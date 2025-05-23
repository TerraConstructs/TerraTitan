/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#id SignerSigningProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#name SignerSigningProfile#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#name_prefix SignerSigningProfile#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#platform_id SignerSigningProfile#platform_id}
    */
    readonly platformId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#tags SignerSigningProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#tags_all SignerSigningProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * signature_validity_period block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#signature_validity_period SignerSigningProfile#signature_validity_period}
    */
    readonly signatureValidityPeriod?: SignerSigningProfileSignatureValidityPeriod;
    /**
    * signing_material block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#signing_material SignerSigningProfile#signing_material}
    */
    readonly signingMaterial?: SignerSigningProfileSigningMaterial;
}
export interface SignerSigningProfileRevocationRecord {
}
export declare function signerSigningProfileRevocationRecordToTerraform(struct?: SignerSigningProfileRevocationRecord): any;
export declare function signerSigningProfileRevocationRecordToHclTerraform(struct?: SignerSigningProfileRevocationRecord): any;
export declare class SignerSigningProfileRevocationRecordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SignerSigningProfileRevocationRecord | undefined;
    set internalValue(value: SignerSigningProfileRevocationRecord | undefined);
    get revocationEffectiveFrom(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class SignerSigningProfileRevocationRecordList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SignerSigningProfileRevocationRecordOutputReference;
}
export interface SignerSigningProfileSignatureValidityPeriod {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#type SignerSigningProfile#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#value SignerSigningProfile#value}
    */
    readonly value: number;
}
export declare function signerSigningProfileSignatureValidityPeriodToTerraform(struct?: SignerSigningProfileSignatureValidityPeriodOutputReference | SignerSigningProfileSignatureValidityPeriod): any;
export declare function signerSigningProfileSignatureValidityPeriodToHclTerraform(struct?: SignerSigningProfileSignatureValidityPeriodOutputReference | SignerSigningProfileSignatureValidityPeriod): any;
export declare class SignerSigningProfileSignatureValidityPeriodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SignerSigningProfileSignatureValidityPeriod | undefined;
    set internalValue(value: SignerSigningProfileSignatureValidityPeriod | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface SignerSigningProfileSigningMaterial {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#certificate_arn SignerSigningProfile#certificate_arn}
    */
    readonly certificateArn: string;
}
export declare function signerSigningProfileSigningMaterialToTerraform(struct?: SignerSigningProfileSigningMaterialOutputReference | SignerSigningProfileSigningMaterial): any;
export declare function signerSigningProfileSigningMaterialToHclTerraform(struct?: SignerSigningProfileSigningMaterialOutputReference | SignerSigningProfileSigningMaterial): any;
export declare class SignerSigningProfileSigningMaterialOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SignerSigningProfileSigningMaterial | undefined;
    set internalValue(value: SignerSigningProfileSigningMaterial | undefined);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile aws_signer_signing_profile}
*/
export declare class SignerSigningProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_signer_signing_profile";
    /**
    * Generates CDKTF code for importing a SignerSigningProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SignerSigningProfile to import
    * @param importFromId The id of the existing SignerSigningProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SignerSigningProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/signer_signing_profile aws_signer_signing_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SignerSigningProfileConfig
    */
    constructor(scope: Construct, id: string, config: SignerSigningProfileConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    get platformDisplayName(): string;
    private _platformId?;
    get platformId(): string;
    set platformId(value: string);
    get platformIdInput(): string | undefined;
    private _revocationRecord;
    get revocationRecord(): SignerSigningProfileRevocationRecordList;
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
    get version(): string;
    get versionArn(): string;
    private _signatureValidityPeriod;
    get signatureValidityPeriod(): SignerSigningProfileSignatureValidityPeriodOutputReference;
    putSignatureValidityPeriod(value: SignerSigningProfileSignatureValidityPeriod): void;
    resetSignatureValidityPeriod(): void;
    get signatureValidityPeriodInput(): SignerSigningProfileSignatureValidityPeriod | undefined;
    private _signingMaterial;
    get signingMaterial(): SignerSigningProfileSigningMaterialOutputReference;
    putSigningMaterial(value: SignerSigningProfileSigningMaterial): void;
    resetSigningMaterial(): void;
    get signingMaterialInput(): SignerSigningProfileSigningMaterial | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
