/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcPeeringConnectionAccepterAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#auto_accept VpcPeeringConnectionAccepterA#auto_accept}
    */
    readonly autoAccept?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#id VpcPeeringConnectionAccepterA#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#tags VpcPeeringConnectionAccepterA#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#tags_all VpcPeeringConnectionAccepterA#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#vpc_peering_connection_id VpcPeeringConnectionAccepterA#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId: string;
    /**
    * accepter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#accepter VpcPeeringConnectionAccepterA#accepter}
    */
    readonly accepter?: VpcPeeringConnectionAccepterAccepter;
    /**
    * requester block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#requester VpcPeeringConnectionAccepterA#requester}
    */
    readonly requester?: VpcPeeringConnectionAccepterRequester;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#timeouts VpcPeeringConnectionAccepterA#timeouts}
    */
    readonly timeouts?: VpcPeeringConnectionAccepterTimeouts;
}
export interface VpcPeeringConnectionAccepterAccepter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionAccepterAccepterToTerraform(struct?: VpcPeeringConnectionAccepterAccepterOutputReference | VpcPeeringConnectionAccepterAccepter): any;
export declare function vpcPeeringConnectionAccepterAccepterToHclTerraform(struct?: VpcPeeringConnectionAccepterAccepterOutputReference | VpcPeeringConnectionAccepterAccepter): any;
export declare class VpcPeeringConnectionAccepterAccepterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionAccepterAccepter | undefined;
    set internalValue(value: VpcPeeringConnectionAccepterAccepter | undefined);
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable | undefined;
}
export interface VpcPeeringConnectionAccepterRequester {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#allow_remote_vpc_dns_resolution VpcPeeringConnectionAccepterA#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionAccepterRequesterToTerraform(struct?: VpcPeeringConnectionAccepterRequesterOutputReference | VpcPeeringConnectionAccepterRequester): any;
export declare function vpcPeeringConnectionAccepterRequesterToHclTerraform(struct?: VpcPeeringConnectionAccepterRequesterOutputReference | VpcPeeringConnectionAccepterRequester): any;
export declare class VpcPeeringConnectionAccepterRequesterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionAccepterRequester | undefined;
    set internalValue(value: VpcPeeringConnectionAccepterRequester | undefined);
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable | undefined;
}
export interface VpcPeeringConnectionAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#create VpcPeeringConnectionAccepterA#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#update VpcPeeringConnectionAccepterA#update}
    */
    readonly update?: string;
}
export declare function vpcPeeringConnectionAccepterTimeoutsToTerraform(struct?: VpcPeeringConnectionAccepterTimeouts | cdktf.IResolvable): any;
export declare function vpcPeeringConnectionAccepterTimeoutsToHclTerraform(struct?: VpcPeeringConnectionAccepterTimeouts | cdktf.IResolvable): any;
export declare class VpcPeeringConnectionAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionAccepterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcPeeringConnectionAccepterTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter}
*/
export declare class VpcPeeringConnectionAccepterA extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_peering_connection_accepter";
    /**
    * Generates CDKTF code for importing a VpcPeeringConnectionAccepterA resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcPeeringConnectionAccepterA to import
    * @param importFromId The id of the existing VpcPeeringConnectionAccepterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcPeeringConnectionAccepterA to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_accepter aws_vpc_peering_connection_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionAccepterAConfig
    */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionAccepterAConfig);
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
    get peerOwnerId(): string;
    get peerRegion(): string;
    get peerVpcId(): string;
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
    get vpcId(): string;
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    get vpcPeeringConnectionIdInput(): string | undefined;
    private _accepter;
    get accepter(): VpcPeeringConnectionAccepterAccepterOutputReference;
    putAccepter(value: VpcPeeringConnectionAccepterAccepter): void;
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionAccepterAccepter | undefined;
    private _requester;
    get requester(): VpcPeeringConnectionAccepterRequesterOutputReference;
    putRequester(value: VpcPeeringConnectionAccepterRequester): void;
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionAccepterRequester | undefined;
    private _timeouts;
    get timeouts(): VpcPeeringConnectionAccepterTimeoutsOutputReference;
    putTimeouts(value: VpcPeeringConnectionAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcPeeringConnectionAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
