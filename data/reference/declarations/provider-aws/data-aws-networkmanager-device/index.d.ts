/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNetworkmanagerDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_device#device_id DataAwsNetworkmanagerDevice#device_id}
    */
    readonly deviceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_device#global_network_id DataAwsNetworkmanagerDevice#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_device#id DataAwsNetworkmanagerDevice#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_device#tags DataAwsNetworkmanagerDevice#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsNetworkmanagerDeviceAwsLocation {
}
export declare function dataAwsNetworkmanagerDeviceAwsLocationToTerraform(struct?: DataAwsNetworkmanagerDeviceAwsLocation): any;
export declare function dataAwsNetworkmanagerDeviceAwsLocationToHclTerraform(struct?: DataAwsNetworkmanagerDeviceAwsLocation): any;
export declare class DataAwsNetworkmanagerDeviceAwsLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerDeviceAwsLocation | undefined;
    set internalValue(value: DataAwsNetworkmanagerDeviceAwsLocation | undefined);
    get subnetArn(): string;
    get zone(): string;
}
export declare class DataAwsNetworkmanagerDeviceAwsLocationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkmanagerDeviceAwsLocationOutputReference;
}
export interface DataAwsNetworkmanagerDeviceLocation {
}
export declare function dataAwsNetworkmanagerDeviceLocationToTerraform(struct?: DataAwsNetworkmanagerDeviceLocation): any;
export declare function dataAwsNetworkmanagerDeviceLocationToHclTerraform(struct?: DataAwsNetworkmanagerDeviceLocation): any;
export declare class DataAwsNetworkmanagerDeviceLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerDeviceLocation | undefined;
    set internalValue(value: DataAwsNetworkmanagerDeviceLocation | undefined);
    get address(): string;
    get latitude(): string;
    get longitude(): string;
}
export declare class DataAwsNetworkmanagerDeviceLocationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkmanagerDeviceLocationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_device aws_networkmanager_device}
*/
export declare class DataAwsNetworkmanagerDevice extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_networkmanager_device";
    /**
    * Generates CDKTF code for importing a DataAwsNetworkmanagerDevice resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNetworkmanagerDevice to import
    * @param importFromId The id of the existing DataAwsNetworkmanagerDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_device#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNetworkmanagerDevice to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_device aws_networkmanager_device} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkmanagerDeviceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsNetworkmanagerDeviceConfig);
    get arn(): string;
    private _awsLocation;
    get awsLocation(): DataAwsNetworkmanagerDeviceAwsLocationList;
    get description(): string;
    private _deviceId?;
    get deviceId(): string;
    set deviceId(value: string);
    get deviceIdInput(): string | undefined;
    private _globalNetworkId?;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _location;
    get location(): DataAwsNetworkmanagerDeviceLocationList;
    get model(): string;
    get serialNumber(): string;
    get siteId(): string;
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
    get vendor(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
