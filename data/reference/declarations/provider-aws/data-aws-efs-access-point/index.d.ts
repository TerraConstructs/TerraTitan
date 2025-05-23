/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEfsAccessPointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_access_point#access_point_id DataAwsEfsAccessPoint#access_point_id}
    */
    readonly accessPointId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_access_point#id DataAwsEfsAccessPoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_access_point#tags DataAwsEfsAccessPoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsEfsAccessPointPosixUser {
}
export declare function dataAwsEfsAccessPointPosixUserToTerraform(struct?: DataAwsEfsAccessPointPosixUser): any;
export declare function dataAwsEfsAccessPointPosixUserToHclTerraform(struct?: DataAwsEfsAccessPointPosixUser): any;
export declare class DataAwsEfsAccessPointPosixUserOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEfsAccessPointPosixUser | undefined;
    set internalValue(value: DataAwsEfsAccessPointPosixUser | undefined);
    get gid(): number;
    get secondaryGids(): number[];
    get uid(): number;
}
export declare class DataAwsEfsAccessPointPosixUserList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEfsAccessPointPosixUserOutputReference;
}
export interface DataAwsEfsAccessPointRootDirectoryCreationInfo {
}
export declare function dataAwsEfsAccessPointRootDirectoryCreationInfoToTerraform(struct?: DataAwsEfsAccessPointRootDirectoryCreationInfo): any;
export declare function dataAwsEfsAccessPointRootDirectoryCreationInfoToHclTerraform(struct?: DataAwsEfsAccessPointRootDirectoryCreationInfo): any;
export declare class DataAwsEfsAccessPointRootDirectoryCreationInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEfsAccessPointRootDirectoryCreationInfo | undefined;
    set internalValue(value: DataAwsEfsAccessPointRootDirectoryCreationInfo | undefined);
    get ownerGid(): number;
    get ownerUid(): number;
    get permissions(): string;
}
export declare class DataAwsEfsAccessPointRootDirectoryCreationInfoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEfsAccessPointRootDirectoryCreationInfoOutputReference;
}
export interface DataAwsEfsAccessPointRootDirectory {
}
export declare function dataAwsEfsAccessPointRootDirectoryToTerraform(struct?: DataAwsEfsAccessPointRootDirectory): any;
export declare function dataAwsEfsAccessPointRootDirectoryToHclTerraform(struct?: DataAwsEfsAccessPointRootDirectory): any;
export declare class DataAwsEfsAccessPointRootDirectoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEfsAccessPointRootDirectory | undefined;
    set internalValue(value: DataAwsEfsAccessPointRootDirectory | undefined);
    private _creationInfo;
    get creationInfo(): DataAwsEfsAccessPointRootDirectoryCreationInfoList;
    get path(): string;
}
export declare class DataAwsEfsAccessPointRootDirectoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEfsAccessPointRootDirectoryOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_access_point aws_efs_access_point}
*/
export declare class DataAwsEfsAccessPoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_efs_access_point";
    /**
    * Generates CDKTF code for importing a DataAwsEfsAccessPoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEfsAccessPoint to import
    * @param importFromId The id of the existing DataAwsEfsAccessPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_access_point#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEfsAccessPoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/efs_access_point aws_efs_access_point} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEfsAccessPointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEfsAccessPointConfig);
    private _accessPointId?;
    get accessPointId(): string;
    set accessPointId(value: string);
    get accessPointIdInput(): string | undefined;
    get arn(): string;
    get fileSystemArn(): string;
    get fileSystemId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerId(): string;
    private _posixUser;
    get posixUser(): DataAwsEfsAccessPointPosixUserList;
    private _rootDirectory;
    get rootDirectory(): DataAwsEfsAccessPointRootDirectoryList;
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
