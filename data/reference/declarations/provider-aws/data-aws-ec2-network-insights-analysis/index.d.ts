/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2NetworkInsightsAnalysisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis#id DataAwsEc2NetworkInsightsAnalysis#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis#network_insights_analysis_id DataAwsEc2NetworkInsightsAnalysis#network_insights_analysis_id}
    */
    readonly networkInsightsAnalysisId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis#tags DataAwsEc2NetworkInsightsAnalysis#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis#filter DataAwsEc2NetworkInsightsAnalysis#filter}
    */
    readonly filter?: DataAwsEc2NetworkInsightsAnalysisFilter[] | cdktf.IResolvable;
}
export interface DataAwsEc2NetworkInsightsAnalysisAlternatePathHints {
}
export declare function dataAwsEc2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisAlternatePathHints): any;
export declare function dataAwsEc2NetworkInsightsAnalysisAlternatePathHintsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisAlternatePathHints): any;
export declare class DataAwsEc2NetworkInsightsAnalysisAlternatePathHintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisAlternatePathHints | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisAlternatePathHints | undefined);
    get componentArn(): string;
    get componentId(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisAlternatePathHintsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisAlternatePathHintsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsAcl {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAclToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAcl): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAclToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAcl): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAclOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsAcl | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsAcl | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAclList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsAclOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRange {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRange): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRange): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRange | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsAclRule {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAclRule): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAclRuleToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAclRule): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsAclRule | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsAclRule | undefined);
    get cidr(): string;
    get egress(): cdktf.IResolvable;
    private _portRange;
    get portRange(): DataAwsEc2NetworkInsightsAnalysisExplanationsAclRulePortRangeList;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAclRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsAclRuleOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedTo {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedTo): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsAttachedToToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedTo): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedTo | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedTo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedToList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedToOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener | undefined);
    get instancePort(): number;
    get loadBalancerPort(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsComponent {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsComponent): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsComponentToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsComponent): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsComponent | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsComponentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsComponentOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGateway {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGateway): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGatewayToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGateway): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGateway | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGatewayList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGatewayOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsDestination {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsDestination): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsDestinationToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsDestination): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsDestination | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsDestination | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTable {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTable): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTableToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTable): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTable | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTableList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTableOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGateway {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGateway): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsInternetGatewayToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGateway): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGateway | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGatewayList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGatewayOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsNatGateway {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsNatGateway): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsNatGatewayToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsNatGateway): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsNatGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsNatGateway | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsNatGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsNatGatewayList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsNatGatewayOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterface {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterface): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterface): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterface | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterface | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsPortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsPortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsPortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsPortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsPortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsPortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsPortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStruct {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStructToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStruct): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStructToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStruct): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStruct | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStruct | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStructList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStructOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTable {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTable): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTable): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTable | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRoute {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRoute): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRouteToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRoute): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRoute | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRoute | undefined);
    get destinationCidr(): string;
    get destinationPrefixListId(): string;
    get egressOnlyInternetGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get origin(): string;
    get transitGatewayId(): string;
    get vpcPeeringConnectionId(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRouteOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroup {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroup): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroup): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroup | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroup | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRule | undefined);
    get cidr(): string;
    get direction(): string;
    private _portRange;
    get portRange(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeList;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroups {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroups): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroups): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroups | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroups | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsSubnet {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSubnet): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSubnetToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSubnet): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsSubnet | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsSubnet | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGateway {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGateway): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGateway): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGateway | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute | undefined);
    get attachmentId(): string;
    get destinationCidr(): string;
    get prefixListId(): string;
    get resourceId(): string;
    get resourceType(): string;
    get routeOrigin(): string;
    get state(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpoint {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpoint): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpointToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpoint): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpoint | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpoint | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpointList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpointOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnection | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnection {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnection): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnectionToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnection): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnection | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnection | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnectionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnectionOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGateway {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGateway): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsVpnGatewayToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGateway): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGateway | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGatewayList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGatewayOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisExplanations {
}
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanations): any;
export declare function dataAwsEc2NetworkInsightsAnalysisExplanationsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisExplanations): any;
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisExplanations | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisExplanations | undefined);
    private _acl;
    get acl(): DataAwsEc2NetworkInsightsAnalysisExplanationsAclList;
    private _aclRule;
    get aclRule(): DataAwsEc2NetworkInsightsAnalysisExplanationsAclRuleList;
    get address(): string;
    get addresses(): string[];
    private _attachedTo;
    get attachedTo(): DataAwsEc2NetworkInsightsAnalysisExplanationsAttachedToList;
    get availabilityZones(): string[];
    get cidrs(): string[];
    private _classicLoadBalancerListener;
    get classicLoadBalancerListener(): DataAwsEc2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerList;
    private _component;
    get component(): DataAwsEc2NetworkInsightsAnalysisExplanationsComponentList;
    private _customerGateway;
    get customerGateway(): DataAwsEc2NetworkInsightsAnalysisExplanationsCustomerGatewayList;
    private _destination;
    get destination(): DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationList;
    private _destinationVpc;
    get destinationVpc(): DataAwsEc2NetworkInsightsAnalysisExplanationsDestinationVpcList;
    get direction(): string;
    private _elasticLoadBalancerListener;
    get elasticLoadBalancerListener(): DataAwsEc2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerList;
    get explanationCode(): string;
    private _ingressRouteTable;
    get ingressRouteTable(): DataAwsEc2NetworkInsightsAnalysisExplanationsIngressRouteTableList;
    private _internetGateway;
    get internetGateway(): DataAwsEc2NetworkInsightsAnalysisExplanationsInternetGatewayList;
    get loadBalancerArn(): string;
    get loadBalancerListenerPort(): number;
    private _loadBalancerTargetGroup;
    get loadBalancerTargetGroup(): DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupList;
    private _loadBalancerTargetGroups;
    get loadBalancerTargetGroups(): DataAwsEc2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsList;
    get loadBalancerTargetPort(): number;
    get missingComponent(): string;
    private _natGateway;
    get natGateway(): DataAwsEc2NetworkInsightsAnalysisExplanationsNatGatewayList;
    private _networkInterface;
    get networkInterface(): DataAwsEc2NetworkInsightsAnalysisExplanationsNetworkInterfaceList;
    get packetField(): string;
    get port(): number;
    private _portRanges;
    get portRanges(): DataAwsEc2NetworkInsightsAnalysisExplanationsPortRangesList;
    private _prefixList;
    get prefixList(): DataAwsEc2NetworkInsightsAnalysisExplanationsPrefixListStructList;
    get protocols(): string[];
    private _routeTable;
    get routeTable(): DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableList;
    private _routeTableRoute;
    get routeTableRoute(): DataAwsEc2NetworkInsightsAnalysisExplanationsRouteTableRouteList;
    private _securityGroup;
    get securityGroup(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupList;
    private _securityGroupRule;
    get securityGroupRule(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupRuleList;
    private _securityGroups;
    get securityGroups(): DataAwsEc2NetworkInsightsAnalysisExplanationsSecurityGroupsList;
    private _sourceVpc;
    get sourceVpc(): DataAwsEc2NetworkInsightsAnalysisExplanationsSourceVpcList;
    get state(): string;
    private _subnet;
    get subnet(): DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetList;
    private _subnetRouteTable;
    get subnetRouteTable(): DataAwsEc2NetworkInsightsAnalysisExplanationsSubnetRouteTableList;
    private _transitGateway;
    get transitGateway(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayList;
    private _transitGatewayAttachment;
    get transitGatewayAttachment(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentList;
    private _transitGatewayRouteTable;
    get transitGatewayRouteTable(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableList;
    private _transitGatewayRouteTableRoute;
    get transitGatewayRouteTableRoute(): DataAwsEc2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteList;
    private _vpc;
    get vpc(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcList;
    private _vpcEndpoint;
    get vpcEndpoint(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcEndpointList;
    private _vpcPeeringConnection;
    get vpcPeeringConnection(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionList;
    private _vpnConnection;
    get vpnConnection(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpnConnectionList;
    private _vpnGateway;
    get vpnGateway(): DataAwsEc2NetworkInsightsAnalysisExplanationsVpnGatewayList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisExplanationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisExplanationsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRule {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRule): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRule): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRule | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRule | undefined);
    get cidr(): string;
    get egress(): cdktf.IResolvable;
    private _portRange;
    get portRange(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeList;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails | undefined);
    get additionalDetailType(): string;
    private _component;
    get component(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedTo {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedToToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedTo): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedToToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedTo): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedTo | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedTo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedToList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedToOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponent {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponent): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponentToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponent): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponent | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponentOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute | undefined);
    get destinationCidr(): string;
    get destinationPrefixListId(): string;
    get egressOnlyInternetGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get origin(): string;
    get transitGatewayId(): string;
    get vpcPeeringConnectionId(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule | undefined);
    get cidr(): string;
    get direction(): string;
    private _portRange;
    get portRange(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeList;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnet {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnet): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnetToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnet): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnet | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnet | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnetOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGateway {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGateway): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGateway): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGateway | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute | undefined);
    get attachmentId(): string;
    get destinationCidr(): string;
    get prefixListId(): string;
    get resourceId(): string;
    get resourceType(): string;
    get routeOrigin(): string;
    get state(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisForwardPathComponents {
}
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponents): any;
export declare function dataAwsEc2NetworkInsightsAnalysisForwardPathComponentsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisForwardPathComponents): any;
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponents | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisForwardPathComponents | undefined);
    private _aclRule;
    get aclRule(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAclRuleList;
    private _additionalDetails;
    get additionalDetails(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsList;
    private _attachedTo;
    get attachedTo(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsAttachedToList;
    private _component;
    get component(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsComponentList;
    private _destinationVpc;
    get destinationVpc(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcList;
    private _inboundHeader;
    get inboundHeader(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderList;
    private _outboundHeader;
    get outboundHeader(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderList;
    private _routeTableRoute;
    get routeTableRoute(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteList;
    private _securityGroupRule;
    get securityGroupRule(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleList;
    get sequenceNumber(): number;
    private _sourceVpc;
    get sourceVpc(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSourceVpcList;
    private _subnet;
    get subnet(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsSubnetList;
    private _transitGateway;
    get transitGateway(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayList;
    private _transitGatewayRouteTableRoute;
    get transitGatewayRouteTableRoute(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteList;
    private _vpc;
    get vpc(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsVpcList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRule {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRule): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRule): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRule | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRule | undefined);
    get cidr(): string;
    get egress(): cdktf.IResolvable;
    private _portRange;
    get portRange(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeList;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails | undefined);
    get additionalDetailType(): string;
    private _component;
    get component(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedTo {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedToToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedTo): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedToToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedTo): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedTo | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedTo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedToList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedToOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponent {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponent): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponentToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponent): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponent | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponentList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponentOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute | undefined);
    get destinationCidr(): string;
    get destinationPrefixListId(): string;
    get egressOnlyInternetGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get origin(): string;
    get transitGatewayId(): string;
    get vpcPeeringConnectionId(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule | undefined);
    get cidr(): string;
    get direction(): string;
    private _portRange;
    get portRange(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeList;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnet {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnet): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnetToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnet): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnet | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnet | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnetOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGateway {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGateway): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGateway): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGateway | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute | undefined);
    get attachmentId(): string;
    get destinationCidr(): string;
    get prefixListId(): string;
    get resourceId(): string;
    get resourceType(): string;
    get routeOrigin(): string;
    get state(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpc {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpc): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpcToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpc): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpc | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpcOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisReturnPathComponents {
}
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponents): any;
export declare function dataAwsEc2NetworkInsightsAnalysisReturnPathComponentsToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisReturnPathComponents): any;
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponents | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisReturnPathComponents | undefined);
    private _aclRule;
    get aclRule(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAclRuleList;
    private _additionalDetails;
    get additionalDetails(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsList;
    private _attachedTo;
    get attachedTo(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsAttachedToList;
    private _component;
    get component(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsComponentList;
    private _destinationVpc;
    get destinationVpc(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcList;
    private _inboundHeader;
    get inboundHeader(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderList;
    private _outboundHeader;
    get outboundHeader(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderList;
    private _routeTableRoute;
    get routeTableRoute(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteList;
    private _securityGroupRule;
    get securityGroupRule(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleList;
    get sequenceNumber(): number;
    private _sourceVpc;
    get sourceVpc(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSourceVpcList;
    private _subnet;
    get subnet(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsSubnetList;
    private _transitGateway;
    get transitGateway(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayList;
    private _transitGatewayRouteTableRoute;
    get transitGatewayRouteTableRoute(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteList;
    private _vpc;
    get vpc(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsVpcList;
}
export declare class DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsOutputReference;
}
export interface DataAwsEc2NetworkInsightsAnalysisFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis#name DataAwsEc2NetworkInsightsAnalysis#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis#values DataAwsEc2NetworkInsightsAnalysis#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2NetworkInsightsAnalysisFilterToTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2NetworkInsightsAnalysisFilterToHclTerraform(struct?: DataAwsEc2NetworkInsightsAnalysisFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2NetworkInsightsAnalysisFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsAnalysisFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsAnalysisFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2NetworkInsightsAnalysisFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2NetworkInsightsAnalysisFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2NetworkInsightsAnalysisFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis aws_ec2_network_insights_analysis}
*/
export declare class DataAwsEc2NetworkInsightsAnalysis extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_network_insights_analysis";
    /**
    * Generates CDKTF code for importing a DataAwsEc2NetworkInsightsAnalysis resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2NetworkInsightsAnalysis to import
    * @param importFromId The id of the existing DataAwsEc2NetworkInsightsAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2NetworkInsightsAnalysis to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_analysis aws_ec2_network_insights_analysis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2NetworkInsightsAnalysisConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2NetworkInsightsAnalysisConfig);
    private _alternatePathHints;
    get alternatePathHints(): DataAwsEc2NetworkInsightsAnalysisAlternatePathHintsList;
    get arn(): string;
    private _explanations;
    get explanations(): DataAwsEc2NetworkInsightsAnalysisExplanationsList;
    get filterInArns(): string[];
    private _forwardPathComponents;
    get forwardPathComponents(): DataAwsEc2NetworkInsightsAnalysisForwardPathComponentsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _networkInsightsAnalysisId?;
    get networkInsightsAnalysisId(): string;
    set networkInsightsAnalysisId(value: string);
    resetNetworkInsightsAnalysisId(): void;
    get networkInsightsAnalysisIdInput(): string | undefined;
    get networkInsightsPathId(): string;
    get pathFound(): cdktf.IResolvable;
    private _returnPathComponents;
    get returnPathComponents(): DataAwsEc2NetworkInsightsAnalysisReturnPathComponentsList;
    get startDate(): string;
    get status(): string;
    get statusMessage(): string;
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
    get warningMessage(): string;
    private _filter;
    get filter(): DataAwsEc2NetworkInsightsAnalysisFilterList;
    putFilter(value: DataAwsEc2NetworkInsightsAnalysisFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2NetworkInsightsAnalysisFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
