/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsMountTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#file_system_id EfsMountTarget#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#id EfsMountTarget#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#ip_address EfsMountTarget#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#security_groups EfsMountTarget#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#subnet_id EfsMountTarget#subnet_id}
    */
    readonly subnetId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#timeouts EfsMountTarget#timeouts}
    */
    readonly timeouts?: EfsMountTargetTimeouts;
}
export interface EfsMountTargetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#create EfsMountTarget#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#delete EfsMountTarget#delete}
    */
    readonly delete?: string;
}
export declare function efsMountTargetTimeoutsToTerraform(struct?: EfsMountTargetTimeouts | cdktf.IResolvable): any;
export declare function efsMountTargetTimeoutsToHclTerraform(struct?: EfsMountTargetTimeouts | cdktf.IResolvable): any;
export declare class EfsMountTargetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsMountTargetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EfsMountTargetTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target aws_efs_mount_target}
*/
export declare class EfsMountTarget extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_efs_mount_target";
    /**
    * Generates CDKTF code for importing a EfsMountTarget resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EfsMountTarget to import
    * @param importFromId The id of the existing EfsMountTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EfsMountTarget to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_mount_target aws_efs_mount_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsMountTargetConfig
    */
    constructor(scope: Construct, id: string, config: EfsMountTargetConfig);
    get availabilityZoneId(): string;
    get availabilityZoneName(): string;
    get dnsName(): string;
    get fileSystemArn(): string;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    get fileSystemIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    resetIpAddress(): void;
    get ipAddressInput(): string | undefined;
    get mountTargetDnsName(): string;
    get networkInterfaceId(): string;
    get ownerId(): string;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): EfsMountTargetTimeoutsOutputReference;
    putTimeouts(value: EfsMountTargetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EfsMountTargetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
