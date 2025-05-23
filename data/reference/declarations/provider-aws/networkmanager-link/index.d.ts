/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#description NetworkmanagerLink#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#global_network_id NetworkmanagerLink#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#id NetworkmanagerLink#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#provider_name NetworkmanagerLink#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#site_id NetworkmanagerLink#site_id}
    */
    readonly siteId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#tags NetworkmanagerLink#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#tags_all NetworkmanagerLink#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#type NetworkmanagerLink#type}
    */
    readonly type?: string;
    /**
    * bandwidth block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#bandwidth NetworkmanagerLink#bandwidth}
    */
    readonly bandwidth: NetworkmanagerLinkBandwidth;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#timeouts NetworkmanagerLink#timeouts}
    */
    readonly timeouts?: NetworkmanagerLinkTimeouts;
}
export interface NetworkmanagerLinkBandwidth {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#download_speed NetworkmanagerLink#download_speed}
    */
    readonly downloadSpeed?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#upload_speed NetworkmanagerLink#upload_speed}
    */
    readonly uploadSpeed?: number;
}
export declare function networkmanagerLinkBandwidthToTerraform(struct?: NetworkmanagerLinkBandwidthOutputReference | NetworkmanagerLinkBandwidth): any;
export declare function networkmanagerLinkBandwidthToHclTerraform(struct?: NetworkmanagerLinkBandwidthOutputReference | NetworkmanagerLinkBandwidth): any;
export declare class NetworkmanagerLinkBandwidthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerLinkBandwidth | undefined;
    set internalValue(value: NetworkmanagerLinkBandwidth | undefined);
    private _downloadSpeed?;
    get downloadSpeed(): number;
    set downloadSpeed(value: number);
    resetDownloadSpeed(): void;
    get downloadSpeedInput(): number | undefined;
    private _uploadSpeed?;
    get uploadSpeed(): number;
    set uploadSpeed(value: number);
    resetUploadSpeed(): void;
    get uploadSpeedInput(): number | undefined;
}
export interface NetworkmanagerLinkTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#create NetworkmanagerLink#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#delete NetworkmanagerLink#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#update NetworkmanagerLink#update}
    */
    readonly update?: string;
}
export declare function networkmanagerLinkTimeoutsToTerraform(struct?: NetworkmanagerLinkTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerLinkTimeoutsToHclTerraform(struct?: NetworkmanagerLinkTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerLinkTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerLinkTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerLinkTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link aws_networkmanager_link}
*/
export declare class NetworkmanagerLink extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_link";
    /**
    * Generates CDKTF code for importing a NetworkmanagerLink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerLink to import
    * @param importFromId The id of the existing NetworkmanagerLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerLink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_link aws_networkmanager_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerLinkConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerLinkConfig);
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
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    resetProviderName(): void;
    get providerNameInput(): string | undefined;
    private _siteId?;
    get siteId(): string;
    set siteId(value: string);
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
    private _bandwidth;
    get bandwidth(): NetworkmanagerLinkBandwidthOutputReference;
    putBandwidth(value: NetworkmanagerLinkBandwidth): void;
    get bandwidthInput(): NetworkmanagerLinkBandwidth | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerLinkTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerLinkTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerLinkTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
