/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerSiteToSiteVpnAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}
    */
    readonly vpnConnectionArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#timeouts NetworkmanagerSiteToSiteVpnAttachment#timeouts}
    */
    readonly timeouts?: NetworkmanagerSiteToSiteVpnAttachmentTimeouts;
}
export interface NetworkmanagerSiteToSiteVpnAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#create NetworkmanagerSiteToSiteVpnAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#delete NetworkmanagerSiteToSiteVpnAttachment#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#update NetworkmanagerSiteToSiteVpnAttachment#update}
    */
    readonly update?: string;
}
export declare function networkmanagerSiteToSiteVpnAttachmentTimeoutsToTerraform(struct?: NetworkmanagerSiteToSiteVpnAttachmentTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerSiteToSiteVpnAttachmentTimeoutsToHclTerraform(struct?: NetworkmanagerSiteToSiteVpnAttachmentTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerSiteToSiteVpnAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerSiteToSiteVpnAttachmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment aws_networkmanager_site_to_site_vpn_attachment}
*/
export declare class NetworkmanagerSiteToSiteVpnAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_site_to_site_vpn_attachment";
    /**
    * Generates CDKTF code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerSiteToSiteVpnAttachment to import
    * @param importFromId The id of the existing NetworkmanagerSiteToSiteVpnAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerSiteToSiteVpnAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site_to_site_vpn_attachment aws_networkmanager_site_to_site_vpn_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerSiteToSiteVpnAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerSiteToSiteVpnAttachmentConfig);
    get arn(): string;
    get attachmentPolicyRuleNumber(): number;
    get attachmentType(): string;
    get coreNetworkArn(): string;
    private _coreNetworkId?;
    get coreNetworkId(): string;
    set coreNetworkId(value: string);
    get coreNetworkIdInput(): string | undefined;
    get edgeLocation(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerAccountId(): string;
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
    private _vpnConnectionArn?;
    get vpnConnectionArn(): string;
    set vpnConnectionArn(value: string);
    get vpnConnectionArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerSiteToSiteVpnAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
