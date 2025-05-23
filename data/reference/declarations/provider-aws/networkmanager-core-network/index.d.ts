/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkmanagerCoreNetworkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#base_policy_document NetworkmanagerCoreNetwork#base_policy_document}
    */
    readonly basePolicyDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#base_policy_region NetworkmanagerCoreNetwork#base_policy_region}
    */
    readonly basePolicyRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#base_policy_regions NetworkmanagerCoreNetwork#base_policy_regions}
    */
    readonly basePolicyRegions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#create_base_policy NetworkmanagerCoreNetwork#create_base_policy}
    */
    readonly createBasePolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#description NetworkmanagerCoreNetwork#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#global_network_id NetworkmanagerCoreNetwork#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#id NetworkmanagerCoreNetwork#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#tags NetworkmanagerCoreNetwork#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#tags_all NetworkmanagerCoreNetwork#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#timeouts NetworkmanagerCoreNetwork#timeouts}
    */
    readonly timeouts?: NetworkmanagerCoreNetworkTimeouts;
}
export interface NetworkmanagerCoreNetworkEdges {
}
export declare function networkmanagerCoreNetworkEdgesToTerraform(struct?: NetworkmanagerCoreNetworkEdges): any;
export declare function networkmanagerCoreNetworkEdgesToHclTerraform(struct?: NetworkmanagerCoreNetworkEdges): any;
export declare class NetworkmanagerCoreNetworkEdgesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkmanagerCoreNetworkEdges | undefined;
    set internalValue(value: NetworkmanagerCoreNetworkEdges | undefined);
    get asn(): number;
    get edgeLocation(): string;
    get insideCidrBlocks(): string[];
}
export declare class NetworkmanagerCoreNetworkEdgesList extends cdktf.ComplexList {
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
    get(index: number): NetworkmanagerCoreNetworkEdgesOutputReference;
}
export interface NetworkmanagerCoreNetworkSegments {
}
export declare function networkmanagerCoreNetworkSegmentsToTerraform(struct?: NetworkmanagerCoreNetworkSegments): any;
export declare function networkmanagerCoreNetworkSegmentsToHclTerraform(struct?: NetworkmanagerCoreNetworkSegments): any;
export declare class NetworkmanagerCoreNetworkSegmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): NetworkmanagerCoreNetworkSegments | undefined;
    set internalValue(value: NetworkmanagerCoreNetworkSegments | undefined);
    get edgeLocations(): string[];
    get name(): string;
    get sharedSegments(): string[];
}
export declare class NetworkmanagerCoreNetworkSegmentsList extends cdktf.ComplexList {
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
    get(index: number): NetworkmanagerCoreNetworkSegmentsOutputReference;
}
export interface NetworkmanagerCoreNetworkTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#create NetworkmanagerCoreNetwork#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#delete NetworkmanagerCoreNetwork#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#update NetworkmanagerCoreNetwork#update}
    */
    readonly update?: string;
}
export declare function networkmanagerCoreNetworkTimeoutsToTerraform(struct?: NetworkmanagerCoreNetworkTimeouts | cdktf.IResolvable): any;
export declare function networkmanagerCoreNetworkTimeoutsToHclTerraform(struct?: NetworkmanagerCoreNetworkTimeouts | cdktf.IResolvable): any;
export declare class NetworkmanagerCoreNetworkTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): NetworkmanagerCoreNetworkTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: NetworkmanagerCoreNetworkTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network aws_networkmanager_core_network}
*/
export declare class NetworkmanagerCoreNetwork extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_networkmanager_core_network";
    /**
    * Generates CDKTF code for importing a NetworkmanagerCoreNetwork resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkmanagerCoreNetwork to import
    * @param importFromId The id of the existing NetworkmanagerCoreNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkmanagerCoreNetwork to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/networkmanager_core_network aws_networkmanager_core_network} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkmanagerCoreNetworkConfig
    */
    constructor(scope: Construct, id: string, config: NetworkmanagerCoreNetworkConfig);
    get arn(): string;
    private _basePolicyDocument?;
    get basePolicyDocument(): string;
    set basePolicyDocument(value: string);
    resetBasePolicyDocument(): void;
    get basePolicyDocumentInput(): string | undefined;
    private _basePolicyRegion?;
    get basePolicyRegion(): string;
    set basePolicyRegion(value: string);
    resetBasePolicyRegion(): void;
    get basePolicyRegionInput(): string | undefined;
    private _basePolicyRegions?;
    get basePolicyRegions(): string[];
    set basePolicyRegions(value: string[]);
    resetBasePolicyRegions(): void;
    get basePolicyRegionsInput(): string[] | undefined;
    private _createBasePolicy?;
    get createBasePolicy(): boolean | cdktf.IResolvable;
    set createBasePolicy(value: boolean | cdktf.IResolvable);
    resetCreateBasePolicy(): void;
    get createBasePolicyInput(): boolean | cdktf.IResolvable | undefined;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _edges;
    get edges(): NetworkmanagerCoreNetworkEdgesList;
    private _globalNetworkId?;
    get globalNetworkId(): string;
    set globalNetworkId(value: string);
    get globalNetworkIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _segments;
    get segments(): NetworkmanagerCoreNetworkSegmentsList;
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
    get timeouts(): NetworkmanagerCoreNetworkTimeoutsOutputReference;
    putTimeouts(value: NetworkmanagerCoreNetworkTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | NetworkmanagerCoreNetworkTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
