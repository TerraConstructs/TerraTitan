/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LicensemanagerGrantAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Amazon Resource Name (ARN) of the grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant_accepter#grant_arn LicensemanagerGrantAccepter#grant_arn}
    */
    readonly grantArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant_accepter#id LicensemanagerGrantAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant_accepter aws_licensemanager_grant_accepter}
*/
export declare class LicensemanagerGrantAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_licensemanager_grant_accepter";
    /**
    * Generates CDKTF code for importing a LicensemanagerGrantAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LicensemanagerGrantAccepter to import
    * @param importFromId The id of the existing LicensemanagerGrantAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LicensemanagerGrantAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/licensemanager_grant_accepter aws_licensemanager_grant_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LicensemanagerGrantAccepterConfig
    */
    constructor(scope: Construct, id: string, config: LicensemanagerGrantAccepterConfig);
    get allowedOperations(): string[];
    private _grantArn?;
    get grantArn(): string;
    set grantArn(value: string);
    get grantArnInput(): string | undefined;
    get homeRegion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get licenseArn(): string;
    get name(): string;
    get parentArn(): string;
    get principal(): string;
    get status(): string;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
