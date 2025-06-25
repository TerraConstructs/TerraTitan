/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ZonesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_zones aws_route53_zones}
*/
export declare class DataAwsRoute53Zones extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_zones";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53Zones resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53Zones to import
    * @param importFromId The id of the existing DataAwsRoute53Zones that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_zones#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53Zones to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_zones aws_route53_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ZonesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRoute53ZonesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
