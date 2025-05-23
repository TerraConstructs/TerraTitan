/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsoadminApplicationAssignmentsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_assignments#application_arn DataAwsSsoadminApplicationAssignments#application_arn}
    */
    readonly applicationArn: string;
    /**
    * application_assignments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_assignments#application_assignments DataAwsSsoadminApplicationAssignments#application_assignments}
    */
    readonly applicationAssignments?: DataAwsSsoadminApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable;
}
export interface DataAwsSsoadminApplicationAssignmentsApplicationAssignments {
}
export declare function dataAwsSsoadminApplicationAssignmentsApplicationAssignmentsToTerraform(struct?: DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable): any;
export declare function dataAwsSsoadminApplicationAssignmentsApplicationAssignmentsToHclTerraform(struct?: DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable): any;
export declare class DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSsoadminApplicationAssignmentsApplicationAssignments | cdktf.IResolvable | undefined);
    get applicationArn(): string;
    get principalId(): string;
    get principalType(): string;
}
export declare class DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSsoadminApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_assignments aws_ssoadmin_application_assignments}
*/
export declare class DataAwsSsoadminApplicationAssignments extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssoadmin_application_assignments";
    /**
    * Generates CDKTF code for importing a DataAwsSsoadminApplicationAssignments resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsoadminApplicationAssignments to import
    * @param importFromId The id of the existing DataAwsSsoadminApplicationAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_assignments#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsoadminApplicationAssignments to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_assignments aws_ssoadmin_application_assignments} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminApplicationAssignmentsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsoadminApplicationAssignmentsConfig);
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    get applicationArnInput(): string | undefined;
    get id(): string;
    private _applicationAssignments;
    get applicationAssignments(): DataAwsSsoadminApplicationAssignmentsApplicationAssignmentsList;
    putApplicationAssignments(value: DataAwsSsoadminApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable): void;
    resetApplicationAssignments(): void;
    get applicationAssignmentsInput(): cdktf.IResolvable | DataAwsSsoadminApplicationAssignmentsApplicationAssignments[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
