/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudhsmV2HsmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#availability_zone CloudhsmV2Hsm#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#cluster_id CloudhsmV2Hsm#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#id CloudhsmV2Hsm#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#ip_address CloudhsmV2Hsm#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#subnet_id CloudhsmV2Hsm#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#timeouts CloudhsmV2Hsm#timeouts}
    */
    readonly timeouts?: CloudhsmV2HsmTimeouts;
}
export interface CloudhsmV2HsmTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#create CloudhsmV2Hsm#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#delete CloudhsmV2Hsm#delete}
    */
    readonly delete?: string;
}
export declare function cloudhsmV2HsmTimeoutsToTerraform(struct?: CloudhsmV2HsmTimeouts | cdktf.IResolvable): any;
export declare function cloudhsmV2HsmTimeoutsToHclTerraform(struct?: CloudhsmV2HsmTimeouts | cdktf.IResolvable): any;
export declare class CloudhsmV2HsmTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudhsmV2HsmTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudhsmV2HsmTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm aws_cloudhsm_v2_hsm}
*/
export declare class CloudhsmV2Hsm extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudhsm_v2_hsm";
    /**
    * Generates CDKTF code for importing a CloudhsmV2Hsm resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudhsmV2Hsm to import
    * @param importFromId The id of the existing CloudhsmV2Hsm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudhsmV2Hsm to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudhsm_v2_hsm aws_cloudhsm_v2_hsm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudhsmV2HsmConfig
    */
    constructor(scope: Construct, id: string, config: CloudhsmV2HsmConfig);
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string | undefined;
    get hsmEniId(): string;
    get hsmId(): string;
    get hsmState(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): CloudhsmV2HsmTimeoutsOutputReference;
    putTimeouts(value: CloudhsmV2HsmTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudhsmV2HsmTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
