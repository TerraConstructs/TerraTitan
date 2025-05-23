/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#id AppmeshRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#mesh_name AppmeshRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#mesh_owner AppmeshRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#tags AppmeshRoute#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#tags_all AppmeshRoute#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#virtual_router_name AppmeshRoute#virtual_router_name}
    */
    readonly virtualRouterName: string;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#spec AppmeshRoute#spec}
    */
    readonly spec: AppmeshRouteSpec;
}
export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget | cdktf.IResolvable): any;
export declare function appmeshRouteSpecGrpcRouteActionWeightedTargetToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteActionWeightedTarget | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteActionWeightedTarget | cdktf.IResolvable | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _virtualNode?;
    get virtualNode(): string;
    set virtualNode(value: string);
    get virtualNodeInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
}
export declare class AppmeshRouteSpecGrpcRouteActionWeightedTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecGrpcRouteActionWeightedTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecGrpcRouteActionWeightedTargetOutputReference;
}
export interface AppmeshRouteSpecGrpcRouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[] | cdktf.IResolvable;
}
export declare function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionOutputReference | AppmeshRouteSpecGrpcRouteAction): any;
export declare function appmeshRouteSpecGrpcRouteActionToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteActionOutputReference | AppmeshRouteSpecGrpcRouteAction): any;
export declare class AppmeshRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): AppmeshRouteSpecGrpcRouteActionWeightedTargetList;
    putWeightedTarget(value: AppmeshRouteSpecGrpcRouteActionWeightedTarget[] | cdktf.IResolvable): void;
    get weightedTargetInput(): cdktf.IResolvable | AppmeshRouteSpecGrpcRouteActionWeightedTarget[] | undefined;
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#start AppmeshRoute#start}
    */
    readonly start: number;
}
export declare function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any;
export declare function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any;
export declare class AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number | undefined;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number | undefined;
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange;
}
export declare function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any;
export declare function appmeshRouteSpecGrpcRouteMatchMetadataMatchToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference | AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any;
export declare class AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string | undefined;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string | undefined;
    private _range;
    get range(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchRangeOutputReference;
    putRange(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange | undefined;
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch;
}
export declare function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata | cdktf.IResolvable): any;
export declare function appmeshRouteSpecGrpcRouteMatchMetadataToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecGrpcRouteMatchMetadata | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteMatchMetadata | cdktf.IResolvable | undefined);
    private _invert?;
    get invert(): boolean | cdktf.IResolvable;
    set invert(value: boolean | cdktf.IResolvable);
    resetInvert(): void;
    get invertInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): AppmeshRouteSpecGrpcRouteMatchMetadataMatchOutputReference;
    putMatch(value: AppmeshRouteSpecGrpcRouteMatchMetadataMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecGrpcRouteMatchMetadataMatch | undefined;
}
export declare class AppmeshRouteSpecGrpcRouteMatchMetadataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecGrpcRouteMatchMetadataOutputReference;
}
export interface AppmeshRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#method_name AppmeshRoute#method_name}
    */
    readonly methodName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#service_name AppmeshRoute#service_name}
    */
    readonly serviceName?: string;
    /**
    * metadata block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#metadata AppmeshRoute#metadata}
    */
    readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable;
}
export declare function appmeshRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchOutputReference | AppmeshRouteSpecGrpcRouteMatch): any;
export declare function appmeshRouteSpecGrpcRouteMatchToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchOutputReference | AppmeshRouteSpecGrpcRouteMatch): any;
export declare class AppmeshRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteMatch | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteMatch | undefined);
    private _methodName?;
    get methodName(): string;
    set methodName(value: string);
    resetMethodName(): void;
    get methodNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    resetServiceName(): void;
    get serviceNameInput(): string | undefined;
    private _metadata;
    get metadata(): AppmeshRouteSpecGrpcRouteMatchMetadataList;
    putMetadata(value: AppmeshRouteSpecGrpcRouteMatchMetadata[] | cdktf.IResolvable): void;
    resetMetadata(): void;
    get metadataInput(): cdktf.IResolvable | AppmeshRouteSpecGrpcRouteMatchMetadata[] | undefined;
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any;
export declare function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any;
export declare class AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#grpc_retry_events AppmeshRoute#grpc_retry_events}
    */
    readonly grpcRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout;
}
export declare function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicy): any;
export declare function appmeshRouteSpecGrpcRouteRetryPolicyToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference | AppmeshRouteSpecGrpcRouteRetryPolicy): any;
export declare class AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteRetryPolicy | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteRetryPolicy | undefined);
    private _grpcRetryEvents?;
    get grpcRetryEvents(): string[];
    set grpcRetryEvents(value: string[]);
    resetGrpcRetryEvents(): void;
    get grpcRetryEventsInput(): string[] | undefined;
    private _httpRetryEvents?;
    get httpRetryEvents(): string[];
    set httpRetryEvents(value: string[]);
    resetHttpRetryEvents(): void;
    get httpRetryEventsInput(): string[] | undefined;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    get maxRetriesInput(): number | undefined;
    private _tcpRetryEvents?;
    get tcpRetryEvents(): string[];
    set tcpRetryEvents(value: string[]);
    resetTcpRetryEvents(): void;
    get tcpRetryEventsInput(): string[] | undefined;
    private _perRetryTimeout;
    get perRetryTimeout(): AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutOutputReference;
    putPerRetryTimeout(value: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): void;
    get perRetryTimeoutInput(): AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout | undefined;
}
export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference | AppmeshRouteSpecGrpcRouteTimeoutIdle): any;
export declare function appmeshRouteSpecGrpcRouteTimeoutIdleToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference | AppmeshRouteSpecGrpcRouteTimeoutIdle): any;
export declare class AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any;
export declare function appmeshRouteSpecGrpcRouteTimeoutPerRequestToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any;
export declare class AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecGrpcRouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest;
}
export declare function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutOutputReference | AppmeshRouteSpecGrpcRouteTimeout): any;
export declare function appmeshRouteSpecGrpcRouteTimeoutToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutOutputReference | AppmeshRouteSpecGrpcRouteTimeout): any;
export declare class AppmeshRouteSpecGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecGrpcRouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecGrpcRouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecGrpcRouteTimeoutIdle | undefined;
    private _perRequest;
    get perRequest(): AppmeshRouteSpecGrpcRouteTimeoutPerRequestOutputReference;
    putPerRequest(value: AppmeshRouteSpecGrpcRouteTimeoutPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshRouteSpecGrpcRouteTimeoutPerRequest | undefined;
}
export interface AppmeshRouteSpecGrpcRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecGrpcRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecGrpcRouteMatch;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout;
}
export declare function appmeshRouteSpecGrpcRouteToTerraform(struct?: AppmeshRouteSpecGrpcRouteOutputReference | AppmeshRouteSpecGrpcRoute): any;
export declare function appmeshRouteSpecGrpcRouteToHclTerraform(struct?: AppmeshRouteSpecGrpcRouteOutputReference | AppmeshRouteSpecGrpcRoute): any;
export declare class AppmeshRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecGrpcRoute | undefined;
    set internalValue(value: AppmeshRouteSpecGrpcRoute | undefined);
    private _action;
    get action(): AppmeshRouteSpecGrpcRouteActionOutputReference;
    putAction(value: AppmeshRouteSpecGrpcRouteAction): void;
    get actionInput(): AppmeshRouteSpecGrpcRouteAction | undefined;
    private _match;
    get match(): AppmeshRouteSpecGrpcRouteMatchOutputReference;
    putMatch(value: AppmeshRouteSpecGrpcRouteMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecGrpcRouteMatch | undefined;
    private _retryPolicy;
    get retryPolicy(): AppmeshRouteSpecGrpcRouteRetryPolicyOutputReference;
    putRetryPolicy(value: AppmeshRouteSpecGrpcRouteRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): AppmeshRouteSpecGrpcRouteRetryPolicy | undefined;
    private _timeout;
    get timeout(): AppmeshRouteSpecGrpcRouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecGrpcRouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecGrpcRouteTimeout | undefined;
}
export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget | cdktf.IResolvable): any;
export declare function appmeshRouteSpecHttp2RouteActionWeightedTargetToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteActionWeightedTarget | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteActionWeightedTarget | cdktf.IResolvable | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _virtualNode?;
    get virtualNode(): string;
    set virtualNode(value: string);
    get virtualNodeInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
}
export declare class AppmeshRouteSpecHttp2RouteActionWeightedTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecHttp2RouteActionWeightedTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecHttp2RouteActionWeightedTargetOutputReference;
}
export interface AppmeshRouteSpecHttp2RouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[] | cdktf.IResolvable;
}
export declare function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionOutputReference | AppmeshRouteSpecHttp2RouteAction): any;
export declare function appmeshRouteSpecHttp2RouteActionToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteActionOutputReference | AppmeshRouteSpecHttp2RouteAction): any;
export declare class AppmeshRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): AppmeshRouteSpecHttp2RouteActionWeightedTargetList;
    putWeightedTarget(value: AppmeshRouteSpecHttp2RouteActionWeightedTarget[] | cdktf.IResolvable): void;
    get weightedTargetInput(): cdktf.IResolvable | AppmeshRouteSpecHttp2RouteActionWeightedTarget[] | undefined;
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#start AppmeshRoute#start}
    */
    readonly start: number;
}
export declare function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare class AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number | undefined;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number | undefined;
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange;
}
export declare function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare function appmeshRouteSpecHttp2RouteMatchHeaderMatchToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare class AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string | undefined;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string | undefined;
    private _range;
    get range(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;
    putRange(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange | undefined;
}
export interface AppmeshRouteSpecHttp2RouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch;
}
export declare function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable): any;
export declare function appmeshRouteSpecHttp2RouteMatchHeaderToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable | undefined);
    private _invert?;
    get invert(): boolean | cdktf.IResolvable;
    set invert(value: boolean | cdktf.IResolvable);
    resetInvert(): void;
    get invertInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): AppmeshRouteSpecHttp2RouteMatchHeaderMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttp2RouteMatchHeaderMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecHttp2RouteMatchHeaderMatch | undefined;
}
export declare class AppmeshRouteSpecHttp2RouteMatchHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecHttp2RouteMatchHeaderOutputReference;
}
export interface AppmeshRouteSpecHttp2RouteMatchPath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
}
export declare function appmeshRouteSpecHttp2RouteMatchPathToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchPathOutputReference | AppmeshRouteSpecHttp2RouteMatchPath): any;
export declare function appmeshRouteSpecHttp2RouteMatchPathToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchPathOutputReference | AppmeshRouteSpecHttp2RouteMatchPath): any;
export declare class AppmeshRouteSpecHttp2RouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchPath | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchPath | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string | undefined;
}
export interface AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
}
export declare function appmeshRouteSpecHttp2RouteMatchQueryParameterMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare function appmeshRouteSpecHttp2RouteMatchQueryParameterMatchToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference | AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare class AppmeshRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
}
export interface AppmeshRouteSpecHttp2RouteMatchQueryParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch;
}
export declare function appmeshRouteSpecHttp2RouteMatchQueryParameterToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable): any;
export declare function appmeshRouteSpecHttp2RouteMatchQueryParameterToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecHttp2RouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): AppmeshRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecHttp2RouteMatchQueryParameterMatch | undefined;
}
export declare class AppmeshRouteSpecHttp2RouteMatchQueryParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecHttp2RouteMatchQueryParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecHttp2RouteMatchQueryParameterOutputReference;
}
export interface AppmeshRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#method AppmeshRoute#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#scheme AppmeshRoute#scheme}
    */
    readonly scheme?: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#header AppmeshRoute#header}
    */
    readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable;
    /**
    * path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#path AppmeshRoute#path}
    */
    readonly path?: AppmeshRouteSpecHttp2RouteMatchPath;
    /**
    * query_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#query_parameter AppmeshRoute#query_parameter}
    */
    readonly queryParameter?: AppmeshRouteSpecHttp2RouteMatchQueryParameter[] | cdktf.IResolvable;
}
export declare function appmeshRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchOutputReference | AppmeshRouteSpecHttp2RouteMatch): any;
export declare function appmeshRouteSpecHttp2RouteMatchToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchOutputReference | AppmeshRouteSpecHttp2RouteMatch): any;
export declare class AppmeshRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteMatch | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _scheme?;
    get scheme(): string;
    set scheme(value: string);
    resetScheme(): void;
    get schemeInput(): string | undefined;
    private _header;
    get header(): AppmeshRouteSpecHttp2RouteMatchHeaderList;
    putHeader(value: AppmeshRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | AppmeshRouteSpecHttp2RouteMatchHeader[] | undefined;
    private _path;
    get path(): AppmeshRouteSpecHttp2RouteMatchPathOutputReference;
    putPath(value: AppmeshRouteSpecHttp2RouteMatchPath): void;
    resetPath(): void;
    get pathInput(): AppmeshRouteSpecHttp2RouteMatchPath | undefined;
    private _queryParameter;
    get queryParameter(): AppmeshRouteSpecHttp2RouteMatchQueryParameterList;
    putQueryParameter(value: AppmeshRouteSpecHttp2RouteMatchQueryParameter[] | cdktf.IResolvable): void;
    resetQueryParameter(): void;
    get queryParameterInput(): cdktf.IResolvable | AppmeshRouteSpecHttp2RouteMatchQueryParameter[] | undefined;
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any;
export declare function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any;
export declare class AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout;
}
export declare function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicy): any;
export declare function appmeshRouteSpecHttp2RouteRetryPolicyToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference | AppmeshRouteSpecHttp2RouteRetryPolicy): any;
export declare class AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteRetryPolicy | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteRetryPolicy | undefined);
    private _httpRetryEvents?;
    get httpRetryEvents(): string[];
    set httpRetryEvents(value: string[]);
    resetHttpRetryEvents(): void;
    get httpRetryEventsInput(): string[] | undefined;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    get maxRetriesInput(): number | undefined;
    private _tcpRetryEvents?;
    get tcpRetryEvents(): string[];
    set tcpRetryEvents(value: string[]);
    resetTcpRetryEvents(): void;
    get tcpRetryEventsInput(): string[] | undefined;
    private _perRetryTimeout;
    get perRetryTimeout(): AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutOutputReference;
    putPerRetryTimeout(value: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): void;
    get perRetryTimeoutInput(): AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout | undefined;
}
export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference | AppmeshRouteSpecHttp2RouteTimeoutIdle): any;
export declare function appmeshRouteSpecHttp2RouteTimeoutIdleToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference | AppmeshRouteSpecHttp2RouteTimeoutIdle): any;
export declare class AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any;
export declare function appmeshRouteSpecHttp2RouteTimeoutPerRequestToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any;
export declare class AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecHttp2RouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest;
}
export declare function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutOutputReference | AppmeshRouteSpecHttp2RouteTimeout): any;
export declare function appmeshRouteSpecHttp2RouteTimeoutToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutOutputReference | AppmeshRouteSpecHttp2RouteTimeout): any;
export declare class AppmeshRouteSpecHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2RouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2RouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecHttp2RouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecHttp2RouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecHttp2RouteTimeoutIdle | undefined;
    private _perRequest;
    get perRequest(): AppmeshRouteSpecHttp2RouteTimeoutPerRequestOutputReference;
    putPerRequest(value: AppmeshRouteSpecHttp2RouteTimeoutPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshRouteSpecHttp2RouteTimeoutPerRequest | undefined;
}
export interface AppmeshRouteSpecHttp2Route {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttp2RouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttp2RouteMatch;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout;
}
export declare function appmeshRouteSpecHttp2RouteToTerraform(struct?: AppmeshRouteSpecHttp2RouteOutputReference | AppmeshRouteSpecHttp2Route): any;
export declare function appmeshRouteSpecHttp2RouteToHclTerraform(struct?: AppmeshRouteSpecHttp2RouteOutputReference | AppmeshRouteSpecHttp2Route): any;
export declare class AppmeshRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttp2Route | undefined;
    set internalValue(value: AppmeshRouteSpecHttp2Route | undefined);
    private _action;
    get action(): AppmeshRouteSpecHttp2RouteActionOutputReference;
    putAction(value: AppmeshRouteSpecHttp2RouteAction): void;
    get actionInput(): AppmeshRouteSpecHttp2RouteAction | undefined;
    private _match;
    get match(): AppmeshRouteSpecHttp2RouteMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttp2RouteMatch): void;
    get matchInput(): AppmeshRouteSpecHttp2RouteMatch | undefined;
    private _retryPolicy;
    get retryPolicy(): AppmeshRouteSpecHttp2RouteRetryPolicyOutputReference;
    putRetryPolicy(value: AppmeshRouteSpecHttp2RouteRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): AppmeshRouteSpecHttp2RouteRetryPolicy | undefined;
    private _timeout;
    get timeout(): AppmeshRouteSpecHttp2RouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecHttp2RouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecHttp2RouteTimeout | undefined;
}
export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget | cdktf.IResolvable): any;
export declare function appmeshRouteSpecHttpRouteActionWeightedTargetToHclTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteActionWeightedTarget | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteActionWeightedTarget | cdktf.IResolvable | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _virtualNode?;
    get virtualNode(): string;
    set virtualNode(value: string);
    get virtualNodeInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
}
export declare class AppmeshRouteSpecHttpRouteActionWeightedTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecHttpRouteActionWeightedTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecHttpRouteActionWeightedTargetOutputReference;
}
export interface AppmeshRouteSpecHttpRouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[] | cdktf.IResolvable;
}
export declare function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteActionOutputReference | AppmeshRouteSpecHttpRouteAction): any;
export declare function appmeshRouteSpecHttpRouteActionToHclTerraform(struct?: AppmeshRouteSpecHttpRouteActionOutputReference | AppmeshRouteSpecHttpRouteAction): any;
export declare class AppmeshRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): AppmeshRouteSpecHttpRouteActionWeightedTargetList;
    putWeightedTarget(value: AppmeshRouteSpecHttpRouteActionWeightedTarget[] | cdktf.IResolvable): void;
    get weightedTargetInput(): cdktf.IResolvable | AppmeshRouteSpecHttpRouteActionWeightedTarget[] | undefined;
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#end AppmeshRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#start AppmeshRoute#start}
    */
    readonly start: number;
}
export declare function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToHclTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare class AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number | undefined;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number | undefined;
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#suffix AppmeshRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#range AppmeshRoute#range}
    */
    readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange;
}
export declare function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatch): any;
export declare function appmeshRouteSpecHttpRouteMatchHeaderMatchToHclTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshRouteSpecHttpRouteMatchHeaderMatch): any;
export declare class AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string | undefined;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string | undefined;
    private _range;
    get range(): AppmeshRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;
    putRange(value: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshRouteSpecHttpRouteMatchHeaderMatchRange | undefined;
}
export interface AppmeshRouteSpecHttpRouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#invert AppmeshRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch;
}
export declare function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader | cdktf.IResolvable): any;
export declare function appmeshRouteSpecHttpRouteMatchHeaderToHclTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecHttpRouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchHeader | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchHeader | cdktf.IResolvable | undefined);
    private _invert?;
    get invert(): boolean | cdktf.IResolvable;
    set invert(value: boolean | cdktf.IResolvable);
    resetInvert(): void;
    get invertInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): AppmeshRouteSpecHttpRouteMatchHeaderMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttpRouteMatchHeaderMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecHttpRouteMatchHeaderMatch | undefined;
}
export declare class AppmeshRouteSpecHttpRouteMatchHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecHttpRouteMatchHeaderOutputReference;
}
export interface AppmeshRouteSpecHttpRouteMatchPath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#regex AppmeshRoute#regex}
    */
    readonly regex?: string;
}
export declare function appmeshRouteSpecHttpRouteMatchPathToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchPathOutputReference | AppmeshRouteSpecHttpRouteMatchPath): any;
export declare function appmeshRouteSpecHttpRouteMatchPathToHclTerraform(struct?: AppmeshRouteSpecHttpRouteMatchPathOutputReference | AppmeshRouteSpecHttpRouteMatchPath): any;
export declare class AppmeshRouteSpecHttpRouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchPath | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchPath | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _regex?;
    get regex(): string;
    set regex(value: string);
    resetRegex(): void;
    get regexInput(): string | undefined;
}
export interface AppmeshRouteSpecHttpRouteMatchQueryParameterMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#exact AppmeshRoute#exact}
    */
    readonly exact?: string;
}
export declare function appmeshRouteSpecHttpRouteMatchQueryParameterMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchQueryParameterMatchOutputReference | AppmeshRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare function appmeshRouteSpecHttpRouteMatchQueryParameterMatchToHclTerraform(struct?: AppmeshRouteSpecHttpRouteMatchQueryParameterMatchOutputReference | AppmeshRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare class AppmeshRouteSpecHttpRouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchQueryParameterMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchQueryParameterMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
}
export interface AppmeshRouteSpecHttpRouteMatchQueryParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#name AppmeshRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecHttpRouteMatchQueryParameterMatch;
}
export declare function appmeshRouteSpecHttpRouteMatchQueryParameterToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable): any;
export declare function appmeshRouteSpecHttpRouteMatchQueryParameterToHclTerraform(struct?: AppmeshRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecHttpRouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): AppmeshRouteSpecHttpRouteMatchQueryParameterMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttpRouteMatchQueryParameterMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecHttpRouteMatchQueryParameterMatch | undefined;
}
export declare class AppmeshRouteSpecHttpRouteMatchQueryParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecHttpRouteMatchQueryParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecHttpRouteMatchQueryParameterOutputReference;
}
export interface AppmeshRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#method AppmeshRoute#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#prefix AppmeshRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#scheme AppmeshRoute#scheme}
    */
    readonly scheme?: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#header AppmeshRoute#header}
    */
    readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable;
    /**
    * path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#path AppmeshRoute#path}
    */
    readonly path?: AppmeshRouteSpecHttpRouteMatchPath;
    /**
    * query_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#query_parameter AppmeshRoute#query_parameter}
    */
    readonly queryParameter?: AppmeshRouteSpecHttpRouteMatchQueryParameter[] | cdktf.IResolvable;
}
export declare function appmeshRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchOutputReference | AppmeshRouteSpecHttpRouteMatch): any;
export declare function appmeshRouteSpecHttpRouteMatchToHclTerraform(struct?: AppmeshRouteSpecHttpRouteMatchOutputReference | AppmeshRouteSpecHttpRouteMatch): any;
export declare class AppmeshRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteMatch | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteMatch | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    resetMethod(): void;
    get methodInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _scheme?;
    get scheme(): string;
    set scheme(value: string);
    resetScheme(): void;
    get schemeInput(): string | undefined;
    private _header;
    get header(): AppmeshRouteSpecHttpRouteMatchHeaderList;
    putHeader(value: AppmeshRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | AppmeshRouteSpecHttpRouteMatchHeader[] | undefined;
    private _path;
    get path(): AppmeshRouteSpecHttpRouteMatchPathOutputReference;
    putPath(value: AppmeshRouteSpecHttpRouteMatchPath): void;
    resetPath(): void;
    get pathInput(): AppmeshRouteSpecHttpRouteMatchPath | undefined;
    private _queryParameter;
    get queryParameter(): AppmeshRouteSpecHttpRouteMatchQueryParameterList;
    putQueryParameter(value: AppmeshRouteSpecHttpRouteMatchQueryParameter[] | cdktf.IResolvable): void;
    resetQueryParameter(): void;
    get queryParameterInput(): cdktf.IResolvable | AppmeshRouteSpecHttpRouteMatchQueryParameter[] | undefined;
}
export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any;
export declare function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference | AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any;
export declare class AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecHttpRouteRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#http_retry_events AppmeshRoute#http_retry_events}
    */
    readonly httpRetryEvents?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#max_retries AppmeshRoute#max_retries}
    */
    readonly maxRetries: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#tcp_retry_events AppmeshRoute#tcp_retry_events}
    */
    readonly tcpRetryEvents?: string[];
    /**
    * per_retry_timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#per_retry_timeout AppmeshRoute#per_retry_timeout}
    */
    readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout;
}
export declare function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference | AppmeshRouteSpecHttpRouteRetryPolicy): any;
export declare function appmeshRouteSpecHttpRouteRetryPolicyToHclTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyOutputReference | AppmeshRouteSpecHttpRouteRetryPolicy): any;
export declare class AppmeshRouteSpecHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteRetryPolicy | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteRetryPolicy | undefined);
    private _httpRetryEvents?;
    get httpRetryEvents(): string[];
    set httpRetryEvents(value: string[]);
    resetHttpRetryEvents(): void;
    get httpRetryEventsInput(): string[] | undefined;
    private _maxRetries?;
    get maxRetries(): number;
    set maxRetries(value: number);
    get maxRetriesInput(): number | undefined;
    private _tcpRetryEvents?;
    get tcpRetryEvents(): string[];
    set tcpRetryEvents(value: string[]);
    resetTcpRetryEvents(): void;
    get tcpRetryEventsInput(): string[] | undefined;
    private _perRetryTimeout;
    get perRetryTimeout(): AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutOutputReference;
    putPerRetryTimeout(value: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): void;
    get perRetryTimeoutInput(): AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout | undefined;
}
export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference | AppmeshRouteSpecHttpRouteTimeoutIdle): any;
export declare function appmeshRouteSpecHttpRouteTimeoutIdleToHclTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference | AppmeshRouteSpecHttpRouteTimeoutIdle): any;
export declare class AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttpRouteTimeoutPerRequest): any;
export declare function appmeshRouteSpecHttpRouteTimeoutPerRequestToHclTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference | AppmeshRouteSpecHttpRouteTimeoutPerRequest): any;
export declare class AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecHttpRouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle;
    /**
    * per_request block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#per_request AppmeshRoute#per_request}
    */
    readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest;
}
export declare function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutOutputReference | AppmeshRouteSpecHttpRouteTimeout): any;
export declare function appmeshRouteSpecHttpRouteTimeoutToHclTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutOutputReference | AppmeshRouteSpecHttpRouteTimeout): any;
export declare class AppmeshRouteSpecHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecHttpRouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecHttpRouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecHttpRouteTimeoutIdle | undefined;
    private _perRequest;
    get perRequest(): AppmeshRouteSpecHttpRouteTimeoutPerRequestOutputReference;
    putPerRequest(value: AppmeshRouteSpecHttpRouteTimeoutPerRequest): void;
    resetPerRequest(): void;
    get perRequestInput(): AppmeshRouteSpecHttpRouteTimeoutPerRequest | undefined;
}
export interface AppmeshRouteSpecHttpRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecHttpRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match: AppmeshRouteSpecHttpRouteMatch;
    /**
    * retry_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#retry_policy AppmeshRoute#retry_policy}
    */
    readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecHttpRouteTimeout;
}
export declare function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRouteOutputReference | AppmeshRouteSpecHttpRoute): any;
export declare function appmeshRouteSpecHttpRouteToHclTerraform(struct?: AppmeshRouteSpecHttpRouteOutputReference | AppmeshRouteSpecHttpRoute): any;
export declare class AppmeshRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecHttpRoute | undefined;
    set internalValue(value: AppmeshRouteSpecHttpRoute | undefined);
    private _action;
    get action(): AppmeshRouteSpecHttpRouteActionOutputReference;
    putAction(value: AppmeshRouteSpecHttpRouteAction): void;
    get actionInput(): AppmeshRouteSpecHttpRouteAction | undefined;
    private _match;
    get match(): AppmeshRouteSpecHttpRouteMatchOutputReference;
    putMatch(value: AppmeshRouteSpecHttpRouteMatch): void;
    get matchInput(): AppmeshRouteSpecHttpRouteMatch | undefined;
    private _retryPolicy;
    get retryPolicy(): AppmeshRouteSpecHttpRouteRetryPolicyOutputReference;
    putRetryPolicy(value: AppmeshRouteSpecHttpRouteRetryPolicy): void;
    resetRetryPolicy(): void;
    get retryPolicyInput(): AppmeshRouteSpecHttpRouteRetryPolicy | undefined;
    private _timeout;
    get timeout(): AppmeshRouteSpecHttpRouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecHttpRouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecHttpRouteTimeout | undefined;
}
export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#virtual_node AppmeshRoute#virtual_node}
    */
    readonly virtualNode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weight AppmeshRoute#weight}
    */
    readonly weight: number;
}
export declare function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget | cdktf.IResolvable): any;
export declare function appmeshRouteSpecTcpRouteActionWeightedTargetToHclTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget | cdktf.IResolvable): any;
export declare class AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshRouteSpecTcpRouteActionWeightedTarget | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteActionWeightedTarget | cdktf.IResolvable | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _virtualNode?;
    get virtualNode(): string;
    set virtualNode(value: string);
    get virtualNodeInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
}
export declare class AppmeshRouteSpecTcpRouteActionWeightedTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshRouteSpecTcpRouteActionWeightedTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshRouteSpecTcpRouteActionWeightedTargetOutputReference;
}
export interface AppmeshRouteSpecTcpRouteAction {
    /**
    * weighted_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#weighted_target AppmeshRoute#weighted_target}
    */
    readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[] | cdktf.IResolvable;
}
export declare function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteActionOutputReference | AppmeshRouteSpecTcpRouteAction): any;
export declare function appmeshRouteSpecTcpRouteActionToHclTerraform(struct?: AppmeshRouteSpecTcpRouteActionOutputReference | AppmeshRouteSpecTcpRouteAction): any;
export declare class AppmeshRouteSpecTcpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecTcpRouteAction | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteAction | undefined);
    private _weightedTarget;
    get weightedTarget(): AppmeshRouteSpecTcpRouteActionWeightedTargetList;
    putWeightedTarget(value: AppmeshRouteSpecTcpRouteActionWeightedTarget[] | cdktf.IResolvable): void;
    get weightedTargetInput(): cdktf.IResolvable | AppmeshRouteSpecTcpRouteActionWeightedTarget[] | undefined;
}
export interface AppmeshRouteSpecTcpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#port AppmeshRoute#port}
    */
    readonly port?: number;
}
export declare function appmeshRouteSpecTcpRouteMatchToTerraform(struct?: AppmeshRouteSpecTcpRouteMatchOutputReference | AppmeshRouteSpecTcpRouteMatch): any;
export declare function appmeshRouteSpecTcpRouteMatchToHclTerraform(struct?: AppmeshRouteSpecTcpRouteMatchOutputReference | AppmeshRouteSpecTcpRouteMatch): any;
export declare class AppmeshRouteSpecTcpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecTcpRouteMatch | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteMatch | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
}
export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#unit AppmeshRoute#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#value AppmeshRoute#value}
    */
    readonly value: number;
}
export declare function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference | AppmeshRouteSpecTcpRouteTimeoutIdle): any;
export declare function appmeshRouteSpecTcpRouteTimeoutIdleToHclTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference | AppmeshRouteSpecTcpRouteTimeoutIdle): any;
export declare class AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecTcpRouteTimeoutIdle | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteTimeoutIdle | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number | undefined;
}
export interface AppmeshRouteSpecTcpRouteTimeout {
    /**
    * idle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#idle AppmeshRoute#idle}
    */
    readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle;
}
export declare function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutOutputReference | AppmeshRouteSpecTcpRouteTimeout): any;
export declare function appmeshRouteSpecTcpRouteTimeoutToHclTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutOutputReference | AppmeshRouteSpecTcpRouteTimeout): any;
export declare class AppmeshRouteSpecTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecTcpRouteTimeout | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRouteTimeout | undefined);
    private _idle;
    get idle(): AppmeshRouteSpecTcpRouteTimeoutIdleOutputReference;
    putIdle(value: AppmeshRouteSpecTcpRouteTimeoutIdle): void;
    resetIdle(): void;
    get idleInput(): AppmeshRouteSpecTcpRouteTimeoutIdle | undefined;
}
export interface AppmeshRouteSpecTcpRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#action AppmeshRoute#action}
    */
    readonly action: AppmeshRouteSpecTcpRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#match AppmeshRoute#match}
    */
    readonly match?: AppmeshRouteSpecTcpRouteMatch;
    /**
    * timeout block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#timeout AppmeshRoute#timeout}
    */
    readonly timeout?: AppmeshRouteSpecTcpRouteTimeout;
}
export declare function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRouteOutputReference | AppmeshRouteSpecTcpRoute): any;
export declare function appmeshRouteSpecTcpRouteToHclTerraform(struct?: AppmeshRouteSpecTcpRouteOutputReference | AppmeshRouteSpecTcpRoute): any;
export declare class AppmeshRouteSpecTcpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpecTcpRoute | undefined;
    set internalValue(value: AppmeshRouteSpecTcpRoute | undefined);
    private _action;
    get action(): AppmeshRouteSpecTcpRouteActionOutputReference;
    putAction(value: AppmeshRouteSpecTcpRouteAction): void;
    get actionInput(): AppmeshRouteSpecTcpRouteAction | undefined;
    private _match;
    get match(): AppmeshRouteSpecTcpRouteMatchOutputReference;
    putMatch(value: AppmeshRouteSpecTcpRouteMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshRouteSpecTcpRouteMatch | undefined;
    private _timeout;
    get timeout(): AppmeshRouteSpecTcpRouteTimeoutOutputReference;
    putTimeout(value: AppmeshRouteSpecTcpRouteTimeout): void;
    resetTimeout(): void;
    get timeoutInput(): AppmeshRouteSpecTcpRouteTimeout | undefined;
}
export interface AppmeshRouteSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#priority AppmeshRoute#priority}
    */
    readonly priority?: number;
    /**
    * grpc_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#grpc_route AppmeshRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshRouteSpecGrpcRoute;
    /**
    * http2_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#http2_route AppmeshRoute#http2_route}
    */
    readonly http2Route?: AppmeshRouteSpecHttp2Route;
    /**
    * http_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#http_route AppmeshRoute#http_route}
    */
    readonly httpRoute?: AppmeshRouteSpecHttpRoute;
    /**
    * tcp_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#tcp_route AppmeshRoute#tcp_route}
    */
    readonly tcpRoute?: AppmeshRouteSpecTcpRoute;
}
export declare function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpecOutputReference | AppmeshRouteSpec): any;
export declare function appmeshRouteSpecToHclTerraform(struct?: AppmeshRouteSpecOutputReference | AppmeshRouteSpec): any;
export declare class AppmeshRouteSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshRouteSpec | undefined;
    set internalValue(value: AppmeshRouteSpec | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _grpcRoute;
    get grpcRoute(): AppmeshRouteSpecGrpcRouteOutputReference;
    putGrpcRoute(value: AppmeshRouteSpecGrpcRoute): void;
    resetGrpcRoute(): void;
    get grpcRouteInput(): AppmeshRouteSpecGrpcRoute | undefined;
    private _http2Route;
    get http2Route(): AppmeshRouteSpecHttp2RouteOutputReference;
    putHttp2Route(value: AppmeshRouteSpecHttp2Route): void;
    resetHttp2Route(): void;
    get http2RouteInput(): AppmeshRouteSpecHttp2Route | undefined;
    private _httpRoute;
    get httpRoute(): AppmeshRouteSpecHttpRouteOutputReference;
    putHttpRoute(value: AppmeshRouteSpecHttpRoute): void;
    resetHttpRoute(): void;
    get httpRouteInput(): AppmeshRouteSpecHttpRoute | undefined;
    private _tcpRoute;
    get tcpRoute(): AppmeshRouteSpecTcpRouteOutputReference;
    putTcpRoute(value: AppmeshRouteSpecTcpRoute): void;
    resetTcpRoute(): void;
    get tcpRouteInput(): AppmeshRouteSpecTcpRoute | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route aws_appmesh_route}
*/
export declare class AppmeshRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_route";
    /**
    * Generates CDKTF code for importing a AppmeshRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshRoute to import
    * @param importFromId The id of the existing AppmeshRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_route aws_appmesh_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshRouteConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshRouteConfig);
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
    private _virtualRouterName?;
    get virtualRouterName(): string;
    set virtualRouterName(value: string);
    get virtualRouterNameInput(): string | undefined;
    private _spec;
    get spec(): AppmeshRouteSpecOutputReference;
    putSpec(value: AppmeshRouteSpec): void;
    get specInput(): AppmeshRouteSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
