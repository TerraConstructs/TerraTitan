/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodestarnotificationsNotificationRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#detail_type CodestarnotificationsNotificationRule#detail_type}
    */
    readonly detailType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#event_type_ids CodestarnotificationsNotificationRule#event_type_ids}
    */
    readonly eventTypeIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#id CodestarnotificationsNotificationRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#name CodestarnotificationsNotificationRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#resource CodestarnotificationsNotificationRule#resource}
    */
    readonly resource: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#status CodestarnotificationsNotificationRule#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#tags CodestarnotificationsNotificationRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#tags_all CodestarnotificationsNotificationRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#target CodestarnotificationsNotificationRule#target}
    */
    readonly target?: CodestarnotificationsNotificationRuleTarget[] | cdktf.IResolvable;
}
export interface CodestarnotificationsNotificationRuleTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#address CodestarnotificationsNotificationRule#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#type CodestarnotificationsNotificationRule#type}
    */
    readonly type?: string;
}
export declare function codestarnotificationsNotificationRuleTargetToTerraform(struct?: CodestarnotificationsNotificationRuleTarget | cdktf.IResolvable): any;
export declare function codestarnotificationsNotificationRuleTargetToHclTerraform(struct?: CodestarnotificationsNotificationRuleTarget | cdktf.IResolvable): any;
export declare class CodestarnotificationsNotificationRuleTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodestarnotificationsNotificationRuleTarget | cdktf.IResolvable | undefined;
    set internalValue(value: CodestarnotificationsNotificationRuleTarget | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string | undefined;
    get status(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class CodestarnotificationsNotificationRuleTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodestarnotificationsNotificationRuleTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodestarnotificationsNotificationRuleTargetOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule aws_codestarnotifications_notification_rule}
*/
export declare class CodestarnotificationsNotificationRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codestarnotifications_notification_rule";
    /**
    * Generates CDKTF code for importing a CodestarnotificationsNotificationRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodestarnotificationsNotificationRule to import
    * @param importFromId The id of the existing CodestarnotificationsNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodestarnotificationsNotificationRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codestarnotifications_notification_rule aws_codestarnotifications_notification_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarnotificationsNotificationRuleConfig
    */
    constructor(scope: Construct, id: string, config: CodestarnotificationsNotificationRuleConfig);
    get arn(): string;
    private _detailType?;
    get detailType(): string;
    set detailType(value: string);
    get detailTypeInput(): string | undefined;
    private _eventTypeIds?;
    get eventTypeIds(): string[];
    set eventTypeIds(value: string[]);
    get eventTypeIdsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resource?;
    get resource(): string;
    set resource(value: string);
    get resourceInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _target;
    get target(): CodestarnotificationsNotificationRuleTargetList;
    putTarget(value: CodestarnotificationsNotificationRuleTarget[] | cdktf.IResolvable): void;
    resetTarget(): void;
    get targetInput(): cdktf.IResolvable | CodestarnotificationsNotificationRuleTarget[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
