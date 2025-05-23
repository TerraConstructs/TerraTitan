/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBatchJobQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_queue#id DataAwsBatchJobQueue#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_queue#name DataAwsBatchJobQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_queue#tags DataAwsBatchJobQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsBatchJobQueueComputeEnvironmentOrder {
}
export declare function dataAwsBatchJobQueueComputeEnvironmentOrderToTerraform(struct?: DataAwsBatchJobQueueComputeEnvironmentOrder): any;
export declare function dataAwsBatchJobQueueComputeEnvironmentOrderToHclTerraform(struct?: DataAwsBatchJobQueueComputeEnvironmentOrder): any;
export declare class DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobQueueComputeEnvironmentOrder | undefined;
    set internalValue(value: DataAwsBatchJobQueueComputeEnvironmentOrder | undefined);
    get computeEnvironment(): string;
    get order(): number;
}
export declare class DataAwsBatchJobQueueComputeEnvironmentOrderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsBatchJobQueueComputeEnvironmentOrderOutputReference;
}
export interface DataAwsBatchJobQueueJobStateTimeLimitAction {
}
export declare function dataAwsBatchJobQueueJobStateTimeLimitActionToTerraform(struct?: DataAwsBatchJobQueueJobStateTimeLimitAction): any;
export declare function dataAwsBatchJobQueueJobStateTimeLimitActionToHclTerraform(struct?: DataAwsBatchJobQueueJobStateTimeLimitAction): any;
export declare class DataAwsBatchJobQueueJobStateTimeLimitActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchJobQueueJobStateTimeLimitAction | undefined;
    set internalValue(value: DataAwsBatchJobQueueJobStateTimeLimitAction | undefined);
    get action(): string;
    get maxTimeSeconds(): number;
    get reason(): string;
    get state(): string;
}
export declare class DataAwsBatchJobQueueJobStateTimeLimitActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsBatchJobQueueJobStateTimeLimitActionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_queue aws_batch_job_queue}
*/
export declare class DataAwsBatchJobQueue extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_batch_job_queue";
    /**
    * Generates CDKTF code for importing a DataAwsBatchJobQueue resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBatchJobQueue to import
    * @param importFromId The id of the existing DataAwsBatchJobQueue that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_queue#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBatchJobQueue to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_job_queue aws_batch_job_queue} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchJobQueueConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBatchJobQueueConfig);
    get arn(): string;
    private _computeEnvironmentOrder;
    get computeEnvironmentOrder(): DataAwsBatchJobQueueComputeEnvironmentOrderList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _jobStateTimeLimitAction;
    get jobStateTimeLimitAction(): DataAwsBatchJobQueueJobStateTimeLimitActionList;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get priority(): number;
    get schedulingPolicyArn(): string;
    get state(): string;
    get status(): string;
    get statusReason(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
