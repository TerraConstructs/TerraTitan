/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftClusterCredentialsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#auto_create DataAwsRedshiftClusterCredentials#auto_create}
    */
    readonly autoCreate?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#cluster_identifier DataAwsRedshiftClusterCredentials#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#db_groups DataAwsRedshiftClusterCredentials#db_groups}
    */
    readonly dbGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#db_name DataAwsRedshiftClusterCredentials#db_name}
    */
    readonly dbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#db_user DataAwsRedshiftClusterCredentials#db_user}
    */
    readonly dbUser: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#duration_seconds DataAwsRedshiftClusterCredentials#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#id DataAwsRedshiftClusterCredentials#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials aws_redshift_cluster_credentials}
*/
export declare class DataAwsRedshiftClusterCredentials extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_redshift_cluster_credentials";
    /**
    * Generates CDKTF code for importing a DataAwsRedshiftClusterCredentials resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRedshiftClusterCredentials to import
    * @param importFromId The id of the existing DataAwsRedshiftClusterCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRedshiftClusterCredentials to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_cluster_credentials aws_redshift_cluster_credentials} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftClusterCredentialsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftClusterCredentialsConfig);
    private _autoCreate?;
    get autoCreate(): boolean | cdktf.IResolvable;
    set autoCreate(value: boolean | cdktf.IResolvable);
    resetAutoCreate(): void;
    get autoCreateInput(): boolean | cdktf.IResolvable | undefined;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _dbGroups?;
    get dbGroups(): string[];
    set dbGroups(value: string[]);
    resetDbGroups(): void;
    get dbGroupsInput(): string[] | undefined;
    private _dbName?;
    get dbName(): string;
    set dbName(value: string);
    resetDbName(): void;
    get dbNameInput(): string | undefined;
    get dbPassword(): string;
    private _dbUser?;
    get dbUser(): string;
    set dbUser(value: string);
    get dbUserInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
