/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
    /**
    * input_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#input_parameter ConfigOrganizationConformancePack#input_parameter}
    */
    readonly inputParameter?: ConfigOrganizationConformancePackInputParameter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#timeouts ConfigOrganizationConformancePack#timeouts}
    */
    readonly timeouts?: ConfigOrganizationConformancePackTimeouts;
}
export interface ConfigOrganizationConformancePackInputParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function configOrganizationConformancePackInputParameterToTerraform(struct?: ConfigOrganizationConformancePackInputParameter | cdktf.IResolvable): any;
export declare function configOrganizationConformancePackInputParameterToHclTerraform(struct?: ConfigOrganizationConformancePackInputParameter | cdktf.IResolvable): any;
export declare class ConfigOrganizationConformancePackInputParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConfigOrganizationConformancePackInputParameter | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigOrganizationConformancePackInputParameter | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class ConfigOrganizationConformancePackInputParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConfigOrganizationConformancePackInputParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConfigOrganizationConformancePackInputParameterOutputReference;
}
export interface ConfigOrganizationConformancePackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}
    */
    readonly update?: string;
}
export declare function configOrganizationConformancePackTimeoutsToTerraform(struct?: ConfigOrganizationConformancePackTimeouts | cdktf.IResolvable): any;
export declare function configOrganizationConformancePackTimeoutsToHclTerraform(struct?: ConfigOrganizationConformancePackTimeouts | cdktf.IResolvable): any;
export declare class ConfigOrganizationConformancePackTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigOrganizationConformancePackTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ConfigOrganizationConformancePackTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack aws_config_organization_conformance_pack}
*/
export declare class ConfigOrganizationConformancePack extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_organization_conformance_pack";
    /**
    * Generates CDKTF code for importing a ConfigOrganizationConformancePack resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigOrganizationConformancePack to import
    * @param importFromId The id of the existing ConfigOrganizationConformancePack that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigOrganizationConformancePack to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_organization_conformance_pack aws_config_organization_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationConformancePackConfig
    */
    constructor(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig);
    get arn(): string;
    private _deliveryS3Bucket?;
    get deliveryS3Bucket(): string;
    set deliveryS3Bucket(value: string);
    resetDeliveryS3Bucket(): void;
    get deliveryS3BucketInput(): string | undefined;
    private _deliveryS3KeyPrefix?;
    get deliveryS3KeyPrefix(): string;
    set deliveryS3KeyPrefix(value: string);
    resetDeliveryS3KeyPrefix(): void;
    get deliveryS3KeyPrefixInput(): string | undefined;
    private _excludedAccounts?;
    get excludedAccounts(): string[];
    set excludedAccounts(value: string[]);
    resetExcludedAccounts(): void;
    get excludedAccountsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string | undefined;
    private _templateS3Uri?;
    get templateS3Uri(): string;
    set templateS3Uri(value: string);
    resetTemplateS3Uri(): void;
    get templateS3UriInput(): string | undefined;
    private _inputParameter;
    get inputParameter(): ConfigOrganizationConformancePackInputParameterList;
    putInputParameter(value: ConfigOrganizationConformancePackInputParameter[] | cdktf.IResolvable): void;
    resetInputParameter(): void;
    get inputParameterInput(): cdktf.IResolvable | ConfigOrganizationConformancePackInputParameter[] | undefined;
    private _timeouts;
    get timeouts(): ConfigOrganizationConformancePackTimeoutsOutputReference;
    putTimeouts(value: ConfigOrganizationConformancePackTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ConfigOrganizationConformancePackTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
