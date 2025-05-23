/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpamScopeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#description VpcIpamScope#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#id VpcIpamScope#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#ipam_id VpcIpamScope#ipam_id}
    */
    readonly ipamId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#tags VpcIpamScope#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#tags_all VpcIpamScope#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#timeouts VpcIpamScope#timeouts}
    */
    readonly timeouts?: VpcIpamScopeTimeouts;
}
export interface VpcIpamScopeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#create VpcIpamScope#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#delete VpcIpamScope#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#update VpcIpamScope#update}
    */
    readonly update?: string;
}
export declare function vpcIpamScopeTimeoutsToTerraform(struct?: VpcIpamScopeTimeouts | cdktf.IResolvable): any;
export declare function vpcIpamScopeTimeoutsToHclTerraform(struct?: VpcIpamScopeTimeouts | cdktf.IResolvable): any;
export declare class VpcIpamScopeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcIpamScopeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcIpamScopeTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope aws_vpc_ipam_scope}
*/
export declare class VpcIpamScope extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipam_scope";
    /**
    * Generates CDKTF code for importing a VpcIpamScope resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpamScope to import
    * @param importFromId The id of the existing VpcIpamScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpamScope to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_scope aws_vpc_ipam_scope} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamScopeConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamScopeConfig);
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
    get ipamArn(): string;
    private _ipamId?;
    get ipamId(): string;
    set ipamId(value: string);
    get ipamIdInput(): string | undefined;
    get ipamScopeType(): string;
    get isDefault(): cdktf.IResolvable;
    get poolCount(): number;
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
    get timeouts(): VpcIpamScopeTimeoutsOutputReference;
    putTimeouts(value: VpcIpamScopeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcIpamScopeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
