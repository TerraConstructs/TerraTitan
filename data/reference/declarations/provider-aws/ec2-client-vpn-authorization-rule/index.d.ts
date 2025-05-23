/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ClientVpnAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#access_group_id Ec2ClientVpnAuthorizationRule#access_group_id}
    */
    readonly accessGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#authorize_all_groups Ec2ClientVpnAuthorizationRule#authorize_all_groups}
    */
    readonly authorizeAllGroups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#client_vpn_endpoint_id Ec2ClientVpnAuthorizationRule#client_vpn_endpoint_id}
    */
    readonly clientVpnEndpointId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#description Ec2ClientVpnAuthorizationRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#id Ec2ClientVpnAuthorizationRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#target_network_cidr Ec2ClientVpnAuthorizationRule#target_network_cidr}
    */
    readonly targetNetworkCidr: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#timeouts Ec2ClientVpnAuthorizationRule#timeouts}
    */
    readonly timeouts?: Ec2ClientVpnAuthorizationRuleTimeouts;
}
export interface Ec2ClientVpnAuthorizationRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#create Ec2ClientVpnAuthorizationRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#delete Ec2ClientVpnAuthorizationRule#delete}
    */
    readonly delete?: string;
}
export declare function ec2ClientVpnAuthorizationRuleTimeoutsToTerraform(struct?: Ec2ClientVpnAuthorizationRuleTimeouts | cdktf.IResolvable): any;
export declare function ec2ClientVpnAuthorizationRuleTimeoutsToHclTerraform(struct?: Ec2ClientVpnAuthorizationRuleTimeouts | cdktf.IResolvable): any;
export declare class Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2ClientVpnAuthorizationRuleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2ClientVpnAuthorizationRuleTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule aws_ec2_client_vpn_authorization_rule}
*/
export declare class Ec2ClientVpnAuthorizationRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_client_vpn_authorization_rule";
    /**
    * Generates CDKTF code for importing a Ec2ClientVpnAuthorizationRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2ClientVpnAuthorizationRule to import
    * @param importFromId The id of the existing Ec2ClientVpnAuthorizationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2ClientVpnAuthorizationRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_client_vpn_authorization_rule aws_ec2_client_vpn_authorization_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ClientVpnAuthorizationRuleConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ClientVpnAuthorizationRuleConfig);
    private _accessGroupId?;
    get accessGroupId(): string;
    set accessGroupId(value: string);
    resetAccessGroupId(): void;
    get accessGroupIdInput(): string | undefined;
    private _authorizeAllGroups?;
    get authorizeAllGroups(): boolean | cdktf.IResolvable;
    set authorizeAllGroups(value: boolean | cdktf.IResolvable);
    resetAuthorizeAllGroups(): void;
    get authorizeAllGroupsInput(): boolean | cdktf.IResolvable | undefined;
    private _clientVpnEndpointId?;
    get clientVpnEndpointId(): string;
    set clientVpnEndpointId(value: string);
    get clientVpnEndpointIdInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _targetNetworkCidr?;
    get targetNetworkCidr(): string;
    set targetNetworkCidr(value: string);
    get targetNetworkCidrInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2ClientVpnAuthorizationRuleTimeoutsOutputReference;
    putTimeouts(value: Ec2ClientVpnAuthorizationRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2ClientVpnAuthorizationRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
