/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerTransitGatewayRouteTableAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#id NetworkmanagerTransitGatewayRouteTableAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#peering_id NetworkmanagerTransitGatewayRouteTableAttachment#peering_id}
    */
    readonly peeringId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#tags NetworkmanagerTransitGatewayRouteTableAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#tags_all NetworkmanagerTransitGatewayRouteTableAttachment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#transit_gateway_route_table_arn NetworkmanagerTransitGatewayRouteTableAttachment#transit_gateway_route_table_arn}
    */
    readonly transitGatewayRouteTableArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#timeouts NetworkmanagerTransitGatewayRouteTableAttachment#timeouts}
    */
    readonly timeouts?: NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts;
}
export interface NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#create NetworkmanagerTransitGatewayRouteTableAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#delete NetworkmanagerTransitGatewayRouteTableAttachment#delete}
    */
    readonly delete?: string;
}
export declare function networkmanagerTransitGatewayRouteTableAttachmentTimeoutsToTerraform(struct?: NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerTransitGatewayRouteTableAttachmentTimeoutsToHclTerraform(struct?: NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment aws_networkmanager_transit_gateway_route_table_attachment}
*/
export declare class NetworkmanagerTransitGatewayRouteTableAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_transit_gateway_route_table_attachment";
    /**
    * Generates CDKTF code for importing a NetworkmanagerTransitGatewayRouteTableAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerTransitGatewayRouteTableAttachment to import
    * @param importFromId The id of the existing NetworkmanagerTransitGatewayRouteTableAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerTransitGatewayRouteTableAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_transit_gateway_route_table_attachment aws_networkmanager_transit_gateway_route_table_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerTransitGatewayRouteTableAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerTransitGatewayRouteTableAttachmentConfig);
    get arn(): string;
    get attachmentPolicyRuleNumber(): number;
    get attachmentType(): string;
    get coreNetworkArn(): string;
    get coreNetworkId(): string;
    get edgeLocation(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerAccountId(): string;
    private _peeringId?;
    get peeringId(): string;
    set peeringId(value: string);
    get peeringIdInput(): string | undefined;
    get resourceArn(): string;
    get segmentName(): string;
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
    private _transitGatewayRouteTableArn?;
    get transitGatewayRouteTableArn(): string;
    set transitGatewayRouteTableArn(value: string);
    get transitGatewayRouteTableArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerTransitGatewayRouteTableAttachmentTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerTransitGatewayRouteTableAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
