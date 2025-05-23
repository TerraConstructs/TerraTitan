/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaWorkgroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#description AthenaWorkgroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#force_destroy AthenaWorkgroup#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#id AthenaWorkgroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#name AthenaWorkgroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#state AthenaWorkgroup#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#tags AthenaWorkgroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#tags_all AthenaWorkgroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#configuration AthenaWorkgroup#configuration}
    */
    readonly configuration?: AthenaWorkgroupConfiguration;
}
export interface AthenaWorkgroupConfigurationEngineVersion {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#selected_engine_version AthenaWorkgroup#selected_engine_version}
    */
    readonly selectedEngineVersion?: string;
}
export declare function athenaWorkgroupConfigurationEngineVersionToTerraform(struct?: AthenaWorkgroupConfigurationEngineVersionOutputReference | AthenaWorkgroupConfigurationEngineVersion): any;
export declare function athenaWorkgroupConfigurationEngineVersionToHclTerraform(struct?: AthenaWorkgroupConfigurationEngineVersionOutputReference | AthenaWorkgroupConfigurationEngineVersion): any;
export declare class AthenaWorkgroupConfigurationEngineVersionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaWorkgroupConfigurationEngineVersion | undefined;
    set internalValue(value: AthenaWorkgroupConfigurationEngineVersion | undefined);
    get effectiveEngineVersion(): string;
    private _selectedEngineVersion?;
    get selectedEngineVersion(): string;
    set selectedEngineVersion(value: string);
    resetSelectedEngineVersion(): void;
    get selectedEngineVersionInput(): string | undefined;
}
export interface AthenaWorkgroupConfigurationResultConfigurationAclConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#s3_acl_option AthenaWorkgroup#s3_acl_option}
    */
    readonly s3AclOption: string;
}
export declare function athenaWorkgroupConfigurationResultConfigurationAclConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationAclConfiguration): any;
export declare function athenaWorkgroupConfigurationResultConfigurationAclConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationAclConfiguration): any;
export declare class AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaWorkgroupConfigurationResultConfigurationAclConfiguration | undefined;
    set internalValue(value: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration | undefined);
    private _s3AclOption?;
    get s3AclOption(): string;
    set s3AclOption(value: string);
    get s3AclOptionInput(): string | undefined;
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#encryption_option AthenaWorkgroup#encryption_option}
    */
    readonly encryptionOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#kms_key_arn AthenaWorkgroup#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any;
export declare function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any;
export declare class AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined;
    set internalValue(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined);
    private _encryptionOption?;
    get encryptionOption(): string;
    set encryptionOption(value: string);
    resetEncryptionOption(): void;
    get encryptionOptionInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
export interface AthenaWorkgroupConfigurationResultConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#expected_bucket_owner AthenaWorkgroup#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#output_location AthenaWorkgroup#output_location}
    */
    readonly outputLocation?: string;
    /**
    * acl_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#acl_configuration AthenaWorkgroup#acl_configuration}
    */
    readonly aclConfiguration?: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#encryption_configuration AthenaWorkgroup#encryption_configuration}
    */
    readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration;
}
export declare function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfiguration): any;
export declare function athenaWorkgroupConfigurationResultConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationOutputReference | AthenaWorkgroupConfigurationResultConfiguration): any;
export declare class AthenaWorkgroupConfigurationResultConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaWorkgroupConfigurationResultConfiguration | undefined;
    set internalValue(value: AthenaWorkgroupConfigurationResultConfiguration | undefined);
    private _expectedBucketOwner?;
    get expectedBucketOwner(): string;
    set expectedBucketOwner(value: string);
    resetExpectedBucketOwner(): void;
    get expectedBucketOwnerInput(): string | undefined;
    private _outputLocation?;
    get outputLocation(): string;
    set outputLocation(value: string);
    resetOutputLocation(): void;
    get outputLocationInput(): string | undefined;
    private _aclConfiguration;
    get aclConfiguration(): AthenaWorkgroupConfigurationResultConfigurationAclConfigurationOutputReference;
    putAclConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationAclConfiguration): void;
    resetAclConfiguration(): void;
    get aclConfigurationInput(): AthenaWorkgroupConfigurationResultConfigurationAclConfiguration | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationOutputReference;
    putEncryptionConfiguration(value: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration | undefined;
}
export interface AthenaWorkgroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}
    */
    readonly bytesScannedCutoffPerQuery?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}
    */
    readonly enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#execution_role AthenaWorkgroup#execution_role}
    */
    readonly executionRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}
    */
    readonly publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}
    */
    readonly requesterPaysEnabled?: boolean | cdktf.IResolvable;
    /**
    * engine_version block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#engine_version AthenaWorkgroup#engine_version}
    */
    readonly engineVersion?: AthenaWorkgroupConfigurationEngineVersion;
    /**
    * result_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#result_configuration AthenaWorkgroup#result_configuration}
    */
    readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration;
}
export declare function athenaWorkgroupConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationOutputReference | AthenaWorkgroupConfiguration): any;
export declare function athenaWorkgroupConfigurationToHclTerraform(struct?: AthenaWorkgroupConfigurationOutputReference | AthenaWorkgroupConfiguration): any;
export declare class AthenaWorkgroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AthenaWorkgroupConfiguration | undefined;
    set internalValue(value: AthenaWorkgroupConfiguration | undefined);
    private _bytesScannedCutoffPerQuery?;
    get bytesScannedCutoffPerQuery(): number;
    set bytesScannedCutoffPerQuery(value: number);
    resetBytesScannedCutoffPerQuery(): void;
    get bytesScannedCutoffPerQueryInput(): number | undefined;
    private _enforceWorkgroupConfiguration?;
    get enforceWorkgroupConfiguration(): boolean | cdktf.IResolvable;
    set enforceWorkgroupConfiguration(value: boolean | cdktf.IResolvable);
    resetEnforceWorkgroupConfiguration(): void;
    get enforceWorkgroupConfigurationInput(): boolean | cdktf.IResolvable | undefined;
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    resetExecutionRole(): void;
    get executionRoleInput(): string | undefined;
    private _publishCloudwatchMetricsEnabled?;
    get publishCloudwatchMetricsEnabled(): boolean | cdktf.IResolvable;
    set publishCloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable);
    resetPublishCloudwatchMetricsEnabled(): void;
    get publishCloudwatchMetricsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _requesterPaysEnabled?;
    get requesterPaysEnabled(): boolean | cdktf.IResolvable;
    set requesterPaysEnabled(value: boolean | cdktf.IResolvable);
    resetRequesterPaysEnabled(): void;
    get requesterPaysEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _engineVersion;
    get engineVersion(): AthenaWorkgroupConfigurationEngineVersionOutputReference;
    putEngineVersion(value: AthenaWorkgroupConfigurationEngineVersion): void;
    resetEngineVersion(): void;
    get engineVersionInput(): AthenaWorkgroupConfigurationEngineVersion | undefined;
    private _resultConfiguration;
    get resultConfiguration(): AthenaWorkgroupConfigurationResultConfigurationOutputReference;
    putResultConfiguration(value: AthenaWorkgroupConfigurationResultConfiguration): void;
    resetResultConfiguration(): void;
    get resultConfigurationInput(): AthenaWorkgroupConfigurationResultConfiguration | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup aws_athena_workgroup}
*/
export declare class AthenaWorkgroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_athena_workgroup";
    /**
    * Generates CDKTF code for importing a AthenaWorkgroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AthenaWorkgroup to import
    * @param importFromId The id of the existing AthenaWorkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AthenaWorkgroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/athena_workgroup aws_athena_workgroup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaWorkgroupConfig
    */
    constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
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
    private _configuration;
    get configuration(): AthenaWorkgroupConfigurationOutputReference;
    putConfiguration(value: AthenaWorkgroupConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): AthenaWorkgroupConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
