/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#id AppmeshGatewayRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#mesh_name AppmeshGatewayRoute#mesh_name}
    */
    readonly meshName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#mesh_owner AppmeshGatewayRoute#mesh_owner}
    */
    readonly meshOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#tags AppmeshGatewayRoute#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#tags_all AppmeshGatewayRoute#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}
    */
    readonly virtualGatewayName: string;
    /**
    * spec block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#spec AppmeshGatewayRoute#spec}
    */
    readonly spec: AppmeshGatewayRouteSpec;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any;
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}
    */
    readonly port?: number;
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any;
export declare function appmeshGatewayRouteSpecGrpcRouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference | AppmeshGatewayRouteSpecGrpcRouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRouteAction {
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget;
}
export declare function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any;
export declare function appmeshGatewayRouteSpecGrpcRouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionOutputReference | AppmeshGatewayRouteSpecGrpcRouteAction): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteAction | undefined);
    private _target;
    get target(): AppmeshGatewayRouteSpecGrpcRouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecGrpcRouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecGrpcRouteActionTarget | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#service_name AppmeshGatewayRoute#service_name}
    */
    readonly serviceName: string;
}
export declare function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any;
export declare function appmeshGatewayRouteSpecGrpcRouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference | AppmeshGatewayRouteSpecGrpcRouteMatch): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRouteMatch | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecGrpcRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecGrpcRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch;
}
export declare function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any;
export declare function appmeshGatewayRouteSpecGrpcRouteToHclTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteOutputReference | AppmeshGatewayRouteSpecGrpcRoute): any;
export declare class AppmeshGatewayRouteSpecGrpcRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecGrpcRoute | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecGrpcRoute | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecGrpcRouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecGrpcRouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecGrpcRouteAction | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecGrpcRouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecGrpcRouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecGrpcRouteMatch | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}
    */
    readonly defaultTargetHostname: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname | undefined);
    private _defaultTargetHostname?;
    get defaultTargetHostname(): string;
    set defaultTargetHostname(value: string);
    get defaultTargetHostnameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionRewritePath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewritePathToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewritePath): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewritePathToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewritePath): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionRewritePath | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionRewritePath | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    get exactInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}
    */
    readonly defaultPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#value AppmeshGatewayRoute#value}
    */
    readonly value?: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewritePrefixToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewritePrefixToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix | undefined);
    private _defaultPrefix?;
    get defaultPrefix(): string;
    set defaultPrefix(value: string);
    resetDefaultPrefix(): void;
    get defaultPrefixInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionRewrite {
    /**
    * hostname block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}
    */
    readonly hostname?: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname;
    /**
    * path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}
    */
    readonly path?: AppmeshGatewayRouteSpecHttp2RouteActionRewritePath;
    /**
    * prefix block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix?: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewriteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewrite): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionRewriteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionRewrite): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionRewrite | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionRewrite | undefined);
    private _hostname;
    get hostname(): AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostnameOutputReference;
    putHostname(value: AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname): void;
    resetHostname(): void;
    get hostnameInput(): AppmeshGatewayRouteSpecHttp2RouteActionRewriteHostname | undefined;
    private _path;
    get path(): AppmeshGatewayRouteSpecHttp2RouteActionRewritePathOutputReference;
    putPath(value: AppmeshGatewayRouteSpecHttp2RouteActionRewritePath): void;
    resetPath(): void;
    get pathInput(): AppmeshGatewayRouteSpecHttp2RouteActionRewritePath | undefined;
    private _prefix;
    get prefix(): AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefixOutputReference;
    putPrefix(value: AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix): void;
    resetPrefix(): void;
    get prefixInput(): AppmeshGatewayRouteSpecHttp2RouteActionRewritePrefix | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}
    */
    readonly port?: number;
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttp2RouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteAction {
    /**
    * rewrite block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}
    */
    readonly rewrite?: AppmeshGatewayRouteSpecHttp2RouteActionRewrite;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget;
}
export declare function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any;
export declare function appmeshGatewayRouteSpecHttp2RouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionOutputReference | AppmeshGatewayRouteSpecHttp2RouteAction): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteAction | undefined);
    private _rewrite;
    get rewrite(): AppmeshGatewayRouteSpecHttp2RouteActionRewriteOutputReference;
    putRewrite(value: AppmeshGatewayRouteSpecHttp2RouteActionRewrite): void;
    resetRewrite(): void;
    get rewriteInput(): AppmeshGatewayRouteSpecHttp2RouteActionRewrite | undefined;
    private _target;
    get target(): AppmeshGatewayRouteSpecHttp2RouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecHttp2RouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecHttp2RouteActionTarget | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#end AppmeshGatewayRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#start AppmeshGatewayRoute#start}
    */
    readonly start: number;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number | undefined;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#range AppmeshGatewayRoute#range}
    */
    readonly range?: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch | undefined);
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
    get range(): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRangeOutputReference;
    putRange(value: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchRange | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#invert AppmeshGatewayRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match?: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHeaderToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatchHeader | cdktf.IResolvable | undefined);
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
    get match(): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderMatch | undefined;
}
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshGatewayRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderOutputReference;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatchHostname {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}
    */
    readonly suffix?: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHostnameToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchHostname): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchHostnameToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchHostname): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatchHostname | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatchHostname | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatchPath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}
    */
    readonly regex?: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchPathToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchPath): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchPathToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchPath): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatchPath | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatchPath | undefined);
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
export interface AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match?: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchQueryParameterToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchQueryParameterToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterMatch | undefined;
}
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterOutputReference;
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#header AppmeshGatewayRoute#header}
    */
    readonly header?: AppmeshGatewayRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable;
    /**
    * hostname block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}
    */
    readonly hostname?: AppmeshGatewayRouteSpecHttp2RouteMatchHostname;
    /**
    * path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}
    */
    readonly path?: AppmeshGatewayRouteSpecHttp2RouteMatchPath;
    /**
    * query_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#query_parameter AppmeshGatewayRoute#query_parameter}
    */
    readonly queryParameter?: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter[] | cdktf.IResolvable;
}
export declare function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any;
export declare function appmeshGatewayRouteSpecHttp2RouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference | AppmeshGatewayRouteSpecHttp2RouteMatch): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2RouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2RouteMatch | undefined);
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
    private _header;
    get header(): AppmeshGatewayRouteSpecHttp2RouteMatchHeaderList;
    putHeader(value: AppmeshGatewayRouteSpecHttp2RouteMatchHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | AppmeshGatewayRouteSpecHttp2RouteMatchHeader[] | undefined;
    private _hostname;
    get hostname(): AppmeshGatewayRouteSpecHttp2RouteMatchHostnameOutputReference;
    putHostname(value: AppmeshGatewayRouteSpecHttp2RouteMatchHostname): void;
    resetHostname(): void;
    get hostnameInput(): AppmeshGatewayRouteSpecHttp2RouteMatchHostname | undefined;
    private _path;
    get path(): AppmeshGatewayRouteSpecHttp2RouteMatchPathOutputReference;
    putPath(value: AppmeshGatewayRouteSpecHttp2RouteMatchPath): void;
    resetPath(): void;
    get pathInput(): AppmeshGatewayRouteSpecHttp2RouteMatchPath | undefined;
    private _queryParameter;
    get queryParameter(): AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameterList;
    putQueryParameter(value: AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter[] | cdktf.IResolvable): void;
    resetQueryParameter(): void;
    get queryParameterInput(): cdktf.IResolvable | AppmeshGatewayRouteSpecHttp2RouteMatchQueryParameter[] | undefined;
}
export interface AppmeshGatewayRouteSpecHttp2Route {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttp2RouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch;
}
export declare function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any;
export declare function appmeshGatewayRouteSpecHttp2RouteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteOutputReference | AppmeshGatewayRouteSpecHttp2Route): any;
export declare class AppmeshGatewayRouteSpecHttp2RouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttp2Route | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttp2Route | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecHttp2RouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecHttp2RouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecHttp2RouteAction | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttp2RouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttp2RouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecHttp2RouteMatch | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#default_target_hostname AppmeshGatewayRoute#default_target_hostname}
    */
    readonly defaultTargetHostname: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionRewriteHostnameToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionRewriteHostnameToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname | undefined);
    private _defaultTargetHostname?;
    get defaultTargetHostname(): string;
    set defaultTargetHostname(value: string);
    get defaultTargetHostnameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionRewritePath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionRewritePathToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewritePath): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionRewritePathToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewritePath): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionRewritePath | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionRewritePath | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    get exactInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#default_prefix AppmeshGatewayRoute#default_prefix}
    */
    readonly defaultPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#value AppmeshGatewayRoute#value}
    */
    readonly value?: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionRewritePrefixToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionRewritePrefixToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix | undefined);
    private _defaultPrefix?;
    get defaultPrefix(): string;
    set defaultPrefix(value: string);
    resetDefaultPrefix(): void;
    get defaultPrefixInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionRewrite {
    /**
    * hostname block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}
    */
    readonly hostname?: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname;
    /**
    * path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}
    */
    readonly path?: AppmeshGatewayRouteSpecHttpRouteActionRewritePath;
    /**
    * prefix block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix?: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionRewriteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewrite): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionRewriteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference | AppmeshGatewayRouteSpecHttpRouteActionRewrite): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionRewrite | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionRewrite | undefined);
    private _hostname;
    get hostname(): AppmeshGatewayRouteSpecHttpRouteActionRewriteHostnameOutputReference;
    putHostname(value: AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname): void;
    resetHostname(): void;
    get hostnameInput(): AppmeshGatewayRouteSpecHttpRouteActionRewriteHostname | undefined;
    private _path;
    get path(): AppmeshGatewayRouteSpecHttpRouteActionRewritePathOutputReference;
    putPath(value: AppmeshGatewayRouteSpecHttpRouteActionRewritePath): void;
    resetPath(): void;
    get pathInput(): AppmeshGatewayRouteSpecHttpRouteActionRewritePath | undefined;
    private _prefix;
    get prefix(): AppmeshGatewayRouteSpecHttpRouteActionRewritePrefixOutputReference;
    putPrefix(value: AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix): void;
    resetPrefix(): void;
    get prefixInput(): AppmeshGatewayRouteSpecHttpRouteActionRewritePrefix | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
    */
    readonly virtualServiceName: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined);
    private _virtualServiceName?;
    get virtualServiceName(): string;
    set virtualServiceName(value: string);
    get virtualServiceNameInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}
    */
    readonly port?: number;
    /**
    * virtual_service block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#virtual_service AppmeshGatewayRoute#virtual_service}
    */
    readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionTargetToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference | AppmeshGatewayRouteSpecHttpRouteActionTarget): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined);
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _virtualService;
    get virtualService(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceOutputReference;
    putVirtualService(value: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): void;
    get virtualServiceInput(): AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteAction {
    /**
    * rewrite block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#rewrite AppmeshGatewayRoute#rewrite}
    */
    readonly rewrite?: AppmeshGatewayRouteSpecHttpRouteActionRewrite;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#target AppmeshGatewayRoute#target}
    */
    readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget;
}
export declare function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any;
export declare function appmeshGatewayRouteSpecHttpRouteActionToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionOutputReference | AppmeshGatewayRouteSpecHttpRouteAction): any;
export declare class AppmeshGatewayRouteSpecHttpRouteActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteAction | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteAction | undefined);
    private _rewrite;
    get rewrite(): AppmeshGatewayRouteSpecHttpRouteActionRewriteOutputReference;
    putRewrite(value: AppmeshGatewayRouteSpecHttpRouteActionRewrite): void;
    resetRewrite(): void;
    get rewriteInput(): AppmeshGatewayRouteSpecHttpRouteActionRewrite | undefined;
    private _target;
    get target(): AppmeshGatewayRouteSpecHttpRouteActionTargetOutputReference;
    putTarget(value: AppmeshGatewayRouteSpecHttpRouteActionTarget): void;
    get targetInput(): AppmeshGatewayRouteSpecHttpRouteActionTarget | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#end AppmeshGatewayRoute#end}
    */
    readonly end: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#start AppmeshGatewayRoute#start}
    */
    readonly start: number;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange | undefined);
    private _end?;
    get end(): number;
    set end(value: number);
    get endInput(): number | undefined;
    private _start?;
    get start(): number;
    set start(value: number);
    get startInput(): number | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}
    */
    readonly suffix?: string;
    /**
    * range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#range AppmeshGatewayRoute#range}
    */
    readonly range?: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchHeaderMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch | undefined);
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
    get range(): AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRangeOutputReference;
    putRange(value: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange): void;
    resetRange(): void;
    get rangeInput(): AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchRange | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatchHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#invert AppmeshGatewayRoute#invert}
    */
    readonly invert?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match?: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHeader | cdktf.IResolvable): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchHeaderToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHeader | cdktf.IResolvable): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatchHeader | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatchHeader | cdktf.IResolvable | undefined);
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
    get match(): AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshGatewayRouteSpecHttpRouteMatchHeaderMatch | undefined;
}
export declare class AppmeshGatewayRouteSpecHttpRouteMatchHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshGatewayRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshGatewayRouteSpecHttpRouteMatchHeaderOutputReference;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatchHostname {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#suffix AppmeshGatewayRoute#suffix}
    */
    readonly suffix?: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchHostnameToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchHostname): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchHostnameToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchHostname): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatchHostname | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatchHostname | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
    private _suffix?;
    get suffix(): string;
    set suffix(value: string);
    resetSuffix(): void;
    get suffixInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatchPath {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#regex AppmeshGatewayRoute#regex}
    */
    readonly regex?: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchPathToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchPath): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchPathToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchPath): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatchPath | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatchPath | undefined);
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
export interface AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#exact AppmeshGatewayRoute#exact}
    */
    readonly exact?: string;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch | undefined);
    private _exact?;
    get exact(): string;
    set exact(value: string);
    resetExact(): void;
    get exactInput(): string | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#name AppmeshGatewayRoute#name}
    */
    readonly name: string;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match?: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchQueryParameterToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchQueryParameterToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch): void;
    resetMatch(): void;
    get matchInput(): AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterMatch | undefined;
}
export declare class AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterOutputReference;
}
export interface AppmeshGatewayRouteSpecHttpRouteMatch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#port AppmeshGatewayRoute#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#prefix AppmeshGatewayRoute#prefix}
    */
    readonly prefix?: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#header AppmeshGatewayRoute#header}
    */
    readonly header?: AppmeshGatewayRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable;
    /**
    * hostname block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#hostname AppmeshGatewayRoute#hostname}
    */
    readonly hostname?: AppmeshGatewayRouteSpecHttpRouteMatchHostname;
    /**
    * path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#path AppmeshGatewayRoute#path}
    */
    readonly path?: AppmeshGatewayRouteSpecHttpRouteMatchPath;
    /**
    * query_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#query_parameter AppmeshGatewayRoute#query_parameter}
    */
    readonly queryParameter?: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter[] | cdktf.IResolvable;
}
export declare function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any;
export declare function appmeshGatewayRouteSpecHttpRouteMatchToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatchOutputReference | AppmeshGatewayRouteSpecHttpRouteMatch): any;
export declare class AppmeshGatewayRouteSpecHttpRouteMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRouteMatch | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRouteMatch | undefined);
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
    private _header;
    get header(): AppmeshGatewayRouteSpecHttpRouteMatchHeaderList;
    putHeader(value: AppmeshGatewayRouteSpecHttpRouteMatchHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | AppmeshGatewayRouteSpecHttpRouteMatchHeader[] | undefined;
    private _hostname;
    get hostname(): AppmeshGatewayRouteSpecHttpRouteMatchHostnameOutputReference;
    putHostname(value: AppmeshGatewayRouteSpecHttpRouteMatchHostname): void;
    resetHostname(): void;
    get hostnameInput(): AppmeshGatewayRouteSpecHttpRouteMatchHostname | undefined;
    private _path;
    get path(): AppmeshGatewayRouteSpecHttpRouteMatchPathOutputReference;
    putPath(value: AppmeshGatewayRouteSpecHttpRouteMatchPath): void;
    resetPath(): void;
    get pathInput(): AppmeshGatewayRouteSpecHttpRouteMatchPath | undefined;
    private _queryParameter;
    get queryParameter(): AppmeshGatewayRouteSpecHttpRouteMatchQueryParameterList;
    putQueryParameter(value: AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter[] | cdktf.IResolvable): void;
    resetQueryParameter(): void;
    get queryParameterInput(): cdktf.IResolvable | AppmeshGatewayRouteSpecHttpRouteMatchQueryParameter[] | undefined;
}
export interface AppmeshGatewayRouteSpecHttpRoute {
    /**
    * action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#action AppmeshGatewayRoute#action}
    */
    readonly action: AppmeshGatewayRouteSpecHttpRouteAction;
    /**
    * match block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#match AppmeshGatewayRoute#match}
    */
    readonly match: AppmeshGatewayRouteSpecHttpRouteMatch;
}
export declare function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any;
export declare function appmeshGatewayRouteSpecHttpRouteToHclTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteOutputReference | AppmeshGatewayRouteSpecHttpRoute): any;
export declare class AppmeshGatewayRouteSpecHttpRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpecHttpRoute | undefined;
    set internalValue(value: AppmeshGatewayRouteSpecHttpRoute | undefined);
    private _action;
    get action(): AppmeshGatewayRouteSpecHttpRouteActionOutputReference;
    putAction(value: AppmeshGatewayRouteSpecHttpRouteAction): void;
    get actionInput(): AppmeshGatewayRouteSpecHttpRouteAction | undefined;
    private _match;
    get match(): AppmeshGatewayRouteSpecHttpRouteMatchOutputReference;
    putMatch(value: AppmeshGatewayRouteSpecHttpRouteMatch): void;
    get matchInput(): AppmeshGatewayRouteSpecHttpRouteMatch | undefined;
}
export interface AppmeshGatewayRouteSpec {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#priority AppmeshGatewayRoute#priority}
    */
    readonly priority?: number;
    /**
    * grpc_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#grpc_route AppmeshGatewayRoute#grpc_route}
    */
    readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute;
    /**
    * http2_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#http2_route AppmeshGatewayRoute#http2_route}
    */
    readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route;
    /**
    * http_route block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#http_route AppmeshGatewayRoute#http_route}
    */
    readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute;
}
export declare function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any;
export declare function appmeshGatewayRouteSpecToHclTerraform(struct?: AppmeshGatewayRouteSpecOutputReference | AppmeshGatewayRouteSpec): any;
export declare class AppmeshGatewayRouteSpecOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppmeshGatewayRouteSpec | undefined;
    set internalValue(value: AppmeshGatewayRouteSpec | undefined);
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    private _grpcRoute;
    get grpcRoute(): AppmeshGatewayRouteSpecGrpcRouteOutputReference;
    putGrpcRoute(value: AppmeshGatewayRouteSpecGrpcRoute): void;
    resetGrpcRoute(): void;
    get grpcRouteInput(): AppmeshGatewayRouteSpecGrpcRoute | undefined;
    private _http2Route;
    get http2Route(): AppmeshGatewayRouteSpecHttp2RouteOutputReference;
    putHttp2Route(value: AppmeshGatewayRouteSpecHttp2Route): void;
    resetHttp2Route(): void;
    get http2RouteInput(): AppmeshGatewayRouteSpecHttp2Route | undefined;
    private _httpRoute;
    get httpRoute(): AppmeshGatewayRouteSpecHttpRouteOutputReference;
    putHttpRoute(value: AppmeshGatewayRouteSpecHttpRoute): void;
    resetHttpRoute(): void;
    get httpRouteInput(): AppmeshGatewayRouteSpecHttpRoute | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route}
*/
export declare class AppmeshGatewayRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appmesh_gateway_route";
    /**
    * Generates CDKTF code for importing a AppmeshGatewayRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppmeshGatewayRoute to import
    * @param importFromId The id of the existing AppmeshGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppmeshGatewayRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appmesh_gateway_route aws_appmesh_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig);
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
    private _virtualGatewayName?;
    get virtualGatewayName(): string;
    set virtualGatewayName(value: string);
    get virtualGatewayNameInput(): string | undefined;
    private _spec;
    get spec(): AppmeshGatewayRouteSpecOutputReference;
    putSpec(value: AppmeshGatewayRouteSpec): void;
    get specInput(): AppmeshGatewayRouteSpec | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
