/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Pinpointsmsvoicev2ConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_message_type Pinpointsmsvoicev2ConfigurationSet#default_message_type}
    */
    readonly defaultMessageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_configuration_set#default_sender_id Pinpointsmsvoicev2ConfigurationSet#default_sender_id}
    */
    readonly defaultSenderId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_configuration_set#name Pinpointsmsvoicev2ConfigurationSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_configuration_set#tags Pinpointsmsvoicev2ConfigurationSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_configuration_set aws_pinpointsmsvoicev2_configuration_set}
*/
export declare class Pinpointsmsvoicev2ConfigurationSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pinpointsmsvoicev2_configuration_set";
    /**
    * Generates CDKTF code for importing a Pinpointsmsvoicev2ConfigurationSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Pinpointsmsvoicev2ConfigurationSet to import
    * @param importFromId The id of the existing Pinpointsmsvoicev2ConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_configuration_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Pinpointsmsvoicev2ConfigurationSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/pinpointsmsvoicev2_configuration_set aws_pinpointsmsvoicev2_configuration_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Pinpointsmsvoicev2ConfigurationSetConfig
    */
    constructor(scope: Construct, id: string, config: Pinpointsmsvoicev2ConfigurationSetConfig);
    get arn(): string;
    private _defaultMessageType?;
    get defaultMessageType(): string;
    set defaultMessageType(value: string);
    resetDefaultMessageType(): void;
    get defaultMessageTypeInput(): string | undefined;
    private _defaultSenderId?;
    get defaultSenderId(): string;
    set defaultSenderId(value: string);
    resetDefaultSenderId(): void;
    get defaultSenderIdInput(): string | undefined;
    get id(): string;
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
