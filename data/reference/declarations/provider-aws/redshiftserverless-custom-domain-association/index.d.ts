/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftserverlessCustomDomainAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_certificate_arn RedshiftserverlessCustomDomainAssociation#custom_domain_certificate_arn}
    */
    readonly customDomainCertificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_custom_domain_association#custom_domain_name RedshiftserverlessCustomDomainAssociation#custom_domain_name}
    */
    readonly customDomainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_custom_domain_association#workgroup_name RedshiftserverlessCustomDomainAssociation#workgroup_name}
    */
    readonly workgroupName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_custom_domain_association aws_redshiftserverless_custom_domain_association}
*/
export declare class RedshiftserverlessCustomDomainAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshiftserverless_custom_domain_association";
    /**
    * Generates CDKTF code for importing a RedshiftserverlessCustomDomainAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftserverlessCustomDomainAssociation to import
    * @param importFromId The id of the existing RedshiftserverlessCustomDomainAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_custom_domain_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftserverlessCustomDomainAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_custom_domain_association aws_redshiftserverless_custom_domain_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftserverlessCustomDomainAssociationConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftserverlessCustomDomainAssociationConfig);
    private _customDomainCertificateArn?;
    get customDomainCertificateArn(): string;
    set customDomainCertificateArn(value: string);
    get customDomainCertificateArnInput(): string | undefined;
    get customDomainCertificateExpiryTime(): string;
    private _customDomainName?;
    get customDomainName(): string;
    set customDomainName(value: string);
    get customDomainNameInput(): string | undefined;
    get id(): string;
    private _workgroupName?;
    get workgroupName(): string;
    set workgroupName(value: string);
    get workgroupNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
