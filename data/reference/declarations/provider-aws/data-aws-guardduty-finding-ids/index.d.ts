/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGuarddutyFindingIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}
    */
    readonly detectorId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_finding_ids aws_guardduty_finding_ids}
*/
export declare class DataAwsGuarddutyFindingIds extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_guardduty_finding_ids";
    /**
    * Generates CDKTF code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsGuarddutyFindingIds to import
    * @param importFromId The id of the existing DataAwsGuarddutyFindingIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_finding_ids#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsGuarddutyFindingIds to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_finding_ids aws_guardduty_finding_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGuarddutyFindingIdsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsGuarddutyFindingIdsConfig);
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    get findingIds(): string[];
    get hasFindings(): cdktf.IResolvable;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
