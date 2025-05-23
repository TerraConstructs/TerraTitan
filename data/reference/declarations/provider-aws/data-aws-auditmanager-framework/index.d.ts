/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAuditmanagerFrameworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_framework#framework_type DataAwsAuditmanagerFramework#framework_type}
    */
    readonly frameworkType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_framework#name DataAwsAuditmanagerFramework#name}
    */
    readonly name: string;
    /**
    * control_sets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_framework#control_sets DataAwsAuditmanagerFramework#control_sets}
    */
    readonly controlSets?: DataAwsAuditmanagerFrameworkControlSets[] | cdktf.IResolvable;
}
export interface DataAwsAuditmanagerFrameworkControlSetsControls {
}
export declare function dataAwsAuditmanagerFrameworkControlSetsControlsToTerraform(struct?: DataAwsAuditmanagerFrameworkControlSetsControls | cdktf.IResolvable): any;
export declare function dataAwsAuditmanagerFrameworkControlSetsControlsToHclTerraform(struct?: DataAwsAuditmanagerFrameworkControlSetsControls | cdktf.IResolvable): any;
export declare class DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAuditmanagerFrameworkControlSetsControls | cdktf.IResolvable | undefined);
    get id(): string;
}
export declare class DataAwsAuditmanagerFrameworkControlSetsControlsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAuditmanagerFrameworkControlSetsControlsOutputReference;
}
export interface DataAwsAuditmanagerFrameworkControlSets {
    /**
    * controls block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_framework#controls DataAwsAuditmanagerFramework#controls}
    */
    readonly controls?: DataAwsAuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable;
}
export declare function dataAwsAuditmanagerFrameworkControlSetsToTerraform(struct?: DataAwsAuditmanagerFrameworkControlSets | cdktf.IResolvable): any;
export declare function dataAwsAuditmanagerFrameworkControlSetsToHclTerraform(struct?: DataAwsAuditmanagerFrameworkControlSets | cdktf.IResolvable): any;
export declare class DataAwsAuditmanagerFrameworkControlSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAuditmanagerFrameworkControlSets | cdktf.IResolvable | undefined);
    get id(): string;
    get name(): string;
    private _controls;
    get controls(): DataAwsAuditmanagerFrameworkControlSetsControlsList;
    putControls(value: DataAwsAuditmanagerFrameworkControlSetsControls[] | cdktf.IResolvable): void;
    resetControls(): void;
    get controlsInput(): cdktf.IResolvable | DataAwsAuditmanagerFrameworkControlSetsControls[] | undefined;
}
export declare class DataAwsAuditmanagerFrameworkControlSetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAuditmanagerFrameworkControlSets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAuditmanagerFrameworkControlSetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_framework aws_auditmanager_framework}
*/
export declare class DataAwsAuditmanagerFramework extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_auditmanager_framework";
    /**
    * Generates CDKTF code for importing a DataAwsAuditmanagerFramework resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAuditmanagerFramework to import
    * @param importFromId The id of the existing DataAwsAuditmanagerFramework that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_framework#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAuditmanagerFramework to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/auditmanager_framework aws_auditmanager_framework} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAuditmanagerFrameworkConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAuditmanagerFrameworkConfig);
    get arn(): string;
    get complianceType(): string;
    get description(): string;
    private _frameworkType?;
    get frameworkType(): string;
    set frameworkType(value: string);
    get frameworkTypeInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tags;
    get tags(): cdktf.StringMap;
    private _controlSets;
    get controlSets(): DataAwsAuditmanagerFrameworkControlSetsList;
    putControlSets(value: DataAwsAuditmanagerFrameworkControlSets[] | cdktf.IResolvable): void;
    resetControlSets(): void;
    get controlSetsInput(): cdktf.IResolvable | DataAwsAuditmanagerFrameworkControlSets[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
