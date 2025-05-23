/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOutpostsAssetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_asset#arn DataAwsOutpostsAsset#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_asset#asset_id DataAwsOutpostsAsset#asset_id}
    */
    readonly assetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_asset#id DataAwsOutpostsAsset#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_asset aws_outposts_asset}
*/
export declare class DataAwsOutpostsAsset extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_outposts_asset";
    /**
    * Generates CDKTF code for importing a DataAwsOutpostsAsset resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOutpostsAsset to import
    * @param importFromId The id of the existing DataAwsOutpostsAsset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_asset#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOutpostsAsset to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_asset aws_outposts_asset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsAssetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOutpostsAssetConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _assetId?;
    get assetId(): string;
    set assetId(value: string);
    get assetIdInput(): string | undefined;
    get assetType(): string;
    get hostId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get rackElevation(): number;
    get rackId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
