/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsoadminPrincipalApplicationAssignmentsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_principal_application_assignments#instance_arn DataAwsSsoadminPrincipalApplicationAssignments#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_id DataAwsSsoadminPrincipalApplicationAssignments#principal_id}
    */
    readonly principalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_principal_application_assignments#principal_type DataAwsSsoadminPrincipalApplicationAssignments#principal_type}
    */
    readonly principalType: string;
    /**
    * application_assignments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_principal_application_assignments#application_assignments DataAwsSsoadminPrincipalApplicationAssignments#application_assignments}
    */
    readonly applicationAssignments?: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable;
}
export interface DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments {
}
export declare function dataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsToTerraform(struct?: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments | cdktf.IResolvable): any;
export declare function dataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsToHclTerraform(struct?: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments | cdktf.IResolvable): any;
export declare class DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments | cdktf.IResolvable | undefined);
    get applicationArn(): string;
    get principalId(): string;
    get principalType(): string;
}
export declare class DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_principal_application_assignments aws_ssoadmin_principal_application_assignments}
*/
export declare class DataAwsSsoadminPrincipalApplicationAssignments extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssoadmin_principal_application_assignments";
    /**
    * Generates CDKTF code for importing a DataAwsSsoadminPrincipalApplicationAssignments resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsoadminPrincipalApplicationAssignments to import
    * @param importFromId The id of the existing DataAwsSsoadminPrincipalApplicationAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_principal_application_assignments#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsoadminPrincipalApplicationAssignments to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_principal_application_assignments aws_ssoadmin_principal_application_assignments} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminPrincipalApplicationAssignmentsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsoadminPrincipalApplicationAssignmentsConfig);
    get id(): string;
    private _instanceArn?;
    get instanceArn(): string;
    set instanceArn(value: string);
    get instanceArnInput(): string | undefined;
    private _principalId?;
    get principalId(): string;
    set principalId(value: string);
    get principalIdInput(): string | undefined;
    private _principalType?;
    get principalType(): string;
    set principalType(value: string);
    get principalTypeInput(): string | undefined;
    private _applicationAssignments;
    get applicationAssignments(): DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignmentsList;
    putApplicationAssignments(value: DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[] | cdktf.IResolvable): void;
    resetApplicationAssignments(): void;
    get applicationAssignmentsInput(): cdktf.IResolvable | DataAwsSsoadminPrincipalApplicationAssignmentsApplicationAssignments[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
