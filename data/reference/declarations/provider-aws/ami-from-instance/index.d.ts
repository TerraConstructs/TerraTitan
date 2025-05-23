/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmiFromInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#deprecation_time AmiFromInstance#deprecation_time}
    */
    readonly deprecationTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#description AmiFromInstance#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#id AmiFromInstance#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#name AmiFromInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#snapshot_without_reboot AmiFromInstance#snapshot_without_reboot}
    */
    readonly snapshotWithoutReboot?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#source_instance_id AmiFromInstance#source_instance_id}
    */
    readonly sourceInstanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#tags AmiFromInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#tags_all AmiFromInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#ebs_block_device AmiFromInstance#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiFromInstanceEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#ephemeral_block_device AmiFromInstance#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiFromInstanceEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#timeouts AmiFromInstance#timeouts}
    */
    readonly timeouts?: AmiFromInstanceTimeouts;
}
export interface AmiFromInstanceEbsBlockDevice {
}
export declare function amiFromInstanceEbsBlockDeviceToTerraform(struct?: AmiFromInstanceEbsBlockDevice | cdktf.IResolvable): any;
export declare function amiFromInstanceEbsBlockDeviceToHclTerraform(struct?: AmiFromInstanceEbsBlockDevice | cdktf.IResolvable): any;
export declare class AmiFromInstanceEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmiFromInstanceEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: AmiFromInstanceEbsBlockDevice | cdktf.IResolvable | undefined);
    get deleteOnTermination(): cdktf.IResolvable;
    get deviceName(): string;
    get encrypted(): cdktf.IResolvable;
    get iops(): number;
    get outpostArn(): string;
    get snapshotId(): string;
    get throughput(): number;
    get volumeSize(): number;
    get volumeType(): string;
}
export declare class AmiFromInstanceEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmiFromInstanceEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmiFromInstanceEbsBlockDeviceOutputReference;
}
export interface AmiFromInstanceEphemeralBlockDevice {
}
export declare function amiFromInstanceEphemeralBlockDeviceToTerraform(struct?: AmiFromInstanceEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function amiFromInstanceEphemeralBlockDeviceToHclTerraform(struct?: AmiFromInstanceEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class AmiFromInstanceEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmiFromInstanceEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: AmiFromInstanceEphemeralBlockDevice | cdktf.IResolvable | undefined);
    get deviceName(): string;
    get virtualName(): string;
}
export declare class AmiFromInstanceEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmiFromInstanceEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmiFromInstanceEphemeralBlockDeviceOutputReference;
}
export interface AmiFromInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#create AmiFromInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#delete AmiFromInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#update AmiFromInstance#update}
    */
    readonly update?: string;
}
export declare function amiFromInstanceTimeoutsToTerraform(struct?: AmiFromInstanceTimeouts | cdktf.IResolvable): any;
export declare function amiFromInstanceTimeoutsToHclTerraform(struct?: AmiFromInstanceTimeouts | cdktf.IResolvable): any;
export declare class AmiFromInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AmiFromInstanceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AmiFromInstanceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance aws_ami_from_instance}
*/
export declare class AmiFromInstance extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ami_from_instance";
    /**
    * Generates CDKTF code for importing a AmiFromInstance resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmiFromInstance to import
    * @param importFromId The id of the existing AmiFromInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmiFromInstance to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_from_instance aws_ami_from_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiFromInstanceConfig
    */
    constructor(scope: Construct, id: string, config: AmiFromInstanceConfig);
    get architecture(): string;
    get arn(): string;
    get bootMode(): string;
    private _deprecationTime?;
    get deprecationTime(): string;
    set deprecationTime(value: string);
    resetDeprecationTime(): void;
    get deprecationTimeInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get enaSupport(): cdktf.IResolvable;
    get hypervisor(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageLocation(): string;
    get imageOwnerAlias(): string;
    get imageType(): string;
    get imdsSupport(): string;
    get kernelId(): string;
    get manageEbsSnapshots(): cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get ownerId(): string;
    get platform(): string;
    get platformDetails(): string;
    get public(): cdktf.IResolvable;
    get ramdiskId(): string;
    get rootDeviceName(): string;
    get rootSnapshotId(): string;
    private _snapshotWithoutReboot?;
    get snapshotWithoutReboot(): boolean | cdktf.IResolvable;
    set snapshotWithoutReboot(value: boolean | cdktf.IResolvable);
    resetSnapshotWithoutReboot(): void;
    get snapshotWithoutRebootInput(): boolean | cdktf.IResolvable | undefined;
    private _sourceInstanceId?;
    get sourceInstanceId(): string;
    set sourceInstanceId(value: string);
    get sourceInstanceIdInput(): string | undefined;
    get sriovNetSupport(): string;
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
    get tpmSupport(): string;
    get uefiData(): string;
    get usageOperation(): string;
    get virtualizationType(): string;
    private _ebsBlockDevice;
    get ebsBlockDevice(): AmiFromInstanceEbsBlockDeviceList;
    putEbsBlockDevice(value: AmiFromInstanceEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | AmiFromInstanceEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): AmiFromInstanceEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: AmiFromInstanceEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | AmiFromInstanceEphemeralBlockDevice[] | undefined;
    private _timeouts;
    get timeouts(): AmiFromInstanceTimeoutsOutputReference;
    putTimeouts(value: AmiFromInstanceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AmiFromInstanceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
