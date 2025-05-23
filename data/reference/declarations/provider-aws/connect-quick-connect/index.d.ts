/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectQuickConnectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#description ConnectQuickConnect#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#id ConnectQuickConnect#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#instance_id ConnectQuickConnect#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#name ConnectQuickConnect#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#tags ConnectQuickConnect#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#tags_all ConnectQuickConnect#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * quick_connect_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#quick_connect_config ConnectQuickConnect#quick_connect_config}
    */
    readonly quickConnectConfig: ConnectQuickConnectQuickConnectConfig;
}
export interface ConnectQuickConnectQuickConnectConfigPhoneConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#phone_number ConnectQuickConnect#phone_number}
    */
    readonly phoneNumber: string;
}
export declare function connectQuickConnectQuickConnectConfigPhoneConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable): any;
export declare function connectQuickConnectQuickConnectConfigPhoneConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable): any;
export declare class ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectQuickConnectQuickConnectConfigPhoneConfig | cdktf.IResolvable | undefined);
    private _phoneNumber?;
    get phoneNumber(): string;
    set phoneNumber(value: string);
    get phoneNumberInput(): string | undefined;
}
export declare class ConnectQuickConnectQuickConnectConfigPhoneConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConnectQuickConnectQuickConnectConfigPhoneConfigOutputReference;
}
export interface ConnectQuickConnectQuickConnectConfigQueueConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}
    */
    readonly contactFlowId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#queue_id ConnectQuickConnect#queue_id}
    */
    readonly queueId: string;
}
export declare function connectQuickConnectQuickConnectConfigQueueConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable): any;
export declare function connectQuickConnectQuickConnectConfigQueueConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable): any;
export declare class ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectQuickConnectQuickConnectConfigQueueConfig | cdktf.IResolvable | undefined);
    private _contactFlowId?;
    get contactFlowId(): string;
    set contactFlowId(value: string);
    get contactFlowIdInput(): string | undefined;
    private _queueId?;
    get queueId(): string;
    set queueId(value: string);
    get queueIdInput(): string | undefined;
}
export declare class ConnectQuickConnectQuickConnectConfigQueueConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConnectQuickConnectQuickConnectConfigQueueConfigOutputReference;
}
export interface ConnectQuickConnectQuickConnectConfigUserConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#contact_flow_id ConnectQuickConnect#contact_flow_id}
    */
    readonly contactFlowId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#user_id ConnectQuickConnect#user_id}
    */
    readonly userId: string;
}
export declare function connectQuickConnectQuickConnectConfigUserConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable): any;
export declare function connectQuickConnectQuickConnectConfigUserConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable): any;
export declare class ConnectQuickConnectQuickConnectConfigUserConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable | undefined;
    set internalValue(value: ConnectQuickConnectQuickConnectConfigUserConfig | cdktf.IResolvable | undefined);
    private _contactFlowId?;
    get contactFlowId(): string;
    set contactFlowId(value: string);
    get contactFlowIdInput(): string | undefined;
    private _userId?;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string | undefined;
}
export declare class ConnectQuickConnectQuickConnectConfigUserConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ConnectQuickConnectQuickConnectConfigUserConfigOutputReference;
}
export interface ConnectQuickConnectQuickConnectConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#quick_connect_type ConnectQuickConnect#quick_connect_type}
    */
    readonly quickConnectType: string;
    /**
    * phone_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#phone_config ConnectQuickConnect#phone_config}
    */
    readonly phoneConfig?: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable;
    /**
    * queue_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#queue_config ConnectQuickConnect#queue_config}
    */
    readonly queueConfig?: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable;
    /**
    * user_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#user_config ConnectQuickConnect#user_config}
    */
    readonly userConfig?: ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable;
}
export declare function connectQuickConnectQuickConnectConfigToTerraform(struct?: ConnectQuickConnectQuickConnectConfigOutputReference | ConnectQuickConnectQuickConnectConfig): any;
export declare function connectQuickConnectQuickConnectConfigToHclTerraform(struct?: ConnectQuickConnectQuickConnectConfigOutputReference | ConnectQuickConnectQuickConnectConfig): any;
export declare class ConnectQuickConnectQuickConnectConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectQuickConnectQuickConnectConfig | undefined;
    set internalValue(value: ConnectQuickConnectQuickConnectConfig | undefined);
    private _quickConnectType?;
    get quickConnectType(): string;
    set quickConnectType(value: string);
    get quickConnectTypeInput(): string | undefined;
    private _phoneConfig;
    get phoneConfig(): ConnectQuickConnectQuickConnectConfigPhoneConfigList;
    putPhoneConfig(value: ConnectQuickConnectQuickConnectConfigPhoneConfig[] | cdktf.IResolvable): void;
    resetPhoneConfig(): void;
    get phoneConfigInput(): cdktf.IResolvable | ConnectQuickConnectQuickConnectConfigPhoneConfig[] | undefined;
    private _queueConfig;
    get queueConfig(): ConnectQuickConnectQuickConnectConfigQueueConfigList;
    putQueueConfig(value: ConnectQuickConnectQuickConnectConfigQueueConfig[] | cdktf.IResolvable): void;
    resetQueueConfig(): void;
    get queueConfigInput(): cdktf.IResolvable | ConnectQuickConnectQuickConnectConfigQueueConfig[] | undefined;
    private _userConfig;
    get userConfig(): ConnectQuickConnectQuickConnectConfigUserConfigList;
    putUserConfig(value: ConnectQuickConnectQuickConnectConfigUserConfig[] | cdktf.IResolvable): void;
    resetUserConfig(): void;
    get userConfigInput(): cdktf.IResolvable | ConnectQuickConnectQuickConnectConfigUserConfig[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect aws_connect_quick_connect}
*/
export declare class ConnectQuickConnect extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_quick_connect";
    /**
    * Generates CDKTF code for importing a ConnectQuickConnect resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectQuickConnect to import
    * @param importFromId The id of the existing ConnectQuickConnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectQuickConnect to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_quick_connect aws_connect_quick_connect} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectQuickConnectConfig
    */
    constructor(scope: Construct, id: string, config: ConnectQuickConnectConfig);
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
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get quickConnectId(): string;
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
    private _quickConnectConfig;
    get quickConnectConfig(): ConnectQuickConnectQuickConnectConfigOutputReference;
    putQuickConnectConfig(value: ConnectQuickConnectQuickConnectConfig): void;
    get quickConnectConfigInput(): ConnectQuickConnectQuickConnectConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
