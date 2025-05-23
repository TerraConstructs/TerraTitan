/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcPeeringConnectionOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options#id VpcPeeringConnectionOptions#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options#vpc_peering_connection_id VpcPeeringConnectionOptions#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId: string;
    /**
    * accepter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options#accepter VpcPeeringConnectionOptions#accepter}
    */
    readonly accepter?: VpcPeeringConnectionOptionsAccepter;
    /**
    * requester block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options#requester VpcPeeringConnectionOptions#requester}
    */
    readonly requester?: VpcPeeringConnectionOptionsRequester;
}
export interface VpcPeeringConnectionOptionsAccepter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionOptionsAccepterToTerraform(struct?: VpcPeeringConnectionOptionsAccepterOutputReference | VpcPeeringConnectionOptionsAccepter): any;
export declare function vpcPeeringConnectionOptionsAccepterToHclTerraform(struct?: VpcPeeringConnectionOptionsAccepterOutputReference | VpcPeeringConnectionOptionsAccepter): any;
export declare class VpcPeeringConnectionOptionsAccepterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionOptionsAccepter | undefined;
    set internalValue(value: VpcPeeringConnectionOptionsAccepter | undefined);
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable | undefined;
}
export interface VpcPeeringConnectionOptionsRequester {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options#allow_remote_vpc_dns_resolution VpcPeeringConnectionOptions#allow_remote_vpc_dns_resolution}
    */
    readonly allowRemoteVpcDnsResolution?: boolean | cdktf.IResolvable;
}
export declare function vpcPeeringConnectionOptionsRequesterToTerraform(struct?: VpcPeeringConnectionOptionsRequesterOutputReference | VpcPeeringConnectionOptionsRequester): any;
export declare function vpcPeeringConnectionOptionsRequesterToHclTerraform(struct?: VpcPeeringConnectionOptionsRequesterOutputReference | VpcPeeringConnectionOptionsRequester): any;
export declare class VpcPeeringConnectionOptionsRequesterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcPeeringConnectionOptionsRequester | undefined;
    set internalValue(value: VpcPeeringConnectionOptionsRequester | undefined);
    private _allowRemoteVpcDnsResolution?;
    get allowRemoteVpcDnsResolution(): boolean | cdktf.IResolvable;
    set allowRemoteVpcDnsResolution(value: boolean | cdktf.IResolvable);
    resetAllowRemoteVpcDnsResolution(): void;
    get allowRemoteVpcDnsResolutionInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options aws_vpc_peering_connection_options}
*/
export declare class VpcPeeringConnectionOptions extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_peering_connection_options";
    /**
    * Generates CDKTF code for importing a VpcPeeringConnectionOptions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcPeeringConnectionOptions to import
    * @param importFromId The id of the existing VpcPeeringConnectionOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcPeeringConnectionOptions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_peering_connection_options aws_vpc_peering_connection_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcPeeringConnectionOptionsConfig
    */
    constructor(scope: Construct, id: string, config: VpcPeeringConnectionOptionsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    get vpcPeeringConnectionIdInput(): string | undefined;
    private _accepter;
    get accepter(): VpcPeeringConnectionOptionsAccepterOutputReference;
    putAccepter(value: VpcPeeringConnectionOptionsAccepter): void;
    resetAccepter(): void;
    get accepterInput(): VpcPeeringConnectionOptionsAccepter | undefined;
    private _requester;
    get requester(): VpcPeeringConnectionOptionsRequesterOutputReference;
    putRequester(value: VpcPeeringConnectionOptionsRequester): void;
    resetRequester(): void;
    get requesterInput(): VpcPeeringConnectionOptionsRequester | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
