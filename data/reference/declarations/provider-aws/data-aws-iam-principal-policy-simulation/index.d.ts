/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamPrincipalPolicySimulationConfig extends cdktf.TerraformMetaArguments {
    /**
    * One or more names of actions, like "iam:CreateUser", that should be included in the simulation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#action_names DataAwsIamPrincipalPolicySimulation#action_names}
    */
    readonly actionNames: string[];
    /**
    * Additional principal-based policies to use in the simulation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#additional_policies_json DataAwsIamPrincipalPolicySimulation#additional_policies_json}
    */
    readonly additionalPoliciesJson?: string[];
    /**
    * ARN of a user to use as the caller of the simulated requests. If not specified, defaults to the principal specified in policy_source_arn, if it is a user ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#caller_arn DataAwsIamPrincipalPolicySimulation#caller_arn}
    */
    readonly callerArn?: string;
    /**
    * Additional permission boundary policies to use in the simulation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#permissions_boundary_policies_json DataAwsIamPrincipalPolicySimulation#permissions_boundary_policies_json}
    */
    readonly permissionsBoundaryPoliciesJson?: string[];
    /**
    * ARN of the principal (e.g. user, role) whose existing configured access policies will be used as the basis for the simulation. If you specify a role ARN here, you can also set caller_arn to simulate a particular user acting with the given role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#policy_source_arn DataAwsIamPrincipalPolicySimulation#policy_source_arn}
    */
    readonly policySourceArn: string;
    /**
    * ARNs of specific resources to use as the targets of the specified actions during simulation. If not specified, the simulator assumes "*" which represents general access across all resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#resource_arns DataAwsIamPrincipalPolicySimulation#resource_arns}
    */
    readonly resourceArns?: string[];
    /**
    * Specifies the type of simulation to run. Some API operations need a particular resource handling option in order to produce a correct reesult.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#resource_handling_option DataAwsIamPrincipalPolicySimulation#resource_handling_option}
    */
    readonly resourceHandlingOption?: string;
    /**
    * An AWS account ID to use as the simulated owner for any resource whose ARN does not include a specific owner account ID. Defaults to the account given as part of caller_arn.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#resource_owner_account_id DataAwsIamPrincipalPolicySimulation#resource_owner_account_id}
    */
    readonly resourceOwnerAccountId?: string;
    /**
    * A resource policy to associate with all of the target resources for simulation purposes. The policy simulator does not automatically retrieve resource-level policies, so if a resource policy is crucial to your test then you must specify here the same policy document associated with your target resource(s).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#resource_policy_json DataAwsIamPrincipalPolicySimulation#resource_policy_json}
    */
    readonly resourcePolicyJson?: string;
    /**
    * context block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#context DataAwsIamPrincipalPolicySimulation#context}
    */
    readonly context?: DataAwsIamPrincipalPolicySimulationContext[] | cdktf.IResolvable;
}
export interface DataAwsIamPrincipalPolicySimulationResultsMatchedStatements {
}
export declare function dataAwsIamPrincipalPolicySimulationResultsMatchedStatementsToTerraform(struct?: DataAwsIamPrincipalPolicySimulationResultsMatchedStatements): any;
export declare function dataAwsIamPrincipalPolicySimulationResultsMatchedStatementsToHclTerraform(struct?: DataAwsIamPrincipalPolicySimulationResultsMatchedStatements): any;
export declare class DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamPrincipalPolicySimulationResultsMatchedStatements | undefined;
    set internalValue(value: DataAwsIamPrincipalPolicySimulationResultsMatchedStatements | undefined);
    get sourcePolicyId(): string;
    get sourcePolicyType(): string;
}
export declare class DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsOutputReference;
}
export interface DataAwsIamPrincipalPolicySimulationResults {
}
export declare function dataAwsIamPrincipalPolicySimulationResultsToTerraform(struct?: DataAwsIamPrincipalPolicySimulationResults): any;
export declare function dataAwsIamPrincipalPolicySimulationResultsToHclTerraform(struct?: DataAwsIamPrincipalPolicySimulationResults): any;
export declare class DataAwsIamPrincipalPolicySimulationResultsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamPrincipalPolicySimulationResults | undefined;
    set internalValue(value: DataAwsIamPrincipalPolicySimulationResults | undefined);
    get actionName(): string;
    get allowed(): cdktf.IResolvable;
    get decision(): string;
    private _decisionDetails;
    get decisionDetails(): cdktf.StringMap;
    private _matchedStatements;
    get matchedStatements(): DataAwsIamPrincipalPolicySimulationResultsMatchedStatementsList;
    get missingContextKeys(): string[];
    get resourceArn(): string;
}
export declare class DataAwsIamPrincipalPolicySimulationResultsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamPrincipalPolicySimulationResultsOutputReference;
}
export interface DataAwsIamPrincipalPolicySimulationContext {
    /**
    * The key name of the context entry, such as "aws:CurrentTime".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#key DataAwsIamPrincipalPolicySimulation#key}
    */
    readonly key: string;
    /**
    * The type that the simulator should use to interpret the strings given in argument "values".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#type DataAwsIamPrincipalPolicySimulation#type}
    */
    readonly type: string;
    /**
    * One or more values to assign to the context key, given as a string in a syntax appropriate for the selected value type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#values DataAwsIamPrincipalPolicySimulation#values}
    */
    readonly values: string[];
}
export declare function dataAwsIamPrincipalPolicySimulationContextToTerraform(struct?: DataAwsIamPrincipalPolicySimulationContext | cdktf.IResolvable): any;
export declare function dataAwsIamPrincipalPolicySimulationContextToHclTerraform(struct?: DataAwsIamPrincipalPolicySimulationContext | cdktf.IResolvable): any;
export declare class DataAwsIamPrincipalPolicySimulationContextOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsIamPrincipalPolicySimulationContext | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsIamPrincipalPolicySimulationContext | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsIamPrincipalPolicySimulationContextList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsIamPrincipalPolicySimulationContext[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsIamPrincipalPolicySimulationContextOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation aws_iam_principal_policy_simulation}
*/
export declare class DataAwsIamPrincipalPolicySimulation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_iam_principal_policy_simulation";
    /**
    * Generates CDKTF code for importing a DataAwsIamPrincipalPolicySimulation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIamPrincipalPolicySimulation to import
    * @param importFromId The id of the existing DataAwsIamPrincipalPolicySimulation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIamPrincipalPolicySimulation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_principal_policy_simulation aws_iam_principal_policy_simulation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamPrincipalPolicySimulationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamPrincipalPolicySimulationConfig);
    private _actionNames?;
    get actionNames(): string[];
    set actionNames(value: string[]);
    get actionNamesInput(): string[] | undefined;
    private _additionalPoliciesJson?;
    get additionalPoliciesJson(): string[];
    set additionalPoliciesJson(value: string[]);
    resetAdditionalPoliciesJson(): void;
    get additionalPoliciesJsonInput(): string[] | undefined;
    get allAllowed(): cdktf.IResolvable;
    private _callerArn?;
    get callerArn(): string;
    set callerArn(value: string);
    resetCallerArn(): void;
    get callerArnInput(): string | undefined;
    get id(): string;
    private _permissionsBoundaryPoliciesJson?;
    get permissionsBoundaryPoliciesJson(): string[];
    set permissionsBoundaryPoliciesJson(value: string[]);
    resetPermissionsBoundaryPoliciesJson(): void;
    get permissionsBoundaryPoliciesJsonInput(): string[] | undefined;
    private _policySourceArn?;
    get policySourceArn(): string;
    set policySourceArn(value: string);
    get policySourceArnInput(): string | undefined;
    private _resourceArns?;
    get resourceArns(): string[];
    set resourceArns(value: string[]);
    resetResourceArns(): void;
    get resourceArnsInput(): string[] | undefined;
    private _resourceHandlingOption?;
    get resourceHandlingOption(): string;
    set resourceHandlingOption(value: string);
    resetResourceHandlingOption(): void;
    get resourceHandlingOptionInput(): string | undefined;
    private _resourceOwnerAccountId?;
    get resourceOwnerAccountId(): string;
    set resourceOwnerAccountId(value: string);
    resetResourceOwnerAccountId(): void;
    get resourceOwnerAccountIdInput(): string | undefined;
    private _resourcePolicyJson?;
    get resourcePolicyJson(): string;
    set resourcePolicyJson(value: string);
    resetResourcePolicyJson(): void;
    get resourcePolicyJsonInput(): string | undefined;
    private _results;
    get results(): DataAwsIamPrincipalPolicySimulationResultsList;
    private _context;
    get context(): DataAwsIamPrincipalPolicySimulationContextList;
    putContext(value: DataAwsIamPrincipalPolicySimulationContext[] | cdktf.IResolvable): void;
    resetContext(): void;
    get contextInput(): cdktf.IResolvable | DataAwsIamPrincipalPolicySimulationContext[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
