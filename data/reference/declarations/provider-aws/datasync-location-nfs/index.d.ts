/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#id DatasyncLocationNfs#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#tags DatasyncLocationNfs#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * mount_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}
    */
    readonly mountOptions?: DatasyncLocationNfsMountOptions;
    /**
    * on_prem_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}
    */
    readonly onPremConfig: DatasyncLocationNfsOnPremConfig;
}
export interface DatasyncLocationNfsMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#version DatasyncLocationNfs#version}
    */
    readonly version?: string;
}
export declare function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptionsOutputReference | DatasyncLocationNfsMountOptions): any;
export declare function datasyncLocationNfsMountOptionsToHclTerraform(struct?: DatasyncLocationNfsMountOptionsOutputReference | DatasyncLocationNfsMountOptions): any;
export declare class DatasyncLocationNfsMountOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationNfsMountOptions | undefined;
    set internalValue(value: DatasyncLocationNfsMountOptions | undefined);
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
}
export interface DatasyncLocationNfsOnPremConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}
    */
    readonly agentArns: string[];
}
export declare function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfigOutputReference | DatasyncLocationNfsOnPremConfig): any;
export declare function datasyncLocationNfsOnPremConfigToHclTerraform(struct?: DatasyncLocationNfsOnPremConfigOutputReference | DatasyncLocationNfsOnPremConfig): any;
export declare class DatasyncLocationNfsOnPremConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationNfsOnPremConfig | undefined;
    set internalValue(value: DatasyncLocationNfsOnPremConfig | undefined);
    private _agentArns?;
    get agentArns(): string[];
    set agentArns(value: string[]);
    get agentArnsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs aws_datasync_location_nfs}
*/
export declare class DatasyncLocationNfs extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_nfs";
    /**
    * Generates CDKTF code for importing a DatasyncLocationNfs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationNfs to import
    * @param importFromId The id of the existing DatasyncLocationNfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationNfs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_nfs aws_datasync_location_nfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationNfsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _mountOptions;
    get mountOptions(): DatasyncLocationNfsMountOptionsOutputReference;
    putMountOptions(value: DatasyncLocationNfsMountOptions): void;
    resetMountOptions(): void;
    get mountOptionsInput(): DatasyncLocationNfsMountOptions | undefined;
    private _onPremConfig;
    get onPremConfig(): DatasyncLocationNfsOnPremConfigOutputReference;
    putOnPremConfig(value: DatasyncLocationNfsOnPremConfig): void;
    get onPremConfigInput(): DatasyncLocationNfsOnPremConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
