/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmplifyDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#app_id AmplifyDomainAssociation#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#domain_name AmplifyDomainAssociation#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#enable_auto_sub_domain AmplifyDomainAssociation#enable_auto_sub_domain}
    */
    readonly enableAutoSubDomain?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#id AmplifyDomainAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#wait_for_verification AmplifyDomainAssociation#wait_for_verification}
    */
    readonly waitForVerification?: boolean | cdktf.IResolvable;
    /**
    * certificate_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#certificate_settings AmplifyDomainAssociation#certificate_settings}
    */
    readonly certificateSettings?: AmplifyDomainAssociationCertificateSettings;
    /**
    * sub_domain block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#sub_domain AmplifyDomainAssociation#sub_domain}
    */
    readonly subDomain: AmplifyDomainAssociationSubDomain[] | cdktf.IResolvable;
}
export interface AmplifyDomainAssociationCertificateSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#custom_certificate_arn AmplifyDomainAssociation#custom_certificate_arn}
    */
    readonly customCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#type AmplifyDomainAssociation#type}
    */
    readonly type: string;
}
export declare function amplifyDomainAssociationCertificateSettingsToTerraform(struct?: AmplifyDomainAssociationCertificateSettingsOutputReference | AmplifyDomainAssociationCertificateSettings): any;
export declare function amplifyDomainAssociationCertificateSettingsToHclTerraform(struct?: AmplifyDomainAssociationCertificateSettingsOutputReference | AmplifyDomainAssociationCertificateSettings): any;
export declare class AmplifyDomainAssociationCertificateSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AmplifyDomainAssociationCertificateSettings | undefined;
    set internalValue(value: AmplifyDomainAssociationCertificateSettings | undefined);
    get certificateVerificationDnsRecord(): string;
    private _customCertificateArn?;
    get customCertificateArn(): string;
    set customCertificateArn(value: string);
    resetCustomCertificateArn(): void;
    get customCertificateArnInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface AmplifyDomainAssociationSubDomain {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#branch_name AmplifyDomainAssociation#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#prefix AmplifyDomainAssociation#prefix}
    */
    readonly prefix: string;
}
export declare function amplifyDomainAssociationSubDomainToTerraform(struct?: AmplifyDomainAssociationSubDomain | cdktf.IResolvable): any;
export declare function amplifyDomainAssociationSubDomainToHclTerraform(struct?: AmplifyDomainAssociationSubDomain | cdktf.IResolvable): any;
export declare class AmplifyDomainAssociationSubDomainOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmplifyDomainAssociationSubDomain | cdktf.IResolvable | undefined;
    set internalValue(value: AmplifyDomainAssociationSubDomain | cdktf.IResolvable | undefined);
    private _branchName?;
    get branchName(): string;
    set branchName(value: string);
    get branchNameInput(): string | undefined;
    get dnsRecord(): string;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    get prefixInput(): string | undefined;
    get verified(): cdktf.IResolvable;
}
export declare class AmplifyDomainAssociationSubDomainList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmplifyDomainAssociationSubDomain[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmplifyDomainAssociationSubDomainOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association aws_amplify_domain_association}
*/
export declare class AmplifyDomainAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_amplify_domain_association";
    /**
    * Generates CDKTF code for importing a AmplifyDomainAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmplifyDomainAssociation to import
    * @param importFromId The id of the existing AmplifyDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmplifyDomainAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_domain_association aws_amplify_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyDomainAssociationConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string | undefined;
    get arn(): string;
    get certificateVerificationDnsRecord(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _enableAutoSubDomain?;
    get enableAutoSubDomain(): boolean | cdktf.IResolvable;
    set enableAutoSubDomain(value: boolean | cdktf.IResolvable);
    resetEnableAutoSubDomain(): void;
    get enableAutoSubDomainInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _waitForVerification?;
    get waitForVerification(): boolean | cdktf.IResolvable;
    set waitForVerification(value: boolean | cdktf.IResolvable);
    resetWaitForVerification(): void;
    get waitForVerificationInput(): boolean | cdktf.IResolvable | undefined;
    private _certificateSettings;
    get certificateSettings(): AmplifyDomainAssociationCertificateSettingsOutputReference;
    putCertificateSettings(value: AmplifyDomainAssociationCertificateSettings): void;
    resetCertificateSettings(): void;
    get certificateSettingsInput(): AmplifyDomainAssociationCertificateSettings | undefined;
    private _subDomain;
    get subDomain(): AmplifyDomainAssociationSubDomainList;
    putSubDomain(value: AmplifyDomainAssociationSubDomain[] | cdktf.IResolvable): void;
    get subDomainInput(): cdktf.IResolvable | AmplifyDomainAssociationSubDomain[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
