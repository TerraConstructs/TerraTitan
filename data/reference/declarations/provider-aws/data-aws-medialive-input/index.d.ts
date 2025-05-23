/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMedialiveInputConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/medialive_input#id DataAwsMedialiveInput#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export interface DataAwsMedialiveInputDestinationsVpc {
}
export declare function dataAwsMedialiveInputDestinationsVpcToTerraform(struct?: DataAwsMedialiveInputDestinationsVpc): any;
export declare function dataAwsMedialiveInputDestinationsVpcToHclTerraform(struct?: DataAwsMedialiveInputDestinationsVpc): any;
export declare class DataAwsMedialiveInputDestinationsVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMedialiveInputDestinationsVpc | undefined;
    set internalValue(value: DataAwsMedialiveInputDestinationsVpc | undefined);
    get availabilityZone(): string;
    get networkInterfaceId(): string;
}
export declare class DataAwsMedialiveInputDestinationsVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMedialiveInputDestinationsVpcOutputReference;
}
export interface DataAwsMedialiveInputDestinations {
}
export declare function dataAwsMedialiveInputDestinationsToTerraform(struct?: DataAwsMedialiveInputDestinations): any;
export declare function dataAwsMedialiveInputDestinationsToHclTerraform(struct?: DataAwsMedialiveInputDestinations): any;
export declare class DataAwsMedialiveInputDestinationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMedialiveInputDestinations | undefined;
    set internalValue(value: DataAwsMedialiveInputDestinations | undefined);
    get ip(): string;
    get port(): string;
    get url(): string;
    private _vpc;
    get vpc(): DataAwsMedialiveInputDestinationsVpcList;
}
export declare class DataAwsMedialiveInputDestinationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMedialiveInputDestinationsOutputReference;
}
export interface DataAwsMedialiveInputInputDevices {
}
export declare function dataAwsMedialiveInputInputDevicesToTerraform(struct?: DataAwsMedialiveInputInputDevices): any;
export declare function dataAwsMedialiveInputInputDevicesToHclTerraform(struct?: DataAwsMedialiveInputInputDevices): any;
export declare class DataAwsMedialiveInputInputDevicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMedialiveInputInputDevices | undefined;
    set internalValue(value: DataAwsMedialiveInputInputDevices | undefined);
    get id(): string;
}
export declare class DataAwsMedialiveInputInputDevicesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMedialiveInputInputDevicesOutputReference;
}
export interface DataAwsMedialiveInputMediaConnectFlows {
}
export declare function dataAwsMedialiveInputMediaConnectFlowsToTerraform(struct?: DataAwsMedialiveInputMediaConnectFlows): any;
export declare function dataAwsMedialiveInputMediaConnectFlowsToHclTerraform(struct?: DataAwsMedialiveInputMediaConnectFlows): any;
export declare class DataAwsMedialiveInputMediaConnectFlowsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMedialiveInputMediaConnectFlows | undefined;
    set internalValue(value: DataAwsMedialiveInputMediaConnectFlows | undefined);
    get flowArn(): string;
}
export declare class DataAwsMedialiveInputMediaConnectFlowsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMedialiveInputMediaConnectFlowsOutputReference;
}
export interface DataAwsMedialiveInputSources {
}
export declare function dataAwsMedialiveInputSourcesToTerraform(struct?: DataAwsMedialiveInputSources): any;
export declare function dataAwsMedialiveInputSourcesToHclTerraform(struct?: DataAwsMedialiveInputSources): any;
export declare class DataAwsMedialiveInputSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMedialiveInputSources | undefined;
    set internalValue(value: DataAwsMedialiveInputSources | undefined);
    get passwordParam(): string;
    get url(): string;
    get username(): string;
}
export declare class DataAwsMedialiveInputSourcesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMedialiveInputSourcesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/medialive_input aws_medialive_input}
*/
export declare class DataAwsMedialiveInput extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_medialive_input";
    /**
    * Generates CDKTF code for importing a DataAwsMedialiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMedialiveInput to import
    * @param importFromId The id of the existing DataAwsMedialiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/medialive_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMedialiveInput to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/medialive_input aws_medialive_input} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMedialiveInputConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMedialiveInputConfig);
    get arn(): string;
    get attachedChannels(): string[];
    private _destinations;
    get destinations(): DataAwsMedialiveInputDestinationsList;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get inputClass(): string;
    private _inputDevices;
    get inputDevices(): DataAwsMedialiveInputInputDevicesList;
    get inputPartnerIds(): string[];
    get inputSourceType(): string;
    private _mediaConnectFlows;
    get mediaConnectFlows(): DataAwsMedialiveInputMediaConnectFlowsList;
    get name(): string;
    get roleArn(): string;
    get securityGroups(): string[];
    private _sources;
    get sources(): DataAwsMedialiveInputSourcesList;
    get state(): string;
    private _tags;
    get tags(): cdktf.StringMap;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
