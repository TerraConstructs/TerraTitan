/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOutpostsAssetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_assets#arn DataAwsOutpostsAssets#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_assets#host_id_filter DataAwsOutpostsAssets#host_id_filter}
    */
    readonly hostIdFilter?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_assets#id DataAwsOutpostsAssets#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_assets#status_id_filter DataAwsOutpostsAssets#status_id_filter}
    */
    readonly statusIdFilter?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_assets aws_outposts_assets}
*/
export declare class DataAwsOutpostsAssets extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_outposts_assets";
    /**
    * Generates CDKTF code for importing a DataAwsOutpostsAssets resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOutpostsAssets to import
    * @param importFromId The id of the existing DataAwsOutpostsAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_assets#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOutpostsAssets to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/outposts_assets aws_outposts_assets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsAssetsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOutpostsAssetsConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get assetIds(): string[];
    private _hostIdFilter?;
    get hostIdFilter(): string[];
    set hostIdFilter(value: string[]);
    resetHostIdFilter(): void;
    get hostIdFilterInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _statusIdFilter?;
    get statusIdFilter(): string[];
    set statusIdFilter(value: string[]);
    resetStatusIdFilter(): void;
    get statusIdFilterInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
