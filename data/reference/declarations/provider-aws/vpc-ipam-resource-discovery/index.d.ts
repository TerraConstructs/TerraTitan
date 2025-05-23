/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpamResourceDiscoveryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#description VpcIpamResourceDiscovery#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#id VpcIpamResourceDiscovery#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#tags VpcIpamResourceDiscovery#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#tags_all VpcIpamResourceDiscovery#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * operating_regions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#operating_regions VpcIpamResourceDiscovery#operating_regions}
    */
    readonly operatingRegions: VpcIpamResourceDiscoveryOperatingRegions[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#timeouts VpcIpamResourceDiscovery#timeouts}
    */
    readonly timeouts?: VpcIpamResourceDiscoveryTimeouts;
}
export interface VpcIpamResourceDiscoveryOperatingRegions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#region_name VpcIpamResourceDiscovery#region_name}
    */
    readonly regionName: string;
}
export declare function vpcIpamResourceDiscoveryOperatingRegionsToTerraform(struct?: VpcIpamResourceDiscoveryOperatingRegions | cdktf.IResolvable): any;
export declare function vpcIpamResourceDiscoveryOperatingRegionsToHclTerraform(struct?: VpcIpamResourceDiscoveryOperatingRegions | cdktf.IResolvable): any;
export declare class VpcIpamResourceDiscoveryOperatingRegionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpcIpamResourceDiscoveryOperatingRegions | cdktf.IResolvable | undefined;
    set internalValue(value: VpcIpamResourceDiscoveryOperatingRegions | cdktf.IResolvable | undefined);
    private _regionName?;
    get regionName(): string;
    set regionName(value: string);
    get regionNameInput(): string | undefined;
}
export declare class VpcIpamResourceDiscoveryOperatingRegionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpcIpamResourceDiscoveryOperatingRegions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpcIpamResourceDiscoveryOperatingRegionsOutputReference;
}
export interface VpcIpamResourceDiscoveryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#create VpcIpamResourceDiscovery#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#delete VpcIpamResourceDiscovery#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#update VpcIpamResourceDiscovery#update}
    */
    readonly update?: string;
}
export declare function vpcIpamResourceDiscoveryTimeoutsToTerraform(struct?: VpcIpamResourceDiscoveryTimeouts | cdktf.IResolvable): any;
export declare function vpcIpamResourceDiscoveryTimeoutsToHclTerraform(struct?: VpcIpamResourceDiscoveryTimeouts | cdktf.IResolvable): any;
export declare class VpcIpamResourceDiscoveryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcIpamResourceDiscoveryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcIpamResourceDiscoveryTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery aws_vpc_ipam_resource_discovery}
*/
export declare class VpcIpamResourceDiscovery extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipam_resource_discovery";
    /**
    * Generates CDKTF code for importing a VpcIpamResourceDiscovery resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpamResourceDiscovery to import
    * @param importFromId The id of the existing VpcIpamResourceDiscovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpamResourceDiscovery to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_resource_discovery aws_vpc_ipam_resource_discovery} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamResourceDiscoveryConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamResourceDiscoveryConfig);
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
    get ipamResourceDiscoveryRegion(): string;
    get isDefault(): cdktf.IResolvable;
    get ownerId(): string;
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
    private _operatingRegions;
    get operatingRegions(): VpcIpamResourceDiscoveryOperatingRegionsList;
    putOperatingRegions(value: VpcIpamResourceDiscoveryOperatingRegions[] | cdktf.IResolvable): void;
    get operatingRegionsInput(): cdktf.IResolvable | VpcIpamResourceDiscoveryOperatingRegions[] | undefined;
    private _timeouts;
    get timeouts(): VpcIpamResourceDiscoveryTimeoutsOutputReference;
    putTimeouts(value: VpcIpamResourceDiscoveryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcIpamResourceDiscoveryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
