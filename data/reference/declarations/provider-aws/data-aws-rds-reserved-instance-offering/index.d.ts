/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsReservedInstanceOfferingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering#db_instance_class DataAwsRdsReservedInstanceOffering#db_instance_class}
    */
    readonly dbInstanceClass: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering#duration DataAwsRdsReservedInstanceOffering#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering#id DataAwsRdsReservedInstanceOffering#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering#multi_az DataAwsRdsReservedInstanceOffering#multi_az}
    */
    readonly multiAz: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering#offering_type DataAwsRdsReservedInstanceOffering#offering_type}
    */
    readonly offeringType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering#product_description DataAwsRdsReservedInstanceOffering#product_description}
    */
    readonly productDescription: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering aws_rds_reserved_instance_offering}
*/
export declare class DataAwsRdsReservedInstanceOffering extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_rds_reserved_instance_offering";
    /**
    * Generates CDKTF code for importing a DataAwsRdsReservedInstanceOffering resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRdsReservedInstanceOffering to import
    * @param importFromId The id of the existing DataAwsRdsReservedInstanceOffering that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRdsReservedInstanceOffering to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_reserved_instance_offering aws_rds_reserved_instance_offering} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsReservedInstanceOfferingConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsReservedInstanceOfferingConfig);
    get currencyCode(): string;
    private _dbInstanceClass?;
    get dbInstanceClass(): string;
    set dbInstanceClass(value: string);
    get dbInstanceClassInput(): string | undefined;
    private _duration?;
    get duration(): number;
    set duration(value: number);
    get durationInput(): number | undefined;
    get fixedPrice(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    get multiAzInput(): boolean | cdktf.IResolvable | undefined;
    get offeringId(): string;
    private _offeringType?;
    get offeringType(): string;
    set offeringType(value: string);
    get offeringTypeInput(): string | undefined;
    private _productDescription?;
    get productDescription(): string;
    set productDescription(value: string);
    get productDescriptionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
