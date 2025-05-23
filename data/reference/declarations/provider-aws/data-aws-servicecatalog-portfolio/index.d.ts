/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicecatalogPortfolioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio#accept_language DataAwsServicecatalogPortfolio#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio#id DataAwsServicecatalogPortfolio#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio#tags DataAwsServicecatalogPortfolio#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio#timeouts DataAwsServicecatalogPortfolio#timeouts}
    */
    readonly timeouts?: DataAwsServicecatalogPortfolioTimeouts;
}
export interface DataAwsServicecatalogPortfolioTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio#read DataAwsServicecatalogPortfolio#read}
    */
    readonly read?: string;
}
export declare function dataAwsServicecatalogPortfolioTimeoutsToTerraform(struct?: DataAwsServicecatalogPortfolioTimeouts | cdktf.IResolvable): any;
export declare function dataAwsServicecatalogPortfolioTimeoutsToHclTerraform(struct?: DataAwsServicecatalogPortfolioTimeouts | cdktf.IResolvable): any;
export declare class DataAwsServicecatalogPortfolioTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsServicecatalogPortfolioTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsServicecatalogPortfolioTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio aws_servicecatalog_portfolio}
*/
export declare class DataAwsServicecatalogPortfolio extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicecatalog_portfolio";
    /**
    * Generates CDKTF code for importing a DataAwsServicecatalogPortfolio resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicecatalogPortfolio to import
    * @param importFromId The id of the existing DataAwsServicecatalogPortfolio that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicecatalogPortfolio to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio aws_servicecatalog_portfolio} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    get arn(): string;
    get createdTime(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get name(): string;
    get providerName(): string;
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
    private _timeouts;
    get timeouts(): DataAwsServicecatalogPortfolioTimeoutsOutputReference;
    putTimeouts(value: DataAwsServicecatalogPortfolioTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsServicecatalogPortfolioTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
