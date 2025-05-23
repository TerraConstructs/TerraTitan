/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FinspaceKxVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#availability_zones FinspaceKxVolume#availability_zones}
    */
    readonly availabilityZones: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#az_mode FinspaceKxVolume#az_mode}
    */
    readonly azMode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#description FinspaceKxVolume#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#environment_id FinspaceKxVolume#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#id FinspaceKxVolume#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#name FinspaceKxVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#tags FinspaceKxVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#tags_all FinspaceKxVolume#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}
    */
    readonly type: string;
    /**
    * nas1_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#nas1_configuration FinspaceKxVolume#nas1_configuration}
    */
    readonly nas1Configuration?: FinspaceKxVolumeNas1Configuration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#timeouts FinspaceKxVolume#timeouts}
    */
    readonly timeouts?: FinspaceKxVolumeTimeouts;
}
export interface FinspaceKxVolumeAttachedClusters {
}
export declare function finspaceKxVolumeAttachedClustersToTerraform(struct?: FinspaceKxVolumeAttachedClusters): any;
export declare function finspaceKxVolumeAttachedClustersToHclTerraform(struct?: FinspaceKxVolumeAttachedClusters): any;
export declare class FinspaceKxVolumeAttachedClustersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxVolumeAttachedClusters | undefined;
    set internalValue(value: FinspaceKxVolumeAttachedClusters | undefined);
    get clusterName(): string;
    get clusterStatus(): string;
    get clusterType(): string;
}
export declare class FinspaceKxVolumeAttachedClustersList extends cdktf.ComplexList {
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
    get(index: number): FinspaceKxVolumeAttachedClustersOutputReference;
}
export interface FinspaceKxVolumeNas1Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#size FinspaceKxVolume#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#type FinspaceKxVolume#type}
    */
    readonly type: string;
}
export declare function finspaceKxVolumeNas1ConfigurationToTerraform(struct?: FinspaceKxVolumeNas1Configuration | cdktf.IResolvable): any;
export declare function finspaceKxVolumeNas1ConfigurationToHclTerraform(struct?: FinspaceKxVolumeNas1Configuration | cdktf.IResolvable): any;
export declare class FinspaceKxVolumeNas1ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxVolumeNas1Configuration | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxVolumeNas1Configuration | cdktf.IResolvable | undefined);
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class FinspaceKxVolumeNas1ConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxVolumeNas1Configuration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxVolumeNas1ConfigurationOutputReference;
}
export interface FinspaceKxVolumeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#create FinspaceKxVolume#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#delete FinspaceKxVolume#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#update FinspaceKxVolume#update}
    */
    readonly update?: string;
}
export declare function finspaceKxVolumeTimeoutsToTerraform(struct?: FinspaceKxVolumeTimeouts | cdktf.IResolvable): any;
export declare function finspaceKxVolumeTimeoutsToHclTerraform(struct?: FinspaceKxVolumeTimeouts | cdktf.IResolvable): any;
export declare class FinspaceKxVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxVolumeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxVolumeTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume aws_finspace_kx_volume}
*/
export declare class FinspaceKxVolume extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_finspace_kx_volume";
    /**
    * Generates CDKTF code for importing a FinspaceKxVolume resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FinspaceKxVolume to import
    * @param importFromId The id of the existing FinspaceKxVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FinspaceKxVolume to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_volume aws_finspace_kx_volume} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FinspaceKxVolumeConfig
    */
    constructor(scope: Construct, id: string, config: FinspaceKxVolumeConfig);
    get arn(): string;
    private _attachedClusters;
    get attachedClusters(): FinspaceKxVolumeAttachedClustersList;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    get availabilityZonesInput(): string[] | undefined;
    private _azMode?;
    get azMode(): string;
    set azMode(value: string);
    get azModeInput(): string | undefined;
    get createdTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
    get statusReason(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _nas1Configuration;
    get nas1Configuration(): FinspaceKxVolumeNas1ConfigurationList;
    putNas1Configuration(value: FinspaceKxVolumeNas1Configuration[] | cdktf.IResolvable): void;
    resetNas1Configuration(): void;
    get nas1ConfigurationInput(): cdktf.IResolvable | FinspaceKxVolumeNas1Configuration[] | undefined;
    private _timeouts;
    get timeouts(): FinspaceKxVolumeTimeoutsOutputReference;
    putTimeouts(value: FinspaceKxVolumeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FinspaceKxVolumeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
