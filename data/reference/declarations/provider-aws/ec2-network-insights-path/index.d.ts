/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2NetworkInsightsPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#destination Ec2NetworkInsightsPath#destination}
    */
    readonly destination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#destination_ip Ec2NetworkInsightsPath#destination_ip}
    */
    readonly destinationIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#destination_port Ec2NetworkInsightsPath#destination_port}
    */
    readonly destinationPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#id Ec2NetworkInsightsPath#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#protocol Ec2NetworkInsightsPath#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#source Ec2NetworkInsightsPath#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#source_ip Ec2NetworkInsightsPath#source_ip}
    */
    readonly sourceIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#tags Ec2NetworkInsightsPath#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#tags_all Ec2NetworkInsightsPath#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path}
*/
export declare class Ec2NetworkInsightsPath extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_network_insights_path";
    /**
    * Generates CDKTF code for importing a Ec2NetworkInsightsPath resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2NetworkInsightsPath to import
    * @param importFromId The id of the existing Ec2NetworkInsightsPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2NetworkInsightsPath to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_path aws_ec2_network_insights_path} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2NetworkInsightsPathConfig
    */
    constructor(scope: Construct, id: string, config: Ec2NetworkInsightsPathConfig);
    get arn(): string;
    private _destination?;
    get destination(): string;
    set destination(value: string);
    resetDestination(): void;
    get destinationInput(): string | undefined;
    get destinationArn(): string;
    private _destinationIp?;
    get destinationIp(): string;
    set destinationIp(value: string);
    resetDestinationIp(): void;
    get destinationIpInput(): string | undefined;
    private _destinationPort?;
    get destinationPort(): number;
    set destinationPort(value: number);
    resetDestinationPort(): void;
    get destinationPortInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    get sourceArn(): string;
    private _sourceIp?;
    get sourceIp(): string;
    set sourceIp(value: string);
    resetSourceIp(): void;
    get sourceIpInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
