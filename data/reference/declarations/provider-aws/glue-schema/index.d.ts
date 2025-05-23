/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueSchemaConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#compatibility GlueSchema#compatibility}
    */
    readonly compatibility: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#data_format GlueSchema#data_format}
    */
    readonly dataFormat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#description GlueSchema#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#id GlueSchema#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#registry_arn GlueSchema#registry_arn}
    */
    readonly registryArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#schema_definition GlueSchema#schema_definition}
    */
    readonly schemaDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#schema_name GlueSchema#schema_name}
    */
    readonly schemaName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#tags GlueSchema#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#tags_all GlueSchema#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema aws_glue_schema}
*/
export declare class GlueSchema extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_schema";
    /**
    * Generates CDKTF code for importing a GlueSchema resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueSchema to import
    * @param importFromId The id of the existing GlueSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueSchema to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_schema aws_glue_schema} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueSchemaConfig
    */
    constructor(scope: Construct, id: string, config: GlueSchemaConfig);
    get arn(): string;
    private _compatibility?;
    get compatibility(): string;
    set compatibility(value: string);
    get compatibilityInput(): string | undefined;
    private _dataFormat?;
    get dataFormat(): string;
    set dataFormat(value: string);
    get dataFormatInput(): string | undefined;
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
    get latestSchemaVersion(): number;
    get nextSchemaVersion(): number;
    private _registryArn?;
    get registryArn(): string;
    set registryArn(value: string);
    resetRegistryArn(): void;
    get registryArnInput(): string | undefined;
    get registryName(): string;
    get schemaCheckpoint(): number;
    private _schemaDefinition?;
    get schemaDefinition(): string;
    set schemaDefinition(value: string);
    get schemaDefinitionInput(): string | undefined;
    private _schemaName?;
    get schemaName(): string;
    set schemaName(value: string);
    get schemaNameInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
