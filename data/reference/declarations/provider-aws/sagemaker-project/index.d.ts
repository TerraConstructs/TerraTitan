/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#id SagemakerProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#project_description SagemakerProject#project_description}
    */
    readonly projectDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#project_name SagemakerProject#project_name}
    */
    readonly projectName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#tags SagemakerProject#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#tags_all SagemakerProject#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * service_catalog_provisioning_details block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#service_catalog_provisioning_details SagemakerProject#service_catalog_provisioning_details}
    */
    readonly serviceCatalogProvisioningDetails: SagemakerProjectServiceCatalogProvisioningDetails;
}
export interface SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#key SagemakerProject#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#value SagemakerProject#value}
    */
    readonly value?: string;
}
export declare function sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter | cdktf.IResolvable): any;
export declare function sagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterToHclTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter | cdktf.IResolvable): any;
export declare class SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterOutputReference;
}
export interface SagemakerProjectServiceCatalogProvisioningDetails {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#path_id SagemakerProject#path_id}
    */
    readonly pathId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#product_id SagemakerProject#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#provisioning_artifact_id SagemakerProject#provisioning_artifact_id}
    */
    readonly provisioningArtifactId?: string;
    /**
    * provisioning_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#provisioning_parameter SagemakerProject#provisioning_parameter}
    */
    readonly provisioningParameter?: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable;
}
export declare function sagemakerProjectServiceCatalogProvisioningDetailsToTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsOutputReference | SagemakerProjectServiceCatalogProvisioningDetails): any;
export declare function sagemakerProjectServiceCatalogProvisioningDetailsToHclTerraform(struct?: SagemakerProjectServiceCatalogProvisioningDetailsOutputReference | SagemakerProjectServiceCatalogProvisioningDetails): any;
export declare class SagemakerProjectServiceCatalogProvisioningDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerProjectServiceCatalogProvisioningDetails | undefined;
    set internalValue(value: SagemakerProjectServiceCatalogProvisioningDetails | undefined);
    private _pathId?;
    get pathId(): string;
    set pathId(value: string);
    resetPathId(): void;
    get pathIdInput(): string | undefined;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    get productIdInput(): string | undefined;
    private _provisioningArtifactId?;
    get provisioningArtifactId(): string;
    set provisioningArtifactId(value: string);
    resetProvisioningArtifactId(): void;
    get provisioningArtifactIdInput(): string | undefined;
    private _provisioningParameter;
    get provisioningParameter(): SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameterList;
    putProvisioningParameter(value: SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | cdktf.IResolvable): void;
    resetProvisioningParameter(): void;
    get provisioningParameterInput(): cdktf.IResolvable | SagemakerProjectServiceCatalogProvisioningDetailsProvisioningParameter[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project aws_sagemaker_project}
*/
export declare class SagemakerProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_project";
    /**
    * Generates CDKTF code for importing a SagemakerProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerProject to import
    * @param importFromId The id of the existing SagemakerProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_project aws_sagemaker_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerProjectConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerProjectConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _projectDescription?;
    get projectDescription(): string;
    set projectDescription(value: string);
    resetProjectDescription(): void;
    get projectDescriptionInput(): string | undefined;
    get projectId(): string;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string | undefined;
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
    private _serviceCatalogProvisioningDetails;
    get serviceCatalogProvisioningDetails(): SagemakerProjectServiceCatalogProvisioningDetailsOutputReference;
    putServiceCatalogProvisioningDetails(value: SagemakerProjectServiceCatalogProvisioningDetails): void;
    get serviceCatalogProvisioningDetailsInput(): SagemakerProjectServiceCatalogProvisioningDetails | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
