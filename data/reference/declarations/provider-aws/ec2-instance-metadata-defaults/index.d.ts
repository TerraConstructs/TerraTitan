/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2InstanceMetadataDefaultsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_metadata_defaults#http_endpoint Ec2InstanceMetadataDefaults#http_endpoint}
    */
    readonly httpEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_metadata_defaults#http_put_response_hop_limit Ec2InstanceMetadataDefaults#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_metadata_defaults#http_tokens Ec2InstanceMetadataDefaults#http_tokens}
    */
    readonly httpTokens?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_metadata_defaults#instance_metadata_tags Ec2InstanceMetadataDefaults#instance_metadata_tags}
    */
    readonly instanceMetadataTags?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_metadata_defaults aws_ec2_instance_metadata_defaults}
*/
export declare class Ec2InstanceMetadataDefaults extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_instance_metadata_defaults";
    /**
    * Generates CDKTF code for importing a Ec2InstanceMetadataDefaults resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2InstanceMetadataDefaults to import
    * @param importFromId The id of the existing Ec2InstanceMetadataDefaults that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_metadata_defaults#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2InstanceMetadataDefaults to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_instance_metadata_defaults aws_ec2_instance_metadata_defaults} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2InstanceMetadataDefaultsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2InstanceMetadataDefaultsConfig);
    private _httpEndpoint?;
    get httpEndpoint(): string;
    set httpEndpoint(value: string);
    resetHttpEndpoint(): void;
    get httpEndpointInput(): string | undefined;
    private _httpPutResponseHopLimit?;
    get httpPutResponseHopLimit(): number;
    set httpPutResponseHopLimit(value: number);
    resetHttpPutResponseHopLimit(): void;
    get httpPutResponseHopLimitInput(): number | undefined;
    private _httpTokens?;
    get httpTokens(): string;
    set httpTokens(value: string);
    resetHttpTokens(): void;
    get httpTokensInput(): string | undefined;
    get id(): string;
    private _instanceMetadataTags?;
    get instanceMetadataTags(): string;
    set instanceMetadataTags(value: string);
    resetInstanceMetadataTags(): void;
    get instanceMetadataTagsInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
