/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Set this parameter to true to confirm that you want to remove your permissions to change the policy of this resource in the future. */
    readonly confirmRemoveSelfResourceAccess?: boolean | cdktf.IResolvable;
    /** (Required) n Amazon Web Services resource-based policy document in JSON format. The maximum size supported for a resource-based policy document is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit. For a full list of all considerations that you should keep in mind while attaching a resource-based policy, see Resource-based policy considerations. */
    readonly policy: string;
    /** (Required) The Amazon Resource Name (ARN) of the DynamoDB resource to which the policy will be attached. The resources you can specify include tables and streams. You can control index permissions using the base table's policy. To specify the same permission level for your table and its indexes, you can provide both the table and index Amazon Resource Name (ARN)s in the Resource field of a given Statement in your policy document. Alternatively, to specify different permissions for your table, indexes, or both, you can define multiple Statement fields in your policy document. */
    readonly resourceArn: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_resource_policy aws_dynamodb_resource_policy}
*/
export declare class DynamodbResourcePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_resource_policy";
    /**
    * Generates CDKTF code for importing a DynamodbResourcePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbResourcePolicy to import
    * @param importFromId The id of the existing DynamodbResourcePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_resource_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbResourcePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/dynamodb_resource_policy aws_dynamodb_resource_policy} Resource
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
