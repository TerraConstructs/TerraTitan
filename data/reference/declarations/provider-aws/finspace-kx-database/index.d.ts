/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FinspaceKxDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#description FinspaceKxDatabase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#environment_id FinspaceKxDatabase#environment_id}
    */
    readonly environmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#id FinspaceKxDatabase#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#name FinspaceKxDatabase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#tags FinspaceKxDatabase#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#tags_all FinspaceKxDatabase#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#timeouts FinspaceKxDatabase#timeouts}
    */
    readonly timeouts?: FinspaceKxDatabaseTimeouts;
}
export interface FinspaceKxDatabaseTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#create FinspaceKxDatabase#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#delete FinspaceKxDatabase#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#update FinspaceKxDatabase#update}
    */
    readonly update?: string;
}
export declare function finspaceKxDatabaseTimeoutsToTerraform(struct?: FinspaceKxDatabaseTimeouts | cdktf.IResolvable): any;
export declare function finspaceKxDatabaseTimeoutsToHclTerraform(struct?: FinspaceKxDatabaseTimeouts | cdktf.IResolvable): any;
export declare class FinspaceKxDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxDatabaseTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxDatabaseTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database aws_finspace_kx_database}
*/
export declare class FinspaceKxDatabase extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_finspace_kx_database";
    /**
    * Generates CDKTF code for importing a FinspaceKxDatabase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FinspaceKxDatabase to import
    * @param importFromId The id of the existing FinspaceKxDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FinspaceKxDatabase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_database aws_finspace_kx_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FinspaceKxDatabaseConfig
    */
    constructor(scope: Construct, id: string, config: FinspaceKxDatabaseConfig);
    get arn(): string;
    get createdTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _environmentId?;
    get environmentId(): string;
    set environmentId(value: string);
    get environmentIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModifiedTimestamp(): string;
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
    get timeouts(): FinspaceKxDatabaseTimeoutsOutputReference;
    putTimeouts(value: FinspaceKxDatabaseTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FinspaceKxDatabaseTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
