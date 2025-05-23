/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LicensemanagerAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_association#id LicensemanagerAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_association#license_configuration_arn LicensemanagerAssociation#license_configuration_arn}
    */
    readonly licenseConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_association#resource_arn LicensemanagerAssociation#resource_arn}
    */
    readonly resourceArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_association aws_licensemanager_association}
*/
export declare class LicensemanagerAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_licensemanager_association";
    /**
    * Generates CDKTF code for importing a LicensemanagerAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LicensemanagerAssociation to import
    * @param importFromId The id of the existing LicensemanagerAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LicensemanagerAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_association aws_licensemanager_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerAssociationConfig
    */
    constructor(scope: Construct, id: string, config: LicensemanagerAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _licenseConfigurationArn?;
    get licenseConfigurationArn(): string;
    set licenseConfigurationArn(value: string);
    get licenseConfigurationArnInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
