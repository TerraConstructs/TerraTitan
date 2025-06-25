/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2CapacityBlockReservationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation#capacity_block_offering_id Ec2CapacityBlockReservation#capacity_block_offering_id}
    */
    readonly capacityBlockOfferingId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation#instance_platform Ec2CapacityBlockReservation#instance_platform}
    */
    readonly instancePlatform: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation#tags Ec2CapacityBlockReservation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation#timeouts Ec2CapacityBlockReservation#timeouts}
    */
    readonly timeouts?: Ec2CapacityBlockReservationTimeouts;
}
export interface Ec2CapacityBlockReservationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation#create Ec2CapacityBlockReservation#create}
    */
    readonly create?: string;
}
export declare function ec2CapacityBlockReservationTimeoutsToTerraform(struct?: Ec2CapacityBlockReservationTimeouts | cdktf.IResolvable): any;
export declare function ec2CapacityBlockReservationTimeoutsToHclTerraform(struct?: Ec2CapacityBlockReservationTimeouts | cdktf.IResolvable): any;
export declare class Ec2CapacityBlockReservationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2CapacityBlockReservationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2CapacityBlockReservationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation}
*/
export declare class Ec2CapacityBlockReservation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_capacity_block_reservation";
    /**
    * Generates CDKTF code for importing a Ec2CapacityBlockReservation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2CapacityBlockReservation to import
    * @param importFromId The id of the existing Ec2CapacityBlockReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2CapacityBlockReservation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_capacity_block_reservation aws_ec2_capacity_block_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2CapacityBlockReservationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2CapacityBlockReservationConfig);
    get arn(): string;
    get availabilityZone(): string;
    private _capacityBlockOfferingId?;
    get capacityBlockOfferingId(): string;
    set capacityBlockOfferingId(value: string);
    get capacityBlockOfferingIdInput(): string | undefined;
    get createdDate(): string;
    get ebsOptimized(): cdktf.IResolvable;
    get endDate(): string;
    get endDateType(): string;
    get id(): string;
    get instanceCount(): number;
    private _instancePlatform?;
    get instancePlatform(): string;
    set instancePlatform(value: string);
    get instancePlatformInput(): string | undefined;
    get instanceType(): string;
    get outpostArn(): string;
    get placementGroupArn(): string;
    get reservationType(): string;
    get startDate(): string;
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
    get tenancy(): string;
    private _timeouts;
    get timeouts(): Ec2CapacityBlockReservationTimeoutsOutputReference;
    putTimeouts(value: Ec2CapacityBlockReservationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2CapacityBlockReservationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
