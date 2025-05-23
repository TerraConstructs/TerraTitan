/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#description LambdaAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#function_name LambdaAlias#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#function_version LambdaAlias#function_version}
    */
    readonly functionVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#id LambdaAlias#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#name LambdaAlias#name}
    */
    readonly name: string;
    /**
    * routing_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#routing_config LambdaAlias#routing_config}
    */
    readonly routingConfig?: LambdaAliasRoutingConfig;
}
export interface LambdaAliasRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#additional_version_weights LambdaAlias#additional_version_weights}
    */
    readonly additionalVersionWeights?: {
        [key: string]: number;
    };
}
export declare function lambdaAliasRoutingConfigToTerraform(struct?: LambdaAliasRoutingConfigOutputReference | LambdaAliasRoutingConfig): any;
export declare function lambdaAliasRoutingConfigToHclTerraform(struct?: LambdaAliasRoutingConfigOutputReference | LambdaAliasRoutingConfig): any;
export declare class LambdaAliasRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaAliasRoutingConfig | undefined;
    set internalValue(value: LambdaAliasRoutingConfig | undefined);
    private _additionalVersionWeights?;
    get additionalVersionWeights(): {
        [key: string]: number;
    };
    set additionalVersionWeights(value: {
        [key: string]: number;
    });
    resetAdditionalVersionWeights(): void;
    get additionalVersionWeightsInput(): {
        [key: string]: number;
    } | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias aws_lambda_alias}
*/
export declare class LambdaAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_alias";
    /**
    * Generates CDKTF code for importing a LambdaAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaAlias to import
    * @param importFromId The id of the existing LambdaAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_alias aws_lambda_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaAliasConfig
    */
    constructor(scope: Construct, id: string, config: LambdaAliasConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _functionVersion?;
    get functionVersion(): string;
    set functionVersion(value: string);
    get functionVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invokeArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _routingConfig;
    get routingConfig(): LambdaAliasRoutingConfigOutputReference;
    putRoutingConfig(value: LambdaAliasRoutingConfig): void;
    resetRoutingConfig(): void;
    get routingConfigInput(): LambdaAliasRoutingConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
