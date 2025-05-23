/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOutpostsOutpostsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts#availability_zone DataAwsOutpostsOutposts#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts#availability_zone_id DataAwsOutpostsOutposts#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts#id DataAwsOutpostsOutposts#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts#owner_id DataAwsOutpostsOutposts#owner_id}
    */
    readonly ownerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts#site_id DataAwsOutpostsOutposts#site_id}
    */
    readonly siteId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts aws_outposts_outposts}
*/
export declare class DataAwsOutpostsOutposts extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_outposts_outposts";
    /**
    * Generates CDKTF code for importing a DataAwsOutpostsOutposts resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOutpostsOutposts to import
    * @param importFromId The id of the existing DataAwsOutpostsOutposts that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOutpostsOutposts to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_outposts aws_outposts_outposts} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsOutpostsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOutpostsOutpostsConfig);
    get arns(): string[];
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    resetAvailabilityZone(): void;
    get availabilityZoneInput(): string | undefined;
    private _availabilityZoneId?;
    get availabilityZoneId(): string;
    set availabilityZoneId(value: string);
    resetAvailabilityZoneId(): void;
    get availabilityZoneIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _ownerId?;
    get ownerId(): string;
    set ownerId(value: string);
    resetOwnerId(): void;
    get ownerIdInput(): string | undefined;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    resetSiteId(): void;
    get siteIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
