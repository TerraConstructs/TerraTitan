/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AmiCopyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#deprecation_time AmiCopy#deprecation_time}
    */
    readonly deprecationTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#description AmiCopy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#destination_outpost_arn AmiCopy#destination_outpost_arn}
    */
    readonly destinationOutpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#encrypted AmiCopy#encrypted}
    */
    readonly encrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#id AmiCopy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#kms_key_id AmiCopy#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#name AmiCopy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#source_ami_id AmiCopy#source_ami_id}
    */
    readonly sourceAmiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#source_ami_region AmiCopy#source_ami_region}
    */
    readonly sourceAmiRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#tags AmiCopy#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#tags_all AmiCopy#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * ebs_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#ebs_block_device AmiCopy#ebs_block_device}
    */
    readonly ebsBlockDevice?: AmiCopyEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * ephemeral_block_device block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#ephemeral_block_device AmiCopy#ephemeral_block_device}
    */
    readonly ephemeralBlockDevice?: AmiCopyEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#timeouts AmiCopy#timeouts}
    */
    readonly timeouts?: AmiCopyTimeouts;
}
export interface AmiCopyEbsBlockDevice {
}
export declare function amiCopyEbsBlockDeviceToTerraform(struct?: AmiCopyEbsBlockDevice | cdktf.IResolvable): any;
export declare function amiCopyEbsBlockDeviceToHclTerraform(struct?: AmiCopyEbsBlockDevice | cdktf.IResolvable): any;
export declare class AmiCopyEbsBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmiCopyEbsBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: AmiCopyEbsBlockDevice | cdktf.IResolvable | undefined);
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
export declare class AmiCopyEbsBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmiCopyEbsBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmiCopyEbsBlockDeviceOutputReference;
}
export interface AmiCopyEphemeralBlockDevice {
}
export declare function amiCopyEphemeralBlockDeviceToTerraform(struct?: AmiCopyEphemeralBlockDevice | cdktf.IResolvable): any;
export declare function amiCopyEphemeralBlockDeviceToHclTerraform(struct?: AmiCopyEphemeralBlockDevice | cdktf.IResolvable): any;
export declare class AmiCopyEphemeralBlockDeviceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AmiCopyEphemeralBlockDevice | cdktf.IResolvable | undefined;
    set internalValue(value: AmiCopyEphemeralBlockDevice | cdktf.IResolvable | undefined);
    get deviceName(): string;
    get virtualName(): string;
}
export declare class AmiCopyEphemeralBlockDeviceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AmiCopyEphemeralBlockDevice[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AmiCopyEphemeralBlockDeviceOutputReference;
}
export interface AmiCopyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#create AmiCopy#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#delete AmiCopy#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#update AmiCopy#update}
    */
    readonly update?: string;
}
export declare function amiCopyTimeoutsToTerraform(struct?: AmiCopyTimeouts | cdktf.IResolvable): any;
export declare function amiCopyTimeoutsToHclTerraform(struct?: AmiCopyTimeouts | cdktf.IResolvable): any;
export declare class AmiCopyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AmiCopyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: AmiCopyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy aws_ami_copy}
*/
export declare class AmiCopy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ami_copy";
    /**
    * Generates CDKTF code for importing a AmiCopy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AmiCopy to import
    * @param importFromId The id of the existing AmiCopy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AmiCopy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ami_copy aws_ami_copy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmiCopyConfig
    */
    constructor(scope: Construct, id: string, config: AmiCopyConfig);
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
    private _destinationOutpostArn?;
    get destinationOutpostArn(): string;
    set destinationOutpostArn(value: string);
    resetDestinationOutpostArn(): void;
    get destinationOutpostArnInput(): string | undefined;
    get enaSupport(): cdktf.IResolvable;
    private _encrypted?;
    get encrypted(): boolean | cdktf.IResolvable;
    set encrypted(value: boolean | cdktf.IResolvable);
    resetEncrypted(): void;
    get encryptedInput(): boolean | cdktf.IResolvable | undefined;
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
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
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
    private _sourceAmiId?;
    get sourceAmiId(): string;
    set sourceAmiId(value: string);
    get sourceAmiIdInput(): string | undefined;
    private _sourceAmiRegion?;
    get sourceAmiRegion(): string;
    set sourceAmiRegion(value: string);
    get sourceAmiRegionInput(): string | undefined;
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
    get ebsBlockDevice(): AmiCopyEbsBlockDeviceList;
    putEbsBlockDevice(value: AmiCopyEbsBlockDevice[] | cdktf.IResolvable): void;
    resetEbsBlockDevice(): void;
    get ebsBlockDeviceInput(): cdktf.IResolvable | AmiCopyEbsBlockDevice[] | undefined;
    private _ephemeralBlockDevice;
    get ephemeralBlockDevice(): AmiCopyEphemeralBlockDeviceList;
    putEphemeralBlockDevice(value: AmiCopyEphemeralBlockDevice[] | cdktf.IResolvable): void;
    resetEphemeralBlockDevice(): void;
    get ephemeralBlockDeviceInput(): cdktf.IResolvable | AmiCopyEphemeralBlockDevice[] | undefined;
    private _timeouts;
    get timeouts(): AmiCopyTimeoutsOutputReference;
    putTimeouts(value: AmiCopyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | AmiCopyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
