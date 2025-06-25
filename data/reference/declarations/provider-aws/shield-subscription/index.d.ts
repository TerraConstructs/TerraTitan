/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ShieldSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Whether to automatically renew the subscription when it expires.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_subscription#auto_renew ShieldSubscription#auto_renew}
    */
    readonly autoRenew?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_subscription#skip_destroy ShieldSubscription#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_subscription aws_shield_subscription}
*/
export declare class ShieldSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_shield_subscription";
    /**
    * Generates CDKTF code for importing a ShieldSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ShieldSubscription to import
    * @param importFromId The id of the existing ShieldSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ShieldSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/shield_subscription aws_shield_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldSubscriptionConfig = {}
    */
    constructor(scope: Construct, id: string, config?: ShieldSubscriptionConfig);
    private _autoRenew?;
    get autoRenew(): string;
    set autoRenew(value: string);
    resetAutoRenew(): void;
    get autoRenewInput(): string | undefined;
    get id(): string;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
