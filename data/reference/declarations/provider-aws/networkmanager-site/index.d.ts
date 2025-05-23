/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#description NetworkmanagerSite#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#global_network_id NetworkmanagerSite#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#id NetworkmanagerSite#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#tags NetworkmanagerSite#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#tags_all NetworkmanagerSite#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#location NetworkmanagerSite#location}
    */
    readonly location?: NetworkmanagerSiteLocation;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#timeouts NetworkmanagerSite#timeouts}
    */
    readonly timeouts?: NetworkmanagerSiteTimeouts;
}
export interface NetworkmanagerSiteLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#address NetworkmanagerSite#address}
    */
    readonly address?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#latitude NetworkmanagerSite#latitude}
    */
    readonly latitude?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#longitude NetworkmanagerSite#longitude}
    */
    readonly longitude?: string;
}
export declare function networkmanagerSiteLocationToTerraform(struct?: NetworkmanagerSiteLocationOutputReference | NetworkmanagerSiteLocation): any;
export declare function networkmanagerSiteLocationToHclTerraform(struct?: NetworkmanagerSiteLocationOutputReference | NetworkmanagerSiteLocation): any;
export declare class NetworkmanagerSiteLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerSiteLocation | undefined;
    set internalValue(value: NetworkmanagerSiteLocation | undefined);
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
export interface NetworkmanagerSiteTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#create NetworkmanagerSite#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#delete NetworkmanagerSite#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#update NetworkmanagerSite#update}
    */
    readonly update?: string;
}
export declare function networkmanagerSiteTimeoutsToTerraform(struct?: NetworkmanagerSiteTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerSiteTimeoutsToHclTerraform(struct?: NetworkmanagerSiteTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerSiteTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerSiteTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerSiteTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site aws_networkmanager_site}
*/
export declare class NetworkmanagerSite extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_site";
    /**
    * Generates CDKTF code for importing a NetworkmanagerSite resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerSite to import
    * @param importFromId The id of the existing NetworkmanagerSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerSite to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_site aws_networkmanager_site} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerSiteConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerSiteConfig);
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
    private _location;
    get location(): NetworkmanagerSiteLocationOutputReference;
    putLocation(value: NetworkmanagerSiteLocation): void;
    resetLocation(): void;
    get locationInput(): NetworkmanagerSiteLocation | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerSiteTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerSiteTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerSiteTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
