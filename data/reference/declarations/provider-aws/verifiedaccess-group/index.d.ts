/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VerifiedaccessGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#description VerifiedaccessGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#id VerifiedaccessGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#policy_document VerifiedaccessGroup#policy_document}
    */
    readonly policyDocument?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#tags VerifiedaccessGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#tags_all VerifiedaccessGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#verifiedaccess_instance_id VerifiedaccessGroup#verifiedaccess_instance_id}
    */
    readonly verifiedaccessInstanceId: string;
    /**
    * sse_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#sse_configuration VerifiedaccessGroup#sse_configuration}
    */
    readonly sseConfiguration?: VerifiedaccessGroupSseConfiguration;
}
export interface VerifiedaccessGroupSseConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#customer_managed_key_enabled VerifiedaccessGroup#customer_managed_key_enabled}
    */
    readonly customerManagedKeyEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#kms_key_arn VerifiedaccessGroup#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export declare function verifiedaccessGroupSseConfigurationToTerraform(struct?: VerifiedaccessGroupSseConfigurationOutputReference | VerifiedaccessGroupSseConfiguration): any;
export declare function verifiedaccessGroupSseConfigurationToHclTerraform(struct?: VerifiedaccessGroupSseConfigurationOutputReference | VerifiedaccessGroupSseConfiguration): any;
export declare class VerifiedaccessGroupSseConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VerifiedaccessGroupSseConfiguration | undefined;
    set internalValue(value: VerifiedaccessGroupSseConfiguration | undefined);
    private _customerManagedKeyEnabled?;
    get customerManagedKeyEnabled(): boolean | cdktf.IResolvable;
    set customerManagedKeyEnabled(value: boolean | cdktf.IResolvable);
    resetCustomerManagedKeyEnabled(): void;
    get customerManagedKeyEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group aws_verifiedaccess_group}
*/
export declare class VerifiedaccessGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_verifiedaccess_group";
    /**
    * Generates CDKTF code for importing a VerifiedaccessGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VerifiedaccessGroup to import
    * @param importFromId The id of the existing VerifiedaccessGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VerifiedaccessGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/verifiedaccess_group aws_verifiedaccess_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VerifiedaccessGroupConfig
    */
    constructor(scope: Construct, id: string, config: VerifiedaccessGroupConfig);
    get creationTime(): string;
    get deletionTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedTime(): string;
    get owner(): string;
    private _policyDocument?;
    get policyDocument(): string;
    set policyDocument(value: string);
    resetPolicyDocument(): void;
    get policyDocumentInput(): string | undefined;
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
    get verifiedaccessGroupArn(): string;
    get verifiedaccessGroupId(): string;
    private _verifiedaccessInstanceId?;
    get verifiedaccessInstanceId(): string;
    set verifiedaccessInstanceId(value: string);
    get verifiedaccessInstanceIdInput(): string | undefined;
    private _sseConfiguration;
    get sseConfiguration(): VerifiedaccessGroupSseConfigurationOutputReference;
    putSseConfiguration(value: VerifiedaccessGroupSseConfiguration): void;
    resetSseConfiguration(): void;
    get sseConfigurationInput(): VerifiedaccessGroupSseConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
