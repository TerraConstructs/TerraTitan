/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#delete_protection NetworkfirewallFirewall#delete_protection}
    */
    readonly deleteProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#description NetworkfirewallFirewall#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}
    */
    readonly firewallPolicyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}
    */
    readonly firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#id NetworkfirewallFirewall#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#name NetworkfirewallFirewall#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}
    */
    readonly subnetChangeProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#tags NetworkfirewallFirewall#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#tags_all NetworkfirewallFirewall#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#vpc_id NetworkfirewallFirewall#vpc_id}
    */
    readonly vpcId: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#encryption_configuration NetworkfirewallFirewall#encryption_configuration}
    */
    readonly encryptionConfiguration?: NetworkfirewallFirewallEncryptionConfiguration;
    /**
    * subnet_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#subnet_mapping NetworkfirewallFirewall#subnet_mapping}
    */
    readonly subnetMapping: NetworkfirewallFirewallSubnetMapping[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#timeouts NetworkfirewallFirewall#timeouts}
    */
    readonly timeouts?: NetworkfirewallFirewallTimeouts;
}
export interface NetworkfirewallFirewallFirewallStatusSyncStatesAttachment {
}
export declare function networkfirewallFirewallFirewallStatusSyncStatesAttachmentToTerraform(struct?: NetworkfirewallFirewallFirewallStatusSyncStatesAttachment): any;
export declare function networkfirewallFirewallFirewallStatusSyncStatesAttachmentToHclTerraform(struct?: NetworkfirewallFirewallFirewallStatusSyncStatesAttachment): any;
export declare class NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallFirewallStatusSyncStatesAttachment | undefined;
    set internalValue(value: NetworkfirewallFirewallFirewallStatusSyncStatesAttachment | undefined);
    get endpointId(): string;
    get subnetId(): string;
}
export declare class NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference;
}
export interface NetworkfirewallFirewallFirewallStatusSyncStates {
}
export declare function networkfirewallFirewallFirewallStatusSyncStatesToTerraform(struct?: NetworkfirewallFirewallFirewallStatusSyncStates): any;
export declare function networkfirewallFirewallFirewallStatusSyncStatesToHclTerraform(struct?: NetworkfirewallFirewallFirewallStatusSyncStates): any;
export declare class NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallFirewallStatusSyncStates | undefined;
    set internalValue(value: NetworkfirewallFirewallFirewallStatusSyncStates | undefined);
    private _attachment;
    get attachment(): NetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList;
    get availabilityZone(): string;
}
export declare class NetworkfirewallFirewallFirewallStatusSyncStatesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallFirewallStatusSyncStatesOutputReference;
}
export interface NetworkfirewallFirewallFirewallStatus {
}
export declare function networkfirewallFirewallFirewallStatusToTerraform(struct?: NetworkfirewallFirewallFirewallStatus): any;
export declare function networkfirewallFirewallFirewallStatusToHclTerraform(struct?: NetworkfirewallFirewallFirewallStatus): any;
export declare class NetworkfirewallFirewallFirewallStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallFirewallStatus | undefined;
    set internalValue(value: NetworkfirewallFirewallFirewallStatus | undefined);
    private _syncStates;
    get syncStates(): NetworkfirewallFirewallFirewallStatusSyncStatesList;
}
export declare class NetworkfirewallFirewallFirewallStatusList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallFirewallStatusOutputReference;
}
export interface NetworkfirewallFirewallEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#key_id NetworkfirewallFirewall#key_id}
    */
    readonly keyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#type NetworkfirewallFirewall#type}
    */
    readonly type: string;
}
export declare function networkfirewallFirewallEncryptionConfigurationToTerraform(struct?: NetworkfirewallFirewallEncryptionConfigurationOutputReference | NetworkfirewallFirewallEncryptionConfiguration): any;
export declare function networkfirewallFirewallEncryptionConfigurationToHclTerraform(struct?: NetworkfirewallFirewallEncryptionConfigurationOutputReference | NetworkfirewallFirewallEncryptionConfiguration): any;
export declare class NetworkfirewallFirewallEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallEncryptionConfiguration | undefined;
    set internalValue(value: NetworkfirewallFirewallEncryptionConfiguration | undefined);
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    resetKeyId(): void;
    get keyIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface NetworkfirewallFirewallSubnetMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#ip_address_type NetworkfirewallFirewall#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#subnet_id NetworkfirewallFirewall#subnet_id}
    */
    readonly subnetId: string;
}
export declare function networkfirewallFirewallSubnetMappingToTerraform(struct?: NetworkfirewallFirewallSubnetMapping | cdktf.IResolvable): any;
export declare function networkfirewallFirewallSubnetMappingToHclTerraform(struct?: NetworkfirewallFirewallSubnetMapping | cdktf.IResolvable): any;
export declare class NetworkfirewallFirewallSubnetMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallSubnetMapping | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallFirewallSubnetMapping | cdktf.IResolvable | undefined);
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
}
export declare class NetworkfirewallFirewallSubnetMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallFirewallSubnetMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallSubnetMappingOutputReference;
}
export interface NetworkfirewallFirewallTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#create NetworkfirewallFirewall#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#delete NetworkfirewallFirewall#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#update NetworkfirewallFirewall#update}
    */
    readonly update?: string;
}
export declare function networkfirewallFirewallTimeoutsToTerraform(struct?: NetworkfirewallFirewallTimeouts | cdktf.IResolvable): any;
export declare function networkfirewallFirewallTimeoutsToHclTerraform(struct?: NetworkfirewallFirewallTimeouts | cdktf.IResolvable): any;
export declare class NetworkfirewallFirewallTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallFirewallTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall aws_networkfirewall_firewall}
*/
export declare class NetworkfirewallFirewall extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkfirewall_firewall";
    /**
    * Generates CDKTF code for importing a NetworkfirewallFirewall resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkfirewallFirewall to import
    * @param importFromId The id of the existing NetworkfirewallFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkfirewallFirewall to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall aws_networkfirewall_firewall} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig);
    get arn(): string;
    private _deleteProtection?;
    get deleteProtection(): boolean | cdktf.IResolvable;
    set deleteProtection(value: boolean | cdktf.IResolvable);
    resetDeleteProtection(): void;
    get deleteProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _firewallPolicyArn?;
    get firewallPolicyArn(): string;
    set firewallPolicyArn(value: string);
    get firewallPolicyArnInput(): string | undefined;
    private _firewallPolicyChangeProtection?;
    get firewallPolicyChangeProtection(): boolean | cdktf.IResolvable;
    set firewallPolicyChangeProtection(value: boolean | cdktf.IResolvable);
    resetFirewallPolicyChangeProtection(): void;
    get firewallPolicyChangeProtectionInput(): boolean | cdktf.IResolvable | undefined;
    private _firewallStatus;
    get firewallStatus(): NetworkfirewallFirewallFirewallStatusList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _subnetChangeProtection?;
    get subnetChangeProtection(): boolean | cdktf.IResolvable;
    set subnetChangeProtection(value: boolean | cdktf.IResolvable);
    resetSubnetChangeProtection(): void;
    get subnetChangeProtectionInput(): boolean | cdktf.IResolvable | undefined;
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
    get updateToken(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): NetworkfirewallFirewallEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: NetworkfirewallFirewallEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): NetworkfirewallFirewallEncryptionConfiguration | undefined;
    private _subnetMapping;
    get subnetMapping(): NetworkfirewallFirewallSubnetMappingList;
    putSubnetMapping(value: NetworkfirewallFirewallSubnetMapping[] | cdktf.IResolvable): void;
    get subnetMappingInput(): cdktf.IResolvable | NetworkfirewallFirewallSubnetMapping[] | undefined;
    private _timeouts;
    get timeouts(): NetworkfirewallFirewallTimeoutsOutputReference;
    putTimeouts(value: NetworkfirewallFirewallTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkfirewallFirewallTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
