/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_recipe#arn DataAwsImagebuilderImageRecipe#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_recipe#id DataAwsImagebuilderImageRecipe#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_recipe#tags DataAwsImagebuilderImageRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs {
}
export declare function dataAwsImagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct?: DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs): any;
export declare function dataAwsImagebuilderImageRecipeBlockDeviceMappingEbsToHclTerraform(struct?: DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs): any;
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs | undefined;
    set internalValue(value: DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs | undefined);
    get deleteOnTermination(): string;
    get encrypted(): string;
    get iops(): number;
    get kmsKeyId(): string;
    get snapshotId(): string;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference;
}
export interface DataAwsImagebuilderImageRecipeBlockDeviceMapping {
}
export declare function dataAwsImagebuilderImageRecipeBlockDeviceMappingToTerraform(struct?: DataAwsImagebuilderImageRecipeBlockDeviceMapping): any;
export declare function dataAwsImagebuilderImageRecipeBlockDeviceMappingToHclTerraform(struct?: DataAwsImagebuilderImageRecipeBlockDeviceMapping): any;
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageRecipeBlockDeviceMapping | undefined;
    set internalValue(value: DataAwsImagebuilderImageRecipeBlockDeviceMapping | undefined);
    get deviceName(): string;
    private _ebs;
    get ebs(): DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsImagebuilderImageRecipeBlockDeviceMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference;
}
export interface DataAwsImagebuilderImageRecipeComponentParameter {
}
export declare function dataAwsImagebuilderImageRecipeComponentParameterToTerraform(struct?: DataAwsImagebuilderImageRecipeComponentParameter): any;
export declare function dataAwsImagebuilderImageRecipeComponentParameterToHclTerraform(struct?: DataAwsImagebuilderImageRecipeComponentParameter): any;
export declare class DataAwsImagebuilderImageRecipeComponentParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageRecipeComponentParameter | undefined;
    set internalValue(value: DataAwsImagebuilderImageRecipeComponentParameter | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsImagebuilderImageRecipeComponentParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageRecipeComponentParameterOutputReference;
}
export interface DataAwsImagebuilderImageRecipeComponent {
}
export declare function dataAwsImagebuilderImageRecipeComponentToTerraform(struct?: DataAwsImagebuilderImageRecipeComponent): any;
export declare function dataAwsImagebuilderImageRecipeComponentToHclTerraform(struct?: DataAwsImagebuilderImageRecipeComponent): any;
export declare class DataAwsImagebuilderImageRecipeComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsImagebuilderImageRecipeComponent | undefined;
    set internalValue(value: DataAwsImagebuilderImageRecipeComponent | undefined);
    get componentArn(): string;
    private _parameter;
    get parameter(): DataAwsImagebuilderImageRecipeComponentParameterList;
}
export declare class DataAwsImagebuilderImageRecipeComponentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsImagebuilderImageRecipeComponentOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_recipe aws_imagebuilder_image_recipe}
*/
export declare class DataAwsImagebuilderImageRecipe extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_imagebuilder_image_recipe";
    /**
    * Generates CDKTF code for importing a DataAwsImagebuilderImageRecipe resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsImagebuilderImageRecipe to import
    * @param importFromId The id of the existing DataAwsImagebuilderImageRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsImagebuilderImageRecipe to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/imagebuilder_image_recipe aws_imagebuilder_image_recipe} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsImagebuilderImageRecipeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderImageRecipeConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _blockDeviceMapping;
    get blockDeviceMapping(): DataAwsImagebuilderImageRecipeBlockDeviceMappingList;
    private _component;
    get component(): DataAwsImagebuilderImageRecipeComponentList;
    get dateCreated(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    get userDataBase64(): string;
    get version(): string;
    get workingDirectory(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
