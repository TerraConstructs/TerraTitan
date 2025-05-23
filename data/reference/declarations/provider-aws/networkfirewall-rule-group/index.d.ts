/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#capacity NetworkfirewallRuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#description NetworkfirewallRuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#id NetworkfirewallRuleGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#name NetworkfirewallRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rules NetworkfirewallRuleGroup#rules}
    */
    readonly rules?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#tags NetworkfirewallRuleGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#tags_all NetworkfirewallRuleGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#type NetworkfirewallRuleGroup#type}
    */
    readonly type: string;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#encryption_configuration NetworkfirewallRuleGroup#encryption_configuration}
    */
    readonly encryptionConfiguration?: NetworkfirewallRuleGroupEncryptionConfiguration;
    /**
    * rule_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rule_group NetworkfirewallRuleGroup#rule_group}
    */
    readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup;
}
export interface NetworkfirewallRuleGroupEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#key_id NetworkfirewallRuleGroup#key_id}
    */
    readonly keyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#type NetworkfirewallRuleGroup#type}
    */
    readonly type: string;
}
export declare function networkfirewallRuleGroupEncryptionConfigurationToTerraform(struct?: NetworkfirewallRuleGroupEncryptionConfigurationOutputReference | NetworkfirewallRuleGroupEncryptionConfiguration): any;
export declare function networkfirewallRuleGroupEncryptionConfigurationToHclTerraform(struct?: NetworkfirewallRuleGroupEncryptionConfigurationOutputReference | NetworkfirewallRuleGroupEncryptionConfiguration): any;
export declare class NetworkfirewallRuleGroupEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupEncryptionConfiguration | undefined;
    set internalValue(value: NetworkfirewallRuleGroupEncryptionConfiguration | undefined);
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
export interface NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#reference_arn NetworkfirewallRuleGroup#reference_arn}
    */
    readonly referenceArn: string;
}
export declare function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference | cdktf.IResolvable | undefined);
    private _referenceArn?;
    get referenceArn(): string;
    set referenceArn(value: string);
    get referenceArnInput(): string | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * ip_set_reference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#ip_set_reference NetworkfirewallRuleGroup#ip_set_reference}
    */
    readonly ipSetReference: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference[] | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _ipSetReference;
    get ipSetReference(): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReferenceList;
    putIpSetReference(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference[] | cdktf.IResolvable): void;
    get ipSetReferenceInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesIpSetReference[] | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupReferenceSets {
    /**
    * ip_set_references block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#ip_set_references NetworkfirewallRuleGroup#ip_set_references}
    */
    readonly ipSetReferences?: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences[] | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupReferenceSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference | NetworkfirewallRuleGroupRuleGroupReferenceSets): any;
export declare function networkfirewallRuleGroupRuleGroupReferenceSetsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference | NetworkfirewallRuleGroupRuleGroupReferenceSets): any;
export declare class NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupReferenceSets | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupReferenceSets | undefined);
    private _ipSetReferences;
    get ipSetReferences(): NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferencesList;
    putIpSetReferences(value: NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences[] | cdktf.IResolvable): void;
    resetIpSetReferences(): void;
    get ipSetReferencesInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupReferenceSetsIpSetReferences[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any;
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined);
    private _definition?;
    get definition(): string[];
    set definition(value: string[]);
    get definitionInput(): string[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * ip_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#ip_set NetworkfirewallRuleGroup#ip_set}
    */
    readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet;
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _ipSet;
    get ipSet(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetOutputReference;
    putIpSet(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): void;
    get ipSetInput(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any;
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined);
    private _definition?;
    get definition(): string[];
    set definition(value: string[]);
    get definitionInput(): string[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * port_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#port_set NetworkfirewallRuleGroup#port_set}
    */
    readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet;
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _portSet;
    get portSet(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetOutputReference;
    putPortSet(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): void;
    get portSetInput(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
    /**
    * ip_sets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#ip_sets NetworkfirewallRuleGroup#ip_sets}
    */
    readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | cdktf.IResolvable;
    /**
    * port_sets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#port_sets NetworkfirewallRuleGroup#port_sets}
    */
    readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariables): any;
export declare function networkfirewallRuleGroupRuleGroupRuleVariablesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference | NetworkfirewallRuleGroupRuleGroupRuleVariables): any;
export declare class NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined);
    private _ipSets;
    get ipSets(): NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsList;
    putIpSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | cdktf.IResolvable): void;
    resetIpSets(): void;
    get ipSetsInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[] | undefined;
    private _portSets;
    get portSets(): NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsList;
    putPortSets(value: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | cdktf.IResolvable): void;
    resetPortSets(): void;
    get portSetsInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}
    */
    readonly generatedRulesType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#target_types NetworkfirewallRuleGroup#target_types}
    */
    readonly targetTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#targets NetworkfirewallRuleGroup#targets}
    */
    readonly targets: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct | undefined);
    private _generatedRulesType?;
    get generatedRulesType(): string;
    set generatedRulesType(value: string);
    get generatedRulesTypeInput(): string | undefined;
    private _targetTypes?;
    get targetTypes(): string[];
    set targetTypes(value: string[]);
    get targetTypesInput(): string[] | undefined;
    private _targets?;
    get targets(): string[];
    set targets(value: string[]);
    get targetsInput(): string[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#direction NetworkfirewallRuleGroup#direction}
    */
    readonly direction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#protocol NetworkfirewallRuleGroup#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#source NetworkfirewallRuleGroup#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
    private _destinationPort?;
    get destinationPort(): string;
    set destinationPort(value: string);
    get destinationPortInput(): string | undefined;
    private _direction?;
    get direction(): string;
    set direction(value: string);
    get directionInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _sourcePort?;
    get sourcePort(): string;
    set sourcePort(value: string);
    get sourcePortInput(): string | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#keyword NetworkfirewallRuleGroup#keyword}
    */
    readonly keyword: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#settings NetworkfirewallRuleGroup#settings}
    */
    readonly settings?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption | cdktf.IResolvable | undefined);
    private _keyword?;
    get keyword(): string;
    set keyword(value: string);
    get keywordInput(): string | undefined;
    private _settings?;
    get settings(): string[];
    set settings(value: string[]);
    resetSettings(): void;
    get settingsInput(): string[] | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#action NetworkfirewallRuleGroup#action}
    */
    readonly action: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#header NetworkfirewallRuleGroup#header}
    */
    readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader;
    /**
    * rule_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rule_option NetworkfirewallRuleGroup#rule_option}
    */
    readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[] | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _header;
    get header(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderOutputReference;
    putHeader(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): void;
    get headerInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader | undefined;
    private _ruleOption;
    get ruleOption(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionList;
    putRuleOption(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[] | cdktf.IResolvable): void;
    get ruleOptionInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[] | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#value NetworkfirewallRuleGroup#value}
    */
    readonly value: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#dimension NetworkfirewallRuleGroup#dimension}
    */
    readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined);
    private _dimension;
    get dimension(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionList;
    putDimension(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[] | cdktf.IResolvable): void;
    get dimensionInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
    /**
    * publish_metric_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
    */
    readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined);
    private _publishMetricAction;
    get publishMetricAction(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionOutputReference;
    putPublishMetricAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): void;
    get publishMetricActionInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#action_name NetworkfirewallRuleGroup#action_name}
    */
    readonly actionName: string;
    /**
    * action_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#action_definition NetworkfirewallRuleGroup#action_definition}
    */
    readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction | cdktf.IResolvable | undefined);
    private _actionName?;
    get actionName(): string;
    set actionName(value: string);
    get actionNameInput(): string | undefined;
    private _actionDefinition;
    get actionDefinition(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionOutputReference;
    putActionDefinition(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): void;
    get actionDefinitionInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination | cdktf.IResolvable | undefined);
    private _addressDefinition?;
    get addressDefinition(): string;
    set addressDefinition(value: string);
    get addressDefinitionInput(): string | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort | cdktf.IResolvable | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource | cdktf.IResolvable | undefined);
    private _addressDefinition?;
    get addressDefinition(): string;
    set addressDefinition(value: string);
    get addressDefinitionInput(): string | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort | cdktf.IResolvable | undefined);
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    get fromPortInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#flags NetworkfirewallRuleGroup#flags}
    */
    readonly flags: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#masks NetworkfirewallRuleGroup#masks}
    */
    readonly masks?: string[];
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag | cdktf.IResolvable | undefined);
    private _flags?;
    get flags(): string[];
    set flags(value: string[]);
    get flagsInput(): string[] | undefined;
    private _masks?;
    get masks(): string[];
    set masks(value: string[]);
    resetMasks(): void;
    get masksInput(): string[] | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#protocols NetworkfirewallRuleGroup#protocols}
    */
    readonly protocols?: number[];
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | cdktf.IResolvable;
    /**
    * destination_port block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | cdktf.IResolvable;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#source NetworkfirewallRuleGroup#source}
    */
    readonly source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | cdktf.IResolvable;
    /**
    * source_port block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | cdktf.IResolvable;
    /**
    * tcp_flag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#tcp_flag NetworkfirewallRuleGroup#tcp_flag}
    */
    readonly tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined);
    private _protocols?;
    get protocols(): number[];
    set protocols(value: number[]);
    resetProtocols(): void;
    get protocolsInput(): number[] | undefined;
    private _destination;
    get destination(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationList;
    putDestination(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | cdktf.IResolvable): void;
    resetDestination(): void;
    get destinationInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[] | undefined;
    private _destinationPort;
    get destinationPort(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortList;
    putDestinationPort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | cdktf.IResolvable): void;
    resetDestinationPort(): void;
    get destinationPortInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[] | undefined;
    private _source;
    get source(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceList;
    putSource(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | cdktf.IResolvable): void;
    resetSource(): void;
    get sourceInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[] | undefined;
    private _sourcePort;
    get sourcePort(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortList;
    putSourcePort(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | cdktf.IResolvable): void;
    resetSourcePort(): void;
    get sourcePortInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[] | undefined;
    private _tcpFlag;
    get tcpFlag(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagList;
    putTcpFlag(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | cdktf.IResolvable): void;
    resetTcpFlag(): void;
    get tcpFlagInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#actions NetworkfirewallRuleGroup#actions}
    */
    readonly actions: string[];
    /**
    * match_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#match_attributes NetworkfirewallRuleGroup#match_attributes}
    */
    readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined);
    private _actions?;
    get actions(): string[];
    set actions(value: string[]);
    get actionsInput(): string[] | undefined;
    private _matchAttributes;
    get matchAttributes(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesOutputReference;
    putMatchAttributes(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): void;
    get matchAttributesInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#priority NetworkfirewallRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * rule_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rule_definition NetworkfirewallRuleGroup#rule_definition}
    */
    readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule | cdktf.IResolvable): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule | cdktf.IResolvable): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule | cdktf.IResolvable | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _ruleDefinition;
    get ruleDefinition(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionOutputReference;
    putRuleDefinition(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): void;
    get ruleDefinitionInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition | undefined;
}
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleOutputReference;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    /**
    * custom_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#custom_action NetworkfirewallRuleGroup#custom_action}
    */
    readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | cdktf.IResolvable;
    /**
    * stateless_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#stateless_rule NetworkfirewallRuleGroup#stateless_rule}
    */
    readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[] | cdktf.IResolvable;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined);
    private _customAction;
    get customAction(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionList;
    putCustomAction(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | cdktf.IResolvable): void;
    resetCustomAction(): void;
    get customActionInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[] | undefined;
    private _statelessRule;
    get statelessRule(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleList;
    putStatelessRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[] | cdktf.IResolvable): void;
    get statelessRuleInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[] | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rules_string NetworkfirewallRuleGroup#rules_string}
    */
    readonly rulesString?: string;
    /**
    * rules_source_list block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
    */
    readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct;
    /**
    * stateful_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#stateful_rule NetworkfirewallRuleGroup#stateful_rule}
    */
    readonly statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | cdktf.IResolvable;
    /**
    * stateless_rules_and_custom_actions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
    */
    readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions;
}
export declare function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSource): any;
export declare function networkfirewallRuleGroupRuleGroupRulesSourceToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference | NetworkfirewallRuleGroupRuleGroupRulesSource): any;
export declare class NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupRulesSource | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupRulesSource | undefined);
    private _rulesString?;
    get rulesString(): string;
    set rulesString(value: string);
    resetRulesString(): void;
    get rulesStringInput(): string | undefined;
    private _rulesSourceList;
    get rulesSourceList(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStructOutputReference;
    putRulesSourceList(value: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct): void;
    resetRulesSourceList(): void;
    get rulesSourceListInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListStruct | undefined;
    private _statefulRule;
    get statefulRule(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleList;
    putStatefulRule(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | cdktf.IResolvable): void;
    resetStatefulRule(): void;
    get statefulRuleInput(): cdktf.IResolvable | NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[] | undefined;
    private _statelessRulesAndCustomActions;
    get statelessRulesAndCustomActions(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsOutputReference;
    putStatelessRulesAndCustomActions(value: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): void;
    resetStatelessRulesAndCustomActions(): void;
    get statelessRulesAndCustomActionsInput(): NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rule_order NetworkfirewallRuleGroup#rule_order}
    */
    readonly ruleOrder: string;
}
export declare function networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference | NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions): any;
export declare function networkfirewallRuleGroupRuleGroupStatefulRuleOptionsToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference | NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions): any;
export declare class NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | undefined);
    private _ruleOrder?;
    get ruleOrder(): string;
    set ruleOrder(value: string);
    get ruleOrderInput(): string | undefined;
}
export interface NetworkfirewallRuleGroupRuleGroup {
    /**
    * reference_sets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#reference_sets NetworkfirewallRuleGroup#reference_sets}
    */
    readonly referenceSets?: NetworkfirewallRuleGroupRuleGroupReferenceSets;
    /**
    * rule_variables block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rule_variables NetworkfirewallRuleGroup#rule_variables}
    */
    readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables;
    /**
    * rules_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#rules_source NetworkfirewallRuleGroup#rules_source}
    */
    readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource;
    /**
    * stateful_rule_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#stateful_rule_options NetworkfirewallRuleGroup#stateful_rule_options}
    */
    readonly statefulRuleOptions?: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions;
}
export declare function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupOutputReference | NetworkfirewallRuleGroupRuleGroup): any;
export declare function networkfirewallRuleGroupRuleGroupToHclTerraform(struct?: NetworkfirewallRuleGroupRuleGroupOutputReference | NetworkfirewallRuleGroupRuleGroup): any;
export declare class NetworkfirewallRuleGroupRuleGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkfirewallRuleGroupRuleGroup | undefined;
    set internalValue(value: NetworkfirewallRuleGroupRuleGroup | undefined);
    private _referenceSets;
    get referenceSets(): NetworkfirewallRuleGroupRuleGroupReferenceSetsOutputReference;
    putReferenceSets(value: NetworkfirewallRuleGroupRuleGroupReferenceSets): void;
    resetReferenceSets(): void;
    get referenceSetsInput(): NetworkfirewallRuleGroupRuleGroupReferenceSets | undefined;
    private _ruleVariables;
    get ruleVariables(): NetworkfirewallRuleGroupRuleGroupRuleVariablesOutputReference;
    putRuleVariables(value: NetworkfirewallRuleGroupRuleGroupRuleVariables): void;
    resetRuleVariables(): void;
    get ruleVariablesInput(): NetworkfirewallRuleGroupRuleGroupRuleVariables | undefined;
    private _rulesSource;
    get rulesSource(): NetworkfirewallRuleGroupRuleGroupRulesSourceOutputReference;
    putRulesSource(value: NetworkfirewallRuleGroupRuleGroupRulesSource): void;
    get rulesSourceInput(): NetworkfirewallRuleGroupRuleGroupRulesSource | undefined;
    private _statefulRuleOptions;
    get statefulRuleOptions(): NetworkfirewallRuleGroupRuleGroupStatefulRuleOptionsOutputReference;
    putStatefulRuleOptions(value: NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions): void;
    resetStatefulRuleOptions(): void;
    get statefulRuleOptionsInput(): NetworkfirewallRuleGroupRuleGroupStatefulRuleOptions | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group aws_networkfirewall_rule_group}
*/
export declare class NetworkfirewallRuleGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkfirewall_rule_group";
    /**
    * Generates CDKTF code for importing a NetworkfirewallRuleGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkfirewallRuleGroup to import
    * @param importFromId The id of the existing NetworkfirewallRuleGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkfirewallRuleGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkfirewall_rule_group aws_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallRuleGroupConfig
    */
    constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig);
    get arn(): string;
    private _capacity?;
    get capacity(): number;
    set capacity(value: number);
    get capacityInput(): number | undefined;
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
    private _rules?;
    get rules(): string;
    set rules(value: string);
    resetRules(): void;
    get rulesInput(): string | undefined;
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
    get typeInput(): string | undefined;
    get updateToken(): string;
    private _encryptionConfiguration;
    get encryptionConfiguration(): NetworkfirewallRuleGroupEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: NetworkfirewallRuleGroupEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): NetworkfirewallRuleGroupEncryptionConfiguration | undefined;
    private _ruleGroup;
    get ruleGroup(): NetworkfirewallRuleGroupRuleGroupOutputReference;
    putRuleGroup(value: NetworkfirewallRuleGroupRuleGroup): void;
    resetRuleGroup(): void;
    get ruleGroupInput(): NetworkfirewallRuleGroupRuleGroup | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
