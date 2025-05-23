/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailContainerServiceDeploymentVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#id LightsailContainerServiceDeploymentVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#service_name LightsailContainerServiceDeploymentVersion#service_name}
    */
    readonly serviceName: string;
    /**
    * container block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#container LightsailContainerServiceDeploymentVersion#container}
    */
    readonly container: LightsailContainerServiceDeploymentVersionContainer[] | cdktf.IResolvable;
    /**
    * public_endpoint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#public_endpoint LightsailContainerServiceDeploymentVersion#public_endpoint}
    */
    readonly publicEndpoint?: LightsailContainerServiceDeploymentVersionPublicEndpoint;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#timeouts LightsailContainerServiceDeploymentVersion#timeouts}
    */
    readonly timeouts?: LightsailContainerServiceDeploymentVersionTimeouts;
}
export interface LightsailContainerServiceDeploymentVersionContainer {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#command LightsailContainerServiceDeploymentVersion#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#container_name LightsailContainerServiceDeploymentVersion#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#environment LightsailContainerServiceDeploymentVersion#environment}
    */
    readonly environment?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#image LightsailContainerServiceDeploymentVersion#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#ports LightsailContainerServiceDeploymentVersion#ports}
    */
    readonly ports?: {
        [key: string]: string;
    };
}
export declare function lightsailContainerServiceDeploymentVersionContainerToTerraform(struct?: LightsailContainerServiceDeploymentVersionContainer | cdktf.IResolvable): any;
export declare function lightsailContainerServiceDeploymentVersionContainerToHclTerraform(struct?: LightsailContainerServiceDeploymentVersionContainer | cdktf.IResolvable): any;
export declare class LightsailContainerServiceDeploymentVersionContainerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LightsailContainerServiceDeploymentVersionContainer | cdktf.IResolvable | undefined;
    set internalValue(value: LightsailContainerServiceDeploymentVersionContainer | cdktf.IResolvable | undefined);
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[] | undefined;
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string | undefined;
    private _environment?;
    get environment(): {
        [key: string]: string;
    };
    set environment(value: {
        [key: string]: string;
    });
    resetEnvironment(): void;
    get environmentInput(): {
        [key: string]: string;
    } | undefined;
    private _image?;
    get image(): string;
    set image(value: string);
    get imageInput(): string | undefined;
    private _ports?;
    get ports(): {
        [key: string]: string;
    };
    set ports(value: {
        [key: string]: string;
    });
    resetPorts(): void;
    get portsInput(): {
        [key: string]: string;
    } | undefined;
}
export declare class LightsailContainerServiceDeploymentVersionContainerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LightsailContainerServiceDeploymentVersionContainer[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LightsailContainerServiceDeploymentVersionContainerOutputReference;
}
export interface LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#healthy_threshold LightsailContainerServiceDeploymentVersion#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#interval_seconds LightsailContainerServiceDeploymentVersion#interval_seconds}
    */
    readonly intervalSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#path LightsailContainerServiceDeploymentVersion#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#success_codes LightsailContainerServiceDeploymentVersion#success_codes}
    */
    readonly successCodes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#timeout_seconds LightsailContainerServiceDeploymentVersion#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#unhealthy_threshold LightsailContainerServiceDeploymentVersion#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export declare function lightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckToTerraform(struct?: LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference | LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck): any;
export declare function lightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckToHclTerraform(struct?: LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference | LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck): any;
export declare class LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck | undefined;
    set internalValue(value: LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck | undefined);
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    resetHealthyThreshold(): void;
    get healthyThresholdInput(): number | undefined;
    private _intervalSeconds?;
    get intervalSeconds(): number;
    set intervalSeconds(value: number);
    resetIntervalSeconds(): void;
    get intervalSecondsInput(): number | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
    private _successCodes?;
    get successCodes(): string;
    set successCodes(value: string);
    resetSuccessCodes(): void;
    get successCodesInput(): string | undefined;
    private _timeoutSeconds?;
    get timeoutSeconds(): number;
    set timeoutSeconds(value: number);
    resetTimeoutSeconds(): void;
    get timeoutSecondsInput(): number | undefined;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    resetUnhealthyThreshold(): void;
    get unhealthyThresholdInput(): number | undefined;
}
export interface LightsailContainerServiceDeploymentVersionPublicEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#container_name LightsailContainerServiceDeploymentVersion#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#container_port LightsailContainerServiceDeploymentVersion#container_port}
    */
    readonly containerPort: number;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#health_check LightsailContainerServiceDeploymentVersion#health_check}
    */
    readonly healthCheck: LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck;
}
export declare function lightsailContainerServiceDeploymentVersionPublicEndpointToTerraform(struct?: LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference | LightsailContainerServiceDeploymentVersionPublicEndpoint): any;
export declare function lightsailContainerServiceDeploymentVersionPublicEndpointToHclTerraform(struct?: LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference | LightsailContainerServiceDeploymentVersionPublicEndpoint): any;
export declare class LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailContainerServiceDeploymentVersionPublicEndpoint | undefined;
    set internalValue(value: LightsailContainerServiceDeploymentVersionPublicEndpoint | undefined);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    get containerNameInput(): string | undefined;
    private _containerPort?;
    get containerPort(): number;
    set containerPort(value: number);
    get containerPortInput(): number | undefined;
    private _healthCheck;
    get healthCheck(): LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheckOutputReference;
    putHealthCheck(value: LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck): void;
    get healthCheckInput(): LightsailContainerServiceDeploymentVersionPublicEndpointHealthCheck | undefined;
}
export interface LightsailContainerServiceDeploymentVersionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#create LightsailContainerServiceDeploymentVersion#create}
    */
    readonly create?: string;
}
export declare function lightsailContainerServiceDeploymentVersionTimeoutsToTerraform(struct?: LightsailContainerServiceDeploymentVersionTimeouts | cdktf.IResolvable): any;
export declare function lightsailContainerServiceDeploymentVersionTimeoutsToHclTerraform(struct?: LightsailContainerServiceDeploymentVersionTimeouts | cdktf.IResolvable): any;
export declare class LightsailContainerServiceDeploymentVersionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LightsailContainerServiceDeploymentVersionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LightsailContainerServiceDeploymentVersionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version aws_lightsail_container_service_deployment_version}
*/
export declare class LightsailContainerServiceDeploymentVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_container_service_deployment_version";
    /**
    * Generates CDKTF code for importing a LightsailContainerServiceDeploymentVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailContainerServiceDeploymentVersion to import
    * @param importFromId The id of the existing LightsailContainerServiceDeploymentVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailContainerServiceDeploymentVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_container_service_deployment_version aws_lightsail_container_service_deployment_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailContainerServiceDeploymentVersionConfig
    */
    constructor(scope: Construct, id: string, config: LightsailContainerServiceDeploymentVersionConfig);
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
    get state(): string;
    get version(): number;
    private _container;
    get container(): LightsailContainerServiceDeploymentVersionContainerList;
    putContainer(value: LightsailContainerServiceDeploymentVersionContainer[] | cdktf.IResolvable): void;
    get containerInput(): cdktf.IResolvable | LightsailContainerServiceDeploymentVersionContainer[] | undefined;
    private _publicEndpoint;
    get publicEndpoint(): LightsailContainerServiceDeploymentVersionPublicEndpointOutputReference;
    putPublicEndpoint(value: LightsailContainerServiceDeploymentVersionPublicEndpoint): void;
    resetPublicEndpoint(): void;
    get publicEndpointInput(): LightsailContainerServiceDeploymentVersionPublicEndpoint | undefined;
    private _timeouts;
    get timeouts(): LightsailContainerServiceDeploymentVersionTimeoutsOutputReference;
    putTimeouts(value: LightsailContainerServiceDeploymentVersionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LightsailContainerServiceDeploymentVersionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
