/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalacceleratorCustomRoutingAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#enabled GlobalacceleratorCustomRoutingAccelerator#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#id GlobalacceleratorCustomRoutingAccelerator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_address_type GlobalacceleratorCustomRoutingAccelerator#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#ip_addresses GlobalacceleratorCustomRoutingAccelerator#ip_addresses}
    */
    readonly ipAddresses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#name GlobalacceleratorCustomRoutingAccelerator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags GlobalacceleratorCustomRoutingAccelerator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#tags_all GlobalacceleratorCustomRoutingAccelerator#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#attributes GlobalacceleratorCustomRoutingAccelerator#attributes}
    */
    readonly attributes?: GlobalacceleratorCustomRoutingAcceleratorAttributes;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#timeouts GlobalacceleratorCustomRoutingAccelerator#timeouts}
    */
    readonly timeouts?: GlobalacceleratorCustomRoutingAcceleratorTimeouts;
}
export interface GlobalacceleratorCustomRoutingAcceleratorIpSets {
}
export declare function globalacceleratorCustomRoutingAcceleratorIpSetsToTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorIpSets): any;
export declare function globalacceleratorCustomRoutingAcceleratorIpSetsToHclTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorIpSets): any;
export declare class GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlobalacceleratorCustomRoutingAcceleratorIpSets | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingAcceleratorIpSets | undefined);
    get ipAddresses(): string[];
    get ipFamily(): string;
}
export declare class GlobalacceleratorCustomRoutingAcceleratorIpSetsList extends cdktf.ComplexList {
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
    get(index: number): GlobalacceleratorCustomRoutingAcceleratorIpSetsOutputReference;
}
export interface GlobalacceleratorCustomRoutingAcceleratorAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_enabled GlobalacceleratorCustomRoutingAccelerator#flow_logs_enabled}
    */
    readonly flowLogsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_bucket GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_bucket}
    */
    readonly flowLogsS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#flow_logs_s3_prefix GlobalacceleratorCustomRoutingAccelerator#flow_logs_s3_prefix}
    */
    readonly flowLogsS3Prefix?: string;
}
export declare function globalacceleratorCustomRoutingAcceleratorAttributesToTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference | GlobalacceleratorCustomRoutingAcceleratorAttributes): any;
export declare function globalacceleratorCustomRoutingAcceleratorAttributesToHclTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference | GlobalacceleratorCustomRoutingAcceleratorAttributes): any;
export declare class GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlobalacceleratorCustomRoutingAcceleratorAttributes | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingAcceleratorAttributes | undefined);
    private _flowLogsEnabled?;
    get flowLogsEnabled(): boolean | cdktf.IResolvable;
    set flowLogsEnabled(value: boolean | cdktf.IResolvable);
    resetFlowLogsEnabled(): void;
    get flowLogsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _flowLogsS3Bucket?;
    get flowLogsS3Bucket(): string;
    set flowLogsS3Bucket(value: string);
    resetFlowLogsS3Bucket(): void;
    get flowLogsS3BucketInput(): string | undefined;
    private _flowLogsS3Prefix?;
    get flowLogsS3Prefix(): string;
    set flowLogsS3Prefix(value: string);
    resetFlowLogsS3Prefix(): void;
    get flowLogsS3PrefixInput(): string | undefined;
}
export interface GlobalacceleratorCustomRoutingAcceleratorTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#create GlobalacceleratorCustomRoutingAccelerator#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#update GlobalacceleratorCustomRoutingAccelerator#update}
    */
    readonly update?: string;
}
export declare function globalacceleratorCustomRoutingAcceleratorTimeoutsToTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorTimeouts | cdktf.IResolvable): any;
export declare function globalacceleratorCustomRoutingAcceleratorTimeoutsToHclTerraform(struct?: GlobalacceleratorCustomRoutingAcceleratorTimeouts | cdktf.IResolvable): any;
export declare class GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlobalacceleratorCustomRoutingAcceleratorTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: GlobalacceleratorCustomRoutingAcceleratorTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator}
*/
export declare class GlobalacceleratorCustomRoutingAccelerator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_globalaccelerator_custom_routing_accelerator";
    /**
    * Generates CDKTF code for importing a GlobalacceleratorCustomRoutingAccelerator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlobalacceleratorCustomRoutingAccelerator to import
    * @param importFromId The id of the existing GlobalacceleratorCustomRoutingAccelerator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlobalacceleratorCustomRoutingAccelerator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/globalaccelerator_custom_routing_accelerator aws_globalaccelerator_custom_routing_accelerator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorCustomRoutingAcceleratorConfig
    */
    constructor(scope: Construct, id: string, config: GlobalacceleratorCustomRoutingAcceleratorConfig);
    get arn(): string;
    get dnsName(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    get hostedZoneId(): string;
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
    private _ipAddresses?;
    get ipAddresses(): string[];
    set ipAddresses(value: string[]);
    resetIpAddresses(): void;
    get ipAddressesInput(): string[] | undefined;
    private _ipSets;
    get ipSets(): GlobalacceleratorCustomRoutingAcceleratorIpSetsList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _attributes;
    get attributes(): GlobalacceleratorCustomRoutingAcceleratorAttributesOutputReference;
    putAttributes(value: GlobalacceleratorCustomRoutingAcceleratorAttributes): void;
    resetAttributes(): void;
    get attributesInput(): GlobalacceleratorCustomRoutingAcceleratorAttributes | undefined;
    private _timeouts;
    get timeouts(): GlobalacceleratorCustomRoutingAcceleratorTimeoutsOutputReference;
    putTimeouts(value: GlobalacceleratorCustomRoutingAcceleratorTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | GlobalacceleratorCustomRoutingAcceleratorTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
