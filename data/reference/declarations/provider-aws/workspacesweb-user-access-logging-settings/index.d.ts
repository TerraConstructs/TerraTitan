/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface WorkspaceswebUserAccessLoggingSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}
    */
    readonly kinesisStreamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_access_logging_settings aws_workspacesweb_user_access_logging_settings}
*/
export declare class WorkspaceswebUserAccessLoggingSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_workspacesweb_user_access_logging_settings";
    /**
    * Generates CDKTF code for importing a WorkspaceswebUserAccessLoggingSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the WorkspaceswebUserAccessLoggingSettings to import
    * @param importFromId The id of the existing WorkspaceswebUserAccessLoggingSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_access_logging_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the WorkspaceswebUserAccessLoggingSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/workspacesweb_user_access_logging_settings aws_workspacesweb_user_access_logging_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspaceswebUserAccessLoggingSettingsConfig
    */
    constructor(scope: Construct, id: string, config: WorkspaceswebUserAccessLoggingSettingsConfig);
    get associatedPortalArns(): string[];
    private _kinesisStreamArn?;
    get kinesisStreamArn(): string;
    set kinesisStreamArn(value: string);
    get kinesisStreamArnInput(): string | undefined;
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
    get userAccessLoggingSettingsArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
