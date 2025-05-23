/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecuritylakeSubscriberNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#subscriber_id SecuritylakeSubscriberNotification#subscriber_id}
    */
    readonly subscriberId: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#configuration SecuritylakeSubscriberNotification#configuration}
    */
    readonly configuration?: SecuritylakeSubscriberNotificationConfiguration[] | cdktf.IResolvable;
}
export interface SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}
    */
    readonly authorizationApiKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}
    */
    readonly authorizationApiKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}
    */
    readonly httpMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}
    */
    readonly targetRoleArn: string;
}
export declare function securitylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationToTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable): any;
export declare function securitylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationToHclTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable | undefined);
    private _authorizationApiKeyName?;
    get authorizationApiKeyName(): string;
    set authorizationApiKeyName(value: string);
    resetAuthorizationApiKeyName(): void;
    get authorizationApiKeyNameInput(): string | undefined;
    private _authorizationApiKeyValue?;
    get authorizationApiKeyValue(): string;
    set authorizationApiKeyValue(value: string);
    resetAuthorizationApiKeyValue(): void;
    get authorizationApiKeyValueInput(): string | undefined;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    resetHttpMethod(): void;
    get httpMethodInput(): string | undefined;
    private _targetRoleArn?;
    get targetRoleArn(): string;
    set targetRoleArn(value: string);
    get targetRoleArnInput(): string | undefined;
}
export declare class SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference;
}
export interface SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration {
}
export declare function securitylakeSubscriberNotificationConfigurationSqsNotificationConfigurationToTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable): any;
export declare function securitylakeSubscriberNotificationConfigurationSqsNotificationConfigurationToHclTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable | undefined);
}
export declare class SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference;
}
export interface SecuritylakeSubscriberNotificationConfiguration {
    /**
    * https_notification_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}
    */
    readonly httpsNotificationConfiguration?: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration[] | cdktf.IResolvable;
    /**
    * sqs_notification_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}
    */
    readonly sqsNotificationConfiguration?: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration[] | cdktf.IResolvable;
}
export declare function securitylakeSubscriberNotificationConfigurationToTerraform(struct?: SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable): any;
export declare function securitylakeSubscriberNotificationConfigurationToHclTerraform(struct?: SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberNotificationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable | undefined);
    private _httpsNotificationConfiguration;
    get httpsNotificationConfiguration(): SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList;
    putHttpsNotificationConfiguration(value: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration[] | cdktf.IResolvable): void;
    resetHttpsNotificationConfiguration(): void;
    get httpsNotificationConfigurationInput(): cdktf.IResolvable | SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration[] | undefined;
    private _sqsNotificationConfiguration;
    get sqsNotificationConfiguration(): SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList;
    putSqsNotificationConfiguration(value: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration[] | cdktf.IResolvable): void;
    resetSqsNotificationConfiguration(): void;
    get sqsNotificationConfigurationInput(): cdktf.IResolvable | SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration[] | undefined;
}
export declare class SecuritylakeSubscriberNotificationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeSubscriberNotificationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberNotificationConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification}
*/
export declare class SecuritylakeSubscriberNotification extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securitylake_subscriber_notification";
    /**
    * Generates CDKTF code for importing a SecuritylakeSubscriberNotification resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecuritylakeSubscriberNotification to import
    * @param importFromId The id of the existing SecuritylakeSubscriberNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecuritylakeSubscriberNotification to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecuritylakeSubscriberNotificationConfig
    */
    constructor(scope: Construct, id: string, config: SecuritylakeSubscriberNotificationConfig);
    get endpointId(): string;
    get id(): string;
    get subscriberEndpoint(): string;
    private _subscriberId?;
    get subscriberId(): string;
    set subscriberId(value: string);
    get subscriberIdInput(): string | undefined;
    private _configuration;
    get configuration(): SecuritylakeSubscriberNotificationConfigurationList;
    putConfiguration(value: SecuritylakeSubscriberNotificationConfiguration[] | cdktf.IResolvable): void;
    resetConfiguration(): void;
    get configurationInput(): cdktf.IResolvable | SecuritylakeSubscriberNotificationConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
