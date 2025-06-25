/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ComputeoptimizerEnrollmentStatusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}
    */
    readonly includeMemberAccounts?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}
    */
    readonly status: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status#timeouts ComputeoptimizerEnrollmentStatus#timeouts}
    */
    readonly timeouts?: ComputeoptimizerEnrollmentStatusTimeouts;
}
export interface ComputeoptimizerEnrollmentStatusTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status#create ComputeoptimizerEnrollmentStatus#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status#update ComputeoptimizerEnrollmentStatus#update}
    */
    readonly update?: string;
}
export declare function computeoptimizerEnrollmentStatusTimeoutsToTerraform(struct?: ComputeoptimizerEnrollmentStatusTimeouts | cdktf.IResolvable): any;
export declare function computeoptimizerEnrollmentStatusTimeoutsToHclTerraform(struct?: ComputeoptimizerEnrollmentStatusTimeouts | cdktf.IResolvable): any;
export declare class ComputeoptimizerEnrollmentStatusTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComputeoptimizerEnrollmentStatusTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ComputeoptimizerEnrollmentStatusTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status aws_computeoptimizer_enrollment_status}
*/
export declare class ComputeoptimizerEnrollmentStatus extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_computeoptimizer_enrollment_status";
    /**
    * Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ComputeoptimizerEnrollmentStatus to import
    * @param importFromId The id of the existing ComputeoptimizerEnrollmentStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ComputeoptimizerEnrollmentStatus to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_enrollment_status aws_computeoptimizer_enrollment_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ComputeoptimizerEnrollmentStatusConfig
    */
    constructor(scope: Construct, id: string, config: ComputeoptimizerEnrollmentStatusConfig);
    get id(): string;
    private _includeMemberAccounts?;
    get includeMemberAccounts(): boolean | cdktf.IResolvable;
    set includeMemberAccounts(value: boolean | cdktf.IResolvable);
    resetIncludeMemberAccounts(): void;
    get includeMemberAccountsInput(): boolean | cdktf.IResolvable | undefined;
    get numberOfMemberAccountsOptedIn(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    private _timeouts;
    get timeouts(): ComputeoptimizerEnrollmentStatusTimeoutsOutputReference;
    putTimeouts(value: ComputeoptimizerEnrollmentStatusTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ComputeoptimizerEnrollmentStatusTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
