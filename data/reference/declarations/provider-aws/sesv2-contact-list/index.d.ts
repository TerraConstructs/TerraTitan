/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Sesv2ContactListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#contact_list_name Sesv2ContactList#contact_list_name}
    */
    readonly contactListName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#description Sesv2ContactList#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#id Sesv2ContactList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#tags Sesv2ContactList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#tags_all Sesv2ContactList#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * topic block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#topic Sesv2ContactList#topic}
    */
    readonly topic?: Sesv2ContactListTopic[] | cdktf.IResolvable;
}
export interface Sesv2ContactListTopic {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#default_subscription_status Sesv2ContactList#default_subscription_status}
    */
    readonly defaultSubscriptionStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#description Sesv2ContactList#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#display_name Sesv2ContactList#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#topic_name Sesv2ContactList#topic_name}
    */
    readonly topicName: string;
}
export declare function sesv2ContactListTopicToTerraform(struct?: Sesv2ContactListTopic | cdktf.IResolvable): any;
export declare function sesv2ContactListTopicToHclTerraform(struct?: Sesv2ContactListTopic | cdktf.IResolvable): any;
export declare class Sesv2ContactListTopicOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Sesv2ContactListTopic | cdktf.IResolvable | undefined;
    set internalValue(value: Sesv2ContactListTopic | cdktf.IResolvable | undefined);
    private _defaultSubscriptionStatus?;
    get defaultSubscriptionStatus(): string;
    set defaultSubscriptionStatus(value: string);
    get defaultSubscriptionStatusInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
    private _topicName?;
    get topicName(): string;
    set topicName(value: string);
    get topicNameInput(): string | undefined;
}
export declare class Sesv2ContactListTopicList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Sesv2ContactListTopic[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Sesv2ContactListTopicOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list aws_sesv2_contact_list}
*/
export declare class Sesv2ContactList extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sesv2_contact_list";
    /**
    * Generates CDKTF code for importing a Sesv2ContactList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Sesv2ContactList to import
    * @param importFromId The id of the existing Sesv2ContactList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Sesv2ContactList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sesv2_contact_list aws_sesv2_contact_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Sesv2ContactListConfig
    */
    constructor(scope: Construct, id: string, config: Sesv2ContactListConfig);
    get arn(): string;
    private _contactListName?;
    get contactListName(): string;
    set contactListName(value: string);
    get contactListNameInput(): string | undefined;
    get createdTimestamp(): string;
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
    get lastUpdatedTimestamp(): string;
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
    private _topic;
    get topic(): Sesv2ContactListTopicList;
    putTopic(value: Sesv2ContactListTopic[] | cdktf.IResolvable): void;
    resetTopic(): void;
    get topicInput(): cdktf.IResolvable | Sesv2ContactListTopic[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
