/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppconfigDeploymentStrategyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}
    */
    readonly deploymentDurationInMinutes: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}
    */
    readonly finalBakeTimeInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}
    */
    readonly growthFactor: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}
    */
    readonly growthType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}
    */
    readonly replicateTo: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy aws_appconfig_deployment_strategy}
*/
export declare class AppconfigDeploymentStrategy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appconfig_deployment_strategy";
    /**
    * Generates CDKTF code for importing a AppconfigDeploymentStrategy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppconfigDeploymentStrategy to import
    * @param importFromId The id of the existing AppconfigDeploymentStrategy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppconfigDeploymentStrategy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_deployment_strategy aws_appconfig_deployment_strategy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigDeploymentStrategyConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigDeploymentStrategyConfig);
    get arn(): string;
    private _deploymentDurationInMinutes?;
    get deploymentDurationInMinutes(): number;
    set deploymentDurationInMinutes(value: number);
    get deploymentDurationInMinutesInput(): number | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _finalBakeTimeInMinutes?;
    get finalBakeTimeInMinutes(): number;
    set finalBakeTimeInMinutes(value: number);
    resetFinalBakeTimeInMinutes(): void;
    get finalBakeTimeInMinutesInput(): number | undefined;
    private _growthFactor?;
    get growthFactor(): number;
    set growthFactor(value: number);
    get growthFactorInput(): number | undefined;
    private _growthType?;
    get growthType(): string;
    set growthType(value: string);
    resetGrowthType(): void;
    get growthTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _replicateTo?;
    get replicateTo(): string;
    set replicateTo(value: string);
    get replicateToInput(): string | undefined;
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
