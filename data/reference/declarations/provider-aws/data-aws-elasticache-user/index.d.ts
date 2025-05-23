/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsElasticacheUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#access_string DataAwsElasticacheUser#access_string}
    */
    readonly accessString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#engine DataAwsElasticacheUser#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#id DataAwsElasticacheUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#no_password_required DataAwsElasticacheUser#no_password_required}
    */
    readonly noPasswordRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#passwords DataAwsElasticacheUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#user_id DataAwsElasticacheUser#user_id}
    */
    readonly userId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#user_name DataAwsElasticacheUser#user_name}
    */
    readonly userName?: string;
    /**
    * authentication_mode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#authentication_mode DataAwsElasticacheUser#authentication_mode}
    */
    readonly authenticationMode?: DataAwsElasticacheUserAuthenticationMode[] | cdktf.IResolvable;
}
export interface DataAwsElasticacheUserAuthenticationMode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#password_count DataAwsElasticacheUser#password_count}
    */
    readonly passwordCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#type DataAwsElasticacheUser#type}
    */
    readonly type?: string;
}
export declare function dataAwsElasticacheUserAuthenticationModeToTerraform(struct?: DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable): any;
export declare function dataAwsElasticacheUserAuthenticationModeToHclTerraform(struct?: DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable): any;
export declare class DataAwsElasticacheUserAuthenticationModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsElasticacheUserAuthenticationMode | cdktf.IResolvable | undefined);
    private _passwordCount?;
    get passwordCount(): number;
    set passwordCount(value: number);
    resetPasswordCount(): void;
    get passwordCountInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class DataAwsElasticacheUserAuthenticationModeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsElasticacheUserAuthenticationMode[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsElasticacheUserAuthenticationModeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user aws_elasticache_user}
*/
export declare class DataAwsElasticacheUser extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_elasticache_user";
    /**
    * Generates CDKTF code for importing a DataAwsElasticacheUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsElasticacheUser to import
    * @param importFromId The id of the existing DataAwsElasticacheUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsElasticacheUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/elasticache_user aws_elasticache_user} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticacheUserConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticacheUserConfig);
    private _accessString?;
    get accessString(): string;
    set accessString(value: string);
    resetAccessString(): void;
    get accessStringInput(): string | undefined;
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _noPasswordRequired?;
    get noPasswordRequired(): boolean | cdktf.IResolvable;
    set noPasswordRequired(value: boolean | cdktf.IResolvable);
    resetNoPasswordRequired(): void;
    get noPasswordRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _passwords?;
    get passwords(): string[];
    set passwords(value: string[]);
    resetPasswords(): void;
    get passwordsInput(): string[] | undefined;
    private _userId?;
    get userId(): string;
    set userId(value: string);
    get userIdInput(): string | undefined;
    private _userName?;
    get userName(): string;
    set userName(value: string);
    resetUserName(): void;
    get userNameInput(): string | undefined;
    private _authenticationMode;
    get authenticationMode(): DataAwsElasticacheUserAuthenticationModeList;
    putAuthenticationMode(value: DataAwsElasticacheUserAuthenticationMode[] | cdktf.IResolvable): void;
    resetAuthenticationMode(): void;
    get authenticationModeInput(): cdktf.IResolvable | DataAwsElasticacheUserAuthenticationMode[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
