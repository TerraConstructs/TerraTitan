/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDxLocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_location#id DataAwsDxLocation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_location#location_code DataAwsDxLocation#location_code}
    */
    readonly locationCode: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_location aws_dx_location}
*/
export declare class DataAwsDxLocation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_dx_location";
    /**
    * Generates CDKTF code for importing a DataAwsDxLocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDxLocation to import
    * @param importFromId The id of the existing DataAwsDxLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDxLocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dx_location aws_dx_location} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxLocationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDxLocationConfig);
    get availableMacsecPortSpeeds(): string[];
    get availablePortSpeeds(): string[];
    get availableProviders(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _locationCode?;
    get locationCode(): string;
    set locationCode(value: string);
    get locationCodeInput(): string | undefined;
    get locationName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
