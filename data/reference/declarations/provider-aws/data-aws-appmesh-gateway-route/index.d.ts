/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route#id DataAwsAppmeshGatewayRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route#mesh_name DataAwsAppmeshGatewayRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route#mesh_owner DataAwsAppmeshGatewayRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route#name DataAwsAppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route#tags DataAwsAppmeshGatewayRoute#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route#virtual_gateway_name DataAwsAppmeshGatewayRoute#virtual_gateway_name}
    */
    readonly virtualGatewayName: string;
}
export interface DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
}
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any;
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any;
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined);
    get virtualServiceName(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget {
}
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget): any;
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget): any;
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined);
    get port(): number;
    private _virtualService;
    get virtualService(): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceList;
}
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecGrpcRouteAction {
}
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteAction): any;
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteActionToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteAction): any;
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecGrpcRouteAction | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecGrpcRouteAction | undefined);
    private _target;
    get target(): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionTargetList;
}
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch {
}
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch): any;
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteMatchToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch): any;
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecGrpcRouteMatch | undefined);
    get port(): number;
    get serviceName(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecGrpcRoute {
}
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRoute): any;
export declare function dataAwsAppmeshGatewayRouteSpecGrpcRouteToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecGrpcRoute): any;
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecGrpcRoute | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecGrpcRoute | undefined);
    private _action;
    get action(): DataAwsAppmeshGatewayRouteSpecGrpcRouteActionList;
    private _match;
    get match(): DataAwsAppmeshGatewayRouteSpecGrpcRouteMatchList;
}
export declare class DataAwsAppmeshGatewayRouteSpecGrpcRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecGrpcRouteOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname | undefined);
    get defaultTargetHostname(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePath | undefined);
    get exact(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix | undefined);
    get defaultPrefix(): string;
    get value(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewrite | undefined);
    private _hostname;
    get hostname(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameList;
    private _path;
    get path(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePathList;
    private _prefix;
    get prefix(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined);
    get virtualServiceName(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined);
    get port(): number;
    private _virtualService;
    get virtualService(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteAction {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteAction): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteActionToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteAction): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteAction | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteAction | undefined);
    private _rewrite;
    get rewrite(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionRewriteList;
    private _target;
    get target(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionTargetList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange | undefined);
    get end(): number;
    get start(): number;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch | undefined);
    get exact(): string;
    get prefix(): string;
    private _range;
    get range(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeList;
    get regex(): string;
    get suffix(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeader | undefined);
    get invert(): cdktf.IResolvable;
    private _match;
    get match(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostname | undefined);
    get exact(): string;
    get suffix(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPath | undefined);
    get exact(): string;
    get regex(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch | undefined);
    get exact(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter | undefined);
    private _match;
    get match(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteMatchToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2RouteMatch | undefined);
    private _header;
    get header(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHeaderList;
    private _hostname;
    get hostname(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchHostnameList;
    private _path;
    get path(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchPathList;
    get port(): number;
    get prefix(): string;
    private _queryParameter;
    get queryParameter(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttp2Route {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2Route): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttp2RouteToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttp2Route): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttp2Route | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttp2Route | undefined);
    private _action;
    get action(): DataAwsAppmeshGatewayRouteSpecHttp2RouteActionList;
    private _match;
    get match(): DataAwsAppmeshGatewayRouteSpecHttp2RouteMatchList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttp2RouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttp2RouteOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostname | undefined);
    get defaultTargetHostname(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePath | undefined);
    get exact(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefix | undefined);
    get defaultPrefix(): string;
    get value(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewrite | undefined);
    private _hostname;
    get hostname(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameList;
    private _path;
    get path(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePathList;
    private _prefix;
    get prefix(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewritePrefixList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined);
    get virtualServiceName(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteActionTarget | undefined);
    get port(): number;
    private _virtualService;
    get virtualService(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteAction {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteAction): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteActionToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteAction): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteAction | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteAction | undefined);
    private _rewrite;
    get rewrite(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionRewriteList;
    private _target;
    get target(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionTargetList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteActionOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange | undefined);
    get end(): number;
    get start(): number;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch | undefined);
    get exact(): string;
    get prefix(): string;
    private _range;
    get range(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeList;
    get regex(): string;
    get suffix(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeader | undefined);
    get invert(): cdktf.IResolvable;
    private _match;
    get match(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostname | undefined);
    get exact(): string;
    get suffix(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPath | undefined);
    get exact(): string;
    get regex(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch | undefined);
    get exact(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameter | undefined);
    private _match;
    get match(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchList;
    get name(): string;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRouteMatch {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatch): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteMatchToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRouteMatch): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatch | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRouteMatch | undefined);
    private _header;
    get header(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHeaderList;
    private _hostname;
    get hostname(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchHostnameList;
    private _path;
    get path(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchPathList;
    get port(): number;
    get prefix(): string;
    private _queryParameter;
    get queryParameter(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpecHttpRoute {
}
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteToTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRoute): any;
export declare function dataAwsAppmeshGatewayRouteSpecHttpRouteToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpecHttpRoute): any;
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpecHttpRoute | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpecHttpRoute | undefined);
    private _action;
    get action(): DataAwsAppmeshGatewayRouteSpecHttpRouteActionList;
    private _match;
    get match(): DataAwsAppmeshGatewayRouteSpecHttpRouteMatchList;
}
export declare class DataAwsAppmeshGatewayRouteSpecHttpRouteList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecHttpRouteOutputReference;
}
export interface DataAwsAppmeshGatewayRouteSpec {
}
export declare function dataAwsAppmeshGatewayRouteSpecToTerraform(struct?: DataAwsAppmeshGatewayRouteSpec): any;
export declare function dataAwsAppmeshGatewayRouteSpecToHclTerraform(struct?: DataAwsAppmeshGatewayRouteSpec): any;
export declare class DataAwsAppmeshGatewayRouteSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppmeshGatewayRouteSpec | undefined;
    set internalValue(value: DataAwsAppmeshGatewayRouteSpec | undefined);
    private _grpcRoute;
    get grpcRoute(): DataAwsAppmeshGatewayRouteSpecGrpcRouteList;
    private _http2Route;
    get http2Route(): DataAwsAppmeshGatewayRouteSpecHttp2RouteList;
    private _httpRoute;
    get httpRoute(): DataAwsAppmeshGatewayRouteSpecHttpRouteList;
    get priority(): number;
}
export declare class DataAwsAppmeshGatewayRouteSpecList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppmeshGatewayRouteSpecOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route aws_appmesh_gateway_route}
*/
export declare class DataAwsAppmeshGatewayRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appmesh_gateway_route";
    /**
    * Generates CDKTF code for importing a DataAwsAppmeshGatewayRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppmeshGatewayRoute to import
    * @param importFromId The id of the existing DataAwsAppmeshGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppmeshGatewayRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appmesh_gateway_route aws_appmesh_gateway_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppmeshGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppmeshGatewayRouteConfig);
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
    get spec(): DataAwsAppmeshGatewayRouteSpecList;
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
    private _virtualGatewayName?;
    get virtualGatewayName(): string;
    set virtualGatewayName(value: string);
    get virtualGatewayNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
