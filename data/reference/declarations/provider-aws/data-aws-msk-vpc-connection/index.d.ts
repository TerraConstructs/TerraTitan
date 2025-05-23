/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMskVpcConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_vpc_connection#arn DataAwsMskVpcConnection#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_vpc_connection#id DataAwsMskVpcConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_vpc_connection#tags DataAwsMskVpcConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_vpc_connection aws_msk_vpc_connection}
*/
export declare class DataAwsMskVpcConnection extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_msk_vpc_connection";
    /**
    * Generates CDKTF code for importing a DataAwsMskVpcConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMskVpcConnection to import
    * @param importFromId The id of the existing DataAwsMskVpcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_vpc_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMskVpcConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/msk_vpc_connection aws_msk_vpc_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMskVpcConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMskVpcConnectionConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get authentication(): string;
    get clientSubnets(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get securityGroups(): string[];
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
    get targetClusterArn(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
