/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IamServiceSpecificCredentialConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_specific_credential#id IamServiceSpecificCredential#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_specific_credential#service_name IamServiceSpecificCredential#service_name}
    */
    readonly serviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_specific_credential#status IamServiceSpecificCredential#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_specific_credential#user_name IamServiceSpecificCredential#user_name}
    */
    readonly userName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_specific_credential aws_iam_service_specific_credential}
*/
export declare class IamServiceSpecificCredential extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iam_service_specific_credential";
    /**
    * Generates CDKTF code for importing a IamServiceSpecificCredential resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IamServiceSpecificCredential to import
    * @param importFromId The id of the existing IamServiceSpecificCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_specific_credential#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IamServiceSpecificCredential to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iam_service_specific_credential aws_iam_service_specific_credential} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IamServiceSpecificCredentialConfig
    */
    constructor(scope: Construct, id: string, config: IamServiceSpecificCredentialConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _serviceName?;
    get serviceName(): string;
    set serviceName(value: string);
    get serviceNameInput(): string | undefined;
    get servicePassword(): string;
    get serviceSpecificCredentialId(): string;
    get serviceUserName(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
