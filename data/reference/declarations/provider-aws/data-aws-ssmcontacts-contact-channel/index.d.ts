/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmcontactsContactChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_contact_channel#arn DataAwsSsmcontactsContactChannel#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_contact_channel#id DataAwsSsmcontactsContactChannel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsSsmcontactsContactChannelDeliveryAddress {
}
export declare function dataAwsSsmcontactsContactChannelDeliveryAddressToTerraform(struct?: DataAwsSsmcontactsContactChannelDeliveryAddress): any;
export declare function dataAwsSsmcontactsContactChannelDeliveryAddressToHclTerraform(struct?: DataAwsSsmcontactsContactChannelDeliveryAddress): any;
export declare class DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsContactChannelDeliveryAddress | undefined;
    set internalValue(value: DataAwsSsmcontactsContactChannelDeliveryAddress | undefined);
    get simpleAddress(): string;
}
export declare class DataAwsSsmcontactsContactChannelDeliveryAddressList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsmcontactsContactChannelDeliveryAddressOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel}
*/
export declare class DataAwsSsmcontactsContactChannel extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssmcontacts_contact_channel";
    /**
    * Generates CDKTF code for importing a DataAwsSsmcontactsContactChannel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmcontactsContactChannel to import
    * @param importFromId The id of the existing DataAwsSsmcontactsContactChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_contact_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmcontactsContactChannel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_contact_channel aws_ssmcontacts_contact_channel} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmcontactsContactChannelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmcontactsContactChannelConfig);
    get activationStatus(): string;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get contactId(): string;
    private _deliveryAddress;
    get deliveryAddress(): DataAwsSsmcontactsContactChannelDeliveryAddressList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
