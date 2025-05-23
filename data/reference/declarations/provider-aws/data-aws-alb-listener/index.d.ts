/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAlbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#arn DataAwsAlbListener#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#id DataAwsAlbListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#load_balancer_arn DataAwsAlbListener#load_balancer_arn}
    */
    readonly loadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#port DataAwsAlbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#tags DataAwsAlbListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#timeouts DataAwsAlbListener#timeouts}
    */
    readonly timeouts?: DataAwsAlbListenerTimeouts;
}
export interface DataAwsAlbListenerDefaultActionAuthenticateCognito {
}
export declare function dataAwsAlbListenerDefaultActionAuthenticateCognitoToTerraform(struct?: DataAwsAlbListenerDefaultActionAuthenticateCognito): any;
export declare function dataAwsAlbListenerDefaultActionAuthenticateCognitoToHclTerraform(struct?: DataAwsAlbListenerDefaultActionAuthenticateCognito): any;
export declare class DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultActionAuthenticateCognito | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultActionAuthenticateCognito | undefined);
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
export declare class DataAwsAlbListenerDefaultActionAuthenticateCognitoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionAuthenticateCognitoOutputReference;
}
export interface DataAwsAlbListenerDefaultActionAuthenticateOidc {
}
export declare function dataAwsAlbListenerDefaultActionAuthenticateOidcToTerraform(struct?: DataAwsAlbListenerDefaultActionAuthenticateOidc): any;
export declare function dataAwsAlbListenerDefaultActionAuthenticateOidcToHclTerraform(struct?: DataAwsAlbListenerDefaultActionAuthenticateOidc): any;
export declare class DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultActionAuthenticateOidc | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultActionAuthenticateOidc | undefined);
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
export declare class DataAwsAlbListenerDefaultActionAuthenticateOidcList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionAuthenticateOidcOutputReference;
}
export interface DataAwsAlbListenerDefaultActionFixedResponse {
}
export declare function dataAwsAlbListenerDefaultActionFixedResponseToTerraform(struct?: DataAwsAlbListenerDefaultActionFixedResponse): any;
export declare function dataAwsAlbListenerDefaultActionFixedResponseToHclTerraform(struct?: DataAwsAlbListenerDefaultActionFixedResponse): any;
export declare class DataAwsAlbListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultActionFixedResponse | undefined);
    get contentType(): string;
    get messageBody(): string;
    get statusCode(): string;
}
export declare class DataAwsAlbListenerDefaultActionFixedResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionFixedResponseOutputReference;
}
export interface DataAwsAlbListenerDefaultActionForwardStickiness {
}
export declare function dataAwsAlbListenerDefaultActionForwardStickinessToTerraform(struct?: DataAwsAlbListenerDefaultActionForwardStickiness): any;
export declare function dataAwsAlbListenerDefaultActionForwardStickinessToHclTerraform(struct?: DataAwsAlbListenerDefaultActionForwardStickiness): any;
export declare class DataAwsAlbListenerDefaultActionForwardStickinessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultActionForwardStickiness | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultActionForwardStickiness | undefined);
    get duration(): number;
    get enabled(): cdktf.IResolvable;
}
export declare class DataAwsAlbListenerDefaultActionForwardStickinessList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionForwardStickinessOutputReference;
}
export interface DataAwsAlbListenerDefaultActionForwardTargetGroup {
}
export declare function dataAwsAlbListenerDefaultActionForwardTargetGroupToTerraform(struct?: DataAwsAlbListenerDefaultActionForwardTargetGroup): any;
export declare function dataAwsAlbListenerDefaultActionForwardTargetGroupToHclTerraform(struct?: DataAwsAlbListenerDefaultActionForwardTargetGroup): any;
export declare class DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultActionForwardTargetGroup | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultActionForwardTargetGroup | undefined);
    get arn(): string;
    get weight(): number;
}
export declare class DataAwsAlbListenerDefaultActionForwardTargetGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionForwardTargetGroupOutputReference;
}
export interface DataAwsAlbListenerDefaultActionForward {
}
export declare function dataAwsAlbListenerDefaultActionForwardToTerraform(struct?: DataAwsAlbListenerDefaultActionForward): any;
export declare function dataAwsAlbListenerDefaultActionForwardToHclTerraform(struct?: DataAwsAlbListenerDefaultActionForward): any;
export declare class DataAwsAlbListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultActionForward | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultActionForward | undefined);
    private _stickiness;
    get stickiness(): DataAwsAlbListenerDefaultActionForwardStickinessList;
    private _targetGroup;
    get targetGroup(): DataAwsAlbListenerDefaultActionForwardTargetGroupList;
}
export declare class DataAwsAlbListenerDefaultActionForwardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionForwardOutputReference;
}
export interface DataAwsAlbListenerDefaultActionRedirect {
}
export declare function dataAwsAlbListenerDefaultActionRedirectToTerraform(struct?: DataAwsAlbListenerDefaultActionRedirect): any;
export declare function dataAwsAlbListenerDefaultActionRedirectToHclTerraform(struct?: DataAwsAlbListenerDefaultActionRedirect): any;
export declare class DataAwsAlbListenerDefaultActionRedirectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultActionRedirect | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultActionRedirect | undefined);
    get host(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get query(): string;
    get statusCode(): string;
}
export declare class DataAwsAlbListenerDefaultActionRedirectList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionRedirectOutputReference;
}
export interface DataAwsAlbListenerDefaultAction {
}
export declare function dataAwsAlbListenerDefaultActionToTerraform(struct?: DataAwsAlbListenerDefaultAction): any;
export declare function dataAwsAlbListenerDefaultActionToHclTerraform(struct?: DataAwsAlbListenerDefaultAction): any;
export declare class DataAwsAlbListenerDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerDefaultAction | undefined;
    set internalValue(value: DataAwsAlbListenerDefaultAction | undefined);
    private _authenticateCognito;
    get authenticateCognito(): DataAwsAlbListenerDefaultActionAuthenticateCognitoList;
    private _authenticateOidc;
    get authenticateOidc(): DataAwsAlbListenerDefaultActionAuthenticateOidcList;
    private _fixedResponse;
    get fixedResponse(): DataAwsAlbListenerDefaultActionFixedResponseList;
    private _forward;
    get forward(): DataAwsAlbListenerDefaultActionForwardList;
    get order(): number;
    private _redirect;
    get redirect(): DataAwsAlbListenerDefaultActionRedirectList;
    get targetGroupArn(): string;
    get type(): string;
}
export declare class DataAwsAlbListenerDefaultActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerDefaultActionOutputReference;
}
export interface DataAwsAlbListenerMutualAuthentication {
}
export declare function dataAwsAlbListenerMutualAuthenticationToTerraform(struct?: DataAwsAlbListenerMutualAuthentication): any;
export declare function dataAwsAlbListenerMutualAuthenticationToHclTerraform(struct?: DataAwsAlbListenerMutualAuthentication): any;
export declare class DataAwsAlbListenerMutualAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAlbListenerMutualAuthentication | undefined;
    set internalValue(value: DataAwsAlbListenerMutualAuthentication | undefined);
    get advertiseTrustStoreCaNames(): string;
    get ignoreClientCertificateExpiry(): cdktf.IResolvable;
    get mode(): string;
    get trustStoreArn(): string;
}
export declare class DataAwsAlbListenerMutualAuthenticationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAlbListenerMutualAuthenticationOutputReference;
}
export interface DataAwsAlbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#read DataAwsAlbListener#read}
    */
    readonly read?: string;
}
export declare function dataAwsAlbListenerTimeoutsToTerraform(struct?: DataAwsAlbListenerTimeouts | cdktf.IResolvable): any;
export declare function dataAwsAlbListenerTimeoutsToHclTerraform(struct?: DataAwsAlbListenerTimeouts | cdktf.IResolvable): any;
export declare class DataAwsAlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsAlbListenerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAlbListenerTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener aws_alb_listener}
*/
export declare class DataAwsAlbListener extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_alb_listener";
    /**
    * Generates CDKTF code for importing a DataAwsAlbListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAlbListener to import
    * @param importFromId The id of the existing DataAwsAlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAlbListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/alb_listener aws_alb_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbListenerConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAlbListenerConfig);
    get alpnPolicy(): string;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get certificateArn(): string;
    private _defaultAction;
    get defaultAction(): DataAwsAlbListenerDefaultActionList;
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
    get mutualAuthentication(): DataAwsAlbListenerMutualAuthenticationList;
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
    get timeouts(): DataAwsAlbListenerTimeoutsOutputReference;
    putTimeouts(value: DataAwsAlbListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsAlbListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
