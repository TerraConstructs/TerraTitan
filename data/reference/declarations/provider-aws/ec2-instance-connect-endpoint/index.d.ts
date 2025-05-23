/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2InstanceConnectEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#preserve_client_ip Ec2InstanceConnectEndpoint#preserve_client_ip}
    */
    readonly preserveClientIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#security_group_ids Ec2InstanceConnectEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#subnet_id Ec2InstanceConnectEndpoint#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#tags Ec2InstanceConnectEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#timeouts Ec2InstanceConnectEndpoint#timeouts}
    */
    readonly timeouts?: Ec2InstanceConnectEndpointTimeouts;
}
export interface Ec2InstanceConnectEndpointTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#create Ec2InstanceConnectEndpoint#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#delete Ec2InstanceConnectEndpoint#delete}
    */
    readonly delete?: string;
}
export declare function ec2InstanceConnectEndpointTimeoutsToTerraform(struct?: Ec2InstanceConnectEndpointTimeouts | cdktf.IResolvable): any;
export declare function ec2InstanceConnectEndpointTimeoutsToHclTerraform(struct?: Ec2InstanceConnectEndpointTimeouts | cdktf.IResolvable): any;
export declare class Ec2InstanceConnectEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2InstanceConnectEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2InstanceConnectEndpointTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint aws_ec2_instance_connect_endpoint}
*/
export declare class Ec2InstanceConnectEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_instance_connect_endpoint";
    /**
    * Generates CDKTF code for importing a Ec2InstanceConnectEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2InstanceConnectEndpoint to import
    * @param importFromId The id of the existing Ec2InstanceConnectEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2InstanceConnectEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_connect_endpoint aws_ec2_instance_connect_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2InstanceConnectEndpointConfig
    */
    constructor(scope: Construct, id: string, config: Ec2InstanceConnectEndpointConfig);
    get arn(): string;
    get availabilityZone(): string;
    get dnsName(): string;
    get fipsDnsName(): string;
    get id(): string;
    get networkInterfaceIds(): string[];
    get ownerId(): string;
    private _preserveClientIp?;
    get preserveClientIp(): boolean | cdktf.IResolvable;
    set preserveClientIp(value: boolean | cdktf.IResolvable);
    resetPreserveClientIp(): void;
    get preserveClientIpInput(): boolean | cdktf.IResolvable | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get vpcId(): string;
    private _timeouts;
    get timeouts(): Ec2InstanceConnectEndpointTimeoutsOutputReference;
    putTimeouts(value: Ec2InstanceConnectEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2InstanceConnectEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
