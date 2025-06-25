/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Description of the deployment */
    readonly description?: string;
    /** */
    readonly id?: string;
    /** (Required) REST API identifier. */
    readonly restApiId: string;
    /** (Optional, **Deprecated** Use an explicit [`aws_api_gateway_stage` resource](api_gateway_stage.html) instead) Description to set on the stage managed by the `stageName` argument. */
    readonly stageDescription?: string;
    /** (Optional, **Deprecated** Use an explicit [`aws_api_gateway_stage` resource](api_gateway_stage.html) instead) Name of the stage to create with this deployment. */
    readonly stageName?: string;
    /** (Optional) Map of arbitrary keys and values that, when changed, will trigger a redeployment. To force a redeployment without changing these keys/values, use the [`-replace` option](https://developer.hashicorp.com/terraform/cli/commands/plan#replace-address) with `terraform plan` or `terraform apply`. */
    readonly triggers?: {
        [key: string]: string;
    };
    /** (Optional) Map to set on the stage managed by the `stageName` argument. */
    readonly variables?: {
        [key: string]: string;
    };
    /** */
    readonly canarySettings?: ApiGatewayDeploymentCanarySettings;
}
export interface ApiGatewayDeploymentCanarySettings {
    /** */
    readonly percentTraffic?: number;
    /** */
    readonly stageVariableOverrides?: {
        [key: string]: string;
    };
    /** */
    readonly useStageCache?: boolean | cdktf.IResolvable;
}
export declare function apiGatewayDeploymentCanarySettingsToTerraform(struct?: ApiGatewayDeploymentCanarySettingsOutputReference | ApiGatewayDeploymentCanarySettings): any;
export declare function apiGatewayDeploymentCanarySettingsToHclTerraform(struct?: ApiGatewayDeploymentCanarySettingsOutputReference | ApiGatewayDeploymentCanarySettings): any;
export declare class ApiGatewayDeploymentCanarySettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayDeploymentCanarySettings | undefined;
    set internalValue(value: ApiGatewayDeploymentCanarySettings | undefined);
    private _percentTraffic?;
    get percentTraffic(): number;
    set percentTraffic(value: number);
    resetPercentTraffic(): void;
    get percentTrafficInput(): number | undefined;
    private _stageVariableOverrides?;
    get stageVariableOverrides(): {
        [key: string]: string;
    };
    set stageVariableOverrides(value: {
        [key: string]: string;
    });
    resetStageVariableOverrides(): void;
    get stageVariableOverridesInput(): {
        [key: string]: string;
    } | undefined;
    private _useStageCache?;
    get useStageCache(): boolean | cdktf.IResolvable;
    set useStageCache(value: boolean | cdktf.IResolvable);
    resetUseStageCache(): void;
    get useStageCacheInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_deployment aws_api_gateway_deployment}
*/
export declare class ApiGatewayDeployment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_deployment";
    /**
    * Generates CDKTF code for importing a ApiGatewayDeployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayDeployment to import
    * @param importFromId The id of the existing ApiGatewayDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayDeployment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_deployment aws_api_gateway_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDeploymentConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayDeploymentConfig);
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get executionArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invokeUrl(): string;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _stageDescription?;
    get stageDescription(): string;
    set stageDescription(value: string);
    resetStageDescription(): void;
    get stageDescriptionInput(): string | undefined;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    resetStageName(): void;
    get stageNameInput(): string | undefined;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    private _variables?;
    get variables(): {
        [key: string]: string;
    };
    set variables(value: {
        [key: string]: string;
    });
    resetVariables(): void;
    get variablesInput(): {
        [key: string]: string;
    } | undefined;
    private _canarySettings;
    get canarySettings(): ApiGatewayDeploymentCanarySettingsOutputReference;
    putCanarySettings(value: ApiGatewayDeploymentCanarySettings): void;
    resetCanarySettings(): void;
    get canarySettingsInput(): ApiGatewayDeploymentCanarySettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
