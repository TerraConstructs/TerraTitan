/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimesdkvoiceVoiceProfileDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#description ChimesdkvoiceVoiceProfileDomain#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#name ChimesdkvoiceVoiceProfileDomain#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#tags ChimesdkvoiceVoiceProfileDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#tags_all ChimesdkvoiceVoiceProfileDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * server_side_encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#server_side_encryption_configuration ChimesdkvoiceVoiceProfileDomain#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#timeouts ChimesdkvoiceVoiceProfileDomain#timeouts}
    */
    readonly timeouts?: ChimesdkvoiceVoiceProfileDomainTimeouts;
}
export interface ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#kms_key_arn ChimesdkvoiceVoiceProfileDomain#kms_key_arn}
    */
    readonly kmsKeyArn: string;
}
export declare function chimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationToTerraform(struct?: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference | ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration): any;
export declare function chimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationToHclTerraform(struct?: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference | ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration): any;
export declare class ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration | undefined;
    set internalValue(value: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration | undefined);
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    get kmsKeyArnInput(): string | undefined;
}
export interface ChimesdkvoiceVoiceProfileDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#create ChimesdkvoiceVoiceProfileDomain#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#delete ChimesdkvoiceVoiceProfileDomain#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#update ChimesdkvoiceVoiceProfileDomain#update}
    */
    readonly update?: string;
}
export declare function chimesdkvoiceVoiceProfileDomainTimeoutsToTerraform(struct?: ChimesdkvoiceVoiceProfileDomainTimeouts | cdktf.IResolvable): any;
export declare function chimesdkvoiceVoiceProfileDomainTimeoutsToHclTerraform(struct?: ChimesdkvoiceVoiceProfileDomainTimeouts | cdktf.IResolvable): any;
export declare class ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkvoiceVoiceProfileDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ChimesdkvoiceVoiceProfileDomainTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain aws_chimesdkvoice_voice_profile_domain}
*/
export declare class ChimesdkvoiceVoiceProfileDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chimesdkvoice_voice_profile_domain";
    /**
    * Generates CDKTF code for importing a ChimesdkvoiceVoiceProfileDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimesdkvoiceVoiceProfileDomain to import
    * @param importFromId The id of the existing ChimesdkvoiceVoiceProfileDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimesdkvoiceVoiceProfileDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_voice_profile_domain aws_chimesdkvoice_voice_profile_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimesdkvoiceVoiceProfileDomainConfig
    */
    constructor(scope: Construct, id: string, config: ChimesdkvoiceVoiceProfileDomainConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
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
    private _serverSideEncryptionConfiguration;
    get serverSideEncryptionConfiguration(): ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfigurationOutputReference;
    putServerSideEncryptionConfiguration(value: ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration): void;
    get serverSideEncryptionConfigurationInput(): ChimesdkvoiceVoiceProfileDomainServerSideEncryptionConfiguration | undefined;
    private _timeouts;
    get timeouts(): ChimesdkvoiceVoiceProfileDomainTimeoutsOutputReference;
    putTimeouts(value: ChimesdkvoiceVoiceProfileDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ChimesdkvoiceVoiceProfileDomainTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
