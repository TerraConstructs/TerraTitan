/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#arn DataAwsLbListener#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#id DataAwsLbListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#load_balancer_arn DataAwsLbListener#load_balancer_arn}
    */
    readonly loadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#port DataAwsLbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#tags DataAwsLbListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#timeouts DataAwsLbListener#timeouts}
    */
    readonly timeouts?: DataAwsLbListenerTimeouts;
}
export interface DataAwsLbListenerDefaultActionAuthenticateCognito {
}
export declare function dataAwsLbListenerDefaultActionAuthenticateCognitoToTerraform(struct?: DataAwsLbListenerDefaultActionAuthenticateCognito): any;
export declare function dataAwsLbListenerDefaultActionAuthenticateCognitoToHclTerraform(struct?: DataAwsLbListenerDefaultActionAuthenticateCognito): any;
export declare class DataAwsLbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultActionAuthenticateCognito | undefined;
    set internalValue(value: DataAwsLbListenerDefaultActionAuthenticateCognito | undefined);
    private _authenticationRequestExtraParams;
    get authenticationRequestExtraParams(): cdktf.StringMap;
    get onUnauthenticatedRequest(): string;
    get scope(): string;
    get sessionCookieName(): string;
    get sessionTimeout(): number;
    get userPoolArn(): string;
    get userPoolClientId(): string;
    get userPoolDomain(): string;
}
export declare class DataAwsLbListenerDefaultActionAuthenticateCognitoList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionAuthenticateCognitoOutputReference;
}
export interface DataAwsLbListenerDefaultActionAuthenticateOidc {
}
export declare function dataAwsLbListenerDefaultActionAuthenticateOidcToTerraform(struct?: DataAwsLbListenerDefaultActionAuthenticateOidc): any;
export declare function dataAwsLbListenerDefaultActionAuthenticateOidcToHclTerraform(struct?: DataAwsLbListenerDefaultActionAuthenticateOidc): any;
export declare class DataAwsLbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultActionAuthenticateOidc | undefined;
    set internalValue(value: DataAwsLbListenerDefaultActionAuthenticateOidc | undefined);
    private _authenticationRequestExtraParams;
    get authenticationRequestExtraParams(): cdktf.StringMap;
    get authorizationEndpoint(): string;
    get clientId(): string;
    get clientSecret(): string;
    get issuer(): string;
    get onUnauthenticatedRequest(): string;
    get scope(): string;
    get sessionCookieName(): string;
    get sessionTimeout(): number;
    get tokenEndpoint(): string;
    get userInfoEndpoint(): string;
}
export declare class DataAwsLbListenerDefaultActionAuthenticateOidcList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionAuthenticateOidcOutputReference;
}
export interface DataAwsLbListenerDefaultActionFixedResponse {
}
export declare function dataAwsLbListenerDefaultActionFixedResponseToTerraform(struct?: DataAwsLbListenerDefaultActionFixedResponse): any;
export declare function dataAwsLbListenerDefaultActionFixedResponseToHclTerraform(struct?: DataAwsLbListenerDefaultActionFixedResponse): any;
export declare class DataAwsLbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: DataAwsLbListenerDefaultActionFixedResponse | undefined);
    get contentType(): string;
    get messageBody(): string;
    get statusCode(): string;
}
export declare class DataAwsLbListenerDefaultActionFixedResponseList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionFixedResponseOutputReference;
}
export interface DataAwsLbListenerDefaultActionForwardStickiness {
}
export declare function dataAwsLbListenerDefaultActionForwardStickinessToTerraform(struct?: DataAwsLbListenerDefaultActionForwardStickiness): any;
export declare function dataAwsLbListenerDefaultActionForwardStickinessToHclTerraform(struct?: DataAwsLbListenerDefaultActionForwardStickiness): any;
export declare class DataAwsLbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultActionForwardStickiness | undefined;
    set internalValue(value: DataAwsLbListenerDefaultActionForwardStickiness | undefined);
    get duration(): number;
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsLbListenerDefaultActionForwardStickinessList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionForwardStickinessOutputReference;
}
export interface DataAwsLbListenerDefaultActionForwardTargetGroup {
}
export declare function dataAwsLbListenerDefaultActionForwardTargetGroupToTerraform(struct?: DataAwsLbListenerDefaultActionForwardTargetGroup): any;
export declare function dataAwsLbListenerDefaultActionForwardTargetGroupToHclTerraform(struct?: DataAwsLbListenerDefaultActionForwardTargetGroup): any;
export declare class DataAwsLbListenerDefaultActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultActionForwardTargetGroup | undefined;
    set internalValue(value: DataAwsLbListenerDefaultActionForwardTargetGroup | undefined);
    get arn(): string;
    get weight(): number;
}
export declare class DataAwsLbListenerDefaultActionForwardTargetGroupList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionForwardTargetGroupOutputReference;
}
export interface DataAwsLbListenerDefaultActionForward {
}
export declare function dataAwsLbListenerDefaultActionForwardToTerraform(struct?: DataAwsLbListenerDefaultActionForward): any;
export declare function dataAwsLbListenerDefaultActionForwardToHclTerraform(struct?: DataAwsLbListenerDefaultActionForward): any;
export declare class DataAwsLbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultActionForward | undefined;
    set internalValue(value: DataAwsLbListenerDefaultActionForward | undefined);
    private _stickiness;
    get stickiness(): DataAwsLbListenerDefaultActionForwardStickinessList;
    private _targetGroup;
    get targetGroup(): DataAwsLbListenerDefaultActionForwardTargetGroupList;
}
export declare class DataAwsLbListenerDefaultActionForwardList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionForwardOutputReference;
}
export interface DataAwsLbListenerDefaultActionRedirect {
}
export declare function dataAwsLbListenerDefaultActionRedirectToTerraform(struct?: DataAwsLbListenerDefaultActionRedirect): any;
export declare function dataAwsLbListenerDefaultActionRedirectToHclTerraform(struct?: DataAwsLbListenerDefaultActionRedirect): any;
export declare class DataAwsLbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultActionRedirect | undefined;
    set internalValue(value: DataAwsLbListenerDefaultActionRedirect | undefined);
    get host(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get query(): string;
    get statusCode(): string;
}
export declare class DataAwsLbListenerDefaultActionRedirectList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionRedirectOutputReference;
}
export interface DataAwsLbListenerDefaultAction {
}
export declare function dataAwsLbListenerDefaultActionToTerraform(struct?: DataAwsLbListenerDefaultAction): any;
export declare function dataAwsLbListenerDefaultActionToHclTerraform(struct?: DataAwsLbListenerDefaultAction): any;
export declare class DataAwsLbListenerDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerDefaultAction | undefined;
    set internalValue(value: DataAwsLbListenerDefaultAction | undefined);
    private _authenticateCognito;
    get authenticateCognito(): DataAwsLbListenerDefaultActionAuthenticateCognitoList;
    private _authenticateOidc;
    get authenticateOidc(): DataAwsLbListenerDefaultActionAuthenticateOidcList;
    private _fixedResponse;
    get fixedResponse(): DataAwsLbListenerDefaultActionFixedResponseList;
    private _forward;
    get forward(): DataAwsLbListenerDefaultActionForwardList;
    get order(): number;
    private _redirect;
    get redirect(): DataAwsLbListenerDefaultActionRedirectList;
    get targetGroupArn(): string;
    get type(): string;
}
export declare class DataAwsLbListenerDefaultActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerDefaultActionOutputReference;
}
export interface DataAwsLbListenerMutualAuthentication {
}
export declare function dataAwsLbListenerMutualAuthenticationToTerraform(struct?: DataAwsLbListenerMutualAuthentication): any;
export declare function dataAwsLbListenerMutualAuthenticationToHclTerraform(struct?: DataAwsLbListenerMutualAuthentication): any;
export declare class DataAwsLbListenerMutualAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLbListenerMutualAuthentication | undefined;
    set internalValue(value: DataAwsLbListenerMutualAuthentication | undefined);
    get advertiseTrustStoreCaNames(): string;
    get ignoreClientCertificateExpiry(): cdktf.IResolvable;
    get mode(): string;
    get trustStoreArn(): string;
}
export declare class DataAwsLbListenerMutualAuthenticationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLbListenerMutualAuthenticationOutputReference;
}
export interface DataAwsLbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#read DataAwsLbListener#read}
    */
    readonly read?: string;
}
export declare function dataAwsLbListenerTimeoutsToTerraform(struct?: DataAwsLbListenerTimeouts | cdktf.IResolvable): any;
export declare function dataAwsLbListenerTimeoutsToHclTerraform(struct?: DataAwsLbListenerTimeouts | cdktf.IResolvable): any;
export declare class DataAwsLbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsLbListenerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsLbListenerTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener aws_lb_listener}
*/
export declare class DataAwsLbListener extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lb_listener";
    /**
    * Generates CDKTF code for importing a DataAwsLbListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLbListener to import
    * @param importFromId The id of the existing DataAwsLbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLbListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lb_listener aws_lb_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbListenerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLbListenerConfig);
    get alpnPolicy(): string;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get certificateArn(): string;
    private _defaultAction;
    get defaultAction(): DataAwsLbListenerDefaultActionList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _loadBalancerArn?;
    get loadBalancerArn(): string;
    set loadBalancerArn(value: string);
    resetLoadBalancerArn(): void;
    get loadBalancerArnInput(): string | undefined;
    private _mutualAuthentication;
    get mutualAuthentication(): DataAwsLbListenerMutualAuthenticationList;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    get protocol(): string;
    get sslPolicy(): string;
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
    private _timeouts;
    get timeouts(): DataAwsLbListenerTimeoutsOutputReference;
    putTimeouts(value: DataAwsLbListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsLbListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
