/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#description ConnectQueue#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}
    */
    readonly hoursOfOperationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#id ConnectQueue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#instance_id ConnectQueue#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}
    */
    readonly maxContacts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#name ConnectQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}
    */
    readonly quickConnectIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#status ConnectQueue#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#tags ConnectQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#tags_all ConnectQueue#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * outbound_caller_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}
    */
    readonly outboundCallerConfig?: ConnectQueueOutboundCallerConfig;
}
export interface ConnectQueueOutboundCallerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}
    */
    readonly outboundCallerIdName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#outbound_caller_id_number_id ConnectQueue#outbound_caller_id_number_id}
    */
    readonly outboundCallerIdNumberId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#outbound_flow_id ConnectQueue#outbound_flow_id}
    */
    readonly outboundFlowId?: string;
}
export declare function connectQueueOutboundCallerConfigToTerraform(struct?: ConnectQueueOutboundCallerConfigOutputReference | ConnectQueueOutboundCallerConfig): any;
export declare function connectQueueOutboundCallerConfigToHclTerraform(struct?: ConnectQueueOutboundCallerConfigOutputReference | ConnectQueueOutboundCallerConfig): any;
export declare class ConnectQueueOutboundCallerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectQueueOutboundCallerConfig | undefined;
    set internalValue(value: ConnectQueueOutboundCallerConfig | undefined);
    private _outboundCallerIdName?;
    get outboundCallerIdName(): string;
    set outboundCallerIdName(value: string);
    resetOutboundCallerIdName(): void;
    get outboundCallerIdNameInput(): string | undefined;
    private _outboundCallerIdNumberId?;
    get outboundCallerIdNumberId(): string;
    set outboundCallerIdNumberId(value: string);
    resetOutboundCallerIdNumberId(): void;
    get outboundCallerIdNumberIdInput(): string | undefined;
    private _outboundFlowId?;
    get outboundFlowId(): string;
    set outboundFlowId(value: string);
    resetOutboundFlowId(): void;
    get outboundFlowIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue aws_connect_queue}
*/
export declare class ConnectQueue extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_queue";
    /**
    * Generates CDKTF code for importing a ConnectQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectQueue to import
    * @param importFromId The id of the existing ConnectQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_queue aws_connect_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectQueueConfig
    */
    constructor(scope: Construct, id: string, config: ConnectQueueConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _hoursOfOperationId?;
    get hoursOfOperationId(): string;
    set hoursOfOperationId(value: string);
    get hoursOfOperationIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _maxContacts?;
    get maxContacts(): number;
    set maxContacts(value: number);
    resetMaxContacts(): void;
    get maxContactsInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get queueId(): string;
    private _quickConnectIds?;
    get quickConnectIds(): string[];
    set quickConnectIds(value: string[]);
    resetQuickConnectIds(): void;
    get quickConnectIdsInput(): string[] | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _outboundCallerConfig;
    get outboundCallerConfig(): ConnectQueueOutboundCallerConfigOutputReference;
    putOutboundCallerConfig(value: ConnectQueueOutboundCallerConfig): void;
    resetOutboundCallerConfig(): void;
    get outboundCallerConfigInput(): ConnectQueueOutboundCallerConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
