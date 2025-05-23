/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApprunnerDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_deployment#service_arn ApprunnerDeployment#service_arn}
    */
    readonly serviceArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_deployment#timeouts ApprunnerDeployment#timeouts}
    */
    readonly timeouts?: ApprunnerDeploymentTimeouts;
}
export interface ApprunnerDeploymentTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_deployment#create ApprunnerDeployment#create}
    */
    readonly create?: string;
}
export declare function apprunnerDeploymentTimeoutsToTerraform(struct?: ApprunnerDeploymentTimeouts | cdktf.IResolvable): any;
export declare function apprunnerDeploymentTimeoutsToHclTerraform(struct?: ApprunnerDeploymentTimeouts | cdktf.IResolvable): any;
export declare class ApprunnerDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerDeploymentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ApprunnerDeploymentTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_deployment aws_apprunner_deployment}
*/
export declare class ApprunnerDeployment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apprunner_deployment";
    /**
    * Generates CDKTF code for importing a ApprunnerDeployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerDeployment to import
    * @param importFromId The id of the existing ApprunnerDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerDeployment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_deployment aws_apprunner_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerDeploymentConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerDeploymentConfig);
    get id(): string;
    get operationId(): string;
    private _serviceArn?;
    get serviceArn(): string;
    set serviceArn(value: string);
    get serviceArnInput(): string | undefined;
    get status(): string;
    private _timeouts;
    get timeouts(): ApprunnerDeploymentTimeoutsOutputReference;
    putTimeouts(value: ApprunnerDeploymentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ApprunnerDeploymentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
