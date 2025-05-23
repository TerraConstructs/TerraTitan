/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSesv2ConfigurationSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_configuration_set#configuration_set_name DataAwsSesv2ConfigurationSet#configuration_set_name}
    */
    readonly configurationSetName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_configuration_set#id DataAwsSesv2ConfigurationSet#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_configuration_set#tags DataAwsSesv2ConfigurationSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsSesv2ConfigurationSetDeliveryOptions {
}
export declare function dataAwsSesv2ConfigurationSetDeliveryOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetDeliveryOptions): any;
export declare function dataAwsSesv2ConfigurationSetDeliveryOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetDeliveryOptions): any;
export declare class DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetDeliveryOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetDeliveryOptions | undefined);
    get maxDeliverySeconds(): number;
    get sendingPoolName(): string;
    get tlsPolicy(): string;
}
export declare class DataAwsSesv2ConfigurationSetDeliveryOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetDeliveryOptionsOutputReference;
}
export interface DataAwsSesv2ConfigurationSetReputationOptions {
}
export declare function dataAwsSesv2ConfigurationSetReputationOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetReputationOptions): any;
export declare function dataAwsSesv2ConfigurationSetReputationOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetReputationOptions): any;
export declare class DataAwsSesv2ConfigurationSetReputationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetReputationOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetReputationOptions | undefined);
    get lastFreshStart(): string;
    get reputationMetricsEnabled(): cdktf.IResolvable;
}
export declare class DataAwsSesv2ConfigurationSetReputationOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetReputationOptionsOutputReference;
}
export interface DataAwsSesv2ConfigurationSetSendingOptions {
}
export declare function dataAwsSesv2ConfigurationSetSendingOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetSendingOptions): any;
export declare function dataAwsSesv2ConfigurationSetSendingOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetSendingOptions): any;
export declare class DataAwsSesv2ConfigurationSetSendingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetSendingOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetSendingOptions | undefined);
    get sendingEnabled(): cdktf.IResolvable;
}
export declare class DataAwsSesv2ConfigurationSetSendingOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetSendingOptionsOutputReference;
}
export interface DataAwsSesv2ConfigurationSetSuppressionOptions {
}
export declare function dataAwsSesv2ConfigurationSetSuppressionOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetSuppressionOptions): any;
export declare function dataAwsSesv2ConfigurationSetSuppressionOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetSuppressionOptions): any;
export declare class DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetSuppressionOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetSuppressionOptions | undefined);
    get suppressedReasons(): string[];
}
export declare class DataAwsSesv2ConfigurationSetSuppressionOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetSuppressionOptionsOutputReference;
}
export interface DataAwsSesv2ConfigurationSetTrackingOptions {
}
export declare function dataAwsSesv2ConfigurationSetTrackingOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetTrackingOptions): any;
export declare function dataAwsSesv2ConfigurationSetTrackingOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetTrackingOptions): any;
export declare class DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetTrackingOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetTrackingOptions | undefined);
    get customRedirectDomain(): string;
    get httpsPolicy(): string;
}
export declare class DataAwsSesv2ConfigurationSetTrackingOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetTrackingOptionsOutputReference;
}
export interface DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions {
}
export declare function dataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions): any;
export declare function dataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions): any;
export declare class DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptions | undefined);
    get engagementMetrics(): string;
}
export declare class DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsOutputReference;
}
export interface DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions {
}
export declare function dataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions): any;
export declare function dataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions): any;
export declare class DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptions | undefined);
    get optimizedSharedDelivery(): string;
}
export declare class DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsOutputReference;
}
export interface DataAwsSesv2ConfigurationSetVdmOptions {
}
export declare function dataAwsSesv2ConfigurationSetVdmOptionsToTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptions): any;
export declare function dataAwsSesv2ConfigurationSetVdmOptionsToHclTerraform(struct?: DataAwsSesv2ConfigurationSetVdmOptions): any;
export declare class DataAwsSesv2ConfigurationSetVdmOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2ConfigurationSetVdmOptions | undefined;
    set internalValue(value: DataAwsSesv2ConfigurationSetVdmOptions | undefined);
    private _dashboardOptions;
    get dashboardOptions(): DataAwsSesv2ConfigurationSetVdmOptionsDashboardOptionsList;
    private _guardianOptions;
    get guardianOptions(): DataAwsSesv2ConfigurationSetVdmOptionsGuardianOptionsList;
}
export declare class DataAwsSesv2ConfigurationSetVdmOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2ConfigurationSetVdmOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_configuration_set aws_sesv2_configuration_set}
*/
export declare class DataAwsSesv2ConfigurationSet extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_sesv2_configuration_set";
    /**
    * Generates CDKTF code for importing a DataAwsSesv2ConfigurationSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSesv2ConfigurationSet to import
    * @param importFromId The id of the existing DataAwsSesv2ConfigurationSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_configuration_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSesv2ConfigurationSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_configuration_set aws_sesv2_configuration_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSesv2ConfigurationSetConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSesv2ConfigurationSetConfig);
    get arn(): string;
    private _configurationSetName?;
    get configurationSetName(): string;
    set configurationSetName(value: string);
    get configurationSetNameInput(): string | undefined;
    private _deliveryOptions;
    get deliveryOptions(): DataAwsSesv2ConfigurationSetDeliveryOptionsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _reputationOptions;
    get reputationOptions(): DataAwsSesv2ConfigurationSetReputationOptionsList;
    private _sendingOptions;
    get sendingOptions(): DataAwsSesv2ConfigurationSetSendingOptionsList;
    private _suppressionOptions;
    get suppressionOptions(): DataAwsSesv2ConfigurationSetSuppressionOptionsList;
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
    private _trackingOptions;
    get trackingOptions(): DataAwsSesv2ConfigurationSetTrackingOptionsList;
    private _vdmOptions;
    get vdmOptions(): DataAwsSesv2ConfigurationSetVdmOptionsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
