/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerServicecatalogPortfolioStatusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_servicecatalog_portfolio_status#id SagemakerServicecatalogPortfolioStatus#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_servicecatalog_portfolio_status#status SagemakerServicecatalogPortfolioStatus#status}
    */
    readonly status: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_servicecatalog_portfolio_status aws_sagemaker_servicecatalog_portfolio_status}
*/
export declare class SagemakerServicecatalogPortfolioStatus extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_servicecatalog_portfolio_status";
    /**
    * Generates CDKTF code for importing a SagemakerServicecatalogPortfolioStatus resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerServicecatalogPortfolioStatus to import
    * @param importFromId The id of the existing SagemakerServicecatalogPortfolioStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_servicecatalog_portfolio_status#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerServicecatalogPortfolioStatus to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_servicecatalog_portfolio_status aws_sagemaker_servicecatalog_portfolio_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerServicecatalogPortfolioStatusConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerServicecatalogPortfolioStatusConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    get statusInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
