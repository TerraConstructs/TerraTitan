/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectBotAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association#id DataAwsConnectBotAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association#instance_id DataAwsConnectBotAssociation#instance_id}
    */
    readonly instanceId: string;
    /**
    * lex_bot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association#lex_bot DataAwsConnectBotAssociation#lex_bot}
    */
    readonly lexBot: DataAwsConnectBotAssociationLexBot;
}
export interface DataAwsConnectBotAssociationLexBot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association#lex_region DataAwsConnectBotAssociation#lex_region}
    */
    readonly lexRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association#name DataAwsConnectBotAssociation#name}
    */
    readonly name: string;
}
export declare function dataAwsConnectBotAssociationLexBotToTerraform(struct?: DataAwsConnectBotAssociationLexBotOutputReference | DataAwsConnectBotAssociationLexBot): any;
export declare function dataAwsConnectBotAssociationLexBotToHclTerraform(struct?: DataAwsConnectBotAssociationLexBotOutputReference | DataAwsConnectBotAssociationLexBot): any;
export declare class DataAwsConnectBotAssociationLexBotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsConnectBotAssociationLexBot | undefined;
    set internalValue(value: DataAwsConnectBotAssociationLexBot | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association aws_connect_bot_association}
*/
export declare class DataAwsConnectBotAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_bot_association";
    /**
    * Generates CDKTF code for importing a DataAwsConnectBotAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectBotAssociation to import
    * @param importFromId The id of the existing DataAwsConnectBotAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectBotAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_bot_association aws_connect_bot_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectBotAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectBotAssociationConfig);
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
    get lexBot(): DataAwsConnectBotAssociationLexBotOutputReference;
    putLexBot(value: DataAwsConnectBotAssociationLexBot): void;
    get lexBotInput(): DataAwsConnectBotAssociationLexBot | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
