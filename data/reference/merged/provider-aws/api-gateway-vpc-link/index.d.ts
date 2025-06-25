/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayVpcLinkConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Description of the VPC link. */
    readonly description?: string;
    /** */
    readonly id?: string;
    /** (Required) Name used to label and identify the VPC link. */
    readonly name: string;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Required, ForceNew) List of network load balancer arns in the VPC targeted by the VPC link. Currently AWS only supports 1 target. */
    readonly targetArns: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_vpc_link aws_api_gateway_vpc_link}
*/
export declare class ApiGatewayVpcLink extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_vpc_link";
    /**
    * Generates CDKTF code for importing a ApiGatewayVpcLink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayVpcLink to import
    * @param importFromId The id of the existing ApiGatewayVpcLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_vpc_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayVpcLink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_vpc_link aws_api_gateway_vpc_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayVpcLinkConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayVpcLinkConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _targetArns?;
    get targetArns(): string[];
    set targetArns(value: string[]);
    get targetArnsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
