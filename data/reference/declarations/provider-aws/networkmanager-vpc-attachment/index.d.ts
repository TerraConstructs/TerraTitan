/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#id NetworkmanagerVpcAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}
    */
    readonly subnetArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#tags_all NetworkmanagerVpcAttachment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}
    */
    readonly vpcArn: string;
    /**
    * options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}
    */
    readonly options?: NetworkmanagerVpcAttachmentOptions;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#timeouts NetworkmanagerVpcAttachment#timeouts}
    */
    readonly timeouts?: NetworkmanagerVpcAttachmentTimeouts;
}
export interface NetworkmanagerVpcAttachmentOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}
    */
    readonly applianceModeSupport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#ipv6_support NetworkmanagerVpcAttachment#ipv6_support}
    */
    readonly ipv6Support?: boolean | cdktf.IResolvable;
}
export declare function networkmanagerVpcAttachmentOptionsToTerraform(struct?: NetworkmanagerVpcAttachmentOptionsOutputReference | NetworkmanagerVpcAttachmentOptions): any;
export declare function networkmanagerVpcAttachmentOptionsToHclTerraform(struct?: NetworkmanagerVpcAttachmentOptionsOutputReference | NetworkmanagerVpcAttachmentOptions): any;
export declare class NetworkmanagerVpcAttachmentOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerVpcAttachmentOptions | undefined;
    set internalValue(value: NetworkmanagerVpcAttachmentOptions | undefined);
    private _applianceModeSupport?;
    get applianceModeSupport(): boolean | cdktf.IResolvable;
    set applianceModeSupport(value: boolean | cdktf.IResolvable);
    resetApplianceModeSupport(): void;
    get applianceModeSupportInput(): boolean | cdktf.IResolvable | undefined;
    private _ipv6Support?;
    get ipv6Support(): boolean | cdktf.IResolvable;
    set ipv6Support(value: boolean | cdktf.IResolvable);
    resetIpv6Support(): void;
    get ipv6SupportInput(): boolean | cdktf.IResolvable | undefined;
}
export interface NetworkmanagerVpcAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#create NetworkmanagerVpcAttachment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#delete NetworkmanagerVpcAttachment#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#update NetworkmanagerVpcAttachment#update}
    */
    readonly update?: string;
}
export declare function networkmanagerVpcAttachmentTimeoutsToTerraform(struct?: NetworkmanagerVpcAttachmentTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerVpcAttachmentTimeoutsToHclTerraform(struct?: NetworkmanagerVpcAttachmentTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerVpcAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerVpcAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerVpcAttachmentTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment aws_networkmanager_vpc_attachment}
*/
export declare class NetworkmanagerVpcAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_vpc_attachment";
    /**
    * Generates CDKTF code for importing a NetworkmanagerVpcAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerVpcAttachment to import
    * @param importFromId The id of the existing NetworkmanagerVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerVpcAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_vpc_attachment aws_networkmanager_vpc_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerVpcAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerVpcAttachmentConfig);
    get arn(): string;
    get attachmentPolicyRuleNumber(): number;
    get attachmentType(): string;
    get coreNetworkArn(): string;
    private _coreNetworkId?;
    get coreNetworkId(): string;
    set coreNetworkId(value: string);
    get coreNetworkIdInput(): string | undefined;
    get edgeLocation(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerAccountId(): string;
    get resourceArn(): string;
    get segmentName(): string;
    get state(): string;
    private _subnetArns?;
    get subnetArns(): string[];
    set subnetArns(value: string[]);
    get subnetArnsInput(): string[] | undefined;
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
    private _vpcArn?;
    get vpcArn(): string;
    set vpcArn(value: string);
    get vpcArnInput(): string | undefined;
    private _options;
    get options(): NetworkmanagerVpcAttachmentOptionsOutputReference;
    putOptions(value: NetworkmanagerVpcAttachmentOptions): void;
    resetOptions(): void;
    get optionsInput(): NetworkmanagerVpcAttachmentOptions | undefined;
    private _timeouts;
    get timeouts(): NetworkmanagerVpcAttachmentTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerVpcAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerVpcAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
