/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudtrailEventDataStoreConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#billing_mode CloudtrailEventDataStore#billing_mode}
    */
    readonly billingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#id CloudtrailEventDataStore#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#kms_key_id CloudtrailEventDataStore#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#multi_region_enabled CloudtrailEventDataStore#multi_region_enabled}
    */
    readonly multiRegionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#organization_enabled CloudtrailEventDataStore#organization_enabled}
    */
    readonly organizationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#retention_period CloudtrailEventDataStore#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#suspend CloudtrailEventDataStore#suspend}
    */
    readonly suspend?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#tags CloudtrailEventDataStore#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#tags_all CloudtrailEventDataStore#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#termination_protection_enabled CloudtrailEventDataStore#termination_protection_enabled}
    */
    readonly terminationProtectionEnabled?: boolean | cdktf.IResolvable;
    /**
    * advanced_event_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#advanced_event_selector CloudtrailEventDataStore#advanced_event_selector}
    */
    readonly advancedEventSelector?: CloudtrailEventDataStoreAdvancedEventSelector[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#timeouts CloudtrailEventDataStore#timeouts}
    */
    readonly timeouts?: CloudtrailEventDataStoreTimeouts;
}
export interface CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#ends_with CloudtrailEventDataStore#ends_with}
    */
    readonly endsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#equals CloudtrailEventDataStore#equals}
    */
    readonly equalTo?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#field CloudtrailEventDataStore#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#not_ends_with CloudtrailEventDataStore#not_ends_with}
    */
    readonly notEndsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#not_equals CloudtrailEventDataStore#not_equals}
    */
    readonly notEquals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#not_starts_with CloudtrailEventDataStore#not_starts_with}
    */
    readonly notStartsWith?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#starts_with CloudtrailEventDataStore#starts_with}
    */
    readonly startsWith?: string[];
}
export declare function cloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorToTerraform(struct?: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector | cdktf.IResolvable): any;
export declare function cloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorToHclTerraform(struct?: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector | cdktf.IResolvable): any;
export declare class CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector | cdktf.IResolvable | undefined);
    private _endsWith?;
    get endsWith(): string[];
    set endsWith(value: string[]);
    resetEndsWith(): void;
    get endsWithInput(): string[] | undefined;
    private _equals?;
    get equalTo(): string[];
    set equalTo(value: string[]);
    resetEqualTo(): void;
    get equalToInput(): string[] | undefined;
    private _field?;
    get field(): string;
    set field(value: string);
    resetField(): void;
    get fieldInput(): string | undefined;
    private _notEndsWith?;
    get notEndsWith(): string[];
    set notEndsWith(value: string[]);
    resetNotEndsWith(): void;
    get notEndsWithInput(): string[] | undefined;
    private _notEquals?;
    get notEquals(): string[];
    set notEquals(value: string[]);
    resetNotEquals(): void;
    get notEqualsInput(): string[] | undefined;
    private _notStartsWith?;
    get notStartsWith(): string[];
    set notStartsWith(value: string[]);
    resetNotStartsWith(): void;
    get notStartsWithInput(): string[] | undefined;
    private _startsWith?;
    get startsWith(): string[];
    set startsWith(value: string[]);
    resetStartsWith(): void;
    get startsWithInput(): string[] | undefined;
}
export declare class CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorOutputReference;
}
export interface CloudtrailEventDataStoreAdvancedEventSelector {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#name CloudtrailEventDataStore#name}
    */
    readonly name?: string;
    /**
    * field_selector block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#field_selector CloudtrailEventDataStore#field_selector}
    */
    readonly fieldSelector?: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable;
}
export declare function cloudtrailEventDataStoreAdvancedEventSelectorToTerraform(struct?: CloudtrailEventDataStoreAdvancedEventSelector | cdktf.IResolvable): any;
export declare function cloudtrailEventDataStoreAdvancedEventSelectorToHclTerraform(struct?: CloudtrailEventDataStoreAdvancedEventSelector | cdktf.IResolvable): any;
export declare class CloudtrailEventDataStoreAdvancedEventSelectorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudtrailEventDataStoreAdvancedEventSelector | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailEventDataStoreAdvancedEventSelector | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _fieldSelector;
    get fieldSelector(): CloudtrailEventDataStoreAdvancedEventSelectorFieldSelectorList;
    putFieldSelector(value: CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[] | cdktf.IResolvable): void;
    resetFieldSelector(): void;
    get fieldSelectorInput(): cdktf.IResolvable | CloudtrailEventDataStoreAdvancedEventSelectorFieldSelector[] | undefined;
}
export declare class CloudtrailEventDataStoreAdvancedEventSelectorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudtrailEventDataStoreAdvancedEventSelector[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudtrailEventDataStoreAdvancedEventSelectorOutputReference;
}
export interface CloudtrailEventDataStoreTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#create CloudtrailEventDataStore#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#delete CloudtrailEventDataStore#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#update CloudtrailEventDataStore#update}
    */
    readonly update?: string;
}
export declare function cloudtrailEventDataStoreTimeoutsToTerraform(struct?: CloudtrailEventDataStoreTimeouts | cdktf.IResolvable): any;
export declare function cloudtrailEventDataStoreTimeoutsToHclTerraform(struct?: CloudtrailEventDataStoreTimeouts | cdktf.IResolvable): any;
export declare class CloudtrailEventDataStoreTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudtrailEventDataStoreTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudtrailEventDataStoreTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store aws_cloudtrail_event_data_store}
*/
export declare class CloudtrailEventDataStore extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudtrail_event_data_store";
    /**
    * Generates CDKTF code for importing a CloudtrailEventDataStore resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudtrailEventDataStore to import
    * @param importFromId The id of the existing CloudtrailEventDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudtrailEventDataStore to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudtrail_event_data_store aws_cloudtrail_event_data_store} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudtrailEventDataStoreConfig
    */
    constructor(scope: Construct, id: string, config: CloudtrailEventDataStoreConfig);
    get arn(): string;
    private _billingMode?;
    get billingMode(): string;
    set billingMode(value: string);
    resetBillingMode(): void;
    get billingModeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _multiRegionEnabled?;
    get multiRegionEnabled(): boolean | cdktf.IResolvable;
    set multiRegionEnabled(value: boolean | cdktf.IResolvable);
    resetMultiRegionEnabled(): void;
    get multiRegionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _organizationEnabled?;
    get organizationEnabled(): boolean | cdktf.IResolvable;
    set organizationEnabled(value: boolean | cdktf.IResolvable);
    resetOrganizationEnabled(): void;
    get organizationEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number | undefined;
    private _suspend?;
    get suspend(): string;
    set suspend(value: string);
    resetSuspend(): void;
    get suspendInput(): string | undefined;
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
    private _terminationProtectionEnabled?;
    get terminationProtectionEnabled(): boolean | cdktf.IResolvable;
    set terminationProtectionEnabled(value: boolean | cdktf.IResolvable);
    resetTerminationProtectionEnabled(): void;
    get terminationProtectionEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _advancedEventSelector;
    get advancedEventSelector(): CloudtrailEventDataStoreAdvancedEventSelectorList;
    putAdvancedEventSelector(value: CloudtrailEventDataStoreAdvancedEventSelector[] | cdktf.IResolvable): void;
    resetAdvancedEventSelector(): void;
    get advancedEventSelectorInput(): cdktf.IResolvable | CloudtrailEventDataStoreAdvancedEventSelector[] | undefined;
    private _timeouts;
    get timeouts(): CloudtrailEventDataStoreTimeoutsOutputReference;
    putTimeouts(value: CloudtrailEventDataStoreTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudtrailEventDataStoreTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
