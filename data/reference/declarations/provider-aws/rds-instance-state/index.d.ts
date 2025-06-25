/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsInstanceStateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state#identifier RdsInstanceState#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state#state RdsInstanceState#state}
    */
    readonly state: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state#timeouts RdsInstanceState#timeouts}
    */
    readonly timeouts?: RdsInstanceStateTimeouts;
}
export interface RdsInstanceStateTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state#create RdsInstanceState#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state#update RdsInstanceState#update}
    */
    readonly update?: string;
}
export declare function rdsInstanceStateTimeoutsToTerraform(struct?: RdsInstanceStateTimeouts | cdktf.IResolvable): any;
export declare function rdsInstanceStateTimeoutsToHclTerraform(struct?: RdsInstanceStateTimeouts | cdktf.IResolvable): any;
export declare class RdsInstanceStateTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RdsInstanceStateTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RdsInstanceStateTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state aws_rds_instance_state}
*/
export declare class RdsInstanceState extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_instance_state";
    /**
    * Generates CDKTF code for importing a RdsInstanceState resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsInstanceState to import
    * @param importFromId The id of the existing RdsInstanceState that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsInstanceState to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/rds_instance_state aws_rds_instance_state} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsInstanceStateConfig
    */
    constructor(scope: Construct, id: string, config: RdsInstanceStateConfig);
    private _identifier?;
    get identifier(): string;
    set identifier(value: string);
    get identifierInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    get stateInput(): string | undefined;
    private _timeouts;
    get timeouts(): RdsInstanceStateTimeoutsOutputReference;
    putTimeouts(value: RdsInstanceStateTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RdsInstanceStateTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
