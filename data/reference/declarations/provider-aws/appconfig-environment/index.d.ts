/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppconfigEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#application_id AppconfigEnvironment#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#description AppconfigEnvironment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#name AppconfigEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#tags AppconfigEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * monitor block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#monitor AppconfigEnvironment#monitor}
    */
    readonly monitor?: AppconfigEnvironmentMonitor[] | cdktf.IResolvable;
}
export interface AppconfigEnvironmentMonitor {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}
    */
    readonly alarmArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}
    */
    readonly alarmRoleArn?: string;
}
export declare function appconfigEnvironmentMonitorToTerraform(struct?: AppconfigEnvironmentMonitor | cdktf.IResolvable): any;
export declare function appconfigEnvironmentMonitorToHclTerraform(struct?: AppconfigEnvironmentMonitor | cdktf.IResolvable): any;
export declare class AppconfigEnvironmentMonitorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppconfigEnvironmentMonitor | cdktf.IResolvable | undefined;
    set internalValue(value: AppconfigEnvironmentMonitor | cdktf.IResolvable | undefined);
    private _alarmArn?;
    get alarmArn(): string;
    set alarmArn(value: string);
    get alarmArnInput(): string | undefined;
    private _alarmRoleArn?;
    get alarmRoleArn(): string;
    set alarmRoleArn(value: string);
    resetAlarmRoleArn(): void;
    get alarmRoleArnInput(): string | undefined;
}
export declare class AppconfigEnvironmentMonitorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppconfigEnvironmentMonitor[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppconfigEnvironmentMonitorOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment aws_appconfig_environment}
*/
export declare class AppconfigEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appconfig_environment";
    /**
    * Generates CDKTF code for importing a AppconfigEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppconfigEnvironment to import
    * @param importFromId The id of the existing AppconfigEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppconfigEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/appconfig_environment aws_appconfig_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigEnvironmentConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get environmentId(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _monitor;
    get monitor(): AppconfigEnvironmentMonitorList;
    putMonitor(value: AppconfigEnvironmentMonitor[] | cdktf.IResolvable): void;
    resetMonitor(): void;
    get monitorInput(): cdktf.IResolvable | AppconfigEnvironmentMonitor[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
