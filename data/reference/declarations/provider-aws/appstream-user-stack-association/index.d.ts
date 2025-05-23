/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppstreamUserStackAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association#authentication_type AppstreamUserStackAssociation#authentication_type}
    */
    readonly authenticationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association#id AppstreamUserStackAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association#send_email_notification AppstreamUserStackAssociation#send_email_notification}
    */
    readonly sendEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association#stack_name AppstreamUserStackAssociation#stack_name}
    */
    readonly stackName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association#user_name AppstreamUserStackAssociation#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association aws_appstream_user_stack_association}
*/
export declare class AppstreamUserStackAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appstream_user_stack_association";
    /**
    * Generates CDKTF code for importing a AppstreamUserStackAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppstreamUserStackAssociation to import
    * @param importFromId The id of the existing AppstreamUserStackAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppstreamUserStackAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appstream_user_stack_association aws_appstream_user_stack_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppstreamUserStackAssociationConfig
    */
    constructor(scope: Construct, id: string, config: AppstreamUserStackAssociationConfig);
    private _authenticationType?;
    get authenticationType(): string;
    set authenticationType(value: string);
    get authenticationTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _sendEmailNotification?;
    get sendEmailNotification(): boolean | cdktf.IResolvable;
    set sendEmailNotification(value: boolean | cdktf.IResolvable);
    resetSendEmailNotification(): void;
    get sendEmailNotificationInput(): boolean | cdktf.IResolvable | undefined;
    private _stackName?;
    get stackName(): string;
    set stackName(value: string);
    get stackNameInput(): string | undefined;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
