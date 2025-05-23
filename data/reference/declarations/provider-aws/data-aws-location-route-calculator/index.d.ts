/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLocationRouteCalculatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_route_calculator#calculator_name DataAwsLocationRouteCalculator#calculator_name}
    */
    readonly calculatorName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_route_calculator#id DataAwsLocationRouteCalculator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_route_calculator#tags DataAwsLocationRouteCalculator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_route_calculator aws_location_route_calculator}
*/
export declare class DataAwsLocationRouteCalculator extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_location_route_calculator";
    /**
    * Generates CDKTF code for importing a DataAwsLocationRouteCalculator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLocationRouteCalculator to import
    * @param importFromId The id of the existing DataAwsLocationRouteCalculator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_route_calculator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLocationRouteCalculator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_route_calculator aws_location_route_calculator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLocationRouteCalculatorConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLocationRouteCalculatorConfig);
    get calculatorArn(): string;
    private _calculatorName?;
    get calculatorName(): string;
    set calculatorName(value: string);
    get calculatorNameInput(): string | undefined;
    get createTime(): string;
    get dataSource(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    get updateTime(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
