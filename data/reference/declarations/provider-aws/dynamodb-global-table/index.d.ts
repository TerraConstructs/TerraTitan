/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#id DynamodbGlobalTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#name DynamodbGlobalTable#name}
    */
    readonly name: string;
    /**
    * replica block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#replica DynamodbGlobalTable#replica}
    */
    readonly replica: DynamodbGlobalTableReplica[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#timeouts DynamodbGlobalTable#timeouts}
    */
    readonly timeouts?: DynamodbGlobalTableTimeouts;
}
export interface DynamodbGlobalTableReplica {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#region_name DynamodbGlobalTable#region_name}
    */
    readonly regionName: string;
}
export declare function dynamodbGlobalTableReplicaToTerraform(struct?: DynamodbGlobalTableReplica | cdktf.IResolvable): any;
export declare function dynamodbGlobalTableReplicaToHclTerraform(struct?: DynamodbGlobalTableReplica | cdktf.IResolvable): any;
export declare class DynamodbGlobalTableReplicaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DynamodbGlobalTableReplica | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbGlobalTableReplica | cdktf.IResolvable | undefined);
    private _regionName?;
    get regionName(): string;
    set regionName(value: string);
    get regionNameInput(): string | undefined;
}
export declare class DynamodbGlobalTableReplicaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DynamodbGlobalTableReplica[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DynamodbGlobalTableReplicaOutputReference;
}
export interface DynamodbGlobalTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#create DynamodbGlobalTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#delete DynamodbGlobalTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#update DynamodbGlobalTable#update}
    */
    readonly update?: string;
}
export declare function dynamodbGlobalTableTimeoutsToTerraform(struct?: DynamodbGlobalTableTimeouts | cdktf.IResolvable): any;
export declare function dynamodbGlobalTableTimeoutsToHclTerraform(struct?: DynamodbGlobalTableTimeouts | cdktf.IResolvable): any;
export declare class DynamodbGlobalTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DynamodbGlobalTableTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DynamodbGlobalTableTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table aws_dynamodb_global_table}
*/
export declare class DynamodbGlobalTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_global_table";
    /**
    * Generates CDKTF code for importing a DynamodbGlobalTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbGlobalTable to import
    * @param importFromId The id of the existing DynamodbGlobalTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbGlobalTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/dynamodb_global_table aws_dynamodb_global_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbGlobalTableConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig);
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
    private _replica;
    get replica(): DynamodbGlobalTableReplicaList;
    putReplica(value: DynamodbGlobalTableReplica[] | cdktf.IResolvable): void;
    get replicaInput(): cdktf.IResolvable | DynamodbGlobalTableReplica[] | undefined;
    private _timeouts;
    get timeouts(): DynamodbGlobalTableTimeoutsOutputReference;
    putTimeouts(value: DynamodbGlobalTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DynamodbGlobalTableTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
