/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectRoutingProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile#id DataAwsConnectRoutingProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile#instance_id DataAwsConnectRoutingProfile#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile#name DataAwsConnectRoutingProfile#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile#routing_profile_id DataAwsConnectRoutingProfile#routing_profile_id}
    */
    readonly routingProfileId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile#tags DataAwsConnectRoutingProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsConnectRoutingProfileMediaConcurrencies {
}
export declare function dataAwsConnectRoutingProfileMediaConcurrenciesToTerraform(struct?: DataAwsConnectRoutingProfileMediaConcurrencies): any;
export declare function dataAwsConnectRoutingProfileMediaConcurrenciesToHclTerraform(struct?: DataAwsConnectRoutingProfileMediaConcurrencies): any;
export declare class DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectRoutingProfileMediaConcurrencies | undefined;
    set internalValue(value: DataAwsConnectRoutingProfileMediaConcurrencies | undefined);
    get channel(): string;
    get concurrency(): number;
}
export declare class DataAwsConnectRoutingProfileMediaConcurrenciesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectRoutingProfileMediaConcurrenciesOutputReference;
}
export interface DataAwsConnectRoutingProfileQueueConfigs {
}
export declare function dataAwsConnectRoutingProfileQueueConfigsToTerraform(struct?: DataAwsConnectRoutingProfileQueueConfigs): any;
export declare function dataAwsConnectRoutingProfileQueueConfigsToHclTerraform(struct?: DataAwsConnectRoutingProfileQueueConfigs): any;
export declare class DataAwsConnectRoutingProfileQueueConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectRoutingProfileQueueConfigs | undefined;
    set internalValue(value: DataAwsConnectRoutingProfileQueueConfigs | undefined);
    get channel(): string;
    get delay(): number;
    get priority(): number;
    get queueArn(): string;
    get queueId(): string;
    get queueName(): string;
}
export declare class DataAwsConnectRoutingProfileQueueConfigsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectRoutingProfileQueueConfigsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile aws_connect_routing_profile}
*/
export declare class DataAwsConnectRoutingProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_routing_profile";
    /**
    * Generates CDKTF code for importing a DataAwsConnectRoutingProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectRoutingProfile to import
    * @param importFromId The id of the existing DataAwsConnectRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectRoutingProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_routing_profile aws_connect_routing_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectRoutingProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectRoutingProfileConfig);
    get arn(): string;
    get defaultOutboundQueueId(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _mediaConcurrencies;
    get mediaConcurrencies(): DataAwsConnectRoutingProfileMediaConcurrenciesList;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _queueConfigs;
    get queueConfigs(): DataAwsConnectRoutingProfileQueueConfigsList;
    private _routingProfileId?;
    get routingProfileId(): string;
    set routingProfileId(value: string);
    resetRoutingProfileId(): void;
    get routingProfileIdInput(): string | undefined;
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
