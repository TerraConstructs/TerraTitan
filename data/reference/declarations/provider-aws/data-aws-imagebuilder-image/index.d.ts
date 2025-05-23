/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image#arn DataAwsImagebuilderImage#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image#id DataAwsImagebuilderImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image#tags DataAwsImagebuilderImage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsImagebuilderImageImageScanningConfigurationEcrConfiguration {
}
export declare function dataAwsImagebuilderImageImageScanningConfigurationEcrConfigurationToTerraform(struct?: DataAwsImagebuilderImageImageScanningConfigurationEcrConfiguration): any;
export declare function dataAwsImagebuilderImageImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: DataAwsImagebuilderImageImageScanningConfigurationEcrConfiguration): any;
export declare class DataAwsImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined);
    get containerTags(): string[];
    get repositoryName(): string;
}
export declare class DataAwsImagebuilderImageImageScanningConfigurationEcrConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference;
}
export interface DataAwsImagebuilderImageImageScanningConfiguration {
}
export declare function dataAwsImagebuilderImageImageScanningConfigurationToTerraform(struct?: DataAwsImagebuilderImageImageScanningConfiguration): any;
export declare function dataAwsImagebuilderImageImageScanningConfigurationToHclTerraform(struct?: DataAwsImagebuilderImageImageScanningConfiguration): any;
export declare class DataAwsImagebuilderImageImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageImageScanningConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderImageImageScanningConfiguration | undefined);
    private _ecrConfiguration;
    get ecrConfiguration(): DataAwsImagebuilderImageImageScanningConfigurationEcrConfigurationList;
    get imageScanningEnabled(): cdktf.IResolvable;
}
export declare class DataAwsImagebuilderImageImageScanningConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageImageScanningConfigurationOutputReference;
}
export interface DataAwsImagebuilderImageImageTestsConfiguration {
}
export declare function dataAwsImagebuilderImageImageTestsConfigurationToTerraform(struct?: DataAwsImagebuilderImageImageTestsConfiguration): any;
export declare function dataAwsImagebuilderImageImageTestsConfigurationToHclTerraform(struct?: DataAwsImagebuilderImageImageTestsConfiguration): any;
export declare class DataAwsImagebuilderImageImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageImageTestsConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderImageImageTestsConfiguration | undefined);
    get imageTestsEnabled(): cdktf.IResolvable;
    get timeoutMinutes(): number;
}
export declare class DataAwsImagebuilderImageImageTestsConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageImageTestsConfigurationOutputReference;
}
export interface DataAwsImagebuilderImageOutputResourcesAmis {
}
export declare function dataAwsImagebuilderImageOutputResourcesAmisToTerraform(struct?: DataAwsImagebuilderImageOutputResourcesAmis): any;
export declare function dataAwsImagebuilderImageOutputResourcesAmisToHclTerraform(struct?: DataAwsImagebuilderImageOutputResourcesAmis): any;
export declare class DataAwsImagebuilderImageOutputResourcesAmisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageOutputResourcesAmis | undefined;
    set internalValue(value: DataAwsImagebuilderImageOutputResourcesAmis | undefined);
    get accountId(): string;
    get description(): string;
    get image(): string;
    get name(): string;
    get region(): string;
}
export declare class DataAwsImagebuilderImageOutputResourcesAmisList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageOutputResourcesAmisOutputReference;
}
export interface DataAwsImagebuilderImageOutputResourcesContainers {
}
export declare function dataAwsImagebuilderImageOutputResourcesContainersToTerraform(struct?: DataAwsImagebuilderImageOutputResourcesContainers): any;
export declare function dataAwsImagebuilderImageOutputResourcesContainersToHclTerraform(struct?: DataAwsImagebuilderImageOutputResourcesContainers): any;
export declare class DataAwsImagebuilderImageOutputResourcesContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageOutputResourcesContainers | undefined;
    set internalValue(value: DataAwsImagebuilderImageOutputResourcesContainers | undefined);
    get imageUris(): string[];
    get region(): string;
}
export declare class DataAwsImagebuilderImageOutputResourcesContainersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageOutputResourcesContainersOutputReference;
}
export interface DataAwsImagebuilderImageOutputResources {
}
export declare function dataAwsImagebuilderImageOutputResourcesToTerraform(struct?: DataAwsImagebuilderImageOutputResources): any;
export declare function dataAwsImagebuilderImageOutputResourcesToHclTerraform(struct?: DataAwsImagebuilderImageOutputResources): any;
export declare class DataAwsImagebuilderImageOutputResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageOutputResources | undefined;
    set internalValue(value: DataAwsImagebuilderImageOutputResources | undefined);
    private _amis;
    get amis(): DataAwsImagebuilderImageOutputResourcesAmisList;
    private _containers;
    get containers(): DataAwsImagebuilderImageOutputResourcesContainersList;
}
export declare class DataAwsImagebuilderImageOutputResourcesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageOutputResourcesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image aws_imagebuilder_image}
*/
export declare class DataAwsImagebuilderImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_image";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderImage to import
    * @param importFromId The id of the existing DataAwsImagebuilderImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image aws_imagebuilder_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get buildVersionArn(): string;
    get containerRecipeArn(): string;
    get dateCreated(): string;
    get distributionConfigurationArn(): string;
    get enhancedImageMetadataEnabled(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageRecipeArn(): string;
    private _imageScanningConfiguration;
    get imageScanningConfiguration(): DataAwsImagebuilderImageImageScanningConfigurationList;
    private _imageTestsConfiguration;
    get imageTestsConfiguration(): DataAwsImagebuilderImageImageTestsConfigurationList;
    get infrastructureConfigurationArn(): string;
    get name(): string;
    get osVersion(): string;
    private _outputResources;
    get outputResources(): DataAwsImagebuilderImageOutputResourcesList;
    get platform(): string;
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
