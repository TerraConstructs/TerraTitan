/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#connections GlueJob#connections}
    */
    readonly connections?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#default_arguments GlueJob#default_arguments}
    */
    readonly defaultArguments?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#description GlueJob#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#execution_class GlueJob#execution_class}
    */
    readonly executionClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#glue_version GlueJob#glue_version}
    */
    readonly glueVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#id GlueJob#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#job_run_queuing_enabled GlueJob#job_run_queuing_enabled}
    */
    readonly jobRunQueuingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#maintenance_window GlueJob#maintenance_window}
    */
    readonly maintenanceWindow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#max_capacity GlueJob#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#max_retries GlueJob#max_retries}
    */
    readonly maxRetries?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#name GlueJob#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#non_overridable_arguments GlueJob#non_overridable_arguments}
    */
    readonly nonOverridableArguments?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#number_of_workers GlueJob#number_of_workers}
    */
    readonly numberOfWorkers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#role_arn GlueJob#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#security_configuration GlueJob#security_configuration}
    */
    readonly securityConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#tags GlueJob#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#tags_all GlueJob#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#timeout GlueJob#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#worker_type GlueJob#worker_type}
    */
    readonly workerType?: string;
    /**
    * command block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#command GlueJob#command}
    */
    readonly command: GlueJobCommand;
    /**
    * execution_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#execution_property GlueJob#execution_property}
    */
    readonly executionProperty?: GlueJobExecutionProperty;
    /**
    * notification_property block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#notification_property GlueJob#notification_property}
    */
    readonly notificationProperty?: GlueJobNotificationProperty;
}
export interface GlueJobCommand {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#name GlueJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#python_version GlueJob#python_version}
    */
    readonly pythonVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#runtime GlueJob#runtime}
    */
    readonly runtime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#script_location GlueJob#script_location}
    */
    readonly scriptLocation: string;
}
export declare function glueJobCommandToTerraform(struct?: GlueJobCommandOutputReference | GlueJobCommand): any;
export declare function glueJobCommandToHclTerraform(struct?: GlueJobCommandOutputReference | GlueJobCommand): any;
export declare class GlueJobCommandOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueJobCommand | undefined;
    set internalValue(value: GlueJobCommand | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _pythonVersion?;
    get pythonVersion(): string;
    set pythonVersion(value: string);
    resetPythonVersion(): void;
    get pythonVersionInput(): string | undefined;
    private _runtime?;
    get runtime(): string;
    set runtime(value: string);
    resetRuntime(): void;
    get runtimeInput(): string | undefined;
    private _scriptLocation?;
    get scriptLocation(): string;
    set scriptLocation(value: string);
    get scriptLocationInput(): string | undefined;
}
export interface GlueJobExecutionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#max_concurrent_runs GlueJob#max_concurrent_runs}
    */
    readonly maxConcurrentRuns?: number;
}
export declare function glueJobExecutionPropertyToTerraform(struct?: GlueJobExecutionPropertyOutputReference | GlueJobExecutionProperty): any;
export declare function glueJobExecutionPropertyToHclTerraform(struct?: GlueJobExecutionPropertyOutputReference | GlueJobExecutionProperty): any;
export declare class GlueJobExecutionPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueJobExecutionProperty | undefined;
    set internalValue(value: GlueJobExecutionProperty | undefined);
    private _maxConcurrentRuns?;
    get maxConcurrentRuns(): number;
    set maxConcurrentRuns(value: number);
    resetMaxConcurrentRuns(): void;
    get maxConcurrentRunsInput(): number | undefined;
}
export interface GlueJobNotificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#notify_delay_after GlueJob#notify_delay_after}
    */
    readonly notifyDelayAfter?: number;
}
export declare function glueJobNotificationPropertyToTerraform(struct?: GlueJobNotificationPropertyOutputReference | GlueJobNotificationProperty): any;
export declare function glueJobNotificationPropertyToHclTerraform(struct?: GlueJobNotificationPropertyOutputReference | GlueJobNotificationProperty): any;
export declare class GlueJobNotificationPropertyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueJobNotificationProperty | undefined;
    set internalValue(value: GlueJobNotificationProperty | undefined);
    private _notifyDelayAfter?;
    get notifyDelayAfter(): number;
    set notifyDelayAfter(value: number);
    resetNotifyDelayAfter(): void;
    get notifyDelayAfterInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job aws_glue_job}
*/
export declare class GlueJob extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_job";
    /**
    * Generates CDKTF code for importing a GlueJob resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueJob to import
    * @param importFromId The id of the existing GlueJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueJob to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_job aws_glue_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueJobConfig
    */
    constructor(scope: Construct, id: string, config: GlueJobConfig);
    get arn(): string;
    private _connections?;
    get connections(): string[];
    set connections(value: string[]);
    resetConnections(): void;
    get connectionsInput(): string[] | undefined;
    private _defaultArguments?;
    get defaultArguments(): {
        [key: string]: string;
    };
    set defaultArguments(value: {
        [key: string]: string;
    });
    resetDefaultArguments(): void;
    get defaultArgumentsInput(): {
        [key: string]: string;
    } | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _executionClass?;
    get executionClass(): string;
    set executionClass(value: string);
    resetExecutionClass(): void;
    get executionClassInput(): string | undefined;
    private _glueVersion?;
    get glueVersion(): string;
    set glueVersion(value: string);
    resetGlueVersion(): void;
    get glueVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _jobRunQueuingEnabled?;
    get jobRunQueuingEnabled(): boolean | cdktf.IResolvable;
    set jobRunQueuingEnabled(value: boolean | cdktf.IResolvable);
    resetJobRunQueuingEnabled(): void;
    get jobRunQueuingEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _maintenanceWindow?;
    get maintenanceWindow(): string;
    set maintenanceWindow(value: string);
    resetMaintenanceWindow(): void;
    get maintenanceWindowInput(): string | undefined;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    resetMaxCapacity(): void;
    get maxCapacityInput(): number | undefined;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    resetMaxRetries(): void;
    get maxRetriesInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _nonOverridableArguments?;
    get nonOverridableArguments(): {
        [key: string]: string;
    };
    set nonOverridableArguments(value: {
        [key: string]: string;
    });
    resetNonOverridableArguments(): void;
    get nonOverridableArgumentsInput(): {
        [key: string]: string;
    } | undefined;
    private _numberOfWorkers?;
    get numberOfWorkers(): number;
    set numberOfWorkers(value: number);
    resetNumberOfWorkers(): void;
    get numberOfWorkersInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _securityConfiguration?;
    get securityConfiguration(): string;
    set securityConfiguration(value: string);
    resetSecurityConfiguration(): void;
    get securityConfigurationInput(): string | undefined;
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
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    resetTimeout(): void;
    get timeoutInput(): number | undefined;
    private _workerType?;
    get workerType(): string;
    set workerType(value: string);
    resetWorkerType(): void;
    get workerTypeInput(): string | undefined;
    private _command;
    get command(): GlueJobCommandOutputReference;
    putCommand(value: GlueJobCommand): void;
    get commandInput(): GlueJobCommand | undefined;
    private _executionProperty;
    get executionProperty(): GlueJobExecutionPropertyOutputReference;
    putExecutionProperty(value: GlueJobExecutionProperty): void;
    resetExecutionProperty(): void;
    get executionPropertyInput(): GlueJobExecutionProperty | undefined;
    private _notificationProperty;
    get notificationProperty(): GlueJobNotificationPropertyOutputReference;
    putNotificationProperty(value: GlueJobNotificationProperty): void;
    resetNotificationProperty(): void;
    get notificationPropertyInput(): GlueJobNotificationProperty | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
