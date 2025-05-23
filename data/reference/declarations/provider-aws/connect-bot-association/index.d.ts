/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectBotAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association#id ConnectBotAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association#instance_id ConnectBotAssociation#instance_id}
    */
    readonly instanceId: string;
    /**
    * lex_bot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association#lex_bot ConnectBotAssociation#lex_bot}
    */
    readonly lexBot: ConnectBotAssociationLexBot;
}
export interface ConnectBotAssociationLexBot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association#lex_region ConnectBotAssociation#lex_region}
    */
    readonly lexRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association#name ConnectBotAssociation#name}
    */
    readonly name: string;
}
export declare function connectBotAssociationLexBotToTerraform(struct?: ConnectBotAssociationLexBotOutputReference | ConnectBotAssociationLexBot): any;
export declare function connectBotAssociationLexBotToHclTerraform(struct?: ConnectBotAssociationLexBotOutputReference | ConnectBotAssociationLexBot): any;
export declare class ConnectBotAssociationLexBotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectBotAssociationLexBot | undefined;
    set internalValue(value: ConnectBotAssociationLexBot | undefined);
    private _lexRegion?;
    get lexRegion(): string;
    set lexRegion(value: string);
    resetLexRegion(): void;
    get lexRegionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association aws_connect_bot_association}
*/
export declare class ConnectBotAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_bot_association";
    /**
    * Generates CDKTF code for importing a ConnectBotAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectBotAssociation to import
    * @param importFromId The id of the existing ConnectBotAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectBotAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_bot_association aws_connect_bot_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectBotAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ConnectBotAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _lexBot;
    get lexBot(): ConnectBotAssociationLexBotOutputReference;
    putLexBot(value: ConnectBotAssociationLexBot): void;
    get lexBotInput(): ConnectBotAssociationLexBot | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
