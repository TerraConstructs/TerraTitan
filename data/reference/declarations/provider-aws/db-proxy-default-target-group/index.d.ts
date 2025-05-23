/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#id DbProxyDefaultTargetGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * connection_pool_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}
    */
    readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#timeouts DbProxyDefaultTargetGroup#timeouts}
    */
    readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
}
export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}
    */
    readonly connectionBorrowTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#init_query DbProxyDefaultTargetGroup#init_query}
    */
    readonly initQuery?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}
    */
    readonly maxConnectionsPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}
    */
    readonly maxIdleConnectionsPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}
    */
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
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#create DbProxyDefaultTargetGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#update DbProxyDefaultTargetGroup#update}
    */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group aws_db_proxy_default_target_group}
*/
export declare class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_proxy_default_target_group";
    /**
    * Generates CDKTF code for importing a DbProxyDefaultTargetGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbProxyDefaultTargetGroup to import
    * @param importFromId The id of the existing DbProxyDefaultTargetGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbProxyDefaultTargetGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy_default_target_group aws_db_proxy_default_target_group} Resource
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
