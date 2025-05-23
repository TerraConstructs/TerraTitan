/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall#arn DataAwsNetworkfirewallFirewall#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall#id DataAwsNetworkfirewallFirewall#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall#name DataAwsNetworkfirewallFirewall#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall#tags DataAwsNetworkfirewallFirewall#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsNetworkfirewallFirewallEncryptionConfiguration {
}
export declare function dataAwsNetworkfirewallFirewallEncryptionConfigurationToTerraform(struct?: DataAwsNetworkfirewallFirewallEncryptionConfiguration): any;
export declare function dataAwsNetworkfirewallFirewallEncryptionConfigurationToHclTerraform(struct?: DataAwsNetworkfirewallFirewallEncryptionConfiguration): any;
export declare class DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallEncryptionConfiguration | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallEncryptionConfiguration | undefined);
    get keyId(): string;
    get type(): string;
}
export declare class DataAwsNetworkfirewallFirewallEncryptionConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallEncryptionConfigurationOutputReference;
}
export interface DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences {
}
export declare function dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesToTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences): any;
export declare function dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesToHclTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences): any;
export declare class DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferences | undefined);
    get resolvedCidrCount(): number;
}
export declare class DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesOutputReference;
}
export interface DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs {
}
export declare function dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsToTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs): any;
export declare function dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsToHclTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs): any;
export declare class DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrs | undefined);
    get availableCidrCount(): number;
    private _ipSetReferences;
    get ipSetReferences(): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsIpSetReferencesList;
    get utilizedCidrCount(): number;
}
export declare class DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsOutputReference;
}
export interface DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary {
}
export declare function dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryToTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary): any;
export declare function dataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryToHclTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary): any;
export declare class DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummary | undefined);
    private _cidrs;
    get cidrs(): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryCidrsList;
}
export declare class DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryOutputReference;
}
export interface DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment {
}
export declare function dataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentToTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment): any;
export declare function dataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentToHclTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment): any;
export declare class DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachment | undefined);
    get endpointId(): string;
    get status(): string;
    get subnetId(): string;
}
export declare class DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentOutputReference;
}
export interface DataAwsNetworkfirewallFirewallFirewallStatusSyncStates {
}
export declare function dataAwsNetworkfirewallFirewallFirewallStatusSyncStatesToTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusSyncStates): any;
export declare function dataAwsNetworkfirewallFirewallFirewallStatusSyncStatesToHclTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatusSyncStates): any;
export declare class DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallFirewallStatusSyncStates | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallFirewallStatusSyncStates | undefined);
    private _attachment;
    get attachment(): DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesAttachmentList;
    get availabilityZone(): string;
}
export declare class DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesOutputReference;
}
export interface DataAwsNetworkfirewallFirewallFirewallStatus {
}
export declare function dataAwsNetworkfirewallFirewallFirewallStatusToTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatus): any;
export declare function dataAwsNetworkfirewallFirewallFirewallStatusToHclTerraform(struct?: DataAwsNetworkfirewallFirewallFirewallStatus): any;
export declare class DataAwsNetworkfirewallFirewallFirewallStatusOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallFirewallStatus | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallFirewallStatus | undefined);
    private _capacityUsageSummary;
    get capacityUsageSummary(): DataAwsNetworkfirewallFirewallFirewallStatusCapacityUsageSummaryList;
    get configurationSyncStateSummary(): string;
    get status(): string;
    private _syncStates;
    get syncStates(): DataAwsNetworkfirewallFirewallFirewallStatusSyncStatesList;
}
export declare class DataAwsNetworkfirewallFirewallFirewallStatusList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallFirewallStatusOutputReference;
}
export interface DataAwsNetworkfirewallFirewallSubnetMapping {
}
export declare function dataAwsNetworkfirewallFirewallSubnetMappingToTerraform(struct?: DataAwsNetworkfirewallFirewallSubnetMapping): any;
export declare function dataAwsNetworkfirewallFirewallSubnetMappingToHclTerraform(struct?: DataAwsNetworkfirewallFirewallSubnetMapping): any;
export declare class DataAwsNetworkfirewallFirewallSubnetMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallSubnetMapping | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallSubnetMapping | undefined);
    get subnetId(): string;
}
export declare class DataAwsNetworkfirewallFirewallSubnetMappingList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallSubnetMappingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall aws_networkfirewall_firewall}
*/
export declare class DataAwsNetworkfirewallFirewall extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_networkfirewall_firewall";
    /**
    * Generates CDKTF code for importing a DataAwsNetworkfirewallFirewall resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNetworkfirewallFirewall to import
    * @param importFromId The id of the existing DataAwsNetworkfirewallFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNetworkfirewallFirewall to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall aws_networkfirewall_firewall} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkfirewallFirewallConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNetworkfirewallFirewallConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get deleteProtection(): cdktf.IResolvable;
    get description(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): DataAwsNetworkfirewallFirewallEncryptionConfigurationList;
    get firewallPolicyArn(): string;
    get firewallPolicyChangeProtection(): cdktf.IResolvable;
    private _firewallStatus;
    get firewallStatus(): DataAwsNetworkfirewallFirewallFirewallStatusList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get subnetChangeProtection(): cdktf.IResolvable;
    private _subnetMapping;
    get subnetMapping(): DataAwsNetworkfirewallFirewallSubnetMappingList;
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
    get updateToken(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
