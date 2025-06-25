/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CleanroomsMembershipConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#collaboration_id CleanroomsMembership#collaboration_id}
    */
    readonly collaborationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#query_log_status CleanroomsMembership#query_log_status}
    */
    readonly queryLogStatus: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#tags CleanroomsMembership#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * default_result_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#default_result_configuration CleanroomsMembership#default_result_configuration}
    */
    readonly defaultResultConfiguration?: CleanroomsMembershipDefaultResultConfiguration[] | cdktf.IResolvable;
    /**
    * payment_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#payment_configuration CleanroomsMembership#payment_configuration}
    */
    readonly paymentConfiguration?: CleanroomsMembershipPaymentConfiguration[] | cdktf.IResolvable;
}
export interface CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#bucket CleanroomsMembership#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#key_prefix CleanroomsMembership#key_prefix}
    */
    readonly keyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#result_format CleanroomsMembership#result_format}
    */
    readonly resultFormat: string;
}
export declare function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable): any;
export declare function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3ToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable): any;
export declare class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3 | cdktf.IResolvable | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _keyPrefix?;
    get keyPrefix(): string;
    set keyPrefix(value: string);
    resetKeyPrefix(): void;
    get keyPrefixInput(): string | undefined;
    private _resultFormat?;
    get resultFormat(): string;
    set resultFormat(value: string);
    get resultFormatInput(): string | undefined;
}
export declare class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3OutputReference;
}
export interface CleanroomsMembershipDefaultResultConfigurationOutputConfiguration {
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#s3 CleanroomsMembership#s3}
    */
    readonly s3?: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[] | cdktf.IResolvable;
}
export declare function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable): any;
export declare function cleanroomsMembershipDefaultResultConfigurationOutputConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable): any;
export declare class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration | cdktf.IResolvable | undefined);
    private _s3;
    get s3(): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3List;
    putS3(value: CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[] | cdktf.IResolvable): void;
    resetS3(): void;
    get s3Input(): cdktf.IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfigurationS3[] | undefined;
}
export declare class CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationOutputReference;
}
export interface CleanroomsMembershipDefaultResultConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#role_arn CleanroomsMembership#role_arn}
    */
    readonly roleArn?: string;
    /**
    * output_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#output_configuration CleanroomsMembership#output_configuration}
    */
    readonly outputConfiguration?: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[] | cdktf.IResolvable;
}
export declare function cleanroomsMembershipDefaultResultConfigurationToTerraform(struct?: CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable): any;
export declare function cleanroomsMembershipDefaultResultConfigurationToHclTerraform(struct?: CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable): any;
export declare class CleanroomsMembershipDefaultResultConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsMembershipDefaultResultConfiguration | cdktf.IResolvable | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _outputConfiguration;
    get outputConfiguration(): CleanroomsMembershipDefaultResultConfigurationOutputConfigurationList;
    putOutputConfiguration(value: CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[] | cdktf.IResolvable): void;
    resetOutputConfiguration(): void;
    get outputConfigurationInput(): cdktf.IResolvable | CleanroomsMembershipDefaultResultConfigurationOutputConfiguration[] | undefined;
}
export declare class CleanroomsMembershipDefaultResultConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CleanroomsMembershipDefaultResultConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CleanroomsMembershipDefaultResultConfigurationOutputReference;
}
export interface CleanroomsMembershipPaymentConfigurationQueryCompute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#is_responsible CleanroomsMembership#is_responsible}
    */
    readonly isResponsible: boolean | cdktf.IResolvable;
}
export declare function cleanroomsMembershipPaymentConfigurationQueryComputeToTerraform(struct?: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable): any;
export declare function cleanroomsMembershipPaymentConfigurationQueryComputeToHclTerraform(struct?: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable): any;
export declare class CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsMembershipPaymentConfigurationQueryCompute | cdktf.IResolvable | undefined);
    private _isResponsible?;
    get isResponsible(): boolean | cdktf.IResolvable;
    set isResponsible(value: boolean | cdktf.IResolvable);
    get isResponsibleInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class CleanroomsMembershipPaymentConfigurationQueryComputeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CleanroomsMembershipPaymentConfigurationQueryCompute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CleanroomsMembershipPaymentConfigurationQueryComputeOutputReference;
}
export interface CleanroomsMembershipPaymentConfiguration {
    /**
    * query_compute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#query_compute CleanroomsMembership#query_compute}
    */
    readonly queryCompute?: CleanroomsMembershipPaymentConfigurationQueryCompute[] | cdktf.IResolvable;
}
export declare function cleanroomsMembershipPaymentConfigurationToTerraform(struct?: CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable): any;
export declare function cleanroomsMembershipPaymentConfigurationToHclTerraform(struct?: CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable): any;
export declare class CleanroomsMembershipPaymentConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: CleanroomsMembershipPaymentConfiguration | cdktf.IResolvable | undefined);
    private _queryCompute;
    get queryCompute(): CleanroomsMembershipPaymentConfigurationQueryComputeList;
    putQueryCompute(value: CleanroomsMembershipPaymentConfigurationQueryCompute[] | cdktf.IResolvable): void;
    resetQueryCompute(): void;
    get queryComputeInput(): cdktf.IResolvable | CleanroomsMembershipPaymentConfigurationQueryCompute[] | undefined;
}
export declare class CleanroomsMembershipPaymentConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CleanroomsMembershipPaymentConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CleanroomsMembershipPaymentConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership}
*/
export declare class CleanroomsMembership extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cleanrooms_membership";
    /**
    * Generates CDKTF code for importing a CleanroomsMembership resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CleanroomsMembership to import
    * @param importFromId The id of the existing CleanroomsMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CleanroomsMembership to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cleanrooms_membership aws_cleanrooms_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CleanroomsMembershipConfig
    */
    constructor(scope: Construct, id: string, config: CleanroomsMembershipConfig);
    get arn(): string;
    get collaborationArn(): string;
    get collaborationCreatorAccountId(): string;
    get collaborationCreatorDisplayName(): string;
    private _collaborationId?;
    get collaborationId(): string;
    set collaborationId(value: string);
    get collaborationIdInput(): string | undefined;
    get collaborationName(): string;
    get createTime(): string;
    get id(): string;
    get memberAbilities(): string[];
    private _queryLogStatus?;
    get queryLogStatus(): string;
    set queryLogStatus(value: string);
    get queryLogStatusInput(): string | undefined;
    get status(): string;
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
    get updateTime(): string;
    private _defaultResultConfiguration;
    get defaultResultConfiguration(): CleanroomsMembershipDefaultResultConfigurationList;
    putDefaultResultConfiguration(value: CleanroomsMembershipDefaultResultConfiguration[] | cdktf.IResolvable): void;
    resetDefaultResultConfiguration(): void;
    get defaultResultConfigurationInput(): cdktf.IResolvable | CleanroomsMembershipDefaultResultConfiguration[] | undefined;
    private _paymentConfiguration;
    get paymentConfiguration(): CleanroomsMembershipPaymentConfigurationList;
    putPaymentConfiguration(value: CleanroomsMembershipPaymentConfiguration[] | cdktf.IResolvable): void;
    resetPaymentConfiguration(): void;
    get paymentConfigurationInput(): cdktf.IResolvable | CleanroomsMembershipPaymentConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
