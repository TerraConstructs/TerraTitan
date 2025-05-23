/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GuarddutyDetectorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
    */
    readonly enable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#id GuarddutyDetector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#tags_all GuarddutyDetector#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * datasources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#datasources GuarddutyDetector#datasources}
    */
    readonly datasources?: GuarddutyDetectorDatasources;
}
export interface GuarddutyDetectorDatasourcesKubernetesAuditLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
}
export declare function guarddutyDetectorDatasourcesKubernetesAuditLogsToTerraform(struct?: GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference | GuarddutyDetectorDatasourcesKubernetesAuditLogs): any;
export declare function guarddutyDetectorDatasourcesKubernetesAuditLogsToHclTerraform(struct?: GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference | GuarddutyDetectorDatasourcesKubernetesAuditLogs): any;
export declare class GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasourcesKubernetesAuditLogs | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesKubernetesAuditLogs | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyDetectorDatasourcesKubernetes {
    /**
    * audit_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#audit_logs GuarddutyDetector#audit_logs}
    */
    readonly auditLogs: GuarddutyDetectorDatasourcesKubernetesAuditLogs;
}
export declare function guarddutyDetectorDatasourcesKubernetesToTerraform(struct?: GuarddutyDetectorDatasourcesKubernetesOutputReference | GuarddutyDetectorDatasourcesKubernetes): any;
export declare function guarddutyDetectorDatasourcesKubernetesToHclTerraform(struct?: GuarddutyDetectorDatasourcesKubernetesOutputReference | GuarddutyDetectorDatasourcesKubernetes): any;
export declare class GuarddutyDetectorDatasourcesKubernetesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasourcesKubernetes | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesKubernetes | undefined);
    private _auditLogs;
    get auditLogs(): GuarddutyDetectorDatasourcesKubernetesAuditLogsOutputReference;
    putAuditLogs(value: GuarddutyDetectorDatasourcesKubernetesAuditLogs): void;
    get auditLogsInput(): GuarddutyDetectorDatasourcesKubernetesAuditLogs | undefined;
}
export interface GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
}
export declare function guarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesToTerraform(struct?: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference | GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes): any;
export declare function guarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesToHclTerraform(struct?: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference | GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes): any;
export declare class GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings {
    /**
    * ebs_volumes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#ebs_volumes GuarddutyDetector#ebs_volumes}
    */
    readonly ebsVolumes: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes;
}
export declare function guarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsToTerraform(struct?: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference | GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings): any;
export declare function guarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsToHclTerraform(struct?: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference | GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings): any;
export declare class GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings | undefined);
    private _ebsVolumes;
    get ebsVolumes(): GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesOutputReference;
    putEbsVolumes(value: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes): void;
    get ebsVolumesInput(): GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumes | undefined;
}
export interface GuarddutyDetectorDatasourcesMalwareProtection {
    /**
    * scan_ec2_instance_with_findings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#scan_ec2_instance_with_findings GuarddutyDetector#scan_ec2_instance_with_findings}
    */
    readonly scanEc2InstanceWithFindings: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings;
}
export declare function guarddutyDetectorDatasourcesMalwareProtectionToTerraform(struct?: GuarddutyDetectorDatasourcesMalwareProtectionOutputReference | GuarddutyDetectorDatasourcesMalwareProtection): any;
export declare function guarddutyDetectorDatasourcesMalwareProtectionToHclTerraform(struct?: GuarddutyDetectorDatasourcesMalwareProtectionOutputReference | GuarddutyDetectorDatasourcesMalwareProtection): any;
export declare class GuarddutyDetectorDatasourcesMalwareProtectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasourcesMalwareProtection | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesMalwareProtection | undefined);
    private _scanEc2InstanceWithFindings;
    get scanEc2InstanceWithFindings(): GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindingsOutputReference;
    putScanEc2InstanceWithFindings(value: GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings): void;
    get scanEc2InstanceWithFindingsInput(): GuarddutyDetectorDatasourcesMalwareProtectionScanEc2InstanceWithFindings | undefined;
}
export interface GuarddutyDetectorDatasourcesS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
}
export declare function guarddutyDetectorDatasourcesS3LogsToTerraform(struct?: GuarddutyDetectorDatasourcesS3LogsOutputReference | GuarddutyDetectorDatasourcesS3Logs): any;
export declare function guarddutyDetectorDatasourcesS3LogsToHclTerraform(struct?: GuarddutyDetectorDatasourcesS3LogsOutputReference | GuarddutyDetectorDatasourcesS3Logs): any;
export declare class GuarddutyDetectorDatasourcesS3LogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasourcesS3Logs | undefined;
    set internalValue(value: GuarddutyDetectorDatasourcesS3Logs | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable | undefined;
}
export interface GuarddutyDetectorDatasources {
    /**
    * kubernetes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#kubernetes GuarddutyDetector#kubernetes}
    */
    readonly kubernetes?: GuarddutyDetectorDatasourcesKubernetes;
    /**
    * malware_protection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#malware_protection GuarddutyDetector#malware_protection}
    */
    readonly malwareProtection?: GuarddutyDetectorDatasourcesMalwareProtection;
    /**
    * s3_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}
    */
    readonly s3Logs?: GuarddutyDetectorDatasourcesS3Logs;
}
export declare function guarddutyDetectorDatasourcesToTerraform(struct?: GuarddutyDetectorDatasourcesOutputReference | GuarddutyDetectorDatasources): any;
export declare function guarddutyDetectorDatasourcesToHclTerraform(struct?: GuarddutyDetectorDatasourcesOutputReference | GuarddutyDetectorDatasources): any;
export declare class GuarddutyDetectorDatasourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): GuarddutyDetectorDatasources | undefined;
    set internalValue(value: GuarddutyDetectorDatasources | undefined);
    private _kubernetes;
    get kubernetes(): GuarddutyDetectorDatasourcesKubernetesOutputReference;
    putKubernetes(value: GuarddutyDetectorDatasourcesKubernetes): void;
    resetKubernetes(): void;
    get kubernetesInput(): GuarddutyDetectorDatasourcesKubernetes | undefined;
    private _malwareProtection;
    get malwareProtection(): GuarddutyDetectorDatasourcesMalwareProtectionOutputReference;
    putMalwareProtection(value: GuarddutyDetectorDatasourcesMalwareProtection): void;
    resetMalwareProtection(): void;
    get malwareProtectionInput(): GuarddutyDetectorDatasourcesMalwareProtection | undefined;
    private _s3Logs;
    get s3Logs(): GuarddutyDetectorDatasourcesS3LogsOutputReference;
    putS3Logs(value: GuarddutyDetectorDatasourcesS3Logs): void;
    resetS3Logs(): void;
    get s3LogsInput(): GuarddutyDetectorDatasourcesS3Logs | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector aws_guardduty_detector}
*/
export declare class GuarddutyDetector extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_guardduty_detector";
    /**
    * Generates CDKTF code for importing a GuarddutyDetector resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the GuarddutyDetector to import
    * @param importFromId The id of the existing GuarddutyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the GuarddutyDetector to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/guardduty_detector aws_guardduty_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GuarddutyDetectorConfig = {}
    */
    constructor(scope: Construct, id: string, config?: GuarddutyDetectorConfig);
    get accountId(): string;
    get arn(): string;
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    resetEnable(): void;
    get enableInput(): boolean | cdktf.IResolvable | undefined;
    private _findingPublishingFrequency?;
    get findingPublishingFrequency(): string;
    set findingPublishingFrequency(value: string);
    resetFindingPublishingFrequency(): void;
    get findingPublishingFrequencyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _datasources;
    get datasources(): GuarddutyDetectorDatasourcesOutputReference;
    putDatasources(value: GuarddutyDetectorDatasources): void;
    resetDatasources(): void;
    get datasourcesInput(): GuarddutyDetectorDatasources | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
