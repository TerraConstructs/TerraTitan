/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DevopsguruServiceIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * kms_server_side_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#kms_server_side_encryption DevopsguruServiceIntegration#kms_server_side_encryption}
    */
    readonly kmsServerSideEncryption?: DevopsguruServiceIntegrationKmsServerSideEncryption[] | cdktf.IResolvable;
    /**
    * logs_anomaly_detection block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#logs_anomaly_detection DevopsguruServiceIntegration#logs_anomaly_detection}
    */
    readonly logsAnomalyDetection?: DevopsguruServiceIntegrationLogsAnomalyDetection[] | cdktf.IResolvable;
    /**
    * ops_center block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#ops_center DevopsguruServiceIntegration#ops_center}
    */
    readonly opsCenter?: DevopsguruServiceIntegrationOpsCenter[] | cdktf.IResolvable;
}
export interface DevopsguruServiceIntegrationKmsServerSideEncryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#kms_key_id DevopsguruServiceIntegration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}
    */
    readonly optInStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#type DevopsguruServiceIntegration#type}
    */
    readonly type?: string;
}
export declare function devopsguruServiceIntegrationKmsServerSideEncryptionToTerraform(struct?: DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable): any;
export declare function devopsguruServiceIntegrationKmsServerSideEncryptionToHclTerraform(struct?: DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable): any;
export declare class DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruServiceIntegrationKmsServerSideEncryption | cdktf.IResolvable | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _optInStatus?;
    get optInStatus(): string;
    set optInStatus(value: string);
    resetOptInStatus(): void;
    get optInStatusInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class DevopsguruServiceIntegrationKmsServerSideEncryptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruServiceIntegrationKmsServerSideEncryption[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruServiceIntegrationKmsServerSideEncryptionOutputReference;
}
export interface DevopsguruServiceIntegrationLogsAnomalyDetection {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}
    */
    readonly optInStatus?: string;
}
export declare function devopsguruServiceIntegrationLogsAnomalyDetectionToTerraform(struct?: DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable): any;
export declare function devopsguruServiceIntegrationLogsAnomalyDetectionToHclTerraform(struct?: DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable): any;
export declare class DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruServiceIntegrationLogsAnomalyDetection | cdktf.IResolvable | undefined);
    private _optInStatus?;
    get optInStatus(): string;
    set optInStatus(value: string);
    resetOptInStatus(): void;
    get optInStatusInput(): string | undefined;
}
export declare class DevopsguruServiceIntegrationLogsAnomalyDetectionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruServiceIntegrationLogsAnomalyDetection[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruServiceIntegrationLogsAnomalyDetectionOutputReference;
}
export interface DevopsguruServiceIntegrationOpsCenter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#opt_in_status DevopsguruServiceIntegration#opt_in_status}
    */
    readonly optInStatus?: string;
}
export declare function devopsguruServiceIntegrationOpsCenterToTerraform(struct?: DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable): any;
export declare function devopsguruServiceIntegrationOpsCenterToHclTerraform(struct?: DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable): any;
export declare class DevopsguruServiceIntegrationOpsCenterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable | undefined;
    set internalValue(value: DevopsguruServiceIntegrationOpsCenter | cdktf.IResolvable | undefined);
    private _optInStatus?;
    get optInStatus(): string;
    set optInStatus(value: string);
    resetOptInStatus(): void;
    get optInStatusInput(): string | undefined;
}
export declare class DevopsguruServiceIntegrationOpsCenterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DevopsguruServiceIntegrationOpsCenter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DevopsguruServiceIntegrationOpsCenterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration}
*/
export declare class DevopsguruServiceIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_devopsguru_service_integration";
    /**
    * Generates CDKTF code for importing a DevopsguruServiceIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DevopsguruServiceIntegration to import
    * @param importFromId The id of the existing DevopsguruServiceIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DevopsguruServiceIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/devopsguru_service_integration aws_devopsguru_service_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DevopsguruServiceIntegrationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DevopsguruServiceIntegrationConfig);
    get id(): string;
    private _kmsServerSideEncryption;
    get kmsServerSideEncryption(): DevopsguruServiceIntegrationKmsServerSideEncryptionList;
    putKmsServerSideEncryption(value: DevopsguruServiceIntegrationKmsServerSideEncryption[] | cdktf.IResolvable): void;
    resetKmsServerSideEncryption(): void;
    get kmsServerSideEncryptionInput(): cdktf.IResolvable | DevopsguruServiceIntegrationKmsServerSideEncryption[] | undefined;
    private _logsAnomalyDetection;
    get logsAnomalyDetection(): DevopsguruServiceIntegrationLogsAnomalyDetectionList;
    putLogsAnomalyDetection(value: DevopsguruServiceIntegrationLogsAnomalyDetection[] | cdktf.IResolvable): void;
    resetLogsAnomalyDetection(): void;
    get logsAnomalyDetectionInput(): cdktf.IResolvable | DevopsguruServiceIntegrationLogsAnomalyDetection[] | undefined;
    private _opsCenter;
    get opsCenter(): DevopsguruServiceIntegrationOpsCenterList;
    putOpsCenter(value: DevopsguruServiceIntegrationOpsCenter[] | cdktf.IResolvable): void;
    resetOpsCenter(): void;
    get opsCenterInput(): cdktf.IResolvable | DevopsguruServiceIntegrationOpsCenter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
