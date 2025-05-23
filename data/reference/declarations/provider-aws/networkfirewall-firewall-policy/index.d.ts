/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#id NetworkfirewallFirewallPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#name NetworkfirewallFirewallPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#tags_all NetworkfirewallFirewallPolicy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#encryption_configuration NetworkfirewallFirewallPolicy#encryption_configuration}
    */
    readonly encryptionConfiguration?: NetworkfirewallFirewallPolicyEncryptionConfiguration;
    /**
    * firewall_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}
    */
    readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy;
}
export interface NetworkfirewallFirewallPolicyEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#key_id NetworkfirewallFirewallPolicy#key_id}
    */
    readonly keyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#type NetworkfirewallFirewallPolicy#type}
    */
    readonly type: string;
}
export declare function networkfirewallFirewallPolicyEncryptionConfigurationToTerraform(struct?: NetworkfirewallFirewallPolicyEncryptionConfigurationOutputReference | NetworkfirewallFirewallPolicyEncryptionConfiguration): any;
export declare function networkfirewallFirewallPolicyEncryptionConfigurationToHclTerraform(struct?: NetworkfirewallFirewallPolicyEncryptionConfigurationOutputReference | NetworkfirewallFirewallPolicyEncryptionConfiguration): any;
export declare class NetworkfirewallFirewallPolicyEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyEncryptionConfiguration | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyEncryptionConfiguration | undefined);
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
export interface NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#definition NetworkfirewallFirewallPolicy#definition}
    */
    readonly definition: string[];
}
export declare function networkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet | undefined);
    private _definition?;
    get definition(): string[];
    set definition(value: string[]);
    get definitionInput(): string[] | undefined;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#key NetworkfirewallFirewallPolicy#key}
    */
    readonly key: string;
    /**
    * ip_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#ip_set NetworkfirewallFirewallPolicy#ip_set}
    */
    readonly ipSet: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _ipSet;
    get ipSet(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSetOutputReference;
    putIpSet(value: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet): void;
    get ipSetInput(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesIpSet | undefined;
}
export declare class NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables {
    /**
    * rule_variables block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}
    */
    readonly ruleVariables?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables[] | cdktf.IResolvable;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyPolicyVariablesToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyPolicyVariablesToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables | undefined);
    private _ruleVariables;
    get ruleVariables(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesList;
    putRuleVariables(value: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables[] | cdktf.IResolvable): void;
    resetRuleVariables(): void;
    get ruleVariablesInput(): cdktf.IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables[] | undefined;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}
    */
    readonly tcpIdleTimeoutSeconds?: number;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts | undefined);
    private _tcpIdleTimeoutSeconds?;
    get tcpIdleTimeoutSeconds(): number;
    set tcpIdleTimeoutSeconds(value: number);
    resetTcpIdleTimeoutSeconds(): void;
    get tcpIdleTimeoutSecondsInput(): number | undefined;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}
    */
    readonly ruleOrder?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}
    */
    readonly streamExceptionPolicy?: string;
    /**
    * flow_timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}
    */
    readonly flowTimeouts?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions | undefined);
    private _ruleOrder?;
    get ruleOrder(): string;
    set ruleOrder(value: string);
    resetRuleOrder(): void;
    get ruleOrderInput(): string | undefined;
    private _streamExceptionPolicy?;
    get streamExceptionPolicy(): string;
    set streamExceptionPolicy(value: string);
    resetStreamExceptionPolicy(): void;
    get streamExceptionPolicyInput(): string | undefined;
    private _flowTimeouts;
    get flowTimeouts(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference;
    putFlowTimeouts(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts): void;
    resetFlowTimeouts(): void;
    get flowTimeoutsInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts | undefined;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}
    */
    readonly action?: string;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string | undefined;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#override NetworkfirewallFirewallPolicy#override}
    */
    readonly override?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference | cdktf.IResolvable): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference | cdktf.IResolvable): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _override;
    get override(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverrideOutputReference;
    putOverride(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride): void;
    resetOverride(): void;
    get overrideInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOverride | undefined;
}
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceOutputReference;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}
    */
    readonly value: string;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionOutputReference;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#dimension NetworkfirewallFirewallPolicy#dimension}
    */
    readonly dimension: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined);
    private _dimension;
    get dimension(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionList;
    putDimension(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable): void;
    get dimensionInput(): cdktf.IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[] | undefined;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
    /**
    * publish_metric_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
    */
    readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined);
    private _publishMetricAction;
    get publishMetricAction(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionOutputReference;
    putPublishMetricAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): void;
    get publishMetricActionInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction | undefined;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#action_name NetworkfirewallFirewallPolicy#action_name}
    */
    readonly actionName: string;
    /**
    * action_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#action_definition NetworkfirewallFirewallPolicy#action_definition}
    */
    readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction | cdktf.IResolvable): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction | cdktf.IResolvable): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction | cdktf.IResolvable | undefined);
    private _actionName?;
    get actionName(): string;
    set actionName(value: string);
    get actionNameInput(): string | undefined;
    private _actionDefinition;
    get actionDefinition(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionOutputReference;
    putActionDefinition(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): void;
    get actionDefinitionInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition | undefined;
}
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionOutputReference;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference | cdktf.IResolvable): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference | cdktf.IResolvable): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
}
export declare class NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceOutputReference;
}
export interface NetworkfirewallFirewallPolicyFirewallPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}
    */
    readonly statefulDefaultActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}
    */
    readonly statelessDefaultActions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}
    */
    readonly statelessFragmentDefaultActions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#tls_inspection_configuration_arn NetworkfirewallFirewallPolicy#tls_inspection_configuration_arn}
    */
    readonly tlsInspectionConfigurationArn?: string;
    /**
    * policy_variables block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}
    */
    readonly policyVariables?: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables;
    /**
    * stateful_engine_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}
    */
    readonly statefulEngineOptions?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions;
    /**
    * stateful_rule_group_reference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_reference NetworkfirewallFirewallPolicy#stateful_rule_group_reference}
    */
    readonly statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[] | cdktf.IResolvable;
    /**
    * stateless_custom_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_action NetworkfirewallFirewallPolicy#stateless_custom_action}
    */
    readonly statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[] | cdktf.IResolvable;
    /**
    * stateless_rule_group_reference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_reference NetworkfirewallFirewallPolicy#stateless_rule_group_reference}
    */
    readonly statelessRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[] | cdktf.IResolvable;
}
export declare function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyOutputReference | NetworkfirewallFirewallPolicyFirewallPolicy): any;
export declare function networkfirewallFirewallPolicyFirewallPolicyToHclTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyOutputReference | NetworkfirewallFirewallPolicyFirewallPolicy): any;
export declare class NetworkfirewallFirewallPolicyFirewallPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallFirewallPolicyFirewallPolicy | undefined;
    set internalValue(value: NetworkfirewallFirewallPolicyFirewallPolicy | undefined);
    private _statefulDefaultActions?;
    get statefulDefaultActions(): string[];
    set statefulDefaultActions(value: string[]);
    resetStatefulDefaultActions(): void;
    get statefulDefaultActionsInput(): string[] | undefined;
    private _statelessDefaultActions?;
    get statelessDefaultActions(): string[];
    set statelessDefaultActions(value: string[]);
    get statelessDefaultActionsInput(): string[] | undefined;
    private _statelessFragmentDefaultActions?;
    get statelessFragmentDefaultActions(): string[];
    set statelessFragmentDefaultActions(value: string[]);
    get statelessFragmentDefaultActionsInput(): string[] | undefined;
    private _tlsInspectionConfigurationArn?;
    get tlsInspectionConfigurationArn(): string;
    set tlsInspectionConfigurationArn(value: string);
    resetTlsInspectionConfigurationArn(): void;
    get tlsInspectionConfigurationArnInput(): string | undefined;
    private _policyVariables;
    get policyVariables(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference;
    putPolicyVariables(value: NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables): void;
    resetPolicyVariables(): void;
    get policyVariablesInput(): NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables | undefined;
    private _statefulEngineOptions;
    get statefulEngineOptions(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference;
    putStatefulEngineOptions(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions): void;
    resetStatefulEngineOptions(): void;
    get statefulEngineOptionsInput(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions | undefined;
    private _statefulRuleGroupReference;
    get statefulRuleGroupReference(): NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceList;
    putStatefulRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[] | cdktf.IResolvable): void;
    resetStatefulRuleGroupReference(): void;
    get statefulRuleGroupReferenceInput(): cdktf.IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[] | undefined;
    private _statelessCustomAction;
    get statelessCustomAction(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionList;
    putStatelessCustomAction(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[] | cdktf.IResolvable): void;
    resetStatelessCustomAction(): void;
    get statelessCustomActionInput(): cdktf.IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[] | undefined;
    private _statelessRuleGroupReference;
    get statelessRuleGroupReference(): NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceList;
    putStatelessRuleGroupReference(value: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[] | cdktf.IResolvable): void;
    resetStatelessRuleGroupReference(): void;
    get statelessRuleGroupReferenceInput(): cdktf.IResolvable | NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy}
*/
export declare class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkfirewall_firewall_policy";
    /**
    * Generates CDKTF code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkfirewallFirewallPolicy to import
    * @param importFromId The id of the existing NetworkfirewallFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkfirewallFirewallPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_firewall_policy aws_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallFirewallPolicyConfig);
    get arn(): string;
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
    private _name?;
    get name(): string;
    set name(value: string);
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
    private _encryptionConfiguration;
    get encryptionConfiguration(): NetworkfirewallFirewallPolicyEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: NetworkfirewallFirewallPolicyEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): NetworkfirewallFirewallPolicyEncryptionConfiguration | undefined;
    private _firewallPolicy;
    get firewallPolicy(): NetworkfirewallFirewallPolicyFirewallPolicyOutputReference;
    putFirewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy): void;
    get firewallPolicyInput(): NetworkfirewallFirewallPolicyFirewallPolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
