/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppstreamImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}
    */
    readonly type?: string;
}
export interface DataAwsAppstreamImageApplicationsIconS3Location {
}
export declare function dataAwsAppstreamImageApplicationsIconS3LocationToTerraform(struct?: DataAwsAppstreamImageApplicationsIconS3Location): any;
export declare function dataAwsAppstreamImageApplicationsIconS3LocationToHclTerraform(struct?: DataAwsAppstreamImageApplicationsIconS3Location): any;
export declare class DataAwsAppstreamImageApplicationsIconS3LocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppstreamImageApplicationsIconS3Location | undefined;
    set internalValue(value: DataAwsAppstreamImageApplicationsIconS3Location | undefined);
    get s3Bucket(): string;
    get s3Key(): string;
}
export declare class DataAwsAppstreamImageApplicationsIconS3LocationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppstreamImageApplicationsIconS3LocationOutputReference;
}
export interface DataAwsAppstreamImageApplications {
}
export declare function dataAwsAppstreamImageApplicationsToTerraform(struct?: DataAwsAppstreamImageApplications): any;
export declare function dataAwsAppstreamImageApplicationsToHclTerraform(struct?: DataAwsAppstreamImageApplications): any;
export declare class DataAwsAppstreamImageApplicationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppstreamImageApplications | undefined;
    set internalValue(value: DataAwsAppstreamImageApplications | undefined);
    get appBlockArn(): string;
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    get displayName(): string;
    get enabled(): cdktf.IResolvable;
    private _iconS3Location;
    get iconS3Location(): DataAwsAppstreamImageApplicationsIconS3LocationList;
    get iconUrl(): string;
    get instanceFamilies(): string[];
    get launchParameters(): string;
    get launchPath(): string;
    private _metadata;
    get metadata(): cdktf.StringMap;
    get name(): string;
    get platforms(): string[];
    get workingDirectory(): string;
}
export declare class DataAwsAppstreamImageApplicationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppstreamImageApplicationsOutputReference;
}
export interface DataAwsAppstreamImageImagePermissions {
}
export declare function dataAwsAppstreamImageImagePermissionsToTerraform(struct?: DataAwsAppstreamImageImagePermissions): any;
export declare function dataAwsAppstreamImageImagePermissionsToHclTerraform(struct?: DataAwsAppstreamImageImagePermissions): any;
export declare class DataAwsAppstreamImageImagePermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppstreamImageImagePermissions | undefined;
    set internalValue(value: DataAwsAppstreamImageImagePermissions | undefined);
    get allowFleet(): cdktf.IResolvable;
    get allowImageBuilder(): cdktf.IResolvable;
}
export declare class DataAwsAppstreamImageImagePermissionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppstreamImageImagePermissionsOutputReference;
}
export interface DataAwsAppstreamImageStateChangeReason {
}
export declare function dataAwsAppstreamImageStateChangeReasonToTerraform(struct?: DataAwsAppstreamImageStateChangeReason): any;
export declare function dataAwsAppstreamImageStateChangeReasonToHclTerraform(struct?: DataAwsAppstreamImageStateChangeReason): any;
export declare class DataAwsAppstreamImageStateChangeReasonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppstreamImageStateChangeReason | undefined;
    set internalValue(value: DataAwsAppstreamImageStateChangeReason | undefined);
    get code(): string;
    get message(): string;
}
export declare class DataAwsAppstreamImageStateChangeReasonList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppstreamImageStateChangeReasonOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image aws_appstream_image}
*/
export declare class DataAwsAppstreamImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appstream_image";
    /**
    * Generates CDKTF code for importing a DataAwsAppstreamImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppstreamImage to import
    * @param importFromId The id of the existing DataAwsAppstreamImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppstreamImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/appstream_image aws_appstream_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppstreamImageConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAppstreamImageConfig);
    private _applications;
    get applications(): DataAwsAppstreamImageApplicationsList;
    get appstreamAgentVersion(): string;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get baseImageArn(): string;
    get createdTime(): string;
    get description(): string;
    get displayName(): string;
    get imageBuilderName(): string;
    get imageBuilderSupported(): cdktf.IResolvable;
    private _imagePermissions;
    get imagePermissions(): DataAwsAppstreamImageImagePermissionsList;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    resetNameRegex(): void;
    get nameRegexInput(): string | undefined;
    get platform(): string;
    get publicBaseImageReleasedDate(): string;
    get state(): string;
    private _stateChangeReason;
    get stateChangeReason(): DataAwsAppstreamImageStateChangeReasonList;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
