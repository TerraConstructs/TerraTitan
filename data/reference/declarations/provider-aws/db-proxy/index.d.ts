/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#debug_logging DbProxy#debug_logging}
    */
    readonly debugLogging?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#engine_family DbProxy#engine_family}
    */
    readonly engineFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#id DbProxy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#idle_client_timeout DbProxy#idle_client_timeout}
    */
    readonly idleClientTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#name DbProxy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#require_tls DbProxy#require_tls}
    */
    readonly requireTls?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#role_arn DbProxy#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#tags DbProxy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#tags_all DbProxy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#vpc_security_group_ids DbProxy#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#vpc_subnet_ids DbProxy#vpc_subnet_ids}
    */
    readonly vpcSubnetIds: string[];
    /**
    * auth block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#auth DbProxy#auth}
    */
    readonly auth: DbProxyAuth[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#timeouts DbProxy#timeouts}
    */
    readonly timeouts?: DbProxyTimeouts;
}
export interface DbProxyAuth {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#auth_scheme DbProxy#auth_scheme}
    */
    readonly authScheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#client_password_auth_type DbProxy#client_password_auth_type}
    */
    readonly clientPasswordAuthType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#description DbProxy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#iam_auth DbProxy#iam_auth}
    */
    readonly iamAuth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#secret_arn DbProxy#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#username DbProxy#username}
    */
    readonly username?: string;
}
export declare function dbProxyAuthToTerraform(struct?: DbProxyAuth | cdktf.IResolvable): any;
export declare function dbProxyAuthToHclTerraform(struct?: DbProxyAuth | cdktf.IResolvable): any;
export declare class DbProxyAuthOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DbProxyAuth | cdktf.IResolvable | undefined;
    set internalValue(value: DbProxyAuth | cdktf.IResolvable | undefined);
    private _authScheme?;
    get authScheme(): string;
    set authScheme(value: string);
    resetAuthScheme(): void;
    get authSchemeInput(): string | undefined;
    private _clientPasswordAuthType?;
    get clientPasswordAuthType(): string;
    set clientPasswordAuthType(value: string);
    resetClientPasswordAuthType(): void;
    get clientPasswordAuthTypeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _iamAuth?;
    get iamAuth(): string;
    set iamAuth(value: string);
    resetIamAuth(): void;
    get iamAuthInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
}
export declare class DbProxyAuthList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DbProxyAuth[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DbProxyAuthOutputReference;
}
export interface DbProxyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#create DbProxy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#delete DbProxy#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#update DbProxy#update}
    */
    readonly update?: string;
}
export declare function dbProxyTimeoutsToTerraform(struct?: DbProxyTimeouts | cdktf.IResolvable): any;
export declare function dbProxyTimeoutsToHclTerraform(struct?: DbProxyTimeouts | cdktf.IResolvable): any;
export declare class DbProxyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbProxyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbProxyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy aws_db_proxy}
*/
export declare class DbProxy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_proxy";
    /**
    * Generates CDKTF code for importing a DbProxy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbProxy to import
    * @param importFromId The id of the existing DbProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbProxy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_proxy aws_db_proxy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyConfig
    */
    constructor(scope: Construct, id: string, config: DbProxyConfig);
    get arn(): string;
    private _debugLogging?;
    get debugLogging(): boolean | cdktf.IResolvable;
    set debugLogging(value: boolean | cdktf.IResolvable);
    resetDebugLogging(): void;
    get debugLoggingInput(): boolean | cdktf.IResolvable | undefined;
    get endpoint(): string;
    private _engineFamily?;
    get engineFamily(): string;
    set engineFamily(value: string);
    get engineFamilyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _idleClientTimeout?;
    get idleClientTimeout(): number;
    set idleClientTimeout(value: number);
    resetIdleClientTimeout(): void;
    get idleClientTimeoutInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _requireTls?;
    get requireTls(): boolean | cdktf.IResolvable;
    set requireTls(value: boolean | cdktf.IResolvable);
    resetRequireTls(): void;
    get requireTlsInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    private _vpcSubnetIds?;
    get vpcSubnetIds(): string[];
    set vpcSubnetIds(value: string[]);
    get vpcSubnetIdsInput(): string[] | undefined;
    private _auth;
    get auth(): DbProxyAuthList;
    putAuth(value: DbProxyAuth[] | cdktf.IResolvable): void;
    get authInput(): cdktf.IResolvable | DbProxyAuth[] | undefined;
    private _timeouts;
    get timeouts(): DbProxyTimeoutsOutputReference;
    putTimeouts(value: DbProxyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbProxyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
