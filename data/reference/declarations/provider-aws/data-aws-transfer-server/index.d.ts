/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsTransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/transfer_server#id DataAwsTransferServer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/transfer_server#server_id DataAwsTransferServer#server_id}
    */
    readonly serverId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/transfer_server#tags DataAwsTransferServer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/transfer_server aws_transfer_server}
*/
export declare class DataAwsTransferServer extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_transfer_server";
    /**
    * Generates CDKTF code for importing a DataAwsTransferServer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsTransferServer to import
    * @param importFromId The id of the existing DataAwsTransferServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/transfer_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsTransferServer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/transfer_server aws_transfer_server} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsTransferServerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsTransferServerConfig);
    get arn(): string;
    get certificate(): string;
    get domain(): string;
    get endpoint(): string;
    get endpointType(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get identityProviderType(): string;
    get invocationRole(): string;
    get loggingRole(): string;
    get protocols(): string[];
    get securityPolicyName(): string;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string | undefined;
    get structuredLogDestinations(): string[];
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
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
