/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2HostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#asset_id Ec2Host#asset_id}
    */
    readonly assetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#auto_placement Ec2Host#auto_placement}
    */
    readonly autoPlacement?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#availability_zone Ec2Host#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#host_recovery Ec2Host#host_recovery}
    */
    readonly hostRecovery?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#id Ec2Host#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#instance_family Ec2Host#instance_family}
    */
    readonly instanceFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#instance_type Ec2Host#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#outpost_arn Ec2Host#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#tags Ec2Host#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#tags_all Ec2Host#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#timeouts Ec2Host#timeouts}
    */
    readonly timeouts?: Ec2HostTimeouts;
}
export interface Ec2HostTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#create Ec2Host#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#delete Ec2Host#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#update Ec2Host#update}
    */
    readonly update?: string;
}
export declare function ec2HostTimeoutsToTerraform(struct?: Ec2HostTimeouts | cdktf.IResolvable): any;
export declare function ec2HostTimeoutsToHclTerraform(struct?: Ec2HostTimeouts | cdktf.IResolvable): any;
export declare class Ec2HostTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2HostTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2HostTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host aws_ec2_host}
*/
export declare class Ec2Host extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_host";
    /**
    * Generates CDKTF code for importing a Ec2Host resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2Host to import
    * @param importFromId The id of the existing Ec2Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2Host to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_host aws_ec2_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2HostConfig
    */
    constructor(scope: Construct, id: string, config: Ec2HostConfig);
    get arn(): string;
    private _assetId?;
    get assetId(): string;
    set assetId(value: string);
    resetAssetId(): void;
    get assetIdInput(): string | undefined;
    private _autoPlacement?;
    get autoPlacement(): string;
    set autoPlacement(value: string);
    resetAutoPlacement(): void;
    get autoPlacementInput(): string | undefined;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string | undefined;
    private _hostRecovery?;
    get hostRecovery(): string;
    set hostRecovery(value: string);
    resetHostRecovery(): void;
    get hostRecoveryInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceFamily?;
    get instanceFamily(): string;
    set instanceFamily(value: string);
    resetInstanceFamily(): void;
    get instanceFamilyInput(): string | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): Ec2HostTimeoutsOutputReference;
    putTimeouts(value: Ec2HostTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2HostTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
