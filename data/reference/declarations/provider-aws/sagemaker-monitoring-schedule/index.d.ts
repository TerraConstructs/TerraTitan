/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerMonitoringScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#id SagemakerMonitoringSchedule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#name SagemakerMonitoringSchedule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#tags SagemakerMonitoringSchedule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#tags_all SagemakerMonitoringSchedule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * monitoring_schedule_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#monitoring_schedule_config SagemakerMonitoringSchedule#monitoring_schedule_config}
    */
    readonly monitoringScheduleConfig: SagemakerMonitoringScheduleMonitoringScheduleConfig;
}
export interface SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#schedule_expression SagemakerMonitoringSchedule#schedule_expression}
    */
    readonly scheduleExpression: string;
}
export declare function sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): any;
export declare function sagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigToHclTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): any;
export declare class SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig | undefined;
    set internalValue(value: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig | undefined);
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
}
export interface SagemakerMonitoringScheduleMonitoringScheduleConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#monitoring_job_definition_name SagemakerMonitoringSchedule#monitoring_job_definition_name}
    */
    readonly monitoringJobDefinitionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#monitoring_type SagemakerMonitoringSchedule#monitoring_type}
    */
    readonly monitoringType: string;
    /**
    * schedule_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#schedule_config SagemakerMonitoringSchedule#schedule_config}
    */
    readonly scheduleConfig?: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig;
}
export declare function sagemakerMonitoringScheduleMonitoringScheduleConfigToTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfig): any;
export declare function sagemakerMonitoringScheduleMonitoringScheduleConfigToHclTerraform(struct?: SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference | SagemakerMonitoringScheduleMonitoringScheduleConfig): any;
export declare class SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerMonitoringScheduleMonitoringScheduleConfig | undefined;
    set internalValue(value: SagemakerMonitoringScheduleMonitoringScheduleConfig | undefined);
    private _monitoringJobDefinitionName?;
    get monitoringJobDefinitionName(): string;
    set monitoringJobDefinitionName(value: string);
    get monitoringJobDefinitionNameInput(): string | undefined;
    private _monitoringType?;
    get monitoringType(): string;
    set monitoringType(value: string);
    get monitoringTypeInput(): string | undefined;
    private _scheduleConfig;
    get scheduleConfig(): SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfigOutputReference;
    putScheduleConfig(value: SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig): void;
    resetScheduleConfig(): void;
    get scheduleConfigInput(): SagemakerMonitoringScheduleMonitoringScheduleConfigScheduleConfig | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule aws_sagemaker_monitoring_schedule}
*/
export declare class SagemakerMonitoringSchedule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_monitoring_schedule";
    /**
    * Generates CDKTF code for importing a SagemakerMonitoringSchedule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerMonitoringSchedule to import
    * @param importFromId The id of the existing SagemakerMonitoringSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerMonitoringSchedule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_monitoring_schedule aws_sagemaker_monitoring_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerMonitoringScheduleConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerMonitoringScheduleConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
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
    private _monitoringScheduleConfig;
    get monitoringScheduleConfig(): SagemakerMonitoringScheduleMonitoringScheduleConfigOutputReference;
    putMonitoringScheduleConfig(value: SagemakerMonitoringScheduleMonitoringScheduleConfig): void;
    get monitoringScheduleConfigInput(): SagemakerMonitoringScheduleMonitoringScheduleConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
