/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatazoneUserProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#domain_identifier DatazoneUserProfile#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#status DatazoneUserProfile#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#user_identifier DatazoneUserProfile#user_identifier}
    */
    readonly userIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#user_type DatazoneUserProfile#user_type}
    */
    readonly userType?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#timeouts DatazoneUserProfile#timeouts}
    */
    readonly timeouts?: DatazoneUserProfileTimeouts;
}
export interface DatazoneUserProfileDetailsIam {
}
export declare function datazoneUserProfileDetailsIamToTerraform(struct?: DatazoneUserProfileDetailsIam): any;
export declare function datazoneUserProfileDetailsIamToHclTerraform(struct?: DatazoneUserProfileDetailsIam): any;
export declare class DatazoneUserProfileDetailsIamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneUserProfileDetailsIam | undefined;
    set internalValue(value: DatazoneUserProfileDetailsIam | undefined);
    get arn(): string;
}
export declare class DatazoneUserProfileDetailsIamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneUserProfileDetailsIamOutputReference;
}
export interface DatazoneUserProfileDetailsSso {
}
export declare function datazoneUserProfileDetailsSsoToTerraform(struct?: DatazoneUserProfileDetailsSso): any;
export declare function datazoneUserProfileDetailsSsoToHclTerraform(struct?: DatazoneUserProfileDetailsSso): any;
export declare class DatazoneUserProfileDetailsSsoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneUserProfileDetailsSso | undefined;
    set internalValue(value: DatazoneUserProfileDetailsSso | undefined);
    get firstName(): string;
    get lastName(): string;
    get userName(): string;
}
export declare class DatazoneUserProfileDetailsSsoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneUserProfileDetailsSsoOutputReference;
}
export interface DatazoneUserProfileDetails {
}
export declare function datazoneUserProfileDetailsToTerraform(struct?: DatazoneUserProfileDetails): any;
export declare function datazoneUserProfileDetailsToHclTerraform(struct?: DatazoneUserProfileDetails): any;
export declare class DatazoneUserProfileDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatazoneUserProfileDetails | undefined;
    set internalValue(value: DatazoneUserProfileDetails | undefined);
    private _iam;
    get iam(): DatazoneUserProfileDetailsIamList;
    private _sso;
    get sso(): DatazoneUserProfileDetailsSsoList;
}
export declare class DatazoneUserProfileDetailsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatazoneUserProfileDetailsOutputReference;
}
export interface DatazoneUserProfileTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#create DatazoneUserProfile#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#update DatazoneUserProfile#update}
    */
    readonly update?: string;
}
export declare function datazoneUserProfileTimeoutsToTerraform(struct?: DatazoneUserProfileTimeouts | cdktf.IResolvable): any;
export declare function datazoneUserProfileTimeoutsToHclTerraform(struct?: DatazoneUserProfileTimeouts | cdktf.IResolvable): any;
export declare class DatazoneUserProfileTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DatazoneUserProfileTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DatazoneUserProfileTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile aws_datazone_user_profile}
*/
export declare class DatazoneUserProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datazone_user_profile";
    /**
    * Generates CDKTF code for importing a DatazoneUserProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatazoneUserProfile to import
    * @param importFromId The id of the existing DatazoneUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatazoneUserProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/datazone_user_profile aws_datazone_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatazoneUserProfileConfig
    */
    constructor(scope: Construct, id: string, config: DatazoneUserProfileConfig);
    private _details;
    get details(): DatazoneUserProfileDetailsList;
    private _domainIdentifier?;
    get domainIdentifier(): string;
    set domainIdentifier(value: string);
    get domainIdentifierInput(): string | undefined;
    get id(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    get type(): string;
    private _userIdentifier?;
    get userIdentifier(): string;
    set userIdentifier(value: string);
    get userIdentifierInput(): string | undefined;
    private _userType?;
    get userType(): string;
    set userType(value: string);
    resetUserType(): void;
    get userTypeInput(): string | undefined;
    private _timeouts;
    get timeouts(): DatazoneUserProfileTimeoutsOutputReference;
    putTimeouts(value: DatazoneUserProfileTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DatazoneUserProfileTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
