/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAmiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#executable_users DataAwsAmi#executable_users}
    */
    readonly executableUsers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#id DataAwsAmi#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#include_deprecated DataAwsAmi#include_deprecated}
    */
    readonly includeDeprecated?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#most_recent DataAwsAmi#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#name_regex DataAwsAmi#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#owners DataAwsAmi#owners}
    */
    readonly owners?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#tags DataAwsAmi#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#uefi_data DataAwsAmi#uefi_data}
    */
    readonly uefiData?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#filter DataAwsAmi#filter}
    */
    readonly filter?: DataAwsAmiFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#timeouts DataAwsAmi#timeouts}
    */
    readonly timeouts?: DataAwsAmiTimeouts;
}
export interface DataAwsAmiBlockDeviceMappings {
}
export declare function dataAwsAmiBlockDeviceMappingsToTerraform(struct?: DataAwsAmiBlockDeviceMappings): any;
export declare function dataAwsAmiBlockDeviceMappingsToHclTerraform(struct?: DataAwsAmiBlockDeviceMappings): any;
export declare class DataAwsAmiBlockDeviceMappingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAmiBlockDeviceMappings | undefined;
    set internalValue(value: DataAwsAmiBlockDeviceMappings | undefined);
    get deviceName(): string;
    private _ebs;
    get ebs(): cdktf.StringMap;
    get noDevice(): string;
    get virtualName(): string;
}
export declare class DataAwsAmiBlockDeviceMappingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAmiBlockDeviceMappingsOutputReference;
}
export interface DataAwsAmiProductCodes {
}
export declare function dataAwsAmiProductCodesToTerraform(struct?: DataAwsAmiProductCodes): any;
export declare function dataAwsAmiProductCodesToHclTerraform(struct?: DataAwsAmiProductCodes): any;
export declare class DataAwsAmiProductCodesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAmiProductCodes | undefined;
    set internalValue(value: DataAwsAmiProductCodes | undefined);
    get productCodeId(): string;
    get productCodeType(): string;
}
export declare class DataAwsAmiProductCodesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAmiProductCodesOutputReference;
}
export interface DataAwsAmiFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#name DataAwsAmi#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#values DataAwsAmi#values}
    */
    readonly values: string[];
}
export declare function dataAwsAmiFilterToTerraform(struct?: DataAwsAmiFilter | cdktf.IResolvable): any;
export declare function dataAwsAmiFilterToHclTerraform(struct?: DataAwsAmiFilter | cdktf.IResolvable): any;
export declare class DataAwsAmiFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAmiFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAmiFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsAmiFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAmiFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAmiFilterOutputReference;
}
export interface DataAwsAmiTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#read DataAwsAmi#read}
    */
    readonly read?: string;
}
export declare function dataAwsAmiTimeoutsToTerraform(struct?: DataAwsAmiTimeouts | cdktf.IResolvable): any;
export declare function dataAwsAmiTimeoutsToHclTerraform(struct?: DataAwsAmiTimeouts | cdktf.IResolvable): any;
export declare class DataAwsAmiTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsAmiTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAmiTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami aws_ami}
*/
export declare class DataAwsAmi extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ami";
    /**
    * Generates CDKTF code for importing a DataAwsAmi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAmi to import
    * @param importFromId The id of the existing DataAwsAmi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAmi to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami aws_ami} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAmiConfig);
    get architecture(): string;
    get arn(): string;
    private _blockDeviceMappings;
    get blockDeviceMappings(): DataAwsAmiBlockDeviceMappingsList;
    get bootMode(): string;
    get creationDate(): string;
    get deprecationTime(): string;
    get description(): string;
    get enaSupport(): cdktf.IResolvable;
    private _executableUsers?;
    get executableUsers(): string[];
    set executableUsers(value: string[]);
    resetExecutableUsers(): void;
    get executableUsersInput(): string[] | undefined;
    get hypervisor(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageId(): string;
    get imageLocation(): string;
    get imageOwnerAlias(): string;
    get imageType(): string;
    get imdsSupport(): string;
    private _includeDeprecated?;
    get includeDeprecated(): boolean | cdktf.IResolvable;
    set includeDeprecated(value: boolean | cdktf.IResolvable);
    resetIncludeDeprecated(): void;
    get includeDeprecatedInput(): boolean | cdktf.IResolvable | undefined;
    get kernelId(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    get name(): string;
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    resetNameRegex(): void;
    get nameRegexInput(): string | undefined;
    get ownerId(): string;
    private _owners?;
    get owners(): string[];
    set owners(value: string[]);
    resetOwners(): void;
    get ownersInput(): string[] | undefined;
    get platform(): string;
    get platformDetails(): string;
    private _productCodes;
    get productCodes(): DataAwsAmiProductCodesList;
    get public(): cdktf.IResolvable;
    get ramdiskId(): string;
    get rootDeviceName(): string;
    get rootDeviceType(): string;
    get rootSnapshotId(): string;
    get sriovNetSupport(): string;
    get state(): string;
    private _stateReason;
    get stateReason(): cdktf.StringMap;
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
    get tpmSupport(): string;
    private _uefiData?;
    get uefiData(): string;
    set uefiData(value: string);
    resetUefiData(): void;
    get uefiDataInput(): string | undefined;
    get usageOperation(): string;
    get virtualizationType(): string;
    private _filter;
    get filter(): DataAwsAmiFilterList;
    putFilter(value: DataAwsAmiFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsAmiFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsAmiTimeoutsOutputReference;
    putTimeouts(value: DataAwsAmiTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsAmiTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
