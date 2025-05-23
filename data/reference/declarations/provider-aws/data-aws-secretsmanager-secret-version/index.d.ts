/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_secret_version#id DataAwsSecretsmanagerSecretVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_secret_version#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_secret_version#version_id DataAwsSecretsmanagerSecretVersion#version_id}
    */
    readonly versionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_secret_version#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}
    */
    readonly versionStage?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_secret_version aws_secretsmanager_secret_version}
*/
export declare class DataAwsSecretsmanagerSecretVersion extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_secretsmanager_secret_version";
    /**
    * Generates CDKTF code for importing a DataAwsSecretsmanagerSecretVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSecretsmanagerSecretVersion to import
    * @param importFromId The id of the existing DataAwsSecretsmanagerSecretVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_secret_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSecretsmanagerSecretVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/secretsmanager_secret_version aws_secretsmanager_secret_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretVersionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionConfig);
    get arn(): string;
    get createdDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get secretBinary(): string;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string | undefined;
    get secretString(): string;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    private _versionStage?;
    get versionStage(): string;
    set versionStage(value: string);
    resetVersionStage(): void;
    get versionStageInput(): string | undefined;
    get versionStages(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
