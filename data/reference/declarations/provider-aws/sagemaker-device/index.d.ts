/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device#device_fleet_name SagemakerDevice#device_fleet_name}
    */
    readonly deviceFleetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device#id SagemakerDevice#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device#device SagemakerDevice#device}
    */
    readonly device: SagemakerDeviceDevice;
}
export interface SagemakerDeviceDevice {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device#description SagemakerDevice#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device#device_name SagemakerDevice#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device#iot_thing_name SagemakerDevice#iot_thing_name}
    */
    readonly iotThingName?: string;
}
export declare function sagemakerDeviceDeviceToTerraform(struct?: SagemakerDeviceDeviceOutputReference | SagemakerDeviceDevice): any;
export declare function sagemakerDeviceDeviceToHclTerraform(struct?: SagemakerDeviceDeviceOutputReference | SagemakerDeviceDevice): any;
export declare class SagemakerDeviceDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDeviceDevice | undefined;
    set internalValue(value: SagemakerDeviceDevice | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string | undefined;
    private _iotThingName?;
    get iotThingName(): string;
    set iotThingName(value: string);
    resetIotThingName(): void;
    get iotThingNameInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device aws_sagemaker_device}
*/
export declare class SagemakerDevice extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_device";
    /**
    * Generates CDKTF code for importing a SagemakerDevice resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerDevice to import
    * @param importFromId The id of the existing SagemakerDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerDevice to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device aws_sagemaker_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDeviceConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDeviceConfig);
    get agentVersion(): string;
    get arn(): string;
    private _deviceFleetName?;
    get deviceFleetName(): string;
    set deviceFleetName(value: string);
    get deviceFleetNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _device;
    get device(): SagemakerDeviceDeviceOutputReference;
    putDevice(value: SagemakerDeviceDevice): void;
    get deviceInput(): SagemakerDeviceDevice | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
