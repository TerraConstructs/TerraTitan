/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#id DataAwsNetworkmanagerCoreNetworkPolicyDocument#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#version DataAwsNetworkmanagerCoreNetworkPolicyDocument#version}
    */
    readonly version?: string;
    /**
    * attachment_policies block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#attachment_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#attachment_policies}
    */
    readonly attachmentPolicies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable;
    /**
    * core_network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#core_network_configuration DataAwsNetworkmanagerCoreNetworkPolicyDocument#core_network_configuration}
    */
    readonly coreNetworkConfiguration: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable;
    /**
    * network_function_groups block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}
    */
    readonly networkFunctionGroups?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktf.IResolvable;
    /**
    * segment_actions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#segment_actions DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment_actions}
    */
    readonly segmentActions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable;
    /**
    * segments block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
    */
    readonly segments: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#add_to_network_function_group DataAwsNetworkmanagerCoreNetworkPolicyDocument#add_to_network_function_group}
    */
    readonly addToNetworkFunctionGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#association_method DataAwsNetworkmanagerCoreNetworkPolicyDocument#association_method}
    */
    readonly associationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#require_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_acceptance}
    */
    readonly requireAcceptance?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
    */
    readonly segment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#tag_value_of_key DataAwsNetworkmanagerCoreNetworkPolicyDocument#tag_value_of_key}
    */
    readonly tagValueOfKey?: string;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined);
    private _addToNetworkFunctionGroup?;
    get addToNetworkFunctionGroup(): string;
    set addToNetworkFunctionGroup(value: string);
    resetAddToNetworkFunctionGroup(): void;
    get addToNetworkFunctionGroupInput(): string | undefined;
    private _associationMethod?;
    get associationMethod(): string;
    set associationMethod(value: string);
    resetAssociationMethod(): void;
    get associationMethodInput(): string | undefined;
    private _requireAcceptance?;
    get requireAcceptance(): boolean | cdktf.IResolvable;
    set requireAcceptance(value: boolean | cdktf.IResolvable);
    resetRequireAcceptance(): void;
    get requireAcceptanceInput(): boolean | cdktf.IResolvable | undefined;
    private _segment?;
    get segment(): string;
    set segment(value: string);
    resetSegment(): void;
    get segmentInput(): string | undefined;
    private _tagValueOfKey?;
    get tagValueOfKey(): string;
    set tagValueOfKey(value: string);
    resetTagValueOfKey(): void;
    get tagValueOfKeyInput(): string | undefined;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#key DataAwsNetworkmanagerCoreNetworkPolicyDocument#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#operator DataAwsNetworkmanagerCoreNetworkPolicyDocument#operator}
    */
    readonly operator?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
    */
    readonly value?: string;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _operator?;
    get operator(): string;
    set operator(value: string);
    resetOperator(): void;
    get operatorInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsOutputReference;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}
    */
    readonly conditionLogic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
    */
    readonly action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction;
    /**
    * conditions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#conditions}
    */
    readonly conditions: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktf.IResolvable;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable | undefined);
    private _conditionLogic?;
    get conditionLogic(): string;
    set conditionLogic(value: string);
    resetConditionLogic(): void;
    get conditionLogicInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _ruleNumber?;
    get ruleNumber(): number;
    set ruleNumber(value: number);
    get ruleNumberInput(): number | undefined;
    private _action;
    get action(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference;
    putAction(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): void;
    get actionInput(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined;
    private _conditions;
    get conditions(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsList;
    putConditions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktf.IResolvable): void;
    get conditionsInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesOutputReference;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#asn DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn}
    */
    readonly asn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
    */
    readonly insideCidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#location DataAwsNetworkmanagerCoreNetworkPolicyDocument#location}
    */
    readonly location: string;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable | undefined);
    private _asn?;
    get asn(): string;
    set asn(value: string);
    resetAsn(): void;
    get asnInput(): string | undefined;
    private _insideCidrBlocks?;
    get insideCidrBlocks(): string[];
    set insideCidrBlocks(value: string[]);
    resetInsideCidrBlocks(): void;
    get insideCidrBlocksInput(): string[] | undefined;
    private _location?;
    get location(): string;
    set location(value: string);
    get locationInput(): string | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsOutputReference;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#asn_ranges DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn_ranges}
    */
    readonly asnRanges: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
    */
    readonly insideCidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#vpn_ecmp_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#vpn_ecmp_support}
    */
    readonly vpnEcmpSupport?: boolean | cdktf.IResolvable;
    /**
    * edge_locations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
    */
    readonly edgeLocations: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktf.IResolvable;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable | undefined);
    private _asnRanges?;
    get asnRanges(): string[];
    set asnRanges(value: string[]);
    get asnRangesInput(): string[] | undefined;
    private _insideCidrBlocks?;
    get insideCidrBlocks(): string[];
    set insideCidrBlocks(value: string[]);
    resetInsideCidrBlocks(): void;
    get insideCidrBlocksInput(): string[] | undefined;
    private _vpnEcmpSupport?;
    get vpnEcmpSupport(): boolean | cdktf.IResolvable;
    set vpnEcmpSupport(value: boolean | cdktf.IResolvable);
    resetVpnEcmpSupport(): void;
    get vpnEcmpSupportInput(): boolean | cdktf.IResolvable | undefined;
    private _edgeLocations;
    get edgeLocations(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsList;
    putEdgeLocations(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktf.IResolvable): void;
    get edgeLocationsInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationOutputReference;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
    */
    readonly requireAttachmentAcceptance: boolean | cdktf.IResolvable;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _requireAttachmentAcceptance?;
    get requireAttachmentAcceptance(): boolean | cdktf.IResolvable;
    set requireAttachmentAcceptance(value: boolean | cdktf.IResolvable);
    get requireAttachmentAcceptanceInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsOutputReference;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#edge_sets DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_sets}
    */
    readonly edgeSets?: string[][] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge}
    */
    readonly useEdge?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#use_edge_location DataAwsNetworkmanagerCoreNetworkPolicyDocument#use_edge_location}
    */
    readonly useEdgeLocation?: string;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride | cdktf.IResolvable | undefined);
    private _edgeSets?;
    get edgeSets(): string[][] | cdktf.IResolvable;
    set edgeSets(value: string[][] | cdktf.IResolvable);
    resetEdgeSets(): void;
    get edgeSetsInput(): cdktf.IResolvable | string[][] | undefined;
    private _useEdge?;
    get useEdge(): string;
    set useEdge(value: string);
    resetUseEdge(): void;
    get useEdgeInput(): string | undefined;
    private _useEdgeLocation?;
    get useEdgeLocation(): string;
    set useEdgeLocation(value: string);
    resetUseEdgeLocation(): void;
    get useEdgeLocationInput(): string | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideOutputReference;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#network_function_groups DataAwsNetworkmanagerCoreNetworkPolicyDocument#network_function_groups}
    */
    readonly networkFunctionGroups?: string[];
    /**
    * with_edge_override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#with_edge_override DataAwsNetworkmanagerCoreNetworkPolicyDocument#with_edge_override}
    */
    readonly withEdgeOverride?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktf.IResolvable;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia | undefined);
    private _networkFunctionGroups?;
    get networkFunctionGroups(): string[];
    set networkFunctionGroups(value: string[]);
    resetNetworkFunctionGroups(): void;
    get networkFunctionGroupsInput(): string[] | undefined;
    private _withEdgeOverride;
    get withEdgeOverride(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverrideList;
    putWithEdgeOverride(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | cdktf.IResolvable): void;
    resetWithEdgeOverride(): void;
    get withEdgeOverrideInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaWithEdgeOverride[] | undefined;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
    */
    readonly segments?: string[];
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo | undefined);
    private _segments?;
    get segments(): string[];
    set segments(value: string[]);
    resetSegments(): void;
    get segmentsInput(): string[] | undefined;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#destination_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#destination_cidr_blocks}
    */
    readonly destinationCidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#destinations DataAwsNetworkmanagerCoreNetworkPolicyDocument#destinations}
    */
    readonly destinations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#mode DataAwsNetworkmanagerCoreNetworkPolicyDocument#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
    */
    readonly segment: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#share_with DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with}
    */
    readonly shareWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#share_with_except DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with_except}
    */
    readonly shareWithExcept?: string[];
    /**
    * via block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#via DataAwsNetworkmanagerCoreNetworkPolicyDocument#via}
    */
    readonly via?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia;
    /**
    * when_sent_to block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#when_sent_to DataAwsNetworkmanagerCoreNetworkPolicyDocument#when_sent_to}
    */
    readonly whenSentTo?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _destinationCidrBlocks?;
    get destinationCidrBlocks(): string[];
    set destinationCidrBlocks(value: string[]);
    resetDestinationCidrBlocks(): void;
    get destinationCidrBlocksInput(): string[] | undefined;
    private _destinations?;
    get destinations(): string[];
    set destinations(value: string[]);
    resetDestinations(): void;
    get destinationsInput(): string[] | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _segment?;
    get segment(): string;
    set segment(value: string);
    get segmentInput(): string | undefined;
    private _shareWith?;
    get shareWith(): string[];
    set shareWith(value: string[]);
    resetShareWith(): void;
    get shareWithInput(): string[] | undefined;
    private _shareWithExcept?;
    get shareWithExcept(): string[];
    set shareWithExcept(value: string[]);
    resetShareWithExcept(): void;
    get shareWithExceptInput(): string[] | undefined;
    private _via;
    get via(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsViaOutputReference;
    putVia(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia): void;
    resetVia(): void;
    get viaInput(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsVia | undefined;
    private _whenSentTo;
    get whenSentTo(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentToOutputReference;
    putWhenSentTo(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo): void;
    resetWhenSentTo(): void;
    get whenSentToInput(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsWhenSentTo | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsOutputReference;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#allow_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#allow_filter}
    */
    readonly allowFilter?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#deny_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#deny_filter}
    */
    readonly denyFilter?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
    */
    readonly edgeLocations?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#isolate_attachments DataAwsNetworkmanagerCoreNetworkPolicyDocument#isolate_attachments}
    */
    readonly isolateAttachments?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
    */
    readonly requireAttachmentAcceptance?: boolean | cdktf.IResolvable;
}
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable): any;
export declare function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToHclTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable): any;
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable | undefined);
    private _allowFilter?;
    get allowFilter(): string[];
    set allowFilter(value: string[]);
    resetAllowFilter(): void;
    get allowFilterInput(): string[] | undefined;
    private _denyFilter?;
    get denyFilter(): string[];
    set denyFilter(value: string[]);
    resetDenyFilter(): void;
    get denyFilterInput(): string[] | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _edgeLocations?;
    get edgeLocations(): string[];
    set edgeLocations(value: string[]);
    resetEdgeLocations(): void;
    get edgeLocationsInput(): string[] | undefined;
    private _isolateAttachments?;
    get isolateAttachments(): boolean | cdktf.IResolvable;
    set isolateAttachments(value: boolean | cdktf.IResolvable);
    resetIsolateAttachments(): void;
    get isolateAttachmentsInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _requireAttachmentAcceptance?;
    get requireAttachmentAcceptance(): boolean | cdktf.IResolvable;
    set requireAttachmentAcceptance(value: boolean | cdktf.IResolvable);
    resetRequireAttachmentAcceptance(): void;
    get requireAttachmentAcceptanceInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document}
*/
export declare class DataAwsNetworkmanagerCoreNetworkPolicyDocument extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_networkmanager_core_network_policy_document";
    /**
    * Generates CDKTF code for importing a DataAwsNetworkmanagerCoreNetworkPolicyDocument resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import
    * @param importFromId The id of the existing DataAwsNetworkmanagerCoreNetworkPolicyDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsNetworkmanagerCoreNetworkPolicyDocument to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get json(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _attachmentPolicies;
    get attachmentPolicies(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesList;
    putAttachmentPolicies(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable): void;
    resetAttachmentPolicies(): void;
    get attachmentPoliciesInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | undefined;
    private _coreNetworkConfiguration;
    get coreNetworkConfiguration(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationList;
    putCoreNetworkConfiguration(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable): void;
    get coreNetworkConfigurationInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | undefined;
    private _networkFunctionGroups;
    get networkFunctionGroups(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroupsList;
    putNetworkFunctionGroups(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | cdktf.IResolvable): void;
    resetNetworkFunctionGroups(): void;
    get networkFunctionGroupsInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentNetworkFunctionGroups[] | undefined;
    private _segmentActions;
    get segmentActions(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsList;
    putSegmentActions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable): void;
    resetSegmentActions(): void;
    get segmentActionsInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | undefined;
    private _segments;
    get segments(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsList;
    putSegments(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable): void;
    get segmentsInput(): cdktf.IResolvable | DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
