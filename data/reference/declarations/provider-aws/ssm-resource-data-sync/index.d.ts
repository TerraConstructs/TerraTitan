/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmResourceDataSyncConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#id SsmResourceDataSync#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#name SsmResourceDataSync#name}
    */
    readonly name: string;
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}
    */
    readonly s3Destination: SsmResourceDataSyncS3Destination;
}
export interface SsmResourceDataSyncS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#prefix SsmResourceDataSync#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#region SsmResourceDataSync#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}
    */
    readonly syncFormat?: string;
}
export declare function ssmResourceDataSyncS3DestinationToTerraform(struct?: SsmResourceDataSyncS3DestinationOutputReference | SsmResourceDataSyncS3Destination): any;
export declare function ssmResourceDataSyncS3DestinationToHclTerraform(struct?: SsmResourceDataSyncS3DestinationOutputReference | SsmResourceDataSyncS3Destination): any;
export declare class SsmResourceDataSyncS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmResourceDataSyncS3Destination | undefined;
    set internalValue(value: SsmResourceDataSyncS3Destination | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
    private _syncFormat?;
    get syncFormat(): string;
    set syncFormat(value: string);
    resetSyncFormat(): void;
    get syncFormatInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync aws_ssm_resource_data_sync}
*/
export declare class SsmResourceDataSync extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_resource_data_sync";
    /**
    * Generates CDKTF code for importing a SsmResourceDataSync resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmResourceDataSync to import
    * @param importFromId The id of the existing SsmResourceDataSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmResourceDataSync to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_resource_data_sync aws_ssm_resource_data_sync} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmResourceDataSyncConfig
    */
    constructor(scope: Construct, id: string, config: SsmResourceDataSyncConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _s3Destination;
    get s3Destination(): SsmResourceDataSyncS3DestinationOutputReference;
    putS3Destination(value: SsmResourceDataSyncS3Destination): void;
    get s3DestinationInput(): SsmResourceDataSyncS3Destination | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
