/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlueDataCatalogEncryptionSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#catalog_id GlueDataCatalogEncryptionSettings#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#id GlueDataCatalogEncryptionSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * data_catalog_encryption_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#data_catalog_encryption_settings GlueDataCatalogEncryptionSettings#data_catalog_encryption_settings}
    */
    readonly dataCatalogEncryptionSettings: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#aws_kms_key_id GlueDataCatalogEncryptionSettings#aws_kms_key_id}
    */
    readonly awsKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#return_connection_password_encrypted GlueDataCatalogEncryptionSettings#return_connection_password_encrypted}
    */
    readonly returnConnectionPasswordEncrypted: boolean | cdktf.IResolvable;
}
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any;
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionToHclTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): any;
export declare class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption | undefined;
    set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption | undefined);
    private _awsKmsKeyId?;
    get awsKmsKeyId(): string;
    set awsKmsKeyId(value: string);
    resetAwsKmsKeyId(): void;
    get awsKmsKeyIdInput(): string | undefined;
    private _returnConnectionPasswordEncrypted?;
    get returnConnectionPasswordEncrypted(): boolean | cdktf.IResolvable;
    set returnConnectionPasswordEncrypted(value: boolean | cdktf.IResolvable);
    get returnConnectionPasswordEncryptedInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_mode GlueDataCatalogEncryptionSettings#catalog_encryption_mode}
    */
    readonly catalogEncryptionMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#catalog_encryption_service_role GlueDataCatalogEncryptionSettings#catalog_encryption_service_role}
    */
    readonly catalogEncryptionServiceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#sse_aws_kms_key_id GlueDataCatalogEncryptionSettings#sse_aws_kms_key_id}
    */
    readonly sseAwsKmsKeyId?: string;
}
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any;
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestToHclTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): any;
export declare class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest | undefined;
    set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest | undefined);
    private _catalogEncryptionMode?;
    get catalogEncryptionMode(): string;
    set catalogEncryptionMode(value: string);
    get catalogEncryptionModeInput(): string | undefined;
    private _catalogEncryptionServiceRole?;
    get catalogEncryptionServiceRole(): string;
    set catalogEncryptionServiceRole(value: string);
    resetCatalogEncryptionServiceRole(): void;
    get catalogEncryptionServiceRoleInput(): string | undefined;
    private _sseAwsKmsKeyId?;
    get sseAwsKmsKeyId(): string;
    set sseAwsKmsKeyId(value: string);
    resetSseAwsKmsKeyId(): void;
    get sseAwsKmsKeyIdInput(): string | undefined;
}
export interface GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings {
    /**
    * connection_password_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#connection_password_encryption GlueDataCatalogEncryptionSettings#connection_password_encryption}
    */
    readonly connectionPasswordEncryption: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption;
    /**
    * encryption_at_rest block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#encryption_at_rest GlueDataCatalogEncryptionSettings#encryption_at_rest}
    */
    readonly encryptionAtRest: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest;
}
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any;
export declare function glueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsToHclTerraform(struct?: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference | GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): any;
export declare class GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings | undefined;
    set internalValue(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings | undefined);
    private _connectionPasswordEncryption;
    get connectionPasswordEncryption(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryptionOutputReference;
    putConnectionPasswordEncryption(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption): void;
    get connectionPasswordEncryptionInput(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsConnectionPasswordEncryption | undefined;
    private _encryptionAtRest;
    get encryptionAtRest(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRestOutputReference;
    putEncryptionAtRest(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest): void;
    get encryptionAtRestInput(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsEncryptionAtRest | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings}
*/
export declare class GlueDataCatalogEncryptionSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_glue_data_catalog_encryption_settings";
    /**
    * Generates CDKTF code for importing a GlueDataCatalogEncryptionSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GlueDataCatalogEncryptionSettings to import
    * @param importFromId The id of the existing GlueDataCatalogEncryptionSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GlueDataCatalogEncryptionSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/glue_data_catalog_encryption_settings aws_glue_data_catalog_encryption_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueDataCatalogEncryptionSettingsConfig
    */
    constructor(scope: Construct, id: string, config: GlueDataCatalogEncryptionSettingsConfig);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _dataCatalogEncryptionSettings;
    get dataCatalogEncryptionSettings(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettingsOutputReference;
    putDataCatalogEncryptionSettings(value: GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings): void;
    get dataCatalogEncryptionSettingsInput(): GlueDataCatalogEncryptionSettingsDataCatalogEncryptionSettings | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
