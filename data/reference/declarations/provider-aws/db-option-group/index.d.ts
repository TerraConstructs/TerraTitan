/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbOptionGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#engine_name DbOptionGroup#engine_name}
    */
    readonly engineName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#id DbOptionGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#major_engine_version DbOptionGroup#major_engine_version}
    */
    readonly majorEngineVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#name DbOptionGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#name_prefix DbOptionGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#option_group_description DbOptionGroup#option_group_description}
    */
    readonly optionGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#skip_destroy DbOptionGroup#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#tags DbOptionGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#tags_all DbOptionGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * option block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#option DbOptionGroup#option}
    */
    readonly option?: DbOptionGroupOption[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#timeouts DbOptionGroup#timeouts}
    */
    readonly timeouts?: DbOptionGroupTimeouts;
}
export interface DbOptionGroupOptionOptionSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#name DbOptionGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#value DbOptionGroup#value}
    */
    readonly value: string;
}
export declare function dbOptionGroupOptionOptionSettingsToTerraform(struct?: DbOptionGroupOptionOptionSettings | cdktf.IResolvable): any;
export declare function dbOptionGroupOptionOptionSettingsToHclTerraform(struct?: DbOptionGroupOptionOptionSettings | cdktf.IResolvable): any;
export declare class DbOptionGroupOptionOptionSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DbOptionGroupOptionOptionSettings | cdktf.IResolvable | undefined;
    set internalValue(value: DbOptionGroupOptionOptionSettings | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class DbOptionGroupOptionOptionSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DbOptionGroupOptionOptionSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DbOptionGroupOptionOptionSettingsOutputReference;
}
export interface DbOptionGroupOption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#db_security_group_memberships DbOptionGroup#db_security_group_memberships}
    */
    readonly dbSecurityGroupMemberships?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#option_name DbOptionGroup#option_name}
    */
    readonly optionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#port DbOptionGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#version DbOptionGroup#version}
    */
    readonly version?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#vpc_security_group_memberships DbOptionGroup#vpc_security_group_memberships}
    */
    readonly vpcSecurityGroupMemberships?: string[];
    /**
    * option_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#option_settings DbOptionGroup#option_settings}
    */
    readonly optionSettings?: DbOptionGroupOptionOptionSettings[] | cdktf.IResolvable;
}
export declare function dbOptionGroupOptionToTerraform(struct?: DbOptionGroupOption | cdktf.IResolvable): any;
export declare function dbOptionGroupOptionToHclTerraform(struct?: DbOptionGroupOption | cdktf.IResolvable): any;
export declare class DbOptionGroupOptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DbOptionGroupOption | cdktf.IResolvable | undefined;
    set internalValue(value: DbOptionGroupOption | cdktf.IResolvable | undefined);
    private _dbSecurityGroupMemberships?;
    get dbSecurityGroupMemberships(): string[];
    set dbSecurityGroupMemberships(value: string[]);
    resetDbSecurityGroupMemberships(): void;
    get dbSecurityGroupMembershipsInput(): string[] | undefined;
    private _optionName?;
    get optionName(): string;
    set optionName(value: string);
    get optionNameInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _vpcSecurityGroupMemberships?;
    get vpcSecurityGroupMemberships(): string[];
    set vpcSecurityGroupMemberships(value: string[]);
    resetVpcSecurityGroupMemberships(): void;
    get vpcSecurityGroupMembershipsInput(): string[] | undefined;
    private _optionSettings;
    get optionSettings(): DbOptionGroupOptionOptionSettingsList;
    putOptionSettings(value: DbOptionGroupOptionOptionSettings[] | cdktf.IResolvable): void;
    resetOptionSettings(): void;
    get optionSettingsInput(): cdktf.IResolvable | DbOptionGroupOptionOptionSettings[] | undefined;
}
export declare class DbOptionGroupOptionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DbOptionGroupOption[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DbOptionGroupOptionOutputReference;
}
export interface DbOptionGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#delete DbOptionGroup#delete}
    */
    readonly delete?: string;
}
export declare function dbOptionGroupTimeoutsToTerraform(struct?: DbOptionGroupTimeouts | cdktf.IResolvable): any;
export declare function dbOptionGroupTimeoutsToHclTerraform(struct?: DbOptionGroupTimeouts | cdktf.IResolvable): any;
export declare class DbOptionGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DbOptionGroupTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DbOptionGroupTimeouts | cdktf.IResolvable | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group aws_db_option_group}
*/
export declare class DbOptionGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_option_group";
    /**
    * Generates CDKTF code for importing a DbOptionGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbOptionGroup to import
    * @param importFromId The id of the existing DbOptionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbOptionGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/db_option_group aws_db_option_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbOptionGroupConfig
    */
    constructor(scope: Construct, id: string, config: DbOptionGroupConfig);
    get arn(): string;
    private _engineName?;
    get engineName(): string;
    set engineName(value: string);
    get engineNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _majorEngineVersion?;
    get majorEngineVersion(): string;
    set majorEngineVersion(value: string);
    get majorEngineVersionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _optionGroupDescription?;
    get optionGroupDescription(): string;
    set optionGroupDescription(value: string);
    resetOptionGroupDescription(): void;
    get optionGroupDescriptionInput(): string | undefined;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable | undefined;
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
    private _option;
    get option(): DbOptionGroupOptionList;
    putOption(value: DbOptionGroupOption[] | cdktf.IResolvable): void;
    resetOption(): void;
    get optionInput(): cdktf.IResolvable | DbOptionGroupOption[] | undefined;
    private _timeouts;
    get timeouts(): DbOptionGroupTimeoutsOutputReference;
    putTimeouts(value: DbOptionGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DbOptionGroupTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
