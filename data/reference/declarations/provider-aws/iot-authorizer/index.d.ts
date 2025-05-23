/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotAuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}
    */
    readonly authorizerFunctionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}
    */
    readonly enableCachingForHttp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#id IotAuthorizer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#name IotAuthorizer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}
    */
    readonly signingDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#status IotAuthorizer#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}
    */
    readonly tokenKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}
    */
    readonly tokenSigningPublicKeys?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer aws_iot_authorizer}
*/
export declare class IotAuthorizer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_authorizer";
    /**
    * Generates CDKTF code for importing a IotAuthorizer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotAuthorizer to import
    * @param importFromId The id of the existing IotAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotAuthorizer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_authorizer aws_iot_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotAuthorizerConfig
    */
    constructor(scope: Construct, id: string, config: IotAuthorizerConfig);
    get arn(): string;
    private _authorizerFunctionArn?;
    get authorizerFunctionArn(): string;
    set authorizerFunctionArn(value: string);
    get authorizerFunctionArnInput(): string | undefined;
    private _enableCachingForHttp?;
    get enableCachingForHttp(): boolean | cdktf.IResolvable;
    set enableCachingForHttp(value: boolean | cdktf.IResolvable);
    resetEnableCachingForHttp(): void;
    get enableCachingForHttpInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _signingDisabled?;
    get signingDisabled(): boolean | cdktf.IResolvable;
    set signingDisabled(value: boolean | cdktf.IResolvable);
    resetSigningDisabled(): void;
    get signingDisabledInput(): boolean | cdktf.IResolvable | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _tokenKeyName?;
    get tokenKeyName(): string;
    set tokenKeyName(value: string);
    resetTokenKeyName(): void;
    get tokenKeyNameInput(): string | undefined;
    private _tokenSigningPublicKeys?;
    get tokenSigningPublicKeys(): {
        [key: string]: string;
    };
    set tokenSigningPublicKeys(value: {
        [key: string]: string;
    });
    resetTokenSigningPublicKeys(): void;
    get tokenSigningPublicKeysInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
