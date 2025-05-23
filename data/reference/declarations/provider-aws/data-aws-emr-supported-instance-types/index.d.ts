/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEmrSupportedInstanceTypesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_supported_instance_types#release_label DataAwsEmrSupportedInstanceTypes#release_label}
    */
    readonly releaseLabel: string;
    /**
    * supported_instance_types block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_supported_instance_types#supported_instance_types DataAwsEmrSupportedInstanceTypes#supported_instance_types}
    */
    readonly supportedInstanceTypes?: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[] | cdktf.IResolvable;
}
export interface DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes {
}
export declare function dataAwsEmrSupportedInstanceTypesSupportedInstanceTypesToTerraform(struct?: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable): any;
export declare function dataAwsEmrSupportedInstanceTypesSupportedInstanceTypesToHclTerraform(struct?: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable): any;
export declare class DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes | cdktf.IResolvable | undefined);
    get architecture(): string;
    get ebsOptimizedAvailable(): cdktf.IResolvable;
    get ebsOptimizedByDefault(): cdktf.IResolvable;
    get ebsStorageOnly(): cdktf.IResolvable;
    get instanceFamilyId(): string;
    get is64BitsOnly(): cdktf.IResolvable;
    get memoryGb(): number;
    get numberOfDisks(): number;
    get storageGb(): number;
    get type(): string;
    get vcpu(): number;
}
export declare class DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_supported_instance_types aws_emr_supported_instance_types}
*/
export declare class DataAwsEmrSupportedInstanceTypes extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_emr_supported_instance_types";
    /**
    * Generates CDKTF code for importing a DataAwsEmrSupportedInstanceTypes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEmrSupportedInstanceTypes to import
    * @param importFromId The id of the existing DataAwsEmrSupportedInstanceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_supported_instance_types#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEmrSupportedInstanceTypes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/emr_supported_instance_types aws_emr_supported_instance_types} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEmrSupportedInstanceTypesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEmrSupportedInstanceTypesConfig);
    get id(): string;
    private _releaseLabel?;
    get releaseLabel(): string;
    set releaseLabel(value: string);
    get releaseLabelInput(): string | undefined;
    private _supportedInstanceTypes;
    get supportedInstanceTypes(): DataAwsEmrSupportedInstanceTypesSupportedInstanceTypesList;
    putSupportedInstanceTypes(value: DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[] | cdktf.IResolvable): void;
    resetSupportedInstanceTypes(): void;
    get supportedInstanceTypesInput(): cdktf.IResolvable | DataAwsEmrSupportedInstanceTypesSupportedInstanceTypes[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
