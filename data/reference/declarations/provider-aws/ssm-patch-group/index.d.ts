/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmPatchGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_group#baseline_id SsmPatchGroup#baseline_id}
    */
    readonly baselineId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_group#id SsmPatchGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_group#patch_group SsmPatchGroup#patch_group}
    */
    readonly patchGroup: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_group aws_ssm_patch_group}
*/
export declare class SsmPatchGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_patch_group";
    /**
    * Generates CDKTF code for importing a SsmPatchGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmPatchGroup to import
    * @param importFromId The id of the existing SsmPatchGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmPatchGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_group aws_ssm_patch_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmPatchGroupConfig
    */
    constructor(scope: Construct, id: string, config: SsmPatchGroupConfig);
    private _baselineId?;
    get baselineId(): string;
    set baselineId(value: string);
    get baselineIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _patchGroup?;
    get patchGroup(): string;
    set patchGroup(value: string);
    get patchGroupInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
