/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acmpca_certificate_authority#arn DataAwsAcmpcaCertificateAuthority#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acmpca_certificate_authority#id DataAwsAcmpcaCertificateAuthority#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acmpca_certificate_authority#tags DataAwsAcmpcaCertificateAuthority#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
}
export declare function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any;
export declare function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToHclTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any;
export declare class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined;
    set internalValue(value: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined);
    get customCname(): string;
    get enabled(): cdktf.IResolvable;
    get expirationInDays(): number;
    get s3BucketName(): string;
    get s3ObjectAcl(): string;
}
export declare class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference;
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration {
}
export declare function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration): any;
export declare function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationToHclTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration): any;
export declare class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | undefined;
    set internalValue(value: DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfiguration | undefined);
    get enabled(): cdktf.IResolvable;
    get ocspCustomCname(): string;
}
export declare class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationOutputReference;
}
export interface DataAwsAcmpcaCertificateAuthorityRevocationConfiguration {
}
export declare function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration): any;
export declare function dataAwsAcmpcaCertificateAuthorityRevocationConfigurationToHclTerraform(struct?: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration): any;
export declare class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAcmpcaCertificateAuthorityRevocationConfiguration | undefined;
    set internalValue(value: DataAwsAcmpcaCertificateAuthorityRevocationConfiguration | undefined);
    private _crlConfiguration;
    get crlConfiguration(): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationList;
    private _ocspConfiguration;
    get ocspConfiguration(): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOcspConfigurationList;
}
export declare class DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acmpca_certificate_authority aws_acmpca_certificate_authority}
*/
export declare class DataAwsAcmpcaCertificateAuthority extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_acmpca_certificate_authority";
    /**
    * Generates CDKTF code for importing a DataAwsAcmpcaCertificateAuthority resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAcmpcaCertificateAuthority to import
    * @param importFromId The id of the existing DataAwsAcmpcaCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acmpca_certificate_authority#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAcmpcaCertificateAuthority to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/acmpca_certificate_authority aws_acmpca_certificate_authority} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAcmpcaCertificateAuthorityConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAcmpcaCertificateAuthorityConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get certificate(): string;
    get certificateChain(): string;
    get certificateSigningRequest(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get keyStorageSecurityStandard(): string;
    get notAfter(): string;
    get notBefore(): string;
    private _revocationConfiguration;
    get revocationConfiguration(): DataAwsAcmpcaCertificateAuthorityRevocationConfigurationList;
    get serial(): string;
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
    get type(): string;
    get usageMode(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
