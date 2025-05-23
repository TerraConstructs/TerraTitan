/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKendraExperienceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_experience#experience_id DataAwsKendraExperience#experience_id}
    */
    readonly experienceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_experience#id DataAwsKendraExperience#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_experience#index_id DataAwsKendraExperience#index_id}
    */
    readonly indexId: string;
}
export interface DataAwsKendraExperienceConfigurationContentSourceConfiguration {
}
export declare function dataAwsKendraExperienceConfigurationContentSourceConfigurationToTerraform(struct?: DataAwsKendraExperienceConfigurationContentSourceConfiguration): any;
export declare function dataAwsKendraExperienceConfigurationContentSourceConfigurationToHclTerraform(struct?: DataAwsKendraExperienceConfigurationContentSourceConfiguration): any;
export declare class DataAwsKendraExperienceConfigurationContentSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraExperienceConfigurationContentSourceConfiguration | undefined;
    set internalValue(value: DataAwsKendraExperienceConfigurationContentSourceConfiguration | undefined);
    get dataSourceIds(): string[];
    get directPutContent(): cdktf.IResolvable;
    get faqIds(): string[];
}
export declare class DataAwsKendraExperienceConfigurationContentSourceConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraExperienceConfigurationContentSourceConfigurationOutputReference;
}
export interface DataAwsKendraExperienceConfigurationUserIdentityConfiguration {
}
export declare function dataAwsKendraExperienceConfigurationUserIdentityConfigurationToTerraform(struct?: DataAwsKendraExperienceConfigurationUserIdentityConfiguration): any;
export declare function dataAwsKendraExperienceConfigurationUserIdentityConfigurationToHclTerraform(struct?: DataAwsKendraExperienceConfigurationUserIdentityConfiguration): any;
export declare class DataAwsKendraExperienceConfigurationUserIdentityConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraExperienceConfigurationUserIdentityConfiguration | undefined;
    set internalValue(value: DataAwsKendraExperienceConfigurationUserIdentityConfiguration | undefined);
    get identityAttributeName(): string;
}
export declare class DataAwsKendraExperienceConfigurationUserIdentityConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraExperienceConfigurationUserIdentityConfigurationOutputReference;
}
export interface DataAwsKendraExperienceConfiguration {
}
export declare function dataAwsKendraExperienceConfigurationToTerraform(struct?: DataAwsKendraExperienceConfiguration): any;
export declare function dataAwsKendraExperienceConfigurationToHclTerraform(struct?: DataAwsKendraExperienceConfiguration): any;
export declare class DataAwsKendraExperienceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraExperienceConfiguration | undefined;
    set internalValue(value: DataAwsKendraExperienceConfiguration | undefined);
    private _contentSourceConfiguration;
    get contentSourceConfiguration(): DataAwsKendraExperienceConfigurationContentSourceConfigurationList;
    private _userIdentityConfiguration;
    get userIdentityConfiguration(): DataAwsKendraExperienceConfigurationUserIdentityConfigurationList;
}
export declare class DataAwsKendraExperienceConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraExperienceConfigurationOutputReference;
}
export interface DataAwsKendraExperienceEndpoints {
}
export declare function dataAwsKendraExperienceEndpointsToTerraform(struct?: DataAwsKendraExperienceEndpoints): any;
export declare function dataAwsKendraExperienceEndpointsToHclTerraform(struct?: DataAwsKendraExperienceEndpoints): any;
export declare class DataAwsKendraExperienceEndpointsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraExperienceEndpoints | undefined;
    set internalValue(value: DataAwsKendraExperienceEndpoints | undefined);
    get endpoint(): string;
    get endpointType(): string;
}
export declare class DataAwsKendraExperienceEndpointsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraExperienceEndpointsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_experience aws_kendra_experience}
*/
export declare class DataAwsKendraExperience extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kendra_experience";
    /**
    * Generates CDKTF code for importing a DataAwsKendraExperience resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKendraExperience to import
    * @param importFromId The id of the existing DataAwsKendraExperience that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_experience#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKendraExperience to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_experience aws_kendra_experience} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKendraExperienceConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKendraExperienceConfig);
    get arn(): string;
    private _configuration;
    get configuration(): DataAwsKendraExperienceConfigurationList;
    get createdAt(): string;
    get description(): string;
    private _endpoints;
    get endpoints(): DataAwsKendraExperienceEndpointsList;
    get errorMessage(): string;
    private _experienceId?;
    get experienceId(): string;
    set experienceId(value: string);
    get experienceIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexId?;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string | undefined;
    get name(): string;
    get roleArn(): string;
    get status(): string;
    get updatedAt(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
