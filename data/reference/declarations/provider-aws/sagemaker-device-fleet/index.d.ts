/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDeviceFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#description SagemakerDeviceFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}
    */
    readonly deviceFleetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}
    */
    readonly enableIotRoleAlias?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#id SagemakerDeviceFleet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * output_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#output_config SagemakerDeviceFleet#output_config}
    */
    readonly outputConfig: SagemakerDeviceFleetOutputConfig;
}
export interface SagemakerDeviceFleetOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}
    */
    readonly s3OutputLocation: string;
}
export declare function sagemakerDeviceFleetOutputConfigToTerraform(struct?: SagemakerDeviceFleetOutputConfigOutputReference | SagemakerDeviceFleetOutputConfig): any;
export declare function sagemakerDeviceFleetOutputConfigToHclTerraform(struct?: SagemakerDeviceFleetOutputConfigOutputReference | SagemakerDeviceFleetOutputConfig): any;
export declare class SagemakerDeviceFleetOutputConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDeviceFleetOutputConfig | undefined;
    set internalValue(value: SagemakerDeviceFleetOutputConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _s3OutputLocation?;
    get s3OutputLocation(): string;
    set s3OutputLocation(value: string);
    get s3OutputLocationInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet aws_sagemaker_device_fleet}
*/
export declare class SagemakerDeviceFleet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_device_fleet";
    /**
    * Generates CDKTF code for importing a SagemakerDeviceFleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerDeviceFleet to import
    * @param importFromId The id of the existing SagemakerDeviceFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerDeviceFleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_device_fleet aws_sagemaker_device_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDeviceFleetConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDeviceFleetConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _deviceFleetName?;
    get deviceFleetName(): string;
    set deviceFleetName(value: string);
    get deviceFleetNameInput(): string | undefined;
    private _enableIotRoleAlias?;
    get enableIotRoleAlias(): boolean | cdktf.IResolvable;
    set enableIotRoleAlias(value: boolean | cdktf.IResolvable);
    resetEnableIotRoleAlias(): void;
    get enableIotRoleAliasInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get iotRoleAlias(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _outputConfig;
    get outputConfig(): SagemakerDeviceFleetOutputConfigOutputReference;
    putOutputConfig(value: SagemakerDeviceFleetOutputConfig): void;
    get outputConfigInput(): SagemakerDeviceFleetOutputConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
