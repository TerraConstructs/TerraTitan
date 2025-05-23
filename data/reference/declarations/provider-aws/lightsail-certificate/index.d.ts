/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate#domain_name LightsailCertificate#domain_name}
    */
    readonly domainName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate#id LightsailCertificate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate#name LightsailCertificate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate#subject_alternative_names LightsailCertificate#subject_alternative_names}
    */
    readonly subjectAlternativeNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate#tags LightsailCertificate#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate#tags_all LightsailCertificate#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
export interface LightsailCertificateDomainValidationOptions {
}
export declare function lightsailCertificateDomainValidationOptionsToTerraform(struct?: LightsailCertificateDomainValidationOptions): any;
export declare function lightsailCertificateDomainValidationOptionsToHclTerraform(struct?: LightsailCertificateDomainValidationOptions): any;
export declare class LightsailCertificateDomainValidationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LightsailCertificateDomainValidationOptions | undefined;
    set internalValue(value: LightsailCertificateDomainValidationOptions | undefined);
    get domainName(): string;
    get resourceRecordName(): string;
    get resourceRecordType(): string;
    get resourceRecordValue(): string;
}
export declare class LightsailCertificateDomainValidationOptionsList extends cdktf.ComplexList {
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
    get(index: number): LightsailCertificateDomainValidationOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate aws_lightsail_certificate}
*/
export declare class LightsailCertificate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_certificate";
    /**
    * Generates CDKTF code for importing a LightsailCertificate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailCertificate to import
    * @param importFromId The id of the existing LightsailCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailCertificate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_certificate aws_lightsail_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailCertificateConfig
    */
    constructor(scope: Construct, id: string, config: LightsailCertificateConfig);
    get arn(): string;
    get createdAt(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    resetDomainName(): void;
    get domainNameInput(): string | undefined;
    private _domainValidationOptions;
    get domainValidationOptions(): LightsailCertificateDomainValidationOptionsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _subjectAlternativeNames?;
    get subjectAlternativeNames(): string[];
    set subjectAlternativeNames(value: string[]);
    resetSubjectAlternativeNames(): void;
    get subjectAlternativeNamesInput(): string[] | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
