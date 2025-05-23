/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpclatticeListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_listener#id DataAwsVpclatticeListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_listener#listener_identifier DataAwsVpclatticeListener#listener_identifier}
    */
    readonly listenerIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_listener#service_identifier DataAwsVpclatticeListener#service_identifier}
    */
    readonly serviceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_listener#tags DataAwsVpclatticeListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsVpclatticeListenerDefaultActionFixedResponse {
}
export declare function dataAwsVpclatticeListenerDefaultActionFixedResponseToTerraform(struct?: DataAwsVpclatticeListenerDefaultActionFixedResponse): any;
export declare function dataAwsVpclatticeListenerDefaultActionFixedResponseToHclTerraform(struct?: DataAwsVpclatticeListenerDefaultActionFixedResponse): any;
export declare class DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpclatticeListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: DataAwsVpclatticeListenerDefaultActionFixedResponse | undefined);
    get statusCode(): number;
}
export declare class DataAwsVpclatticeListenerDefaultActionFixedResponseList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpclatticeListenerDefaultActionFixedResponseOutputReference;
}
export interface DataAwsVpclatticeListenerDefaultActionForwardTargetGroups {
}
export declare function dataAwsVpclatticeListenerDefaultActionForwardTargetGroupsToTerraform(struct?: DataAwsVpclatticeListenerDefaultActionForwardTargetGroups): any;
export declare function dataAwsVpclatticeListenerDefaultActionForwardTargetGroupsToHclTerraform(struct?: DataAwsVpclatticeListenerDefaultActionForwardTargetGroups): any;
export declare class DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpclatticeListenerDefaultActionForwardTargetGroups | undefined;
    set internalValue(value: DataAwsVpclatticeListenerDefaultActionForwardTargetGroups | undefined);
    get targetGroupIdentifier(): string;
    get weight(): number;
}
export declare class DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsOutputReference;
}
export interface DataAwsVpclatticeListenerDefaultActionForward {
}
export declare function dataAwsVpclatticeListenerDefaultActionForwardToTerraform(struct?: DataAwsVpclatticeListenerDefaultActionForward): any;
export declare function dataAwsVpclatticeListenerDefaultActionForwardToHclTerraform(struct?: DataAwsVpclatticeListenerDefaultActionForward): any;
export declare class DataAwsVpclatticeListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpclatticeListenerDefaultActionForward | undefined;
    set internalValue(value: DataAwsVpclatticeListenerDefaultActionForward | undefined);
    private _targetGroups;
    get targetGroups(): DataAwsVpclatticeListenerDefaultActionForwardTargetGroupsList;
}
export declare class DataAwsVpclatticeListenerDefaultActionForwardList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpclatticeListenerDefaultActionForwardOutputReference;
}
export interface DataAwsVpclatticeListenerDefaultAction {
}
export declare function dataAwsVpclatticeListenerDefaultActionToTerraform(struct?: DataAwsVpclatticeListenerDefaultAction): any;
export declare function dataAwsVpclatticeListenerDefaultActionToHclTerraform(struct?: DataAwsVpclatticeListenerDefaultAction): any;
export declare class DataAwsVpclatticeListenerDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpclatticeListenerDefaultAction | undefined;
    set internalValue(value: DataAwsVpclatticeListenerDefaultAction | undefined);
    private _fixedResponse;
    get fixedResponse(): DataAwsVpclatticeListenerDefaultActionFixedResponseList;
    private _forward;
    get forward(): DataAwsVpclatticeListenerDefaultActionForwardList;
}
export declare class DataAwsVpclatticeListenerDefaultActionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpclatticeListenerDefaultActionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_listener aws_vpclattice_listener}
*/
export declare class DataAwsVpclatticeListener extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpclattice_listener";
    /**
    * Generates CDKTF code for importing a DataAwsVpclatticeListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpclatticeListener to import
    * @param importFromId The id of the existing DataAwsVpclatticeListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpclatticeListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpclattice_listener aws_vpclattice_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpclatticeListenerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsVpclatticeListenerConfig);
    get arn(): string;
    get createdAt(): string;
    private _defaultAction;
    get defaultAction(): DataAwsVpclatticeListenerDefaultActionList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedAt(): string;
    get listenerId(): string;
    private _listenerIdentifier?;
    get listenerIdentifier(): string;
    set listenerIdentifier(value: string);
    get listenerIdentifierInput(): string | undefined;
    get name(): string;
    get port(): number;
    get protocol(): string;
    get serviceArn(): string;
    get serviceId(): string;
    private _serviceIdentifier?;
    get serviceIdentifier(): string;
    set serviceIdentifier(value: string);
    get serviceIdentifierInput(): string | undefined;
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
