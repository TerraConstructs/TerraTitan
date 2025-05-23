/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedpermissionsPolicyStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_store#description VerifiedpermissionsPolicyStore#description}
    */
    readonly description?: string;
    /**
    * validation_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_store#validation_settings VerifiedpermissionsPolicyStore#validation_settings}
    */
    readonly validationSettings?: VerifiedpermissionsPolicyStoreValidationSettings[] | cdktf.IResolvable;
}
export interface VerifiedpermissionsPolicyStoreValidationSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_store#mode VerifiedpermissionsPolicyStore#mode}
    */
    readonly mode: string;
}
export declare function verifiedpermissionsPolicyStoreValidationSettingsToTerraform(struct?: VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable): any;
export declare function verifiedpermissionsPolicyStoreValidationSettingsToHclTerraform(struct?: VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable): any;
export declare class VerifiedpermissionsPolicyStoreValidationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable | undefined;
    set internalValue(value: VerifiedpermissionsPolicyStoreValidationSettings | cdktf.IResolvable | undefined);
    private _mode?;
    get mode(): string;
    set mode(value: string);
    get modeInput(): string | undefined;
}
export declare class VerifiedpermissionsPolicyStoreValidationSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VerifiedpermissionsPolicyStoreValidationSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VerifiedpermissionsPolicyStoreValidationSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store}
*/
export declare class VerifiedpermissionsPolicyStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedpermissions_policy_store";
    /**
    * Generates CDKTF code for importing a VerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedpermissionsPolicyStore to import
    * @param importFromId The id of the existing VerifiedpermissionsPolicyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedpermissionsPolicyStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedpermissionsPolicyStoreConfig = {}
    */
    constructor(scope: Construct, id: string, config?: VerifiedpermissionsPolicyStoreConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get policyStoreId(): string;
    private _validationSettings;
    get validationSettings(): VerifiedpermissionsPolicyStoreValidationSettingsList;
    putValidationSettings(value: VerifiedpermissionsPolicyStoreValidationSettings[] | cdktf.IResolvable): void;
    resetValidationSettings(): void;
    get validationSettingsInput(): cdktf.IResolvable | VerifiedpermissionsPolicyStoreValidationSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
