/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogProductPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}
    */
    readonly productId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}
    */
    readonly sourcePortfolioId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#timeouts ServicecatalogProductPortfolioAssociation#timeouts}
    */
    readonly timeouts?: ServicecatalogProductPortfolioAssociationTimeouts;
}
export interface ServicecatalogProductPortfolioAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#create ServicecatalogProductPortfolioAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#delete ServicecatalogProductPortfolioAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#read ServicecatalogProductPortfolioAssociation#read}
    */
    readonly read?: string;
}
export declare function servicecatalogProductPortfolioAssociationTimeoutsToTerraform(struct?: ServicecatalogProductPortfolioAssociationTimeouts | cdktf.IResolvable): any;
export declare function servicecatalogProductPortfolioAssociationTimeoutsToHclTerraform(struct?: ServicecatalogProductPortfolioAssociationTimeouts | cdktf.IResolvable): any;
export declare class ServicecatalogProductPortfolioAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogProductPortfolioAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogProductPortfolioAssociationTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association}
*/
export declare class ServicecatalogProductPortfolioAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_product_portfolio_association";
    /**
    * Generates CDKTF code for importing a ServicecatalogProductPortfolioAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogProductPortfolioAssociation to import
    * @param importFromId The id of the existing ServicecatalogProductPortfolioAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogProductPortfolioAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogProductPortfolioAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogProductPortfolioAssociationConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
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
    get productIdInput(): string | undefined;
    private _sourcePortfolioId?;
    get sourcePortfolioId(): string;
    set sourcePortfolioId(value: string);
    resetSourcePortfolioId(): void;
    get sourcePortfolioIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): ServicecatalogProductPortfolioAssociationTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogProductPortfolioAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ServicecatalogProductPortfolioAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
