/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FmsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#delete_all_policy_resources FmsPolicy#delete_all_policy_resources}
    */
    readonly deleteAllPolicyResources?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#delete_unused_fm_managed_resources FmsPolicy#delete_unused_fm_managed_resources}
    */
    readonly deleteUnusedFmManagedResources?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#description FmsPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#exclude_resource_tags FmsPolicy#exclude_resource_tags}
    */
    readonly excludeResourceTags: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#id FmsPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#name FmsPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#remediation_enabled FmsPolicy#remediation_enabled}
    */
    readonly remediationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#resource_set_ids FmsPolicy#resource_set_ids}
    */
    readonly resourceSetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#resource_tags FmsPolicy#resource_tags}
    */
    readonly resourceTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#resource_type FmsPolicy#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#resource_type_list FmsPolicy#resource_type_list}
    */
    readonly resourceTypeList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#tags FmsPolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#tags_all FmsPolicy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * exclude_map block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#exclude_map FmsPolicy#exclude_map}
    */
    readonly excludeMap?: FmsPolicyExcludeMap;
    /**
    * include_map block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#include_map FmsPolicy#include_map}
    */
    readonly includeMap?: FmsPolicyIncludeMap;
    /**
    * security_service_policy_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#security_service_policy_data FmsPolicy#security_service_policy_data}
    */
    readonly securityServicePolicyData: FmsPolicySecurityServicePolicyData;
}
export interface FmsPolicyExcludeMap {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#account FmsPolicy#account}
    */
    readonly account?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}
    */
    readonly orgunit?: string[];
}
export declare function fmsPolicyExcludeMapToTerraform(struct?: FmsPolicyExcludeMapOutputReference | FmsPolicyExcludeMap): any;
export declare function fmsPolicyExcludeMapToHclTerraform(struct?: FmsPolicyExcludeMapOutputReference | FmsPolicyExcludeMap): any;
export declare class FmsPolicyExcludeMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicyExcludeMap | undefined;
    set internalValue(value: FmsPolicyExcludeMap | undefined);
    private _account?;
    get account(): string[];
    set account(value: string[]);
    resetAccount(): void;
    get accountInput(): string[] | undefined;
    private _orgunit?;
    get orgunit(): string[];
    set orgunit(value: string[]);
    resetOrgunit(): void;
    get orgunitInput(): string[] | undefined;
}
export interface FmsPolicyIncludeMap {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#account FmsPolicy#account}
    */
    readonly account?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#orgunit FmsPolicy#orgunit}
    */
    readonly orgunit?: string[];
}
export declare function fmsPolicyIncludeMapToTerraform(struct?: FmsPolicyIncludeMapOutputReference | FmsPolicyIncludeMap): any;
export declare function fmsPolicyIncludeMapToHclTerraform(struct?: FmsPolicyIncludeMapOutputReference | FmsPolicyIncludeMap): any;
export declare class FmsPolicyIncludeMapOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicyIncludeMap | undefined;
    set internalValue(value: FmsPolicyIncludeMap | undefined);
    private _account?;
    get account(): string[];
    set account(value: string[]);
    resetAccount(): void;
    get accountInput(): string[] | undefined;
    private _orgunit?;
    get orgunit(): string[];
    set orgunit(value: string[]);
    resetOrgunit(): void;
    get orgunitInput(): string[] | undefined;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#code FmsPolicy#code}
    */
    readonly code?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#type FmsPolicy#type}
    */
    readonly type?: number;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode | cdktf.IResolvable): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode | cdktf.IResolvable): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode | cdktf.IResolvable | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode | cdktf.IResolvable | undefined);
    private _code?;
    get code(): number;
    set code(value: number);
    resetCode(): void;
    get codeInput(): number | undefined;
    private _type?;
    get type(): number;
    set type(value: number);
    resetType(): void;
    get typeInput(): number | undefined;
}
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeOutputReference;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#from FmsPolicy#from}
    */
    readonly from?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#to FmsPolicy#to}
    */
    readonly to?: number;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange | cdktf.IResolvable): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange | cdktf.IResolvable): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange | cdktf.IResolvable | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange | cdktf.IResolvable | undefined);
    private _from?;
    get from(): number;
    set from(value: number);
    resetFrom(): void;
    get fromInput(): number | undefined;
    private _to?;
    get to(): number;
    set to(value: number);
    resetTo(): void;
    get toInput(): number | undefined;
}
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeOutputReference;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#cidr_block FmsPolicy#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#egress FmsPolicy#egress}
    */
    readonly egress: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#ipv6_cidr_block FmsPolicy#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#protocol FmsPolicy#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#rule_action FmsPolicy#rule_action}
    */
    readonly ruleAction: string;
    /**
    * icmp_type_code block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#icmp_type_code FmsPolicy#icmp_type_code}
    */
    readonly icmpTypeCode?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode[] | cdktf.IResolvable;
    /**
    * port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#port_range FmsPolicy#port_range}
    */
    readonly portRange?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange[] | cdktf.IResolvable;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry | cdktf.IResolvable): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry | cdktf.IResolvable): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry | cdktf.IResolvable | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry | cdktf.IResolvable | undefined);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _egress?;
    get egress(): boolean | cdktf.IResolvable;
    set egress(value: boolean | cdktf.IResolvable);
    get egressInput(): boolean | cdktf.IResolvable | undefined;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _ruleAction?;
    get ruleAction(): string;
    set ruleAction(value: string);
    get ruleActionInput(): string | undefined;
    private _icmpTypeCode;
    get icmpTypeCode(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCodeList;
    putIcmpTypeCode(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode[] | cdktf.IResolvable): void;
    resetIcmpTypeCode(): void;
    get icmpTypeCodeInput(): cdktf.IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryIcmpTypeCode[] | undefined;
    private _portRange;
    get portRange(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRangeList;
    putPortRange(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange[] | cdktf.IResolvable): void;
    resetPortRange(): void;
    get portRangeInput(): cdktf.IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryPortRange[] | undefined;
}
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryOutputReference;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#code FmsPolicy#code}
    */
    readonly code?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#type FmsPolicy#type}
    */
    readonly type?: number;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode | cdktf.IResolvable): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode | cdktf.IResolvable): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode | cdktf.IResolvable | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode | cdktf.IResolvable | undefined);
    private _code?;
    get code(): number;
    set code(value: number);
    resetCode(): void;
    get codeInput(): number | undefined;
    private _type?;
    get type(): number;
    set type(value: number);
    resetType(): void;
    get typeInput(): number | undefined;
}
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeOutputReference;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#from FmsPolicy#from}
    */
    readonly from?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#to FmsPolicy#to}
    */
    readonly to?: number;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange | cdktf.IResolvable): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange | cdktf.IResolvable): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange | cdktf.IResolvable | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange | cdktf.IResolvable | undefined);
    private _from?;
    get from(): number;
    set from(value: number);
    resetFrom(): void;
    get fromInput(): number | undefined;
    private _to?;
    get to(): number;
    set to(value: number);
    resetTo(): void;
    get toInput(): number | undefined;
}
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeOutputReference;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#cidr_block FmsPolicy#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#egress FmsPolicy#egress}
    */
    readonly egress: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#ipv6_cidr_block FmsPolicy#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#protocol FmsPolicy#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#rule_action FmsPolicy#rule_action}
    */
    readonly ruleAction: string;
    /**
    * icmp_type_code block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#icmp_type_code FmsPolicy#icmp_type_code}
    */
    readonly icmpTypeCode?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode[] | cdktf.IResolvable;
    /**
    * port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#port_range FmsPolicy#port_range}
    */
    readonly portRange?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange[] | cdktf.IResolvable;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry | cdktf.IResolvable): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry | cdktf.IResolvable): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry | cdktf.IResolvable | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry | cdktf.IResolvable | undefined);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _egress?;
    get egress(): boolean | cdktf.IResolvable;
    set egress(value: boolean | cdktf.IResolvable);
    get egressInput(): boolean | cdktf.IResolvable | undefined;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _ruleAction?;
    get ruleAction(): string;
    set ruleAction(value: string);
    get ruleActionInput(): string | undefined;
    private _icmpTypeCode;
    get icmpTypeCode(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCodeList;
    putIcmpTypeCode(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode[] | cdktf.IResolvable): void;
    resetIcmpTypeCode(): void;
    get icmpTypeCodeInput(): cdktf.IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryIcmpTypeCode[] | undefined;
    private _portRange;
    get portRange(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRangeList;
    putPortRange(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange[] | cdktf.IResolvable): void;
    resetPortRange(): void;
    get portRangeInput(): cdktf.IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryPortRange[] | undefined;
}
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryOutputReference;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#force_remediate_for_first_entries FmsPolicy#force_remediate_for_first_entries}
    */
    readonly forceRemediateForFirstEntries: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#force_remediate_for_last_entries FmsPolicy#force_remediate_for_last_entries}
    */
    readonly forceRemediateForLastEntries: boolean | cdktf.IResolvable;
    /**
    * first_entry block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#first_entry FmsPolicy#first_entry}
    */
    readonly firstEntry?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry[] | cdktf.IResolvable;
    /**
    * last_entry block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#last_entry FmsPolicy#last_entry}
    */
    readonly lastEntry?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry[] | cdktf.IResolvable;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet | undefined);
    private _forceRemediateForFirstEntries?;
    get forceRemediateForFirstEntries(): boolean | cdktf.IResolvable;
    set forceRemediateForFirstEntries(value: boolean | cdktf.IResolvable);
    get forceRemediateForFirstEntriesInput(): boolean | cdktf.IResolvable | undefined;
    private _forceRemediateForLastEntries?;
    get forceRemediateForLastEntries(): boolean | cdktf.IResolvable;
    set forceRemediateForLastEntries(value: boolean | cdktf.IResolvable);
    get forceRemediateForLastEntriesInput(): boolean | cdktf.IResolvable | undefined;
    private _firstEntry;
    get firstEntry(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntryList;
    putFirstEntry(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry[] | cdktf.IResolvable): void;
    resetFirstEntry(): void;
    get firstEntryInput(): cdktf.IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetFirstEntry[] | undefined;
    private _lastEntry;
    get lastEntry(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntryList;
    putLastEntry(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry[] | cdktf.IResolvable): void;
    resetLastEntry(): void;
    get lastEntryInput(): cdktf.IResolvable | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetLastEntry[] | undefined;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy {
    /**
    * network_acl_entry_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#network_acl_entry_set FmsPolicy#network_acl_entry_set}
    */
    readonly networkAclEntrySet?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy | undefined);
    private _networkAclEntrySet;
    get networkAclEntrySet(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySetOutputReference;
    putNetworkAclEntrySet(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet): void;
    resetNetworkAclEntrySet(): void;
    get networkAclEntrySetInput(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyNetworkAclEntrySet | undefined;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}
    */
    readonly firewallDeploymentModel?: string;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy | undefined);
    private _firewallDeploymentModel?;
    get firewallDeploymentModel(): string;
    set firewallDeploymentModel(value: string);
    resetFirewallDeploymentModel(): void;
    get firewallDeploymentModelInput(): string | undefined;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#firewall_deployment_model FmsPolicy#firewall_deployment_model}
    */
    readonly firewallDeploymentModel?: string;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference | FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy | undefined);
    private _firewallDeploymentModel?;
    get firewallDeploymentModel(): string;
    set firewallDeploymentModel(value: string);
    resetFirewallDeploymentModel(): void;
    get firewallDeploymentModelInput(): string | undefined;
}
export interface FmsPolicySecurityServicePolicyDataPolicyOption {
    /**
    * network_acl_common_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#network_acl_common_policy FmsPolicy#network_acl_common_policy}
    */
    readonly networkAclCommonPolicy?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy;
    /**
    * network_firewall_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#network_firewall_policy FmsPolicy#network_firewall_policy}
    */
    readonly networkFirewallPolicy?: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy;
    /**
    * third_party_firewall_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#third_party_firewall_policy FmsPolicy#third_party_firewall_policy}
    */
    readonly thirdPartyFirewallPolicy?: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy;
}
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionToTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference | FmsPolicySecurityServicePolicyDataPolicyOption): any;
export declare function fmsPolicySecurityServicePolicyDataPolicyOptionToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference | FmsPolicySecurityServicePolicyDataPolicyOption): any;
export declare class FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicySecurityServicePolicyDataPolicyOption | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyDataPolicyOption | undefined);
    private _networkAclCommonPolicy;
    get networkAclCommonPolicy(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicyOutputReference;
    putNetworkAclCommonPolicy(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy): void;
    resetNetworkAclCommonPolicy(): void;
    get networkAclCommonPolicyInput(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkAclCommonPolicy | undefined;
    private _networkFirewallPolicy;
    get networkFirewallPolicy(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicyOutputReference;
    putNetworkFirewallPolicy(value: FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy): void;
    resetNetworkFirewallPolicy(): void;
    get networkFirewallPolicyInput(): FmsPolicySecurityServicePolicyDataPolicyOptionNetworkFirewallPolicy | undefined;
    private _thirdPartyFirewallPolicy;
    get thirdPartyFirewallPolicy(): FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicyOutputReference;
    putThirdPartyFirewallPolicy(value: FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy): void;
    resetThirdPartyFirewallPolicy(): void;
    get thirdPartyFirewallPolicyInput(): FmsPolicySecurityServicePolicyDataPolicyOptionThirdPartyFirewallPolicy | undefined;
}
export interface FmsPolicySecurityServicePolicyData {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#managed_service_data FmsPolicy#managed_service_data}
    */
    readonly managedServiceData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#type FmsPolicy#type}
    */
    readonly type: string;
    /**
    * policy_option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#policy_option FmsPolicy#policy_option}
    */
    readonly policyOption?: FmsPolicySecurityServicePolicyDataPolicyOption;
}
export declare function fmsPolicySecurityServicePolicyDataToTerraform(struct?: FmsPolicySecurityServicePolicyDataOutputReference | FmsPolicySecurityServicePolicyData): any;
export declare function fmsPolicySecurityServicePolicyDataToHclTerraform(struct?: FmsPolicySecurityServicePolicyDataOutputReference | FmsPolicySecurityServicePolicyData): any;
export declare class FmsPolicySecurityServicePolicyDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsPolicySecurityServicePolicyData | undefined;
    set internalValue(value: FmsPolicySecurityServicePolicyData | undefined);
    private _managedServiceData?;
    get managedServiceData(): string;
    set managedServiceData(value: string);
    resetManagedServiceData(): void;
    get managedServiceDataInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _policyOption;
    get policyOption(): FmsPolicySecurityServicePolicyDataPolicyOptionOutputReference;
    putPolicyOption(value: FmsPolicySecurityServicePolicyDataPolicyOption): void;
    resetPolicyOption(): void;
    get policyOptionInput(): FmsPolicySecurityServicePolicyDataPolicyOption | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy aws_fms_policy}
*/
export declare class FmsPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fms_policy";
    /**
    * Generates CDKTF code for importing a FmsPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FmsPolicy to import
    * @param importFromId The id of the existing FmsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FmsPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_policy aws_fms_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsPolicyConfig
    */
    constructor(scope: Construct, id: string, config: FmsPolicyConfig);
    get arn(): string;
    private _deleteAllPolicyResources?;
    get deleteAllPolicyResources(): boolean | cdktf.IResolvable;
    set deleteAllPolicyResources(value: boolean | cdktf.IResolvable);
    resetDeleteAllPolicyResources(): void;
    get deleteAllPolicyResourcesInput(): boolean | cdktf.IResolvable | undefined;
    private _deleteUnusedFmManagedResources?;
    get deleteUnusedFmManagedResources(): boolean | cdktf.IResolvable;
    set deleteUnusedFmManagedResources(value: boolean | cdktf.IResolvable);
    resetDeleteUnusedFmManagedResources(): void;
    get deleteUnusedFmManagedResourcesInput(): boolean | cdktf.IResolvable | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _excludeResourceTags?;
    get excludeResourceTags(): boolean | cdktf.IResolvable;
    set excludeResourceTags(value: boolean | cdktf.IResolvable);
    get excludeResourceTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get policyUpdateToken(): string;
    private _remediationEnabled?;
    get remediationEnabled(): boolean | cdktf.IResolvable;
    set remediationEnabled(value: boolean | cdktf.IResolvable);
    resetRemediationEnabled(): void;
    get remediationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _resourceSetIds?;
    get resourceSetIds(): string[];
    set resourceSetIds(value: string[]);
    resetResourceSetIds(): void;
    get resourceSetIdsInput(): string[] | undefined;
    private _resourceTags?;
    get resourceTags(): {
        [key: string]: string;
    };
    set resourceTags(value: {
        [key: string]: string;
    });
    resetResourceTags(): void;
    get resourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    resetResourceType(): void;
    get resourceTypeInput(): string | undefined;
    private _resourceTypeList?;
    get resourceTypeList(): string[];
    set resourceTypeList(value: string[]);
    resetResourceTypeList(): void;
    get resourceTypeListInput(): string[] | undefined;
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
    private _excludeMap;
    get excludeMap(): FmsPolicyExcludeMapOutputReference;
    putExcludeMap(value: FmsPolicyExcludeMap): void;
    resetExcludeMap(): void;
    get excludeMapInput(): FmsPolicyExcludeMap | undefined;
    private _includeMap;
    get includeMap(): FmsPolicyIncludeMapOutputReference;
    putIncludeMap(value: FmsPolicyIncludeMap): void;
    resetIncludeMap(): void;
    get includeMapInput(): FmsPolicyIncludeMap | undefined;
    private _securityServicePolicyData;
    get securityServicePolicyData(): FmsPolicySecurityServicePolicyDataOutputReference;
    putSecurityServicePolicyData(value: FmsPolicySecurityServicePolicyData): void;
    get securityServicePolicyDataInput(): FmsPolicySecurityServicePolicyData | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
