/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmplifyBackendEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment#app_id AmplifyBackendEnvironment#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment#deployment_artifacts AmplifyBackendEnvironment#deployment_artifacts}
    */
    readonly deploymentArtifacts?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment#environment_name AmplifyBackendEnvironment#environment_name}
    */
    readonly environmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment#id AmplifyBackendEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment#stack_name AmplifyBackendEnvironment#stack_name}
    */
    readonly stackName?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment aws_amplify_backend_environment}
*/
export declare class AmplifyBackendEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_amplify_backend_environment";
    /**
    * Generates CDKTF code for importing a AmplifyBackendEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmplifyBackendEnvironment to import
    * @param importFromId The id of the existing AmplifyBackendEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmplifyBackendEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_backend_environment aws_amplify_backend_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBackendEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyBackendEnvironmentConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string | undefined;
    get arn(): string;
    private _deploymentArtifacts?;
    get deploymentArtifacts(): string;
    set deploymentArtifacts(value: string);
    resetDeploymentArtifacts(): void;
    get deploymentArtifactsInput(): string | undefined;
    private _environmentName?;
    get environmentName(): string;
    set environmentName(value: string);
    get environmentNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _stackName?;
    get stackName(): string;
    set stackName(value: string);
    resetStackName(): void;
    get stackNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
