/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbEventSubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#enabled DbEventSubscription#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#event_categories DbEventSubscription#event_categories}
    */
    readonly eventCategories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#id DbEventSubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#name DbEventSubscription#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#name_prefix DbEventSubscription#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#sns_topic DbEventSubscription#sns_topic}
    */
    readonly snsTopic: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#source_ids DbEventSubscription#source_ids}
    */
    readonly sourceIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#source_type DbEventSubscription#source_type}
    */
    readonly sourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#tags DbEventSubscription#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#tags_all DbEventSubscription#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#timeouts DbEventSubscription#timeouts}
    */
    readonly timeouts?: DbEventSubscriptionTimeouts;
}
export interface DbEventSubscriptionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#create DbEventSubscription#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#delete DbEventSubscription#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#update DbEventSubscription#update}
    */
    readonly update?: string;
}
export declare function dbEventSubscriptionTimeoutsToTerraform(struct?: DbEventSubscriptionTimeouts | cdktf.IResolvable): any;
export declare function dbEventSubscriptionTimeoutsToHclTerraform(struct?: DbEventSubscriptionTimeouts | cdktf.IResolvable): any;
export declare class DbEventSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbEventSubscriptionTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbEventSubscriptionTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription aws_db_event_subscription}
*/
export declare class DbEventSubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_event_subscription";
    /**
    * Generates CDKTF code for importing a DbEventSubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbEventSubscription to import
    * @param importFromId The id of the existing DbEventSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbEventSubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_event_subscription aws_db_event_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbEventSubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: DbEventSubscriptionConfig);
    get arn(): string;
    get customerAwsId(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _eventCategories?;
    get eventCategories(): string[];
    set eventCategories(value: string[]);
    resetEventCategories(): void;
    get eventCategoriesInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _snsTopic?;
    get snsTopic(): string;
    set snsTopic(value: string);
    get snsTopicInput(): string | undefined;
    private _sourceIds?;
    get sourceIds(): string[];
    set sourceIds(value: string[]);
    resetSourceIds(): void;
    get sourceIdsInput(): string[] | undefined;
    private _sourceType?;
    get sourceType(): string;
    set sourceType(value: string);
    resetSourceType(): void;
    get sourceTypeInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): DbEventSubscriptionTimeoutsOutputReference;
    putTimeouts(value: DbEventSubscriptionTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbEventSubscriptionTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
