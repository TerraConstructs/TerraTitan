/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53TrafficPolicyInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}
    */
    readonly trafficPolicyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}
    */
    readonly trafficPolicyVersion: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}
    */
    readonly ttl: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance aws_route53_traffic_policy_instance}
*/
export declare class Route53TrafficPolicyInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_traffic_policy_instance";
    /**
    * Generates CDKTF code for importing a Route53TrafficPolicyInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53TrafficPolicyInstance to import
    * @param importFromId The id of the existing Route53TrafficPolicyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53TrafficPolicyInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_traffic_policy_instance aws_route53_traffic_policy_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53TrafficPolicyInstanceConfig
    */
    constructor(scope: Construct, id: string, config: Route53TrafficPolicyInstanceConfig);
    private _hostedZoneId?;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _trafficPolicyId?;
    get trafficPolicyId(): string;
    set trafficPolicyId(value: string);
    get trafficPolicyIdInput(): string | undefined;
    private _trafficPolicyVersion?;
    get trafficPolicyVersion(): number;
    set trafficPolicyVersion(value: number);
    get trafficPolicyVersionInput(): number | undefined;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    get ttlInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
