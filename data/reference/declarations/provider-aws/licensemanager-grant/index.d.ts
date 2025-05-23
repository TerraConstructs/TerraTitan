/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LicensemanagerGrantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Allowed operations for the grant. This is a subset of the allowed operations on the license.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant#allowed_operations LicensemanagerGrant#allowed_operations}
    */
    readonly allowedOperations: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant#id LicensemanagerGrant#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * License ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant#license_arn LicensemanagerGrant#license_arn}
    */
    readonly licenseArn: string;
    /**
    * Name of the grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant#name LicensemanagerGrant#name}
    */
    readonly name: string;
    /**
    * The grantee principal ARN. The target account for the grant in the form of the ARN for an account principal of the root user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant#principal LicensemanagerGrant#principal}
    */
    readonly principal: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant aws_licensemanager_grant}
*/
export declare class LicensemanagerGrant extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_licensemanager_grant";
    /**
    * Generates CDKTF code for importing a LicensemanagerGrant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LicensemanagerGrant to import
    * @param importFromId The id of the existing LicensemanagerGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LicensemanagerGrant to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant aws_licensemanager_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerGrantConfig
    */
    constructor(scope: Construct, id: string, config: LicensemanagerGrantConfig);
    private _allowedOperations?;
    get allowedOperations(): string[];
    set allowedOperations(value: string[]);
    get allowedOperationsInput(): string[] | undefined;
    get arn(): string;
    get homeRegion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _licenseArn?;
    get licenseArn(): string;
    set licenseArn(value: string);
    get licenseArnInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get parentArn(): string;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    get status(): string;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
