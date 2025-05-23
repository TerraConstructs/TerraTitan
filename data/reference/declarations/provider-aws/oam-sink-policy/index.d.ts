/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OamSinkPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#id OamSinkPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#policy OamSinkPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#sink_identifier OamSinkPolicy#sink_identifier}
    */
    readonly sinkIdentifier: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#timeouts OamSinkPolicy#timeouts}
    */
    readonly timeouts?: OamSinkPolicyTimeouts;
}
export interface OamSinkPolicyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#create OamSinkPolicy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#delete OamSinkPolicy#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#update OamSinkPolicy#update}
    */
    readonly update?: string;
}
export declare function oamSinkPolicyTimeoutsToTerraform(struct?: OamSinkPolicyTimeouts | cdktf.IResolvable): any;
export declare function oamSinkPolicyTimeoutsToHclTerraform(struct?: OamSinkPolicyTimeouts | cdktf.IResolvable): any;
export declare class OamSinkPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OamSinkPolicyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OamSinkPolicyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy aws_oam_sink_policy}
*/
export declare class OamSinkPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_oam_sink_policy";
    /**
    * Generates CDKTF code for importing a OamSinkPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OamSinkPolicy to import
    * @param importFromId The id of the existing OamSinkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OamSinkPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_sink_policy aws_oam_sink_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OamSinkPolicyConfig
    */
    constructor(scope: Construct, id: string, config: OamSinkPolicyConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    get sinkId(): string;
    private _sinkIdentifier?;
    get sinkIdentifier(): string;
    set sinkIdentifier(value: string);
    get sinkIdentifierInput(): string | undefined;
    private _timeouts;
    get timeouts(): OamSinkPolicyTimeoutsOutputReference;
    putTimeouts(value: OamSinkPolicyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OamSinkPolicyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
