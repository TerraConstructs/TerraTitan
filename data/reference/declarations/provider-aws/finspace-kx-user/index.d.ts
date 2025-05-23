/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FinspaceKxUserConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#environment_id FinspaceKxUser#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#iam_role FinspaceKxUser#iam_role}
    */
    readonly iamRole: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#id FinspaceKxUser#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#name FinspaceKxUser#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#tags FinspaceKxUser#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#tags_all FinspaceKxUser#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#timeouts FinspaceKxUser#timeouts}
    */
    readonly timeouts?: FinspaceKxUserTimeouts;
}
export interface FinspaceKxUserTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#create FinspaceKxUser#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#delete FinspaceKxUser#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#update FinspaceKxUser#update}
    */
    readonly update?: string;
}
export declare function finspaceKxUserTimeoutsToTerraform(struct?: FinspaceKxUserTimeouts | cdktf.IResolvable): any;
export declare function finspaceKxUserTimeoutsToHclTerraform(struct?: FinspaceKxUserTimeouts | cdktf.IResolvable): any;
export declare class FinspaceKxUserTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxUserTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxUserTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user aws_finspace_kx_user}
*/
export declare class FinspaceKxUser extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_finspace_kx_user";
    /**
    * Generates CDKTF code for importing a FinspaceKxUser resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FinspaceKxUser to import
    * @param importFromId The id of the existing FinspaceKxUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FinspaceKxUser to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_user aws_finspace_kx_user} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FinspaceKxUserConfig
    */
    constructor(scope: Construct, id: string, config: FinspaceKxUserConfig);
    get arn(): string;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _iamRole?;
    get iamRole(): string;
    set iamRole(value: string);
    get iamRoleInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    get timeouts(): FinspaceKxUserTimeoutsOutputReference;
    putTimeouts(value: FinspaceKxUserTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FinspaceKxUserTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
