/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecuritylakeCustomLogSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#event_classes SecuritylakeCustomLogSource#event_classes}
    */
    readonly eventClasses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#source_name SecuritylakeCustomLogSource#source_name}
    */
    readonly sourceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#source_version SecuritylakeCustomLogSource#source_version}
    */
    readonly sourceVersion?: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#configuration SecuritylakeCustomLogSource#configuration}
    */
    readonly configuration?: SecuritylakeCustomLogSourceConfiguration[] | cdktf.IResolvable;
}
export interface SecuritylakeCustomLogSourceAttributes {
}
export declare function securitylakeCustomLogSourceAttributesToTerraform(struct?: SecuritylakeCustomLogSourceAttributes): any;
export declare function securitylakeCustomLogSourceAttributesToHclTerraform(struct?: SecuritylakeCustomLogSourceAttributes): any;
export declare class SecuritylakeCustomLogSourceAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeCustomLogSourceAttributes | undefined;
    set internalValue(value: SecuritylakeCustomLogSourceAttributes | undefined);
    get crawlerArn(): string;
    get databaseArn(): string;
    get tableArn(): string;
}
export declare class SecuritylakeCustomLogSourceAttributesList extends cdktf.ComplexList {
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
    get(index: number): SecuritylakeCustomLogSourceAttributesOutputReference;
}
export interface SecuritylakeCustomLogSourceProviderDetails {
}
export declare function securitylakeCustomLogSourceProviderDetailsToTerraform(struct?: SecuritylakeCustomLogSourceProviderDetails): any;
export declare function securitylakeCustomLogSourceProviderDetailsToHclTerraform(struct?: SecuritylakeCustomLogSourceProviderDetails): any;
export declare class SecuritylakeCustomLogSourceProviderDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeCustomLogSourceProviderDetails | undefined;
    set internalValue(value: SecuritylakeCustomLogSourceProviderDetails | undefined);
    get location(): string;
    get roleArn(): string;
}
export declare class SecuritylakeCustomLogSourceProviderDetailsList extends cdktf.ComplexList {
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
    get(index: number): SecuritylakeCustomLogSourceProviderDetailsOutputReference;
}
export interface SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#role_arn SecuritylakeCustomLogSource#role_arn}
    */
    readonly roleArn: string;
}
export declare function securitylakeCustomLogSourceConfigurationCrawlerConfigurationToTerraform(struct?: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare function securitylakeCustomLogSourceConfigurationCrawlerConfigurationToHclTerraform(struct?: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export declare class SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationOutputReference;
}
export interface SecuritylakeCustomLogSourceConfigurationProviderIdentity {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#external_id SecuritylakeCustomLogSource#external_id}
    */
    readonly externalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#principal SecuritylakeCustomLogSource#principal}
    */
    readonly principal: string;
}
export declare function securitylakeCustomLogSourceConfigurationProviderIdentityToTerraform(struct?: SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable): any;
export declare function securitylakeCustomLogSourceConfigurationProviderIdentityToHclTerraform(struct?: SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable): any;
export declare class SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeCustomLogSourceConfigurationProviderIdentity | cdktf.IResolvable | undefined);
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    get externalIdInput(): string | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
}
export declare class SecuritylakeCustomLogSourceConfigurationProviderIdentityList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeCustomLogSourceConfigurationProviderIdentity[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeCustomLogSourceConfigurationProviderIdentityOutputReference;
}
export interface SecuritylakeCustomLogSourceConfiguration {
    /**
    * crawler_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#crawler_configuration SecuritylakeCustomLogSource#crawler_configuration}
    */
    readonly crawlerConfiguration?: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
    /**
    * provider_identity block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#provider_identity SecuritylakeCustomLogSource#provider_identity}
    */
    readonly providerIdentity?: SecuritylakeCustomLogSourceConfigurationProviderIdentity[] | cdktf.IResolvable;
}
export declare function securitylakeCustomLogSourceConfigurationToTerraform(struct?: SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable): any;
export declare function securitylakeCustomLogSourceConfigurationToHclTerraform(struct?: SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable): any;
export declare class SecuritylakeCustomLogSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: SecuritylakeCustomLogSourceConfiguration | cdktf.IResolvable | undefined);
    private _crawlerConfiguration;
    get crawlerConfiguration(): SecuritylakeCustomLogSourceConfigurationCrawlerConfigurationList;
    putCrawlerConfiguration(value: SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[] | cdktf.IResolvable): void;
    resetCrawlerConfiguration(): void;
    get crawlerConfigurationInput(): cdktf.IResolvable | SecuritylakeCustomLogSourceConfigurationCrawlerConfiguration[] | undefined;
    private _providerIdentity;
    get providerIdentity(): SecuritylakeCustomLogSourceConfigurationProviderIdentityList;
    putProviderIdentity(value: SecuritylakeCustomLogSourceConfigurationProviderIdentity[] | cdktf.IResolvable): void;
    resetProviderIdentity(): void;
    get providerIdentityInput(): cdktf.IResolvable | SecuritylakeCustomLogSourceConfigurationProviderIdentity[] | undefined;
}
export declare class SecuritylakeCustomLogSourceConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SecuritylakeCustomLogSourceConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SecuritylakeCustomLogSourceConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source}
*/
export declare class SecuritylakeCustomLogSource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securitylake_custom_log_source";
    /**
    * Generates CDKTF code for importing a SecuritylakeCustomLogSource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecuritylakeCustomLogSource to import
    * @param importFromId The id of the existing SecuritylakeCustomLogSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecuritylakeCustomLogSource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securitylake_custom_log_source aws_securitylake_custom_log_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecuritylakeCustomLogSourceConfig
    */
    constructor(scope: Construct, id: string, config: SecuritylakeCustomLogSourceConfig);
    private _attributes;
    get attributes(): SecuritylakeCustomLogSourceAttributesList;
    private _eventClasses?;
    get eventClasses(): string[];
    set eventClasses(value: string[]);
    resetEventClasses(): void;
    get eventClassesInput(): string[] | undefined;
    get id(): string;
    private _providerDetails;
    get providerDetails(): SecuritylakeCustomLogSourceProviderDetailsList;
    private _sourceName?;
    get sourceName(): string;
    set sourceName(value: string);
    get sourceNameInput(): string | undefined;
    private _sourceVersion?;
    get sourceVersion(): string;
    set sourceVersion(value: string);
    resetSourceVersion(): void;
    get sourceVersionInput(): string | undefined;
    private _configuration;
    get configuration(): SecuritylakeCustomLogSourceConfigurationList;
    putConfiguration(value: SecuritylakeCustomLogSourceConfiguration[] | cdktf.IResolvable): void;
    resetConfiguration(): void;
    get configurationInput(): cdktf.IResolvable | SecuritylakeCustomLogSourceConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
