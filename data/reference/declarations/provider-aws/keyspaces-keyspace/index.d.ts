/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KeyspacesKeyspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#id KeyspacesKeyspace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#name KeyspacesKeyspace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#tags KeyspacesKeyspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#tags_all KeyspacesKeyspace#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * replication_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#replication_specification KeyspacesKeyspace#replication_specification}
    */
    readonly replicationSpecification?: KeyspacesKeyspaceReplicationSpecification;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#timeouts KeyspacesKeyspace#timeouts}
    */
    readonly timeouts?: KeyspacesKeyspaceTimeouts;
}
export interface KeyspacesKeyspaceReplicationSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#region_list KeyspacesKeyspace#region_list}
    */
    readonly regionList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#replication_strategy KeyspacesKeyspace#replication_strategy}
    */
    readonly replicationStrategy?: string;
}
export declare function keyspacesKeyspaceReplicationSpecificationToTerraform(struct?: KeyspacesKeyspaceReplicationSpecificationOutputReference | KeyspacesKeyspaceReplicationSpecification): any;
export declare function keyspacesKeyspaceReplicationSpecificationToHclTerraform(struct?: KeyspacesKeyspaceReplicationSpecificationOutputReference | KeyspacesKeyspaceReplicationSpecification): any;
export declare class KeyspacesKeyspaceReplicationSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesKeyspaceReplicationSpecification | undefined;
    set internalValue(value: KeyspacesKeyspaceReplicationSpecification | undefined);
    private _regionList?;
    get regionList(): string[];
    set regionList(value: string[]);
    resetRegionList(): void;
    get regionListInput(): string[] | undefined;
    private _replicationStrategy?;
    get replicationStrategy(): string;
    set replicationStrategy(value: string);
    resetReplicationStrategy(): void;
    get replicationStrategyInput(): string | undefined;
}
export interface KeyspacesKeyspaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#create KeyspacesKeyspace#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#delete KeyspacesKeyspace#delete}
    */
    readonly delete?: string;
}
export declare function keyspacesKeyspaceTimeoutsToTerraform(struct?: KeyspacesKeyspaceTimeouts | cdktf.IResolvable): any;
export declare function keyspacesKeyspaceTimeoutsToHclTerraform(struct?: KeyspacesKeyspaceTimeouts | cdktf.IResolvable): any;
export declare class KeyspacesKeyspaceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KeyspacesKeyspaceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KeyspacesKeyspaceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace aws_keyspaces_keyspace}
*/
export declare class KeyspacesKeyspace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_keyspaces_keyspace";
    /**
    * Generates CDKTF code for importing a KeyspacesKeyspace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KeyspacesKeyspace to import
    * @param importFromId The id of the existing KeyspacesKeyspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KeyspacesKeyspace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/keyspaces_keyspace aws_keyspaces_keyspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KeyspacesKeyspaceConfig
    */
    constructor(scope: Construct, id: string, config: KeyspacesKeyspaceConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _replicationSpecification;
    get replicationSpecification(): KeyspacesKeyspaceReplicationSpecificationOutputReference;
    putReplicationSpecification(value: KeyspacesKeyspaceReplicationSpecification): void;
    resetReplicationSpecification(): void;
    get replicationSpecificationInput(): KeyspacesKeyspaceReplicationSpecification | undefined;
    private _timeouts;
    get timeouts(): KeyspacesKeyspaceTimeoutsOutputReference;
    putTimeouts(value: KeyspacesKeyspaceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KeyspacesKeyspaceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
