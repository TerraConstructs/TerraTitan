/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerDxGatewayAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#core_network_id NetworkmanagerDxGatewayAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#direct_connect_gateway_arn NetworkmanagerDxGatewayAttachment#direct_connect_gateway_arn}
    */
    readonly directConnectGatewayArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#edge_locations NetworkmanagerDxGatewayAttachment#edge_locations}
    */
    readonly edgeLocations: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#tags NetworkmanagerDxGatewayAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#timeouts NetworkmanagerDxGatewayAttachment#timeouts}
    */
    readonly timeouts?: NetworkmanagerDxGatewayAttachmentTimeouts;
}
export interface NetworkmanagerDxGatewayAttachmentTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#create NetworkmanagerDxGatewayAttachment#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#delete NetworkmanagerDxGatewayAttachment#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#update NetworkmanagerDxGatewayAttachment#update}
    */
    readonly update?: string;
}
export declare function networkmanagerDxGatewayAttachmentTimeoutsToTerraform(struct?: NetworkmanagerDxGatewayAttachmentTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerDxGatewayAttachmentTimeoutsToHclTerraform(struct?: NetworkmanagerDxGatewayAttachmentTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerDxGatewayAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerDxGatewayAttachmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment aws_networkmanager_dx_gateway_attachment}
*/
export declare class NetworkmanagerDxGatewayAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_dx_gateway_attachment";
    /**
    * Generates CDKTF code for importing a NetworkmanagerDxGatewayAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerDxGatewayAttachment to import
    * @param importFromId The id of the existing NetworkmanagerDxGatewayAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerDxGatewayAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/networkmanager_dx_gateway_attachment aws_networkmanager_dx_gateway_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerDxGatewayAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerDxGatewayAttachmentConfig);
    get arn(): string;
    get attachmentPolicyRuleNumber(): number;
    get attachmentType(): string;
    get coreNetworkArn(): string;
    private _coreNetworkId?;
    get coreNetworkId(): string;
    set coreNetworkId(value: string);
    get coreNetworkIdInput(): string | undefined;
    private _directConnectGatewayArn?;
    get directConnectGatewayArn(): string;
    set directConnectGatewayArn(value: string);
    get directConnectGatewayArnInput(): string | undefined;
    private _edgeLocations?;
    get edgeLocations(): string[];
    set edgeLocations(value: string[]);
    get edgeLocationsInput(): string[] | undefined;
    get id(): string;
    get ownerAccountId(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _timeouts;
    get timeouts(): NetworkmanagerDxGatewayAttachmentTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerDxGatewayAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerDxGatewayAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
