/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspaceswebBrowserSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_browser_settings#additional_encryption_context WorkspaceswebBrowserSettings#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_browser_settings#browser_policy WorkspaceswebBrowserSettings#browser_policy}
    */
    readonly browserPolicy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_browser_settings#customer_managed_key WorkspaceswebBrowserSettings#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_browser_settings#tags WorkspaceswebBrowserSettings#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_browser_settings aws_workspacesweb_browser_settings}
*/
export declare class WorkspaceswebBrowserSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspacesweb_browser_settings";
    /**
    * Generates CDKTF code for importing a WorkspaceswebBrowserSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspaceswebBrowserSettings to import
    * @param importFromId The id of the existing WorkspaceswebBrowserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_browser_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspaceswebBrowserSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_browser_settings aws_workspacesweb_browser_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspaceswebBrowserSettingsConfig
    */
    constructor(scope: Construct, id: string, config: WorkspaceswebBrowserSettingsConfig);
    private _additionalEncryptionContext?;
    get additionalEncryptionContext(): {
        [key: string]: string;
    };
    set additionalEncryptionContext(value: {
        [key: string]: string;
    });
    resetAdditionalEncryptionContext(): void;
    get additionalEncryptionContextInput(): {
        [key: string]: string;
    } | undefined;
    get associatedPortalArns(): string[];
    private _browserPolicy?;
    get browserPolicy(): string;
    set browserPolicy(value: string);
    get browserPolicyInput(): string | undefined;
    get browserSettingsArn(): string;
    private _customerManagedKey?;
    get customerManagedKey(): string;
    set customerManagedKey(value: string);
    resetCustomerManagedKey(): void;
    get customerManagedKeyInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
