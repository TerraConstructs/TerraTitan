/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVerifiedpermissionsPolicyStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsVerifiedpermissionsPolicyStore#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
}
export interface DataAwsVerifiedpermissionsPolicyStoreValidationSettings {
}
export declare function dataAwsVerifiedpermissionsPolicyStoreValidationSettingsToTerraform(struct?: DataAwsVerifiedpermissionsPolicyStoreValidationSettings): any;
export declare function dataAwsVerifiedpermissionsPolicyStoreValidationSettingsToHclTerraform(struct?: DataAwsVerifiedpermissionsPolicyStoreValidationSettings): any;
export declare class DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVerifiedpermissionsPolicyStoreValidationSettings | undefined;
    set internalValue(value: DataAwsVerifiedpermissionsPolicyStoreValidationSettings | undefined);
    get mode(): string;
}
export declare class DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVerifiedpermissionsPolicyStoreValidationSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store}
*/
export declare class DataAwsVerifiedpermissionsPolicyStore extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_verifiedpermissions_policy_store";
    /**
    * Generates CDKTF code for importing a DataAwsVerifiedpermissionsPolicyStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVerifiedpermissionsPolicyStore to import
    * @param importFromId The id of the existing DataAwsVerifiedpermissionsPolicyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVerifiedpermissionsPolicyStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/verifiedpermissions_policy_store aws_verifiedpermissions_policy_store} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVerifiedpermissionsPolicyStoreConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsVerifiedpermissionsPolicyStoreConfig);
    get arn(): string;
    get createdDate(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _validationSettings;
    get validationSettings(): DataAwsVerifiedpermissionsPolicyStoreValidationSettingsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
