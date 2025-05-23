/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CleanroomsConfiguredTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#allowed_columns CleanroomsConfiguredTable#allowed_columns}
    */
    readonly allowedColumns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#analysis_method CleanroomsConfiguredTable#analysis_method}
    */
    readonly analysisMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#description CleanroomsConfiguredTable#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#id CleanroomsConfiguredTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#name CleanroomsConfiguredTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#tags CleanroomsConfiguredTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#tags_all CleanroomsConfiguredTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * table_reference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#table_reference CleanroomsConfiguredTable#table_reference}
    */
    readonly tableReference: CleanroomsConfiguredTableTableReference;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#timeouts CleanroomsConfiguredTable#timeouts}
    */
    readonly timeouts?: CleanroomsConfiguredTableTimeouts;
}
export interface CleanroomsConfiguredTableTableReference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#database_name CleanroomsConfiguredTable#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#table_name CleanroomsConfiguredTable#table_name}
    */
    readonly tableName: string;
}
export declare function cleanroomsConfiguredTableTableReferenceToTerraform(struct?: CleanroomsConfiguredTableTableReferenceOutputReference | CleanroomsConfiguredTableTableReference): any;
export declare function cleanroomsConfiguredTableTableReferenceToHclTerraform(struct?: CleanroomsConfiguredTableTableReferenceOutputReference | CleanroomsConfiguredTableTableReference): any;
export declare class CleanroomsConfiguredTableTableReferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CleanroomsConfiguredTableTableReference | undefined;
    set internalValue(value: CleanroomsConfiguredTableTableReference | undefined);
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
}
export interface CleanroomsConfiguredTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#create CleanroomsConfiguredTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#delete CleanroomsConfiguredTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#update CleanroomsConfiguredTable#update}
    */
    readonly update?: string;
}
export declare function cleanroomsConfiguredTableTimeoutsToTerraform(struct?: CleanroomsConfiguredTableTimeouts | cdktf.IResolvable): any;
export declare function cleanroomsConfiguredTableTimeoutsToHclTerraform(struct?: CleanroomsConfiguredTableTimeouts | cdktf.IResolvable): any;
export declare class CleanroomsConfiguredTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CleanroomsConfiguredTableTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsConfiguredTableTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table aws_cleanrooms_configured_table}
*/
export declare class CleanroomsConfiguredTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cleanrooms_configured_table";
    /**
    * Generates CDKTF code for importing a CleanroomsConfiguredTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CleanroomsConfiguredTable to import
    * @param importFromId The id of the existing CleanroomsConfiguredTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CleanroomsConfiguredTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cleanrooms_configured_table aws_cleanrooms_configured_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CleanroomsConfiguredTableConfig
    */
    constructor(scope: Construct, id: string, config: CleanroomsConfiguredTableConfig);
    private _allowedColumns?;
    get allowedColumns(): string[];
    set allowedColumns(value: string[]);
    get allowedColumnsInput(): string[] | undefined;
    private _analysisMethod?;
    get analysisMethod(): string;
    set analysisMethod(value: string);
    get analysisMethodInput(): string | undefined;
    get arn(): string;
    get createTime(): string;
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
    get updateTime(): string;
    private _tableReference;
    get tableReference(): CleanroomsConfiguredTableTableReferenceOutputReference;
    putTableReference(value: CleanroomsConfiguredTableTableReference): void;
    get tableReferenceInput(): CleanroomsConfiguredTableTableReference | undefined;
    private _timeouts;
    get timeouts(): CleanroomsConfiguredTableTimeoutsOutputReference;
    putTimeouts(value: CleanroomsConfiguredTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CleanroomsConfiguredTableTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
