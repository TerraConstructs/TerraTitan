/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#access_point_arn DatasyncLocationEfs#access_point_arn}
    */
    readonly accessPointArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}
    */
    readonly efsFileSystemArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#file_system_access_role_arn DatasyncLocationEfs#file_system_access_role_arn}
    */
    readonly fileSystemAccessRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#id DatasyncLocationEfs#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#in_transit_encryption DatasyncLocationEfs#in_transit_encryption}
    */
    readonly inTransitEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#subdirectory DatasyncLocationEfs#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#tags DatasyncLocationEfs#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#tags_all DatasyncLocationEfs#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * ec2_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#ec2_config DatasyncLocationEfs#ec2_config}
    */
    readonly ec2Config: DatasyncLocationEfsEc2Config;
}
export interface DatasyncLocationEfsEc2Config {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#security_group_arns DatasyncLocationEfs#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#subnet_arn DatasyncLocationEfs#subnet_arn}
    */
    readonly subnetArn: string;
}
export declare function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2ConfigOutputReference | DatasyncLocationEfsEc2Config): any;
export declare function datasyncLocationEfsEc2ConfigToHclTerraform(struct?: DatasyncLocationEfsEc2ConfigOutputReference | DatasyncLocationEfsEc2Config): any;
export declare class DatasyncLocationEfsEc2ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatasyncLocationEfsEc2Config | undefined;
    set internalValue(value: DatasyncLocationEfsEc2Config | undefined);
    private _securityGroupArns?;
    get securityGroupArns(): string[];
    set securityGroupArns(value: string[]);
    get securityGroupArnsInput(): string[] | undefined;
    private _subnetArn?;
    get subnetArn(): string;
    set subnetArn(value: string);
    get subnetArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs aws_datasync_location_efs}
*/
export declare class DatasyncLocationEfs extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datasync_location_efs";
    /**
    * Generates CDKTF code for importing a DatasyncLocationEfs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatasyncLocationEfs to import
    * @param importFromId The id of the existing DatasyncLocationEfs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatasyncLocationEfs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datasync_location_efs aws_datasync_location_efs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationEfsConfig
    */
    constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig);
    private _accessPointArn?;
    get accessPointArn(): string;
    set accessPointArn(value: string);
    resetAccessPointArn(): void;
    get accessPointArnInput(): string | undefined;
    get arn(): string;
    private _efsFileSystemArn?;
    get efsFileSystemArn(): string;
    set efsFileSystemArn(value: string);
    get efsFileSystemArnInput(): string | undefined;
    private _fileSystemAccessRoleArn?;
    get fileSystemAccessRoleArn(): string;
    set fileSystemAccessRoleArn(value: string);
    resetFileSystemAccessRoleArn(): void;
    get fileSystemAccessRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _inTransitEncryption?;
    get inTransitEncryption(): string;
    set inTransitEncryption(value: string);
    resetInTransitEncryption(): void;
    get inTransitEncryptionInput(): string | undefined;
    private _subdirectory?;
    get subdirectory(): string;
    set subdirectory(value: string);
    resetSubdirectory(): void;
    get subdirectoryInput(): string | undefined;
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
    get uri(): string;
    private _ec2Config;
    get ec2Config(): DatasyncLocationEfsEc2ConfigOutputReference;
    putEc2Config(value: DatasyncLocationEfsEc2Config): void;
    get ec2ConfigInput(): DatasyncLocationEfsEc2Config | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
