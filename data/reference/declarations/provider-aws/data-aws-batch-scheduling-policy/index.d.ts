/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBatchSchedulingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_scheduling_policy#arn DataAwsBatchSchedulingPolicy#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_scheduling_policy#id DataAwsBatchSchedulingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_scheduling_policy#tags DataAwsBatchSchedulingPolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution {
}
export declare function dataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionToTerraform(struct?: DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution): any;
export declare function dataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionToHclTerraform(struct?: DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution): any;
export declare class DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution | undefined;
    set internalValue(value: DataAwsBatchSchedulingPolicyFairSharePolicyShareDistribution | undefined);
    get shareIdentifier(): string;
    get weightFactor(): number;
}
export declare class DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference;
}
export interface DataAwsBatchSchedulingPolicyFairSharePolicy {
}
export declare function dataAwsBatchSchedulingPolicyFairSharePolicyToTerraform(struct?: DataAwsBatchSchedulingPolicyFairSharePolicy): any;
export declare function dataAwsBatchSchedulingPolicyFairSharePolicyToHclTerraform(struct?: DataAwsBatchSchedulingPolicyFairSharePolicy): any;
export declare class DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBatchSchedulingPolicyFairSharePolicy | undefined;
    set internalValue(value: DataAwsBatchSchedulingPolicyFairSharePolicy | undefined);
    get computeReservation(): number;
    get shareDecaySeconds(): number;
    private _shareDistribution;
    get shareDistribution(): DataAwsBatchSchedulingPolicyFairSharePolicyShareDistributionList;
}
export declare class DataAwsBatchSchedulingPolicyFairSharePolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBatchSchedulingPolicyFairSharePolicyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_scheduling_policy aws_batch_scheduling_policy}
*/
export declare class DataAwsBatchSchedulingPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_batch_scheduling_policy";
    /**
    * Generates CDKTF code for importing a DataAwsBatchSchedulingPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBatchSchedulingPolicy to import
    * @param importFromId The id of the existing DataAwsBatchSchedulingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBatchSchedulingPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/batch_scheduling_policy aws_batch_scheduling_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBatchSchedulingPolicyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBatchSchedulingPolicyConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _fairSharePolicy;
    get fairSharePolicy(): DataAwsBatchSchedulingPolicyFairSharePolicyList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
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
