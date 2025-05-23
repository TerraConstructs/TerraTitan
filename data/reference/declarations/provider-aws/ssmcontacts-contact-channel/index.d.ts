/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmcontactsContactChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel#contact_id SsmcontactsContactChannel#contact_id}
    */
    readonly contactId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel#id SsmcontactsContactChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel#name SsmcontactsContactChannel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel#type SsmcontactsContactChannel#type}
    */
    readonly type: string;
    /**
    * delivery_address block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel#delivery_address SsmcontactsContactChannel#delivery_address}
    */
    readonly deliveryAddress: SsmcontactsContactChannelDeliveryAddress;
}
export interface SsmcontactsContactChannelDeliveryAddress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel#simple_address SsmcontactsContactChannel#simple_address}
    */
    readonly simpleAddress: string;
}
export declare function ssmcontactsContactChannelDeliveryAddressToTerraform(struct?: SsmcontactsContactChannelDeliveryAddressOutputReference | SsmcontactsContactChannelDeliveryAddress): any;
export declare function ssmcontactsContactChannelDeliveryAddressToHclTerraform(struct?: SsmcontactsContactChannelDeliveryAddressOutputReference | SsmcontactsContactChannelDeliveryAddress): any;
export declare class SsmcontactsContactChannelDeliveryAddressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmcontactsContactChannelDeliveryAddress | undefined;
    set internalValue(value: SsmcontactsContactChannelDeliveryAddress | undefined);
    private _simpleAddress?;
    get simpleAddress(): string;
    set simpleAddress(value: string);
    get simpleAddressInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel}
*/
export declare class SsmcontactsContactChannel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssmcontacts_contact_channel";
    /**
    * Generates CDKTF code for importing a SsmcontactsContactChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmcontactsContactChannel to import
    * @param importFromId The id of the existing SsmcontactsContactChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmcontactsContactChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmcontactsContactChannelConfig
    */
    constructor(scope: Construct, id: string, config: SsmcontactsContactChannelConfig);
    get activationStatus(): string;
    get arn(): string;
    private _contactId?;
    get contactId(): string;
    set contactId(value: string);
    get contactIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _deliveryAddress;
    get deliveryAddress(): SsmcontactsContactChannelDeliveryAddressOutputReference;
    putDeliveryAddress(value: SsmcontactsContactChannelDeliveryAddress): void;
    get deliveryAddressInput(): SsmcontactsContactChannelDeliveryAddress | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
