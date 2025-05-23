/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_account#auto_enable_controls SecurityhubAccount#auto_enable_controls}
    */
    readonly autoEnableControls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_account#control_finding_generator SecurityhubAccount#control_finding_generator}
    */
    readonly controlFindingGenerator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_account#enable_default_standards SecurityhubAccount#enable_default_standards}
    */
    readonly enableDefaultStandards?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_account#id SecurityhubAccount#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_account aws_securityhub_account}
*/
export declare class SecurityhubAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_account";
    /**
    * Generates CDKTF code for importing a SecurityhubAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubAccount to import
    * @param importFromId The id of the existing SecurityhubAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_account aws_securityhub_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubAccountConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SecurityhubAccountConfig);
    get arn(): string;
    private _autoEnableControls?;
    get autoEnableControls(): boolean | cdktf.IResolvable;
    set autoEnableControls(value: boolean | cdktf.IResolvable);
    resetAutoEnableControls(): void;
    get autoEnableControlsInput(): boolean | cdktf.IResolvable | undefined;
    private _controlFindingGenerator?;
    get controlFindingGenerator(): string;
    set controlFindingGenerator(value: string);
    resetControlFindingGenerator(): void;
    get controlFindingGeneratorInput(): string | undefined;
    private _enableDefaultStandards?;
    get enableDefaultStandards(): boolean | cdktf.IResolvable;
    set enableDefaultStandards(value: boolean | cdktf.IResolvable);
    resetEnableDefaultStandards(): void;
    get enableDefaultStandardsInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
