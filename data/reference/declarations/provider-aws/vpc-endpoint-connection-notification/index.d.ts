/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointConnectionNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification#connection_events VpcEndpointConnectionNotification#connection_events}
    */
    readonly connectionEvents: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}
    */
    readonly connectionNotificationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification#id VpcEndpointConnectionNotification#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}
    */
    readonly vpcEndpointServiceId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification aws_vpc_endpoint_connection_notification}
*/
export declare class VpcEndpointConnectionNotification extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint_connection_notification";
    /**
    * Generates CDKTF code for importing a VpcEndpointConnectionNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpointConnectionNotification to import
    * @param importFromId The id of the existing VpcEndpointConnectionNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpointConnectionNotification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_connection_notification aws_vpc_endpoint_connection_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointConnectionNotificationConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointConnectionNotificationConfig);
    private _connectionEvents?;
    get connectionEvents(): string[];
    set connectionEvents(value: string[]);
    get connectionEventsInput(): string[] | undefined;
    private _connectionNotificationArn?;
    get connectionNotificationArn(): string;
    set connectionNotificationArn(value: string);
    get connectionNotificationArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get notificationType(): string;
    get state(): string;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string | undefined;
    private _vpcEndpointServiceId?;
    get vpcEndpointServiceId(): string;
    set vpcEndpointServiceId(value: string);
    resetVpcEndpointServiceId(): void;
    get vpcEndpointServiceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
