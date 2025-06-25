/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecretsmanagerSecretVersionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/secretsmanager_secret_versions#include_deprecated DataAwsSecretsmanagerSecretVersions#include_deprecated}
    */
    readonly includeDeprecated?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/secretsmanager_secret_versions#secret_id DataAwsSecretsmanagerSecretVersions#secret_id}
    */
    readonly secretId: string;
}
export interface DataAwsSecretsmanagerSecretVersionsVersions {
}
export declare function dataAwsSecretsmanagerSecretVersionsVersionsToTerraform(struct?: DataAwsSecretsmanagerSecretVersionsVersions): any;
export declare function dataAwsSecretsmanagerSecretVersionsVersionsToHclTerraform(struct?: DataAwsSecretsmanagerSecretVersionsVersions): any;
export declare class DataAwsSecretsmanagerSecretVersionsVersionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSecretsmanagerSecretVersionsVersions | undefined;
    set internalValue(value: DataAwsSecretsmanagerSecretVersionsVersions | undefined);
    get createdTime(): string;
    get lastAccessedDate(): string;
    get versionId(): string;
    get versionStages(): string[];
}
export declare class DataAwsSecretsmanagerSecretVersionsVersionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSecretsmanagerSecretVersionsVersionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/secretsmanager_secret_versions aws_secretsmanager_secret_versions}
*/
export declare class DataAwsSecretsmanagerSecretVersions extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_secretsmanager_secret_versions";
    /**
    * Generates CDKTF code for importing a DataAwsSecretsmanagerSecretVersions resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSecretsmanagerSecretVersions to import
    * @param importFromId The id of the existing DataAwsSecretsmanagerSecretVersions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/secretsmanager_secret_versions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSecretsmanagerSecretVersions to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/secretsmanager_secret_versions aws_secretsmanager_secret_versions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretVersionsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionsConfig);
    get arn(): string;
    private _includeDeprecated?;
    get includeDeprecated(): boolean | cdktf.IResolvable;
    set includeDeprecated(value: boolean | cdktf.IResolvable);
    resetIncludeDeprecated(): void;
    get includeDeprecatedInput(): boolean | cdktf.IResolvable | undefined;
    get name(): string;
    private _secretId?;
    get secretId(): string;
    set secretId(value: string);
    get secretIdInput(): string | undefined;
    private _versions;
    get versions(): DataAwsSecretsmanagerSecretVersionsVersionsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
