/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}
    */
    readonly executionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * policy_detail block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#policy_detail ImagebuilderLifecyclePolicy#policy_detail}
    */
    readonly policyDetail?: ImagebuilderLifecyclePolicyPolicyDetail[] | cdktf.IResolvable;
    /**
    * resource_selection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}
    */
    readonly resourceSelection?: ImagebuilderLifecyclePolicyResourceSelection[] | cdktf.IResolvable;
}
export interface ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}
    */
    readonly amis?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}
    */
    readonly containers?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}
    */
    readonly snapshots?: boolean | cdktf.IResolvable;
}
export declare function imagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources | cdktf.IResolvable | undefined);
    private _amis?;
    get amis(): boolean | cdktf.IResolvable;
    set amis(value: boolean | cdktf.IResolvable);
    resetAmis(): void;
    get amisInput(): boolean | cdktf.IResolvable | undefined;
    private _containers?;
    get containers(): boolean | cdktf.IResolvable;
    set containers(value: boolean | cdktf.IResolvable);
    resetContainers(): void;
    get containersInput(): boolean | cdktf.IResolvable | undefined;
    private _snapshots?;
    get snapshots(): boolean | cdktf.IResolvable;
    set snapshots(value: boolean | cdktf.IResolvable);
    resetSnapshots(): void;
    get snapshotsInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesOutputReference;
}
export interface ImagebuilderLifecyclePolicyPolicyDetailAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}
    */
    readonly type: string;
    /**
    * include_resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}
    */
    readonly includeResources?: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[] | cdktf.IResolvable;
}
export declare function imagebuilderLifecyclePolicyPolicyDetailActionToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyPolicyDetailActionToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailAction | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _includeResources;
    get includeResources(): ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResourcesList;
    putIncludeResources(value: ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[] | cdktf.IResolvable): void;
    resetIncludeResources(): void;
    get includeResourcesInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyPolicyDetailActionIncludeResources[] | undefined;
}
export declare class ImagebuilderLifecyclePolicyPolicyDetailActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyPolicyDetailAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyPolicyDetailActionOutputReference;
}
export interface ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}
    */
    readonly value: number;
}
export declare function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched | cdktf.IResolvable | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export declare class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedOutputReference;
}
export interface ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}
    */
    readonly isPublic?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}
    */
    readonly sharedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
    */
    readonly tagMap?: {
        [key: string]: string;
    };
    /**
    * last_launched block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}
    */
    readonly lastLaunched?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[] | cdktf.IResolvable;
}
export declare function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis | cdktf.IResolvable | undefined);
    private _isPublic?;
    get isPublic(): boolean | cdktf.IResolvable;
    set isPublic(value: boolean | cdktf.IResolvable);
    resetIsPublic(): void;
    get isPublicInput(): boolean | cdktf.IResolvable | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
    private _sharedAccounts?;
    get sharedAccounts(): string[];
    set sharedAccounts(value: string[]);
    resetSharedAccounts(): void;
    get sharedAccountsInput(): string[] | undefined;
    private _tagMap?;
    get tagMap(): {
        [key: string]: string;
    };
    set tagMap(value: {
        [key: string]: string;
    });
    resetTagMap(): void;
    get tagMapInput(): {
        [key: string]: string;
    } | undefined;
    private _lastLaunched;
    get lastLaunched(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunchedList;
    putLastLaunched(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[] | cdktf.IResolvable): void;
    resetLastLaunched(): void;
    get lastLaunchedInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisLastLaunched[] | undefined;
}
export declare class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisOutputReference;
}
export interface ImagebuilderLifecyclePolicyPolicyDetailExclusionRules {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
    */
    readonly tagMap?: {
        [key: string]: string;
    };
    /**
    * amis block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}
    */
    readonly amis?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[] | cdktf.IResolvable;
}
export declare function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyPolicyDetailExclusionRulesToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules | cdktf.IResolvable | undefined);
    private _tagMap?;
    get tagMap(): {
        [key: string]: string;
    };
    set tagMap(value: {
        [key: string]: string;
    });
    resetTagMap(): void;
    get tagMapInput(): {
        [key: string]: string;
    } | undefined;
    private _amis;
    get amis(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmisList;
    putAmis(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[] | cdktf.IResolvable): void;
    resetAmis(): void;
    get amisInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesAmis[] | undefined;
}
export declare class ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesOutputReference;
}
export interface ImagebuilderLifecyclePolicyPolicyDetailFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}
    */
    readonly retainAtLeast?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}
    */
    readonly value: number;
}
export declare function imagebuilderLifecyclePolicyPolicyDetailFilterToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyPolicyDetailFilterToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetailFilter | cdktf.IResolvable | undefined);
    private _retainAtLeast?;
    get retainAtLeast(): number;
    set retainAtLeast(value: number);
    resetRetainAtLeast(): void;
    get retainAtLeastInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export declare class ImagebuilderLifecyclePolicyPolicyDetailFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyPolicyDetailFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyPolicyDetailFilterOutputReference;
}
export interface ImagebuilderLifecyclePolicyPolicyDetail {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}
    */
    readonly action?: ImagebuilderLifecyclePolicyPolicyDetailAction[] | cdktf.IResolvable;
    /**
    * exclusion_rules block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}
    */
    readonly exclusionRules?: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[] | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}
    */
    readonly filter?: ImagebuilderLifecyclePolicyPolicyDetailFilter[] | cdktf.IResolvable;
}
export declare function imagebuilderLifecyclePolicyPolicyDetailToTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyPolicyDetailToHclTerraform(struct?: ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyPolicyDetailOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyPolicyDetail | cdktf.IResolvable | undefined);
    private _action;
    get action(): ImagebuilderLifecyclePolicyPolicyDetailActionList;
    putAction(value: ImagebuilderLifecyclePolicyPolicyDetailAction[] | cdktf.IResolvable): void;
    resetAction(): void;
    get actionInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyPolicyDetailAction[] | undefined;
    private _exclusionRules;
    get exclusionRules(): ImagebuilderLifecyclePolicyPolicyDetailExclusionRulesList;
    putExclusionRules(value: ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[] | cdktf.IResolvable): void;
    resetExclusionRules(): void;
    get exclusionRulesInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyPolicyDetailExclusionRules[] | undefined;
    private _filter;
    get filter(): ImagebuilderLifecyclePolicyPolicyDetailFilterList;
    putFilter(value: ImagebuilderLifecyclePolicyPolicyDetailFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyPolicyDetailFilter[] | undefined;
}
export declare class ImagebuilderLifecyclePolicyPolicyDetailList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyPolicyDetail[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyPolicyDetailOutputReference;
}
export interface ImagebuilderLifecyclePolicyResourceSelectionRecipe {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}
    */
    readonly semanticVersion: string;
}
export declare function imagebuilderLifecyclePolicyResourceSelectionRecipeToTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyResourceSelectionRecipeToHclTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyResourceSelectionRecipe | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _semanticVersion?;
    get semanticVersion(): string;
    set semanticVersion(value: string);
    get semanticVersionInput(): string | undefined;
}
export declare class ImagebuilderLifecyclePolicyResourceSelectionRecipeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyResourceSelectionRecipe[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyResourceSelectionRecipeOutputReference;
}
export interface ImagebuilderLifecyclePolicyResourceSelection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}
    */
    readonly tagMap?: {
        [key: string]: string;
    };
    /**
    * recipe block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#recipe ImagebuilderLifecyclePolicy#recipe}
    */
    readonly recipe?: ImagebuilderLifecyclePolicyResourceSelectionRecipe[] | cdktf.IResolvable;
}
export declare function imagebuilderLifecyclePolicyResourceSelectionToTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable): any;
export declare function imagebuilderLifecyclePolicyResourceSelectionToHclTerraform(struct?: ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable): any;
export declare class ImagebuilderLifecyclePolicyResourceSelectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderLifecyclePolicyResourceSelection | cdktf.IResolvable | undefined);
    private _tagMap?;
    get tagMap(): {
        [key: string]: string;
    };
    set tagMap(value: {
        [key: string]: string;
    });
    resetTagMap(): void;
    get tagMapInput(): {
        [key: string]: string;
    } | undefined;
    private _recipe;
    get recipe(): ImagebuilderLifecyclePolicyResourceSelectionRecipeList;
    putRecipe(value: ImagebuilderLifecyclePolicyResourceSelectionRecipe[] | cdktf.IResolvable): void;
    resetRecipe(): void;
    get recipeInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyResourceSelectionRecipe[] | undefined;
}
export declare class ImagebuilderLifecyclePolicyResourceSelectionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderLifecyclePolicyResourceSelection[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderLifecyclePolicyResourceSelectionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy aws_imagebuilder_lifecycle_policy}
*/
export declare class ImagebuilderLifecyclePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_lifecycle_policy";
    /**
    * Generates CDKTF code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import
    * @param importFromId The id of the existing ImagebuilderLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_lifecycle_policy aws_imagebuilder_lifecycle_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderLifecyclePolicyConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderLifecyclePolicyConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    get executionRoleInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _policyDetail;
    get policyDetail(): ImagebuilderLifecyclePolicyPolicyDetailList;
    putPolicyDetail(value: ImagebuilderLifecyclePolicyPolicyDetail[] | cdktf.IResolvable): void;
    resetPolicyDetail(): void;
    get policyDetailInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyPolicyDetail[] | undefined;
    private _resourceSelection;
    get resourceSelection(): ImagebuilderLifecyclePolicyResourceSelectionList;
    putResourceSelection(value: ImagebuilderLifecyclePolicyResourceSelection[] | cdktf.IResolvable): void;
    resetResourceSelection(): void;
    get resourceSelectionInput(): cdktf.IResolvable | ImagebuilderLifecyclePolicyResourceSelection[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
