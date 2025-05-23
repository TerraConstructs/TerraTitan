/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticBeanstalkConfigurationTemplateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#application ElasticBeanstalkConfigurationTemplate#application}
    */
    readonly application: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#description ElasticBeanstalkConfigurationTemplate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#environment_id ElasticBeanstalkConfigurationTemplate#environment_id}
    */
    readonly environmentId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#id ElasticBeanstalkConfigurationTemplate#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#solution_stack_name ElasticBeanstalkConfigurationTemplate#solution_stack_name}
    */
    readonly solutionStackName?: string;
    /**
    * setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#setting ElasticBeanstalkConfigurationTemplate#setting}
    */
    readonly setting?: ElasticBeanstalkConfigurationTemplateSetting[] | cdktf.IResolvable;
}
export interface ElasticBeanstalkConfigurationTemplateSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#name ElasticBeanstalkConfigurationTemplate#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#namespace ElasticBeanstalkConfigurationTemplate#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#resource ElasticBeanstalkConfigurationTemplate#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#value ElasticBeanstalkConfigurationTemplate#value}
    */
    readonly value: string;
}
export declare function elasticBeanstalkConfigurationTemplateSettingToTerraform(struct?: ElasticBeanstalkConfigurationTemplateSetting | cdktf.IResolvable): any;
export declare function elasticBeanstalkConfigurationTemplateSettingToHclTerraform(struct?: ElasticBeanstalkConfigurationTemplateSetting | cdktf.IResolvable): any;
export declare class ElasticBeanstalkConfigurationTemplateSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticBeanstalkConfigurationTemplateSetting | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticBeanstalkConfigurationTemplateSetting | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _resource?;
    get resource(): string;
    set resource(value: string);
    resetResource(): void;
    get resourceInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class ElasticBeanstalkConfigurationTemplateSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElasticBeanstalkConfigurationTemplateSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElasticBeanstalkConfigurationTemplateSettingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template aws_elastic_beanstalk_configuration_template}
*/
export declare class ElasticBeanstalkConfigurationTemplate extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elastic_beanstalk_configuration_template";
    /**
    * Generates CDKTF code for importing a ElasticBeanstalkConfigurationTemplate resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticBeanstalkConfigurationTemplate to import
    * @param importFromId The id of the existing ElasticBeanstalkConfigurationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticBeanstalkConfigurationTemplate to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_configuration_template aws_elastic_beanstalk_configuration_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkConfigurationTemplateConfig
    */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkConfigurationTemplateConfig);
    private _application?;
    get application(): string;
    set application(value: string);
    get applicationInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    resetEnvironmentId(): void;
    get environmentIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _solutionStackName?;
    get solutionStackName(): string;
    set solutionStackName(value: string);
    resetSolutionStackName(): void;
    get solutionStackNameInput(): string | undefined;
    private _setting;
    get setting(): ElasticBeanstalkConfigurationTemplateSettingList;
    putSetting(value: ElasticBeanstalkConfigurationTemplateSetting[] | cdktf.IResolvable): void;
    resetSetting(): void;
    get settingInput(): cdktf.IResolvable | ElasticBeanstalkConfigurationTemplateSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
