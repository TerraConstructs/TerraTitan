/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53KeySigningKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}
    */
    readonly hostedZoneId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#id Route53KeySigningKey#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}
    */
    readonly keyManagementServiceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#name Route53KeySigningKey#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#status Route53KeySigningKey#status}
    */
    readonly status?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#timeouts Route53KeySigningKey#timeouts}
    */
    readonly timeouts?: Route53KeySigningKeyTimeouts;
}
export interface Route53KeySigningKeyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#create Route53KeySigningKey#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#delete Route53KeySigningKey#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#update Route53KeySigningKey#update}
    */
    readonly update?: string;
}
export declare function route53KeySigningKeyTimeoutsToTerraform(struct?: Route53KeySigningKeyTimeouts | cdktf.IResolvable): any;
export declare function route53KeySigningKeyTimeoutsToHclTerraform(struct?: Route53KeySigningKeyTimeouts | cdktf.IResolvable): any;
export declare class Route53KeySigningKeyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53KeySigningKeyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53KeySigningKeyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key aws_route53_key_signing_key}
*/
export declare class Route53KeySigningKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_key_signing_key";
    /**
    * Generates CDKTF code for importing a Route53KeySigningKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53KeySigningKey to import
    * @param importFromId The id of the existing Route53KeySigningKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53KeySigningKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_key_signing_key aws_route53_key_signing_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53KeySigningKeyConfig
    */
    constructor(scope: Construct, id: string, config: Route53KeySigningKeyConfig);
    get digestAlgorithmMnemonic(): string;
    get digestAlgorithmType(): number;
    get digestValue(): string;
    get dnskeyRecord(): string;
    get dsRecord(): string;
    get flag(): number;
    private _hostedZoneId?;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _keyManagementServiceArn?;
    get keyManagementServiceArn(): string;
    set keyManagementServiceArn(value: string);
    get keyManagementServiceArnInput(): string | undefined;
    get keyTag(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get publicKey(): string;
    get signingAlgorithmMnemonic(): string;
    get signingAlgorithmType(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _timeouts;
    get timeouts(): Route53KeySigningKeyTimeoutsOutputReference;
    putTimeouts(value: Route53KeySigningKeyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53KeySigningKeyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
