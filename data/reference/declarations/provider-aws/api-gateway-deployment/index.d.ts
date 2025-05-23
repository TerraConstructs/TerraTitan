/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#description ApiGatewayDeployment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#id ApiGatewayDeployment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#rest_api_id ApiGatewayDeployment#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#stage_description ApiGatewayDeployment#stage_description}
    */
    readonly stageDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#stage_name ApiGatewayDeployment#stage_name}
    */
    readonly stageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#triggers ApiGatewayDeployment#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#variables ApiGatewayDeployment#variables}
    */
    readonly variables?: {
        [key: string]: string;
    };
    /**
    * canary_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#canary_settings ApiGatewayDeployment#canary_settings}
    */
    readonly canarySettings?: ApiGatewayDeploymentCanarySettings;
}
export interface ApiGatewayDeploymentCanarySettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#percent_traffic ApiGatewayDeployment#percent_traffic}
    */
    readonly percentTraffic?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#stage_variable_overrides ApiGatewayDeployment#stage_variable_overrides}
    */
    readonly stageVariableOverrides?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#use_stage_cache ApiGatewayDeployment#use_stage_cache}
    */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment aws_api_gateway_deployment}
*/
export declare class ApiGatewayDeployment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_deployment";
    /**
    * Generates CDKTF code for importing a ApiGatewayDeployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayDeployment to import
    * @param importFromId The id of the existing ApiGatewayDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayDeployment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_deployment aws_api_gateway_deployment} Resource
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
