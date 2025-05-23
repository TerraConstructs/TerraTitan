/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_policy_attachment#id OrganizationsPolicyAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_policy_attachment#policy_id OrganizationsPolicyAttachment#policy_id}
    */
    readonly policyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_policy_attachment#skip_destroy OrganizationsPolicyAttachment#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_policy_attachment#target_id OrganizationsPolicyAttachment#target_id}
    */
    readonly targetId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_policy_attachment aws_organizations_policy_attachment}
*/
export declare class OrganizationsPolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_organizations_policy_attachment";
    /**
    * Generates CDKTF code for importing a OrganizationsPolicyAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationsPolicyAttachment to import
    * @param importFromId The id of the existing OrganizationsPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_policy_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationsPolicyAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_policy_attachment aws_organizations_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsPolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationsPolicyAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string | undefined;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _targetId?;
    get targetId(): string;
    set targetId(value: string);
    get targetIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
