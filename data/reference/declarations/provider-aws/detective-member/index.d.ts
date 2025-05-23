/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DetectiveMemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member#account_id DetectiveMember#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member#disable_email_notification DetectiveMember#disable_email_notification}
    */
    readonly disableEmailNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member#email_address DetectiveMember#email_address}
    */
    readonly emailAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member#graph_arn DetectiveMember#graph_arn}
    */
    readonly graphArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member#id DetectiveMember#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member#message DetectiveMember#message}
    */
    readonly message?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member aws_detective_member}
*/
export declare class DetectiveMember extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_detective_member";
    /**
    * Generates CDKTF code for importing a DetectiveMember resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DetectiveMember to import
    * @param importFromId The id of the existing DetectiveMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DetectiveMember to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/detective_member aws_detective_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DetectiveMemberConfig
    */
    constructor(scope: Construct, id: string, config: DetectiveMemberConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    get administratorId(): string;
    private _disableEmailNotification?;
    get disableEmailNotification(): boolean | cdktf.IResolvable;
    set disableEmailNotification(value: boolean | cdktf.IResolvable);
    resetDisableEmailNotification(): void;
    get disableEmailNotificationInput(): boolean | cdktf.IResolvable | undefined;
    get disabledReason(): string;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    get emailAddressInput(): string | undefined;
    private _graphArn?;
    get graphArn(): string;
    set graphArn(value: string);
    get graphArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invitedTime(): string;
    private _message?;
    get message(): string;
    set message(value: string);
    resetMessage(): void;
    get messageInput(): string | undefined;
    get status(): string;
    get updatedTime(): string;
    get volumeUsageInBytes(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
