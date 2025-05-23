/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IvschatRoomConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#id IvschatRoom#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#logging_configuration_identifiers IvschatRoom#logging_configuration_identifiers}
    */
    readonly loggingConfigurationIdentifiers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#maximum_message_length IvschatRoom#maximum_message_length}
    */
    readonly maximumMessageLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#maximum_message_rate_per_second IvschatRoom#maximum_message_rate_per_second}
    */
    readonly maximumMessageRatePerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#name IvschatRoom#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#tags IvschatRoom#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#tags_all IvschatRoom#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * message_review_handler block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#message_review_handler IvschatRoom#message_review_handler}
    */
    readonly messageReviewHandler?: IvschatRoomMessageReviewHandler;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#timeouts IvschatRoom#timeouts}
    */
    readonly timeouts?: IvschatRoomTimeouts;
}
export interface IvschatRoomMessageReviewHandler {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#fallback_result IvschatRoom#fallback_result}
    */
    readonly fallbackResult?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#uri IvschatRoom#uri}
    */
    readonly uri?: string;
}
export declare function ivschatRoomMessageReviewHandlerToTerraform(struct?: IvschatRoomMessageReviewHandlerOutputReference | IvschatRoomMessageReviewHandler): any;
export declare function ivschatRoomMessageReviewHandlerToHclTerraform(struct?: IvschatRoomMessageReviewHandlerOutputReference | IvschatRoomMessageReviewHandler): any;
export declare class IvschatRoomMessageReviewHandlerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvschatRoomMessageReviewHandler | undefined;
    set internalValue(value: IvschatRoomMessageReviewHandler | undefined);
    private _fallbackResult?;
    get fallbackResult(): string;
    set fallbackResult(value: string);
    resetFallbackResult(): void;
    get fallbackResultInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
}
export interface IvschatRoomTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#create IvschatRoom#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#delete IvschatRoom#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#update IvschatRoom#update}
    */
    readonly update?: string;
}
export declare function ivschatRoomTimeoutsToTerraform(struct?: IvschatRoomTimeouts | cdktf.IResolvable): any;
export declare function ivschatRoomTimeoutsToHclTerraform(struct?: IvschatRoomTimeouts | cdktf.IResolvable): any;
export declare class IvschatRoomTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IvschatRoomTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: IvschatRoomTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room aws_ivschat_room}
*/
export declare class IvschatRoom extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ivschat_room";
    /**
    * Generates CDKTF code for importing a IvschatRoom resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IvschatRoom to import
    * @param importFromId The id of the existing IvschatRoom that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IvschatRoom to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ivschat_room aws_ivschat_room} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IvschatRoomConfig = {}
    */
    constructor(scope: Construct, id: string, config?: IvschatRoomConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _loggingConfigurationIdentifiers?;
    get loggingConfigurationIdentifiers(): string[];
    set loggingConfigurationIdentifiers(value: string[]);
    resetLoggingConfigurationIdentifiers(): void;
    get loggingConfigurationIdentifiersInput(): string[] | undefined;
    private _maximumMessageLength?;
    get maximumMessageLength(): number;
    set maximumMessageLength(value: number);
    resetMaximumMessageLength(): void;
    get maximumMessageLengthInput(): number | undefined;
    private _maximumMessageRatePerSecond?;
    get maximumMessageRatePerSecond(): number;
    set maximumMessageRatePerSecond(value: number);
    resetMaximumMessageRatePerSecond(): void;
    get maximumMessageRatePerSecondInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
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
    private _messageReviewHandler;
    get messageReviewHandler(): IvschatRoomMessageReviewHandlerOutputReference;
    putMessageReviewHandler(value: IvschatRoomMessageReviewHandler): void;
    resetMessageReviewHandler(): void;
    get messageReviewHandlerInput(): IvschatRoomMessageReviewHandler | undefined;
    private _timeouts;
    get timeouts(): IvschatRoomTimeoutsOutputReference;
    putTimeouts(value: IvschatRoomTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | IvschatRoomTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
