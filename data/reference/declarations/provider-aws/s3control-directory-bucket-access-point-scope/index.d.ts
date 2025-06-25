/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlDirectoryBucketAccessPointScopeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope#account_id S3ControlDirectoryBucketAccessPointScope#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope#name S3ControlDirectoryBucketAccessPointScope#name}
    */
    readonly name: string;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope#scope S3ControlDirectoryBucketAccessPointScope#scope}
    */
    readonly scope?: S3ControlDirectoryBucketAccessPointScopeScope[] | cdktf.IResolvable;
}
export interface S3ControlDirectoryBucketAccessPointScopeScope {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope#permissions S3ControlDirectoryBucketAccessPointScope#permissions}
    */
    readonly permissions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope#prefixes S3ControlDirectoryBucketAccessPointScope#prefixes}
    */
    readonly prefixes?: string[];
}
export declare function s3ControlDirectoryBucketAccessPointScopeScopeToTerraform(struct?: S3ControlDirectoryBucketAccessPointScopeScope | cdktf.IResolvable): any;
export declare function s3ControlDirectoryBucketAccessPointScopeScopeToHclTerraform(struct?: S3ControlDirectoryBucketAccessPointScopeScope | cdktf.IResolvable): any;
export declare class S3ControlDirectoryBucketAccessPointScopeScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ControlDirectoryBucketAccessPointScopeScope | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlDirectoryBucketAccessPointScopeScope | cdktf.IResolvable | undefined);
    private _permissions?;
    get permissions(): string[];
    set permissions(value: string[]);
    resetPermissions(): void;
    get permissionsInput(): string[] | undefined;
    private _prefixes?;
    get prefixes(): string[];
    set prefixes(value: string[]);
    resetPrefixes(): void;
    get prefixesInput(): string[] | undefined;
}
export declare class S3ControlDirectoryBucketAccessPointScopeScopeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ControlDirectoryBucketAccessPointScopeScope[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ControlDirectoryBucketAccessPointScopeScopeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope aws_s3control_directory_bucket_access_point_scope}
*/
export declare class S3ControlDirectoryBucketAccessPointScope extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_directory_bucket_access_point_scope";
    /**
    * Generates CDKTF code for importing a S3ControlDirectoryBucketAccessPointScope resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlDirectoryBucketAccessPointScope to import
    * @param importFromId The id of the existing S3ControlDirectoryBucketAccessPointScope that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlDirectoryBucketAccessPointScope to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/s3control_directory_bucket_access_point_scope aws_s3control_directory_bucket_access_point_scope} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlDirectoryBucketAccessPointScopeConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlDirectoryBucketAccessPointScopeConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _scope;
    get scope(): S3ControlDirectoryBucketAccessPointScopeScopeList;
    putScope(value: S3ControlDirectoryBucketAccessPointScopeScope[] | cdktf.IResolvable): void;
    resetScope(): void;
    get scopeInput(): cdktf.IResolvable | S3ControlDirectoryBucketAccessPointScopeScope[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
