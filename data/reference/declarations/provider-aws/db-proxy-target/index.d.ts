/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target#db_cluster_identifier DbProxyTarget#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target#db_instance_identifier DbProxyTarget#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target#db_proxy_name DbProxyTarget#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target#id DbProxyTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target#target_group_name DbProxyTarget#target_group_name}
    */
    readonly targetGroupName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target aws_db_proxy_target}
*/
export declare class DbProxyTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_proxy_target";
    /**
    * Generates CDKTF code for importing a DbProxyTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbProxyTarget to import
    * @param importFromId The id of the existing DbProxyTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbProxyTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_target aws_db_proxy_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyTargetConfig
    */
    constructor(scope: Construct, id: string, config: DbProxyTargetConfig);
    private _dbClusterIdentifier?;
    get dbClusterIdentifier(): string;
    set dbClusterIdentifier(value: string);
    resetDbClusterIdentifier(): void;
    get dbClusterIdentifierInput(): string | undefined;
    private _dbInstanceIdentifier?;
    get dbInstanceIdentifier(): string;
    set dbInstanceIdentifier(value: string);
    resetDbInstanceIdentifier(): void;
    get dbInstanceIdentifierInput(): string | undefined;
    private _dbProxyName?;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string | undefined;
    get endpoint(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get port(): number;
    get rdsResourceId(): string;
    get targetArn(): string;
    private _targetGroupName?;
    get targetGroupName(): string;
    set targetGroupName(value: string);
    get targetGroupNameInput(): string | undefined;
    get trackedClusterId(): string;
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
