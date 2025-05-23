/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApprunnerCustomDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_custom_domain_association#domain_name ApprunnerCustomDomainAssociation#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_custom_domain_association#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}
    */
    readonly enableWwwSubdomain?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_custom_domain_association#id ApprunnerCustomDomainAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_custom_domain_association#service_arn ApprunnerCustomDomainAssociation#service_arn}
    */
    readonly serviceArn: string;
}
export interface ApprunnerCustomDomainAssociationCertificateValidationRecords {
}
export declare function apprunnerCustomDomainAssociationCertificateValidationRecordsToTerraform(struct?: ApprunnerCustomDomainAssociationCertificateValidationRecords): any;
export declare function apprunnerCustomDomainAssociationCertificateValidationRecordsToHclTerraform(struct?: ApprunnerCustomDomainAssociationCertificateValidationRecords): any;
export declare class ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ApprunnerCustomDomainAssociationCertificateValidationRecords | undefined;
    set internalValue(value: ApprunnerCustomDomainAssociationCertificateValidationRecords | undefined);
    get name(): string;
    get status(): string;
    get type(): string;
    get value(): string;
}
export declare class ApprunnerCustomDomainAssociationCertificateValidationRecordsList extends cdktf.ComplexList {
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
    get(index: number): ApprunnerCustomDomainAssociationCertificateValidationRecordsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_custom_domain_association aws_apprunner_custom_domain_association}
*/
export declare class ApprunnerCustomDomainAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apprunner_custom_domain_association";
    /**
    * Generates CDKTF code for importing a ApprunnerCustomDomainAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerCustomDomainAssociation to import
    * @param importFromId The id of the existing ApprunnerCustomDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_custom_domain_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerCustomDomainAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_custom_domain_association aws_apprunner_custom_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerCustomDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerCustomDomainAssociationConfig);
    private _certificateValidationRecords;
    get certificateValidationRecords(): ApprunnerCustomDomainAssociationCertificateValidationRecordsList;
    get dnsTarget(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _enableWwwSubdomain?;
    get enableWwwSubdomain(): boolean | cdktf.IResolvable;
    set enableWwwSubdomain(value: boolean | cdktf.IResolvable);
    resetEnableWwwSubdomain(): void;
    get enableWwwSubdomainInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _serviceArn?;
    get serviceArn(): string;
    set serviceArn(value: string);
    get serviceArnInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
