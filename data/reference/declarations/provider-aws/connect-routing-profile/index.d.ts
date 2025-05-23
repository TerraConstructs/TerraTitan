/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectRoutingProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#default_outbound_queue_id ConnectRoutingProfile#default_outbound_queue_id}
    */
    readonly defaultOutboundQueueId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#description ConnectRoutingProfile#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#id ConnectRoutingProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#instance_id ConnectRoutingProfile#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#name ConnectRoutingProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#tags ConnectRoutingProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#tags_all ConnectRoutingProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * media_concurrencies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#media_concurrencies ConnectRoutingProfile#media_concurrencies}
    */
    readonly mediaConcurrencies: ConnectRoutingProfileMediaConcurrencies[] | cdktf.IResolvable;
    /**
    * queue_configs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#queue_configs ConnectRoutingProfile#queue_configs}
    */
    readonly queueConfigs?: ConnectRoutingProfileQueueConfigs[] | cdktf.IResolvable;
}
export interface ConnectRoutingProfileMediaConcurrencies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}
    */
    readonly channel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#concurrency ConnectRoutingProfile#concurrency}
    */
    readonly concurrency: number;
}
export declare function connectRoutingProfileMediaConcurrenciesToTerraform(struct?: ConnectRoutingProfileMediaConcurrencies | cdktf.IResolvable): any;
export declare function connectRoutingProfileMediaConcurrenciesToHclTerraform(struct?: ConnectRoutingProfileMediaConcurrencies | cdktf.IResolvable): any;
export declare class ConnectRoutingProfileMediaConcurrenciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectRoutingProfileMediaConcurrencies | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectRoutingProfileMediaConcurrencies | cdktf.IResolvable | undefined);
    private _channel?;
    get channel(): string;
    set channel(value: string);
    get channelInput(): string | undefined;
    private _concurrency?;
    get concurrency(): number;
    set concurrency(value: number);
    get concurrencyInput(): number | undefined;
}
export declare class ConnectRoutingProfileMediaConcurrenciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConnectRoutingProfileMediaConcurrencies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConnectRoutingProfileMediaConcurrenciesOutputReference;
}
export interface ConnectRoutingProfileQueueConfigs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#channel ConnectRoutingProfile#channel}
    */
    readonly channel: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#delay ConnectRoutingProfile#delay}
    */
    readonly delay: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#priority ConnectRoutingProfile#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#queue_id ConnectRoutingProfile#queue_id}
    */
    readonly queueId: string;
}
export declare function connectRoutingProfileQueueConfigsToTerraform(struct?: ConnectRoutingProfileQueueConfigs | cdktf.IResolvable): any;
export declare function connectRoutingProfileQueueConfigsToHclTerraform(struct?: ConnectRoutingProfileQueueConfigs | cdktf.IResolvable): any;
export declare class ConnectRoutingProfileQueueConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectRoutingProfileQueueConfigs | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectRoutingProfileQueueConfigs | cdktf.IResolvable | undefined);
    private _channel?;
    get channel(): string;
    set channel(value: string);
    get channelInput(): string | undefined;
    private _delay?;
    get delay(): number;
    set delay(value: number);
    get delayInput(): number | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    get queueArn(): string;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string | undefined;
    get queueName(): string;
}
export declare class ConnectRoutingProfileQueueConfigsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConnectRoutingProfileQueueConfigs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConnectRoutingProfileQueueConfigsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile aws_connect_routing_profile}
*/
export declare class ConnectRoutingProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_routing_profile";
    /**
    * Generates CDKTF code for importing a ConnectRoutingProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectRoutingProfile to import
    * @param importFromId The id of the existing ConnectRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectRoutingProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_routing_profile aws_connect_routing_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectRoutingProfileConfig
    */
    constructor(scope: Construct, id: string, config: ConnectRoutingProfileConfig);
    get arn(): string;
    private _defaultOutboundQueueId?;
    get defaultOutboundQueueId(): string;
    set defaultOutboundQueueId(value: string);
    get defaultOutboundQueueIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get routingProfileId(): string;
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
    private _mediaConcurrencies;
    get mediaConcurrencies(): ConnectRoutingProfileMediaConcurrenciesList;
    putMediaConcurrencies(value: ConnectRoutingProfileMediaConcurrencies[] | cdktf.IResolvable): void;
    get mediaConcurrenciesInput(): cdktf.IResolvable | ConnectRoutingProfileMediaConcurrencies[] | undefined;
    private _queueConfigs;
    get queueConfigs(): ConnectRoutingProfileQueueConfigsList;
    putQueueConfigs(value: ConnectRoutingProfileQueueConfigs[] | cdktf.IResolvable): void;
    resetQueueConfigs(): void;
    get queueConfigsInput(): cdktf.IResolvable | ConnectRoutingProfileQueueConfigs[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
