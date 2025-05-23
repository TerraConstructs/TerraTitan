/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpsworksRdsDbInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance#db_password OpsworksRdsDbInstance#db_password}
    */
    readonly dbPassword: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance#db_user OpsworksRdsDbInstance#db_user}
    */
    readonly dbUser: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance#id OpsworksRdsDbInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance#rds_db_instance_arn OpsworksRdsDbInstance#rds_db_instance_arn}
    */
    readonly rdsDbInstanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance#stack_id OpsworksRdsDbInstance#stack_id}
    */
    readonly stackId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance aws_opsworks_rds_db_instance}
*/
export declare class OpsworksRdsDbInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opsworks_rds_db_instance";
    /**
    * Generates CDKTF code for importing a OpsworksRdsDbInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpsworksRdsDbInstance to import
    * @param importFromId The id of the existing OpsworksRdsDbInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpsworksRdsDbInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opsworks_rds_db_instance aws_opsworks_rds_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpsworksRdsDbInstanceConfig
    */
    constructor(scope: Construct, id: string, config: OpsworksRdsDbInstanceConfig);
    private _dbPassword?;
    get dbPassword(): string;
    set dbPassword(value: string);
    get dbPasswordInput(): string | undefined;
    private _dbUser?;
    get dbUser(): string;
    set dbUser(value: string);
    get dbUserInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _rdsDbInstanceArn?;
    get rdsDbInstanceArn(): string;
    set rdsDbInstanceArn(value: string);
    get rdsDbInstanceArnInput(): string | undefined;
    private _stackId?;
    get stackId(): string;
    set stackId(value: string);
    get stackIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
