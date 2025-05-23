/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodecatalystSourceRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#description CodecatalystSourceRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#id CodecatalystSourceRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#name CodecatalystSourceRepository#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#project_name CodecatalystSourceRepository#project_name}
    */
    readonly projectName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#space_name CodecatalystSourceRepository#space_name}
    */
    readonly spaceName: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#timeouts CodecatalystSourceRepository#timeouts}
    */
    readonly timeouts?: CodecatalystSourceRepositoryTimeouts;
}
export interface CodecatalystSourceRepositoryTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#create CodecatalystSourceRepository#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#delete CodecatalystSourceRepository#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#update CodecatalystSourceRepository#update}
    */
    readonly update?: string;
}
export declare function codecatalystSourceRepositoryTimeoutsToTerraform(struct?: CodecatalystSourceRepositoryTimeouts | cdktf.IResolvable): any;
export declare function codecatalystSourceRepositoryTimeoutsToHclTerraform(struct?: CodecatalystSourceRepositoryTimeouts | cdktf.IResolvable): any;
export declare class CodecatalystSourceRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodecatalystSourceRepositoryTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CodecatalystSourceRepositoryTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository aws_codecatalyst_source_repository}
*/
export declare class CodecatalystSourceRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codecatalyst_source_repository";
    /**
    * Generates CDKTF code for importing a CodecatalystSourceRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodecatalystSourceRepository to import
    * @param importFromId The id of the existing CodecatalystSourceRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodecatalystSourceRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_source_repository aws_codecatalyst_source_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecatalystSourceRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: CodecatalystSourceRepositoryConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string | undefined;
    private _spaceName?;
    get spaceName(): string;
    set spaceName(value: string);
    get spaceNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): CodecatalystSourceRepositoryTimeoutsOutputReference;
    putTimeouts(value: CodecatalystSourceRepositoryTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CodecatalystSourceRepositoryTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
