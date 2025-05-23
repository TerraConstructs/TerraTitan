/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraExperienceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#description KendraExperience#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#id KendraExperience#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#index_id KendraExperience#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#name KendraExperience#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#role_arn KendraExperience#role_arn}
    */
    readonly roleArn: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#configuration KendraExperience#configuration}
    */
    readonly configuration?: KendraExperienceConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#timeouts KendraExperience#timeouts}
    */
    readonly timeouts?: KendraExperienceTimeouts;
}
export interface KendraExperienceEndpoints {
}
export declare function kendraExperienceEndpointsToTerraform(struct?: KendraExperienceEndpoints): any;
export declare function kendraExperienceEndpointsToHclTerraform(struct?: KendraExperienceEndpoints): any;
export declare class KendraExperienceEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KendraExperienceEndpoints | undefined;
    set internalValue(value: KendraExperienceEndpoints | undefined);
    get endpoint(): string;
    get endpointType(): string;
}
export declare class KendraExperienceEndpointsList extends cdktf.ComplexList {
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
    get(index: number): KendraExperienceEndpointsOutputReference;
}
export interface KendraExperienceConfigurationContentSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#data_source_ids KendraExperience#data_source_ids}
    */
    readonly dataSourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#direct_put_content KendraExperience#direct_put_content}
    */
    readonly directPutContent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#faq_ids KendraExperience#faq_ids}
    */
    readonly faqIds?: string[];
}
export declare function kendraExperienceConfigurationContentSourceConfigurationToTerraform(struct?: KendraExperienceConfigurationContentSourceConfigurationOutputReference | KendraExperienceConfigurationContentSourceConfiguration): any;
export declare function kendraExperienceConfigurationContentSourceConfigurationToHclTerraform(struct?: KendraExperienceConfigurationContentSourceConfigurationOutputReference | KendraExperienceConfigurationContentSourceConfiguration): any;
export declare class KendraExperienceConfigurationContentSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraExperienceConfigurationContentSourceConfiguration | undefined;
    set internalValue(value: KendraExperienceConfigurationContentSourceConfiguration | undefined);
    private _dataSourceIds?;
    get dataSourceIds(): string[];
    set dataSourceIds(value: string[]);
    resetDataSourceIds(): void;
    get dataSourceIdsInput(): string[] | undefined;
    private _directPutContent?;
    get directPutContent(): boolean | cdktf.IResolvable;
    set directPutContent(value: boolean | cdktf.IResolvable);
    resetDirectPutContent(): void;
    get directPutContentInput(): boolean | cdktf.IResolvable | undefined;
    private _faqIds?;
    get faqIds(): string[];
    set faqIds(value: string[]);
    resetFaqIds(): void;
    get faqIdsInput(): string[] | undefined;
}
export interface KendraExperienceConfigurationUserIdentityConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#identity_attribute_name KendraExperience#identity_attribute_name}
    */
    readonly identityAttributeName: string;
}
export declare function kendraExperienceConfigurationUserIdentityConfigurationToTerraform(struct?: KendraExperienceConfigurationUserIdentityConfigurationOutputReference | KendraExperienceConfigurationUserIdentityConfiguration): any;
export declare function kendraExperienceConfigurationUserIdentityConfigurationToHclTerraform(struct?: KendraExperienceConfigurationUserIdentityConfigurationOutputReference | KendraExperienceConfigurationUserIdentityConfiguration): any;
export declare class KendraExperienceConfigurationUserIdentityConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraExperienceConfigurationUserIdentityConfiguration | undefined;
    set internalValue(value: KendraExperienceConfigurationUserIdentityConfiguration | undefined);
    private _identityAttributeName?;
    get identityAttributeName(): string;
    set identityAttributeName(value: string);
    get identityAttributeNameInput(): string | undefined;
}
export interface KendraExperienceConfiguration {
    /**
    * content_source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#content_source_configuration KendraExperience#content_source_configuration}
    */
    readonly contentSourceConfiguration?: KendraExperienceConfigurationContentSourceConfiguration;
    /**
    * user_identity_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#user_identity_configuration KendraExperience#user_identity_configuration}
    */
    readonly userIdentityConfiguration?: KendraExperienceConfigurationUserIdentityConfiguration;
}
export declare function kendraExperienceConfigurationToTerraform(struct?: KendraExperienceConfigurationOutputReference | KendraExperienceConfiguration): any;
export declare function kendraExperienceConfigurationToHclTerraform(struct?: KendraExperienceConfigurationOutputReference | KendraExperienceConfiguration): any;
export declare class KendraExperienceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraExperienceConfiguration | undefined;
    set internalValue(value: KendraExperienceConfiguration | undefined);
    private _contentSourceConfiguration;
    get contentSourceConfiguration(): KendraExperienceConfigurationContentSourceConfigurationOutputReference;
    putContentSourceConfiguration(value: KendraExperienceConfigurationContentSourceConfiguration): void;
    resetContentSourceConfiguration(): void;
    get contentSourceConfigurationInput(): KendraExperienceConfigurationContentSourceConfiguration | undefined;
    private _userIdentityConfiguration;
    get userIdentityConfiguration(): KendraExperienceConfigurationUserIdentityConfigurationOutputReference;
    putUserIdentityConfiguration(value: KendraExperienceConfigurationUserIdentityConfiguration): void;
    resetUserIdentityConfiguration(): void;
    get userIdentityConfigurationInput(): KendraExperienceConfigurationUserIdentityConfiguration | undefined;
}
export interface KendraExperienceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#create KendraExperience#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#delete KendraExperience#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#update KendraExperience#update}
    */
    readonly update?: string;
}
export declare function kendraExperienceTimeoutsToTerraform(struct?: KendraExperienceTimeouts | cdktf.IResolvable): any;
export declare function kendraExperienceTimeoutsToHclTerraform(struct?: KendraExperienceTimeouts | cdktf.IResolvable): any;
export declare class KendraExperienceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraExperienceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KendraExperienceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience aws_kendra_experience}
*/
export declare class KendraExperience extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kendra_experience";
    /**
    * Generates CDKTF code for importing a KendraExperience resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KendraExperience to import
    * @param importFromId The id of the existing KendraExperience that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KendraExperience to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_experience aws_kendra_experience} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraExperienceConfig
    */
    constructor(scope: Construct, id: string, config: KendraExperienceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _endpoints;
    get endpoints(): KendraExperienceEndpointsList;
    get experienceId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexId?;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    get status(): string;
    private _configuration;
    get configuration(): KendraExperienceConfigurationOutputReference;
    putConfiguration(value: KendraExperienceConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): KendraExperienceConfiguration | undefined;
    private _timeouts;
    get timeouts(): KendraExperienceTimeoutsOutputReference;
    putTimeouts(value: KendraExperienceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KendraExperienceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
