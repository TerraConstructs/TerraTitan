/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DbOptionGroupConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Specifies the name of the engine that this option group should be associated with. */
    readonly engineName: string;
    /** */
    readonly id?: string;
    /** (Required) Specifies the major version of the engine that this option group should be associated with. */
    readonly majorEngineVersion: string;
    /** (Optional, Forces new resource) Name of the option group. If omitted, Terraform will assign a random, unique name. Must be lowercase, to match as it is stored in AWS. */
    readonly name?: string;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. Must be lowercase, to match as it is stored in AWS. */
    readonly namePrefix?: string;
    /** (Optional) Description of the option group. Defaults to "Managed by Terraform". */
    readonly optionGroupDescription?: string;
    /** (Optional) Set to true if you do not wish the option group to be deleted at destroy time, and instead just remove the option group from the Terraform state. */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** */
    readonly option?: DbOptionGroupOption[] | cdktf.IResolvable;
    /** */
    readonly timeouts?: DbOptionGroupTimeouts;
}
export interface DbOptionGroupOptionOptionSettings {
    /** (Required) Name of the setting. */
    readonly name: string;
    /** (Required) Value of the setting. */
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
    /** (Optional) List of DB Security Groups for which the option is enabled. */
    readonly dbSecurityGroupMemberships?: string[];
    /** (Required) Name of the option (e.g., MEMCACHED). */
    readonly optionName: string;
    /** (Optional) Port number when connecting to the option (e.g., 11211). Leaving out or removing `port` from your configuration does not remove or clear a port from the option in AWS. AWS may assign a default port. Not including `port` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any port changes. */
    readonly port?: number;
    /** (Optional) Version of the option (e.g., 13.1.0.0). Leaving out or removing `version` from your configuration does not remove or clear a version from the option in AWS. AWS may assign a default version. Not including `version` in your configuration means that the AWS provider will ignore a previously set value, a value set by AWS, and any version changes. */
    readonly version?: string;
    /** (Optional) List of VPC Security Groups for which the option is enabled. */
    readonly vpcSecurityGroupMemberships?: string[];
    /** */
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
    /** (Default `15m`) */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/db_option_group aws_db_option_group}
*/
export declare class DbOptionGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_db_option_group";
    /**
    * Generates CDKTF code for importing a DbOptionGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DbOptionGroup to import
    * @param importFromId The id of the existing DbOptionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/db_option_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DbOptionGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/db_option_group aws_db_option_group} Resource
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
