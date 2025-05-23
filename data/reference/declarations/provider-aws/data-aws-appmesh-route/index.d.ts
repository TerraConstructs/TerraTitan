/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppmeshRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route#id DataAwsAppmeshRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route#mesh_name DataAwsAppmeshRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route#mesh_owner DataAwsAppmeshRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route#name DataAwsAppmeshRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route#tags DataAwsAppmeshRoute#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route#virtual_router_name DataAwsAppmeshRoute#virtual_router_name}
    */
    readonly virtualRouterName: string;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTarget {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTarget): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteActionWeightedTargetToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTarget): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTarget | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTarget | undefined);
    get port(): number;
    get virtualNode(): string;
    get weight(): number;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteAction {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteActionToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteAction): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteActionToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteAction): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteAction | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): DataAwsAppmeshRouteSpecGrpcRouteActionWeightedTargetList;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteActionOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined);
    get end(): number;
    get start(): number;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatch {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatch): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatch): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined);
    get exact(): string;
    get prefix(): string;
    private _range;
    get range(): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeList;
    get regex(): string;
    get suffix(): string;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteMatchMetadata {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadata): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchMetadataToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadata): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadata | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteMatchMetadata | undefined);
    get invert(): cdktf.IResolvable;
    private _match;
    get match(): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteMatch {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatch): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteMatch): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteMatch | undefined);
    private _metadata;
    get metadata(): DataAwsAppmeshRouteSpecGrpcRouteMatchMetadataList;
    get methodName(): string;
    get port(): number;
    get prefix(): string;
    get serviceName(): string;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteRetryPolicy {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteRetryPolicy): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteRetryPolicyToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteRetryPolicy): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteRetryPolicy | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteRetryPolicy | undefined);
    get grpcRetryEvents(): string[];
    get httpRetryEvents(): string[];
    get maxRetries(): number;
    private _perRetryTimeout;
    get perRetryTimeout(): DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutList;
    get tcpRetryEvents(): string[];
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdle {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdle): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteTimeoutIdleToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdle): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdle | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequest {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequest): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequestToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequest): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequestList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRouteTimeout {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteTimeout): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteTimeoutToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRouteTimeout): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRouteTimeout | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRouteTimeout | undefined);
    private _idle;
    get idle(): DataAwsAppmeshRouteSpecGrpcRouteTimeoutIdleList;
    private _perRequest;
    get perRequest(): DataAwsAppmeshRouteSpecGrpcRouteTimeoutPerRequestList;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteTimeoutOutputReference;
}
export interface DataAwsAppmeshRouteSpecGrpcRoute {
}
export declare function dataAwsAppmeshRouteSpecGrpcRouteToTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRoute): any;
export declare function dataAwsAppmeshRouteSpecGrpcRouteToHclTerraform(struct?: DataAwsAppmeshRouteSpecGrpcRoute): any;
export declare class DataAwsAppmeshRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecGrpcRoute | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecGrpcRoute | undefined);
    private _action;
    get action(): DataAwsAppmeshRouteSpecGrpcRouteActionList;
    private _match;
    get match(): DataAwsAppmeshRouteSpecGrpcRouteMatchList;
    private _retryPolicy;
    get retryPolicy(): DataAwsAppmeshRouteSpecGrpcRouteRetryPolicyList;
    private _timeout;
    get timeout(): DataAwsAppmeshRouteSpecGrpcRouteTimeoutList;
}
export declare class DataAwsAppmeshRouteSpecGrpcRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecGrpcRouteOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTarget {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTarget): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteActionWeightedTargetToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTarget): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTarget | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTarget | undefined);
    get port(): number;
    get virtualNode(): string;
    get weight(): number;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteAction {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteActionToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteAction): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteActionToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteAction): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteAction | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): DataAwsAppmeshRouteSpecHttp2RouteActionWeightedTargetList;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteActionOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined);
    get end(): number;
    get start(): number;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatch {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined);
    get exact(): string;
    get prefix(): string;
    private _range;
    get range(): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeList;
    get regex(): string;
    get suffix(): string;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteMatchHeader {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchHeader): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchHeaderToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchHeader): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteMatchHeader | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteMatchHeader | undefined);
    get invert(): cdktf.IResolvable;
    private _match;
    get match(): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteMatchPath {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchPathToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchPath): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchPathToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchPath): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteMatchPath | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteMatchPath | undefined);
    get exact(): string;
    get regex(): string;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchPathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteMatchPathOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatch {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatch | undefined);
    get exact(): string;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameter {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameter): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameter): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameter | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameter | undefined);
    private _match;
    get match(): DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteMatch {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatch): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteMatch): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteMatch | undefined);
    private _header;
    get header(): DataAwsAppmeshRouteSpecHttp2RouteMatchHeaderList;
    get method(): string;
    private _path;
    get path(): DataAwsAppmeshRouteSpecHttp2RouteMatchPathList;
    get port(): number;
    get prefix(): string;
    private _queryParameter;
    get queryParameter(): DataAwsAppmeshRouteSpecHttp2RouteMatchQueryParameterList;
    get scheme(): string;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteRetryPolicy {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteRetryPolicy): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteRetryPolicyToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteRetryPolicy): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteRetryPolicy | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteRetryPolicy | undefined);
    get httpRetryEvents(): string[];
    get maxRetries(): number;
    private _perRetryTimeout;
    get perRetryTimeout(): DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutList;
    get tcpRetryEvents(): string[];
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdle {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdle): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteTimeoutIdleToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdle): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdle | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequest {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequest): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequestToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequest): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequestList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2RouteTimeout {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteTimeout): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteTimeoutToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2RouteTimeout): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2RouteTimeout | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2RouteTimeout | undefined);
    private _idle;
    get idle(): DataAwsAppmeshRouteSpecHttp2RouteTimeoutIdleList;
    private _perRequest;
    get perRequest(): DataAwsAppmeshRouteSpecHttp2RouteTimeoutPerRequestList;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteTimeoutOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttp2Route {
}
export declare function dataAwsAppmeshRouteSpecHttp2RouteToTerraform(struct?: DataAwsAppmeshRouteSpecHttp2Route): any;
export declare function dataAwsAppmeshRouteSpecHttp2RouteToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttp2Route): any;
export declare class DataAwsAppmeshRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttp2Route | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttp2Route | undefined);
    private _action;
    get action(): DataAwsAppmeshRouteSpecHttp2RouteActionList;
    private _match;
    get match(): DataAwsAppmeshRouteSpecHttp2RouteMatchList;
    private _retryPolicy;
    get retryPolicy(): DataAwsAppmeshRouteSpecHttp2RouteRetryPolicyList;
    private _timeout;
    get timeout(): DataAwsAppmeshRouteSpecHttp2RouteTimeoutList;
}
export declare class DataAwsAppmeshRouteSpecHttp2RouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttp2RouteOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteActionWeightedTarget {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteActionWeightedTarget): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteActionWeightedTargetToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteActionWeightedTarget): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteActionWeightedTarget | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteActionWeightedTarget | undefined);
    get port(): number;
    get virtualNode(): string;
    get weight(): number;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteActionWeightedTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteAction {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteActionToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteAction): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteActionToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteAction): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteAction | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): DataAwsAppmeshRouteSpecHttpRouteActionWeightedTargetList;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteActionOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangeToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined);
    get end(): number;
    get start(): number;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatch {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatch): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatch): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined);
    get exact(): string;
    get prefix(): string;
    private _range;
    get range(): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchRangeList;
    get regex(): string;
    get suffix(): string;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteMatchHeader {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchHeader): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchHeaderToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchHeader): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteMatchHeader | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteMatchHeader | undefined);
    get invert(): cdktf.IResolvable;
    private _match;
    get match(): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteMatchPath {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchPathToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchPath): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchPathToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchPath): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteMatchPath | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteMatchPath | undefined);
    get exact(): string;
    get regex(): string;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchPathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteMatchPathOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatch {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatch | undefined);
    get exact(): string;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameter {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameter): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameter): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameter | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameter | undefined);
    private _match;
    get match(): DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteMatch {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatch): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteMatch): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteMatch | undefined);
    private _header;
    get header(): DataAwsAppmeshRouteSpecHttpRouteMatchHeaderList;
    get method(): string;
    private _path;
    get path(): DataAwsAppmeshRouteSpecHttpRouteMatchPathList;
    get port(): number;
    get prefix(): string;
    private _queryParameter;
    get queryParameter(): DataAwsAppmeshRouteSpecHttpRouteMatchQueryParameterList;
    get scheme(): string;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteRetryPolicy {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteRetryPolicy): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteRetryPolicyToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteRetryPolicy): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteRetryPolicy | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteRetryPolicy | undefined);
    get httpRetryEvents(): string[];
    get maxRetries(): number;
    private _perRetryTimeout;
    get perRetryTimeout(): DataAwsAppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutList;
    get tcpRetryEvents(): string[];
}
export declare class DataAwsAppmeshRouteSpecHttpRouteRetryPolicyList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteRetryPolicyOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteTimeoutIdle {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteTimeoutIdle): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteTimeoutIdleToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteTimeoutIdle): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteTimeoutIdle | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteTimeoutIdle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteTimeoutIdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteTimeoutIdleOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequest {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequest): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequestToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequest): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequestList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRouteTimeout {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteTimeout): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteTimeoutToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRouteTimeout): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRouteTimeout | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRouteTimeout | undefined);
    private _idle;
    get idle(): DataAwsAppmeshRouteSpecHttpRouteTimeoutIdleList;
    private _perRequest;
    get perRequest(): DataAwsAppmeshRouteSpecHttpRouteTimeoutPerRequestList;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteTimeoutOutputReference;
}
export interface DataAwsAppmeshRouteSpecHttpRoute {
}
export declare function dataAwsAppmeshRouteSpecHttpRouteToTerraform(struct?: DataAwsAppmeshRouteSpecHttpRoute): any;
export declare function dataAwsAppmeshRouteSpecHttpRouteToHclTerraform(struct?: DataAwsAppmeshRouteSpecHttpRoute): any;
export declare class DataAwsAppmeshRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecHttpRoute | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecHttpRoute | undefined);
    private _action;
    get action(): DataAwsAppmeshRouteSpecHttpRouteActionList;
    private _match;
    get match(): DataAwsAppmeshRouteSpecHttpRouteMatchList;
    private _retryPolicy;
    get retryPolicy(): DataAwsAppmeshRouteSpecHttpRouteRetryPolicyList;
    private _timeout;
    get timeout(): DataAwsAppmeshRouteSpecHttpRouteTimeoutList;
}
export declare class DataAwsAppmeshRouteSpecHttpRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecHttpRouteOutputReference;
}
export interface DataAwsAppmeshRouteSpecTcpRouteActionWeightedTarget {
}
export declare function dataAwsAppmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteActionWeightedTarget): any;
export declare function dataAwsAppmeshRouteSpecTcpRouteActionWeightedTargetToHclTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteActionWeightedTarget): any;
export declare class DataAwsAppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecTcpRouteActionWeightedTarget | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecTcpRouteActionWeightedTarget | undefined);
    get port(): number;
    get virtualNode(): string;
    get weight(): number;
}
export declare class DataAwsAppmeshRouteSpecTcpRouteActionWeightedTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference;
}
export interface DataAwsAppmeshRouteSpecTcpRouteAction {
}
export declare function dataAwsAppmeshRouteSpecTcpRouteActionToTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteAction): any;
export declare function dataAwsAppmeshRouteSpecTcpRouteActionToHclTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteAction): any;
export declare class DataAwsAppmeshRouteSpecTcpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecTcpRouteAction | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecTcpRouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): DataAwsAppmeshRouteSpecTcpRouteActionWeightedTargetList;
}
export declare class DataAwsAppmeshRouteSpecTcpRouteActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecTcpRouteActionOutputReference;
}
export interface DataAwsAppmeshRouteSpecTcpRouteMatch {
}
export declare function dataAwsAppmeshRouteSpecTcpRouteMatchToTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteMatch): any;
export declare function dataAwsAppmeshRouteSpecTcpRouteMatchToHclTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteMatch): any;
export declare class DataAwsAppmeshRouteSpecTcpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecTcpRouteMatch | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecTcpRouteMatch | undefined);
    get port(): number;
}
export declare class DataAwsAppmeshRouteSpecTcpRouteMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecTcpRouteMatchOutputReference;
}
export interface DataAwsAppmeshRouteSpecTcpRouteTimeoutIdle {
}
export declare function dataAwsAppmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteTimeoutIdle): any;
export declare function dataAwsAppmeshRouteSpecTcpRouteTimeoutIdleToHclTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteTimeoutIdle): any;
export declare class DataAwsAppmeshRouteSpecTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecTcpRouteTimeoutIdle | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecTcpRouteTimeoutIdle | undefined);
    get unit(): string;
    get value(): number;
}
export declare class DataAwsAppmeshRouteSpecTcpRouteTimeoutIdleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecTcpRouteTimeoutIdleOutputReference;
}
export interface DataAwsAppmeshRouteSpecTcpRouteTimeout {
}
export declare function dataAwsAppmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteTimeout): any;
export declare function dataAwsAppmeshRouteSpecTcpRouteTimeoutToHclTerraform(struct?: DataAwsAppmeshRouteSpecTcpRouteTimeout): any;
export declare class DataAwsAppmeshRouteSpecTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecTcpRouteTimeout | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecTcpRouteTimeout | undefined);
    private _idle;
    get idle(): DataAwsAppmeshRouteSpecTcpRouteTimeoutIdleList;
}
export declare class DataAwsAppmeshRouteSpecTcpRouteTimeoutList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecTcpRouteTimeoutOutputReference;
}
export interface DataAwsAppmeshRouteSpecTcpRoute {
}
export declare function dataAwsAppmeshRouteSpecTcpRouteToTerraform(struct?: DataAwsAppmeshRouteSpecTcpRoute): any;
export declare function dataAwsAppmeshRouteSpecTcpRouteToHclTerraform(struct?: DataAwsAppmeshRouteSpecTcpRoute): any;
export declare class DataAwsAppmeshRouteSpecTcpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpecTcpRoute | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpecTcpRoute | undefined);
    private _action;
    get action(): DataAwsAppmeshRouteSpecTcpRouteActionList;
    private _match;
    get match(): DataAwsAppmeshRouteSpecTcpRouteMatchList;
    private _timeout;
    get timeout(): DataAwsAppmeshRouteSpecTcpRouteTimeoutList;
}
export declare class DataAwsAppmeshRouteSpecTcpRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecTcpRouteOutputReference;
}
export interface DataAwsAppmeshRouteSpec {
}
export declare function dataAwsAppmeshRouteSpecToTerraform(struct?: DataAwsAppmeshRouteSpec): any;
export declare function dataAwsAppmeshRouteSpecToHclTerraform(struct?: DataAwsAppmeshRouteSpec): any;
export declare class DataAwsAppmeshRouteSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshRouteSpec | undefined;
    set internalValue(value: DataAwsAppmeshRouteSpec | undefined);
    private _grpcRoute;
    get grpcRoute(): DataAwsAppmeshRouteSpecGrpcRouteList;
    private _http2Route;
    get http2Route(): DataAwsAppmeshRouteSpecHttp2RouteList;
    private _httpRoute;
    get httpRoute(): DataAwsAppmeshRouteSpecHttpRouteList;
    get priority(): number;
    private _tcpRoute;
    get tcpRoute(): DataAwsAppmeshRouteSpecTcpRouteList;
}
export declare class DataAwsAppmeshRouteSpecList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshRouteSpecOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route aws_appmesh_route}
*/
export declare class DataAwsAppmeshRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appmesh_route";
    /**
    * Generates CDKTF code for importing a DataAwsAppmeshRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppmeshRoute to import
    * @param importFromId The id of the existing DataAwsAppmeshRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppmeshRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_route aws_appmesh_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshRouteConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshRouteConfig);
    get arn(): string;
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _meshName?;
    get meshName(): string;
    set meshName(value: string);
    get meshNameInput(): string | undefined;
    private _meshOwner?;
    get meshOwner(): string;
    set meshOwner(value: string);
    resetMeshOwner(): void;
    get meshOwnerInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get resourceOwner(): string;
    private _spec;
    get spec(): DataAwsAppmeshRouteSpecList;
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
    private _virtualRouterName?;
    get virtualRouterName(): string;
    set virtualRouterName(value: string);
    get virtualRouterNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
