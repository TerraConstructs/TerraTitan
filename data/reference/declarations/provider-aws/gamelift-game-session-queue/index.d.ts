/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftGameSessionQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#custom_event_data GameliftGameSessionQueue#custom_event_data}
    */
    readonly customEventData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#destinations GameliftGameSessionQueue#destinations}
    */
    readonly destinations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#id GameliftGameSessionQueue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#name GameliftGameSessionQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#notification_target GameliftGameSessionQueue#notification_target}
    */
    readonly notificationTarget?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#tags GameliftGameSessionQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#tags_all GameliftGameSessionQueue#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#timeout_in_seconds GameliftGameSessionQueue#timeout_in_seconds}
    */
    readonly timeoutInSeconds?: number;
    /**
    * player_latency_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#player_latency_policy GameliftGameSessionQueue#player_latency_policy}
    */
    readonly playerLatencyPolicy?: GameliftGameSessionQueuePlayerLatencyPolicy[] | cdktf.IResolvable;
}
export interface GameliftGameSessionQueuePlayerLatencyPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#maximum_individual_player_latency_milliseconds GameliftGameSessionQueue#maximum_individual_player_latency_milliseconds}
    */
    readonly maximumIndividualPlayerLatencyMilliseconds: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#policy_duration_seconds GameliftGameSessionQueue#policy_duration_seconds}
    */
    readonly policyDurationSeconds?: number;
}
export declare function gameliftGameSessionQueuePlayerLatencyPolicyToTerraform(struct?: GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable): any;
export declare function gameliftGameSessionQueuePlayerLatencyPolicyToHclTerraform(struct?: GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable): any;
export declare class GameliftGameSessionQueuePlayerLatencyPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable | undefined;
    set internalValue(value: GameliftGameSessionQueuePlayerLatencyPolicy | cdktf.IResolvable | undefined);
    private _maximumIndividualPlayerLatencyMilliseconds?;
    get maximumIndividualPlayerLatencyMilliseconds(): number;
    set maximumIndividualPlayerLatencyMilliseconds(value: number);
    get maximumIndividualPlayerLatencyMillisecondsInput(): number | undefined;
    private _policyDurationSeconds?;
    get policyDurationSeconds(): number;
    set policyDurationSeconds(value: number);
    resetPolicyDurationSeconds(): void;
    get policyDurationSecondsInput(): number | undefined;
}
export declare class GameliftGameSessionQueuePlayerLatencyPolicyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GameliftGameSessionQueuePlayerLatencyPolicy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GameliftGameSessionQueuePlayerLatencyPolicyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue aws_gamelift_game_session_queue}
*/
export declare class GameliftGameSessionQueue extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_gamelift_game_session_queue";
    /**
    * Generates CDKTF code for importing a GameliftGameSessionQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GameliftGameSessionQueue to import
    * @param importFromId The id of the existing GameliftGameSessionQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GameliftGameSessionQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_game_session_queue aws_gamelift_game_session_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftGameSessionQueueConfig
    */
    constructor(scope: Construct, id: string, config: GameliftGameSessionQueueConfig);
    get arn(): string;
    private _customEventData?;
    get customEventData(): string;
    set customEventData(value: string);
    resetCustomEventData(): void;
    get customEventDataInput(): string | undefined;
    private _destinations?;
    get destinations(): string[];
    set destinations(value: string[]);
    resetDestinations(): void;
    get destinationsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _notificationTarget?;
    get notificationTarget(): string;
    set notificationTarget(value: string);
    resetNotificationTarget(): void;
    get notificationTargetInput(): string | undefined;
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
    private _timeoutInSeconds?;
    get timeoutInSeconds(): number;
    set timeoutInSeconds(value: number);
    resetTimeoutInSeconds(): void;
    get timeoutInSecondsInput(): number | undefined;
    private _playerLatencyPolicy;
    get playerLatencyPolicy(): GameliftGameSessionQueuePlayerLatencyPolicyList;
    putPlayerLatencyPolicy(value: GameliftGameSessionQueuePlayerLatencyPolicy[] | cdktf.IResolvable): void;
    resetPlayerLatencyPolicy(): void;
    get playerLatencyPolicyInput(): cdktf.IResolvable | GameliftGameSessionQueuePlayerLatencyPolicy[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
