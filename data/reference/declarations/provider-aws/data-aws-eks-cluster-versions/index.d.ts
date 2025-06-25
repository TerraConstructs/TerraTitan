/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEksClusterVersionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions#cluster_type DataAwsEksClusterVersions#cluster_type}
    */
    readonly clusterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions#cluster_versions_only DataAwsEksClusterVersions#cluster_versions_only}
    */
    readonly clusterVersionsOnly?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions#default_only DataAwsEksClusterVersions#default_only}
    */
    readonly defaultOnly?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions#include_all DataAwsEksClusterVersions#include_all}
    */
    readonly includeAll?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions#version_status DataAwsEksClusterVersions#version_status}
    */
    readonly versionStatus?: string;
}
export interface DataAwsEksClusterVersionsClusterVersions {
}
export declare function dataAwsEksClusterVersionsClusterVersionsToTerraform(struct?: DataAwsEksClusterVersionsClusterVersions): any;
export declare function dataAwsEksClusterVersionsClusterVersionsToHclTerraform(struct?: DataAwsEksClusterVersionsClusterVersions): any;
export declare class DataAwsEksClusterVersionsClusterVersionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEksClusterVersionsClusterVersions | undefined;
    set internalValue(value: DataAwsEksClusterVersionsClusterVersions | undefined);
    get clusterType(): string;
    get clusterVersion(): string;
    get defaultPlatformVersion(): string;
    get defaultVersion(): cdktf.IResolvable;
    get endOfExtendedSupportDate(): string;
    get endOfStandardSupportDate(): string;
    get kubernetesPatchVersion(): string;
    get releaseDate(): string;
    get versionStatus(): string;
}
export declare class DataAwsEksClusterVersionsClusterVersionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEksClusterVersionsClusterVersionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions}
*/
export declare class DataAwsEksClusterVersions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_eks_cluster_versions";
    /**
    * Generates CDKTF code for importing a DataAwsEksClusterVersions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEksClusterVersions to import
    * @param importFromId The id of the existing DataAwsEksClusterVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEksClusterVersions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/eks_cluster_versions aws_eks_cluster_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterVersionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEksClusterVersionsConfig);
    private _clusterType?;
    get clusterType(): string;
    set clusterType(value: string);
    resetClusterType(): void;
    get clusterTypeInput(): string | undefined;
    private _clusterVersions;
    get clusterVersions(): DataAwsEksClusterVersionsClusterVersionsList;
    private _clusterVersionsOnly?;
    get clusterVersionsOnly(): string[];
    set clusterVersionsOnly(value: string[]);
    resetClusterVersionsOnly(): void;
    get clusterVersionsOnlyInput(): string[] | undefined;
    private _defaultOnly?;
    get defaultOnly(): boolean | cdktf.IResolvable;
    set defaultOnly(value: boolean | cdktf.IResolvable);
    resetDefaultOnly(): void;
    get defaultOnlyInput(): boolean | cdktf.IResolvable | undefined;
    private _includeAll?;
    get includeAll(): boolean | cdktf.IResolvable;
    set includeAll(value: boolean | cdktf.IResolvable);
    resetIncludeAll(): void;
    get includeAllInput(): boolean | cdktf.IResolvable | undefined;
    private _versionStatus?;
    get versionStatus(): string;
    set versionStatus(value: string);
    resetVersionStatus(): void;
    get versionStatusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
