/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockProvisionedModelThroughputConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#commitment_duration BedrockProvisionedModelThroughput#commitment_duration}
    */
    readonly commitmentDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#model_arn BedrockProvisionedModelThroughput#model_arn}
    */
    readonly modelArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#model_units BedrockProvisionedModelThroughput#model_units}
    */
    readonly modelUnits: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#provisioned_model_name BedrockProvisionedModelThroughput#provisioned_model_name}
    */
    readonly provisionedModelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#tags BedrockProvisionedModelThroughput#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#timeouts BedrockProvisionedModelThroughput#timeouts}
    */
    readonly timeouts?: BedrockProvisionedModelThroughputTimeouts;
}
export interface BedrockProvisionedModelThroughputTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#create BedrockProvisionedModelThroughput#create}
    */
    readonly create?: string;
}
export declare function bedrockProvisionedModelThroughputTimeoutsToTerraform(struct?: BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable): any;
export declare function bedrockProvisionedModelThroughputTimeoutsToHclTerraform(struct?: BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable): any;
export declare class BedrockProvisionedModelThroughputTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockProvisionedModelThroughputTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput}
*/
export declare class BedrockProvisionedModelThroughput extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrock_provisioned_model_throughput";
    /**
    * Generates CDKTF code for importing a BedrockProvisionedModelThroughput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockProvisionedModelThroughput to import
    * @param importFromId The id of the existing BedrockProvisionedModelThroughput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockProvisionedModelThroughput to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_provisioned_model_throughput aws_bedrock_provisioned_model_throughput} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockProvisionedModelThroughputConfig
    */
    constructor(scope: Construct, id: string, config: BedrockProvisionedModelThroughputConfig);
    private _commitmentDuration?;
    get commitmentDuration(): string;
    set commitmentDuration(value: string);
    resetCommitmentDuration(): void;
    get commitmentDurationInput(): string | undefined;
    get id(): string;
    private _modelArn?;
    get modelArn(): string;
    set modelArn(value: string);
    get modelArnInput(): string | undefined;
    private _modelUnits?;
    get modelUnits(): number;
    set modelUnits(value: number);
    get modelUnitsInput(): number | undefined;
    get provisionedModelArn(): string;
    private _provisionedModelName?;
    get provisionedModelName(): string;
    set provisionedModelName(value: string);
    get provisionedModelNameInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): BedrockProvisionedModelThroughputTimeoutsOutputReference;
    putTimeouts(value: BedrockProvisionedModelThroughputTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockProvisionedModelThroughputTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
