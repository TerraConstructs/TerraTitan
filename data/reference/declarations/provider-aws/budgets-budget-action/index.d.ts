/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BudgetsBudgetActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#account_id BudgetsBudgetAction#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#action_type BudgetsBudgetAction#action_type}
    */
    readonly actionType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#approval_model BudgetsBudgetAction#approval_model}
    */
    readonly approvalModel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#budget_name BudgetsBudgetAction#budget_name}
    */
    readonly budgetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#execution_role_arn BudgetsBudgetAction#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#id BudgetsBudgetAction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#notification_type BudgetsBudgetAction#notification_type}
    */
    readonly notificationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#tags BudgetsBudgetAction#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#tags_all BudgetsBudgetAction#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * action_threshold block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#action_threshold BudgetsBudgetAction#action_threshold}
    */
    readonly actionThreshold: BudgetsBudgetActionActionThreshold;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#definition BudgetsBudgetAction#definition}
    */
    readonly definition: BudgetsBudgetActionDefinition;
    /**
    * subscriber block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#subscriber BudgetsBudgetAction#subscriber}
    */
    readonly subscriber: BudgetsBudgetActionSubscriber[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#timeouts BudgetsBudgetAction#timeouts}
    */
    readonly timeouts?: BudgetsBudgetActionTimeouts;
}
export interface BudgetsBudgetActionActionThreshold {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#action_threshold_type BudgetsBudgetAction#action_threshold_type}
    */
    readonly actionThresholdType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#action_threshold_value BudgetsBudgetAction#action_threshold_value}
    */
    readonly actionThresholdValue: number;
}
export declare function budgetsBudgetActionActionThresholdToTerraform(struct?: BudgetsBudgetActionActionThresholdOutputReference | BudgetsBudgetActionActionThreshold): any;
export declare function budgetsBudgetActionActionThresholdToHclTerraform(struct?: BudgetsBudgetActionActionThresholdOutputReference | BudgetsBudgetActionActionThreshold): any;
export declare class BudgetsBudgetActionActionThresholdOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetActionActionThreshold | undefined;
    set internalValue(value: BudgetsBudgetActionActionThreshold | undefined);
    private _actionThresholdType?;
    get actionThresholdType(): string;
    set actionThresholdType(value: string);
    get actionThresholdTypeInput(): string | undefined;
    private _actionThresholdValue?;
    get actionThresholdValue(): number;
    set actionThresholdValue(value: number);
    get actionThresholdValueInput(): number | undefined;
}
export interface BudgetsBudgetActionDefinitionIamActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#groups BudgetsBudgetAction#groups}
    */
    readonly groups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#policy_arn BudgetsBudgetAction#policy_arn}
    */
    readonly policyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#roles BudgetsBudgetAction#roles}
    */
    readonly roles?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#users BudgetsBudgetAction#users}
    */
    readonly users?: string[];
}
export declare function budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference | BudgetsBudgetActionDefinitionIamActionDefinition): any;
export declare function budgetsBudgetActionDefinitionIamActionDefinitionToHclTerraform(struct?: BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference | BudgetsBudgetActionDefinitionIamActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetActionDefinitionIamActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinitionIamActionDefinition | undefined);
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    resetGroups(): void;
    get groupsInput(): string[] | undefined;
    private _policyArn?;
    get policyArn(): string;
    set policyArn(value: string);
    get policyArnInput(): string | undefined;
    private _roles?;
    get roles(): string[];
    set roles(value: string[]);
    resetRoles(): void;
    get rolesInput(): string[] | undefined;
    private _users?;
    get users(): string[];
    set users(value: string[]);
    resetUsers(): void;
    get usersInput(): string[] | undefined;
}
export interface BudgetsBudgetActionDefinitionScpActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#policy_id BudgetsBudgetAction#policy_id}
    */
    readonly policyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#target_ids BudgetsBudgetAction#target_ids}
    */
    readonly targetIds: string[];
}
export declare function budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference | BudgetsBudgetActionDefinitionScpActionDefinition): any;
export declare function budgetsBudgetActionDefinitionScpActionDefinitionToHclTerraform(struct?: BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference | BudgetsBudgetActionDefinitionScpActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetActionDefinitionScpActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinitionScpActionDefinition | undefined);
    private _policyId?;
    get policyId(): string;
    set policyId(value: string);
    get policyIdInput(): string | undefined;
    private _targetIds?;
    get targetIds(): string[];
    set targetIds(value: string[]);
    get targetIdsInput(): string[] | undefined;
}
export interface BudgetsBudgetActionDefinitionSsmActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#action_sub_type BudgetsBudgetAction#action_sub_type}
    */
    readonly actionSubType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#instance_ids BudgetsBudgetAction#instance_ids}
    */
    readonly instanceIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#region BudgetsBudgetAction#region}
    */
    readonly region: string;
}
export declare function budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference | BudgetsBudgetActionDefinitionSsmActionDefinition): any;
export declare function budgetsBudgetActionDefinitionSsmActionDefinitionToHclTerraform(struct?: BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference | BudgetsBudgetActionDefinitionSsmActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetActionDefinitionSsmActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinitionSsmActionDefinition | undefined);
    private _actionSubType?;
    get actionSubType(): string;
    set actionSubType(value: string);
    get actionSubTypeInput(): string | undefined;
    private _instanceIds?;
    get instanceIds(): string[];
    set instanceIds(value: string[]);
    get instanceIdsInput(): string[] | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
}
export interface BudgetsBudgetActionDefinition {
    /**
    * iam_action_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#iam_action_definition BudgetsBudgetAction#iam_action_definition}
    */
    readonly iamActionDefinition?: BudgetsBudgetActionDefinitionIamActionDefinition;
    /**
    * scp_action_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#scp_action_definition BudgetsBudgetAction#scp_action_definition}
    */
    readonly scpActionDefinition?: BudgetsBudgetActionDefinitionScpActionDefinition;
    /**
    * ssm_action_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}
    */
    readonly ssmActionDefinition?: BudgetsBudgetActionDefinitionSsmActionDefinition;
}
export declare function budgetsBudgetActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionOutputReference | BudgetsBudgetActionDefinition): any;
export declare function budgetsBudgetActionDefinitionToHclTerraform(struct?: BudgetsBudgetActionDefinitionOutputReference | BudgetsBudgetActionDefinition): any;
export declare class BudgetsBudgetActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetActionDefinition | undefined;
    set internalValue(value: BudgetsBudgetActionDefinition | undefined);
    private _iamActionDefinition;
    get iamActionDefinition(): BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference;
    putIamActionDefinition(value: BudgetsBudgetActionDefinitionIamActionDefinition): void;
    resetIamActionDefinition(): void;
    get iamActionDefinitionInput(): BudgetsBudgetActionDefinitionIamActionDefinition | undefined;
    private _scpActionDefinition;
    get scpActionDefinition(): BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference;
    putScpActionDefinition(value: BudgetsBudgetActionDefinitionScpActionDefinition): void;
    resetScpActionDefinition(): void;
    get scpActionDefinitionInput(): BudgetsBudgetActionDefinitionScpActionDefinition | undefined;
    private _ssmActionDefinition;
    get ssmActionDefinition(): BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference;
    putSsmActionDefinition(value: BudgetsBudgetActionDefinitionSsmActionDefinition): void;
    resetSsmActionDefinition(): void;
    get ssmActionDefinitionInput(): BudgetsBudgetActionDefinitionSsmActionDefinition | undefined;
}
export interface BudgetsBudgetActionSubscriber {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#address BudgetsBudgetAction#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#subscription_type BudgetsBudgetAction#subscription_type}
    */
    readonly subscriptionType: string;
}
export declare function budgetsBudgetActionSubscriberToTerraform(struct?: BudgetsBudgetActionSubscriber | cdktf.IResolvable): any;
export declare function budgetsBudgetActionSubscriberToHclTerraform(struct?: BudgetsBudgetActionSubscriber | cdktf.IResolvable): any;
export declare class BudgetsBudgetActionSubscriberOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BudgetsBudgetActionSubscriber | cdktf.IResolvable | undefined;
    set internalValue(value: BudgetsBudgetActionSubscriber | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string | undefined;
    private _subscriptionType?;
    get subscriptionType(): string;
    set subscriptionType(value: string);
    get subscriptionTypeInput(): string | undefined;
}
export declare class BudgetsBudgetActionSubscriberList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BudgetsBudgetActionSubscriber[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BudgetsBudgetActionSubscriberOutputReference;
}
export interface BudgetsBudgetActionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#create BudgetsBudgetAction#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#delete BudgetsBudgetAction#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#update BudgetsBudgetAction#update}
    */
    readonly update?: string;
}
export declare function budgetsBudgetActionTimeoutsToTerraform(struct?: BudgetsBudgetActionTimeouts | cdktf.IResolvable): any;
export declare function budgetsBudgetActionTimeoutsToHclTerraform(struct?: BudgetsBudgetActionTimeouts | cdktf.IResolvable): any;
export declare class BudgetsBudgetActionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BudgetsBudgetActionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BudgetsBudgetActionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action aws_budgets_budget_action}
*/
export declare class BudgetsBudgetAction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_budgets_budget_action";
    /**
    * Generates CDKTF code for importing a BudgetsBudgetAction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BudgetsBudgetAction to import
    * @param importFromId The id of the existing BudgetsBudgetAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BudgetsBudgetAction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/budgets_budget_action aws_budgets_budget_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BudgetsBudgetActionConfig
    */
    constructor(scope: Construct, id: string, config: BudgetsBudgetActionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get actionId(): string;
    private _actionType?;
    get actionType(): string;
    set actionType(value: string);
    get actionTypeInput(): string | undefined;
    private _approvalModel?;
    get approvalModel(): string;
    set approvalModel(value: string);
    get approvalModelInput(): string | undefined;
    get arn(): string;
    private _budgetName?;
    get budgetName(): string;
    set budgetName(value: string);
    get budgetNameInput(): string | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    get executionRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _notificationType?;
    get notificationType(): string;
    set notificationType(value: string);
    get notificationTypeInput(): string | undefined;
    get status(): string;
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
    private _actionThreshold;
    get actionThreshold(): BudgetsBudgetActionActionThresholdOutputReference;
    putActionThreshold(value: BudgetsBudgetActionActionThreshold): void;
    get actionThresholdInput(): BudgetsBudgetActionActionThreshold | undefined;
    private _definition;
    get definition(): BudgetsBudgetActionDefinitionOutputReference;
    putDefinition(value: BudgetsBudgetActionDefinition): void;
    get definitionInput(): BudgetsBudgetActionDefinition | undefined;
    private _subscriber;
    get subscriber(): BudgetsBudgetActionSubscriberList;
    putSubscriber(value: BudgetsBudgetActionSubscriber[] | cdktf.IResolvable): void;
    get subscriberInput(): cdktf.IResolvable | BudgetsBudgetActionSubscriber[] | undefined;
    private _timeouts;
    get timeouts(): BudgetsBudgetActionTimeoutsOutputReference;
    putTimeouts(value: BudgetsBudgetActionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BudgetsBudgetActionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
