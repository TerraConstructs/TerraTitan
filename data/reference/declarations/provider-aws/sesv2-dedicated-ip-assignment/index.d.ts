/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2DedicatedIpAssignmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment#destination_pool_name Sesv2DedicatedIpAssignment#destination_pool_name}
    */
    readonly destinationPoolName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment#id Sesv2DedicatedIpAssignment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment#ip Sesv2DedicatedIpAssignment#ip}
    */
    readonly ip: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment#timeouts Sesv2DedicatedIpAssignment#timeouts}
    */
    readonly timeouts?: Sesv2DedicatedIpAssignmentTimeouts;
}
export interface Sesv2DedicatedIpAssignmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment#create Sesv2DedicatedIpAssignment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment#delete Sesv2DedicatedIpAssignment#delete}
    */
    readonly delete?: string;
}
export declare function sesv2DedicatedIpAssignmentTimeoutsToTerraform(struct?: Sesv2DedicatedIpAssignmentTimeouts | cdktf.IResolvable): any;
export declare function sesv2DedicatedIpAssignmentTimeoutsToHclTerraform(struct?: Sesv2DedicatedIpAssignmentTimeouts | cdktf.IResolvable): any;
export declare class Sesv2DedicatedIpAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Sesv2DedicatedIpAssignmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Sesv2DedicatedIpAssignmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment aws_sesv2_dedicated_ip_assignment}
*/
export declare class Sesv2DedicatedIpAssignment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_dedicated_ip_assignment";
    /**
    * Generates CDKTF code for importing a Sesv2DedicatedIpAssignment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2DedicatedIpAssignment to import
    * @param importFromId The id of the existing Sesv2DedicatedIpAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2DedicatedIpAssignment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_dedicated_ip_assignment aws_sesv2_dedicated_ip_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2DedicatedIpAssignmentConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2DedicatedIpAssignmentConfig);
    private _destinationPoolName?;
    get destinationPoolName(): string;
    set destinationPoolName(value: string);
    get destinationPoolNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ip?;
    get ip(): string;
    set ip(value: string);
    get ipInput(): string | undefined;
    private _timeouts;
    get timeouts(): Sesv2DedicatedIpAssignmentTimeoutsOutputReference;
    putTimeouts(value: Sesv2DedicatedIpAssignmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Sesv2DedicatedIpAssignmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
