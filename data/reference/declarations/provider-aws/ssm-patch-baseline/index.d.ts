/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmPatchBaselineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}
    */
    readonly approvedPatches?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}
    */
    readonly approvedPatchesComplianceLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}
    */
    readonly approvedPatchesEnableNonSecurity?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#id SsmPatchBaseline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}
    */
    readonly operatingSystem?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}
    */
    readonly rejectedPatches?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}
    */
    readonly rejectedPatchesAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#tags_all SsmPatchBaseline#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * approval_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#approval_rule SsmPatchBaseline#approval_rule}
    */
    readonly approvalRule?: SsmPatchBaselineApprovalRule[] | cdktf.IResolvable;
    /**
    * global_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#global_filter SsmPatchBaseline#global_filter}
    */
    readonly globalFilter?: SsmPatchBaselineGlobalFilter[] | cdktf.IResolvable;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#source SsmPatchBaseline#source}
    */
    readonly source?: SsmPatchBaselineSource[] | cdktf.IResolvable;
}
export interface SsmPatchBaselineApprovalRulePatchFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}
    */
    readonly values: string[];
}
export declare function ssmPatchBaselineApprovalRulePatchFilterToTerraform(struct?: SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable): any;
export declare function ssmPatchBaselineApprovalRulePatchFilterToHclTerraform(struct?: SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable): any;
export declare class SsmPatchBaselineApprovalRulePatchFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable | undefined;
    set internalValue(value: SsmPatchBaselineApprovalRulePatchFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmPatchBaselineApprovalRulePatchFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmPatchBaselineApprovalRulePatchFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmPatchBaselineApprovalRulePatchFilterOutputReference;
}
export interface SsmPatchBaselineApprovalRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}
    */
    readonly approveAfterDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}
    */
    readonly approveUntilDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}
    */
    readonly complianceLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}
    */
    readonly enableNonSecurity?: boolean | cdktf.IResolvable;
    /**
    * patch_filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#patch_filter SsmPatchBaseline#patch_filter}
    */
    readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilter[] | cdktf.IResolvable;
}
export declare function ssmPatchBaselineApprovalRuleToTerraform(struct?: SsmPatchBaselineApprovalRule | cdktf.IResolvable): any;
export declare function ssmPatchBaselineApprovalRuleToHclTerraform(struct?: SsmPatchBaselineApprovalRule | cdktf.IResolvable): any;
export declare class SsmPatchBaselineApprovalRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmPatchBaselineApprovalRule | cdktf.IResolvable | undefined;
    set internalValue(value: SsmPatchBaselineApprovalRule | cdktf.IResolvable | undefined);
    private _approveAfterDays?;
    get approveAfterDays(): number;
    set approveAfterDays(value: number);
    resetApproveAfterDays(): void;
    get approveAfterDaysInput(): number | undefined;
    private _approveUntilDate?;
    get approveUntilDate(): string;
    set approveUntilDate(value: string);
    resetApproveUntilDate(): void;
    get approveUntilDateInput(): string | undefined;
    private _complianceLevel?;
    get complianceLevel(): string;
    set complianceLevel(value: string);
    resetComplianceLevel(): void;
    get complianceLevelInput(): string | undefined;
    private _enableNonSecurity?;
    get enableNonSecurity(): boolean | cdktf.IResolvable;
    set enableNonSecurity(value: boolean | cdktf.IResolvable);
    resetEnableNonSecurity(): void;
    get enableNonSecurityInput(): boolean | cdktf.IResolvable | undefined;
    private _patchFilter;
    get patchFilter(): SsmPatchBaselineApprovalRulePatchFilterList;
    putPatchFilter(value: SsmPatchBaselineApprovalRulePatchFilter[] | cdktf.IResolvable): void;
    get patchFilterInput(): cdktf.IResolvable | SsmPatchBaselineApprovalRulePatchFilter[] | undefined;
}
export declare class SsmPatchBaselineApprovalRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmPatchBaselineApprovalRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmPatchBaselineApprovalRuleOutputReference;
}
export interface SsmPatchBaselineGlobalFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}
    */
    readonly values: string[];
}
export declare function ssmPatchBaselineGlobalFilterToTerraform(struct?: SsmPatchBaselineGlobalFilter | cdktf.IResolvable): any;
export declare function ssmPatchBaselineGlobalFilterToHclTerraform(struct?: SsmPatchBaselineGlobalFilter | cdktf.IResolvable): any;
export declare class SsmPatchBaselineGlobalFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmPatchBaselineGlobalFilter | cdktf.IResolvable | undefined;
    set internalValue(value: SsmPatchBaselineGlobalFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmPatchBaselineGlobalFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmPatchBaselineGlobalFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmPatchBaselineGlobalFilterOutputReference;
}
export interface SsmPatchBaselineSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}
    */
    readonly configuration: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}
    */
    readonly products: string[];
}
export declare function ssmPatchBaselineSourceToTerraform(struct?: SsmPatchBaselineSource | cdktf.IResolvable): any;
export declare function ssmPatchBaselineSourceToHclTerraform(struct?: SsmPatchBaselineSource | cdktf.IResolvable): any;
export declare class SsmPatchBaselineSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmPatchBaselineSource | cdktf.IResolvable | undefined;
    set internalValue(value: SsmPatchBaselineSource | cdktf.IResolvable | undefined);
    private _configuration?;
    get configuration(): string;
    set configuration(value: string);
    get configurationInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _products?;
    get products(): string[];
    set products(value: string[]);
    get productsInput(): string[] | undefined;
}
export declare class SsmPatchBaselineSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmPatchBaselineSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmPatchBaselineSourceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline aws_ssm_patch_baseline}
*/
export declare class SsmPatchBaseline extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_patch_baseline";
    /**
    * Generates CDKTF code for importing a SsmPatchBaseline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmPatchBaseline to import
    * @param importFromId The id of the existing SsmPatchBaseline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmPatchBaseline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_patch_baseline aws_ssm_patch_baseline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmPatchBaselineConfig
    */
    constructor(scope: Construct, id: string, config: SsmPatchBaselineConfig);
    private _approvedPatches?;
    get approvedPatches(): string[];
    set approvedPatches(value: string[]);
    resetApprovedPatches(): void;
    get approvedPatchesInput(): string[] | undefined;
    private _approvedPatchesComplianceLevel?;
    get approvedPatchesComplianceLevel(): string;
    set approvedPatchesComplianceLevel(value: string);
    resetApprovedPatchesComplianceLevel(): void;
    get approvedPatchesComplianceLevelInput(): string | undefined;
    private _approvedPatchesEnableNonSecurity?;
    get approvedPatchesEnableNonSecurity(): boolean | cdktf.IResolvable;
    set approvedPatchesEnableNonSecurity(value: boolean | cdktf.IResolvable);
    resetApprovedPatchesEnableNonSecurity(): void;
    get approvedPatchesEnableNonSecurityInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get json(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _operatingSystem?;
    get operatingSystem(): string;
    set operatingSystem(value: string);
    resetOperatingSystem(): void;
    get operatingSystemInput(): string | undefined;
    private _rejectedPatches?;
    get rejectedPatches(): string[];
    set rejectedPatches(value: string[]);
    resetRejectedPatches(): void;
    get rejectedPatchesInput(): string[] | undefined;
    private _rejectedPatchesAction?;
    get rejectedPatchesAction(): string;
    set rejectedPatchesAction(value: string);
    resetRejectedPatchesAction(): void;
    get rejectedPatchesActionInput(): string | undefined;
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
    private _approvalRule;
    get approvalRule(): SsmPatchBaselineApprovalRuleList;
    putApprovalRule(value: SsmPatchBaselineApprovalRule[] | cdktf.IResolvable): void;
    resetApprovalRule(): void;
    get approvalRuleInput(): cdktf.IResolvable | SsmPatchBaselineApprovalRule[] | undefined;
    private _globalFilter;
    get globalFilter(): SsmPatchBaselineGlobalFilterList;
    putGlobalFilter(value: SsmPatchBaselineGlobalFilter[] | cdktf.IResolvable): void;
    resetGlobalFilter(): void;
    get globalFilterInput(): cdktf.IResolvable | SsmPatchBaselineGlobalFilter[] | undefined;
    private _source;
    get source(): SsmPatchBaselineSourceList;
    putSource(value: SsmPatchBaselineSource[] | cdktf.IResolvable): void;
    resetSource(): void;
    get sourceInput(): cdktf.IResolvable | SsmPatchBaselineSource[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
