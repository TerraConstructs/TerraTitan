/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BatchSchedulingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#id BatchSchedulingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#tags_all BatchSchedulingPolicy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * fair_share_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#fair_share_policy BatchSchedulingPolicy#fair_share_policy}
    */
    readonly fairSharePolicy?: BatchSchedulingPolicyFairSharePolicy;
}
export interface BatchSchedulingPolicyFairSharePolicyShareDistribution {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}
    */
    readonly shareIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}
    */
    readonly weightFactor?: number;
}
export declare function batchSchedulingPolicyFairSharePolicyShareDistributionToTerraform(struct?: BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable): any;
export declare function batchSchedulingPolicyFairSharePolicyShareDistributionToHclTerraform(struct?: BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable): any;
export declare class BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable | undefined;
    set internalValue(value: BatchSchedulingPolicyFairSharePolicyShareDistribution | cdktf.IResolvable | undefined);
    private _shareIdentifier?;
    get shareIdentifier(): string;
    set shareIdentifier(value: string);
    get shareIdentifierInput(): string | undefined;
    private _weightFactor?;
    get weightFactor(): number;
    set weightFactor(value: number);
    resetWeightFactor(): void;
    get weightFactorInput(): number | undefined;
}
export declare class BatchSchedulingPolicyFairSharePolicyShareDistributionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BatchSchedulingPolicyFairSharePolicyShareDistributionOutputReference;
}
export interface BatchSchedulingPolicyFairSharePolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}
    */
    readonly computeReservation?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}
    */
    readonly shareDecaySeconds?: number;
    /**
    * share_distribution block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}
    */
    readonly shareDistribution?: BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable;
}
export declare function batchSchedulingPolicyFairSharePolicyToTerraform(struct?: BatchSchedulingPolicyFairSharePolicyOutputReference | BatchSchedulingPolicyFairSharePolicy): any;
export declare function batchSchedulingPolicyFairSharePolicyToHclTerraform(struct?: BatchSchedulingPolicyFairSharePolicyOutputReference | BatchSchedulingPolicyFairSharePolicy): any;
export declare class BatchSchedulingPolicyFairSharePolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BatchSchedulingPolicyFairSharePolicy | undefined;
    set internalValue(value: BatchSchedulingPolicyFairSharePolicy | undefined);
    private _computeReservation?;
    get computeReservation(): number;
    set computeReservation(value: number);
    resetComputeReservation(): void;
    get computeReservationInput(): number | undefined;
    private _shareDecaySeconds?;
    get shareDecaySeconds(): number;
    set shareDecaySeconds(value: number);
    resetShareDecaySeconds(): void;
    get shareDecaySecondsInput(): number | undefined;
    private _shareDistribution;
    get shareDistribution(): BatchSchedulingPolicyFairSharePolicyShareDistributionList;
    putShareDistribution(value: BatchSchedulingPolicyFairSharePolicyShareDistribution[] | cdktf.IResolvable): void;
    resetShareDistribution(): void;
    get shareDistributionInput(): cdktf.IResolvable | BatchSchedulingPolicyFairSharePolicyShareDistribution[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy aws_batch_scheduling_policy}
*/
export declare class BatchSchedulingPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_batch_scheduling_policy";
    /**
    * Generates CDKTF code for importing a BatchSchedulingPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BatchSchedulingPolicy to import
    * @param importFromId The id of the existing BatchSchedulingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BatchSchedulingPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/batch_scheduling_policy aws_batch_scheduling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchSchedulingPolicyConfig
    */
    constructor(scope: Construct, id: string, config: BatchSchedulingPolicyConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
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
    private _fairSharePolicy;
    get fairSharePolicy(): BatchSchedulingPolicyFairSharePolicyOutputReference;
    putFairSharePolicy(value: BatchSchedulingPolicyFairSharePolicy): void;
    resetFairSharePolicy(): void;
    get fairSharePolicyInput(): BatchSchedulingPolicyFairSharePolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
