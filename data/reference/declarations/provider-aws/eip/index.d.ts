/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#address Eip#address}
    */
    readonly address?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#associate_with_private_ip Eip#associate_with_private_ip}
    */
    readonly associateWithPrivateIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#customer_owned_ipv4_pool Eip#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#domain Eip#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#id Eip#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#instance Eip#instance}
    */
    readonly instance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#ipam_pool_id Eip#ipam_pool_id}
    */
    readonly ipamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#network_border_group Eip#network_border_group}
    */
    readonly networkBorderGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#network_interface Eip#network_interface}
    */
    readonly networkInterface?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#public_ipv4_pool Eip#public_ipv4_pool}
    */
    readonly publicIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#tags Eip#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#tags_all Eip#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#vpc Eip#vpc}
    */
    readonly vpc?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#timeouts Eip#timeouts}
    */
    readonly timeouts?: EipTimeouts;
}
export interface EipTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#delete Eip#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#read Eip#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#update Eip#update}
    */
    readonly update?: string;
}
export declare function eipTimeoutsToTerraform(struct?: EipTimeouts | cdktf.IResolvable): any;
export declare function eipTimeoutsToHclTerraform(struct?: EipTimeouts | cdktf.IResolvable): any;
export declare class EipTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EipTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EipTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip aws_eip}
*/
export declare class Eip extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_eip";
    /**
    * Generates CDKTF code for importing a Eip resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Eip to import
    * @param importFromId The id of the existing Eip that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Eip to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/eip aws_eip} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EipConfig = {}
    */
    constructor(scope: Construct, id: string, config?: EipConfig);
    private _address?;
    get address(): string;
    set address(value: string);
    resetAddress(): void;
    get addressInput(): string | undefined;
    get allocationId(): string;
    get arn(): string;
    private _associateWithPrivateIp?;
    get associateWithPrivateIp(): string;
    set associateWithPrivateIp(value: string);
    resetAssociateWithPrivateIp(): void;
    get associateWithPrivateIpInput(): string | undefined;
    get associationId(): string;
    get carrierIp(): string;
    get customerOwnedIp(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string | undefined;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    resetDomain(): void;
    get domainInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instance?;
    get instance(): string;
    set instance(value: string);
    resetInstance(): void;
    get instanceInput(): string | undefined;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    resetIpamPoolId(): void;
    get ipamPoolIdInput(): string | undefined;
    private _networkBorderGroup?;
    get networkBorderGroup(): string;
    set networkBorderGroup(value: string);
    resetNetworkBorderGroup(): void;
    get networkBorderGroupInput(): string | undefined;
    private _networkInterface?;
    get networkInterface(): string;
    set networkInterface(value: string);
    resetNetworkInterface(): void;
    get networkInterfaceInput(): string | undefined;
    get privateDns(): string;
    get privateIp(): string;
    get ptrRecord(): string;
    get publicDns(): string;
    get publicIp(): string;
    private _publicIpv4Pool?;
    get publicIpv4Pool(): string;
    set publicIpv4Pool(value: string);
    resetPublicIpv4Pool(): void;
    get publicIpv4PoolInput(): string | undefined;
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
    private _vpc?;
    get vpc(): boolean | cdktf.IResolvable;
    set vpc(value: boolean | cdktf.IResolvable);
    resetVpc(): void;
    get vpcInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): EipTimeoutsOutputReference;
    putTimeouts(value: EipTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EipTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
