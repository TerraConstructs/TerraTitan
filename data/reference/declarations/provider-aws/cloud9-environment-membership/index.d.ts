/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Cloud9EnvironmentMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloud9_environment_membership#environment_id Cloud9EnvironmentMembership#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloud9_environment_membership#id Cloud9EnvironmentMembership#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloud9_environment_membership#permissions Cloud9EnvironmentMembership#permissions}
    */
    readonly permissions: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloud9_environment_membership#user_arn Cloud9EnvironmentMembership#user_arn}
    */
    readonly userArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloud9_environment_membership aws_cloud9_environment_membership}
*/
export declare class Cloud9EnvironmentMembership extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloud9_environment_membership";
    /**
    * Generates CDKTF code for importing a Cloud9EnvironmentMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Cloud9EnvironmentMembership to import
    * @param importFromId The id of the existing Cloud9EnvironmentMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloud9_environment_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Cloud9EnvironmentMembership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloud9_environment_membership aws_cloud9_environment_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Cloud9EnvironmentMembershipConfig
    */
    constructor(scope: Construct, id: string, config: Cloud9EnvironmentMembershipConfig);
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _permissions?;
    get permissions(): string;
    set permissions(value: string);
    get permissionsInput(): string | undefined;
    private _userArn?;
    get userArn(): string;
    set userArn(value: string);
    get userArnInput(): string | undefined;
    get userId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
