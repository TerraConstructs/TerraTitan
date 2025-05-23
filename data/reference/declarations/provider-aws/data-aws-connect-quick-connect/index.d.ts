/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect#id DataAwsConnectQuickConnect#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect#instance_id DataAwsConnectQuickConnect#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect#name DataAwsConnectQuickConnect#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect#quick_connect_id DataAwsConnectQuickConnect#quick_connect_id}
    */
    readonly quickConnectId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect#tags DataAwsConnectQuickConnect#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig {
}
export declare function dataAwsConnectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig): any;
export declare function dataAwsConnectQuickConnectQuickConnectConfigPhoneConfigToHclTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig): any;
export declare class DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig | undefined;
    set internalValue(value: DataAwsConnectQuickConnectQuickConnectConfigPhoneConfig | undefined);
    get phoneNumber(): string;
}
export declare class DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference;
}
export interface DataAwsConnectQuickConnectQuickConnectConfigQueueConfig {
}
export declare function dataAwsConnectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfigQueueConfig): any;
export declare function dataAwsConnectQuickConnectQuickConnectConfigQueueConfigToHclTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfigQueueConfig): any;
export declare class DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectQuickConnectQuickConnectConfigQueueConfig | undefined;
    set internalValue(value: DataAwsConnectQuickConnectQuickConnectConfigQueueConfig | undefined);
    get contactFlowId(): string;
    get queueId(): string;
}
export declare class DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectQuickConnectQuickConnectConfigQueueConfigOutputReference;
}
export interface DataAwsConnectQuickConnectQuickConnectConfigUserConfig {
}
export declare function dataAwsConnectQuickConnectQuickConnectConfigUserConfigToTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfigUserConfig): any;
export declare function dataAwsConnectQuickConnectQuickConnectConfigUserConfigToHclTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfigUserConfig): any;
export declare class DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectQuickConnectQuickConnectConfigUserConfig | undefined;
    set internalValue(value: DataAwsConnectQuickConnectQuickConnectConfigUserConfig | undefined);
    get contactFlowId(): string;
    get userId(): string;
}
export declare class DataAwsConnectQuickConnectQuickConnectConfigUserConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectQuickConnectQuickConnectConfigUserConfigOutputReference;
}
export interface DataAwsConnectQuickConnectQuickConnectConfig {
}
export declare function dataAwsConnectQuickConnectQuickConnectConfigToTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfig): any;
export declare function dataAwsConnectQuickConnectQuickConnectConfigToHclTerraform(struct?: DataAwsConnectQuickConnectQuickConnectConfig): any;
export declare class DataAwsConnectQuickConnectQuickConnectConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsConnectQuickConnectQuickConnectConfig | undefined;
    set internalValue(value: DataAwsConnectQuickConnectQuickConnectConfig | undefined);
    private _phoneConfig;
    get phoneConfig(): DataAwsConnectQuickConnectQuickConnectConfigPhoneConfigList;
    private _queueConfig;
    get queueConfig(): DataAwsConnectQuickConnectQuickConnectConfigQueueConfigList;
    get quickConnectType(): string;
    private _userConfig;
    get userConfig(): DataAwsConnectQuickConnectQuickConnectConfigUserConfigList;
}
export declare class DataAwsConnectQuickConnectQuickConnectConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsConnectQuickConnectQuickConnectConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect aws_connect_quick_connect}
*/
export declare class DataAwsConnectQuickConnect extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_quick_connect";
    /**
    * Generates CDKTF code for importing a DataAwsConnectQuickConnect resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectQuickConnect to import
    * @param importFromId The id of the existing DataAwsConnectQuickConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectQuickConnect to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_quick_connect aws_connect_quick_connect} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectQuickConnectConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectQuickConnectConfig);
    get arn(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _quickConnectConfig;
    get quickConnectConfig(): DataAwsConnectQuickConnectQuickConnectConfigList;
    private _quickConnectId?;
    get quickConnectId(): string;
    set quickConnectId(value: string);
    resetQuickConnectId(): void;
    get quickConnectIdInput(): string | undefined;
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
