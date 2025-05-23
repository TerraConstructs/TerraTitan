/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_detector#id DataAwsGuarddutyDetector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsGuarddutyDetectorFeaturesAdditionalConfiguration {
}
export declare function dataAwsGuarddutyDetectorFeaturesAdditionalConfigurationToTerraform(struct?: DataAwsGuarddutyDetectorFeaturesAdditionalConfiguration): any;
export declare function dataAwsGuarddutyDetectorFeaturesAdditionalConfigurationToHclTerraform(struct?: DataAwsGuarddutyDetectorFeaturesAdditionalConfiguration): any;
export declare class DataAwsGuarddutyDetectorFeaturesAdditionalConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGuarddutyDetectorFeaturesAdditionalConfiguration | undefined;
    set internalValue(value: DataAwsGuarddutyDetectorFeaturesAdditionalConfiguration | undefined);
    get name(): string;
    get status(): string;
}
export declare class DataAwsGuarddutyDetectorFeaturesAdditionalConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsGuarddutyDetectorFeaturesAdditionalConfigurationOutputReference;
}
export interface DataAwsGuarddutyDetectorFeatures {
}
export declare function dataAwsGuarddutyDetectorFeaturesToTerraform(struct?: DataAwsGuarddutyDetectorFeatures): any;
export declare function dataAwsGuarddutyDetectorFeaturesToHclTerraform(struct?: DataAwsGuarddutyDetectorFeatures): any;
export declare class DataAwsGuarddutyDetectorFeaturesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGuarddutyDetectorFeatures | undefined;
    set internalValue(value: DataAwsGuarddutyDetectorFeatures | undefined);
    private _additionalConfiguration;
    get additionalConfiguration(): DataAwsGuarddutyDetectorFeaturesAdditionalConfigurationList;
    get name(): string;
    get status(): string;
}
export declare class DataAwsGuarddutyDetectorFeaturesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsGuarddutyDetectorFeaturesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_detector aws_guardduty_detector}
*/
export declare class DataAwsGuarddutyDetector extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_guardduty_detector";
    /**
    * Generates CDKTF code for importing a DataAwsGuarddutyDetector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsGuarddutyDetector to import
    * @param importFromId The id of the existing DataAwsGuarddutyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsGuarddutyDetector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/guardduty_detector aws_guardduty_detector} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGuarddutyDetectorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsGuarddutyDetectorConfig);
    private _features;
    get features(): DataAwsGuarddutyDetectorFeaturesList;
    get findingPublishingFrequency(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get serviceRoleArn(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
