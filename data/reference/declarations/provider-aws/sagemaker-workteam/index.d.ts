/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerWorkteamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}
    */
    readonly workforceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}
    */
    readonly workteamName: string;
    /**
    * member_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#member_definition SagemakerWorkteam#member_definition}
    */
    readonly memberDefinition: SagemakerWorkteamMemberDefinition[] | cdktf.IResolvable;
    /**
    * notification_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}
    */
    readonly notificationConfiguration?: SagemakerWorkteamNotificationConfiguration;
    /**
    * worker_access_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#worker_access_configuration SagemakerWorkteam#worker_access_configuration}
    */
    readonly workerAccessConfiguration?: SagemakerWorkteamWorkerAccessConfiguration;
}
export interface SagemakerWorkteamMemberDefinitionCognitoMemberDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}
    */
    readonly userGroup: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}
    */
    readonly userPool: string;
}
export declare function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): any;
export declare function sagemakerWorkteamMemberDefinitionCognitoMemberDefinitionToHclTerraform(struct?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): any;
export declare class SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkteamMemberDefinitionCognitoMemberDefinition | undefined;
    set internalValue(value: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string | undefined;
    private _userGroup?;
    get userGroup(): string;
    set userGroup(value: string);
    get userGroupInput(): string | undefined;
    private _userPool?;
    get userPool(): string;
    set userPool(value: string);
    get userPoolInput(): string | undefined;
}
export interface SagemakerWorkteamMemberDefinitionOidcMemberDefinition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}
    */
    readonly groups: string[];
}
export declare function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionOidcMemberDefinition): any;
export declare function sagemakerWorkteamMemberDefinitionOidcMemberDefinitionToHclTerraform(struct?: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference | SagemakerWorkteamMemberDefinitionOidcMemberDefinition): any;
export declare class SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkteamMemberDefinitionOidcMemberDefinition | undefined;
    set internalValue(value: SagemakerWorkteamMemberDefinitionOidcMemberDefinition | undefined);
    private _groups?;
    get groups(): string[];
    set groups(value: string[]);
    get groupsInput(): string[] | undefined;
}
export interface SagemakerWorkteamMemberDefinition {
    /**
    * cognito_member_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}
    */
    readonly cognitoMemberDefinition?: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
    /**
    * oidc_member_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}
    */
    readonly oidcMemberDefinition?: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
}
export declare function sagemakerWorkteamMemberDefinitionToTerraform(struct?: SagemakerWorkteamMemberDefinition | cdktf.IResolvable): any;
export declare function sagemakerWorkteamMemberDefinitionToHclTerraform(struct?: SagemakerWorkteamMemberDefinition | cdktf.IResolvable): any;
export declare class SagemakerWorkteamMemberDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerWorkteamMemberDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerWorkteamMemberDefinition | cdktf.IResolvable | undefined);
    private _cognitoMemberDefinition;
    get cognitoMemberDefinition(): SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference;
    putCognitoMemberDefinition(value: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): void;
    resetCognitoMemberDefinition(): void;
    get cognitoMemberDefinitionInput(): SagemakerWorkteamMemberDefinitionCognitoMemberDefinition | undefined;
    private _oidcMemberDefinition;
    get oidcMemberDefinition(): SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference;
    putOidcMemberDefinition(value: SagemakerWorkteamMemberDefinitionOidcMemberDefinition): void;
    resetOidcMemberDefinition(): void;
    get oidcMemberDefinitionInput(): SagemakerWorkteamMemberDefinitionOidcMemberDefinition | undefined;
}
export declare class SagemakerWorkteamMemberDefinitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerWorkteamMemberDefinition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerWorkteamMemberDefinitionOutputReference;
}
export interface SagemakerWorkteamNotificationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
}
export declare function sagemakerWorkteamNotificationConfigurationToTerraform(struct?: SagemakerWorkteamNotificationConfigurationOutputReference | SagemakerWorkteamNotificationConfiguration): any;
export declare function sagemakerWorkteamNotificationConfigurationToHclTerraform(struct?: SagemakerWorkteamNotificationConfigurationOutputReference | SagemakerWorkteamNotificationConfiguration): any;
export declare class SagemakerWorkteamNotificationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkteamNotificationConfiguration | undefined;
    set internalValue(value: SagemakerWorkteamNotificationConfiguration | undefined);
    private _notificationTopicArn?;
    get notificationTopicArn(): string;
    set notificationTopicArn(value: string);
    resetNotificationTopicArn(): void;
    get notificationTopicArnInput(): string | undefined;
}
export interface SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#source_ip SagemakerWorkteam#source_ip}
    */
    readonly sourceIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#vpc_source_ip SagemakerWorkteam#vpc_source_ip}
    */
    readonly vpcSourceIp?: string;
}
export declare function sagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsToTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints): any;
export declare function sagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsToHclTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints): any;
export declare class SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints | undefined;
    set internalValue(value: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints | undefined);
    private _sourceIp?;
    get sourceIp(): string;
    set sourceIp(value: string);
    resetSourceIp(): void;
    get sourceIpInput(): string | undefined;
    private _vpcSourceIp?;
    get vpcSourceIp(): string;
    set vpcSourceIp(value: string);
    resetVpcSourceIp(): void;
    get vpcSourceIpInput(): string | undefined;
}
export interface SagemakerWorkteamWorkerAccessConfigurationS3Presign {
    /**
    * iam_policy_constraints block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#iam_policy_constraints SagemakerWorkteam#iam_policy_constraints}
    */
    readonly iamPolicyConstraints?: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints;
}
export declare function sagemakerWorkteamWorkerAccessConfigurationS3PresignToTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3Presign): any;
export declare function sagemakerWorkteamWorkerAccessConfigurationS3PresignToHclTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference | SagemakerWorkteamWorkerAccessConfigurationS3Presign): any;
export declare class SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkteamWorkerAccessConfigurationS3Presign | undefined;
    set internalValue(value: SagemakerWorkteamWorkerAccessConfigurationS3Presign | undefined);
    private _iamPolicyConstraints;
    get iamPolicyConstraints(): SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraintsOutputReference;
    putIamPolicyConstraints(value: SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints): void;
    resetIamPolicyConstraints(): void;
    get iamPolicyConstraintsInput(): SagemakerWorkteamWorkerAccessConfigurationS3PresignIamPolicyConstraints | undefined;
}
export interface SagemakerWorkteamWorkerAccessConfiguration {
    /**
    * s3_presign block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#s3_presign SagemakerWorkteam#s3_presign}
    */
    readonly s3Presign?: SagemakerWorkteamWorkerAccessConfigurationS3Presign;
}
export declare function sagemakerWorkteamWorkerAccessConfigurationToTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationOutputReference | SagemakerWorkteamWorkerAccessConfiguration): any;
export declare function sagemakerWorkteamWorkerAccessConfigurationToHclTerraform(struct?: SagemakerWorkteamWorkerAccessConfigurationOutputReference | SagemakerWorkteamWorkerAccessConfiguration): any;
export declare class SagemakerWorkteamWorkerAccessConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerWorkteamWorkerAccessConfiguration | undefined;
    set internalValue(value: SagemakerWorkteamWorkerAccessConfiguration | undefined);
    private _s3Presign;
    get s3Presign(): SagemakerWorkteamWorkerAccessConfigurationS3PresignOutputReference;
    putS3Presign(value: SagemakerWorkteamWorkerAccessConfigurationS3Presign): void;
    resetS3Presign(): void;
    get s3PresignInput(): SagemakerWorkteamWorkerAccessConfigurationS3Presign | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam}
*/
export declare class SagemakerWorkteam extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_workteam";
    /**
    * Generates CDKTF code for importing a SagemakerWorkteam resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerWorkteam to import
    * @param importFromId The id of the existing SagemakerWorkteam that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerWorkteam to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_workteam aws_sagemaker_workteam} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkteamConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerWorkteamConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get subdomain(): string;
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
    private _workforceName?;
    get workforceName(): string;
    set workforceName(value: string);
    resetWorkforceName(): void;
    get workforceNameInput(): string | undefined;
    private _workteamName?;
    get workteamName(): string;
    set workteamName(value: string);
    get workteamNameInput(): string | undefined;
    private _memberDefinition;
    get memberDefinition(): SagemakerWorkteamMemberDefinitionList;
    putMemberDefinition(value: SagemakerWorkteamMemberDefinition[] | cdktf.IResolvable): void;
    get memberDefinitionInput(): cdktf.IResolvable | SagemakerWorkteamMemberDefinition[] | undefined;
    private _notificationConfiguration;
    get notificationConfiguration(): SagemakerWorkteamNotificationConfigurationOutputReference;
    putNotificationConfiguration(value: SagemakerWorkteamNotificationConfiguration): void;
    resetNotificationConfiguration(): void;
    get notificationConfigurationInput(): SagemakerWorkteamNotificationConfiguration | undefined;
    private _workerAccessConfiguration;
    get workerAccessConfiguration(): SagemakerWorkteamWorkerAccessConfigurationOutputReference;
    putWorkerAccessConfiguration(value: SagemakerWorkteamWorkerAccessConfiguration): void;
    resetWorkerAccessConfiguration(): void;
    get workerAccessConfigurationInput(): SagemakerWorkteamWorkerAccessConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
