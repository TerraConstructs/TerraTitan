/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmplifyWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_webhook#app_id AmplifyWebhook#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_webhook#branch_name AmplifyWebhook#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_webhook#description AmplifyWebhook#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_webhook#id AmplifyWebhook#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_webhook aws_amplify_webhook}
*/
export declare class AmplifyWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_amplify_webhook";
    /**
    * Generates CDKTF code for importing a AmplifyWebhook resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmplifyWebhook to import
    * @param importFromId The id of the existing AmplifyWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_webhook#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmplifyWebhook to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/amplify_webhook aws_amplify_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyWebhookConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyWebhookConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string | undefined;
    get arn(): string;
    private _branchName?;
    get branchName(): string;
    set branchName(value: string);
    get branchNameInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
