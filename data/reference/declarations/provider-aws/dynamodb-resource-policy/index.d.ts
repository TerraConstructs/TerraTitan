/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_resource_policy#confirm_remove_self_resource_access DynamodbResourcePolicy#confirm_remove_self_resource_access}
    */
    readonly confirmRemoveSelfResourceAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_resource_policy#policy DynamodbResourcePolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_resource_policy#resource_arn DynamodbResourcePolicy#resource_arn}
    */
    readonly resourceArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_resource_policy aws_dynamodb_resource_policy}
*/
export declare class DynamodbResourcePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_resource_policy";
    /**
    * Generates CDKTF code for importing a DynamodbResourcePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbResourcePolicy to import
    * @param importFromId The id of the existing DynamodbResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbResourcePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_resource_policy aws_dynamodb_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbResourcePolicyConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbResourcePolicyConfig);
    private _confirmRemoveSelfResourceAccess?;
    get confirmRemoveSelfResourceAccess(): boolean | cdktf.IResolvable;
    set confirmRemoveSelfResourceAccess(value: boolean | cdktf.IResolvable);
    resetConfirmRemoveSelfResourceAccess(): void;
    get confirmRemoveSelfResourceAccessInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    get revisionId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
