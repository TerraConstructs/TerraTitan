/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#agent_arns DatasyncLocationSmb#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#domain DatasyncLocationSmb#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#id DatasyncLocationSmb#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#password DatasyncLocationSmb#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#server_hostname DatasyncLocationSmb#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#subdirectory DatasyncLocationSmb#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#tags DatasyncLocationSmb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#tags_all DatasyncLocationSmb#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#user DatasyncLocationSmb#user}
    */
    readonly user: string;
    /**
    * mount_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#mount_options DatasyncLocationSmb#mount_options}
    */
    readonly mountOptions?: DatasyncLocationSmbMountOptions;
}
export interface DatasyncLocationSmbMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#version DatasyncLocationSmb#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptionsOutputReference | DatasyncLocationSmbMountOptions): any;
export declare function datasyncLocationSmbMountOptionsToHclTerraform(struct?: DatasyncLocationSmbMountOptionsOutputReference | DatasyncLocationSmbMountOptions): any;
export declare class DatasyncLocationSmbMountOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationSmbMountOptions | undefined;
    set internalValue(value: DatasyncLocationSmbMountOptions | undefined);
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb aws_datasync_location_smb}
*/
export declare class DatasyncLocationSmb extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_smb";
    /**
    * Generates CDKTF code for importing a DatasyncLocationSmb resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationSmb to import
    * @param importFromId The id of the existing DatasyncLocationSmb that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationSmb to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_smb aws_datasync_location_smb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationSmbConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[] | undefined;
    get arn(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    get passwordInput(): string | undefined;
    private _serverHostname?;
    get serverHostname(): string;
    set serverHostname(value: string);
    get serverHostnameInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _user?;
    get user(): string;
    set user(value: string);
    get userInput(): string | undefined;
    private _mountOptions;
    get mountOptions(): DatasyncLocationSmbMountOptionsOutputReference;
    putMountOptions(value: DatasyncLocationSmbMountOptions): void;
    resetMountOptions(): void;
    get mountOptionsInput(): DatasyncLocationSmbMountOptions | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
