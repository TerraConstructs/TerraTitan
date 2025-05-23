/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicecatalogConstraintConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint#accept_language DataAwsServicecatalogConstraint#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint#description DataAwsServicecatalogConstraint#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint#id DataAwsServicecatalogConstraint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint#timeouts DataAwsServicecatalogConstraint#timeouts}
    */
    readonly timeouts?: DataAwsServicecatalogConstraintTimeouts;
}
export interface DataAwsServicecatalogConstraintTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint#read DataAwsServicecatalogConstraint#read}
    */
    readonly read?: string;
}
export declare function dataAwsServicecatalogConstraintTimeoutsToTerraform(struct?: DataAwsServicecatalogConstraintTimeouts | cdktf.IResolvable): any;
export declare function dataAwsServicecatalogConstraintTimeoutsToHclTerraform(struct?: DataAwsServicecatalogConstraintTimeouts | cdktf.IResolvable): any;
export declare class DataAwsServicecatalogConstraintTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsServicecatalogConstraintTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsServicecatalogConstraintTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint aws_servicecatalog_constraint}
*/
export declare class DataAwsServicecatalogConstraint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicecatalog_constraint";
    /**
    * Generates CDKTF code for importing a DataAwsServicecatalogConstraint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicecatalogConstraint to import
    * @param importFromId The id of the existing DataAwsServicecatalogConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicecatalogConstraint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicecatalog_constraint aws_servicecatalog_constraint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicecatalogConstraintConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicecatalogConstraintConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get owner(): string;
    get parameters(): string;
    get portfolioId(): string;
    get productId(): string;
    get status(): string;
    get type(): string;
    private _timeouts;
    get timeouts(): DataAwsServicecatalogConstraintTimeoutsOutputReference;
    putTimeouts(value: DataAwsServicecatalogConstraintTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsServicecatalogConstraintTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
