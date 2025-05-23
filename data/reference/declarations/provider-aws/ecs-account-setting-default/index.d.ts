/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcsAccountSettingDefaultConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_account_setting_default#id EcsAccountSettingDefault#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_account_setting_default#name EcsAccountSettingDefault#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_account_setting_default#value EcsAccountSettingDefault#value}
    */
    readonly value: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_account_setting_default aws_ecs_account_setting_default}
*/
export declare class EcsAccountSettingDefault extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecs_account_setting_default";
    /**
    * Generates CDKTF code for importing a EcsAccountSettingDefault resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcsAccountSettingDefault to import
    * @param importFromId The id of the existing EcsAccountSettingDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_account_setting_default#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcsAccountSettingDefault to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ecs_account_setting_default aws_ecs_account_setting_default} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsAccountSettingDefaultConfig
    */
    constructor(scope: Construct, id: string, config: EcsAccountSettingDefaultConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get principalArn(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
