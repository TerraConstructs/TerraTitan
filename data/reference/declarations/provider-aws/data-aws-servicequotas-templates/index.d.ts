/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServicequotasTemplatesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_templates#region DataAwsServicequotasTemplates#region}
    */
    readonly region: string;
    /**
    * templates block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_templates#templates DataAwsServicequotasTemplates#templates}
    */
    readonly templates?: DataAwsServicequotasTemplatesTemplates[] | cdktf.IResolvable;
}
export interface DataAwsServicequotasTemplatesTemplates {
}
export declare function dataAwsServicequotasTemplatesTemplatesToTerraform(struct?: DataAwsServicequotasTemplatesTemplates | cdktf.IResolvable): any;
export declare function dataAwsServicequotasTemplatesTemplatesToHclTerraform(struct?: DataAwsServicequotasTemplatesTemplates | cdktf.IResolvable): any;
export declare class DataAwsServicequotasTemplatesTemplatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsServicequotasTemplatesTemplates | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsServicequotasTemplatesTemplates | cdktf.IResolvable | undefined);
    get globalQuota(): cdktf.IResolvable;
    get quotaCode(): string;
    get quotaName(): string;
    get region(): string;
    get serviceCode(): string;
    get serviceName(): string;
    get unit(): string;
    get value(): number;
}
export declare class DataAwsServicequotasTemplatesTemplatesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsServicequotasTemplatesTemplates[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsServicequotasTemplatesTemplatesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_templates aws_servicequotas_templates}
*/
export declare class DataAwsServicequotasTemplates extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_servicequotas_templates";
    /**
    * Generates CDKTF code for importing a DataAwsServicequotasTemplates resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServicequotasTemplates to import
    * @param importFromId The id of the existing DataAwsServicequotasTemplates that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_templates#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServicequotasTemplates to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/servicequotas_templates aws_servicequotas_templates} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServicequotasTemplatesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServicequotasTemplatesConfig);
    get id(): string;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    private _templates;
    get templates(): DataAwsServicequotasTemplatesTemplatesList;
    putTemplates(value: DataAwsServicequotasTemplatesTemplates[] | cdktf.IResolvable): void;
    resetTemplates(): void;
    get templatesInput(): cdktf.IResolvable | DataAwsServicequotasTemplatesTemplates[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
