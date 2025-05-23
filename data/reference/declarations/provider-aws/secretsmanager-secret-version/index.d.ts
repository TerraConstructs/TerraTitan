/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#id SecretsmanagerSecretVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#secret_binary SecretsmanagerSecretVersion#secret_binary}
    */
    readonly secretBinary?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#secret_id SecretsmanagerSecretVersion#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#secret_string SecretsmanagerSecretVersion#secret_string}
    */
    readonly secretString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#secret_string_wo SecretsmanagerSecretVersion#secret_string_wo}
    */
    readonly secretStringWo?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#secret_string_wo_version SecretsmanagerSecretVersion#secret_string_wo_version}
    */
    readonly secretStringWoVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#version_stages SecretsmanagerSecretVersion#version_stages}
    */
    readonly versionStages?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version aws_secretsmanager_secret_version}
*/
export declare class SecretsmanagerSecretVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_secretsmanager_secret_version";
    /**
    * Generates CDKTF code for importing a SecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecretsmanagerSecretVersion to import
    * @param importFromId The id of the existing SecretsmanagerSecretVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecretsmanagerSecretVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/secretsmanager_secret_version aws_secretsmanager_secret_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretVersionConfig
    */
    constructor(scope: Construct, id: string, config: SecretsmanagerSecretVersionConfig);
    get arn(): string;
    get hasSecretStringWo(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _secretBinary?;
    get secretBinary(): string;
    set secretBinary(value: string);
    resetSecretBinary(): void;
    get secretBinaryInput(): string | undefined;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string | undefined;
    private _secretString?;
    get secretString(): string;
    set secretString(value: string);
    resetSecretString(): void;
    get secretStringInput(): string | undefined;
    private _secretStringWo?;
    get secretStringWo(): string;
    set secretStringWo(value: string);
    resetSecretStringWo(): void;
    get secretStringWoInput(): string | undefined;
    private _secretStringWoVersion?;
    get secretStringWoVersion(): number;
    set secretStringWoVersion(value: number);
    resetSecretStringWoVersion(): void;
    get secretStringWoVersionInput(): number | undefined;
    get versionId(): string;
    private _versionStages?;
    get versionStages(): string[];
    set versionStages(value: string[]);
    resetVersionStages(): void;
    get versionStagesInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
