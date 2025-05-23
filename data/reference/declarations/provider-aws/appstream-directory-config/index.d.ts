/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppstreamDirectoryConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config#directory_name AppstreamDirectoryConfig#directory_name}
    */
    readonly directoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config#id AppstreamDirectoryConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config#organizational_unit_distinguished_names AppstreamDirectoryConfig#organizational_unit_distinguished_names}
    */
    readonly organizationalUnitDistinguishedNames: string[];
    /**
    * service_account_credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config#service_account_credentials AppstreamDirectoryConfig#service_account_credentials}
    */
    readonly serviceAccountCredentials: AppstreamDirectoryConfigServiceAccountCredentials;
}
export interface AppstreamDirectoryConfigServiceAccountCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config#account_name AppstreamDirectoryConfig#account_name}
    */
    readonly accountName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config#account_password AppstreamDirectoryConfig#account_password}
    */
    readonly accountPassword: string;
}
export declare function appstreamDirectoryConfigServiceAccountCredentialsToTerraform(struct?: AppstreamDirectoryConfigServiceAccountCredentialsOutputReference | AppstreamDirectoryConfigServiceAccountCredentials): any;
export declare function appstreamDirectoryConfigServiceAccountCredentialsToHclTerraform(struct?: AppstreamDirectoryConfigServiceAccountCredentialsOutputReference | AppstreamDirectoryConfigServiceAccountCredentials): any;
export declare class AppstreamDirectoryConfigServiceAccountCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppstreamDirectoryConfigServiceAccountCredentials | undefined;
    set internalValue(value: AppstreamDirectoryConfigServiceAccountCredentials | undefined);
    private _accountName?;
    get accountName(): string;
    set accountName(value: string);
    get accountNameInput(): string | undefined;
    private _accountPassword?;
    get accountPassword(): string;
    set accountPassword(value: string);
    get accountPasswordInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config aws_appstream_directory_config}
*/
export declare class AppstreamDirectoryConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appstream_directory_config";
    /**
    * Generates CDKTF code for importing a AppstreamDirectoryConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppstreamDirectoryConfig to import
    * @param importFromId The id of the existing AppstreamDirectoryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppstreamDirectoryConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_directory_config aws_appstream_directory_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamDirectoryConfigConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamDirectoryConfigConfig);
    get createdTime(): string;
    private _directoryName?;
    get directoryName(): string;
    set directoryName(value: string);
    get directoryNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _organizationalUnitDistinguishedNames?;
    get organizationalUnitDistinguishedNames(): string[];
    set organizationalUnitDistinguishedNames(value: string[]);
    get organizationalUnitDistinguishedNamesInput(): string[] | undefined;
    private _serviceAccountCredentials;
    get serviceAccountCredentials(): AppstreamDirectoryConfigServiceAccountCredentialsOutputReference;
    putServiceAccountCredentials(value: AppstreamDirectoryConfigServiceAccountCredentials): void;
    get serviceAccountCredentialsInput(): AppstreamDirectoryConfigServiceAccountCredentials | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
