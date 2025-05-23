/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAppconfigEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_environment#application_id DataAwsAppconfigEnvironment#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_environment#environment_id DataAwsAppconfigEnvironment#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_environment#id DataAwsAppconfigEnvironment#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_environment#tags DataAwsAppconfigEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsAppconfigEnvironmentMonitor {
}
export declare function dataAwsAppconfigEnvironmentMonitorToTerraform(struct?: DataAwsAppconfigEnvironmentMonitor): any;
export declare function dataAwsAppconfigEnvironmentMonitorToHclTerraform(struct?: DataAwsAppconfigEnvironmentMonitor): any;
export declare class DataAwsAppconfigEnvironmentMonitorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAppconfigEnvironmentMonitor | undefined;
    set internalValue(value: DataAwsAppconfigEnvironmentMonitor | undefined);
    get alarmArn(): string;
    get alarmRoleArn(): string;
}
export declare class DataAwsAppconfigEnvironmentMonitorList extends cdktf.ComplexList {
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
    get(index: number): DataAwsAppconfigEnvironmentMonitorOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_environment aws_appconfig_environment}
*/
export declare class DataAwsAppconfigEnvironment extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_appconfig_environment";
    /**
    * Generates CDKTF code for importing a DataAwsAppconfigEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAppconfigEnvironment to import
    * @param importFromId The id of the existing DataAwsAppconfigEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAppconfigEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/appconfig_environment aws_appconfig_environment} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAppconfigEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAppconfigEnvironmentConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    get arn(): string;
    get description(): string;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _monitor;
    get monitor(): DataAwsAppconfigEnvironmentMonitorList;
    get name(): string;
    get state(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
