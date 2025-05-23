/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodecatalystProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#description CodecatalystProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#display_name CodecatalystProject#display_name}
    */
    readonly displayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#id CodecatalystProject#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#space_name CodecatalystProject#space_name}
    */
    readonly spaceName: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#timeouts CodecatalystProject#timeouts}
    */
    readonly timeouts?: CodecatalystProjectTimeouts;
}
export interface CodecatalystProjectTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#create CodecatalystProject#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#delete CodecatalystProject#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#update CodecatalystProject#update}
    */
    readonly update?: string;
}
export declare function codecatalystProjectTimeoutsToTerraform(struct?: CodecatalystProjectTimeouts | cdktf.IResolvable): any;
export declare function codecatalystProjectTimeoutsToHclTerraform(struct?: CodecatalystProjectTimeouts | cdktf.IResolvable): any;
export declare class CodecatalystProjectTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodecatalystProjectTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CodecatalystProjectTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project aws_codecatalyst_project}
*/
export declare class CodecatalystProject extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codecatalyst_project";
    /**
    * Generates CDKTF code for importing a CodecatalystProject resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodecatalystProject to import
    * @param importFromId The id of the existing CodecatalystProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodecatalystProject to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecatalyst_project aws_codecatalyst_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecatalystProjectConfig
    */
    constructor(scope: Construct, id: string, config: CodecatalystProjectConfig);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    get displayNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _spaceName?;
    get spaceName(): string;
    set spaceName(value: string);
    get spaceNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): CodecatalystProjectTimeoutsOutputReference;
    putTimeouts(value: CodecatalystProjectTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CodecatalystProjectTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
