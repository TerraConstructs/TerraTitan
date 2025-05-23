/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EmrStudioSessionMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping#id EmrStudioSessionMapping#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping#identity_id EmrStudioSessionMapping#identity_id}
    */
    readonly identityId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping#identity_name EmrStudioSessionMapping#identity_name}
    */
    readonly identityName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping#identity_type EmrStudioSessionMapping#identity_type}
    */
    readonly identityType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping#session_policy_arn EmrStudioSessionMapping#session_policy_arn}
    */
    readonly sessionPolicyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping#studio_id EmrStudioSessionMapping#studio_id}
    */
    readonly studioId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping aws_emr_studio_session_mapping}
*/
export declare class EmrStudioSessionMapping extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_emr_studio_session_mapping";
    /**
    * Generates CDKTF code for importing a EmrStudioSessionMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EmrStudioSessionMapping to import
    * @param importFromId The id of the existing EmrStudioSessionMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EmrStudioSessionMapping to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/emr_studio_session_mapping aws_emr_studio_session_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrStudioSessionMappingConfig
    */
    constructor(scope: Construct, id: string, config: EmrStudioSessionMappingConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identityId?;
    get identityId(): string;
    set identityId(value: string);
    resetIdentityId(): void;
    get identityIdInput(): string | undefined;
    private _identityName?;
    get identityName(): string;
    set identityName(value: string);
    resetIdentityName(): void;
    get identityNameInput(): string | undefined;
    private _identityType?;
    get identityType(): string;
    set identityType(value: string);
    get identityTypeInput(): string | undefined;
    private _sessionPolicyArn?;
    get sessionPolicyArn(): string;
    set sessionPolicyArn(value: string);
    get sessionPolicyArnInput(): string | undefined;
    private _studioId?;
    get studioId(): string;
    set studioId(value: string);
    get studioIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
