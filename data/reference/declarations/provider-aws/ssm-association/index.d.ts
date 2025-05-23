/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}
    */
    readonly applyOnlyAtCronInterval?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}
    */
    readonly associationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}
    */
    readonly automationTargetParameterName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}
    */
    readonly complianceSeverity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}
    */
    readonly documentVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#id SsmAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#instance_id SsmAssociation#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}
    */
    readonly maxConcurrency?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}
    */
    readonly maxErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#name SsmAssociation#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}
    */
    readonly syncCompliance?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#tags SsmAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#tags_all SsmAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}
    */
    readonly waitForSuccessTimeoutSeconds?: number;
    /**
    * output_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}
    */
    readonly outputLocation?: SsmAssociationOutputLocation;
    /**
    * targets block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#targets SsmAssociation#targets}
    */
    readonly targets?: SsmAssociationTargets[] | cdktf.IResolvable;
}
export interface SsmAssociationOutputLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#s3_bucket_name SsmAssociation#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#s3_key_prefix SsmAssociation#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#s3_region SsmAssociation#s3_region}
    */
    readonly s3Region?: string;
}
export declare function ssmAssociationOutputLocationToTerraform(struct?: SsmAssociationOutputLocationOutputReference | SsmAssociationOutputLocation): any;
export declare function ssmAssociationOutputLocationToHclTerraform(struct?: SsmAssociationOutputLocationOutputReference | SsmAssociationOutputLocation): any;
export declare class SsmAssociationOutputLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmAssociationOutputLocation | undefined;
    set internalValue(value: SsmAssociationOutputLocation | undefined);
    private _s3BucketName?;
    get s3BucketName(): string;
    set s3BucketName(value: string);
    get s3BucketNameInput(): string | undefined;
    private _s3KeyPrefix?;
    get s3KeyPrefix(): string;
    set s3KeyPrefix(value: string);
    resetS3KeyPrefix(): void;
    get s3KeyPrefixInput(): string | undefined;
    private _s3Region?;
    get s3Region(): string;
    set s3Region(value: string);
    resetS3Region(): void;
    get s3RegionInput(): string | undefined;
}
export interface SsmAssociationTargets {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#key SsmAssociation#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#values SsmAssociation#values}
    */
    readonly values: string[];
}
export declare function ssmAssociationTargetsToTerraform(struct?: SsmAssociationTargets | cdktf.IResolvable): any;
export declare function ssmAssociationTargetsToHclTerraform(struct?: SsmAssociationTargets | cdktf.IResolvable): any;
export declare class SsmAssociationTargetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmAssociationTargets | cdktf.IResolvable | undefined;
    set internalValue(value: SsmAssociationTargets | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class SsmAssociationTargetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmAssociationTargets[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmAssociationTargetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association aws_ssm_association}
*/
export declare class SsmAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssm_association";
    /**
    * Generates CDKTF code for importing a SsmAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmAssociation to import
    * @param importFromId The id of the existing SsmAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssm_association aws_ssm_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmAssociationConfig
    */
    constructor(scope: Construct, id: string, config: SsmAssociationConfig);
    private _applyOnlyAtCronInterval?;
    get applyOnlyAtCronInterval(): boolean | cdktf.IResolvable;
    set applyOnlyAtCronInterval(value: boolean | cdktf.IResolvable);
    resetApplyOnlyAtCronInterval(): void;
    get applyOnlyAtCronIntervalInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    get associationId(): string;
    private _associationName?;
    get associationName(): string;
    set associationName(value: string);
    resetAssociationName(): void;
    get associationNameInput(): string | undefined;
    private _automationTargetParameterName?;
    get automationTargetParameterName(): string;
    set automationTargetParameterName(value: string);
    resetAutomationTargetParameterName(): void;
    get automationTargetParameterNameInput(): string | undefined;
    private _complianceSeverity?;
    get complianceSeverity(): string;
    set complianceSeverity(value: string);
    resetComplianceSeverity(): void;
    get complianceSeverityInput(): string | undefined;
    private _documentVersion?;
    get documentVersion(): string;
    set documentVersion(value: string);
    resetDocumentVersion(): void;
    get documentVersionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    private _maxConcurrency?;
    get maxConcurrency(): string;
    set maxConcurrency(value: string);
    resetMaxConcurrency(): void;
    get maxConcurrencyInput(): string | undefined;
    private _maxErrors?;
    get maxErrors(): string;
    set maxErrors(value: string);
    resetMaxErrors(): void;
    get maxErrorsInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    resetScheduleExpression(): void;
    get scheduleExpressionInput(): string | undefined;
    private _syncCompliance?;
    get syncCompliance(): string;
    set syncCompliance(value: string);
    resetSyncCompliance(): void;
    get syncComplianceInput(): string | undefined;
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
    private _waitForSuccessTimeoutSeconds?;
    get waitForSuccessTimeoutSeconds(): number;
    set waitForSuccessTimeoutSeconds(value: number);
    resetWaitForSuccessTimeoutSeconds(): void;
    get waitForSuccessTimeoutSecondsInput(): number | undefined;
    private _outputLocation;
    get outputLocation(): SsmAssociationOutputLocationOutputReference;
    putOutputLocation(value: SsmAssociationOutputLocation): void;
    resetOutputLocation(): void;
    get outputLocationInput(): SsmAssociationOutputLocation | undefined;
    private _targets;
    get targets(): SsmAssociationTargetsList;
    putTargets(value: SsmAssociationTargets[] | cdktf.IResolvable): void;
    resetTargets(): void;
    get targetsInput(): cdktf.IResolvable | SsmAssociationTargets[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
