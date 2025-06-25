/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2CapacityBlockOfferingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#capacity_duration_hours DataAwsEc2CapacityBlockOffering#capacity_duration_hours}
    */
    readonly capacityDurationHours: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#end_date_range DataAwsEc2CapacityBlockOffering#end_date_range}
    */
    readonly endDateRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#instance_count DataAwsEc2CapacityBlockOffering#instance_count}
    */
    readonly instanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#instance_type DataAwsEc2CapacityBlockOffering#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#start_date_range DataAwsEc2CapacityBlockOffering#start_date_range}
    */
    readonly startDateRange?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering}
*/
export declare class DataAwsEc2CapacityBlockOffering extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_capacity_block_offering";
    /**
    * Generates CDKTF code for importing a DataAwsEc2CapacityBlockOffering resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2CapacityBlockOffering to import
    * @param importFromId The id of the existing DataAwsEc2CapacityBlockOffering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2CapacityBlockOffering to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ec2_capacity_block_offering aws_ec2_capacity_block_offering} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2CapacityBlockOfferingConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEc2CapacityBlockOfferingConfig);
    get availabilityZone(): string;
    get capacityBlockOfferingId(): string;
    private _capacityDurationHours?;
    get capacityDurationHours(): number;
    set capacityDurationHours(value: number);
    get capacityDurationHoursInput(): number | undefined;
    get currencyCode(): string;
    private _endDateRange?;
    get endDateRange(): string;
    set endDateRange(value: string);
    resetEndDateRange(): void;
    get endDateRangeInput(): string | undefined;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    get instanceCountInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _startDateRange?;
    get startDateRange(): string;
    set startDateRange(value: string);
    resetStartDateRange(): void;
    get startDateRangeInput(): string | undefined;
    get tenancy(): string;
    get upfrontFee(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
