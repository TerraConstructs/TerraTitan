/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#description GlueTrigger#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#enabled GlueTrigger#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#id GlueTrigger#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#name GlueTrigger#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#schedule GlueTrigger#schedule}
    */
    readonly schedule?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}
    */
    readonly startOnCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#tags GlueTrigger#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#tags_all GlueTrigger#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#type GlueTrigger#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}
    */
    readonly workflowName?: string;
    /**
    * actions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#actions GlueTrigger#actions}
    */
    readonly actions: GlueTriggerActions[] | cdktf.IResolvable;
    /**
    * event_batching_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#event_batching_condition GlueTrigger#event_batching_condition}
    */
    readonly eventBatchingCondition?: GlueTriggerEventBatchingCondition[] | cdktf.IResolvable;
    /**
    * predicate block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#predicate GlueTrigger#predicate}
    */
    readonly predicate?: GlueTriggerPredicate;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#timeouts GlueTrigger#timeouts}
    */
    readonly timeouts?: GlueTriggerTimeouts;
}
export interface GlueTriggerActionsNotificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
}
export declare function glueTriggerActionsNotificationPropertyToTerraform(struct?: GlueTriggerActionsNotificationPropertyOutputReference | GlueTriggerActionsNotificationProperty): any;
export declare function glueTriggerActionsNotificationPropertyToHclTerraform(struct?: GlueTriggerActionsNotificationPropertyOutputReference | GlueTriggerActionsNotificationProperty): any;
export declare class GlueTriggerActionsNotificationPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueTriggerActionsNotificationProperty | undefined;
    set internalValue(value: GlueTriggerActionsNotificationProperty | undefined);
    private _notifyDelayAfter?;
    get notifyDelayAfter(): number;
    set notifyDelayAfter(value: number);
    resetNotifyDelayAfter(): void;
    get notifyDelayAfterInput(): number | undefined;
}
export interface GlueTriggerActions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#arguments GlueTrigger#arguments}
    */
    readonly arguments?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#security_configuration GlueTrigger#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#timeout GlueTrigger#timeout}
    */
    readonly timeout?: number;
    /**
    * notification_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#notification_property GlueTrigger#notification_property}
    */
    readonly notificationProperty?: GlueTriggerActionsNotificationProperty;
}
export declare function glueTriggerActionsToTerraform(struct?: GlueTriggerActions | cdktf.IResolvable): any;
export declare function glueTriggerActionsToHclTerraform(struct?: GlueTriggerActions | cdktf.IResolvable): any;
export declare class GlueTriggerActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueTriggerActions | cdktf.IResolvable | undefined;
    set internalValue(value: GlueTriggerActions | cdktf.IResolvable | undefined);
    private _arguments?;
    get arguments(): {
        [key: string]: string;
    };
    set arguments(value: {
        [key: string]: string;
    });
    resetArguments(): void;
    get argumentsInput(): {
        [key: string]: string;
    } | undefined;
    private _crawlerName?;
    get crawlerName(): string;
    set crawlerName(value: string);
    resetCrawlerName(): void;
    get crawlerNameInput(): string | undefined;
    private _jobName?;
    get jobName(): string;
    set jobName(value: string);
    resetJobName(): void;
    get jobNameInput(): string | undefined;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _notificationProperty;
    get notificationProperty(): GlueTriggerActionsNotificationPropertyOutputReference;
    putNotificationProperty(value: GlueTriggerActionsNotificationProperty): void;
    resetNotificationProperty(): void;
    get notificationPropertyInput(): GlueTriggerActionsNotificationProperty | undefined;
}
export declare class GlueTriggerActionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueTriggerActions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueTriggerActionsOutputReference;
}
export interface GlueTriggerEventBatchingCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#batch_size GlueTrigger#batch_size}
    */
    readonly batchSize: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#batch_window GlueTrigger#batch_window}
    */
    readonly batchWindow?: number;
}
export declare function glueTriggerEventBatchingConditionToTerraform(struct?: GlueTriggerEventBatchingCondition | cdktf.IResolvable): any;
export declare function glueTriggerEventBatchingConditionToHclTerraform(struct?: GlueTriggerEventBatchingCondition | cdktf.IResolvable): any;
export declare class GlueTriggerEventBatchingConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueTriggerEventBatchingCondition | cdktf.IResolvable | undefined;
    set internalValue(value: GlueTriggerEventBatchingCondition | cdktf.IResolvable | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    get batchSizeInput(): number | undefined;
    private _batchWindow?;
    get batchWindow(): number;
    set batchWindow(value: number);
    resetBatchWindow(): void;
    get batchWindowInput(): number | undefined;
}
export declare class GlueTriggerEventBatchingConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueTriggerEventBatchingCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueTriggerEventBatchingConditionOutputReference;
}
export interface GlueTriggerPredicateConditions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#crawl_state GlueTrigger#crawl_state}
    */
    readonly crawlState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}
    */
    readonly crawlerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#job_name GlueTrigger#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#logical_operator GlueTrigger#logical_operator}
    */
    readonly logicalOperator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#state GlueTrigger#state}
    */
    readonly state?: string;
}
export declare function glueTriggerPredicateConditionsToTerraform(struct?: GlueTriggerPredicateConditions | cdktf.IResolvable): any;
export declare function glueTriggerPredicateConditionsToHclTerraform(struct?: GlueTriggerPredicateConditions | cdktf.IResolvable): any;
export declare class GlueTriggerPredicateConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueTriggerPredicateConditions | cdktf.IResolvable | undefined;
    set internalValue(value: GlueTriggerPredicateConditions | cdktf.IResolvable | undefined);
    private _crawlState?;
    get crawlState(): string;
    set crawlState(value: string);
    resetCrawlState(): void;
    get crawlStateInput(): string | undefined;
    private _crawlerName?;
    get crawlerName(): string;
    set crawlerName(value: string);
    resetCrawlerName(): void;
    get crawlerNameInput(): string | undefined;
    private _jobName?;
    get jobName(): string;
    set jobName(value: string);
    resetJobName(): void;
    get jobNameInput(): string | undefined;
    private _logicalOperator?;
    get logicalOperator(): string;
    set logicalOperator(value: string);
    resetLogicalOperator(): void;
    get logicalOperatorInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
}
export declare class GlueTriggerPredicateConditionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueTriggerPredicateConditions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueTriggerPredicateConditionsOutputReference;
}
export interface GlueTriggerPredicate {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#logical GlueTrigger#logical}
    */
    readonly logical?: string;
    /**
    * conditions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#conditions GlueTrigger#conditions}
    */
    readonly conditions: GlueTriggerPredicateConditions[] | cdktf.IResolvable;
}
export declare function glueTriggerPredicateToTerraform(struct?: GlueTriggerPredicateOutputReference | GlueTriggerPredicate): any;
export declare function glueTriggerPredicateToHclTerraform(struct?: GlueTriggerPredicateOutputReference | GlueTriggerPredicate): any;
export declare class GlueTriggerPredicateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueTriggerPredicate | undefined;
    set internalValue(value: GlueTriggerPredicate | undefined);
    private _logical?;
    get logical(): string;
    set logical(value: string);
    resetLogical(): void;
    get logicalInput(): string | undefined;
    private _conditions;
    get conditions(): GlueTriggerPredicateConditionsList;
    putConditions(value: GlueTriggerPredicateConditions[] | cdktf.IResolvable): void;
    get conditionsInput(): cdktf.IResolvable | GlueTriggerPredicateConditions[] | undefined;
}
export interface GlueTriggerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#create GlueTrigger#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#delete GlueTrigger#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#update GlueTrigger#update}
    */
    readonly update?: string;
}
export declare function glueTriggerTimeoutsToTerraform(struct?: GlueTriggerTimeouts | cdktf.IResolvable): any;
export declare function glueTriggerTimeoutsToHclTerraform(struct?: GlueTriggerTimeouts | cdktf.IResolvable): any;
export declare class GlueTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueTriggerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GlueTriggerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger aws_glue_trigger}
*/
export declare class GlueTrigger extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_trigger";
    /**
    * Generates CDKTF code for importing a GlueTrigger resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueTrigger to import
    * @param importFromId The id of the existing GlueTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueTrigger to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_trigger aws_glue_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueTriggerConfig
    */
    constructor(scope: Construct, id: string, config: GlueTriggerConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _schedule?;
    get schedule(): string;
    set schedule(value: string);
    resetSchedule(): void;
    get scheduleInput(): string | undefined;
    private _startOnCreation?;
    get startOnCreation(): boolean | cdktf.IResolvable;
    set startOnCreation(value: boolean | cdktf.IResolvable);
    resetStartOnCreation(): void;
    get startOnCreationInput(): boolean | cdktf.IResolvable | undefined;
    get state(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _workflowName?;
    get workflowName(): string;
    set workflowName(value: string);
    resetWorkflowName(): void;
    get workflowNameInput(): string | undefined;
    private _actions;
    get actions(): GlueTriggerActionsList;
    putActions(value: GlueTriggerActions[] | cdktf.IResolvable): void;
    get actionsInput(): cdktf.IResolvable | GlueTriggerActions[] | undefined;
    private _eventBatchingCondition;
    get eventBatchingCondition(): GlueTriggerEventBatchingConditionList;
    putEventBatchingCondition(value: GlueTriggerEventBatchingCondition[] | cdktf.IResolvable): void;
    resetEventBatchingCondition(): void;
    get eventBatchingConditionInput(): cdktf.IResolvable | GlueTriggerEventBatchingCondition[] | undefined;
    private _predicate;
    get predicate(): GlueTriggerPredicateOutputReference;
    putPredicate(value: GlueTriggerPredicate): void;
    resetPredicate(): void;
    get predicateInput(): GlueTriggerPredicate | undefined;
    private _timeouts;
    get timeouts(): GlueTriggerTimeoutsOutputReference;
    putTimeouts(value: GlueTriggerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GlueTriggerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
