/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter#attachment_id NetworkmanagerAttachmentAccepter#attachment_id}
    */
    readonly attachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter#attachment_type NetworkmanagerAttachmentAccepter#attachment_type}
    */
    readonly attachmentType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter#id NetworkmanagerAttachmentAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter#timeouts NetworkmanagerAttachmentAccepter#timeouts}
    */
    readonly timeouts?: NetworkmanagerAttachmentAccepterTimeouts;
}
export interface NetworkmanagerAttachmentAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter#create NetworkmanagerAttachmentAccepter#create}
    */
    readonly create?: string;
}
export declare function networkmanagerAttachmentAccepterTimeoutsToTerraform(struct?: NetworkmanagerAttachmentAccepterTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerAttachmentAccepterTimeoutsToHclTerraform(struct?: NetworkmanagerAttachmentAccepterTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerAttachmentAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerAttachmentAccepterTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerAttachmentAccepterTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter aws_networkmanager_attachment_accepter}
*/
export declare class NetworkmanagerAttachmentAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_attachment_accepter";
    /**
    * Generates CDKTF code for importing a NetworkmanagerAttachmentAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerAttachmentAccepter to import
    * @param importFromId The id of the existing NetworkmanagerAttachmentAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerAttachmentAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_attachment_accepter aws_networkmanager_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerAttachmentAccepterConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerAttachmentAccepterConfig);
    private _attachmentId?;
    get attachmentId(): string;
    set attachmentId(value: string);
    get attachmentIdInput(): string | undefined;
    get attachmentPolicyRuleNumber(): number;
    private _attachmentType?;
    get attachmentType(): string;
    set attachmentType(value: string);
    get attachmentTypeInput(): string | undefined;
    get coreNetworkArn(): string;
    get coreNetworkId(): string;
    get edgeLocation(): string;
    get edgeLocations(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerAccountId(): string;
    get resourceArn(): string;
    get segmentName(): string;
    get state(): string;
    private _timeouts;
    get timeouts(): NetworkmanagerAttachmentAccepterTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerAttachmentAccepterTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerAttachmentAccepterTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
