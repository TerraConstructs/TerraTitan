/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerCoreNetworkPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment#core_network_id NetworkmanagerCoreNetworkPolicyAttachment#core_network_id}
    */
    readonly coreNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment#id NetworkmanagerCoreNetworkPolicyAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment#policy_document NetworkmanagerCoreNetworkPolicyAttachment#policy_document}
    */
    readonly policyDocument: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment#timeouts NetworkmanagerCoreNetworkPolicyAttachment#timeouts}
    */
    readonly timeouts?: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts;
}
export interface NetworkmanagerCoreNetworkPolicyAttachmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment#update NetworkmanagerCoreNetworkPolicyAttachment#update}
    */
    readonly update?: string;
}
export declare function networkmanagerCoreNetworkPolicyAttachmentTimeoutsToTerraform(struct?: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerCoreNetworkPolicyAttachmentTimeoutsToHclTerraform(struct?: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerCoreNetworkPolicyAttachmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts | cdktf.IResolvable | undefined);
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment aws_networkmanager_core_network_policy_attachment}
*/
export declare class NetworkmanagerCoreNetworkPolicyAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_core_network_policy_attachment";
    /**
    * Generates CDKTF code for importing a NetworkmanagerCoreNetworkPolicyAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerCoreNetworkPolicyAttachment to import
    * @param importFromId The id of the existing NetworkmanagerCoreNetworkPolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerCoreNetworkPolicyAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network_policy_attachment aws_networkmanager_core_network_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerCoreNetworkPolicyAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerCoreNetworkPolicyAttachmentConfig);
    private _coreNetworkId?;
    get coreNetworkId(): string;
    set coreNetworkId(value: string);
    get coreNetworkIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policyDocument?;
    get policyDocument(): string;
    set policyDocument(value: string);
    get policyDocumentInput(): string | undefined;
    get state(): string;
    private _timeouts;
    get timeouts(): NetworkmanagerCoreNetworkPolicyAttachmentTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerCoreNetworkPolicyAttachmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerCoreNetworkPolicyAttachmentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
