/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockGuardrailVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version#description BedrockGuardrailVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version#guardrail_arn BedrockGuardrailVersion#guardrail_arn}
    */
    readonly guardrailArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version#skip_destroy BedrockGuardrailVersion#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version#timeouts BedrockGuardrailVersion#timeouts}
    */
    readonly timeouts?: BedrockGuardrailVersionTimeouts;
}
export interface BedrockGuardrailVersionTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version#create BedrockGuardrailVersion#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version#delete BedrockGuardrailVersion#delete}
    */
    readonly delete?: string;
}
export declare function bedrockGuardrailVersionTimeoutsToTerraform(struct?: BedrockGuardrailVersionTimeouts | cdktf.IResolvable): any;
export declare function bedrockGuardrailVersionTimeoutsToHclTerraform(struct?: BedrockGuardrailVersionTimeouts | cdktf.IResolvable): any;
export declare class BedrockGuardrailVersionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockGuardrailVersionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockGuardrailVersionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version aws_bedrock_guardrail_version}
*/
export declare class BedrockGuardrailVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrock_guardrail_version";
    /**
    * Generates CDKTF code for importing a BedrockGuardrailVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockGuardrailVersion to import
    * @param importFromId The id of the existing BedrockGuardrailVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockGuardrailVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrock_guardrail_version aws_bedrock_guardrail_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockGuardrailVersionConfig
    */
    constructor(scope: Construct, id: string, config: BedrockGuardrailVersionConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _guardrailArn?;
    get guardrailArn(): string;
    set guardrailArn(value: string);
    get guardrailArnInput(): string | undefined;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    get version(): string;
    private _timeouts;
    get timeouts(): BedrockGuardrailVersionTimeoutsOutputReference;
    putTimeouts(value: BedrockGuardrailVersionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockGuardrailVersionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
