/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotThingPrincipalAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_principal_attachment#id IotThingPrincipalAttachment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_principal_attachment#principal IotThingPrincipalAttachment#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_principal_attachment#thing IotThingPrincipalAttachment#thing}
    */
    readonly thing: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_principal_attachment aws_iot_thing_principal_attachment}
*/
export declare class IotThingPrincipalAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_thing_principal_attachment";
    /**
    * Generates CDKTF code for importing a IotThingPrincipalAttachment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotThingPrincipalAttachment to import
    * @param importFromId The id of the existing IotThingPrincipalAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_principal_attachment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotThingPrincipalAttachment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_thing_principal_attachment aws_iot_thing_principal_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingPrincipalAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: IotThingPrincipalAttachmentConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string | undefined;
    private _thing?;
    get thing(): string;
    set thing(value: string);
    get thingInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
