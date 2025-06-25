/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcsClustersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_clusters aws_ecs_clusters}
*/
export declare class DataAwsEcsClusters extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecs_clusters";
    /**
    * Generates CDKTF code for importing a DataAwsEcsClusters resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcsClusters to import
    * @param importFromId The id of the existing DataAwsEcsClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_clusters#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcsClusters to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ecs_clusters aws_ecs_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsClustersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEcsClustersConfig);
    get clusterArns(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
