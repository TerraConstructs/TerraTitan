/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspaceswebIpAccessSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#additional_encryption_context WorkspaceswebIpAccessSettings#additional_encryption_context}
    */
    readonly additionalEncryptionContext?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#customer_managed_key WorkspaceswebIpAccessSettings#customer_managed_key}
    */
    readonly customerManagedKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#display_name WorkspaceswebIpAccessSettings#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#tags WorkspaceswebIpAccessSettings#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * ip_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#ip_rule WorkspaceswebIpAccessSettings#ip_rule}
    */
    readonly ipRule?: WorkspaceswebIpAccessSettingsIpRule[] | cdktf.IResolvable;
}
export interface WorkspaceswebIpAccessSettingsIpRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#description WorkspaceswebIpAccessSettings#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#ip_range WorkspaceswebIpAccessSettings#ip_range}
    */
    readonly ipRange: string;
}
export declare function workspaceswebIpAccessSettingsIpRuleToTerraform(struct?: WorkspaceswebIpAccessSettingsIpRule | cdktf.IResolvable): any;
export declare function workspaceswebIpAccessSettingsIpRuleToHclTerraform(struct?: WorkspaceswebIpAccessSettingsIpRule | cdktf.IResolvable): any;
export declare class WorkspaceswebIpAccessSettingsIpRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): WorkspaceswebIpAccessSettingsIpRule | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspaceswebIpAccessSettingsIpRule | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _ipRange?;
    get ipRange(): string;
    set ipRange(value: string);
    get ipRangeInput(): string | undefined;
}
export declare class WorkspaceswebIpAccessSettingsIpRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: WorkspaceswebIpAccessSettingsIpRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): WorkspaceswebIpAccessSettingsIpRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings aws_workspacesweb_ip_access_settings}
*/
export declare class WorkspaceswebIpAccessSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspacesweb_ip_access_settings";
    /**
    * Generates CDKTF code for importing a WorkspaceswebIpAccessSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspaceswebIpAccessSettings to import
    * @param importFromId The id of the existing WorkspaceswebIpAccessSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspaceswebIpAccessSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_ip_access_settings aws_workspacesweb_ip_access_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspaceswebIpAccessSettingsConfig
    */
    constructor(scope: Construct, id: string, config: WorkspaceswebIpAccessSettingsConfig);
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
    private _customerManagedKey?;
    get customerManagedKey(): string;
    set customerManagedKey(value: string);
    resetCustomerManagedKey(): void;
    get customerManagedKeyInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
    get ipAccessSettingsArn(): string;
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
    private _ipRule;
    get ipRule(): WorkspaceswebIpAccessSettingsIpRuleList;
    putIpRule(value: WorkspaceswebIpAccessSettingsIpRule[] | cdktf.IResolvable): void;
    resetIpRule(): void;
    get ipRuleInput(): cdktf.IResolvable | WorkspaceswebIpAccessSettingsIpRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
