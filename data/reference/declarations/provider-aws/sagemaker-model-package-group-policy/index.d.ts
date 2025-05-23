/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerModelPackageGroupPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_model_package_group_policy#id SagemakerModelPackageGroupPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_model_package_group_policy#model_package_group_name SagemakerModelPackageGroupPolicy#model_package_group_name}
    */
    readonly modelPackageGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_model_package_group_policy#resource_policy SagemakerModelPackageGroupPolicy#resource_policy}
    */
    readonly resourcePolicy: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_model_package_group_policy aws_sagemaker_model_package_group_policy}
*/
export declare class SagemakerModelPackageGroupPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_model_package_group_policy";
    /**
    * Generates CDKTF code for importing a SagemakerModelPackageGroupPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerModelPackageGroupPolicy to import
    * @param importFromId The id of the existing SagemakerModelPackageGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_model_package_group_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerModelPackageGroupPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_model_package_group_policy aws_sagemaker_model_package_group_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupPolicyConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupPolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _modelPackageGroupName?;
    get modelPackageGroupName(): string;
    set modelPackageGroupName(value: string);
    get modelPackageGroupNameInput(): string | undefined;
    private _resourcePolicy?;
    get resourcePolicy(): string;
    set resourcePolicy(value: string);
    get resourcePolicyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
