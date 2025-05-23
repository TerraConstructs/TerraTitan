/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_pipeline#arn DataAwsImagebuilderImagePipeline#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_pipeline#id DataAwsImagebuilderImagePipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_pipeline#tags DataAwsImagebuilderImagePipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration {
}
export declare function dataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToTerraform(struct?: DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): any;
export declare function dataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): any;
export declare class DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | undefined);
    get containerTags(): string[];
    get repositoryName(): string;
}
export declare class DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference;
}
export interface DataAwsImagebuilderImagePipelineImageScanningConfiguration {
}
export declare function dataAwsImagebuilderImagePipelineImageScanningConfigurationToTerraform(struct?: DataAwsImagebuilderImagePipelineImageScanningConfiguration): any;
export declare function dataAwsImagebuilderImagePipelineImageScanningConfigurationToHclTerraform(struct?: DataAwsImagebuilderImagePipelineImageScanningConfiguration): any;
export declare class DataAwsImagebuilderImagePipelineImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImagePipelineImageScanningConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderImagePipelineImageScanningConfiguration | undefined);
    private _ecrConfiguration;
    get ecrConfiguration(): DataAwsImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationList;
    get imageScanningEnabled(): cdktf.IResolvable;
}
export declare class DataAwsImagebuilderImagePipelineImageScanningConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImagePipelineImageScanningConfigurationOutputReference;
}
export interface DataAwsImagebuilderImagePipelineImageTestsConfiguration {
}
export declare function dataAwsImagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: DataAwsImagebuilderImagePipelineImageTestsConfiguration): any;
export declare function dataAwsImagebuilderImagePipelineImageTestsConfigurationToHclTerraform(struct?: DataAwsImagebuilderImagePipelineImageTestsConfiguration): any;
export declare class DataAwsImagebuilderImagePipelineImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImagePipelineImageTestsConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderImagePipelineImageTestsConfiguration | undefined);
    get imageTestsEnabled(): cdktf.IResolvable;
    get timeoutMinutes(): number;
}
export declare class DataAwsImagebuilderImagePipelineImageTestsConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImagePipelineImageTestsConfigurationOutputReference;
}
export interface DataAwsImagebuilderImagePipelineSchedule {
}
export declare function dataAwsImagebuilderImagePipelineScheduleToTerraform(struct?: DataAwsImagebuilderImagePipelineSchedule): any;
export declare function dataAwsImagebuilderImagePipelineScheduleToHclTerraform(struct?: DataAwsImagebuilderImagePipelineSchedule): any;
export declare class DataAwsImagebuilderImagePipelineScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImagePipelineSchedule | undefined;
    set internalValue(value: DataAwsImagebuilderImagePipelineSchedule | undefined);
    get pipelineExecutionStartCondition(): string;
    get scheduleExpression(): string;
}
export declare class DataAwsImagebuilderImagePipelineScheduleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImagePipelineScheduleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline}
*/
export declare class DataAwsImagebuilderImagePipeline extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_image_pipeline";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderImagePipeline to import
    * @param importFromId The id of the existing DataAwsImagebuilderImagePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderImagePipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImagePipelineConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImagePipelineConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get containerRecipeArn(): string;
    get dateCreated(): string;
    get dateLastRun(): string;
    get dateNextRun(): string;
    get dateUpdated(): string;
    get description(): string;
    get distributionConfigurationArn(): string;
    get enhancedImageMetadataEnabled(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageRecipeArn(): string;
    private _imageScanningConfiguration;
    get imageScanningConfiguration(): DataAwsImagebuilderImagePipelineImageScanningConfigurationList;
    private _imageTestsConfiguration;
    get imageTestsConfiguration(): DataAwsImagebuilderImagePipelineImageTestsConfigurationList;
    get infrastructureConfigurationArn(): string;
    get name(): string;
    get platform(): string;
    private _schedule;
    get schedule(): DataAwsImagebuilderImagePipelineScheduleList;
    get status(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
