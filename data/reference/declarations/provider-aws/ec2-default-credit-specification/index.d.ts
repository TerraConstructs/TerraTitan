/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2DefaultCreditSpecificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification#cpu_credits Ec2DefaultCreditSpecification#cpu_credits}
    */
    readonly cpuCredits: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification#instance_family Ec2DefaultCreditSpecification#instance_family}
    */
    readonly instanceFamily: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification#timeouts Ec2DefaultCreditSpecification#timeouts}
    */
    readonly timeouts?: Ec2DefaultCreditSpecificationTimeouts;
}
export interface Ec2DefaultCreditSpecificationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification#create Ec2DefaultCreditSpecification#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification#update Ec2DefaultCreditSpecification#update}
    */
    readonly update?: string;
}
export declare function ec2DefaultCreditSpecificationTimeoutsToTerraform(struct?: Ec2DefaultCreditSpecificationTimeouts | cdktf.IResolvable): any;
export declare function ec2DefaultCreditSpecificationTimeoutsToHclTerraform(struct?: Ec2DefaultCreditSpecificationTimeouts | cdktf.IResolvable): any;
export declare class Ec2DefaultCreditSpecificationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2DefaultCreditSpecificationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2DefaultCreditSpecificationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification aws_ec2_default_credit_specification}
*/
export declare class Ec2DefaultCreditSpecification extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_default_credit_specification";
    /**
    * Generates CDKTF code for importing a Ec2DefaultCreditSpecification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2DefaultCreditSpecification to import
    * @param importFromId The id of the existing Ec2DefaultCreditSpecification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2DefaultCreditSpecification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_default_credit_specification aws_ec2_default_credit_specification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2DefaultCreditSpecificationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2DefaultCreditSpecificationConfig);
    private _cpuCredits?;
    get cpuCredits(): string;
    set cpuCredits(value: string);
    get cpuCreditsInput(): string | undefined;
    private _instanceFamily?;
    get instanceFamily(): string;
    set instanceFamily(value: string);
    get instanceFamilyInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2DefaultCreditSpecificationTimeoutsOutputReference;
    putTimeouts(value: Ec2DefaultCreditSpecificationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2DefaultCreditSpecificationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
