/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RolesanywhereProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}
    */
    readonly durationSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#id RolesanywhereProfile#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}
    */
    readonly managedPolicyArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#name RolesanywhereProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}
    */
    readonly requireInstanceProperties?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}
    */
    readonly roleArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}
    */
    readonly sessionPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#tags RolesanywhereProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile aws_rolesanywhere_profile}
*/
export declare class RolesanywhereProfile extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_rolesanywhere_profile";
    /**
    * Generates CDKTF code for importing a RolesanywhereProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RolesanywhereProfile to import
    * @param importFromId The id of the existing RolesanywhereProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RolesanywhereProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/rolesanywhere_profile aws_rolesanywhere_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RolesanywhereProfileConfig
    */
    constructor(scope: Construct, id: string, config: RolesanywhereProfileConfig);
    get arn(): string;
    private _durationSeconds?;
    get durationSeconds(): number;
    set durationSeconds(value: number);
    resetDurationSeconds(): void;
    get durationSecondsInput(): number | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _managedPolicyArns?;
    get managedPolicyArns(): string[];
    set managedPolicyArns(value: string[]);
    resetManagedPolicyArns(): void;
    get managedPolicyArnsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _requireInstanceProperties?;
    get requireInstanceProperties(): boolean | cdktf.IResolvable;
    set requireInstanceProperties(value: boolean | cdktf.IResolvable);
    resetRequireInstanceProperties(): void;
    get requireInstancePropertiesInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArns?;
    get roleArns(): string[];
    set roleArns(value: string[]);
    resetRoleArns(): void;
    get roleArnsInput(): string[] | undefined;
    private _sessionPolicy?;
    get sessionPolicy(): string;
    set sessionPolicy(value: string);
    resetSessionPolicy(): void;
    get sessionPolicyInput(): string | undefined;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
