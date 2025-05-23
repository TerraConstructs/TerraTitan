/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSignerSigningProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_profile#id DataAwsSignerSigningProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_profile#name DataAwsSignerSigningProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_profile#tags DataAwsSignerSigningProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsSignerSigningProfileRevocationRecord {
}
export declare function dataAwsSignerSigningProfileRevocationRecordToTerraform(struct?: DataAwsSignerSigningProfileRevocationRecord): any;
export declare function dataAwsSignerSigningProfileRevocationRecordToHclTerraform(struct?: DataAwsSignerSigningProfileRevocationRecord): any;
export declare class DataAwsSignerSigningProfileRevocationRecordOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSignerSigningProfileRevocationRecord | undefined;
    set internalValue(value: DataAwsSignerSigningProfileRevocationRecord | undefined);
    get revocationEffectiveFrom(): string;
    get revokedAt(): string;
    get revokedBy(): string;
}
export declare class DataAwsSignerSigningProfileRevocationRecordList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSignerSigningProfileRevocationRecordOutputReference;
}
export interface DataAwsSignerSigningProfileSignatureValidityPeriod {
}
export declare function dataAwsSignerSigningProfileSignatureValidityPeriodToTerraform(struct?: DataAwsSignerSigningProfileSignatureValidityPeriod): any;
export declare function dataAwsSignerSigningProfileSignatureValidityPeriodToHclTerraform(struct?: DataAwsSignerSigningProfileSignatureValidityPeriod): any;
export declare class DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSignerSigningProfileSignatureValidityPeriod | undefined;
    set internalValue(value: DataAwsSignerSigningProfileSignatureValidityPeriod | undefined);
    get type(): string;
    get value(): number;
}
export declare class DataAwsSignerSigningProfileSignatureValidityPeriodList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSignerSigningProfileSignatureValidityPeriodOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_profile aws_signer_signing_profile}
*/
export declare class DataAwsSignerSigningProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_signer_signing_profile";
    /**
    * Generates CDKTF code for importing a DataAwsSignerSigningProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSignerSigningProfile to import
    * @param importFromId The id of the existing DataAwsSignerSigningProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSignerSigningProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/signer_signing_profile aws_signer_signing_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSignerSigningProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSignerSigningProfileConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get platformDisplayName(): string;
    get platformId(): string;
    private _revocationRecord;
    get revocationRecord(): DataAwsSignerSigningProfileRevocationRecordList;
    private _signatureValidityPeriod;
    get signatureValidityPeriod(): DataAwsSignerSigningProfileSignatureValidityPeriodList;
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
    get version(): string;
    get versionArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
