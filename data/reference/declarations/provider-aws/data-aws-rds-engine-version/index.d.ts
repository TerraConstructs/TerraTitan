/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRdsEngineVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#default_only DataAwsRdsEngineVersion#default_only}
    */
    readonly defaultOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#engine DataAwsRdsEngineVersion#engine}
    */
    readonly engine: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#has_major_target DataAwsRdsEngineVersion#has_major_target}
    */
    readonly hasMajorTarget?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#has_minor_target DataAwsRdsEngineVersion#has_minor_target}
    */
    readonly hasMinorTarget?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#id DataAwsRdsEngineVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#include_all DataAwsRdsEngineVersion#include_all}
    */
    readonly includeAll?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#latest DataAwsRdsEngineVersion#latest}
    */
    readonly latest?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#parameter_group_family DataAwsRdsEngineVersion#parameter_group_family}
    */
    readonly parameterGroupFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#preferred_major_targets DataAwsRdsEngineVersion#preferred_major_targets}
    */
    readonly preferredMajorTargets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#preferred_upgrade_targets DataAwsRdsEngineVersion#preferred_upgrade_targets}
    */
    readonly preferredUpgradeTargets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#preferred_versions DataAwsRdsEngineVersion#preferred_versions}
    */
    readonly preferredVersions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#version DataAwsRdsEngineVersion#version}
    */
    readonly version?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#filter DataAwsRdsEngineVersion#filter}
    */
    readonly filter?: DataAwsRdsEngineVersionFilter[] | cdktf.IResolvable;
}
export interface DataAwsRdsEngineVersionFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#name DataAwsRdsEngineVersion#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#values DataAwsRdsEngineVersion#values}
    */
    readonly values: string[];
}
export declare function dataAwsRdsEngineVersionFilterToTerraform(struct?: DataAwsRdsEngineVersionFilter | cdktf.IResolvable): any;
export declare function dataAwsRdsEngineVersionFilterToHclTerraform(struct?: DataAwsRdsEngineVersionFilter | cdktf.IResolvable): any;
export declare class DataAwsRdsEngineVersionFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRdsEngineVersionFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRdsEngineVersionFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsRdsEngineVersionFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRdsEngineVersionFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRdsEngineVersionFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version aws_rds_engine_version}
*/
export declare class DataAwsRdsEngineVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_rds_engine_version";
    /**
    * Generates CDKTF code for importing a DataAwsRdsEngineVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRdsEngineVersion to import
    * @param importFromId The id of the existing DataAwsRdsEngineVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRdsEngineVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/rds_engine_version aws_rds_engine_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsEngineVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRdsEngineVersionConfig);
    get defaultCharacterSet(): string;
    private _defaultOnly?;
    get defaultOnly(): boolean | cdktf.IResolvable;
    set defaultOnly(value: boolean | cdktf.IResolvable);
    resetDefaultOnly(): void;
    get defaultOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    get engineInput(): string | undefined;
    get engineDescription(): string;
    get exportableLogTypes(): string[];
    private _hasMajorTarget?;
    get hasMajorTarget(): boolean | cdktf.IResolvable;
    set hasMajorTarget(value: boolean | cdktf.IResolvable);
    resetHasMajorTarget(): void;
    get hasMajorTargetInput(): boolean | cdktf.IResolvable | undefined;
    private _hasMinorTarget?;
    get hasMinorTarget(): boolean | cdktf.IResolvable;
    set hasMinorTarget(value: boolean | cdktf.IResolvable);
    resetHasMinorTarget(): void;
    get hasMinorTargetInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _includeAll?;
    get includeAll(): boolean | cdktf.IResolvable;
    set includeAll(value: boolean | cdktf.IResolvable);
    resetIncludeAll(): void;
    get includeAllInput(): boolean | cdktf.IResolvable | undefined;
    private _latest?;
    get latest(): boolean | cdktf.IResolvable;
    set latest(value: boolean | cdktf.IResolvable);
    resetLatest(): void;
    get latestInput(): boolean | cdktf.IResolvable | undefined;
    private _parameterGroupFamily?;
    get parameterGroupFamily(): string;
    set parameterGroupFamily(value: string);
    resetParameterGroupFamily(): void;
    get parameterGroupFamilyInput(): string | undefined;
    private _preferredMajorTargets?;
    get preferredMajorTargets(): string[];
    set preferredMajorTargets(value: string[]);
    resetPreferredMajorTargets(): void;
    get preferredMajorTargetsInput(): string[] | undefined;
    private _preferredUpgradeTargets?;
    get preferredUpgradeTargets(): string[];
    set preferredUpgradeTargets(value: string[]);
    resetPreferredUpgradeTargets(): void;
    get preferredUpgradeTargetsInput(): string[] | undefined;
    private _preferredVersions?;
    get preferredVersions(): string[];
    set preferredVersions(value: string[]);
    resetPreferredVersions(): void;
    get preferredVersionsInput(): string[] | undefined;
    get status(): string;
    get supportedCharacterSets(): string[];
    get supportedFeatureNames(): string[];
    get supportedModes(): string[];
    get supportedTimezones(): string[];
    get supportsCertificateRotationWithoutRestart(): cdktf.IResolvable;
    get supportsGlobalDatabases(): cdktf.IResolvable;
    get supportsIntegrations(): cdktf.IResolvable;
    get supportsLimitlessDatabase(): cdktf.IResolvable;
    get supportsLocalWriteForwarding(): cdktf.IResolvable;
    get supportsLogExportsToCloudwatch(): cdktf.IResolvable;
    get supportsParallelQuery(): cdktf.IResolvable;
    get supportsReadReplica(): cdktf.IResolvable;
    get validMajorTargets(): string[];
    get validMinorTargets(): string[];
    get validUpgradeTargets(): string[];
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    get versionActual(): string;
    get versionDescription(): string;
    private _filter;
    get filter(): DataAwsRdsEngineVersionFilterList;
    putFilter(value: DataAwsRdsEngineVersionFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsRdsEngineVersionFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
