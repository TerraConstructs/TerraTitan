/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface M2DeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#application_id M2Deployment#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#application_version M2Deployment#application_version}
    */
    readonly applicationVersion: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#environment_id M2Deployment#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#force_stop M2Deployment#force_stop}
    */
    readonly forceStop?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#start M2Deployment#start}
    */
    readonly start: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#timeouts M2Deployment#timeouts}
    */
    readonly timeouts?: M2DeploymentTimeouts;
}
export interface M2DeploymentTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#create M2Deployment#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#delete M2Deployment#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#update M2Deployment#update}
    */
    readonly update?: string;
}
export declare function m2DeploymentTimeoutsToTerraform(struct?: M2DeploymentTimeouts | cdktf.IResolvable): any;
export declare function m2DeploymentTimeoutsToHclTerraform(struct?: M2DeploymentTimeouts | cdktf.IResolvable): any;
export declare class M2DeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): M2DeploymentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: M2DeploymentTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment aws_m2_deployment}
*/
export declare class M2Deployment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_m2_deployment";
    /**
    * Generates CDKTF code for importing a M2Deployment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the M2Deployment to import
    * @param importFromId The id of the existing M2Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the M2Deployment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/m2_deployment aws_m2_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options M2DeploymentConfig
    */
    constructor(scope: Construct, id: string, config: M2DeploymentConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    private _applicationVersion?;
    get applicationVersion(): number;
    set applicationVersion(value: number);
    get applicationVersionInput(): number | undefined;
    get deploymentId(): string;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _forceStop?;
    get forceStop(): boolean | cdktf.IResolvable;
    set forceStop(value: boolean | cdktf.IResolvable);
    resetForceStop(): void;
    get forceStopInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _start?;
    get start(): boolean | cdktf.IResolvable;
    set start(value: boolean | cdktf.IResolvable);
    get startInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): M2DeploymentTimeoutsOutputReference;
    putTimeouts(value: M2DeploymentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | M2DeploymentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
