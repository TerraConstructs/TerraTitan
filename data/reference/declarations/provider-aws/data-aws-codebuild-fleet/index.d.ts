/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodebuildFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/codebuild_fleet#name DataAwsCodebuildFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/codebuild_fleet#tags DataAwsCodebuildFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsCodebuildFleetComputeConfiguration {
}
export declare function dataAwsCodebuildFleetComputeConfigurationToTerraform(struct?: DataAwsCodebuildFleetComputeConfiguration): any;
export declare function dataAwsCodebuildFleetComputeConfigurationToHclTerraform(struct?: DataAwsCodebuildFleetComputeConfiguration): any;
export declare class DataAwsCodebuildFleetComputeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodebuildFleetComputeConfiguration | undefined;
    set internalValue(value: DataAwsCodebuildFleetComputeConfiguration | undefined);
    get disk(): number;
    get machineType(): string;
    get memory(): number;
    get vcpu(): number;
}
export declare class DataAwsCodebuildFleetComputeConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCodebuildFleetComputeConfigurationOutputReference;
}
export interface DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs {
}
export declare function dataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsToTerraform(struct?: DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs): any;
export declare function dataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsToHclTerraform(struct?: DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs): any;
export declare class DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | undefined;
    set internalValue(value: DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | undefined);
    get metricType(): string;
    get targetValue(): number;
}
export declare class DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference;
}
export interface DataAwsCodebuildFleetScalingConfiguration {
}
export declare function dataAwsCodebuildFleetScalingConfigurationToTerraform(struct?: DataAwsCodebuildFleetScalingConfiguration): any;
export declare function dataAwsCodebuildFleetScalingConfigurationToHclTerraform(struct?: DataAwsCodebuildFleetScalingConfiguration): any;
export declare class DataAwsCodebuildFleetScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodebuildFleetScalingConfiguration | undefined;
    set internalValue(value: DataAwsCodebuildFleetScalingConfiguration | undefined);
    get desiredCapacity(): number;
    get maxCapacity(): number;
    get scalingType(): string;
    private _targetTrackingScalingConfigs;
    get targetTrackingScalingConfigs(): DataAwsCodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList;
}
export declare class DataAwsCodebuildFleetScalingConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCodebuildFleetScalingConfigurationOutputReference;
}
export interface DataAwsCodebuildFleetStatus {
}
export declare function dataAwsCodebuildFleetStatusToTerraform(struct?: DataAwsCodebuildFleetStatus): any;
export declare function dataAwsCodebuildFleetStatusToHclTerraform(struct?: DataAwsCodebuildFleetStatus): any;
export declare class DataAwsCodebuildFleetStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodebuildFleetStatus | undefined;
    set internalValue(value: DataAwsCodebuildFleetStatus | undefined);
    get context(): string;
    get message(): string;
    get statusCode(): string;
}
export declare class DataAwsCodebuildFleetStatusList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCodebuildFleetStatusOutputReference;
}
export interface DataAwsCodebuildFleetVpcConfig {
}
export declare function dataAwsCodebuildFleetVpcConfigToTerraform(struct?: DataAwsCodebuildFleetVpcConfig): any;
export declare function dataAwsCodebuildFleetVpcConfigToHclTerraform(struct?: DataAwsCodebuildFleetVpcConfig): any;
export declare class DataAwsCodebuildFleetVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCodebuildFleetVpcConfig | undefined;
    set internalValue(value: DataAwsCodebuildFleetVpcConfig | undefined);
    get securityGroupIds(): string[];
    get subnets(): string[];
    get vpcId(): string;
}
export declare class DataAwsCodebuildFleetVpcConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCodebuildFleetVpcConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/codebuild_fleet aws_codebuild_fleet}
*/
export declare class DataAwsCodebuildFleet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_codebuild_fleet";
    /**
    * Generates CDKTF code for importing a DataAwsCodebuildFleet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCodebuildFleet to import
    * @param importFromId The id of the existing DataAwsCodebuildFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/codebuild_fleet#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCodebuildFleet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/codebuild_fleet aws_codebuild_fleet} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodebuildFleetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodebuildFleetConfig);
    get arn(): string;
    get baseCapacity(): number;
    private _computeConfiguration;
    get computeConfiguration(): DataAwsCodebuildFleetComputeConfigurationList;
    get computeType(): string;
    get created(): string;
    get environmentType(): string;
    get fleetServiceRole(): string;
    get id(): string;
    get imageId(): string;
    get lastModified(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get overflowBehavior(): string;
    private _scalingConfiguration;
    get scalingConfiguration(): DataAwsCodebuildFleetScalingConfigurationList;
    private _status;
    get status(): DataAwsCodebuildFleetStatusList;
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
    private _vpcConfig;
    get vpcConfig(): DataAwsCodebuildFleetVpcConfigList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
