/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#id VpclatticeListener#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#name VpclatticeListener#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#port VpclatticeListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#protocol VpclatticeListener#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#service_arn VpclatticeListener#service_arn}
    */
    readonly serviceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#service_identifier VpclatticeListener#service_identifier}
    */
    readonly serviceIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#tags VpclatticeListener#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#tags_all VpclatticeListener#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * default_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#default_action VpclatticeListener#default_action}
    */
    readonly defaultAction: VpclatticeListenerDefaultAction;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#timeouts VpclatticeListener#timeouts}
    */
    readonly timeouts?: VpclatticeListenerTimeouts;
}
export interface VpclatticeListenerDefaultActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#status_code VpclatticeListener#status_code}
    */
    readonly statusCode: number;
}
export declare function vpclatticeListenerDefaultActionFixedResponseToTerraform(struct?: VpclatticeListenerDefaultActionFixedResponseOutputReference | VpclatticeListenerDefaultActionFixedResponse): any;
export declare function vpclatticeListenerDefaultActionFixedResponseToHclTerraform(struct?: VpclatticeListenerDefaultActionFixedResponseOutputReference | VpclatticeListenerDefaultActionFixedResponse): any;
export declare class VpclatticeListenerDefaultActionFixedResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerDefaultActionFixedResponse | undefined;
    set internalValue(value: VpclatticeListenerDefaultActionFixedResponse | undefined);
    private _statusCode?;
    get statusCode(): number;
    set statusCode(value: number);
    get statusCodeInput(): number | undefined;
}
export interface VpclatticeListenerDefaultActionForwardTargetGroups {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#target_group_identifier VpclatticeListener#target_group_identifier}
    */
    readonly targetGroupIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#weight VpclatticeListener#weight}
    */
    readonly weight?: number;
}
export declare function vpclatticeListenerDefaultActionForwardTargetGroupsToTerraform(struct?: VpclatticeListenerDefaultActionForwardTargetGroups | cdktf.IResolvable): any;
export declare function vpclatticeListenerDefaultActionForwardTargetGroupsToHclTerraform(struct?: VpclatticeListenerDefaultActionForwardTargetGroups | cdktf.IResolvable): any;
export declare class VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeListenerDefaultActionForwardTargetGroups | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeListenerDefaultActionForwardTargetGroups | cdktf.IResolvable | undefined);
    private _targetGroupIdentifier?;
    get targetGroupIdentifier(): string;
    set targetGroupIdentifier(value: string);
    resetTargetGroupIdentifier(): void;
    get targetGroupIdentifierInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class VpclatticeListenerDefaultActionForwardTargetGroupsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeListenerDefaultActionForwardTargetGroups[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeListenerDefaultActionForwardTargetGroupsOutputReference;
}
export interface VpclatticeListenerDefaultActionForward {
    /**
    * target_groups block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#target_groups VpclatticeListener#target_groups}
    */
    readonly targetGroups?: VpclatticeListenerDefaultActionForwardTargetGroups[] | cdktf.IResolvable;
}
export declare function vpclatticeListenerDefaultActionForwardToTerraform(struct?: VpclatticeListenerDefaultActionForward | cdktf.IResolvable): any;
export declare function vpclatticeListenerDefaultActionForwardToHclTerraform(struct?: VpclatticeListenerDefaultActionForward | cdktf.IResolvable): any;
export declare class VpclatticeListenerDefaultActionForwardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeListenerDefaultActionForward | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeListenerDefaultActionForward | cdktf.IResolvable | undefined);
    private _targetGroups;
    get targetGroups(): VpclatticeListenerDefaultActionForwardTargetGroupsList;
    putTargetGroups(value: VpclatticeListenerDefaultActionForwardTargetGroups[] | cdktf.IResolvable): void;
    resetTargetGroups(): void;
    get targetGroupsInput(): cdktf.IResolvable | VpclatticeListenerDefaultActionForwardTargetGroups[] | undefined;
}
export declare class VpclatticeListenerDefaultActionForwardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeListenerDefaultActionForward[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeListenerDefaultActionForwardOutputReference;
}
export interface VpclatticeListenerDefaultAction {
    /**
    * fixed_response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#fixed_response VpclatticeListener#fixed_response}
    */
    readonly fixedResponse?: VpclatticeListenerDefaultActionFixedResponse;
    /**
    * forward block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#forward VpclatticeListener#forward}
    */
    readonly forward?: VpclatticeListenerDefaultActionForward[] | cdktf.IResolvable;
}
export declare function vpclatticeListenerDefaultActionToTerraform(struct?: VpclatticeListenerDefaultActionOutputReference | VpclatticeListenerDefaultAction): any;
export declare function vpclatticeListenerDefaultActionToHclTerraform(struct?: VpclatticeListenerDefaultActionOutputReference | VpclatticeListenerDefaultAction): any;
export declare class VpclatticeListenerDefaultActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerDefaultAction | undefined;
    set internalValue(value: VpclatticeListenerDefaultAction | undefined);
    private _fixedResponse;
    get fixedResponse(): VpclatticeListenerDefaultActionFixedResponseOutputReference;
    putFixedResponse(value: VpclatticeListenerDefaultActionFixedResponse): void;
    resetFixedResponse(): void;
    get fixedResponseInput(): VpclatticeListenerDefaultActionFixedResponse | undefined;
    private _forward;
    get forward(): VpclatticeListenerDefaultActionForwardList;
    putForward(value: VpclatticeListenerDefaultActionForward[] | cdktf.IResolvable): void;
    resetForward(): void;
    get forwardInput(): cdktf.IResolvable | VpclatticeListenerDefaultActionForward[] | undefined;
}
export interface VpclatticeListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#create VpclatticeListener#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#delete VpclatticeListener#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#update VpclatticeListener#update}
    */
    readonly update?: string;
}
export declare function vpclatticeListenerTimeoutsToTerraform(struct?: VpclatticeListenerTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeListenerTimeoutsToHclTerraform(struct?: VpclatticeListenerTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeListenerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeListenerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener aws_vpclattice_listener}
*/
export declare class VpclatticeListener extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_listener";
    /**
    * Generates CDKTF code for importing a VpclatticeListener resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeListener to import
    * @param importFromId The id of the existing VpclatticeListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeListener to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_listener aws_vpclattice_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeListenerConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeListenerConfig);
    get arn(): string;
    get createdAt(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedAt(): string;
    get listenerId(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _serviceArn?;
    get serviceArn(): string;
    set serviceArn(value: string);
    resetServiceArn(): void;
    get serviceArnInput(): string | undefined;
    private _serviceIdentifier?;
    get serviceIdentifier(): string;
    set serviceIdentifier(value: string);
    resetServiceIdentifier(): void;
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
    private _defaultAction;
    get defaultAction(): VpclatticeListenerDefaultActionOutputReference;
    putDefaultAction(value: VpclatticeListenerDefaultAction): void;
    get defaultActionInput(): VpclatticeListenerDefaultAction | undefined;
    private _timeouts;
    get timeouts(): VpclatticeListenerTimeoutsOutputReference;
    putTimeouts(value: VpclatticeListenerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeListenerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
