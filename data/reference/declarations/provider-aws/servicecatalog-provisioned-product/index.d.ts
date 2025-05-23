/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogProvisionedProductConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#accept_language ServicecatalogProvisionedProduct#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#id ServicecatalogProvisionedProduct#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}
    */
    readonly ignoreErrors?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#name ServicecatalogProvisionedProduct#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#notification_arns ServicecatalogProvisionedProduct#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#path_id ServicecatalogProvisionedProduct#path_id}
    */
    readonly pathId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#path_name ServicecatalogProvisionedProduct#path_name}
    */
    readonly pathName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#product_id ServicecatalogProvisionedProduct#product_id}
    */
    readonly productId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#product_name ServicecatalogProvisionedProduct#product_name}
    */
    readonly productName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}
    */
    readonly provisioningArtifactId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}
    */
    readonly provisioningArtifactName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}
    */
    readonly retainPhysicalResources?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#tags ServicecatalogProvisionedProduct#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#tags_all ServicecatalogProvisionedProduct#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * provisioning_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}
    */
    readonly provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[] | cdktf.IResolvable;
    /**
    * stack_set_provisioning_preferences block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}
    */
    readonly stackSetProvisioningPreferences?: ServicecatalogProvisionedProductStackSetProvisioningPreferences;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#timeouts ServicecatalogProvisionedProduct#timeouts}
    */
    readonly timeouts?: ServicecatalogProvisionedProductTimeouts;
}
export interface ServicecatalogProvisionedProductOutputs {
}
export declare function servicecatalogProvisionedProductOutputsToTerraform(struct?: ServicecatalogProvisionedProductOutputs): any;
export declare function servicecatalogProvisionedProductOutputsToHclTerraform(struct?: ServicecatalogProvisionedProductOutputs): any;
export declare class ServicecatalogProvisionedProductOutputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServicecatalogProvisionedProductOutputs | undefined;
    set internalValue(value: ServicecatalogProvisionedProductOutputs | undefined);
    get description(): string;
    get key(): string;
    get value(): string;
}
export declare class ServicecatalogProvisionedProductOutputsList extends cdktf.ComplexList {
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
    get(index: number): ServicecatalogProvisionedProductOutputsOutputReference;
}
export interface ServicecatalogProvisionedProductProvisioningParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#key ServicecatalogProvisionedProduct#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}
    */
    readonly usePreviousValue?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#value ServicecatalogProvisionedProduct#value}
    */
    readonly value?: string;
}
export declare function servicecatalogProvisionedProductProvisioningParametersToTerraform(struct?: ServicecatalogProvisionedProductProvisioningParameters | cdktf.IResolvable): any;
export declare function servicecatalogProvisionedProductProvisioningParametersToHclTerraform(struct?: ServicecatalogProvisionedProductProvisioningParameters | cdktf.IResolvable): any;
export declare class ServicecatalogProvisionedProductProvisioningParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ServicecatalogProvisionedProductProvisioningParameters | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogProvisionedProductProvisioningParameters | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _usePreviousValue?;
    get usePreviousValue(): boolean | cdktf.IResolvable;
    set usePreviousValue(value: boolean | cdktf.IResolvable);
    resetUsePreviousValue(): void;
    get usePreviousValueInput(): boolean | cdktf.IResolvable | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class ServicecatalogProvisionedProductProvisioningParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ServicecatalogProvisionedProductProvisioningParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ServicecatalogProvisionedProductProvisioningParametersOutputReference;
}
export interface ServicecatalogProvisionedProductStackSetProvisioningPreferences {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#accounts ServicecatalogProvisionedProduct#accounts}
    */
    readonly accounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}
    */
    readonly failureToleranceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}
    */
    readonly failureTolerancePercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}
    */
    readonly maxConcurrencyCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}
    */
    readonly maxConcurrencyPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#regions ServicecatalogProvisionedProduct#regions}
    */
    readonly regions?: string[];
}
export declare function servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(struct?: ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference | ServicecatalogProvisionedProductStackSetProvisioningPreferences): any;
export declare function servicecatalogProvisionedProductStackSetProvisioningPreferencesToHclTerraform(struct?: ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference | ServicecatalogProvisionedProductStackSetProvisioningPreferences): any;
export declare class ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined;
    set internalValue(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined);
    private _accounts?;
    get accounts(): string[];
    set accounts(value: string[]);
    resetAccounts(): void;
    get accountsInput(): string[] | undefined;
    private _failureToleranceCount?;
    get failureToleranceCount(): number;
    set failureToleranceCount(value: number);
    resetFailureToleranceCount(): void;
    get failureToleranceCountInput(): number | undefined;
    private _failureTolerancePercentage?;
    get failureTolerancePercentage(): number;
    set failureTolerancePercentage(value: number);
    resetFailureTolerancePercentage(): void;
    get failureTolerancePercentageInput(): number | undefined;
    private _maxConcurrencyCount?;
    get maxConcurrencyCount(): number;
    set maxConcurrencyCount(value: number);
    resetMaxConcurrencyCount(): void;
    get maxConcurrencyCountInput(): number | undefined;
    private _maxConcurrencyPercentage?;
    get maxConcurrencyPercentage(): number;
    set maxConcurrencyPercentage(value: number);
    resetMaxConcurrencyPercentage(): void;
    get maxConcurrencyPercentageInput(): number | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
}
export interface ServicecatalogProvisionedProductTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#create ServicecatalogProvisionedProduct#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#delete ServicecatalogProvisionedProduct#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#read ServicecatalogProvisionedProduct#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#update ServicecatalogProvisionedProduct#update}
    */
    readonly update?: string;
}
export declare function servicecatalogProvisionedProductTimeoutsToTerraform(struct?: ServicecatalogProvisionedProductTimeouts | cdktf.IResolvable): any;
export declare function servicecatalogProvisionedProductTimeoutsToHclTerraform(struct?: ServicecatalogProvisionedProductTimeouts | cdktf.IResolvable): any;
export declare class ServicecatalogProvisionedProductTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogProvisionedProductTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogProvisionedProductTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product}
*/
export declare class ServicecatalogProvisionedProduct extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_provisioned_product";
    /**
    * Generates CDKTF code for importing a ServicecatalogProvisionedProduct resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogProvisionedProduct to import
    * @param importFromId The id of the existing ServicecatalogProvisionedProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogProvisionedProduct to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_provisioned_product aws_servicecatalog_provisioned_product} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProvisionedProductConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProvisionedProductConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    get arn(): string;
    get cloudwatchDashboardNames(): string[];
    get createdTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ignoreErrors?;
    get ignoreErrors(): boolean | cdktf.IResolvable;
    set ignoreErrors(value: boolean | cdktf.IResolvable);
    resetIgnoreErrors(): void;
    get ignoreErrorsInput(): boolean | cdktf.IResolvable | undefined;
    get lastProvisioningRecordId(): string;
    get lastRecordId(): string;
    get lastSuccessfulProvisioningRecordId(): string;
    get launchRoleArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _notificationArns?;
    get notificationArns(): string[];
    set notificationArns(value: string[]);
    resetNotificationArns(): void;
    get notificationArnsInput(): string[] | undefined;
    private _outputs;
    get outputs(): ServicecatalogProvisionedProductOutputsList;
    private _pathId?;
    get pathId(): string;
    set pathId(value: string);
    resetPathId(): void;
    get pathIdInput(): string | undefined;
    private _pathName?;
    get pathName(): string;
    set pathName(value: string);
    resetPathName(): void;
    get pathNameInput(): string | undefined;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    resetProductId(): void;
    get productIdInput(): string | undefined;
    private _productName?;
    get productName(): string;
    set productName(value: string);
    resetProductName(): void;
    get productNameInput(): string | undefined;
    private _provisioningArtifactId?;
    get provisioningArtifactId(): string;
    set provisioningArtifactId(value: string);
    resetProvisioningArtifactId(): void;
    get provisioningArtifactIdInput(): string | undefined;
    private _provisioningArtifactName?;
    get provisioningArtifactName(): string;
    set provisioningArtifactName(value: string);
    resetProvisioningArtifactName(): void;
    get provisioningArtifactNameInput(): string | undefined;
    private _retainPhysicalResources?;
    get retainPhysicalResources(): boolean | cdktf.IResolvable;
    set retainPhysicalResources(value: boolean | cdktf.IResolvable);
    resetRetainPhysicalResources(): void;
    get retainPhysicalResourcesInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
    get statusMessage(): string;
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
    get type(): string;
    private _provisioningParameters;
    get provisioningParameters(): ServicecatalogProvisionedProductProvisioningParametersList;
    putProvisioningParameters(value: ServicecatalogProvisionedProductProvisioningParameters[] | cdktf.IResolvable): void;
    resetProvisioningParameters(): void;
    get provisioningParametersInput(): cdktf.IResolvable | ServicecatalogProvisionedProductProvisioningParameters[] | undefined;
    private _stackSetProvisioningPreferences;
    get stackSetProvisioningPreferences(): ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference;
    putStackSetProvisioningPreferences(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences): void;
    resetStackSetProvisioningPreferences(): void;
    get stackSetProvisioningPreferencesInput(): ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined;
    private _timeouts;
    get timeouts(): ServicecatalogProvisionedProductTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogProvisionedProductTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ServicecatalogProvisionedProductTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
