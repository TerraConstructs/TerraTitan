/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsS3ControlMultiRegionAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3control_multi_region_access_point#account_id DataAwsS3ControlMultiRegionAccessPoint#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3control_multi_region_access_point#id DataAwsS3ControlMultiRegionAccessPoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3control_multi_region_access_point#name DataAwsS3ControlMultiRegionAccessPoint#name}
    */
    readonly name: string;
}
export interface DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock {
}
export declare function dataAwsS3ControlMultiRegionAccessPointPublicAccessBlockToTerraform(struct?: DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock): any;
export declare function dataAwsS3ControlMultiRegionAccessPointPublicAccessBlockToHclTerraform(struct?: DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock): any;
export declare class DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock | undefined;
    set internalValue(value: DataAwsS3ControlMultiRegionAccessPointPublicAccessBlock | undefined);
    get blockPublicAcls(): cdktf.IResolvable;
    get blockPublicPolicy(): cdktf.IResolvable;
    get ignorePublicAcls(): cdktf.IResolvable;
    get restrictPublicBuckets(): cdktf.IResolvable;
}
export declare class DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList extends cdktf.ComplexList {
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
    get(index: number): DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockOutputReference;
}
export interface DataAwsS3ControlMultiRegionAccessPointRegions {
}
export declare function dataAwsS3ControlMultiRegionAccessPointRegionsToTerraform(struct?: DataAwsS3ControlMultiRegionAccessPointRegions): any;
export declare function dataAwsS3ControlMultiRegionAccessPointRegionsToHclTerraform(struct?: DataAwsS3ControlMultiRegionAccessPointRegions): any;
export declare class DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsS3ControlMultiRegionAccessPointRegions | undefined;
    set internalValue(value: DataAwsS3ControlMultiRegionAccessPointRegions | undefined);
    get bucket(): string;
    get bucketAccountId(): string;
    get region(): string;
}
export declare class DataAwsS3ControlMultiRegionAccessPointRegionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsS3ControlMultiRegionAccessPointRegionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3control_multi_region_access_point aws_s3control_multi_region_access_point}
*/
export declare class DataAwsS3ControlMultiRegionAccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_s3control_multi_region_access_point";
    /**
    * Generates CDKTF code for importing a DataAwsS3ControlMultiRegionAccessPoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsS3ControlMultiRegionAccessPoint to import
    * @param importFromId The id of the existing DataAwsS3ControlMultiRegionAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3control_multi_region_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsS3ControlMultiRegionAccessPoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/s3control_multi_region_access_point aws_s3control_multi_region_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsS3ControlMultiRegionAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsS3ControlMultiRegionAccessPointConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get alias(): string;
    get arn(): string;
    get createdAt(): string;
    get domainName(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _publicAccessBlock;
    get publicAccessBlock(): DataAwsS3ControlMultiRegionAccessPointPublicAccessBlockList;
    private _regions;
    get regions(): DataAwsS3ControlMultiRegionAccessPointRegionsList;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
