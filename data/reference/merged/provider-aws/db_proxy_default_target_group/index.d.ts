/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Name of the RDS DB Proxy. */
    readonly dbProxyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Optional) The settings that determine the size and behavior of the connection pool for the target group. */
    readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}
    */
    readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
}
export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
    /** (Optional) The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the proxy has opened its maximum number of connections and all connections are busy with client sessions. */
    readonly connectionBorrowTimeout?: number;
    /** (Optional) One or more SQL statements for the proxy to run when opening each new database connection. Typically used with `SET` statements to make sure that each connection has identical settings such as time zone and character set. This setting is empty by default. For multiple statements, use semicolons as the separator. You can also include multiple variables in a single `SET` statement, such as `SET x=1, y=2`. */
    readonly initQuery?: string;
    /** (Optional) The maximum size of the connection pool for each target in a target group. For Aurora MySQL, it is expressed as a percentage of the max_connections setting for the RDS DB instance or Aurora DB cluster used by the target group. */
    readonly maxConnectionsPercent?: number;
    /** (Optional) Controls how actively the proxy closes idle database connections in the connection pool. A high value enables the proxy to leave a high percentage of idle connections open. A low value causes the proxy to close idle client connections and return the underlying database connections to the connection pool. For Aurora MySQL, it is expressed as a percentage of the max_connections setting for the RDS DB instance or Aurora DB cluster used by the target group. */
    readonly maxIdleConnectionsPercent?: number;
    /** (Optional) Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection. Including an item in the list exempts that class of SQL operations from the pinning behavior. This setting is only supported for MySQL engine family databases. Currently, the only allowed value is `EXCLUDE_VARIABLE_SETS`. */
    readonly sessionPinningFilters?: string[];
}
export declare function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct?: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference | DbProxyDefaultTargetGroupConnectionPoolConfig): any;
export declare function dbProxyDefaultTargetGroupConnectionPoolConfigToHclTerraform(struct?: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference | DbProxyDefaultTargetGroupConnectionPoolConfig): any;
export declare class DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbProxyDefaultTargetGroupConnectionPoolConfig | undefined;
    set internalValue(value: DbProxyDefaultTargetGroupConnectionPoolConfig | undefined);
    private _connectionBorrowTimeout?;
    get connectionBorrowTimeout(): number;
    set connectionBorrowTimeout(value: number);
    resetConnectionBorrowTimeout(): void;
    get connectionBorrowTimeoutInput(): number | undefined;
    private _initQuery?;
    get initQuery(): string;
    set initQuery(value: string);
    resetInitQuery(): void;
    get initQueryInput(): string | undefined;
    private _maxConnectionsPercent?;
    get maxConnectionsPercent(): number;
    set maxConnectionsPercent(value: number);
    resetMaxConnectionsPercent(): void;
    get maxConnectionsPercentInput(): number | undefined;
    private _maxIdleConnectionsPercent?;
    get maxIdleConnectionsPercent(): number;
    set maxIdleConnectionsPercent(value: number);
    resetMaxIdleConnectionsPercent(): void;
    get maxIdleConnectionsPercentInput(): number | undefined;
    private _sessionPinningFilters?;
    get sessionPinningFilters(): string[];
    set sessionPinningFilters(value: string[]);
    resetSessionPinningFilters(): void;
    get sessionPinningFiltersInput(): string[] | undefined;
}
export interface DbProxyDefaultTargetGroupTimeouts {
    /** (Default `30m`) - `update` - (Default `30m`) */
    readonly create?: string;
    /** (Default `30m`) */
    readonly update?: string;
}
export declare function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct?: DbProxyDefaultTargetGroupTimeouts | cdktf.IResolvable): any;
export declare function dbProxyDefaultTargetGroupTimeoutsToHclTerraform(struct?: DbProxyDefaultTargetGroupTimeouts | cdktf.IResolvable): any;
export declare class DbProxyDefaultTargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbProxyDefaultTargetGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbProxyDefaultTargetGroupTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_proxy_default_target_group aws_db_proxy_default_target_group}
*/
export declare class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_proxy_default_target_group";
    /**
    * Generates CDKTF code for importing a DbProxyDefaultTargetGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbProxyDefaultTargetGroup to import
    * @param importFromId The id of the existing DbProxyDefaultTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_proxy_default_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbProxyDefaultTargetGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/db_proxy_default_target_group aws_db_proxy_default_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyDefaultTargetGroupConfig
    */
    constructor(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig);
    get arn(): string;
    private _dbProxyName?;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _connectionPoolConfig;
    get connectionPoolConfig(): DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference;
    putConnectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig): void;
    resetConnectionPoolConfig(): void;
    get connectionPoolConfigInput(): DbProxyDefaultTargetGroupConnectionPoolConfig | undefined;
    private _timeouts;
    get timeouts(): DbProxyDefaultTargetGroupTimeoutsOutputReference;
    putTimeouts(value: DbProxyDefaultTargetGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbProxyDefaultTargetGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
