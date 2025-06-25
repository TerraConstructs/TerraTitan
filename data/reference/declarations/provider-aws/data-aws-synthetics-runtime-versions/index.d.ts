/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSyntheticsRuntimeVersionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * runtime_versions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_versions#runtime_versions DataAwsSyntheticsRuntimeVersions#runtime_versions}
    */
    readonly runtimeVersions?: DataAwsSyntheticsRuntimeVersionsRuntimeVersions[] | cdktf.IResolvable;
}
export interface DataAwsSyntheticsRuntimeVersionsRuntimeVersions {
}
export declare function dataAwsSyntheticsRuntimeVersionsRuntimeVersionsToTerraform(struct?: DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable): any;
export declare function dataAwsSyntheticsRuntimeVersionsRuntimeVersionsToHclTerraform(struct?: DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable): any;
export declare class DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSyntheticsRuntimeVersionsRuntimeVersions | cdktf.IResolvable | undefined);
    get deprecationDate(): string;
    get description(): string;
    get releaseDate(): string;
    get versionName(): string;
}
export declare class DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSyntheticsRuntimeVersionsRuntimeVersions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSyntheticsRuntimeVersionsRuntimeVersionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_versions aws_synthetics_runtime_versions}
*/
export declare class DataAwsSyntheticsRuntimeVersions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_synthetics_runtime_versions";
    /**
    * Generates CDKTF code for importing a DataAwsSyntheticsRuntimeVersions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSyntheticsRuntimeVersions to import
    * @param importFromId The id of the existing DataAwsSyntheticsRuntimeVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_versions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSyntheticsRuntimeVersions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/synthetics_runtime_versions aws_synthetics_runtime_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSyntheticsRuntimeVersionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSyntheticsRuntimeVersionsConfig);
    get id(): string;
    private _runtimeVersions;
    get runtimeVersions(): DataAwsSyntheticsRuntimeVersionsRuntimeVersionsList;
    putRuntimeVersions(value: DataAwsSyntheticsRuntimeVersionsRuntimeVersions[] | cdktf.IResolvable): void;
    resetRuntimeVersions(): void;
    get runtimeVersionsInput(): cdktf.IResolvable | DataAwsSyntheticsRuntimeVersionsRuntimeVersions[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
