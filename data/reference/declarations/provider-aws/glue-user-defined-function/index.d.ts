/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueUserDefinedFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#catalog_id GlueUserDefinedFunction#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#class_name GlueUserDefinedFunction#class_name}
    */
    readonly className: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#database_name GlueUserDefinedFunction#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#id GlueUserDefinedFunction#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#name GlueUserDefinedFunction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#owner_name GlueUserDefinedFunction#owner_name}
    */
    readonly ownerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#owner_type GlueUserDefinedFunction#owner_type}
    */
    readonly ownerType: string;
    /**
    * resource_uris block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#resource_uris GlueUserDefinedFunction#resource_uris}
    */
    readonly resourceUris?: GlueUserDefinedFunctionResourceUris[] | cdktf.IResolvable;
}
export interface GlueUserDefinedFunctionResourceUris {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#resource_type GlueUserDefinedFunction#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#uri GlueUserDefinedFunction#uri}
    */
    readonly uri: string;
}
export declare function glueUserDefinedFunctionResourceUrisToTerraform(struct?: GlueUserDefinedFunctionResourceUris | cdktf.IResolvable): any;
export declare function glueUserDefinedFunctionResourceUrisToHclTerraform(struct?: GlueUserDefinedFunctionResourceUris | cdktf.IResolvable): any;
export declare class GlueUserDefinedFunctionResourceUrisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): GlueUserDefinedFunctionResourceUris | cdktf.IResolvable | undefined;
    set internalValue(value: GlueUserDefinedFunctionResourceUris | cdktf.IResolvable | undefined);
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
}
export declare class GlueUserDefinedFunctionResourceUrisList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: GlueUserDefinedFunctionResourceUris[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): GlueUserDefinedFunctionResourceUrisOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function aws_glue_user_defined_function}
*/
export declare class GlueUserDefinedFunction extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_user_defined_function";
    /**
    * Generates CDKTF code for importing a GlueUserDefinedFunction resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueUserDefinedFunction to import
    * @param importFromId The id of the existing GlueUserDefinedFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueUserDefinedFunction to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_user_defined_function aws_glue_user_defined_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueUserDefinedFunctionConfig
    */
    constructor(scope: Construct, id: string, config: GlueUserDefinedFunctionConfig);
    get arn(): string;
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _className?;
    get className(): string;
    set className(value: string);
    get classNameInput(): string | undefined;
    get createTime(): string;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _ownerName?;
    get ownerName(): string;
    set ownerName(value: string);
    get ownerNameInput(): string | undefined;
    private _ownerType?;
    get ownerType(): string;
    set ownerType(value: string);
    get ownerTypeInput(): string | undefined;
    private _resourceUris;
    get resourceUris(): GlueUserDefinedFunctionResourceUrisList;
    putResourceUris(value: GlueUserDefinedFunctionResourceUris[] | cdktf.IResolvable): void;
    resetResourceUris(): void;
    get resourceUrisInput(): cdktf.IResolvable | GlueUserDefinedFunctionResourceUris[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
