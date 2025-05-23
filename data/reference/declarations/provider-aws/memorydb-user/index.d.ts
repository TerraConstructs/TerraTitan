/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MemorydbUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#access_string MemorydbUser#access_string}
    */
    readonly accessString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#id MemorydbUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#tags MemorydbUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#tags_all MemorydbUser#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#user_name MemorydbUser#user_name}
    */
    readonly userName: string;
    /**
    * authentication_mode block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#authentication_mode MemorydbUser#authentication_mode}
    */
    readonly authenticationMode: MemorydbUserAuthenticationMode;
}
export interface MemorydbUserAuthenticationMode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#passwords MemorydbUser#passwords}
    */
    readonly passwords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#type MemorydbUser#type}
    */
    readonly type: string;
}
export declare function memorydbUserAuthenticationModeToTerraform(struct?: MemorydbUserAuthenticationModeOutputReference | MemorydbUserAuthenticationMode): any;
export declare function memorydbUserAuthenticationModeToHclTerraform(struct?: MemorydbUserAuthenticationModeOutputReference | MemorydbUserAuthenticationMode): any;
export declare class MemorydbUserAuthenticationModeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): MemorydbUserAuthenticationMode | undefined;
    set internalValue(value: MemorydbUserAuthenticationMode | undefined);
    get passwordCount(): number;
    private _passwords?;
    get passwords(): string[];
    set passwords(value: string[]);
    resetPasswords(): void;
    get passwordsInput(): string[] | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user aws_memorydb_user}
*/
export declare class MemorydbUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_memorydb_user";
    /**
    * Generates CDKTF code for importing a MemorydbUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MemorydbUser to import
    * @param importFromId The id of the existing MemorydbUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MemorydbUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_user aws_memorydb_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MemorydbUserConfig
    */
    constructor(scope: Construct, id: string, config: MemorydbUserConfig);
    private _accessString?;
    get accessString(): string;
    set accessString(value: string);
    get accessStringInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get minimumEngineVersion(): string;
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
    private _userName?;
    get userName(): string;
    set userName(value: string);
    get userNameInput(): string | undefined;
    private _authenticationMode;
    get authenticationMode(): MemorydbUserAuthenticationModeOutputReference;
    putAuthenticationMode(value: MemorydbUserAuthenticationMode): void;
    get authenticationModeInput(): MemorydbUserAuthenticationMode | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
