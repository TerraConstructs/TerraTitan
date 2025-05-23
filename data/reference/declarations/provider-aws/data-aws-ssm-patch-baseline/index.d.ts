/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline#default_baseline DataAwsSsmPatchBaseline#default_baseline}
    */
    readonly defaultBaseline?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline#id DataAwsSsmPatchBaseline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline#name_prefix DataAwsSsmPatchBaseline#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline#operating_system DataAwsSsmPatchBaseline#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline#owner DataAwsSsmPatchBaseline#owner}
    */
    readonly owner: string;
}
export interface DataAwsSsmPatchBaselineApprovalRulePatchFilter {
}
export declare function dataAwsSsmPatchBaselineApprovalRulePatchFilterToTerraform(struct?: DataAwsSsmPatchBaselineApprovalRulePatchFilter): any;
export declare function dataAwsSsmPatchBaselineApprovalRulePatchFilterToHclTerraform(struct?: DataAwsSsmPatchBaselineApprovalRulePatchFilter): any;
export declare class DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmPatchBaselineApprovalRulePatchFilter | undefined;
    set internalValue(value: DataAwsSsmPatchBaselineApprovalRulePatchFilter | undefined);
    get key(): string;
    get values(): string[];
}
export declare class DataAwsSsmPatchBaselineApprovalRulePatchFilterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmPatchBaselineApprovalRulePatchFilterOutputReference;
}
export interface DataAwsSsmPatchBaselineApprovalRule {
}
export declare function dataAwsSsmPatchBaselineApprovalRuleToTerraform(struct?: DataAwsSsmPatchBaselineApprovalRule): any;
export declare function dataAwsSsmPatchBaselineApprovalRuleToHclTerraform(struct?: DataAwsSsmPatchBaselineApprovalRule): any;
export declare class DataAwsSsmPatchBaselineApprovalRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmPatchBaselineApprovalRule | undefined;
    set internalValue(value: DataAwsSsmPatchBaselineApprovalRule | undefined);
    get approveAfterDays(): number;
    get approveUntilDate(): string;
    get complianceLevel(): string;
    get enableNonSecurity(): cdktf.IResolvable;
    private _patchFilter;
    get patchFilter(): DataAwsSsmPatchBaselineApprovalRulePatchFilterList;
}
export declare class DataAwsSsmPatchBaselineApprovalRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmPatchBaselineApprovalRuleOutputReference;
}
export interface DataAwsSsmPatchBaselineGlobalFilter {
}
export declare function dataAwsSsmPatchBaselineGlobalFilterToTerraform(struct?: DataAwsSsmPatchBaselineGlobalFilter): any;
export declare function dataAwsSsmPatchBaselineGlobalFilterToHclTerraform(struct?: DataAwsSsmPatchBaselineGlobalFilter): any;
export declare class DataAwsSsmPatchBaselineGlobalFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmPatchBaselineGlobalFilter | undefined;
    set internalValue(value: DataAwsSsmPatchBaselineGlobalFilter | undefined);
    get key(): string;
    get values(): string[];
}
export declare class DataAwsSsmPatchBaselineGlobalFilterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmPatchBaselineGlobalFilterOutputReference;
}
export interface DataAwsSsmPatchBaselineSource {
}
export declare function dataAwsSsmPatchBaselineSourceToTerraform(struct?: DataAwsSsmPatchBaselineSource): any;
export declare function dataAwsSsmPatchBaselineSourceToHclTerraform(struct?: DataAwsSsmPatchBaselineSource): any;
export declare class DataAwsSsmPatchBaselineSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmPatchBaselineSource | undefined;
    set internalValue(value: DataAwsSsmPatchBaselineSource | undefined);
    get configuration(): string;
    get name(): string;
    get products(): string[];
}
export declare class DataAwsSsmPatchBaselineSourceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSsmPatchBaselineSourceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline aws_ssm_patch_baseline}
*/
export declare class DataAwsSsmPatchBaseline extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssm_patch_baseline";
    /**
    * Generates CDKTF code for importing a DataAwsSsmPatchBaseline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmPatchBaseline to import
    * @param importFromId The id of the existing DataAwsSsmPatchBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmPatchBaseline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssm_patch_baseline aws_ssm_patch_baseline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmPatchBaselineConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmPatchBaselineConfig);
    private _approvalRule;
    get approvalRule(): DataAwsSsmPatchBaselineApprovalRuleList;
    get approvedPatches(): string[];
    get approvedPatchesComplianceLevel(): string;
    get approvedPatchesEnableNonSecurity(): cdktf.IResolvable;
    private _defaultBaseline?;
    get defaultBaseline(): boolean | cdktf.IResolvable;
    set defaultBaseline(value: boolean | cdktf.IResolvable);
    resetDefaultBaseline(): void;
    get defaultBaselineInput(): boolean | cdktf.IResolvable | undefined;
    get description(): string;
    private _globalFilter;
    get globalFilter(): DataAwsSsmPatchBaselineGlobalFilterList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get json(): string;
    get name(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    resetOperatingSystem(): void;
    get operatingSystemInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
    get rejectedPatches(): string[];
    get rejectedPatchesAction(): string;
    private _source;
    get source(): DataAwsSsmPatchBaselineSourceList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
