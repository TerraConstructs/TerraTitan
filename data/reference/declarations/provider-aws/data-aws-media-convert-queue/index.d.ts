/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMediaConvertQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/media_convert_queue#id DataAwsMediaConvertQueue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/media_convert_queue#tags DataAwsMediaConvertQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/media_convert_queue aws_media_convert_queue}
*/
export declare class DataAwsMediaConvertQueue extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_media_convert_queue";
    /**
    * Generates CDKTF code for importing a DataAwsMediaConvertQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMediaConvertQueue to import
    * @param importFromId The id of the existing DataAwsMediaConvertQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/media_convert_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMediaConvertQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/media_convert_queue aws_media_convert_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMediaConvertQueueConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMediaConvertQueueConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get name(): string;
    get status(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
