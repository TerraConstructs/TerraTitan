/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyOrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#auto_enable_organization_members GuarddutyOrganizationConfiguration#auto_enable_organization_members}
    */
    readonly autoEnableOrganizationMembers?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}
    */
    readonly detectorId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * datasources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#datasources GuarddutyOrganizationConfiguration#datasources}
    */
    readonly datasources?: GuarddutyOrganizationConfigurationDatasources;
}
export interface GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#enable GuarddutyOrganizationConfiguration#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
}
export declare function guarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs): any;
export declare function guarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyOrganizationConfigurationDatasourcesKubernetes {
    /**
    * audit_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#audit_logs GuarddutyOrganizationConfiguration#audit_logs}
    */
    readonly auditLogs: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs;
}
export declare function guarddutyOrganizationConfigurationDatasourcesKubernetesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference | GuarddutyOrganizationConfigurationDatasourcesKubernetes): any;
export declare function guarddutyOrganizationConfigurationDatasourcesKubernetesToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference | GuarddutyOrganizationConfigurationDatasourcesKubernetes): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesKubernetes | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesKubernetes | undefined);
    private _auditLogs;
    get auditLogs(): GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogsOutputReference;
    putAuditLogs(value: GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs): void;
    get auditLogsInput(): GuarddutyOrganizationConfigurationDatasourcesKubernetesAuditLogs | undefined;
}
export interface GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
}
export declare function guarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference | GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes): any;
export declare function guarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference | GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes | undefined);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
    /**
    * ebs_volumes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#ebs_volumes GuarddutyOrganizationConfiguration#ebs_volumes}
    */
    readonly ebsVolumes: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}
export declare function guarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference | GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings): any;
export declare function guarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference | GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings | undefined);
    private _ebsVolumes;
    get ebsVolumes(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference;
    putEbsVolumes(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes): void;
    get ebsVolumesInput(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes | undefined;
}
export interface GuarddutyOrganizationConfigurationDatasourcesMalwareProtection {
    /**
    * scan_ec2_instance_with_findings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#scan_ec2_instance_with_findings GuarddutyOrganizationConfiguration#scan_ec2_instance_with_findings}
    */
    readonly scanEc2InstanceWithFindings: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}
export declare function guarddutyOrganizationConfigurationDatasourcesMalwareProtectionToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference | GuarddutyOrganizationConfigurationDatasourcesMalwareProtection): any;
export declare function guarddutyOrganizationConfigurationDatasourcesMalwareProtectionToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference | GuarddutyOrganizationConfigurationDatasourcesMalwareProtection): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtection | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtection | undefined);
    private _scanEc2InstanceWithFindings;
    get scanEc2InstanceWithFindings(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference;
    putScanEc2InstanceWithFindings(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings): void;
    get scanEc2InstanceWithFindingsInput(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionScanEc2InstanceWithFindings | undefined;
}
export interface GuarddutyOrganizationConfigurationDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}
    */
    readonly autoEnable: boolean | cdktf.IResolvable;
}
export declare function guarddutyOrganizationConfigurationDatasourcesS3LogsToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any;
export declare function guarddutyOrganizationConfigurationDatasourcesS3LogsToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference | GuarddutyOrganizationConfigurationDatasourcesS3Logs): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    get autoEnableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyOrganizationConfigurationDatasources {
    /**
    * kubernetes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#kubernetes GuarddutyOrganizationConfiguration#kubernetes}
    */
    readonly kubernetes?: GuarddutyOrganizationConfigurationDatasourcesKubernetes;
    /**
    * malware_protection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#malware_protection GuarddutyOrganizationConfiguration#malware_protection}
    */
    readonly malwareProtection?: GuarddutyOrganizationConfigurationDatasourcesMalwareProtection;
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#s3_logs GuarddutyOrganizationConfiguration#s3_logs}
    */
    readonly s3Logs?: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
}
export declare function guarddutyOrganizationConfigurationDatasourcesToTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any;
export declare function guarddutyOrganizationConfigurationDatasourcesToHclTerraform(struct?: GuarddutyOrganizationConfigurationDatasourcesOutputReference | GuarddutyOrganizationConfigurationDatasources): any;
export declare class GuarddutyOrganizationConfigurationDatasourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyOrganizationConfigurationDatasources | undefined;
    set internalValue(value: GuarddutyOrganizationConfigurationDatasources | undefined);
    private _kubernetes;
    get kubernetes(): GuarddutyOrganizationConfigurationDatasourcesKubernetesOutputReference;
    putKubernetes(value: GuarddutyOrganizationConfigurationDatasourcesKubernetes): void;
    resetKubernetes(): void;
    get kubernetesInput(): GuarddutyOrganizationConfigurationDatasourcesKubernetes | undefined;
    private _malwareProtection;
    get malwareProtection(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtectionOutputReference;
    putMalwareProtection(value: GuarddutyOrganizationConfigurationDatasourcesMalwareProtection): void;
    resetMalwareProtection(): void;
    get malwareProtectionInput(): GuarddutyOrganizationConfigurationDatasourcesMalwareProtection | undefined;
    private _s3Logs;
    get s3Logs(): GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference;
    putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): GuarddutyOrganizationConfigurationDatasourcesS3Logs | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration aws_guardduty_organization_configuration}
*/
export declare class GuarddutyOrganizationConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_organization_configuration";
    /**
    * Generates CDKTF code for importing a GuarddutyOrganizationConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyOrganizationConfiguration to import
    * @param importFromId The id of the existing GuarddutyOrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyOrganizationConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_organization_configuration aws_guardduty_organization_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyOrganizationConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig);
    private _autoEnable?;
    get autoEnable(): boolean | cdktf.IResolvable;
    set autoEnable(value: boolean | cdktf.IResolvable);
    resetAutoEnable(): void;
    get autoEnableInput(): boolean | cdktf.IResolvable | undefined;
    private _autoEnableOrganizationMembers?;
    get autoEnableOrganizationMembers(): string;
    set autoEnableOrganizationMembers(value: string);
    resetAutoEnableOrganizationMembers(): void;
    get autoEnableOrganizationMembersInput(): string | undefined;
    private _detectorId?;
    get detectorId(): string;
    set detectorId(value: string);
    get detectorIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _datasources;
    get datasources(): GuarddutyOrganizationConfigurationDatasourcesOutputReference;
    putDatasources(value: GuarddutyOrganizationConfigurationDatasources): void;
    resetDatasources(): void;
    get datasourcesInput(): GuarddutyOrganizationConfigurationDatasources | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
