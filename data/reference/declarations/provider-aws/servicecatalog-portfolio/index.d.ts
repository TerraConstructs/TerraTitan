/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ServicecatalogPortfolioConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#description ServicecatalogPortfolio#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#id ServicecatalogPortfolio#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#name ServicecatalogPortfolio#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#provider_name ServicecatalogPortfolio#provider_name}
    */
    readonly providerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#tags ServicecatalogPortfolio#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#tags_all ServicecatalogPortfolio#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#timeouts ServicecatalogPortfolio#timeouts}
    */
    readonly timeouts?: ServicecatalogPortfolioTimeouts;
}
export interface ServicecatalogPortfolioTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#create ServicecatalogPortfolio#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#delete ServicecatalogPortfolio#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#read ServicecatalogPortfolio#read}
    */
    readonly read?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#update ServicecatalogPortfolio#update}
    */
    readonly update?: string;
}
export declare function servicecatalogPortfolioTimeoutsToTerraform(struct?: ServicecatalogPortfolioTimeouts | cdktf.IResolvable): any;
export declare function servicecatalogPortfolioTimeoutsToHclTerraform(struct?: ServicecatalogPortfolioTimeouts | cdktf.IResolvable): any;
export declare class ServicecatalogPortfolioTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ServicecatalogPortfolioTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ServicecatalogPortfolioTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio aws_servicecatalog_portfolio}
*/
export declare class ServicecatalogPortfolio extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_servicecatalog_portfolio";
    /**
    * Generates CDKTF code for importing a ServicecatalogPortfolio resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ServicecatalogPortfolio to import
    * @param importFromId The id of the existing ServicecatalogPortfolio that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ServicecatalogPortfolio to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/servicecatalog_portfolio aws_servicecatalog_portfolio} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogPortfolioConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogPortfolioConfig);
    get arn(): string;
    get createdTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    get providerNameInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): ServicecatalogPortfolioTimeoutsOutputReference;
    putTimeouts(value: ServicecatalogPortfolioTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ServicecatalogPortfolioTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
