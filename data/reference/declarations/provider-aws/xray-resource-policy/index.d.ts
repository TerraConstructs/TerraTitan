/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface XrayResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/xray_resource_policy#bypass_policy_lockout_check XrayResourcePolicy#bypass_policy_lockout_check}
    */
    readonly bypassPolicyLockoutCheck?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/xray_resource_policy#policy_document XrayResourcePolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/xray_resource_policy#policy_name XrayResourcePolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/xray_resource_policy#policy_revision_id XrayResourcePolicy#policy_revision_id}
    */
    readonly policyRevisionId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/xray_resource_policy aws_xray_resource_policy}
*/
export declare class XrayResourcePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_xray_resource_policy";
    /**
    * Generates CDKTF code for importing a XrayResourcePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the XrayResourcePolicy to import
    * @param importFromId The id of the existing XrayResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/xray_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the XrayResourcePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/xray_resource_policy aws_xray_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options XrayResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: XrayResourcePolicyConfig);
    private _bypassPolicyLockoutCheck?;
    get bypassPolicyLockoutCheck(): boolean | cdktf.IResolvable;
    set bypassPolicyLockoutCheck(value: boolean | cdktf.IResolvable);
    resetBypassPolicyLockoutCheck(): void;
    get bypassPolicyLockoutCheckInput(): boolean | cdktf.IResolvable | undefined;
    get lastUpdatedTime(): string;
    private _policyDocument?;
    get policyDocument(): string;
    set policyDocument(value: string);
    get policyDocumentInput(): string | undefined;
    private _policyName?;
    get policyName(): string;
    set policyName(value: string);
    get policyNameInput(): string | undefined;
    private _policyRevisionId?;
    get policyRevisionId(): string;
    set policyRevisionId(value: string);
    resetPolicyRevisionId(): void;
    get policyRevisionIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
