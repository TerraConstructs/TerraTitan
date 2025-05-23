/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftserverlessCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_credentials#db_name DataAwsRedshiftserverlessCredentials#db_name}
    */
    readonly dbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_credentials#duration_seconds DataAwsRedshiftserverlessCredentials#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_credentials#id DataAwsRedshiftserverlessCredentials#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_credentials#workgroup_name DataAwsRedshiftserverlessCredentials#workgroup_name}
    */
    readonly workgroupName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_credentials aws_redshiftserverless_credentials}
*/
export declare class DataAwsRedshiftserverlessCredentials extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_redshiftserverless_credentials";
    /**
    * Generates CDKTF code for importing a DataAwsRedshiftserverlessCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRedshiftserverlessCredentials to import
    * @param importFromId The id of the existing DataAwsRedshiftserverlessCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRedshiftserverlessCredentials to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_credentials aws_redshiftserverless_credentials} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftserverlessCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftserverlessCredentialsConfig);
    private _dbName?;
    get dbName(): string;
    set dbName(value: string);
    resetDbName(): void;
    get dbNameInput(): string | undefined;
    get dbPassword(): string;
    get dbUser(): string;
    private _durationSeconds?;
    get durationSeconds(): number;
    set durationSeconds(value: number);
    resetDurationSeconds(): void;
    get durationSecondsInput(): number | undefined;
    get expiration(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _workgroupName?;
    get workgroupName(): string;
    set workgroupName(value: string);
    get workgroupNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
