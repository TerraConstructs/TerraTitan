/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointServicePrivateDnsVerificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_service_private_dns_verification#service_id VpcEndpointServicePrivateDnsVerification#service_id}
    */
    readonly serviceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_service_private_dns_verification#wait_for_verification VpcEndpointServicePrivateDnsVerification#wait_for_verification}
    */
    readonly waitForVerification?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_service_private_dns_verification#timeouts VpcEndpointServicePrivateDnsVerification#timeouts}
    */
    readonly timeouts?: VpcEndpointServicePrivateDnsVerificationTimeouts;
}
export interface VpcEndpointServicePrivateDnsVerificationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_service_private_dns_verification#create VpcEndpointServicePrivateDnsVerification#create}
    */
    readonly create?: string;
}
export declare function vpcEndpointServicePrivateDnsVerificationTimeoutsToTerraform(struct?: VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable): any;
export declare function vpcEndpointServicePrivateDnsVerificationTimeoutsToHclTerraform(struct?: VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable): any;
export declare class VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcEndpointServicePrivateDnsVerificationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_service_private_dns_verification aws_vpc_endpoint_service_private_dns_verification}
*/
export declare class VpcEndpointServicePrivateDnsVerification extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint_service_private_dns_verification";
    /**
    * Generates CDKTF code for importing a VpcEndpointServicePrivateDnsVerification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpointServicePrivateDnsVerification to import
    * @param importFromId The id of the existing VpcEndpointServicePrivateDnsVerification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_service_private_dns_verification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpointServicePrivateDnsVerification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_service_private_dns_verification aws_vpc_endpoint_service_private_dns_verification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServicePrivateDnsVerificationConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointServicePrivateDnsVerificationConfig);
    private _serviceId?;
    get serviceId(): string;
    set serviceId(value: string);
    get serviceIdInput(): string | undefined;
    private _waitForVerification?;
    get waitForVerification(): boolean | cdktf.IResolvable;
    set waitForVerification(value: boolean | cdktf.IResolvable);
    resetWaitForVerification(): void;
    get waitForVerificationInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): VpcEndpointServicePrivateDnsVerificationTimeoutsOutputReference;
    putTimeouts(value: VpcEndpointServicePrivateDnsVerificationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcEndpointServicePrivateDnsVerificationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
