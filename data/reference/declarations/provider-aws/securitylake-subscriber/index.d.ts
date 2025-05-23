/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecuritylakeSubscriberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#access_type SecuritylakeSubscriber#access_type}
    */
    readonly accessType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#subscriber_description SecuritylakeSubscriber#subscriber_description}
    */
    readonly subscriberDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#subscriber_name SecuritylakeSubscriber#subscriber_name}
    */
    readonly subscriberName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#tags SecuritylakeSubscriber#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#source SecuritylakeSubscriber#source}
    */
    readonly source?: SecuritylakeSubscriberSource[] | cdktf.IResolvable;
    /**
    * subscriber_identity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#subscriber_identity SecuritylakeSubscriber#subscriber_identity}
    */
    readonly subscriberIdentity?: SecuritylakeSubscriberSubscriberIdentity[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#timeouts SecuritylakeSubscriber#timeouts}
    */
    readonly timeouts?: SecuritylakeSubscriberTimeouts;
}
export interface SecuritylakeSubscriberSourceAwsLogSourceResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}
    */
    readonly sourceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}
    */
    readonly sourceVersion?: string;
}
export declare function securitylakeSubscriberSourceAwsLogSourceResourceToTerraform(struct?: SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable): any;
export declare function securitylakeSubscriberSourceAwsLogSourceResourceToHclTerraform(struct?: SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberSourceAwsLogSourceResource | cdktf.IResolvable | undefined);
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    get sourceNameInput(): string | undefined;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    resetSourceVersion(): void;
    get sourceVersionInput(): string | undefined;
}
export declare class SecuritylakeSubscriberSourceAwsLogSourceResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeSubscriberSourceAwsLogSourceResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberSourceAwsLogSourceResourceOutputReference;
}
export interface SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes {
}
export declare function securitylakeSubscriberSourceCustomLogSourceResourceAttributesToTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes): any;
export declare function securitylakeSubscriberSourceCustomLogSourceResourceAttributesToHclTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes): any;
export declare class SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes | undefined;
    set internalValue(value: SecuritylakeSubscriberSourceCustomLogSourceResourceAttributes | undefined);
    get crawlerArn(): string;
    get databaseArn(): string;
    get tableArn(): string;
}
export declare class SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesOutputReference;
}
export interface SecuritylakeSubscriberSourceCustomLogSourceResourceProvider {
}
export declare function securitylakeSubscriberSourceCustomLogSourceResourceProviderToTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider): any;
export declare function securitylakeSubscriberSourceCustomLogSourceResourceProviderToHclTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider): any;
export declare class SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberSourceCustomLogSourceResourceProvider | undefined;
    set internalValue(value: SecuritylakeSubscriberSourceCustomLogSourceResourceProvider | undefined);
    get location(): string;
    get roleArn(): string;
}
export declare class SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceProviderOutputReference;
}
export interface SecuritylakeSubscriberSourceCustomLogSourceResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#source_name SecuritylakeSubscriber#source_name}
    */
    readonly sourceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#source_version SecuritylakeSubscriber#source_version}
    */
    readonly sourceVersion?: string;
}
export declare function securitylakeSubscriberSourceCustomLogSourceResourceToTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable): any;
export declare function securitylakeSubscriberSourceCustomLogSourceResourceToHclTerraform(struct?: SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberSourceCustomLogSourceResource | cdktf.IResolvable | undefined);
    private _attributes;
    get attributes(): SecuritylakeSubscriberSourceCustomLogSourceResourceAttributesList;
    private _provider;
    get provider(): SecuritylakeSubscriberSourceCustomLogSourceResourceProviderList;
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    get sourceNameInput(): string | undefined;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    resetSourceVersion(): void;
    get sourceVersionInput(): string | undefined;
}
export declare class SecuritylakeSubscriberSourceCustomLogSourceResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeSubscriberSourceCustomLogSourceResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberSourceCustomLogSourceResourceOutputReference;
}
export interface SecuritylakeSubscriberSource {
    /**
    * aws_log_source_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#aws_log_source_resource SecuritylakeSubscriber#aws_log_source_resource}
    */
    readonly awsLogSourceResource?: SecuritylakeSubscriberSourceAwsLogSourceResource[] | cdktf.IResolvable;
    /**
    * custom_log_source_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#custom_log_source_resource SecuritylakeSubscriber#custom_log_source_resource}
    */
    readonly customLogSourceResource?: SecuritylakeSubscriberSourceCustomLogSourceResource[] | cdktf.IResolvable;
}
export declare function securitylakeSubscriberSourceToTerraform(struct?: SecuritylakeSubscriberSource | cdktf.IResolvable): any;
export declare function securitylakeSubscriberSourceToHclTerraform(struct?: SecuritylakeSubscriberSource | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberSource | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberSource | cdktf.IResolvable | undefined);
    private _awsLogSourceResource;
    get awsLogSourceResource(): SecuritylakeSubscriberSourceAwsLogSourceResourceList;
    putAwsLogSourceResource(value: SecuritylakeSubscriberSourceAwsLogSourceResource[] | cdktf.IResolvable): void;
    resetAwsLogSourceResource(): void;
    get awsLogSourceResourceInput(): cdktf.IResolvable | SecuritylakeSubscriberSourceAwsLogSourceResource[] | undefined;
    private _customLogSourceResource;
    get customLogSourceResource(): SecuritylakeSubscriberSourceCustomLogSourceResourceList;
    putCustomLogSourceResource(value: SecuritylakeSubscriberSourceCustomLogSourceResource[] | cdktf.IResolvable): void;
    resetCustomLogSourceResource(): void;
    get customLogSourceResourceInput(): cdktf.IResolvable | SecuritylakeSubscriberSourceCustomLogSourceResource[] | undefined;
}
export declare class SecuritylakeSubscriberSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeSubscriberSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberSourceOutputReference;
}
export interface SecuritylakeSubscriberSubscriberIdentity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#external_id SecuritylakeSubscriber#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#principal SecuritylakeSubscriber#principal}
    */
    readonly principal: string;
}
export declare function securitylakeSubscriberSubscriberIdentityToTerraform(struct?: SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable): any;
export declare function securitylakeSubscriberSubscriberIdentityToHclTerraform(struct?: SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberSubscriberIdentityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberSubscriberIdentity | cdktf.IResolvable | undefined);
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    get externalIdInput(): string | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class SecuritylakeSubscriberSubscriberIdentityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeSubscriberSubscriberIdentity[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeSubscriberSubscriberIdentityOutputReference;
}
export interface SecuritylakeSubscriberTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#create SecuritylakeSubscriber#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#delete SecuritylakeSubscriber#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#update SecuritylakeSubscriber#update}
    */
    readonly update?: string;
}
export declare function securitylakeSubscriberTimeoutsToTerraform(struct?: SecuritylakeSubscriberTimeouts | cdktf.IResolvable): any;
export declare function securitylakeSubscriberTimeoutsToHclTerraform(struct?: SecuritylakeSubscriberTimeouts | cdktf.IResolvable): any;
export declare class SecuritylakeSubscriberTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecuritylakeSubscriberTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeSubscriberTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber}
*/
export declare class SecuritylakeSubscriber extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securitylake_subscriber";
    /**
    * Generates CDKTF code for importing a SecuritylakeSubscriber resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecuritylakeSubscriber to import
    * @param importFromId The id of the existing SecuritylakeSubscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecuritylakeSubscriber to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_subscriber aws_securitylake_subscriber} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecuritylakeSubscriberConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SecuritylakeSubscriberConfig);
    private _accessType?;
    get accessType(): string;
    set accessType(value: string);
    resetAccessType(): void;
    get accessTypeInput(): string | undefined;
    get arn(): string;
    get id(): string;
    get resourceShareArn(): string;
    get resourceShareName(): string;
    get roleArn(): string;
    get s3BucketArn(): string;
    private _subscriberDescription?;
    get subscriberDescription(): string;
    set subscriberDescription(value: string);
    resetSubscriberDescription(): void;
    get subscriberDescriptionInput(): string | undefined;
    get subscriberEndpoint(): string;
    private _subscriberName?;
    get subscriberName(): string;
    set subscriberName(value: string);
    resetSubscriberName(): void;
    get subscriberNameInput(): string | undefined;
    get subscriberStatus(): string;
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
    private _source;
    get source(): SecuritylakeSubscriberSourceList;
    putSource(value: SecuritylakeSubscriberSource[] | cdktf.IResolvable): void;
    resetSource(): void;
    get sourceInput(): cdktf.IResolvable | SecuritylakeSubscriberSource[] | undefined;
    private _subscriberIdentity;
    get subscriberIdentity(): SecuritylakeSubscriberSubscriberIdentityList;
    putSubscriberIdentity(value: SecuritylakeSubscriberSubscriberIdentity[] | cdktf.IResolvable): void;
    resetSubscriberIdentity(): void;
    get subscriberIdentityInput(): cdktf.IResolvable | SecuritylakeSubscriberSubscriberIdentity[] | undefined;
    private _timeouts;
    get timeouts(): SecuritylakeSubscriberTimeoutsOutputReference;
    putTimeouts(value: SecuritylakeSubscriberTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SecuritylakeSubscriberTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
