/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#accept_language ServicecatalogProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#description ServicecatalogProduct#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#distributor ServicecatalogProduct#distributor}
    */
    readonly distributor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#id ServicecatalogProduct#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#name ServicecatalogProduct#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#owner ServicecatalogProduct#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#support_description ServicecatalogProduct#support_description}
    */
    readonly supportDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#support_email ServicecatalogProduct#support_email}
    */
    readonly supportEmail?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#support_url ServicecatalogProduct#support_url}
    */
    readonly supportUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#tags ServicecatalogProduct#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#tags_all ServicecatalogProduct#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#type ServicecatalogProduct#type}
    */
    readonly type: string;
    /**
    * provisioning_artifact_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#provisioning_artifact_parameters ServicecatalogProduct#provisioning_artifact_parameters}
    */
    readonly provisioningArtifactParameters: ServicecatalogProductProvisioningArtifactParameters;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#timeouts ServicecatalogProduct#timeouts}
    */
    readonly timeouts?: ServicecatalogProductTimeouts;
}
export interface ServicecatalogProductProvisioningArtifactParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#description ServicecatalogProduct#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#disable_template_validation ServicecatalogProduct#disable_template_validation}
    */
    readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#name ServicecatalogProduct#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#template_physical_id ServicecatalogProduct#template_physical_id}
    */
    readonly templatePhysicalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#template_url ServicecatalogProduct#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#type ServicecatalogProduct#type}
    */
    readonly type?: string;
}
export declare function servicecatalogProductProvisioningArtifactParametersToTerraform(struct?: ServicecatalogProductProvisioningArtifactParametersOutputReference | ServicecatalogProductProvisioningArtifactParameters): any;
export declare function servicecatalogProductProvisioningArtifactParametersToHclTerraform(struct?: ServicecatalogProductProvisioningArtifactParametersOutputReference | ServicecatalogProductProvisioningArtifactParameters): any;
export declare class ServicecatalogProductProvisioningArtifactParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogProductProvisioningArtifactParameters | undefined;
    set internalValue(value: ServicecatalogProductProvisioningArtifactParameters | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _disableTemplateValidation?;
    get disableTemplateValidation(): boolean | cdktf.IResolvable;
    set disableTemplateValidation(value: boolean | cdktf.IResolvable);
    resetDisableTemplateValidation(): void;
    get disableTemplateValidationInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _templatePhysicalId?;
    get templatePhysicalId(): string;
    set templatePhysicalId(value: string);
    resetTemplatePhysicalId(): void;
    get templatePhysicalIdInput(): string | undefined;
    private _templateUrl?;
    get templateUrl(): string;
    set templateUrl(value: string);
    resetTemplateUrl(): void;
    get templateUrlInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export interface ServicecatalogProductTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#create ServicecatalogProduct#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#delete ServicecatalogProduct#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#read ServicecatalogProduct#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#update ServicecatalogProduct#update}
    */
    readonly update?: string;
}
export declare function servicecatalogProductTimeoutsToTerraform(struct?: ServicecatalogProductTimeouts | cdktf.IResolvable): any;
export declare function servicecatalogProductTimeoutsToHclTerraform(struct?: ServicecatalogProductTimeouts | cdktf.IResolvable): any;
export declare class ServicecatalogProductTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogProductTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogProductTimeouts | cdktf.IResolvable | undefined);
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
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product aws_servicecatalog_product}
*/
export declare class ServicecatalogProduct extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_product";
    /**
    * Generates CDKTF code for importing a ServicecatalogProduct resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogProduct to import
    * @param importFromId The id of the existing ServicecatalogProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogProduct to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product aws_servicecatalog_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProductConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _distributor?;
    get distributor(): string;
    set distributor(value: string);
    resetDistributor(): void;
    get distributorInput(): string | undefined;
    get hasDefaultPath(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _owner?;
    get owner(): string;
    set owner(value: string);
    get ownerInput(): string | undefined;
    get status(): string;
    private _supportDescription?;
    get supportDescription(): string;
    set supportDescription(value: string);
    resetSupportDescription(): void;
    get supportDescriptionInput(): string | undefined;
    private _supportEmail?;
    get supportEmail(): string;
    set supportEmail(value: string);
    resetSupportEmail(): void;
    get supportEmailInput(): string | undefined;
    private _supportUrl?;
    get supportUrl(): string;
    set supportUrl(value: string);
    resetSupportUrl(): void;
    get supportUrlInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _provisioningArtifactParameters;
    get provisioningArtifactParameters(): ServicecatalogProductProvisioningArtifactParametersOutputReference;
    putProvisioningArtifactParameters(value: ServicecatalogProductProvisioningArtifactParameters): void;
    get provisioningArtifactParametersInput(): ServicecatalogProductProvisioningArtifactParameters | undefined;
    private _timeouts;
    get timeouts(): ServicecatalogProductTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogProductTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ServicecatalogProductTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
