/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#connected_device_id NetworkmanagerConnection#connected_device_id}
    */
    readonly connectedDeviceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#connected_link_id NetworkmanagerConnection#connected_link_id}
    */
    readonly connectedLinkId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#description NetworkmanagerConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#device_id NetworkmanagerConnection#device_id}
    */
    readonly deviceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#global_network_id NetworkmanagerConnection#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#id NetworkmanagerConnection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#link_id NetworkmanagerConnection#link_id}
    */
    readonly linkId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#tags NetworkmanagerConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#tags_all NetworkmanagerConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#timeouts NetworkmanagerConnection#timeouts}
    */
    readonly timeouts?: NetworkmanagerConnectionTimeouts;
}
export interface NetworkmanagerConnectionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#create NetworkmanagerConnection#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#delete NetworkmanagerConnection#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#update NetworkmanagerConnection#update}
    */
    readonly update?: string;
}
export declare function networkmanagerConnectionTimeoutsToTerraform(struct?: NetworkmanagerConnectionTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerConnectionTimeoutsToHclTerraform(struct?: NetworkmanagerConnectionTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerConnectionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerConnectionTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection aws_networkmanager_connection}
*/
export declare class NetworkmanagerConnection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_connection";
    /**
    * Generates CDKTF code for importing a NetworkmanagerConnection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerConnection to import
    * @param importFromId The id of the existing NetworkmanagerConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerConnection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connection aws_networkmanager_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerConnectionConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerConnectionConfig);
    get arn(): string;
    private _connectedDeviceId?;
    get connectedDeviceId(): string;
    set connectedDeviceId(value: string);
    get connectedDeviceIdInput(): string | undefined;
    private _connectedLinkId?;
    get connectedLinkId(): string;
    set connectedLinkId(value: string);
    resetConnectedLinkId(): void;
    get connectedLinkIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    private _linkId?;
    get linkId(): string;
    set linkId(value: string);
    resetLinkId(): void;
    get linkIdInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): NetworkmanagerConnectionTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerConnectionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerConnectionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
