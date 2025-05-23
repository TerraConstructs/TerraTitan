/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppconfigConfigurationProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_configuration_profile#application_id DataAwsAppconfigConfigurationProfile#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_configuration_profile#configuration_profile_id DataAwsAppconfigConfigurationProfile#configuration_profile_id}
    */
    readonly configurationProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_configuration_profile#id DataAwsAppconfigConfigurationProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_configuration_profile#tags DataAwsAppconfigConfigurationProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppconfigConfigurationProfileValidator {
}
export declare function dataAwsAppconfigConfigurationProfileValidatorToTerraform(struct?: DataAwsAppconfigConfigurationProfileValidator): any;
export declare function dataAwsAppconfigConfigurationProfileValidatorToHclTerraform(struct?: DataAwsAppconfigConfigurationProfileValidator): any;
export declare class DataAwsAppconfigConfigurationProfileValidatorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppconfigConfigurationProfileValidator | undefined;
    set internalValue(value: DataAwsAppconfigConfigurationProfileValidator | undefined);
    get content(): string;
    get type(): string;
}
export declare class DataAwsAppconfigConfigurationProfileValidatorList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppconfigConfigurationProfileValidatorOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_configuration_profile aws_appconfig_configuration_profile}
*/
export declare class DataAwsAppconfigConfigurationProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appconfig_configuration_profile";
    /**
    * Generates CDKTF code for importing a DataAwsAppconfigConfigurationProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppconfigConfigurationProfile to import
    * @param importFromId The id of the existing DataAwsAppconfigConfigurationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppconfigConfigurationProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_configuration_profile aws_appconfig_configuration_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppconfigConfigurationProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppconfigConfigurationProfileConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    get arn(): string;
    private _configurationProfileId?;
    get configurationProfileId(): string;
    set configurationProfileId(value: string);
    get configurationProfileIdInput(): string | undefined;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get kmsKeyIdentifier(): string;
    get locationUri(): string;
    get name(): string;
    get retrievalRoleArn(): string;
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
    get type(): string;
    private _validator;
    get validator(): DataAwsAppconfigConfigurationProfileValidatorList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
