/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RdsClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) The description of the DB cluster parameter group. Defaults to "Managed by Terraform". */
    readonly description?: string;
    /** (Required) The family of the DB cluster parameter group. */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_parameter_group#id RdsClusterParameterGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Optional, Forces new resource) The name of the DB cluster parameter group. If omitted, Terraform will assign a random, unique name. */
    readonly name?: string;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    readonly namePrefix?: string;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_parameter_group#tags_all RdsClusterParameterGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) A list of DB parameters to apply. Note that parameters may differ from a family to an other. Full list of all parameters can be discovered via [`aws rds describe-db-cluster-parameters`](https://docs.aws.amazon.com/cli/latest/reference/rds/describe-db-cluster-parameters.html) after initial creation of the group. */
    readonly parameter?: RdsClusterParameterGroupParameter[] | cdktf.IResolvable;
}
export interface RdsClusterParameterGroupParameter {
    /** (Optional) "immediate" (default), or "pending-reboot". Some engines can't apply some parameters without a reboot, and you will need to specify "pending-reboot" here. */
    readonly applyMethod?: string;
    /** (Optional, Forces new resource) The name of the DB cluster parameter group. If omitted, Terraform will assign a random, unique name. */
    readonly name: string;
    /** (Required) The value of the DB parameter. */
    readonly value: string;
}
export declare function rdsClusterParameterGroupParameterToTerraform(struct?: RdsClusterParameterGroupParameter | cdktf.IResolvable): any;
export declare function rdsClusterParameterGroupParameterToHclTerraform(struct?: RdsClusterParameterGroupParameter | cdktf.IResolvable): any;
export declare class RdsClusterParameterGroupParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RdsClusterParameterGroupParameter | cdktf.IResolvable | undefined;
    set internalValue(value: RdsClusterParameterGroupParameter | cdktf.IResolvable | undefined);
    private _applyMethod?;
    get applyMethod(): string;
    set applyMethod(value: string);
    resetApplyMethod(): void;
    get applyMethodInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class RdsClusterParameterGroupParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RdsClusterParameterGroupParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RdsClusterParameterGroupParameterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_parameter_group aws_rds_cluster_parameter_group}
*/
export declare class RdsClusterParameterGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rds_cluster_parameter_group";
    /**
    * Generates CDKTF code for importing a RdsClusterParameterGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RdsClusterParameterGroup to import
    * @param importFromId The id of the existing RdsClusterParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_parameter_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RdsClusterParameterGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/rds_cluster_parameter_group aws_rds_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RdsClusterParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: RdsClusterParameterGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _family?;
    get family(): string;
    set family(value: string);
    get familyInput(): string | undefined;
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
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
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
    private _parameter;
    get parameter(): RdsClusterParameterGroupParameterList;
    putParameter(value: RdsClusterParameterGroupParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | RdsClusterParameterGroupParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
