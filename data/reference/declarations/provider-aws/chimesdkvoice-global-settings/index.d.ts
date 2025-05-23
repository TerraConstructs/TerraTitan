/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChimesdkvoiceGlobalSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * voice_connector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_global_settings#voice_connector ChimesdkvoiceGlobalSettings#voice_connector}
    */
    readonly voiceConnector: ChimesdkvoiceGlobalSettingsVoiceConnector;
}
export interface ChimesdkvoiceGlobalSettingsVoiceConnector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}
    */
    readonly cdrBucket?: string;
}
export declare function chimesdkvoiceGlobalSettingsVoiceConnectorToTerraform(struct?: ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference | ChimesdkvoiceGlobalSettingsVoiceConnector): any;
export declare function chimesdkvoiceGlobalSettingsVoiceConnectorToHclTerraform(struct?: ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference | ChimesdkvoiceGlobalSettingsVoiceConnector): any;
export declare class ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChimesdkvoiceGlobalSettingsVoiceConnector | undefined;
    set internalValue(value: ChimesdkvoiceGlobalSettingsVoiceConnector | undefined);
    private _cdrBucket?;
    get cdrBucket(): string;
    set cdrBucket(value: string);
    resetCdrBucket(): void;
    get cdrBucketInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_global_settings aws_chimesdkvoice_global_settings}
*/
export declare class ChimesdkvoiceGlobalSettings extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chimesdkvoice_global_settings";
    /**
    * Generates CDKTF code for importing a ChimesdkvoiceGlobalSettings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChimesdkvoiceGlobalSettings to import
    * @param importFromId The id of the existing ChimesdkvoiceGlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_global_settings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChimesdkvoiceGlobalSettings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/chimesdkvoice_global_settings aws_chimesdkvoice_global_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChimesdkvoiceGlobalSettingsConfig
    */
    constructor(scope: Construct, id: string, config: ChimesdkvoiceGlobalSettingsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _voiceConnector;
    get voiceConnector(): ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference;
    putVoiceConnector(value: ChimesdkvoiceGlobalSettingsVoiceConnector): void;
    get voiceConnectorInput(): ChimesdkvoiceGlobalSettingsVoiceConnector | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
