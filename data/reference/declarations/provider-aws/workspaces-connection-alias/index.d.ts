/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspacesConnectionAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * The connection string specified for the connection alias. The connection string must be in the form of a fully qualified domain name (FQDN), such as www.example.com.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias#connection_string WorkspacesConnectionAlias#connection_string}
    */
    readonly connectionString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias#tags WorkspacesConnectionAlias#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias#timeouts WorkspacesConnectionAlias#timeouts}
    */
    readonly timeouts?: WorkspacesConnectionAliasTimeouts;
}
export interface WorkspacesConnectionAliasTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias#create WorkspacesConnectionAlias#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias#delete WorkspacesConnectionAlias#delete}
    */
    readonly delete?: string;
}
export declare function workspacesConnectionAliasTimeoutsToTerraform(struct?: WorkspacesConnectionAliasTimeouts | cdktf.IResolvable): any;
export declare function workspacesConnectionAliasTimeoutsToHclTerraform(struct?: WorkspacesConnectionAliasTimeouts | cdktf.IResolvable): any;
export declare class WorkspacesConnectionAliasTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): WorkspacesConnectionAliasTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: WorkspacesConnectionAliasTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias aws_workspaces_connection_alias}
*/
export declare class WorkspacesConnectionAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspaces_connection_alias";
    /**
    * Generates CDKTF code for importing a WorkspacesConnectionAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspacesConnectionAlias to import
    * @param importFromId The id of the existing WorkspacesConnectionAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspacesConnectionAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/workspaces_connection_alias aws_workspaces_connection_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesConnectionAliasConfig
    */
    constructor(scope: Construct, id: string, config: WorkspacesConnectionAliasConfig);
    private _connectionString?;
    get connectionString(): string;
    set connectionString(value: string);
    get connectionStringInput(): string | undefined;
    get id(): string;
    get ownerAccountId(): string;
    get state(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _timeouts;
    get timeouts(): WorkspacesConnectionAliasTimeoutsOutputReference;
    putTimeouts(value: WorkspacesConnectionAliasTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | WorkspacesConnectionAliasTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
