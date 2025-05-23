/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpamPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#address_family VpcIpamPool#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#allocation_default_netmask_length VpcIpamPool#allocation_default_netmask_length}
    */
    readonly allocationDefaultNetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#allocation_max_netmask_length VpcIpamPool#allocation_max_netmask_length}
    */
    readonly allocationMaxNetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#allocation_min_netmask_length VpcIpamPool#allocation_min_netmask_length}
    */
    readonly allocationMinNetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#allocation_resource_tags VpcIpamPool#allocation_resource_tags}
    */
    readonly allocationResourceTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#auto_import VpcIpamPool#auto_import}
    */
    readonly autoImport?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#aws_service VpcIpamPool#aws_service}
    */
    readonly awsService?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#cascade VpcIpamPool#cascade}
    */
    readonly cascade?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#description VpcIpamPool#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#id VpcIpamPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#ipam_scope_id VpcIpamPool#ipam_scope_id}
    */
    readonly ipamScopeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#locale VpcIpamPool#locale}
    */
    readonly locale?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#public_ip_source VpcIpamPool#public_ip_source}
    */
    readonly publicIpSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#publicly_advertisable VpcIpamPool#publicly_advertisable}
    */
    readonly publiclyAdvertisable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#source_ipam_pool_id VpcIpamPool#source_ipam_pool_id}
    */
    readonly sourceIpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#tags VpcIpamPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#tags_all VpcIpamPool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#timeouts VpcIpamPool#timeouts}
    */
    readonly timeouts?: VpcIpamPoolTimeouts;
}
export interface VpcIpamPoolTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#create VpcIpamPool#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#delete VpcIpamPool#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#update VpcIpamPool#update}
    */
    readonly update?: string;
}
export declare function vpcIpamPoolTimeoutsToTerraform(struct?: VpcIpamPoolTimeouts | cdktf.IResolvable): any;
export declare function vpcIpamPoolTimeoutsToHclTerraform(struct?: VpcIpamPoolTimeouts | cdktf.IResolvable): any;
export declare class VpcIpamPoolTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcIpamPoolTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcIpamPoolTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool aws_vpc_ipam_pool}
*/
export declare class VpcIpamPool extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipam_pool";
    /**
    * Generates CDKTF code for importing a VpcIpamPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpamPool to import
    * @param importFromId The id of the existing VpcIpamPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpamPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool aws_vpc_ipam_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPoolConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamPoolConfig);
    private _addressFamily?;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string | undefined;
    private _allocationDefaultNetmaskLength?;
    get allocationDefaultNetmaskLength(): number;
    set allocationDefaultNetmaskLength(value: number);
    resetAllocationDefaultNetmaskLength(): void;
    get allocationDefaultNetmaskLengthInput(): number | undefined;
    private _allocationMaxNetmaskLength?;
    get allocationMaxNetmaskLength(): number;
    set allocationMaxNetmaskLength(value: number);
    resetAllocationMaxNetmaskLength(): void;
    get allocationMaxNetmaskLengthInput(): number | undefined;
    private _allocationMinNetmaskLength?;
    get allocationMinNetmaskLength(): number;
    set allocationMinNetmaskLength(value: number);
    resetAllocationMinNetmaskLength(): void;
    get allocationMinNetmaskLengthInput(): number | undefined;
    private _allocationResourceTags?;
    get allocationResourceTags(): {
        [key: string]: string;
    };
    set allocationResourceTags(value: {
        [key: string]: string;
    });
    resetAllocationResourceTags(): void;
    get allocationResourceTagsInput(): {
        [key: string]: string;
    } | undefined;
    get arn(): string;
    private _autoImport?;
    get autoImport(): boolean | cdktf.IResolvable;
    set autoImport(value: boolean | cdktf.IResolvable);
    resetAutoImport(): void;
    get autoImportInput(): boolean | cdktf.IResolvable | undefined;
    private _awsService?;
    get awsService(): string;
    set awsService(value: string);
    resetAwsService(): void;
    get awsServiceInput(): string | undefined;
    private _cascade?;
    get cascade(): boolean | cdktf.IResolvable;
    set cascade(value: boolean | cdktf.IResolvable);
    resetCascade(): void;
    get cascadeInput(): boolean | cdktf.IResolvable | undefined;
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
    private _ipamScopeId?;
    get ipamScopeId(): string;
    set ipamScopeId(value: string);
    get ipamScopeIdInput(): string | undefined;
    get ipamScopeType(): string;
    private _locale?;
    get locale(): string;
    set locale(value: string);
    resetLocale(): void;
    get localeInput(): string | undefined;
    get poolDepth(): number;
    private _publicIpSource?;
    get publicIpSource(): string;
    set publicIpSource(value: string);
    resetPublicIpSource(): void;
    get publicIpSourceInput(): string | undefined;
    private _publiclyAdvertisable?;
    get publiclyAdvertisable(): boolean | cdktf.IResolvable;
    set publiclyAdvertisable(value: boolean | cdktf.IResolvable);
    resetPubliclyAdvertisable(): void;
    get publiclyAdvertisableInput(): boolean | cdktf.IResolvable | undefined;
    private _sourceIpamPoolId?;
    get sourceIpamPoolId(): string;
    set sourceIpamPoolId(value: string);
    resetSourceIpamPoolId(): void;
    get sourceIpamPoolIdInput(): string | undefined;
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
    get timeouts(): VpcIpamPoolTimeoutsOutputReference;
    putTimeouts(value: VpcIpamPoolTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcIpamPoolTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
