/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDirectoryServiceDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/directory_service_directory#directory_id DataAwsDirectoryServiceDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/directory_service_directory#id DataAwsDirectoryServiceDirectory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/directory_service_directory#tags DataAwsDirectoryServiceDirectory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsDirectoryServiceDirectoryConnectSettings {
}
export declare function dataAwsDirectoryServiceDirectoryConnectSettingsToTerraform(struct?: DataAwsDirectoryServiceDirectoryConnectSettings): any;
export declare function dataAwsDirectoryServiceDirectoryConnectSettingsToHclTerraform(struct?: DataAwsDirectoryServiceDirectoryConnectSettings): any;
export declare class DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDirectoryServiceDirectoryConnectSettings | undefined;
    set internalValue(value: DataAwsDirectoryServiceDirectoryConnectSettings | undefined);
    get availabilityZones(): string[];
    get connectIps(): string[];
    get customerDnsIps(): string[];
    get customerUsername(): string;
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare class DataAwsDirectoryServiceDirectoryConnectSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDirectoryServiceDirectoryConnectSettingsOutputReference;
}
export interface DataAwsDirectoryServiceDirectoryRadiusSettings {
}
export declare function dataAwsDirectoryServiceDirectoryRadiusSettingsToTerraform(struct?: DataAwsDirectoryServiceDirectoryRadiusSettings): any;
export declare function dataAwsDirectoryServiceDirectoryRadiusSettingsToHclTerraform(struct?: DataAwsDirectoryServiceDirectoryRadiusSettings): any;
export declare class DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDirectoryServiceDirectoryRadiusSettings | undefined;
    set internalValue(value: DataAwsDirectoryServiceDirectoryRadiusSettings | undefined);
    get authenticationProtocol(): string;
    get displayLabel(): string;
    get radiusPort(): number;
    get radiusRetries(): number;
    get radiusServers(): string[];
    get radiusTimeout(): number;
    get useSameUsername(): cdktf.IResolvable;
}
export declare class DataAwsDirectoryServiceDirectoryRadiusSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDirectoryServiceDirectoryRadiusSettingsOutputReference;
}
export interface DataAwsDirectoryServiceDirectoryVpcSettings {
}
export declare function dataAwsDirectoryServiceDirectoryVpcSettingsToTerraform(struct?: DataAwsDirectoryServiceDirectoryVpcSettings): any;
export declare function dataAwsDirectoryServiceDirectoryVpcSettingsToHclTerraform(struct?: DataAwsDirectoryServiceDirectoryVpcSettings): any;
export declare class DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDirectoryServiceDirectoryVpcSettings | undefined;
    set internalValue(value: DataAwsDirectoryServiceDirectoryVpcSettings | undefined);
    get availabilityZones(): string[];
    get subnetIds(): string[];
    get vpcId(): string;
}
export declare class DataAwsDirectoryServiceDirectoryVpcSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDirectoryServiceDirectoryVpcSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/directory_service_directory aws_directory_service_directory}
*/
export declare class DataAwsDirectoryServiceDirectory extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_directory_service_directory";
    /**
    * Generates CDKTF code for importing a DataAwsDirectoryServiceDirectory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDirectoryServiceDirectory to import
    * @param importFromId The id of the existing DataAwsDirectoryServiceDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/directory_service_directory#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDirectoryServiceDirectory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/directory_service_directory aws_directory_service_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDirectoryServiceDirectoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDirectoryServiceDirectoryConfig);
    get accessUrl(): string;
    get alias(): string;
    private _connectSettings;
    get connectSettings(): DataAwsDirectoryServiceDirectoryConnectSettingsList;
    get description(): string;
    private _directoryId?;
    get directoryId(): string;
    set directoryId(value: string);
    get directoryIdInput(): string | undefined;
    get dnsIpAddresses(): string[];
    get edition(): string;
    get enableSso(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _radiusSettings;
    get radiusSettings(): DataAwsDirectoryServiceDirectoryRadiusSettingsList;
    get securityGroupId(): string;
    get shortName(): string;
    get size(): string;
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
    get type(): string;
    private _vpcSettings;
    get vpcSettings(): DataAwsDirectoryServiceDirectoryVpcSettingsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
