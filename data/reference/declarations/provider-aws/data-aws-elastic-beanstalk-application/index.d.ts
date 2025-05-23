/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elastic_beanstalk_application#id DataAwsElasticBeanstalkApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elastic_beanstalk_application#name DataAwsElasticBeanstalkApplication#name}
    */
    readonly name: string;
}
export interface DataAwsElasticBeanstalkApplicationAppversionLifecycle {
}
export declare function dataAwsElasticBeanstalkApplicationAppversionLifecycleToTerraform(struct?: DataAwsElasticBeanstalkApplicationAppversionLifecycle): any;
export declare function dataAwsElasticBeanstalkApplicationAppversionLifecycleToHclTerraform(struct?: DataAwsElasticBeanstalkApplicationAppversionLifecycle): any;
export declare class DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticBeanstalkApplicationAppversionLifecycle | undefined;
    set internalValue(value: DataAwsElasticBeanstalkApplicationAppversionLifecycle | undefined);
    get deleteSourceFromS3(): cdktf.IResolvable;
    get maxAgeInDays(): number;
    get maxCount(): number;
    get serviceRole(): string;
}
export declare class DataAwsElasticBeanstalkApplicationAppversionLifecycleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsElasticBeanstalkApplicationAppversionLifecycleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elastic_beanstalk_application aws_elastic_beanstalk_application}
*/
export declare class DataAwsElasticBeanstalkApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elastic_beanstalk_application";
    /**
    * Generates CDKTF code for importing a DataAwsElasticBeanstalkApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElasticBeanstalkApplication to import
    * @param importFromId The id of the existing DataAwsElasticBeanstalkApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elastic_beanstalk_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElasticBeanstalkApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elastic_beanstalk_application aws_elastic_beanstalk_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkApplicationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkApplicationConfig);
    private _appversionLifecycle;
    get appversionLifecycle(): DataAwsElasticBeanstalkApplicationAppversionLifecycleList;
    get arn(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
