/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MedialiveInputConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#id MedialiveInput#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#input_security_groups MedialiveInput#input_security_groups}
    */
    readonly inputSecurityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#name MedialiveInput#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#role_arn MedialiveInput#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#tags MedialiveInput#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#tags_all MedialiveInput#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#type MedialiveInput#type}
    */
    readonly type: string;
    /**
    * destinations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}
    */
    readonly destinations?: MedialiveInputDestinations[] | cdktf.IResolvable;
    /**
    * input_devices block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#input_devices MedialiveInput#input_devices}
    */
    readonly inputDevices?: MedialiveInputInputDevices[] | cdktf.IResolvable;
    /**
    * media_connect_flows block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}
    */
    readonly mediaConnectFlows?: MedialiveInputMediaConnectFlows[] | cdktf.IResolvable;
    /**
    * sources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#sources MedialiveInput#sources}
    */
    readonly sources?: MedialiveInputSources[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#timeouts MedialiveInput#timeouts}
    */
    readonly timeouts?: MedialiveInputTimeouts;
    /**
    * vpc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#vpc MedialiveInput#vpc}
    */
    readonly vpc?: MedialiveInputVpc;
}
export interface MedialiveInputDestinations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#stream_name MedialiveInput#stream_name}
    */
    readonly streamName: string;
}
export declare function medialiveInputDestinationsToTerraform(struct?: MedialiveInputDestinations | cdktf.IResolvable): any;
export declare function medialiveInputDestinationsToHclTerraform(struct?: MedialiveInputDestinations | cdktf.IResolvable): any;
export declare class MedialiveInputDestinationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveInputDestinations | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveInputDestinations | cdktf.IResolvable | undefined);
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    get streamNameInput(): string | undefined;
}
export declare class MedialiveInputDestinationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveInputDestinations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveInputDestinationsOutputReference;
}
export interface MedialiveInputInputDevices {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#id MedialiveInput#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export declare function medialiveInputInputDevicesToTerraform(struct?: MedialiveInputInputDevices | cdktf.IResolvable): any;
export declare function medialiveInputInputDevicesToHclTerraform(struct?: MedialiveInputInputDevices | cdktf.IResolvable): any;
export declare class MedialiveInputInputDevicesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveInputInputDevices | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveInputInputDevices | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
}
export declare class MedialiveInputInputDevicesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveInputInputDevices[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveInputInputDevicesOutputReference;
}
export interface MedialiveInputMediaConnectFlows {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#flow_arn MedialiveInput#flow_arn}
    */
    readonly flowArn: string;
}
export declare function medialiveInputMediaConnectFlowsToTerraform(struct?: MedialiveInputMediaConnectFlows | cdktf.IResolvable): any;
export declare function medialiveInputMediaConnectFlowsToHclTerraform(struct?: MedialiveInputMediaConnectFlows | cdktf.IResolvable): any;
export declare class MedialiveInputMediaConnectFlowsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveInputMediaConnectFlows | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveInputMediaConnectFlows | cdktf.IResolvable | undefined);
    private _flowArn?;
    get flowArn(): string;
    set flowArn(value: string);
    get flowArnInput(): string | undefined;
}
export declare class MedialiveInputMediaConnectFlowsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveInputMediaConnectFlows[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveInputMediaConnectFlowsOutputReference;
}
export interface MedialiveInputSources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#password_param MedialiveInput#password_param}
    */
    readonly passwordParam: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#url MedialiveInput#url}
    */
    readonly url: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#username MedialiveInput#username}
    */
    readonly username: string;
}
export declare function medialiveInputSourcesToTerraform(struct?: MedialiveInputSources | cdktf.IResolvable): any;
export declare function medialiveInputSourcesToHclTerraform(struct?: MedialiveInputSources | cdktf.IResolvable): any;
export declare class MedialiveInputSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MedialiveInputSources | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveInputSources | cdktf.IResolvable | undefined);
    private _passwordParam?;
    get passwordParam(): string;
    set passwordParam(value: string);
    get passwordParamInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    get usernameInput(): string | undefined;
}
export declare class MedialiveInputSourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MedialiveInputSources[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MedialiveInputSourcesOutputReference;
}
export interface MedialiveInputTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#create MedialiveInput#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#delete MedialiveInput#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#update MedialiveInput#update}
    */
    readonly update?: string;
}
export declare function medialiveInputTimeoutsToTerraform(struct?: MedialiveInputTimeouts | cdktf.IResolvable): any;
export declare function medialiveInputTimeoutsToHclTerraform(struct?: MedialiveInputTimeouts | cdktf.IResolvable): any;
export declare class MedialiveInputTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveInputTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: MedialiveInputTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
export interface MedialiveInputVpc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#security_group_ids MedialiveInput#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#subnet_ids MedialiveInput#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function medialiveInputVpcToTerraform(struct?: MedialiveInputVpcOutputReference | MedialiveInputVpc): any;
export declare function medialiveInputVpcToHclTerraform(struct?: MedialiveInputVpcOutputReference | MedialiveInputVpc): any;
export declare class MedialiveInputVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MedialiveInputVpc | undefined;
    set internalValue(value: MedialiveInputVpc | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input aws_medialive_input}
*/
export declare class MedialiveInput extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_medialive_input";
    /**
    * Generates CDKTF code for importing a MedialiveInput resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MedialiveInput to import
    * @param importFromId The id of the existing MedialiveInput that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MedialiveInput to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/medialive_input aws_medialive_input} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MedialiveInputConfig
    */
    constructor(scope: Construct, id: string, config: MedialiveInputConfig);
    get arn(): string;
    get attachedChannels(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get inputClass(): string;
    get inputPartnerIds(): string[];
    private _inputSecurityGroups?;
    get inputSecurityGroups(): string[];
    set inputSecurityGroups(value: string[]);
    resetInputSecurityGroups(): void;
    get inputSecurityGroupsInput(): string[] | undefined;
    get inputSourceType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _destinations;
    get destinations(): MedialiveInputDestinationsList;
    putDestinations(value: MedialiveInputDestinations[] | cdktf.IResolvable): void;
    resetDestinations(): void;
    get destinationsInput(): cdktf.IResolvable | MedialiveInputDestinations[] | undefined;
    private _inputDevices;
    get inputDevices(): MedialiveInputInputDevicesList;
    putInputDevices(value: MedialiveInputInputDevices[] | cdktf.IResolvable): void;
    resetInputDevices(): void;
    get inputDevicesInput(): cdktf.IResolvable | MedialiveInputInputDevices[] | undefined;
    private _mediaConnectFlows;
    get mediaConnectFlows(): MedialiveInputMediaConnectFlowsList;
    putMediaConnectFlows(value: MedialiveInputMediaConnectFlows[] | cdktf.IResolvable): void;
    resetMediaConnectFlows(): void;
    get mediaConnectFlowsInput(): cdktf.IResolvable | MedialiveInputMediaConnectFlows[] | undefined;
    private _sources;
    get sources(): MedialiveInputSourcesList;
    putSources(value: MedialiveInputSources[] | cdktf.IResolvable): void;
    resetSources(): void;
    get sourcesInput(): cdktf.IResolvable | MedialiveInputSources[] | undefined;
    private _timeouts;
    get timeouts(): MedialiveInputTimeoutsOutputReference;
    putTimeouts(value: MedialiveInputTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | MedialiveInputTimeouts | undefined;
    private _vpc;
    get vpc(): MedialiveInputVpcOutputReference;
    putVpc(value: MedialiveInputVpc): void;
    resetVpc(): void;
    get vpcInput(): MedialiveInputVpc | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
