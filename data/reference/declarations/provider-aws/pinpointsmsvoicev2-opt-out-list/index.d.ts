/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Pinpointsmsvoicev2OptOutListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_opt_out_list#name Pinpointsmsvoicev2OptOutList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_opt_out_list#tags Pinpointsmsvoicev2OptOutList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_opt_out_list aws_pinpointsmsvoicev2_opt_out_list}
*/
export declare class Pinpointsmsvoicev2OptOutList extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpointsmsvoicev2_opt_out_list";
    /**
    * Generates CDKTF code for importing a Pinpointsmsvoicev2OptOutList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2OptOutList to import
    * @param importFromId The id of the existing Pinpointsmsvoicev2OptOutList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_opt_out_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2OptOutList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_opt_out_list aws_pinpointsmsvoicev2_opt_out_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Pinpointsmsvoicev2OptOutListConfig
    */
    constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2OptOutListConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
