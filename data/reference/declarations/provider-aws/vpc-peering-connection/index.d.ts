/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcPeeringConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#id VpcPeeringConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}
    */
    readonly peerOwnerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}
    */
    readonly peerRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}
    */
    readonly peerVpcId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#tags VpcPeeringConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}
    */
    readonly vpcId: string;
    /**
    * accepter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#accepter VpcPeeringConnection#accepter}
    */
    readonly accepter?: VpcPeeringConnectionAccepter;
    /**
    * requester block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#requester VpcPeeringConnection#requester}
    */
    readonly requester?: VpcPeeringConnectionRequester;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#timeouts VpcPeeringConnection#timeouts}
    */
    readonly timeouts?: VpcPeeringConnectionTimeouts;
}
export interface VpcPeeringConnectionAccepter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionAccepterToTerraform(struct?: VpcPeeringConnectionAccepterOutputReference | VpcPeeringConnectionAccepter): any;
export declare function vpcPeeringConnectionAccepterToHclTerraform(struct?: VpcPeeringConnectionAccepterOutputReference | VpcPeeringConnectionAccepter): any;
export declare class VpcPeeringConnectionAccepterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionAccepter | undefined;
    set internalValue(value: VpcPeeringConnectionAccepter | undefined);
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable | undefined;
}
export interface VpcPeeringConnectionRequester {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionRequesterToTerraform(struct?: VpcPeeringConnectionRequesterOutputReference | VpcPeeringConnectionRequester): any;
export declare function vpcPeeringConnectionRequesterToHclTerraform(struct?: VpcPeeringConnectionRequesterOutputReference | VpcPeeringConnectionRequester): any;
export declare class VpcPeeringConnectionRequesterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionRequester | undefined;
    set internalValue(value: VpcPeeringConnectionRequester | undefined);
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable | undefined;
}
export interface VpcPeeringConnectionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#create VpcPeeringConnection#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#delete VpcPeeringConnection#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#update VpcPeeringConnection#update}
    */
    readonly update?: string;
}
export declare function vpcPeeringConnectionTimeoutsToTerraform(struct?: VpcPeeringConnectionTimeouts | cdktf.IResolvable): any;
export declare function vpcPeeringConnectionTimeoutsToHclTerraform(struct?: VpcPeeringConnectionTimeouts | cdktf.IResolvable): any;
export declare class VpcPeeringConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcPeeringConnectionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection aws_vpc_peering_connection}
*/
export declare class VpcPeeringConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_peering_connection";
    /**
    * Generates CDKTF code for importing a VpcPeeringConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcPeeringConnection to import
    * @param importFromId The id of the existing VpcPeeringConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcPeeringConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection aws_vpc_peering_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionConfig
    */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionConfig);
    get acceptStatus(): string;
    private _autoAccept?;
    get autoAccept(): boolean | cdktf.IResolvable;
    set autoAccept(value: boolean | cdktf.IResolvable);
    resetAutoAccept(): void;
    get autoAcceptInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _peerOwnerId?;
    get peerOwnerId(): string;
    set peerOwnerId(value: string);
    resetPeerOwnerId(): void;
    get peerOwnerIdInput(): string | undefined;
    private _peerRegion?;
    get peerRegion(): string;
    set peerRegion(value: string);
    resetPeerRegion(): void;
    get peerRegionInput(): string | undefined;
    private _peerVpcId?;
    get peerVpcId(): string;
    set peerVpcId(value: string);
    get peerVpcIdInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _accepter;
    get accepter(): VpcPeeringConnectionAccepterOutputReference;
    putAccepter(value: VpcPeeringConnectionAccepter): void;
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionAccepter | undefined;
    private _requester;
    get requester(): VpcPeeringConnectionRequesterOutputReference;
    putRequester(value: VpcPeeringConnectionRequester): void;
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionRequester | undefined;
    private _timeouts;
    get timeouts(): VpcPeeringConnectionTimeoutsOutputReference;
    putTimeouts(value: VpcPeeringConnectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcPeeringConnectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
