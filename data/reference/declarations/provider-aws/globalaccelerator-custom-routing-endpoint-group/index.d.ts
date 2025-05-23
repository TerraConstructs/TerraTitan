/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorCustomRoutingEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_group_region GlobalacceleratorCustomRoutingEndpointGroup#endpoint_group_region}
    */
    readonly endpointGroupRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#id GlobalacceleratorCustomRoutingEndpointGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#listener_arn GlobalacceleratorCustomRoutingEndpointGroup#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * destination_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#destination_configuration GlobalacceleratorCustomRoutingEndpointGroup#destination_configuration}
    */
    readonly destinationConfiguration: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[] | cdktf.IResolvable;
    /**
    * endpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_configuration GlobalacceleratorCustomRoutingEndpointGroup#endpoint_configuration}
    */
    readonly endpointConfiguration?: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#timeouts GlobalacceleratorCustomRoutingEndpointGroup#timeouts}
    */
    readonly timeouts?: GlobalacceleratorCustomRoutingEndpointGroupTimeouts;
}
export interface GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#from_port GlobalacceleratorCustomRoutingEndpointGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#protocols GlobalacceleratorCustomRoutingEndpointGroup#protocols}
    */
    readonly protocols: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#to_port GlobalacceleratorCustomRoutingEndpointGroup#to_port}
    */
    readonly toPort: number;
}
export declare function globalacceleratorCustomRoutingEndpointGroupDestinationConfigurationToTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktf.IResolvable): any;
export declare function globalacceleratorCustomRoutingEndpointGroupDestinationConfigurationToHclTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktf.IResolvable): any;
export declare class GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration | cdktf.IResolvable | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number | undefined;
    private _protocols?;
    get protocols(): string[];
    set protocols(value: string[]);
    get protocolsInput(): string[] | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
}
export declare class GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationOutputReference;
}
export interface GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#endpoint_id GlobalacceleratorCustomRoutingEndpointGroup#endpoint_id}
    */
    readonly endpointId?: string;
}
export declare function globalacceleratorCustomRoutingEndpointGroupEndpointConfigurationToTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktf.IResolvable): any;
export declare function globalacceleratorCustomRoutingEndpointGroupEndpointConfigurationToHclTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktf.IResolvable): any;
export declare class GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration | cdktf.IResolvable | undefined);
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    resetEndpointId(): void;
    get endpointIdInput(): string | undefined;
}
export declare class GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationOutputReference;
}
export interface GlobalacceleratorCustomRoutingEndpointGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#create GlobalacceleratorCustomRoutingEndpointGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#delete GlobalacceleratorCustomRoutingEndpointGroup#delete}
    */
    readonly delete?: string;
}
export declare function globalacceleratorCustomRoutingEndpointGroupTimeoutsToTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktf.IResolvable): any;
export declare function globalacceleratorCustomRoutingEndpointGroupTimeoutsToHclTerraform(struct?: GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktf.IResolvable): any;
export declare class GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingEndpointGroupTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group aws_globalaccelerator_custom_routing_endpoint_group}
*/
export declare class GlobalacceleratorCustomRoutingEndpointGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_globalaccelerator_custom_routing_endpoint_group";
    /**
    * Generates CDKTF code for importing a GlobalacceleratorCustomRoutingEndpointGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlobalacceleratorCustomRoutingEndpointGroup to import
    * @param importFromId The id of the existing GlobalacceleratorCustomRoutingEndpointGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlobalacceleratorCustomRoutingEndpointGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_endpoint_group aws_globalaccelerator_custom_routing_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorCustomRoutingEndpointGroupConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorCustomRoutingEndpointGroupConfig);
    get arn(): string;
    private _endpointGroupRegion?;
    get endpointGroupRegion(): string;
    set endpointGroupRegion(value: string);
    resetEndpointGroupRegion(): void;
    get endpointGroupRegionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _listenerArn?;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string | undefined;
    private _destinationConfiguration;
    get destinationConfiguration(): GlobalacceleratorCustomRoutingEndpointGroupDestinationConfigurationList;
    putDestinationConfiguration(value: GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[] | cdktf.IResolvable): void;
    get destinationConfigurationInput(): cdktf.IResolvable | GlobalacceleratorCustomRoutingEndpointGroupDestinationConfiguration[] | undefined;
    private _endpointConfiguration;
    get endpointConfiguration(): GlobalacceleratorCustomRoutingEndpointGroupEndpointConfigurationList;
    putEndpointConfiguration(value: GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | cdktf.IResolvable): void;
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): cdktf.IResolvable | GlobalacceleratorCustomRoutingEndpointGroupEndpointConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): GlobalacceleratorCustomRoutingEndpointGroupTimeoutsOutputReference;
    putTimeouts(value: GlobalacceleratorCustomRoutingEndpointGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GlobalacceleratorCustomRoutingEndpointGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
