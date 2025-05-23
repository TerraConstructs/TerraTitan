/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GameliftAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#description GameliftAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#id GameliftAlias#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#name GameliftAlias#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#tags GameliftAlias#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#tags_all GameliftAlias#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * routing_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#routing_strategy GameliftAlias#routing_strategy}
    */
    readonly routingStrategy: GameliftAliasRoutingStrategy;
}
export interface GameliftAliasRoutingStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#fleet_id GameliftAlias#fleet_id}
    */
    readonly fleetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#message GameliftAlias#message}
    */
    readonly message?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#type GameliftAlias#type}
    */
    readonly type: string;
}
export declare function gameliftAliasRoutingStrategyToTerraform(struct?: GameliftAliasRoutingStrategyOutputReference | GameliftAliasRoutingStrategy): any;
export declare function gameliftAliasRoutingStrategyToHclTerraform(struct?: GameliftAliasRoutingStrategyOutputReference | GameliftAliasRoutingStrategy): any;
export declare class GameliftAliasRoutingStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GameliftAliasRoutingStrategy | undefined;
    set internalValue(value: GameliftAliasRoutingStrategy | undefined);
    private _fleetId?;
    get fleetId(): string;
    set fleetId(value: string);
    resetFleetId(): void;
    get fleetIdInput(): string | undefined;
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias aws_gamelift_alias}
*/
export declare class GameliftAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_gamelift_alias";
    /**
    * Generates CDKTF code for importing a GameliftAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GameliftAlias to import
    * @param importFromId The id of the existing GameliftAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GameliftAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/gamelift_alias aws_gamelift_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftAliasConfig
    */
    constructor(scope: Construct, id: string, config: GameliftAliasConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    private _routingStrategy;
    get routingStrategy(): GameliftAliasRoutingStrategyOutputReference;
    putRoutingStrategy(value: GameliftAliasRoutingStrategy): void;
    get routingStrategyInput(): GameliftAliasRoutingStrategy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
