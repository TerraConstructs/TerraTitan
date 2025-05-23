/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#accelerator_arn GlobalacceleratorListener#accelerator_arn}
    */
    readonly acceleratorArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#client_affinity GlobalacceleratorListener#client_affinity}
    */
    readonly clientAffinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#id GlobalacceleratorListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#protocol GlobalacceleratorListener#protocol}
    */
    readonly protocol: string;
    /**
    * port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#port_range GlobalacceleratorListener#port_range}
    */
    readonly portRange: GlobalacceleratorListenerPortRange[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#timeouts GlobalacceleratorListener#timeouts}
    */
    readonly timeouts?: GlobalacceleratorListenerTimeouts;
}
export interface GlobalacceleratorListenerPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#from_port GlobalacceleratorListener#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#to_port GlobalacceleratorListener#to_port}
    */
    readonly toPort?: number;
}
export declare function globalacceleratorListenerPortRangeToTerraform(struct?: GlobalacceleratorListenerPortRange | cdktf.IResolvable): any;
export declare function globalacceleratorListenerPortRangeToHclTerraform(struct?: GlobalacceleratorListenerPortRange | cdktf.IResolvable): any;
export declare class GlobalacceleratorListenerPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorListenerPortRange | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorListenerPortRange | cdktf.IResolvable | undefined);
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
export declare class GlobalacceleratorListenerPortRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlobalacceleratorListenerPortRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlobalacceleratorListenerPortRangeOutputReference;
}
export interface GlobalacceleratorListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#create GlobalacceleratorListener#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#delete GlobalacceleratorListener#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#update GlobalacceleratorListener#update}
    */
    readonly update?: string;
}
export declare function globalacceleratorListenerTimeoutsToTerraform(struct?: GlobalacceleratorListenerTimeouts | cdktf.IResolvable): any;
export declare function globalacceleratorListenerTimeoutsToHclTerraform(struct?: GlobalacceleratorListenerTimeouts | cdktf.IResolvable): any;
export declare class GlobalacceleratorListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlobalacceleratorListenerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorListenerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener aws_globalaccelerator_listener}
*/
export declare class GlobalacceleratorListener extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_globalaccelerator_listener";
    /**
    * Generates CDKTF code for importing a GlobalacceleratorListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlobalacceleratorListener to import
    * @param importFromId The id of the existing GlobalacceleratorListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlobalacceleratorListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_listener aws_globalaccelerator_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorListenerConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig);
    private _acceleratorArn?;
    get acceleratorArn(): string;
    set acceleratorArn(value: string);
    get acceleratorArnInput(): string | undefined;
    get arn(): string;
    private _clientAffinity?;
    get clientAffinity(): string;
    set clientAffinity(value: string);
    resetClientAffinity(): void;
    get clientAffinityInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _portRange;
    get portRange(): GlobalacceleratorListenerPortRangeList;
    putPortRange(value: GlobalacceleratorListenerPortRange[] | cdktf.IResolvable): void;
    get portRangeInput(): cdktf.IResolvable | GlobalacceleratorListenerPortRange[] | undefined;
    private _timeouts;
    get timeouts(): GlobalacceleratorListenerTimeoutsOutputReference;
    putTimeouts(value: GlobalacceleratorListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GlobalacceleratorListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
