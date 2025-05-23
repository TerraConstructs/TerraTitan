/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorCustomRoutingListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#accelerator_arn GlobalacceleratorCustomRoutingListener#accelerator_arn}
    */
    readonly acceleratorArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#id GlobalacceleratorCustomRoutingListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#port_range GlobalacceleratorCustomRoutingListener#port_range}
    */
    readonly portRange: GlobalacceleratorCustomRoutingListenerPortRange[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#timeouts GlobalacceleratorCustomRoutingListener#timeouts}
    */
    readonly timeouts?: GlobalacceleratorCustomRoutingListenerTimeouts;
}
export interface GlobalacceleratorCustomRoutingListenerPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#from_port GlobalacceleratorCustomRoutingListener#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#to_port GlobalacceleratorCustomRoutingListener#to_port}
    */
    readonly toPort?: number;
}
export declare function globalacceleratorCustomRoutingListenerPortRangeToTerraform(struct?: GlobalacceleratorCustomRoutingListenerPortRange | cdktf.IResolvable): any;
export declare function globalacceleratorCustomRoutingListenerPortRangeToHclTerraform(struct?: GlobalacceleratorCustomRoutingListenerPortRange | cdktf.IResolvable): any;
export declare class GlobalacceleratorCustomRoutingListenerPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorCustomRoutingListenerPortRange | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingListenerPortRange | cdktf.IResolvable | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    resetFromPort(): void;
    get fromPortInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
}
export declare class GlobalacceleratorCustomRoutingListenerPortRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlobalacceleratorCustomRoutingListenerPortRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlobalacceleratorCustomRoutingListenerPortRangeOutputReference;
}
export interface GlobalacceleratorCustomRoutingListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#create GlobalacceleratorCustomRoutingListener#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#delete GlobalacceleratorCustomRoutingListener#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#update GlobalacceleratorCustomRoutingListener#update}
    */
    readonly update?: string;
}
export declare function globalacceleratorCustomRoutingListenerTimeoutsToTerraform(struct?: GlobalacceleratorCustomRoutingListenerTimeouts | cdktf.IResolvable): any;
export declare function globalacceleratorCustomRoutingListenerTimeoutsToHclTerraform(struct?: GlobalacceleratorCustomRoutingListenerTimeouts | cdktf.IResolvable): any;
export declare class GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlobalacceleratorCustomRoutingListenerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingListenerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener aws_globalaccelerator_custom_routing_listener}
*/
export declare class GlobalacceleratorCustomRoutingListener extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_globalaccelerator_custom_routing_listener";
    /**
    * Generates CDKTF code for importing a GlobalacceleratorCustomRoutingListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlobalacceleratorCustomRoutingListener to import
    * @param importFromId The id of the existing GlobalacceleratorCustomRoutingListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlobalacceleratorCustomRoutingListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_listener aws_globalaccelerator_custom_routing_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorCustomRoutingListenerConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorCustomRoutingListenerConfig);
    private _acceleratorArn?;
    get acceleratorArn(): string;
    set acceleratorArn(value: string);
    get acceleratorArnInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _portRange;
    get portRange(): GlobalacceleratorCustomRoutingListenerPortRangeList;
    putPortRange(value: GlobalacceleratorCustomRoutingListenerPortRange[] | cdktf.IResolvable): void;
    get portRangeInput(): cdktf.IResolvable | GlobalacceleratorCustomRoutingListenerPortRange[] | undefined;
    private _timeouts;
    get timeouts(): GlobalacceleratorCustomRoutingListenerTimeoutsOutputReference;
    putTimeouts(value: GlobalacceleratorCustomRoutingListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GlobalacceleratorCustomRoutingListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
