/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticBeanstalkEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}
    */
    readonly application: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}
    */
    readonly cnamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}
    */
    readonly platformArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}
    */
    readonly pollInterval?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}
    */
    readonly solutionStackName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}
    */
    readonly templateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}
    */
    readonly tier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}
    */
    readonly versionLabel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}
    */
    readonly waitForReadyTimeout?: string;
    /**
    * setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}
    */
    readonly setting?: ElasticBeanstalkEnvironmentSetting[] | cdktf.IResolvable;
}
export interface ElasticBeanstalkEnvironmentAllSettings {
}
export declare function elasticBeanstalkEnvironmentAllSettingsToTerraform(struct?: ElasticBeanstalkEnvironmentAllSettings): any;
export declare function elasticBeanstalkEnvironmentAllSettingsToHclTerraform(struct?: ElasticBeanstalkEnvironmentAllSettings): any;
export declare class ElasticBeanstalkEnvironmentAllSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticBeanstalkEnvironmentAllSettings | undefined;
    set internalValue(value: ElasticBeanstalkEnvironmentAllSettings | undefined);
    get name(): string;
    get namespace(): string;
    get resource(): string;
    get value(): string;
}
export declare class ElasticBeanstalkEnvironmentAllSettingsList extends cdktf.ComplexList {
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
    get(index: number): ElasticBeanstalkEnvironmentAllSettingsOutputReference;
}
export interface ElasticBeanstalkEnvironmentSetting {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}
    */
    readonly value: string;
}
export declare function elasticBeanstalkEnvironmentSettingToTerraform(struct?: ElasticBeanstalkEnvironmentSetting | cdktf.IResolvable): any;
export declare function elasticBeanstalkEnvironmentSettingToHclTerraform(struct?: ElasticBeanstalkEnvironmentSetting | cdktf.IResolvable): any;
export declare class ElasticBeanstalkEnvironmentSettingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ElasticBeanstalkEnvironmentSetting | cdktf.IResolvable | undefined;
    set internalValue(value: ElasticBeanstalkEnvironmentSetting | cdktf.IResolvable | undefined);
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
export declare class ElasticBeanstalkEnvironmentSettingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ElasticBeanstalkEnvironmentSetting[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ElasticBeanstalkEnvironmentSettingOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment aws_elastic_beanstalk_environment}
*/
export declare class ElasticBeanstalkEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elastic_beanstalk_environment";
    /**
    * Generates CDKTF code for importing a ElasticBeanstalkEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticBeanstalkEnvironment to import
    * @param importFromId The id of the existing ElasticBeanstalkEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticBeanstalkEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_environment aws_elastic_beanstalk_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkEnvironmentConfig);
    private _allSettings;
    get allSettings(): ElasticBeanstalkEnvironmentAllSettingsList;
    private _application?;
    get application(): string;
    set application(value: string);
    get applicationInput(): string | undefined;
    get arn(): string;
    get autoscalingGroups(): string[];
    get cname(): string;
    private _cnamePrefix?;
    get cnamePrefix(): string;
    set cnamePrefix(value: string);
    resetCnamePrefix(): void;
    get cnamePrefixInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get endpointUrl(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instances(): string[];
    get launchConfigurations(): string[];
    get loadBalancers(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _platformArn?;
    get platformArn(): string;
    set platformArn(value: string);
    resetPlatformArn(): void;
    get platformArnInput(): string | undefined;
    private _pollInterval?;
    get pollInterval(): string;
    set pollInterval(value: string);
    resetPollInterval(): void;
    get pollIntervalInput(): string | undefined;
    get queues(): string[];
    private _solutionStackName?;
    get solutionStackName(): string;
    set solutionStackName(value: string);
    resetSolutionStackName(): void;
    get solutionStackNameInput(): string | undefined;
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
    private _templateName?;
    get templateName(): string;
    set templateName(value: string);
    resetTemplateName(): void;
    get templateNameInput(): string | undefined;
    private _tier?;
    get tier(): string;
    set tier(value: string);
    resetTier(): void;
    get tierInput(): string | undefined;
    get triggers(): string[];
    private _versionLabel?;
    get versionLabel(): string;
    set versionLabel(value: string);
    resetVersionLabel(): void;
    get versionLabelInput(): string | undefined;
    private _waitForReadyTimeout?;
    get waitForReadyTimeout(): string;
    set waitForReadyTimeout(value: string);
    resetWaitForReadyTimeout(): void;
    get waitForReadyTimeoutInput(): string | undefined;
    private _setting;
    get setting(): ElasticBeanstalkEnvironmentSettingList;
    putSetting(value: ElasticBeanstalkEnvironmentSetting[] | cdktf.IResolvable): void;
    resetSetting(): void;
    get settingInput(): cdktf.IResolvable | ElasticBeanstalkEnvironmentSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
