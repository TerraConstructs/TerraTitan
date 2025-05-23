/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NatGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#allocation_id NatGateway#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#connectivity_type NatGateway#connectivity_type}
    */
    readonly connectivityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#id NatGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#private_ip NatGateway#private_ip}
    */
    readonly privateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#secondary_allocation_ids NatGateway#secondary_allocation_ids}
    */
    readonly secondaryAllocationIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#secondary_private_ip_address_count NatGateway#secondary_private_ip_address_count}
    */
    readonly secondaryPrivateIpAddressCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#secondary_private_ip_addresses NatGateway#secondary_private_ip_addresses}
    */
    readonly secondaryPrivateIpAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#subnet_id NatGateway#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#tags NatGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#tags_all NatGateway#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#timeouts NatGateway#timeouts}
    */
    readonly timeouts?: NatGatewayTimeouts;
}
export interface NatGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#create NatGateway#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#delete NatGateway#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#update NatGateway#update}
    */
    readonly update?: string;
}
export declare function natGatewayTimeoutsToTerraform(struct?: NatGatewayTimeouts | cdktf.IResolvable): any;
export declare function natGatewayTimeoutsToHclTerraform(struct?: NatGatewayTimeouts | cdktf.IResolvable): any;
export declare class NatGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NatGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NatGatewayTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway aws_nat_gateway}
*/
export declare class NatGateway extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_nat_gateway";
    /**
    * Generates CDKTF code for importing a NatGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NatGateway to import
    * @param importFromId The id of the existing NatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NatGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/nat_gateway aws_nat_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NatGatewayConfig
    */
    constructor(scope: Construct, id: string, config: NatGatewayConfig);
    private _allocationId?;
    get allocationId(): string;
    set allocationId(value: string);
    resetAllocationId(): void;
    get allocationIdInput(): string | undefined;
    get associationId(): string;
    private _connectivityType?;
    get connectivityType(): string;
    set connectivityType(value: string);
    resetConnectivityType(): void;
    get connectivityTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get networkInterfaceId(): string;
    private _privateIp?;
    get privateIp(): string;
    set privateIp(value: string);
    resetPrivateIp(): void;
    get privateIpInput(): string | undefined;
    get publicIp(): string;
    private _secondaryAllocationIds?;
    get secondaryAllocationIds(): string[];
    set secondaryAllocationIds(value: string[]);
    resetSecondaryAllocationIds(): void;
    get secondaryAllocationIdsInput(): string[] | undefined;
    private _secondaryPrivateIpAddressCount?;
    get secondaryPrivateIpAddressCount(): number;
    set secondaryPrivateIpAddressCount(value: number);
    resetSecondaryPrivateIpAddressCount(): void;
    get secondaryPrivateIpAddressCountInput(): number | undefined;
    private _secondaryPrivateIpAddresses?;
    get secondaryPrivateIpAddresses(): string[];
    set secondaryPrivateIpAddresses(value: string[]);
    resetSecondaryPrivateIpAddresses(): void;
    get secondaryPrivateIpAddressesInput(): string[] | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): NatGatewayTimeoutsOutputReference;
    putTimeouts(value: NatGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NatGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
