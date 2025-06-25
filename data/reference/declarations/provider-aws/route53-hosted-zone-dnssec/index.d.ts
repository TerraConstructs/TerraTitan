/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53HostedZoneDnssecConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#hosted_zone_id Route53HostedZoneDnssec#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#id Route53HostedZoneDnssec#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#signing_status Route53HostedZoneDnssec#signing_status}
    */
    readonly signingStatus?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#timeouts Route53HostedZoneDnssec#timeouts}
    */
    readonly timeouts?: Route53HostedZoneDnssecTimeouts;
}
export interface Route53HostedZoneDnssecTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#create Route53HostedZoneDnssec#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#delete Route53HostedZoneDnssec#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#update Route53HostedZoneDnssec#update}
    */
    readonly update?: string;
}
export declare function route53HostedZoneDnssecTimeoutsToTerraform(struct?: Route53HostedZoneDnssecTimeouts | cdktf.IResolvable): any;
export declare function route53HostedZoneDnssecTimeoutsToHclTerraform(struct?: Route53HostedZoneDnssecTimeouts | cdktf.IResolvable): any;
export declare class Route53HostedZoneDnssecTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53HostedZoneDnssecTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53HostedZoneDnssecTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec}
*/
export declare class Route53HostedZoneDnssec extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_hosted_zone_dnssec";
    /**
    * Generates CDKTF code for importing a Route53HostedZoneDnssec resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53HostedZoneDnssec to import
    * @param importFromId The id of the existing Route53HostedZoneDnssec that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53HostedZoneDnssec to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_hosted_zone_dnssec aws_route53_hosted_zone_dnssec} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HostedZoneDnssecConfig
    */
    constructor(scope: Construct, id: string, config: Route53HostedZoneDnssecConfig);
    private _hostedZoneId?;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _signingStatus?;
    get signingStatus(): string;
    set signingStatus(value: string);
    resetSigningStatus(): void;
    get signingStatusInput(): string | undefined;
    private _timeouts;
    get timeouts(): Route53HostedZoneDnssecTimeoutsOutputReference;
    putTimeouts(value: Route53HostedZoneDnssecTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53HostedZoneDnssecTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
