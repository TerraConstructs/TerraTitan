/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaPreparedStatementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#description AthenaPreparedStatement#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#id AthenaPreparedStatement#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#name AthenaPreparedStatement#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#query_statement AthenaPreparedStatement#query_statement}
    */
    readonly queryStatement: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#workgroup AthenaPreparedStatement#workgroup}
    */
    readonly workgroup: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#timeouts AthenaPreparedStatement#timeouts}
    */
    readonly timeouts?: AthenaPreparedStatementTimeouts;
}
export interface AthenaPreparedStatementTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#create AthenaPreparedStatement#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#delete AthenaPreparedStatement#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#update AthenaPreparedStatement#update}
    */
    readonly update?: string;
}
export declare function athenaPreparedStatementTimeoutsToTerraform(struct?: AthenaPreparedStatementTimeouts | cdktf.IResolvable): any;
export declare function athenaPreparedStatementTimeoutsToHclTerraform(struct?: AthenaPreparedStatementTimeouts | cdktf.IResolvable): any;
export declare class AthenaPreparedStatementTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaPreparedStatementTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AthenaPreparedStatementTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement aws_athena_prepared_statement}
*/
export declare class AthenaPreparedStatement extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_athena_prepared_statement";
    /**
    * Generates CDKTF code for importing a AthenaPreparedStatement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AthenaPreparedStatement to import
    * @param importFromId The id of the existing AthenaPreparedStatement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AthenaPreparedStatement to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_prepared_statement aws_athena_prepared_statement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaPreparedStatementConfig
    */
    constructor(scope: Construct, id: string, config: AthenaPreparedStatementConfig);
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
    private _queryStatement?;
    get queryStatement(): string;
    set queryStatement(value: string);
    get queryStatementInput(): string | undefined;
    private _workgroup?;
    get workgroup(): string;
    set workgroup(value: string);
    get workgroupInput(): string | undefined;
    private _timeouts;
    get timeouts(): AthenaPreparedStatementTimeoutsOutputReference;
    putTimeouts(value: AthenaPreparedStatementTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AthenaPreparedStatementTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
