/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsPrometheusDefaultScraperConfigurationConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/prometheus_default_scraper_configuration aws_prometheus_default_scraper_configuration}
*/
export declare class DataAwsPrometheusDefaultScraperConfiguration extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_prometheus_default_scraper_configuration";
    /**
    * Generates CDKTF code for importing a DataAwsPrometheusDefaultScraperConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsPrometheusDefaultScraperConfiguration to import
    * @param importFromId The id of the existing DataAwsPrometheusDefaultScraperConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/prometheus_default_scraper_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsPrometheusDefaultScraperConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/prometheus_default_scraper_configuration aws_prometheus_default_scraper_configuration} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPrometheusDefaultScraperConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsPrometheusDefaultScraperConfigurationConfig);
    get configuration(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
