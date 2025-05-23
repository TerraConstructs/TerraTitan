/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EfsReplicationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#id EfsReplicationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#source_file_system_id EfsReplicationConfiguration#source_file_system_id}
    */
    readonly sourceFileSystemId: string;
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#destination EfsReplicationConfiguration#destination}
    */
    readonly destination: EfsReplicationConfigurationDestination;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#timeouts EfsReplicationConfiguration#timeouts}
    */
    readonly timeouts?: EfsReplicationConfigurationTimeouts;
}
export interface EfsReplicationConfigurationDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#availability_zone_name EfsReplicationConfiguration#availability_zone_name}
    */
    readonly availabilityZoneName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#file_system_id EfsReplicationConfiguration#file_system_id}
    */
    readonly fileSystemId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#kms_key_id EfsReplicationConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#region EfsReplicationConfiguration#region}
    */
    readonly region?: string;
}
export declare function efsReplicationConfigurationDestinationToTerraform(struct?: EfsReplicationConfigurationDestinationOutputReference | EfsReplicationConfigurationDestination): any;
export declare function efsReplicationConfigurationDestinationToHclTerraform(struct?: EfsReplicationConfigurationDestinationOutputReference | EfsReplicationConfigurationDestination): any;
export declare class EfsReplicationConfigurationDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsReplicationConfigurationDestination | undefined;
    set internalValue(value: EfsReplicationConfigurationDestination | undefined);
    private _availabilityZoneName?;
    get availabilityZoneName(): string;
    set availabilityZoneName(value: string);
    resetAvailabilityZoneName(): void;
    get availabilityZoneNameInput(): string | undefined;
    private _fileSystemId?;
    get fileSystemId(): string;
    set fileSystemId(value: string);
    resetFileSystemId(): void;
    get fileSystemIdInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    get status(): string;
}
export interface EfsReplicationConfigurationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#create EfsReplicationConfiguration#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#delete EfsReplicationConfiguration#delete}
    */
    readonly delete?: string;
}
export declare function efsReplicationConfigurationTimeoutsToTerraform(struct?: EfsReplicationConfigurationTimeouts | cdktf.IResolvable): any;
export declare function efsReplicationConfigurationTimeoutsToHclTerraform(struct?: EfsReplicationConfigurationTimeouts | cdktf.IResolvable): any;
export declare class EfsReplicationConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): EfsReplicationConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: EfsReplicationConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration aws_efs_replication_configuration}
*/
export declare class EfsReplicationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_efs_replication_configuration";
    /**
    * Generates CDKTF code for importing a EfsReplicationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EfsReplicationConfiguration to import
    * @param importFromId The id of the existing EfsReplicationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EfsReplicationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/efs_replication_configuration aws_efs_replication_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EfsReplicationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: EfsReplicationConfigurationConfig);
    get creationTime(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get originalSourceFileSystemArn(): string;
    get sourceFileSystemArn(): string;
    private _sourceFileSystemId?;
    get sourceFileSystemId(): string;
    set sourceFileSystemId(value: string);
    get sourceFileSystemIdInput(): string | undefined;
    get sourceFileSystemRegion(): string;
    private _destination;
    get destination(): EfsReplicationConfigurationDestinationOutputReference;
    putDestination(value: EfsReplicationConfigurationDestination): void;
    get destinationInput(): EfsReplicationConfigurationDestination | undefined;
    private _timeouts;
    get timeouts(): EfsReplicationConfigurationTimeoutsOutputReference;
    putTimeouts(value: EfsReplicationConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | EfsReplicationConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
