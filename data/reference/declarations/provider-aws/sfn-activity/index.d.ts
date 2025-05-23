/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SfnActivityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#id SfnActivity#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#name SfnActivity#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#tags SfnActivity#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#tags_all SfnActivity#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#encryption_configuration SfnActivity#encryption_configuration}
    */
    readonly encryptionConfiguration?: SfnActivityEncryptionConfiguration;
}
export interface SfnActivityEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#kms_data_key_reuse_period_seconds SfnActivity#kms_data_key_reuse_period_seconds}
    */
    readonly kmsDataKeyReusePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#kms_key_id SfnActivity#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#type SfnActivity#type}
    */
    readonly type?: string;
}
export declare function sfnActivityEncryptionConfigurationToTerraform(struct?: SfnActivityEncryptionConfigurationOutputReference | SfnActivityEncryptionConfiguration): any;
export declare function sfnActivityEncryptionConfigurationToHclTerraform(struct?: SfnActivityEncryptionConfigurationOutputReference | SfnActivityEncryptionConfiguration): any;
export declare class SfnActivityEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SfnActivityEncryptionConfiguration | undefined;
    set internalValue(value: SfnActivityEncryptionConfiguration | undefined);
    private _kmsDataKeyReusePeriodSeconds?;
    get kmsDataKeyReusePeriodSeconds(): number;
    set kmsDataKeyReusePeriodSeconds(value: number);
    resetKmsDataKeyReusePeriodSeconds(): void;
    get kmsDataKeyReusePeriodSecondsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity aws_sfn_activity}
*/
export declare class SfnActivity extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sfn_activity";
    /**
    * Generates CDKTF code for importing a SfnActivity resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SfnActivity to import
    * @param importFromId The id of the existing SfnActivity that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SfnActivity to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sfn_activity aws_sfn_activity} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SfnActivityConfig
    */
    constructor(scope: Construct, id: string, config: SfnActivityConfig);
    get creationDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _encryptionConfiguration;
    get encryptionConfiguration(): SfnActivityEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: SfnActivityEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): SfnActivityEncryptionConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
