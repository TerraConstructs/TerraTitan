/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#cascade VpcIpam#cascade}
    */
    readonly cascade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#description VpcIpam#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#enable_private_gua VpcIpam#enable_private_gua}
    */
    readonly enablePrivateGua?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#id VpcIpam#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#tags VpcIpam#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#tags_all VpcIpam#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#tier VpcIpam#tier}
    */
    readonly tier?: string;
    /**
    * operating_regions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#operating_regions VpcIpam#operating_regions}
    */
    readonly operatingRegions: VpcIpamOperatingRegions[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#timeouts VpcIpam#timeouts}
    */
    readonly timeouts?: VpcIpamTimeouts;
}
export interface VpcIpamOperatingRegions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#region_name VpcIpam#region_name}
    */
    readonly regionName: string;
}
export declare function vpcIpamOperatingRegionsToTerraform(struct?: VpcIpamOperatingRegions | cdktf.IResolvable): any;
export declare function vpcIpamOperatingRegionsToHclTerraform(struct?: VpcIpamOperatingRegions | cdktf.IResolvable): any;
export declare class VpcIpamOperatingRegionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpcIpamOperatingRegions | cdktf.IResolvable | undefined;
    set internalValue(value: VpcIpamOperatingRegions | cdktf.IResolvable | undefined);
    private _regionName?;
    get regionName(): string;
    set regionName(value: string);
    get regionNameInput(): string | undefined;
}
export declare class VpcIpamOperatingRegionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpcIpamOperatingRegions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpcIpamOperatingRegionsOutputReference;
}
export interface VpcIpamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#create VpcIpam#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#delete VpcIpam#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#update VpcIpam#update}
    */
    readonly update?: string;
}
export declare function vpcIpamTimeoutsToTerraform(struct?: VpcIpamTimeouts | cdktf.IResolvable): any;
export declare function vpcIpamTimeoutsToHclTerraform(struct?: VpcIpamTimeouts | cdktf.IResolvable): any;
export declare class VpcIpamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcIpamTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcIpamTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam aws_vpc_ipam}
*/
export declare class VpcIpam extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipam";
    /**
    * Generates CDKTF code for importing a VpcIpam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpam to import
    * @param importFromId The id of the existing VpcIpam that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpam to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam aws_vpc_ipam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamConfig);
    get arn(): string;
    private _cascade?;
    get cascade(): boolean | cdktf.IResolvable;
    set cascade(value: boolean | cdktf.IResolvable);
    resetCascade(): void;
    get cascadeInput(): boolean | cdktf.IResolvable | undefined;
    get defaultResourceDiscoveryAssociationId(): string;
    get defaultResourceDiscoveryId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enablePrivateGua?;
    get enablePrivateGua(): boolean | cdktf.IResolvable;
    set enablePrivateGua(value: boolean | cdktf.IResolvable);
    resetEnablePrivateGua(): void;
    get enablePrivateGuaInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get privateDefaultScopeId(): string;
    get publicDefaultScopeId(): string;
    get scopeCount(): number;
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
    private _tier?;
    get tier(): string;
    set tier(value: string);
    resetTier(): void;
    get tierInput(): string | undefined;
    private _operatingRegions;
    get operatingRegions(): VpcIpamOperatingRegionsList;
    putOperatingRegions(value: VpcIpamOperatingRegions[] | cdktf.IResolvable): void;
    get operatingRegionsInput(): cdktf.IResolvable | VpcIpamOperatingRegions[] | undefined;
    private _timeouts;
    get timeouts(): VpcIpamTimeoutsOutputReference;
    putTimeouts(value: VpcIpamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcIpamTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
