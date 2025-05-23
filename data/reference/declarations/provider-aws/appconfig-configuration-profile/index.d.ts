/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppconfigConfigurationProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#kms_key_identifier AppconfigConfigurationProfile#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}
    */
    readonly locationUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}
    */
    readonly retrievalRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}
    */
    readonly type?: string;
    /**
    * validator block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#validator AppconfigConfigurationProfile#validator}
    */
    readonly validator?: AppconfigConfigurationProfileValidator[] | cdktf.IResolvable;
}
export interface AppconfigConfigurationProfileValidator {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}
    */
    readonly type: string;
}
export declare function appconfigConfigurationProfileValidatorToTerraform(struct?: AppconfigConfigurationProfileValidator | cdktf.IResolvable): any;
export declare function appconfigConfigurationProfileValidatorToHclTerraform(struct?: AppconfigConfigurationProfileValidator | cdktf.IResolvable): any;
export declare class AppconfigConfigurationProfileValidatorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppconfigConfigurationProfileValidator | cdktf.IResolvable | undefined;
    set internalValue(value: AppconfigConfigurationProfileValidator | cdktf.IResolvable | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class AppconfigConfigurationProfileValidatorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppconfigConfigurationProfileValidator[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppconfigConfigurationProfileValidatorOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile aws_appconfig_configuration_profile}
*/
export declare class AppconfigConfigurationProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appconfig_configuration_profile";
    /**
    * Generates CDKTF code for importing a AppconfigConfigurationProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppconfigConfigurationProfile to import
    * @param importFromId The id of the existing AppconfigConfigurationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppconfigConfigurationProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_configuration_profile aws_appconfig_configuration_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigConfigurationProfileConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigConfigurationProfileConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    get arn(): string;
    get configurationProfileId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyIdentifier?;
    get kmsKeyIdentifier(): string;
    set kmsKeyIdentifier(value: string);
    resetKmsKeyIdentifier(): void;
    get kmsKeyIdentifierInput(): string | undefined;
    private _locationUri?;
    get locationUri(): string;
    set locationUri(value: string);
    get locationUriInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _retrievalRoleArn?;
    get retrievalRoleArn(): string;
    set retrievalRoleArn(value: string);
    resetRetrievalRoleArn(): void;
    get retrievalRoleArnInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _validator;
    get validator(): AppconfigConfigurationProfileValidatorList;
    putValidator(value: AppconfigConfigurationProfileValidator[] | cdktf.IResolvable): void;
    resetValidator(): void;
    get validatorInput(): cdktf.IResolvable | AppconfigConfigurationProfileValidator[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
