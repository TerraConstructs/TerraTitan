/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaCapacityReservationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#name AthenaCapacityReservation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#tags AthenaCapacityReservation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#target_dpus AthenaCapacityReservation#target_dpus}
    */
    readonly targetDpus: number;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#timeouts AthenaCapacityReservation#timeouts}
    */
    readonly timeouts?: AthenaCapacityReservationTimeouts;
}
export interface AthenaCapacityReservationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#create AthenaCapacityReservation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#delete AthenaCapacityReservation#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#update AthenaCapacityReservation#update}
    */
    readonly update?: string;
}
export declare function athenaCapacityReservationTimeoutsToTerraform(struct?: AthenaCapacityReservationTimeouts | cdktf.IResolvable): any;
export declare function athenaCapacityReservationTimeoutsToHclTerraform(struct?: AthenaCapacityReservationTimeouts | cdktf.IResolvable): any;
export declare class AthenaCapacityReservationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaCapacityReservationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AthenaCapacityReservationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation aws_athena_capacity_reservation}
*/
export declare class AthenaCapacityReservation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_athena_capacity_reservation";
    /**
    * Generates CDKTF code for importing a AthenaCapacityReservation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AthenaCapacityReservation to import
    * @param importFromId The id of the existing AthenaCapacityReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AthenaCapacityReservation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/athena_capacity_reservation aws_athena_capacity_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaCapacityReservationConfig
    */
    constructor(scope: Construct, id: string, config: AthenaCapacityReservationConfig);
    get allocatedDpus(): number;
    get arn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _targetDpus?;
    get targetDpus(): number;
    set targetDpus(value: number);
    get targetDpusInput(): number | undefined;
    private _timeouts;
    get timeouts(): AthenaCapacityReservationTimeoutsOutputReference;
    putTimeouts(value: AthenaCapacityReservationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AthenaCapacityReservationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
