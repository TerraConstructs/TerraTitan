/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftdataStatementConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#cluster_identifier RedshiftdataStatement#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#database RedshiftdataStatement#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#db_user RedshiftdataStatement#db_user}
    */
    readonly dbUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#id RedshiftdataStatement#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#secret_arn RedshiftdataStatement#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#sql RedshiftdataStatement#sql}
    */
    readonly sql: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#statement_name RedshiftdataStatement#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#with_event RedshiftdataStatement#with_event}
    */
    readonly withEvent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#workgroup_name RedshiftdataStatement#workgroup_name}
    */
    readonly workgroupName?: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#parameters RedshiftdataStatement#parameters}
    */
    readonly parameters?: RedshiftdataStatementParameters[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#timeouts RedshiftdataStatement#timeouts}
    */
    readonly timeouts?: RedshiftdataStatementTimeouts;
}
export interface RedshiftdataStatementParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#name RedshiftdataStatement#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#value RedshiftdataStatement#value}
    */
    readonly value: string;
}
export declare function redshiftdataStatementParametersToTerraform(struct?: RedshiftdataStatementParameters | cdktf.IResolvable): any;
export declare function redshiftdataStatementParametersToHclTerraform(struct?: RedshiftdataStatementParameters | cdktf.IResolvable): any;
export declare class RedshiftdataStatementParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftdataStatementParameters | cdktf.IResolvable | undefined;
    set internalValue(value: RedshiftdataStatementParameters | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class RedshiftdataStatementParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: RedshiftdataStatementParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): RedshiftdataStatementParametersOutputReference;
}
export interface RedshiftdataStatementTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#create RedshiftdataStatement#create}
    */
    readonly create?: string;
}
export declare function redshiftdataStatementTimeoutsToTerraform(struct?: RedshiftdataStatementTimeouts | cdktf.IResolvable): any;
export declare function redshiftdataStatementTimeoutsToHclTerraform(struct?: RedshiftdataStatementTimeouts | cdktf.IResolvable): any;
export declare class RedshiftdataStatementTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RedshiftdataStatementTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RedshiftdataStatementTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement aws_redshiftdata_statement}
*/
export declare class RedshiftdataStatement extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshiftdata_statement";
    /**
    * Generates CDKTF code for importing a RedshiftdataStatement resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftdataStatement to import
    * @param importFromId The id of the existing RedshiftdataStatement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftdataStatement to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftdata_statement aws_redshiftdata_statement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftdataStatementConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftdataStatementConfig);
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    resetClusterIdentifier(): void;
    get clusterIdentifierInput(): string | undefined;
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _dbUser?;
    get dbUser(): string;
    set dbUser(value: string);
    resetDbUser(): void;
    get dbUserInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
    private _sql?;
    get sql(): string;
    set sql(value: string);
    get sqlInput(): string | undefined;
    private _statementName?;
    get statementName(): string;
    set statementName(value: string);
    resetStatementName(): void;
    get statementNameInput(): string | undefined;
    private _withEvent?;
    get withEvent(): boolean | cdktf.IResolvable;
    set withEvent(value: boolean | cdktf.IResolvable);
    resetWithEvent(): void;
    get withEventInput(): boolean | cdktf.IResolvable | undefined;
    private _workgroupName?;
    get workgroupName(): string;
    set workgroupName(value: string);
    resetWorkgroupName(): void;
    get workgroupNameInput(): string | undefined;
    private _parameters;
    get parameters(): RedshiftdataStatementParametersList;
    putParameters(value: RedshiftdataStatementParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | RedshiftdataStatementParameters[] | undefined;
    private _timeouts;
    get timeouts(): RedshiftdataStatementTimeoutsOutputReference;
    putTimeouts(value: RedshiftdataStatementTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RedshiftdataStatementTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
