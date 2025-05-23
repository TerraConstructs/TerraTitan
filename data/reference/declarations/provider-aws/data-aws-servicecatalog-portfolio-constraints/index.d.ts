/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicecatalogPortfolioConstraintsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints#accept_language DataAwsServicecatalogPortfolioConstraints#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints#id DataAwsServicecatalogPortfolioConstraints#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints#portfolio_id DataAwsServicecatalogPortfolioConstraints#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints#product_id DataAwsServicecatalogPortfolioConstraints#product_id}
    */
    readonly productId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints#timeouts DataAwsServicecatalogPortfolioConstraints#timeouts}
    */
    readonly timeouts?: DataAwsServicecatalogPortfolioConstraintsTimeouts;
}
export interface DataAwsServicecatalogPortfolioConstraintsDetails {
}
export declare function dataAwsServicecatalogPortfolioConstraintsDetailsToTerraform(struct?: DataAwsServicecatalogPortfolioConstraintsDetails): any;
export declare function dataAwsServicecatalogPortfolioConstraintsDetailsToHclTerraform(struct?: DataAwsServicecatalogPortfolioConstraintsDetails): any;
export declare class DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServicecatalogPortfolioConstraintsDetails | undefined;
    set internalValue(value: DataAwsServicecatalogPortfolioConstraintsDetails | undefined);
    get constraintId(): string;
    get description(): string;
    get owner(): string;
    get portfolioId(): string;
    get productId(): string;
    get type(): string;
}
export declare class DataAwsServicecatalogPortfolioConstraintsDetailsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsServicecatalogPortfolioConstraintsDetailsOutputReference;
}
export interface DataAwsServicecatalogPortfolioConstraintsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints#read DataAwsServicecatalogPortfolioConstraints#read}
    */
    readonly read?: string;
}
export declare function dataAwsServicecatalogPortfolioConstraintsTimeoutsToTerraform(struct?: DataAwsServicecatalogPortfolioConstraintsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsServicecatalogPortfolioConstraintsTimeoutsToHclTerraform(struct?: DataAwsServicecatalogPortfolioConstraintsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsServicecatalogPortfolioConstraintsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsServicecatalogPortfolioConstraintsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints aws_servicecatalog_portfolio_constraints}
*/
export declare class DataAwsServicecatalogPortfolioConstraints extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicecatalog_portfolio_constraints";
    /**
    * Generates CDKTF code for importing a DataAwsServicecatalogPortfolioConstraints resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicecatalogPortfolioConstraints to import
    * @param importFromId The id of the existing DataAwsServicecatalogPortfolioConstraints that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicecatalogPortfolioConstraints to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_portfolio_constraints aws_servicecatalog_portfolio_constraints} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogPortfolioConstraintsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogPortfolioConstraintsConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    private _details;
    get details(): DataAwsServicecatalogPortfolioConstraintsDetailsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _portfolioId?;
    get portfolioId(): string;
    set portfolioId(value: string);
    get portfolioIdInput(): string | undefined;
    private _productId?;
    get productId(): string;
    set productId(value: string);
    resetProductId(): void;
    get productIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): DataAwsServicecatalogPortfolioConstraintsTimeoutsOutputReference;
    putTimeouts(value: DataAwsServicecatalogPortfolioConstraintsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsServicecatalogPortfolioConstraintsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
