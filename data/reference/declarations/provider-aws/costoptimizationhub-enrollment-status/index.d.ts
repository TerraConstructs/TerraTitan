/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CostoptimizationhubEnrollmentStatusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_enrollment_status#include_member_accounts CostoptimizationhubEnrollmentStatus#include_member_accounts}
    */
    readonly includeMemberAccounts?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_enrollment_status aws_costoptimizationhub_enrollment_status}
*/
export declare class CostoptimizationhubEnrollmentStatus extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_costoptimizationhub_enrollment_status";
    /**
    * Generates CDKTF code for importing a CostoptimizationhubEnrollmentStatus resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CostoptimizationhubEnrollmentStatus to import
    * @param importFromId The id of the existing CostoptimizationhubEnrollmentStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_enrollment_status#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CostoptimizationhubEnrollmentStatus to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/costoptimizationhub_enrollment_status aws_costoptimizationhub_enrollment_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CostoptimizationhubEnrollmentStatusConfig = {}
    */
    constructor(scope: Construct, id: string, config?: CostoptimizationhubEnrollmentStatusConfig);
    get id(): string;
    private _includeMemberAccounts?;
    get includeMemberAccounts(): boolean | cdktf.IResolvable;
    set includeMemberAccounts(value: boolean | cdktf.IResolvable);
    resetIncludeMemberAccounts(): void;
    get includeMemberAccountsInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
