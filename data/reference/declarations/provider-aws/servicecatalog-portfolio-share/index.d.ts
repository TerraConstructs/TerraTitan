/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogPortfolioShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#accept_language ServicecatalogPortfolioShare#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#id ServicecatalogPortfolioShare#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#portfolio_id ServicecatalogPortfolioShare#portfolio_id}
    */
    readonly portfolioId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#principal_id ServicecatalogPortfolioShare#principal_id}
    */
    readonly principalId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#share_principals ServicecatalogPortfolioShare#share_principals}
    */
    readonly sharePrincipals?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#share_tag_options ServicecatalogPortfolioShare#share_tag_options}
    */
    readonly shareTagOptions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#type ServicecatalogPortfolioShare#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#wait_for_acceptance ServicecatalogPortfolioShare#wait_for_acceptance}
    */
    readonly waitForAcceptance?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#timeouts ServicecatalogPortfolioShare#timeouts}
    */
    readonly timeouts?: ServicecatalogPortfolioShareTimeouts;
}
export interface ServicecatalogPortfolioShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#create ServicecatalogPortfolioShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#delete ServicecatalogPortfolioShare#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#read ServicecatalogPortfolioShare#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#update ServicecatalogPortfolioShare#update}
    */
    readonly update?: string;
}
export declare function servicecatalogPortfolioShareTimeoutsToTerraform(struct?: ServicecatalogPortfolioShareTimeouts | cdktf.IResolvable): any;
export declare function servicecatalogPortfolioShareTimeoutsToHclTerraform(struct?: ServicecatalogPortfolioShareTimeouts | cdktf.IResolvable): any;
export declare class ServicecatalogPortfolioShareTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogPortfolioShareTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogPortfolioShareTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share aws_servicecatalog_portfolio_share}
*/
export declare class ServicecatalogPortfolioShare extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_portfolio_share";
    /**
    * Generates CDKTF code for importing a ServicecatalogPortfolioShare resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogPortfolioShare to import
    * @param importFromId The id of the existing ServicecatalogPortfolioShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogPortfolioShare to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio_share aws_servicecatalog_portfolio_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPortfolioShareConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogPortfolioShareConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    get accepted(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _portfolioId?;
    get portfolioId(): string;
    set portfolioId(value: string);
    get portfolioIdInput(): string | undefined;
    private _principalId?;
    get principalId(): string;
    set principalId(value: string);
    get principalIdInput(): string | undefined;
    private _sharePrincipals?;
    get sharePrincipals(): boolean | cdktf.IResolvable;
    set sharePrincipals(value: boolean | cdktf.IResolvable);
    resetSharePrincipals(): void;
    get sharePrincipalsInput(): boolean | cdktf.IResolvable | undefined;
    private _shareTagOptions?;
    get shareTagOptions(): boolean | cdktf.IResolvable;
    set shareTagOptions(value: boolean | cdktf.IResolvable);
    resetShareTagOptions(): void;
    get shareTagOptionsInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _waitForAcceptance?;
    get waitForAcceptance(): boolean | cdktf.IResolvable;
    set waitForAcceptance(value: boolean | cdktf.IResolvable);
    resetWaitForAcceptance(): void;
    get waitForAcceptanceInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): ServicecatalogPortfolioShareTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogPortfolioShareTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ServicecatalogPortfolioShareTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
