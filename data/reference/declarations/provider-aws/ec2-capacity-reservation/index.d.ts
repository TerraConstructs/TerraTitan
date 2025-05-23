/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2CapacityReservationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#availability_zone Ec2CapacityReservation#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#ebs_optimized Ec2CapacityReservation#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#end_date Ec2CapacityReservation#end_date}
    */
    readonly endDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#end_date_type Ec2CapacityReservation#end_date_type}
    */
    readonly endDateType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}
    */
    readonly ephemeralStorage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#id Ec2CapacityReservation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#instance_count Ec2CapacityReservation#instance_count}
    */
    readonly instanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}
    */
    readonly instanceMatchCriteria?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#instance_platform Ec2CapacityReservation#instance_platform}
    */
    readonly instancePlatform: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#instance_type Ec2CapacityReservation#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#outpost_arn Ec2CapacityReservation#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#placement_group_arn Ec2CapacityReservation#placement_group_arn}
    */
    readonly placementGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#tags Ec2CapacityReservation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#tags_all Ec2CapacityReservation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#tenancy Ec2CapacityReservation#tenancy}
    */
    readonly tenancy?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#timeouts Ec2CapacityReservation#timeouts}
    */
    readonly timeouts?: Ec2CapacityReservationTimeouts;
}
export interface Ec2CapacityReservationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#create Ec2CapacityReservation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#delete Ec2CapacityReservation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#update Ec2CapacityReservation#update}
    */
    readonly update?: string;
}
export declare function ec2CapacityReservationTimeoutsToTerraform(struct?: Ec2CapacityReservationTimeouts | cdktf.IResolvable): any;
export declare function ec2CapacityReservationTimeoutsToHclTerraform(struct?: Ec2CapacityReservationTimeouts | cdktf.IResolvable): any;
export declare class Ec2CapacityReservationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2CapacityReservationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2CapacityReservationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation aws_ec2_capacity_reservation}
*/
export declare class Ec2CapacityReservation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_capacity_reservation";
    /**
    * Generates CDKTF code for importing a Ec2CapacityReservation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2CapacityReservation to import
    * @param importFromId The id of the existing Ec2CapacityReservation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2CapacityReservation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_capacity_reservation aws_ec2_capacity_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2CapacityReservationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2CapacityReservationConfig);
    get arn(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string | undefined;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable | undefined;
    private _endDate?;
    get endDate(): string;
    set endDate(value: string);
    resetEndDate(): void;
    get endDateInput(): string | undefined;
    private _endDateType?;
    get endDateType(): string;
    set endDateType(value: string);
    resetEndDateType(): void;
    get endDateTypeInput(): string | undefined;
    private _ephemeralStorage?;
    get ephemeralStorage(): boolean | cdktf.IResolvable;
    set ephemeralStorage(value: boolean | cdktf.IResolvable);
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    get instanceCountInput(): number | undefined;
    private _instanceMatchCriteria?;
    get instanceMatchCriteria(): string;
    set instanceMatchCriteria(value: string);
    resetInstanceMatchCriteria(): void;
    get instanceMatchCriteriaInput(): string | undefined;
    private _instancePlatform?;
    get instancePlatform(): string;
    set instancePlatform(value: string);
    get instancePlatformInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string | undefined;
    get ownerId(): string;
    private _placementGroupArn?;
    get placementGroupArn(): string;
    set placementGroupArn(value: string);
    resetPlacementGroupArn(): void;
    get placementGroupArnInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2CapacityReservationTimeoutsOutputReference;
    putTimeouts(value: Ec2CapacityReservationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2CapacityReservationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
