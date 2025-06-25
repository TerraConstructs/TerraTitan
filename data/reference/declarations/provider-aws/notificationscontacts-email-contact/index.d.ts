/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NotificationscontactsEmailContactConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notificationscontacts_email_contact#email_address NotificationscontactsEmailContact#email_address}
    */
    readonly emailAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notificationscontacts_email_contact#name NotificationscontactsEmailContact#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notificationscontacts_email_contact#tags NotificationscontactsEmailContact#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notificationscontacts_email_contact aws_notificationscontacts_email_contact}
*/
export declare class NotificationscontactsEmailContact extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_notificationscontacts_email_contact";
    /**
    * Generates CDKTF code for importing a NotificationscontactsEmailContact resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NotificationscontactsEmailContact to import
    * @param importFromId The id of the existing NotificationscontactsEmailContact that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notificationscontacts_email_contact#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NotificationscontactsEmailContact to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/notificationscontacts_email_contact aws_notificationscontacts_email_contact} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NotificationscontactsEmailContactConfig
    */
    constructor(scope: Construct, id: string, config: NotificationscontactsEmailContactConfig);
    get arn(): string;
    private _emailAddress?;
    get emailAddress(): string;
    set emailAddress(value: string);
    get emailAddressInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
