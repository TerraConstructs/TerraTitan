/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SyntheticsGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_group_association#canary_arn SyntheticsGroupAssociation#canary_arn}
    */
    readonly canaryArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_group_association#group_name SyntheticsGroupAssociation#group_name}
    */
    readonly groupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_group_association#id SyntheticsGroupAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_group_association aws_synthetics_group_association}
*/
export declare class SyntheticsGroupAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_synthetics_group_association";
    /**
    * Generates CDKTF code for importing a SyntheticsGroupAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SyntheticsGroupAssociation to import
    * @param importFromId The id of the existing SyntheticsGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_group_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SyntheticsGroupAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/synthetics_group_association aws_synthetics_group_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SyntheticsGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: SyntheticsGroupAssociationConfig);
    private _canaryArn?;
    get canaryArn(): string;
    set canaryArn(value: string);
    get canaryArnInput(): string | undefined;
    get groupArn(): string;
    get groupId(): string;
    private _groupName?;
    get groupName(): string;
    set groupName(value: string);
    get groupNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
