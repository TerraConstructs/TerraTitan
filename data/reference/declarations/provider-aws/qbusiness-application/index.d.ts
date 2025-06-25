/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface QbusinessApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * A description of the Amazon Q application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#description QbusinessApplication#description}
    */
    readonly description?: string;
    /**
    * The display name of the Amazon Q application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#display_name QbusinessApplication#display_name}
    */
    readonly displayName: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM service role that provides permissions for the Amazon Q application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#iam_service_role_arn QbusinessApplication#iam_service_role_arn}
    */
    readonly iamServiceRoleArn: string;
    /**
    * ARN of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#identity_center_instance_arn QbusinessApplication#identity_center_instance_arn}
    */
    readonly identityCenterInstanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#tags QbusinessApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * attachments_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#attachments_configuration QbusinessApplication#attachments_configuration}
    */
    readonly attachmentsConfiguration?: QbusinessApplicationAttachmentsConfiguration[] | cdktf.IResolvable;
    /**
    * encryption_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#encryption_configuration QbusinessApplication#encryption_configuration}
    */
    readonly encryptionConfiguration?: QbusinessApplicationEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#timeouts QbusinessApplication#timeouts}
    */
    readonly timeouts?: QbusinessApplicationTimeouts;
}
export interface QbusinessApplicationAttachmentsConfiguration {
    /**
    * Status information about whether file upload functionality is activated or deactivated for your end user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#attachments_control_mode QbusinessApplication#attachments_control_mode}
    */
    readonly attachmentsControlMode: string;
}
export declare function qbusinessApplicationAttachmentsConfigurationToTerraform(struct?: QbusinessApplicationAttachmentsConfiguration | cdktf.IResolvable): any;
export declare function qbusinessApplicationAttachmentsConfigurationToHclTerraform(struct?: QbusinessApplicationAttachmentsConfiguration | cdktf.IResolvable): any;
export declare class QbusinessApplicationAttachmentsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QbusinessApplicationAttachmentsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: QbusinessApplicationAttachmentsConfiguration | cdktf.IResolvable | undefined);
    private _attachmentsControlMode?;
    get attachmentsControlMode(): string;
    set attachmentsControlMode(value: string);
    get attachmentsControlModeInput(): string | undefined;
}
export declare class QbusinessApplicationAttachmentsConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QbusinessApplicationAttachmentsConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QbusinessApplicationAttachmentsConfigurationOutputReference;
}
export interface QbusinessApplicationEncryptionConfiguration {
    /**
    * The identifier of the AWS KMS key that is used to encrypt your data. Amazon Q doesn't support asymmetric keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#kms_key_id QbusinessApplication#kms_key_id}
    */
    readonly kmsKeyId: string;
}
export declare function qbusinessApplicationEncryptionConfigurationToTerraform(struct?: QbusinessApplicationEncryptionConfiguration | cdktf.IResolvable): any;
export declare function qbusinessApplicationEncryptionConfigurationToHclTerraform(struct?: QbusinessApplicationEncryptionConfiguration | cdktf.IResolvable): any;
export declare class QbusinessApplicationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): QbusinessApplicationEncryptionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: QbusinessApplicationEncryptionConfiguration | cdktf.IResolvable | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    get kmsKeyIdInput(): string | undefined;
}
export declare class QbusinessApplicationEncryptionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: QbusinessApplicationEncryptionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): QbusinessApplicationEncryptionConfigurationOutputReference;
}
export interface QbusinessApplicationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#create QbusinessApplication#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#delete QbusinessApplication#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#update QbusinessApplication#update}
    */
    readonly update?: string;
}
export declare function qbusinessApplicationTimeoutsToTerraform(struct?: QbusinessApplicationTimeouts | cdktf.IResolvable): any;
export declare function qbusinessApplicationTimeoutsToHclTerraform(struct?: QbusinessApplicationTimeouts | cdktf.IResolvable): any;
export declare class QbusinessApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): QbusinessApplicationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: QbusinessApplicationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application aws_qbusiness_application}
*/
export declare class QbusinessApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_qbusiness_application";
    /**
    * Generates CDKTF code for importing a QbusinessApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the QbusinessApplication to import
    * @param importFromId The id of the existing QbusinessApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the QbusinessApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/qbusiness_application aws_qbusiness_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options QbusinessApplicationConfig
    */
    constructor(scope: Construct, id: string, config: QbusinessApplicationConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
    private _iamServiceRoleArn?;
    get iamServiceRoleArn(): string;
    set iamServiceRoleArn(value: string);
    get iamServiceRoleArnInput(): string | undefined;
    get id(): string;
    get identityCenterApplicationArn(): string;
    private _identityCenterInstanceArn?;
    get identityCenterInstanceArn(): string;
    set identityCenterInstanceArn(value: string);
    get identityCenterInstanceArnInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _attachmentsConfiguration;
    get attachmentsConfiguration(): QbusinessApplicationAttachmentsConfigurationList;
    putAttachmentsConfiguration(value: QbusinessApplicationAttachmentsConfiguration[] | cdktf.IResolvable): void;
    resetAttachmentsConfiguration(): void;
    get attachmentsConfigurationInput(): cdktf.IResolvable | QbusinessApplicationAttachmentsConfiguration[] | undefined;
    private _encryptionConfiguration;
    get encryptionConfiguration(): QbusinessApplicationEncryptionConfigurationList;
    putEncryptionConfiguration(value: QbusinessApplicationEncryptionConfiguration[] | cdktf.IResolvable): void;
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): cdktf.IResolvable | QbusinessApplicationEncryptionConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): QbusinessApplicationTimeoutsOutputReference;
    putTimeouts(value: QbusinessApplicationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | QbusinessApplicationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
