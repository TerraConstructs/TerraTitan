/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerConnectAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#core_network_id NetworkmanagerConnectAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#edge_location NetworkmanagerConnectAttachment#edge_location}
    */
    readonly edgeLocation: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#id NetworkmanagerConnectAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#tags NetworkmanagerConnectAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#tags_all NetworkmanagerConnectAttachment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#transport_attachment_id NetworkmanagerConnectAttachment#transport_attachment_id}
    */
    readonly transportAttachmentId: string;
    /**
    * options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#options NetworkmanagerConnectAttachment#options}
    */
    readonly options: NetworkmanagerConnectAttachmentOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#timeouts NetworkmanagerConnectAttachment#timeouts}
    */
    readonly timeouts?: NetworkmanagerConnectAttachmentTimeouts;
}
export interface NetworkmanagerConnectAttachmentOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#protocol NetworkmanagerConnectAttachment#protocol}
    */
    readonly protocol?: string;
}
export declare function networkmanagerConnectAttachmentOptionsToTerraform(struct?: NetworkmanagerConnectAttachmentOptionsOutputReference | NetworkmanagerConnectAttachmentOptions): any;
export declare function networkmanagerConnectAttachmentOptionsToHclTerraform(struct?: NetworkmanagerConnectAttachmentOptionsOutputReference | NetworkmanagerConnectAttachmentOptions): any;
export declare class NetworkmanagerConnectAttachmentOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerConnectAttachmentOptions | undefined;
    set internalValue(value: NetworkmanagerConnectAttachmentOptions | undefined);
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
}
export interface NetworkmanagerConnectAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#create NetworkmanagerConnectAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#delete NetworkmanagerConnectAttachment#delete}
    */
    readonly delete?: string;
}
export declare function networkmanagerConnectAttachmentTimeoutsToTerraform(struct?: NetworkmanagerConnectAttachmentTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerConnectAttachmentTimeoutsToHclTerraform(struct?: NetworkmanagerConnectAttachmentTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerConnectAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerConnectAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerConnectAttachmentTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment aws_networkmanager_connect_attachment}
*/
export declare class NetworkmanagerConnectAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_connect_attachment";
    /**
    * Generates CDKTF code for importing a NetworkmanagerConnectAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerConnectAttachment to import
    * @param importFromId The id of the existing NetworkmanagerConnectAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerConnectAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_connect_attachment aws_networkmanager_connect_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerConnectAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerConnectAttachmentConfig);
    get arn(): string;
    get attachmentId(): string;
    get attachmentPolicyRuleNumber(): number;
    get attachmentType(): string;
    get coreNetworkArn(): string;
    private _coreNetworkId?;
    get coreNetworkId(): string;
    set coreNetworkId(value: string);
    get coreNetworkIdInput(): string | undefined;
    private _edgeLocation?;
    get edgeLocation(): string;
    set edgeLocation(value: string);
    get edgeLocationInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerAccountId(): string;
    get resourceArn(): string;
    get segmentName(): string;
    get state(): string;
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
    private _transportAttachmentId?;
    get transportAttachmentId(): string;
    set transportAttachmentId(value: string);
    get transportAttachmentIdInput(): string | undefined;
    private _options;
    get options(): NetworkmanagerConnectAttachmentOptionsOutputReference;
    putOptions(value: NetworkmanagerConnectAttachmentOptions): void;
    get optionsInput(): NetworkmanagerConnectAttachmentOptions | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerConnectAttachmentTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerConnectAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerConnectAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
