/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLocationTrackerAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_tracker_associations#id DataAwsLocationTrackerAssociations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_tracker_associations#tracker_name DataAwsLocationTrackerAssociations#tracker_name}
    */
    readonly trackerName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_tracker_associations aws_location_tracker_associations}
*/
export declare class DataAwsLocationTrackerAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_location_tracker_associations";
    /**
    * Generates CDKTF code for importing a DataAwsLocationTrackerAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLocationTrackerAssociations to import
    * @param importFromId The id of the existing DataAwsLocationTrackerAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_tracker_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLocationTrackerAssociations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/location_tracker_associations aws_location_tracker_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLocationTrackerAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLocationTrackerAssociationsConfig);
    get consumerArns(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _trackerName?;
    get trackerName(): string;
    set trackerName(value: string);
    get trackerNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
