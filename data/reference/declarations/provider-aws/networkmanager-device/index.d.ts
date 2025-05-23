/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerDeviceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#description NetworkmanagerDevice#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#global_network_id NetworkmanagerDevice#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#id NetworkmanagerDevice#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#model NetworkmanagerDevice#model}
    */
    readonly model?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#serial_number NetworkmanagerDevice#serial_number}
    */
    readonly serialNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#site_id NetworkmanagerDevice#site_id}
    */
    readonly siteId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#tags NetworkmanagerDevice#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#tags_all NetworkmanagerDevice#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#type NetworkmanagerDevice#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#vendor NetworkmanagerDevice#vendor}
    */
    readonly vendor?: string;
    /**
    * aws_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#aws_location NetworkmanagerDevice#aws_location}
    */
    readonly awsLocation?: NetworkmanagerDeviceAwsLocation;
    /**
    * location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#location NetworkmanagerDevice#location}
    */
    readonly location?: NetworkmanagerDeviceLocation;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#timeouts NetworkmanagerDevice#timeouts}
    */
    readonly timeouts?: NetworkmanagerDeviceTimeouts;
}
export interface NetworkmanagerDeviceAwsLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#subnet_arn NetworkmanagerDevice#subnet_arn}
    */
    readonly subnetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#zone NetworkmanagerDevice#zone}
    */
    readonly zone?: string;
}
export declare function networkmanagerDeviceAwsLocationToTerraform(struct?: NetworkmanagerDeviceAwsLocationOutputReference | NetworkmanagerDeviceAwsLocation): any;
export declare function networkmanagerDeviceAwsLocationToHclTerraform(struct?: NetworkmanagerDeviceAwsLocationOutputReference | NetworkmanagerDeviceAwsLocation): any;
export declare class NetworkmanagerDeviceAwsLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerDeviceAwsLocation | undefined;
    set internalValue(value: NetworkmanagerDeviceAwsLocation | undefined);
    private _subnetArn?;
    get subnetArn(): string;
    set subnetArn(value: string);
    resetSubnetArn(): void;
    get subnetArnInput(): string | undefined;
    private _zone?;
    get zone(): string;
    set zone(value: string);
    resetZone(): void;
    get zoneInput(): string | undefined;
}
export interface NetworkmanagerDeviceLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#address NetworkmanagerDevice#address}
    */
    readonly address?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#latitude NetworkmanagerDevice#latitude}
    */
    readonly latitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#longitude NetworkmanagerDevice#longitude}
    */
    readonly longitude?: string;
}
export declare function networkmanagerDeviceLocationToTerraform(struct?: NetworkmanagerDeviceLocationOutputReference | NetworkmanagerDeviceLocation): any;
export declare function networkmanagerDeviceLocationToHclTerraform(struct?: NetworkmanagerDeviceLocationOutputReference | NetworkmanagerDeviceLocation): any;
export declare class NetworkmanagerDeviceLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerDeviceLocation | undefined;
    set internalValue(value: NetworkmanagerDeviceLocation | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    resetAddress(): void;
    get addressInput(): string | undefined;
    private _latitude?;
    get latitude(): string;
    set latitude(value: string);
    resetLatitude(): void;
    get latitudeInput(): string | undefined;
    private _longitude?;
    get longitude(): string;
    set longitude(value: string);
    resetLongitude(): void;
    get longitudeInput(): string | undefined;
}
export interface NetworkmanagerDeviceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#create NetworkmanagerDevice#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#delete NetworkmanagerDevice#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#update NetworkmanagerDevice#update}
    */
    readonly update?: string;
}
export declare function networkmanagerDeviceTimeoutsToTerraform(struct?: NetworkmanagerDeviceTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerDeviceTimeoutsToHclTerraform(struct?: NetworkmanagerDeviceTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerDeviceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerDeviceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerDeviceTimeouts | cdktf.IResolvable | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device aws_networkmanager_device}
*/
export declare class NetworkmanagerDevice extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_device";
    /**
    * Generates CDKTF code for importing a NetworkmanagerDevice resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerDevice to import
    * @param importFromId The id of the existing NetworkmanagerDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerDevice to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_device aws_networkmanager_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerDeviceConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerDeviceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _globalNetworkId?;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _model?;
    get model(): string;
    set model(value: string);
    resetModel(): void;
    get modelInput(): string | undefined;
    private _serialNumber?;
    get serialNumber(): string;
    set serialNumber(value: string);
    resetSerialNumber(): void;
    get serialNumberInput(): string | undefined;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
    resetSiteId(): void;
    get siteIdInput(): string | undefined;
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
    resetType(): void;
    get typeInput(): string | undefined;
    private _vendor?;
    get vendor(): string;
    set vendor(value: string);
    resetVendor(): void;
    get vendorInput(): string | undefined;
    private _awsLocation;
    get awsLocation(): NetworkmanagerDeviceAwsLocationOutputReference;
    putAwsLocation(value: NetworkmanagerDeviceAwsLocation): void;
    resetAwsLocation(): void;
    get awsLocationInput(): NetworkmanagerDeviceAwsLocation | undefined;
    private _location;
    get location(): NetworkmanagerDeviceLocationOutputReference;
    putLocation(value: NetworkmanagerDeviceLocation): void;
    resetLocation(): void;
    get locationInput(): NetworkmanagerDeviceLocation | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerDeviceTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerDeviceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerDeviceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
