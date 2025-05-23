/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#availability_zone LightsailInstance#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#blueprint_id LightsailInstance#blueprint_id}
    */
    readonly blueprintId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#bundle_id LightsailInstance#bundle_id}
    */
    readonly bundleId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#id LightsailInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#ip_address_type LightsailInstance#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#key_pair_name LightsailInstance#key_pair_name}
    */
    readonly keyPairName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#name LightsailInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#tags LightsailInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#tags_all LightsailInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#user_data LightsailInstance#user_data}
    */
    readonly userData?: string;
    /**
    * add_on block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#add_on LightsailInstance#add_on}
    */
    readonly addOn?: LightsailInstanceAddOn;
}
export interface LightsailInstanceAddOn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#snapshot_time LightsailInstance#snapshot_time}
    */
    readonly snapshotTime: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#status LightsailInstance#status}
    */
    readonly status: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#type LightsailInstance#type}
    */
    readonly type: string;
}
export declare function lightsailInstanceAddOnToTerraform(struct?: LightsailInstanceAddOnOutputReference | LightsailInstanceAddOn): any;
export declare function lightsailInstanceAddOnToHclTerraform(struct?: LightsailInstanceAddOnOutputReference | LightsailInstanceAddOn): any;
export declare class LightsailInstanceAddOnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailInstanceAddOn | undefined;
    set internalValue(value: LightsailInstanceAddOn | undefined);
    private _snapshotTime?;
    get snapshotTime(): string;
    set snapshotTime(value: string);
    get snapshotTimeInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance aws_lightsail_instance}
*/
export declare class LightsailInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_instance";
    /**
    * Generates CDKTF code for importing a LightsailInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailInstance to import
    * @param importFromId The id of the existing LightsailInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_instance aws_lightsail_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailInstanceConfig
    */
    constructor(scope: Construct, id: string, config: LightsailInstanceConfig);
    get arn(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string | undefined;
    private _blueprintId?;
    get blueprintId(): string;
    set blueprintId(value: string);
    get blueprintIdInput(): string | undefined;
    private _bundleId?;
    get bundleId(): string;
    set bundleId(value: string);
    get bundleIdInput(): string | undefined;
    get cpuCount(): number;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    get ipv6Addresses(): string[];
    get isStaticIp(): cdktf.IResolvable;
    private _keyPairName?;
    get keyPairName(): string;
    set keyPairName(value: string);
    resetKeyPairName(): void;
    get keyPairNameInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get privateIpAddress(): string;
    get publicIpAddress(): string;
    get ramSize(): number;
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
    private _userData?;
    get userData(): string;
    set userData(value: string);
    resetUserData(): void;
    get userDataInput(): string | undefined;
    get username(): string;
    private _addOn;
    get addOn(): LightsailInstanceAddOnOutputReference;
    putAddOn(value: LightsailInstanceAddOn): void;
    resetAddOn(): void;
    get addOnInput(): LightsailInstanceAddOn | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
