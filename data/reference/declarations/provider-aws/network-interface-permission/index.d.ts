/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkInterfacePermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission#aws_account_id NetworkInterfacePermission#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission#network_interface_id NetworkInterfacePermission#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission#permission NetworkInterfacePermission#permission}
    */
    readonly permission: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission#timeouts NetworkInterfacePermission#timeouts}
    */
    readonly timeouts?: NetworkInterfacePermissionTimeouts;
}
export interface NetworkInterfacePermissionTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission#create NetworkInterfacePermission#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission#delete NetworkInterfacePermission#delete}
    */
    readonly delete?: string;
}
export declare function networkInterfacePermissionTimeoutsToTerraform(struct?: NetworkInterfacePermissionTimeouts | cdktf.IResolvable): any;
export declare function networkInterfacePermissionTimeoutsToHclTerraform(struct?: NetworkInterfacePermissionTimeouts | cdktf.IResolvable): any;
export declare class NetworkInterfacePermissionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkInterfacePermissionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkInterfacePermissionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission aws_network_interface_permission}
*/
export declare class NetworkInterfacePermission extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_network_interface_permission";
    /**
    * Generates CDKTF code for importing a NetworkInterfacePermission resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkInterfacePermission to import
    * @param importFromId The id of the existing NetworkInterfacePermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkInterfacePermission to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/network_interface_permission aws_network_interface_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkInterfacePermissionConfig
    */
    constructor(scope: Construct, id: string, config: NetworkInterfacePermissionConfig);
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    get awsAccountIdInput(): string | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string | undefined;
    get networkInterfacePermissionId(): string;
    private _permission?;
    get permission(): string;
    set permission(value: string);
    get permissionInput(): string | undefined;
    private _timeouts;
    get timeouts(): NetworkInterfacePermissionTimeoutsOutputReference;
    putTimeouts(value: NetworkInterfacePermissionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkInterfacePermissionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
