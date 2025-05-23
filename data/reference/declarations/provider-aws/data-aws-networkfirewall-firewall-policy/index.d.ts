/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall_policy#arn DataAwsNetworkfirewallFirewallPolicy#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall_policy#id DataAwsNetworkfirewallFirewallPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall_policy#name DataAwsNetworkfirewallFirewallPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall_policy#tags DataAwsNetworkfirewallFirewallPolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions | undefined);
    get ruleOrder(): string;
    get streamExceptionPolicy(): string;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride | undefined);
    get action(): string;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference | undefined);
    private _override;
    get override(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideList;
    get priority(): number;
    get resourceArn(): string;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension | undefined);
    get value(): string;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined);
    private _dimension;
    get dimension(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined);
    private _publishMetricAction;
    get publishMetricAction(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionList;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction | undefined);
    private _actionDefinition;
    get actionDefinition(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionList;
    get actionName(): string;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference | undefined);
    get priority(): number;
    get resourceArn(): string;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference;
}
export interface DataAwsNetworkfirewallFirewallPolicyFirewallPolicy {
}
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicy): any;
export declare function dataAwsNetworkfirewallFirewallPolicyFirewallPolicyToHclTerraform(struct?: DataAwsNetworkfirewallFirewallPolicyFirewallPolicy): any;
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicy | undefined;
    set internalValue(value: DataAwsNetworkfirewallFirewallPolicyFirewallPolicy | undefined);
    get statefulDefaultActions(): string[];
    private _statefulEngineOptions;
    get statefulEngineOptions(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsList;
    private _statefulRuleGroupReference;
    get statefulRuleGroupReference(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList;
    private _statelessCustomAction;
    get statelessCustomAction(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList;
    get statelessDefaultActions(): string[];
    get statelessFragmentDefaultActions(): string[];
    private _statelessRuleGroupReference;
    get statelessRuleGroupReference(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList;
    get tlsInspectionConfigurationArn(): string;
}
export declare class DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy}
*/
export declare class DataAwsNetworkfirewallFirewallPolicy extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_networkfirewall_firewall_policy";
    /**
    * Generates CDKTF code for importing a DataAwsNetworkfirewallFirewallPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNetworkfirewallFirewallPolicy to import
    * @param importFromId The id of the existing DataAwsNetworkfirewallFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNetworkfirewallFirewallPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkfirewallFirewallPolicyConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsNetworkfirewallFirewallPolicyConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get description(): string;
    private _firewallPolicy;
    get firewallPolicy(): DataAwsNetworkfirewallFirewallPolicyFirewallPolicyList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
