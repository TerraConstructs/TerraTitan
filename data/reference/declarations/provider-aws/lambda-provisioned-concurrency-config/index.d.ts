/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaProvisionedConcurrencyConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}
    */
    readonly provisionedConcurrentExecutions: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}
    */
    readonly qualifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#skip_destroy LambdaProvisionedConcurrencyConfig#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#timeouts LambdaProvisionedConcurrencyConfig#timeouts}
    */
    readonly timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
}
export interface LambdaProvisionedConcurrencyConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#create LambdaProvisionedConcurrencyConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#update LambdaProvisionedConcurrencyConfig#update}
    */
    readonly update?: string;
}
export declare function lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(struct?: LambdaProvisionedConcurrencyConfigTimeouts | cdktf.IResolvable): any;
export declare function lambdaProvisionedConcurrencyConfigTimeoutsToHclTerraform(struct?: LambdaProvisionedConcurrencyConfigTimeouts | cdktf.IResolvable): any;
export declare class LambdaProvisionedConcurrencyConfigTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaProvisionedConcurrencyConfigTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LambdaProvisionedConcurrencyConfigTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config aws_lambda_provisioned_concurrency_config}
*/
export declare class LambdaProvisionedConcurrencyConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_provisioned_concurrency_config";
    /**
    * Generates CDKTF code for importing a LambdaProvisionedConcurrencyConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaProvisionedConcurrencyConfig to import
    * @param importFromId The id of the existing LambdaProvisionedConcurrencyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaProvisionedConcurrencyConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_provisioned_concurrency_config aws_lambda_provisioned_concurrency_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaProvisionedConcurrencyConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig);
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _provisionedConcurrentExecutions?;
    get provisionedConcurrentExecutions(): number;
    set provisionedConcurrentExecutions(value: number);
    get provisionedConcurrentExecutionsInput(): number | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    get qualifierInput(): string | undefined;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): LambdaProvisionedConcurrencyConfigTimeoutsOutputReference;
    putTimeouts(value: LambdaProvisionedConcurrencyConfigTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LambdaProvisionedConcurrencyConfigTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
