/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#description ElasticBeanstalkApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#id ElasticBeanstalkApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#name ElasticBeanstalkApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#tags ElasticBeanstalkApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#tags_all ElasticBeanstalkApplication#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * appversion_lifecycle block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}
    */
    readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle;
}
export interface ElasticBeanstalkApplicationAppversionLifecycle {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}
    */
    readonly deleteSourceFromS3?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}
    */
    readonly maxAgeInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#max_count ElasticBeanstalkApplication#max_count}
    */
    readonly maxCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#service_role ElasticBeanstalkApplication#service_role}
    */
    readonly serviceRole: string;
}
export declare function elasticBeanstalkApplicationAppversionLifecycleToTerraform(struct?: ElasticBeanstalkApplicationAppversionLifecycleOutputReference | ElasticBeanstalkApplicationAppversionLifecycle): any;
export declare function elasticBeanstalkApplicationAppversionLifecycleToHclTerraform(struct?: ElasticBeanstalkApplicationAppversionLifecycleOutputReference | ElasticBeanstalkApplicationAppversionLifecycle): any;
export declare class ElasticBeanstalkApplicationAppversionLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ElasticBeanstalkApplicationAppversionLifecycle | undefined;
    set internalValue(value: ElasticBeanstalkApplicationAppversionLifecycle | undefined);
    private _deleteSourceFromS3?;
    get deleteSourceFromS3(): boolean | cdktf.IResolvable;
    set deleteSourceFromS3(value: boolean | cdktf.IResolvable);
    resetDeleteSourceFromS3(): void;
    get deleteSourceFromS3Input(): boolean | cdktf.IResolvable | undefined;
    private _maxAgeInDays?;
    get maxAgeInDays(): number;
    set maxAgeInDays(value: number);
    resetMaxAgeInDays(): void;
    get maxAgeInDaysInput(): number | undefined;
    private _maxCount?;
    get maxCount(): number;
    set maxCount(value: number);
    resetMaxCount(): void;
    get maxCountInput(): number | undefined;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    get serviceRoleInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application aws_elastic_beanstalk_application}
*/
export declare class ElasticBeanstalkApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_elastic_beanstalk_application";
    /**
    * Generates CDKTF code for importing a ElasticBeanstalkApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ElasticBeanstalkApplication to import
    * @param importFromId The id of the existing ElasticBeanstalkApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ElasticBeanstalkApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/elastic_beanstalk_application aws_elastic_beanstalk_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticBeanstalkApplicationConfig
    */
    constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig);
    get arn(): string;
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
    private _appversionLifecycle;
    get appversionLifecycle(): ElasticBeanstalkApplicationAppversionLifecycleOutputReference;
    putAppversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle): void;
    resetAppversionLifecycle(): void;
    get appversionLifecycleInput(): ElasticBeanstalkApplicationAppversionLifecycle | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
