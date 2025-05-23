/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderContainerRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsImagebuilderContainerRecipeComponentParameter {
}
export declare function dataAwsImagebuilderContainerRecipeComponentParameterToTerraform(struct?: DataAwsImagebuilderContainerRecipeComponentParameter): any;
export declare function dataAwsImagebuilderContainerRecipeComponentParameterToHclTerraform(struct?: DataAwsImagebuilderContainerRecipeComponentParameter): any;
export declare class DataAwsImagebuilderContainerRecipeComponentParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderContainerRecipeComponentParameter | undefined;
    set internalValue(value: DataAwsImagebuilderContainerRecipeComponentParameter | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsImagebuilderContainerRecipeComponentParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderContainerRecipeComponentParameterOutputReference;
}
export interface DataAwsImagebuilderContainerRecipeComponent {
}
export declare function dataAwsImagebuilderContainerRecipeComponentToTerraform(struct?: DataAwsImagebuilderContainerRecipeComponent): any;
export declare function dataAwsImagebuilderContainerRecipeComponentToHclTerraform(struct?: DataAwsImagebuilderContainerRecipeComponent): any;
export declare class DataAwsImagebuilderContainerRecipeComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderContainerRecipeComponent | undefined;
    set internalValue(value: DataAwsImagebuilderContainerRecipeComponent | undefined);
    get componentArn(): string;
    private _parameter;
    get parameter(): DataAwsImagebuilderContainerRecipeComponentParameterList;
}
export declare class DataAwsImagebuilderContainerRecipeComponentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderContainerRecipeComponentOutputReference;
}
export interface DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs {
}
export declare function dataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsToTerraform(struct?: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs): any;
export declare function dataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsToHclTerraform(struct?: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs): any;
export declare class DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs | undefined;
    set internalValue(value: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs | undefined);
    get deleteOnTermination(): cdktf.IResolvable;
    get encrypted(): cdktf.IResolvable;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference;
}
export interface DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping {
}
export declare function dataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingToTerraform(struct?: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping): any;
export declare function dataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingToHclTerraform(struct?: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping): any;
export declare class DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping | undefined;
    set internalValue(value: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping | undefined);
    get deviceName(): string;
    private _ebs;
    get ebs(): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference;
}
export interface DataAwsImagebuilderContainerRecipeInstanceConfiguration {
}
export declare function dataAwsImagebuilderContainerRecipeInstanceConfigurationToTerraform(struct?: DataAwsImagebuilderContainerRecipeInstanceConfiguration): any;
export declare function dataAwsImagebuilderContainerRecipeInstanceConfigurationToHclTerraform(struct?: DataAwsImagebuilderContainerRecipeInstanceConfiguration): any;
export declare class DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderContainerRecipeInstanceConfiguration | undefined;
    set internalValue(value: DataAwsImagebuilderContainerRecipeInstanceConfiguration | undefined);
    private _blockDeviceMapping;
    get blockDeviceMapping(): DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList;
    get image(): string;
}
export declare class DataAwsImagebuilderContainerRecipeInstanceConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference;
}
export interface DataAwsImagebuilderContainerRecipeTargetRepository {
}
export declare function dataAwsImagebuilderContainerRecipeTargetRepositoryToTerraform(struct?: DataAwsImagebuilderContainerRecipeTargetRepository): any;
export declare function dataAwsImagebuilderContainerRecipeTargetRepositoryToHclTerraform(struct?: DataAwsImagebuilderContainerRecipeTargetRepository): any;
export declare class DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderContainerRecipeTargetRepository | undefined;
    set internalValue(value: DataAwsImagebuilderContainerRecipeTargetRepository | undefined);
    get repositoryName(): string;
    get service(): string;
}
export declare class DataAwsImagebuilderContainerRecipeTargetRepositoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_container_recipe aws_imagebuilder_container_recipe}
*/
export declare class DataAwsImagebuilderContainerRecipe extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_container_recipe";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderContainerRecipe resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderContainerRecipe to import
    * @param importFromId The id of the existing DataAwsImagebuilderContainerRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_container_recipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderContainerRecipe to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_container_recipe aws_imagebuilder_container_recipe} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderContainerRecipeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderContainerRecipeConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _component;
    get component(): DataAwsImagebuilderContainerRecipeComponentList;
    get containerType(): string;
    get dateCreated(): string;
    get description(): string;
    get dockerfileTemplateData(): string;
    get encrypted(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceConfiguration;
    get instanceConfiguration(): DataAwsImagebuilderContainerRecipeInstanceConfigurationList;
    get kmsKeyId(): string;
    get name(): string;
    get owner(): string;
    get parentImage(): string;
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
    private _targetRepository;
    get targetRepository(): DataAwsImagebuilderContainerRecipeTargetRepositoryList;
    get version(): string;
    get workingDirectory(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
