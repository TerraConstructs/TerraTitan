/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2NetworkInsightsAnalysisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis#filter_in_arns Ec2NetworkInsightsAnalysis#filter_in_arns}
    */
    readonly filterInArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis#id Ec2NetworkInsightsAnalysis#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis#network_insights_path_id Ec2NetworkInsightsAnalysis#network_insights_path_id}
    */
    readonly networkInsightsPathId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis#tags Ec2NetworkInsightsAnalysis#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis#tags_all Ec2NetworkInsightsAnalysis#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis#wait_for_completion Ec2NetworkInsightsAnalysis#wait_for_completion}
    */
    readonly waitForCompletion?: boolean | cdktf.IResolvable;
}
export interface Ec2NetworkInsightsAnalysisAlternatePathHints {
}
export declare function ec2NetworkInsightsAnalysisAlternatePathHintsToTerraform(struct?: Ec2NetworkInsightsAnalysisAlternatePathHints): any;
export declare function ec2NetworkInsightsAnalysisAlternatePathHintsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisAlternatePathHints): any;
export declare class Ec2NetworkInsightsAnalysisAlternatePathHintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisAlternatePathHints | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisAlternatePathHints | undefined);
    get componentArn(): string;
    get componentId(): string;
}
export declare class Ec2NetworkInsightsAnalysisAlternatePathHintsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisAlternatePathHintsOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsAcl {
}
export declare function ec2NetworkInsightsAnalysisExplanationsAclToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAcl): any;
export declare function ec2NetworkInsightsAnalysisExplanationsAclToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAcl): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsAclOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsAcl | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsAcl | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsAclList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsAclOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange {
}
export declare function ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange): any;
export declare function ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsAclRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsAclRule {
}
export declare function ec2NetworkInsightsAnalysisExplanationsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRule): any;
export declare function ec2NetworkInsightsAnalysisExplanationsAclRuleToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAclRule): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsAclRule | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsAclRule | undefined);
    get cidr(): string;
    get egress(): cdktf.IResolvable;
    private _portRange;
    get portRange(): Ec2NetworkInsightsAnalysisExplanationsAclRulePortRangeList;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsAclRuleList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsAclRuleOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsAttachedTo {
}
export declare function ec2NetworkInsightsAnalysisExplanationsAttachedToToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAttachedTo): any;
export declare function ec2NetworkInsightsAnalysisExplanationsAttachedToToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsAttachedTo): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsAttachedToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsAttachedTo | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsAttachedTo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsAttachedToList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsAttachedToOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener {
}
export declare function ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any;
export declare function ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListener | undefined);
    get instancePort(): number;
    get loadBalancerPort(): number;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsComponent {
}
export declare function ec2NetworkInsightsAnalysisExplanationsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsComponent): any;
export declare function ec2NetworkInsightsAnalysisExplanationsComponentToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsComponent): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsComponent | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsComponentList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsComponentOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsCustomerGateway {
}
export declare function ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway): any;
export declare function ec2NetworkInsightsAnalysisExplanationsCustomerGatewayToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsCustomerGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsCustomerGateway | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsCustomerGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsCustomerGatewayList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsCustomerGatewayOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsDestination {
}
export declare function ec2NetworkInsightsAnalysisExplanationsDestinationToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestination): any;
export declare function ec2NetworkInsightsAnalysisExplanationsDestinationToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestination): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsDestination | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsDestination | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsDestinationList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsDestinationOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsDestinationVpc {
}
export declare function ec2NetworkInsightsAnalysisExplanationsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc): any;
export declare function ec2NetworkInsightsAnalysisExplanationsDestinationVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsDestinationVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsDestinationVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsDestinationVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsDestinationVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsDestinationVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener {
}
export declare function ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any;
export declare function ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListener | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable {
}
export declare function ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable): any;
export declare function ec2NetworkInsightsAnalysisExplanationsIngressRouteTableToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsIngressRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsIngressRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsIngressRouteTableList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsIngressRouteTableOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsInternetGateway {
}
export declare function ec2NetworkInsightsAnalysisExplanationsInternetGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsInternetGateway): any;
export declare function ec2NetworkInsightsAnalysisExplanationsInternetGatewayToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsInternetGateway): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsInternetGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsInternetGateway | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsInternetGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsInternetGatewayList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsInternetGatewayOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup {
}
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any;
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroup | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups {
}
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any;
export declare function ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroups | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsNatGateway {
}
export declare function ec2NetworkInsightsAnalysisExplanationsNatGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNatGateway): any;
export declare function ec2NetworkInsightsAnalysisExplanationsNatGatewayToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNatGateway): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsNatGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsNatGateway | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsNatGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsNatGatewayList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsNatGatewayOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsNetworkInterface {
}
export declare function ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface): any;
export declare function ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsNetworkInterface | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsNetworkInterface | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsPortRanges {
}
export declare function ec2NetworkInsightsAnalysisExplanationsPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPortRanges): any;
export declare function ec2NetworkInsightsAnalysisExplanationsPortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPortRanges): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsPortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsPortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsPortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsPrefixListStruct {
}
export declare function ec2NetworkInsightsAnalysisExplanationsPrefixListStructToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPrefixListStruct): any;
export declare function ec2NetworkInsightsAnalysisExplanationsPrefixListStructToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsPrefixListStruct): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsPrefixListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsPrefixListStruct | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsPrefixListStruct | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsPrefixListStructList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsPrefixListStructOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsRouteTable {
}
export declare function ec2NetworkInsightsAnalysisExplanationsRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTable): any;
export declare function ec2NetworkInsightsAnalysisExplanationsRouteTableToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTable): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsRouteTable | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsRouteTableList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsRouteTableOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute {
}
export declare function ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute): any;
export declare function ec2NetworkInsightsAnalysisExplanationsRouteTableRouteToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsRouteTableRoute | undefined);
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
export declare class Ec2NetworkInsightsAnalysisExplanationsRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsRouteTableRouteOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroup {
}
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup): any;
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroup | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroup | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange {
}
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any;
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule {
}
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any;
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRule | undefined);
    get cidr(): string;
    get direction(): string;
    private _portRange;
    get portRange(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRulePortRangeList;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsSecurityGroups {
}
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups): any;
export declare function ec2NetworkInsightsAnalysisExplanationsSecurityGroupsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroups | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsSecurityGroups | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsSecurityGroupsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupsOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsSourceVpc {
}
export declare function ec2NetworkInsightsAnalysisExplanationsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSourceVpc): any;
export declare function ec2NetworkInsightsAnalysisExplanationsSourceVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSourceVpc): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsSourceVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsSourceVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsSourceVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsSourceVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsSourceVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsSubnet {
}
export declare function ec2NetworkInsightsAnalysisExplanationsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnet): any;
export declare function ec2NetworkInsightsAnalysisExplanationsSubnetToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnet): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsSubnetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsSubnet | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsSubnet | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsSubnetList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsSubnetOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable {
}
export declare function ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any;
export declare function ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsTransitGateway {
}
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGateway): any;
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGateway): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsTransitGateway | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsTransitGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment {
}
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment): any;
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachment | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable {
}
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable): any;
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTable | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute {
}
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute): any;
export declare function ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRoute | undefined);
    get attachmentId(): string;
    get destinationCidr(): string;
    get prefixListId(): string;
    get resourceId(): string;
    get resourceType(): string;
    get routeOrigin(): string;
    get state(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsVpc {
}
export declare function ec2NetworkInsightsAnalysisExplanationsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpc): any;
export declare function ec2NetworkInsightsAnalysisExplanationsVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpc): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint {
}
export declare function ec2NetworkInsightsAnalysisExplanationsVpcEndpointToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint): any;
export declare function ec2NetworkInsightsAnalysisExplanationsVpcEndpointToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsVpcEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsVpcEndpoint | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsVpcEndpointList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsVpcEndpointOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection {
}
export declare function ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any;
export declare function ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnection | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsVpnConnection {
}
export declare function ec2NetworkInsightsAnalysisExplanationsVpnConnectionToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnConnection): any;
export declare function ec2NetworkInsightsAnalysisExplanationsVpnConnectionToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnConnection): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsVpnConnectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsVpnConnection | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsVpnConnection | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsVpnConnectionList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsVpnConnectionOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanationsVpnGateway {
}
export declare function ec2NetworkInsightsAnalysisExplanationsVpnGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnGateway): any;
export declare function ec2NetworkInsightsAnalysisExplanationsVpnGatewayToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanationsVpnGateway): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsVpnGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanationsVpnGateway | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanationsVpnGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsVpnGatewayList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsVpnGatewayOutputReference;
}
export interface Ec2NetworkInsightsAnalysisExplanations {
}
export declare function ec2NetworkInsightsAnalysisExplanationsToTerraform(struct?: Ec2NetworkInsightsAnalysisExplanations): any;
export declare function ec2NetworkInsightsAnalysisExplanationsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisExplanations): any;
export declare class Ec2NetworkInsightsAnalysisExplanationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisExplanations | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisExplanations | undefined);
    private _acl;
    get acl(): Ec2NetworkInsightsAnalysisExplanationsAclList;
    private _aclRule;
    get aclRule(): Ec2NetworkInsightsAnalysisExplanationsAclRuleList;
    get address(): string;
    get addresses(): string[];
    private _attachedTo;
    get attachedTo(): Ec2NetworkInsightsAnalysisExplanationsAttachedToList;
    get availabilityZones(): string[];
    get cidrs(): string[];
    private _classicLoadBalancerListener;
    get classicLoadBalancerListener(): Ec2NetworkInsightsAnalysisExplanationsClassicLoadBalancerListenerList;
    private _component;
    get component(): Ec2NetworkInsightsAnalysisExplanationsComponentList;
    private _customerGateway;
    get customerGateway(): Ec2NetworkInsightsAnalysisExplanationsCustomerGatewayList;
    private _destination;
    get destination(): Ec2NetworkInsightsAnalysisExplanationsDestinationList;
    private _destinationVpc;
    get destinationVpc(): Ec2NetworkInsightsAnalysisExplanationsDestinationVpcList;
    get direction(): string;
    private _elasticLoadBalancerListener;
    get elasticLoadBalancerListener(): Ec2NetworkInsightsAnalysisExplanationsElasticLoadBalancerListenerList;
    get explanationCode(): string;
    private _ingressRouteTable;
    get ingressRouteTable(): Ec2NetworkInsightsAnalysisExplanationsIngressRouteTableList;
    private _internetGateway;
    get internetGateway(): Ec2NetworkInsightsAnalysisExplanationsInternetGatewayList;
    get loadBalancerArn(): string;
    get loadBalancerListenerPort(): number;
    private _loadBalancerTargetGroup;
    get loadBalancerTargetGroup(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupList;
    private _loadBalancerTargetGroups;
    get loadBalancerTargetGroups(): Ec2NetworkInsightsAnalysisExplanationsLoadBalancerTargetGroupsList;
    get loadBalancerTargetPort(): number;
    get missingComponent(): string;
    private _natGateway;
    get natGateway(): Ec2NetworkInsightsAnalysisExplanationsNatGatewayList;
    private _networkInterface;
    get networkInterface(): Ec2NetworkInsightsAnalysisExplanationsNetworkInterfaceList;
    get packetField(): string;
    get port(): number;
    private _portRanges;
    get portRanges(): Ec2NetworkInsightsAnalysisExplanationsPortRangesList;
    private _prefixList;
    get prefixList(): Ec2NetworkInsightsAnalysisExplanationsPrefixListStructList;
    get protocols(): string[];
    private _routeTable;
    get routeTable(): Ec2NetworkInsightsAnalysisExplanationsRouteTableList;
    private _routeTableRoute;
    get routeTableRoute(): Ec2NetworkInsightsAnalysisExplanationsRouteTableRouteList;
    private _securityGroup;
    get securityGroup(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupList;
    private _securityGroupRule;
    get securityGroupRule(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupRuleList;
    private _securityGroups;
    get securityGroups(): Ec2NetworkInsightsAnalysisExplanationsSecurityGroupsList;
    private _sourceVpc;
    get sourceVpc(): Ec2NetworkInsightsAnalysisExplanationsSourceVpcList;
    get state(): string;
    private _subnet;
    get subnet(): Ec2NetworkInsightsAnalysisExplanationsSubnetList;
    private _subnetRouteTable;
    get subnetRouteTable(): Ec2NetworkInsightsAnalysisExplanationsSubnetRouteTableList;
    private _transitGateway;
    get transitGateway(): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayList;
    private _transitGatewayAttachment;
    get transitGatewayAttachment(): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayAttachmentList;
    private _transitGatewayRouteTable;
    get transitGatewayRouteTable(): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableList;
    private _transitGatewayRouteTableRoute;
    get transitGatewayRouteTableRoute(): Ec2NetworkInsightsAnalysisExplanationsTransitGatewayRouteTableRouteList;
    private _vpc;
    get vpc(): Ec2NetworkInsightsAnalysisExplanationsVpcList;
    private _vpcEndpoint;
    get vpcEndpoint(): Ec2NetworkInsightsAnalysisExplanationsVpcEndpointList;
    private _vpcPeeringConnection;
    get vpcPeeringConnection(): Ec2NetworkInsightsAnalysisExplanationsVpcPeeringConnectionList;
    private _vpnConnection;
    get vpnConnection(): Ec2NetworkInsightsAnalysisExplanationsVpnConnectionList;
    private _vpnGateway;
    get vpnGateway(): Ec2NetworkInsightsAnalysisExplanationsVpnGatewayList;
}
export declare class Ec2NetworkInsightsAnalysisExplanationsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisExplanationsOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsAclRule | undefined);
    get cidr(): string;
    get egress(): cdktf.IResolvable;
    private _portRange;
    get portRange(): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRulePortRangeList;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetails | undefined);
    get additionalDetailType(): string;
    private _component;
    get component(): Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsComponentList;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedTo {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAttachedToToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedTo): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsAttachedToToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedTo): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedTo | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedTo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedToList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedToOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsComponent {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsComponentToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsComponent | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsComponentList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsComponentOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderSourcePortRangesList;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderSourcePortRangesList;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRoute | undefined);
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
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRule | undefined);
    get cidr(): string;
    get direction(): string;
    private _portRange;
    get portRange(): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRulePortRangeList;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsSubnetToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSubnetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsSubnet | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsSubnetList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsSubnetOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGateway {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGateway): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGateway): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGateway | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRoute | undefined);
    get attachmentId(): string;
    get destinationCidr(): string;
    get prefixListId(): string;
    get resourceId(): string;
    get resourceType(): string;
    get routeOrigin(): string;
    get state(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponentsVpc {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponentsVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponentsVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisForwardPathComponents {
}
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsToTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponents): any;
export declare function ec2NetworkInsightsAnalysisForwardPathComponentsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisForwardPathComponents): any;
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisForwardPathComponents | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisForwardPathComponents | undefined);
    private _aclRule;
    get aclRule(): Ec2NetworkInsightsAnalysisForwardPathComponentsAclRuleList;
    private _additionalDetails;
    get additionalDetails(): Ec2NetworkInsightsAnalysisForwardPathComponentsAdditionalDetailsList;
    private _attachedTo;
    get attachedTo(): Ec2NetworkInsightsAnalysisForwardPathComponentsAttachedToList;
    private _component;
    get component(): Ec2NetworkInsightsAnalysisForwardPathComponentsComponentList;
    private _destinationVpc;
    get destinationVpc(): Ec2NetworkInsightsAnalysisForwardPathComponentsDestinationVpcList;
    private _inboundHeader;
    get inboundHeader(): Ec2NetworkInsightsAnalysisForwardPathComponentsInboundHeaderList;
    private _outboundHeader;
    get outboundHeader(): Ec2NetworkInsightsAnalysisForwardPathComponentsOutboundHeaderList;
    private _routeTableRoute;
    get routeTableRoute(): Ec2NetworkInsightsAnalysisForwardPathComponentsRouteTableRouteList;
    private _securityGroupRule;
    get securityGroupRule(): Ec2NetworkInsightsAnalysisForwardPathComponentsSecurityGroupRuleList;
    get sequenceNumber(): number;
    private _sourceVpc;
    get sourceVpc(): Ec2NetworkInsightsAnalysisForwardPathComponentsSourceVpcList;
    private _subnet;
    get subnet(): Ec2NetworkInsightsAnalysisForwardPathComponentsSubnetList;
    private _transitGateway;
    get transitGateway(): Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayList;
    private _transitGatewayRouteTableRoute;
    get transitGatewayRouteTableRoute(): Ec2NetworkInsightsAnalysisForwardPathComponentsTransitGatewayRouteTableRouteList;
    private _vpc;
    get vpc(): Ec2NetworkInsightsAnalysisForwardPathComponentsVpcList;
}
export declare class Ec2NetworkInsightsAnalysisForwardPathComponentsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisForwardPathComponentsOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsAclRule | undefined);
    get cidr(): string;
    get egress(): cdktf.IResolvable;
    private _portRange;
    get portRange(): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRulePortRangeList;
    get protocol(): string;
    get ruleAction(): string;
    get ruleNumber(): number;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetails | undefined);
    get additionalDetailType(): string;
    private _component;
    get component(): Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsComponentList;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedTo {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAttachedToToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedTo): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsAttachedToToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedTo): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedToOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedTo | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedTo | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedToList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedToOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsComponent {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsComponentToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsComponentToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsComponent | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsComponent | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsComponentList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsComponentOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderSourcePortRangesList;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRanges | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeader | undefined);
    get destinationAddresses(): string[];
    private _destinationPortRanges;
    get destinationPortRanges(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderDestinationPortRangesList;
    get protocol(): string;
    get sourceAddresses(): string[];
    private _sourcePortRanges;
    get sourcePortRanges(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderSourcePortRangesList;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRoute | undefined);
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
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRange | undefined);
    get from(): number;
    get to(): number;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRule | undefined);
    get cidr(): string;
    get direction(): string;
    private _portRange;
    get portRange(): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRulePortRangeList;
    get prefixListId(): string;
    get protocol(): string;
    get securityGroupId(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsSubnetToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSubnetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsSubnet | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsSubnetList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsSubnetOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGateway {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGateway): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGateway): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGateway | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGateway | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRoute | undefined);
    get attachmentId(): string;
    get destinationCidr(): string;
    get prefixListId(): string;
    get resourceId(): string;
    get resourceType(): string;
    get routeOrigin(): string;
    get state(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponentsVpc {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsVpcToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsVpcToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponentsVpc | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponentsVpc | undefined);
    get arn(): string;
    get id(): string;
    get name(): string;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsVpcList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsVpcOutputReference;
}
export interface Ec2NetworkInsightsAnalysisReturnPathComponents {
}
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsToTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponents): any;
export declare function ec2NetworkInsightsAnalysisReturnPathComponentsToHclTerraform(struct?: Ec2NetworkInsightsAnalysisReturnPathComponents): any;
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2NetworkInsightsAnalysisReturnPathComponents | undefined;
    set internalValue(value: Ec2NetworkInsightsAnalysisReturnPathComponents | undefined);
    private _aclRule;
    get aclRule(): Ec2NetworkInsightsAnalysisReturnPathComponentsAclRuleList;
    private _additionalDetails;
    get additionalDetails(): Ec2NetworkInsightsAnalysisReturnPathComponentsAdditionalDetailsList;
    private _attachedTo;
    get attachedTo(): Ec2NetworkInsightsAnalysisReturnPathComponentsAttachedToList;
    private _component;
    get component(): Ec2NetworkInsightsAnalysisReturnPathComponentsComponentList;
    private _destinationVpc;
    get destinationVpc(): Ec2NetworkInsightsAnalysisReturnPathComponentsDestinationVpcList;
    private _inboundHeader;
    get inboundHeader(): Ec2NetworkInsightsAnalysisReturnPathComponentsInboundHeaderList;
    private _outboundHeader;
    get outboundHeader(): Ec2NetworkInsightsAnalysisReturnPathComponentsOutboundHeaderList;
    private _routeTableRoute;
    get routeTableRoute(): Ec2NetworkInsightsAnalysisReturnPathComponentsRouteTableRouteList;
    private _securityGroupRule;
    get securityGroupRule(): Ec2NetworkInsightsAnalysisReturnPathComponentsSecurityGroupRuleList;
    get sequenceNumber(): number;
    private _sourceVpc;
    get sourceVpc(): Ec2NetworkInsightsAnalysisReturnPathComponentsSourceVpcList;
    private _subnet;
    get subnet(): Ec2NetworkInsightsAnalysisReturnPathComponentsSubnetList;
    private _transitGateway;
    get transitGateway(): Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayList;
    private _transitGatewayRouteTableRoute;
    get transitGatewayRouteTableRoute(): Ec2NetworkInsightsAnalysisReturnPathComponentsTransitGatewayRouteTableRouteList;
    private _vpc;
    get vpc(): Ec2NetworkInsightsAnalysisReturnPathComponentsVpcList;
}
export declare class Ec2NetworkInsightsAnalysisReturnPathComponentsList extends cdktf.ComplexList {
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
    get(index: number): Ec2NetworkInsightsAnalysisReturnPathComponentsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis aws_ec2_network_insights_analysis}
*/
export declare class Ec2NetworkInsightsAnalysis extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_network_insights_analysis";
    /**
    * Generates CDKTF code for importing a Ec2NetworkInsightsAnalysis resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2NetworkInsightsAnalysis to import
    * @param importFromId The id of the existing Ec2NetworkInsightsAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2NetworkInsightsAnalysis to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_network_insights_analysis aws_ec2_network_insights_analysis} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2NetworkInsightsAnalysisConfig
    */
    constructor(scope: Construct, id: string, config: Ec2NetworkInsightsAnalysisConfig);
    private _alternatePathHints;
    get alternatePathHints(): Ec2NetworkInsightsAnalysisAlternatePathHintsList;
    get arn(): string;
    private _explanations;
    get explanations(): Ec2NetworkInsightsAnalysisExplanationsList;
    private _filterInArns?;
    get filterInArns(): string[];
    set filterInArns(value: string[]);
    resetFilterInArns(): void;
    get filterInArnsInput(): string[] | undefined;
    private _forwardPathComponents;
    get forwardPathComponents(): Ec2NetworkInsightsAnalysisForwardPathComponentsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _networkInsightsPathId?;
    get networkInsightsPathId(): string;
    set networkInsightsPathId(value: string);
    get networkInsightsPathIdInput(): string | undefined;
    get pathFound(): cdktf.IResolvable;
    private _returnPathComponents;
    get returnPathComponents(): Ec2NetworkInsightsAnalysisReturnPathComponentsList;
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
    private _waitForCompletion?;
    get waitForCompletion(): boolean | cdktf.IResolvable;
    set waitForCompletion(value: boolean | cdktf.IResolvable);
    resetWaitForCompletion(): void;
    get waitForCompletionInput(): boolean | cdktf.IResolvable | undefined;
    get warningMessage(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
