/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#allow_external_principals RamResourceShare#allow_external_principals}
    */
    readonly allowExternalPrincipals?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#id RamResourceShare#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#name RamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#permission_arns RamResourceShare#permission_arns}
    */
    readonly permissionArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#tags RamResourceShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#tags_all RamResourceShare#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#timeouts RamResourceShare#timeouts}
    */
    readonly timeouts?: RamResourceShareTimeouts;
}
export interface RamResourceShareTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#create RamResourceShare#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#delete RamResourceShare#delete}
    */
    readonly delete?: string;
}
export declare function ramResourceShareTimeoutsToTerraform(struct?: RamResourceShareTimeouts | cdktf.IResolvable): any;
export declare function ramResourceShareTimeoutsToHclTerraform(struct?: RamResourceShareTimeouts | cdktf.IResolvable): any;
export declare class RamResourceShareTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RamResourceShareTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RamResourceShareTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share aws_ram_resource_share}
*/
export declare class RamResourceShare extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ram_resource_share";
    /**
    * Generates CDKTF code for importing a RamResourceShare resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RamResourceShare to import
    * @param importFromId The id of the existing RamResourceShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RamResourceShare to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ram_resource_share aws_ram_resource_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareConfig
    */
    constructor(scope: Construct, id: string, config: RamResourceShareConfig);
    private _allowExternalPrincipals?;
    get allowExternalPrincipals(): boolean | cdktf.IResolvable;
    set allowExternalPrincipals(value: boolean | cdktf.IResolvable);
    resetAllowExternalPrincipals(): void;
    get allowExternalPrincipalsInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _permissionArns?;
    get permissionArns(): string[];
    set permissionArns(value: string[]);
    resetPermissionArns(): void;
    get permissionArnsInput(): string[] | undefined;
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
    private _timeouts;
    get timeouts(): RamResourceShareTimeoutsOutputReference;
    putTimeouts(value: RamResourceShareTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RamResourceShareTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
