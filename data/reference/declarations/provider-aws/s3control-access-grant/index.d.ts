/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlAccessGrantConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#access_grants_location_id S3ControlAccessGrant#access_grants_location_id}
    */
    readonly accessGrantsLocationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#account_id S3ControlAccessGrant#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#permission S3ControlAccessGrant#permission}
    */
    readonly permission: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#s3_prefix_type S3ControlAccessGrant#s3_prefix_type}
    */
    readonly s3PrefixType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#tags S3ControlAccessGrant#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * access_grants_location_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#access_grants_location_configuration S3ControlAccessGrant#access_grants_location_configuration}
    */
    readonly accessGrantsLocationConfiguration?: S3ControlAccessGrantAccessGrantsLocationConfiguration[] | cdktf.IResolvable;
    /**
    * grantee block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#grantee S3ControlAccessGrant#grantee}
    */
    readonly grantee?: S3ControlAccessGrantGrantee[] | cdktf.IResolvable;
}
export interface S3ControlAccessGrantAccessGrantsLocationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#s3_sub_prefix S3ControlAccessGrant#s3_sub_prefix}
    */
    readonly s3SubPrefix?: string;
}
export declare function s3ControlAccessGrantAccessGrantsLocationConfigurationToTerraform(struct?: S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable): any;
export declare function s3ControlAccessGrantAccessGrantsLocationConfigurationToHclTerraform(struct?: S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable): any;
export declare class S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlAccessGrantAccessGrantsLocationConfiguration | cdktf.IResolvable | undefined);
    private _s3SubPrefix?;
    get s3SubPrefix(): string;
    set s3SubPrefix(value: string);
    resetS3SubPrefix(): void;
    get s3SubPrefixInput(): string | undefined;
}
export declare class S3ControlAccessGrantAccessGrantsLocationConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ControlAccessGrantAccessGrantsLocationConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ControlAccessGrantAccessGrantsLocationConfigurationOutputReference;
}
export interface S3ControlAccessGrantGrantee {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#grantee_identifier S3ControlAccessGrant#grantee_identifier}
    */
    readonly granteeIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#grantee_type S3ControlAccessGrant#grantee_type}
    */
    readonly granteeType: string;
}
export declare function s3ControlAccessGrantGranteeToTerraform(struct?: S3ControlAccessGrantGrantee | cdktf.IResolvable): any;
export declare function s3ControlAccessGrantGranteeToHclTerraform(struct?: S3ControlAccessGrantGrantee | cdktf.IResolvable): any;
export declare class S3ControlAccessGrantGranteeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ControlAccessGrantGrantee | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlAccessGrantGrantee | cdktf.IResolvable | undefined);
    private _granteeIdentifier?;
    get granteeIdentifier(): string;
    set granteeIdentifier(value: string);
    get granteeIdentifierInput(): string | undefined;
    private _granteeType?;
    get granteeType(): string;
    set granteeType(value: string);
    get granteeTypeInput(): string | undefined;
}
export declare class S3ControlAccessGrantGranteeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ControlAccessGrantGrantee[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ControlAccessGrantGranteeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant aws_s3control_access_grant}
*/
export declare class S3ControlAccessGrant extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_access_grant";
    /**
    * Generates CDKTF code for importing a S3ControlAccessGrant resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlAccessGrant to import
    * @param importFromId The id of the existing S3ControlAccessGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlAccessGrant to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_access_grant aws_s3control_access_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlAccessGrantConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlAccessGrantConfig);
    get accessGrantArn(): string;
    get accessGrantId(): string;
    private _accessGrantsLocationId?;
    get accessGrantsLocationId(): string;
    set accessGrantsLocationId(value: string);
    get accessGrantsLocationIdInput(): string | undefined;
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get grantScope(): string;
    get id(): string;
    private _permission?;
    get permission(): string;
    set permission(value: string);
    get permissionInput(): string | undefined;
    private _s3PrefixType?;
    get s3PrefixType(): string;
    set s3PrefixType(value: string);
    resetS3PrefixType(): void;
    get s3PrefixTypeInput(): string | undefined;
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
    private _accessGrantsLocationConfiguration;
    get accessGrantsLocationConfiguration(): S3ControlAccessGrantAccessGrantsLocationConfigurationList;
    putAccessGrantsLocationConfiguration(value: S3ControlAccessGrantAccessGrantsLocationConfiguration[] | cdktf.IResolvable): void;
    resetAccessGrantsLocationConfiguration(): void;
    get accessGrantsLocationConfigurationInput(): cdktf.IResolvable | S3ControlAccessGrantAccessGrantsLocationConfiguration[] | undefined;
    private _grantee;
    get grantee(): S3ControlAccessGrantGranteeList;
    putGrantee(value: S3ControlAccessGrantGrantee[] | cdktf.IResolvable): void;
    resetGrantee(): void;
    get granteeInput(): cdktf.IResolvable | S3ControlAccessGrantGrantee[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
