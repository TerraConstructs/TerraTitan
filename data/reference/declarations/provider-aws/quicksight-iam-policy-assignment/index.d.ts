/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QuicksightIamPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#assignment_name QuicksightIamPolicyAssignment#assignment_name}
    */
    readonly assignmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#assignment_status QuicksightIamPolicyAssignment#assignment_status}
    */
    readonly assignmentStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#aws_account_id QuicksightIamPolicyAssignment#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#namespace QuicksightIamPolicyAssignment#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#policy_arn QuicksightIamPolicyAssignment#policy_arn}
    */
    readonly policyArn?: string;
    /**
    * identities block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#identities QuicksightIamPolicyAssignment#identities}
    */
    readonly identities?: QuicksightIamPolicyAssignmentIdentities[] | cdktf.IResolvable;
}
export interface QuicksightIamPolicyAssignmentIdentities {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#group QuicksightIamPolicyAssignment#group}
    */
    readonly group?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#user QuicksightIamPolicyAssignment#user}
    */
    readonly user?: string[];
}
export declare function quicksightIamPolicyAssignmentIdentitiesToTerraform(struct?: QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable): any;
export declare function quicksightIamPolicyAssignmentIdentitiesToHclTerraform(struct?: QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable): any;
export declare class QuicksightIamPolicyAssignmentIdentitiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable | undefined;
    set internalValue(value: QuicksightIamPolicyAssignmentIdentities | cdktf.IResolvable | undefined);
    private _group?;
    get group(): string[];
    set group(value: string[]);
    resetGroup(): void;
    get groupInput(): string[] | undefined;
    private _user?;
    get user(): string[];
    set user(value: string[]);
    resetUser(): void;
    get userInput(): string[] | undefined;
}
export declare class QuicksightIamPolicyAssignmentIdentitiesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QuicksightIamPolicyAssignmentIdentities[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QuicksightIamPolicyAssignmentIdentitiesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment}
*/
export declare class QuicksightIamPolicyAssignment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_quicksight_iam_policy_assignment";
    /**
    * Generates CDKTF code for importing a QuicksightIamPolicyAssignment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QuicksightIamPolicyAssignment to import
    * @param importFromId The id of the existing QuicksightIamPolicyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QuicksightIamPolicyAssignment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/quicksight_iam_policy_assignment aws_quicksight_iam_policy_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QuicksightIamPolicyAssignmentConfig
    */
    constructor(scope: Construct, id: string, config: QuicksightIamPolicyAssignmentConfig);
    get assignmentId(): string;
    private _assignmentName?;
    get assignmentName(): string;
    set assignmentName(value: string);
    get assignmentNameInput(): string | undefined;
    private _assignmentStatus?;
    get assignmentStatus(): string;
    set assignmentStatus(value: string);
    get assignmentStatusInput(): string | undefined;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get id(): string;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    resetPolicyArn(): void;
    get policyArnInput(): string | undefined;
    private _identities;
    get identities(): QuicksightIamPolicyAssignmentIdentitiesList;
    putIdentities(value: QuicksightIamPolicyAssignmentIdentities[] | cdktf.IResolvable): void;
    resetIdentities(): void;
    get identitiesInput(): cdktf.IResolvable | QuicksightIamPolicyAssignmentIdentities[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
