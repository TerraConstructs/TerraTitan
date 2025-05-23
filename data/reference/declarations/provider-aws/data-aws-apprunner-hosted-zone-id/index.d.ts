/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsApprunnerHostedZoneIdConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apprunner_hosted_zone_id#region DataAwsApprunnerHostedZoneId#region}
    */
    readonly region?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apprunner_hosted_zone_id aws_apprunner_hosted_zone_id}
*/
export declare class DataAwsApprunnerHostedZoneId extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_apprunner_hosted_zone_id";
    /**
    * Generates CDKTF code for importing a DataAwsApprunnerHostedZoneId resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsApprunnerHostedZoneId to import
    * @param importFromId The id of the existing DataAwsApprunnerHostedZoneId that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apprunner_hosted_zone_id#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsApprunnerHostedZoneId to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/apprunner_hosted_zone_id aws_apprunner_hosted_zone_id} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApprunnerHostedZoneIdConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsApprunnerHostedZoneIdConfig);
    get id(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
