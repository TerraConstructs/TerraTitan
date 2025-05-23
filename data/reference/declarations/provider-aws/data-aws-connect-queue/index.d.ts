/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue#id DataAwsConnectQueue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue#instance_id DataAwsConnectQueue#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue#name DataAwsConnectQueue#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue#queue_id DataAwsConnectQueue#queue_id}
    */
    readonly queueId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue#tags DataAwsConnectQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsConnectQueueOutboundCallerConfig {
}
export declare function dataAwsConnectQueueOutboundCallerConfigToTerraform(struct?: DataAwsConnectQueueOutboundCallerConfig): any;
export declare function dataAwsConnectQueueOutboundCallerConfigToHclTerraform(struct?: DataAwsConnectQueueOutboundCallerConfig): any;
export declare class DataAwsConnectQueueOutboundCallerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectQueueOutboundCallerConfig | undefined;
    set internalValue(value: DataAwsConnectQueueOutboundCallerConfig | undefined);
    get outboundCallerIdName(): string;
    get outboundCallerIdNumberId(): string;
    get outboundFlowId(): string;
}
export declare class DataAwsConnectQueueOutboundCallerConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectQueueOutboundCallerConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue aws_connect_queue}
*/
export declare class DataAwsConnectQueue extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_queue";
    /**
    * Generates CDKTF code for importing a DataAwsConnectQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectQueue to import
    * @param importFromId The id of the existing DataAwsConnectQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_queue aws_connect_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectQueueConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectQueueConfig);
    get arn(): string;
    get description(): string;
    get hoursOfOperationId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    get maxContacts(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _outboundCallerConfig;
    get outboundCallerConfig(): DataAwsConnectQueueOutboundCallerConfigList;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    resetQueueId(): void;
    get queueIdInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
