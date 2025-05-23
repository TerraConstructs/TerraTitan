/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConnectUserHierarchyStructureConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#id ConnectUserHierarchyStructure#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#instance_id ConnectUserHierarchyStructure#instance_id}
    */
    readonly instanceId: string;
    /**
    * hierarchy_structure block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#hierarchy_structure ConnectUserHierarchyStructure#hierarchy_structure}
    */
    readonly hierarchyStructure: ConnectUserHierarchyStructureHierarchyStructure;
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelFive {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
    */
    readonly name: string;
}
export declare function connectUserHierarchyStructureHierarchyStructureLevelFiveToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelFive): any;
export declare function connectUserHierarchyStructureHierarchyStructureLevelFiveToHclTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelFive): any;
export declare class ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelFive | undefined;
    set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelFive | undefined);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelFour {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
    */
    readonly name: string;
}
export declare function connectUserHierarchyStructureHierarchyStructureLevelFourToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelFour): any;
export declare function connectUserHierarchyStructureHierarchyStructureLevelFourToHclTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelFour): any;
export declare class ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelFour | undefined;
    set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelFour | undefined);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelOne {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
    */
    readonly name: string;
}
export declare function connectUserHierarchyStructureHierarchyStructureLevelOneToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelOne): any;
export declare function connectUserHierarchyStructureHierarchyStructureLevelOneToHclTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelOne): any;
export declare class ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelOne | undefined;
    set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelOne | undefined);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelThree {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
    */
    readonly name: string;
}
export declare function connectUserHierarchyStructureHierarchyStructureLevelThreeToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelThree): any;
export declare function connectUserHierarchyStructureHierarchyStructureLevelThreeToHclTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelThree): any;
export declare class ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelThree | undefined;
    set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelThree | undefined);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface ConnectUserHierarchyStructureHierarchyStructureLevelTwo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#name ConnectUserHierarchyStructure#name}
    */
    readonly name: string;
}
export declare function connectUserHierarchyStructureHierarchyStructureLevelTwoToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelTwo): any;
export declare function connectUserHierarchyStructureHierarchyStructureLevelTwoToHclTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference | ConnectUserHierarchyStructureHierarchyStructureLevelTwo): any;
export declare class ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserHierarchyStructureHierarchyStructureLevelTwo | undefined;
    set internalValue(value: ConnectUserHierarchyStructureHierarchyStructureLevelTwo | undefined);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export interface ConnectUserHierarchyStructureHierarchyStructure {
    /**
    * level_five block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#level_five ConnectUserHierarchyStructure#level_five}
    */
    readonly levelFive?: ConnectUserHierarchyStructureHierarchyStructureLevelFive;
    /**
    * level_four block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#level_four ConnectUserHierarchyStructure#level_four}
    */
    readonly levelFour?: ConnectUserHierarchyStructureHierarchyStructureLevelFour;
    /**
    * level_one block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#level_one ConnectUserHierarchyStructure#level_one}
    */
    readonly levelOne?: ConnectUserHierarchyStructureHierarchyStructureLevelOne;
    /**
    * level_three block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#level_three ConnectUserHierarchyStructure#level_three}
    */
    readonly levelThree?: ConnectUserHierarchyStructureHierarchyStructureLevelThree;
    /**
    * level_two block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#level_two ConnectUserHierarchyStructure#level_two}
    */
    readonly levelTwo?: ConnectUserHierarchyStructureHierarchyStructureLevelTwo;
}
export declare function connectUserHierarchyStructureHierarchyStructureToTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureOutputReference | ConnectUserHierarchyStructureHierarchyStructure): any;
export declare function connectUserHierarchyStructureHierarchyStructureToHclTerraform(struct?: ConnectUserHierarchyStructureHierarchyStructureOutputReference | ConnectUserHierarchyStructureHierarchyStructure): any;
export declare class ConnectUserHierarchyStructureHierarchyStructureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConnectUserHierarchyStructureHierarchyStructure | undefined;
    set internalValue(value: ConnectUserHierarchyStructureHierarchyStructure | undefined);
    private _levelFive;
    get levelFive(): ConnectUserHierarchyStructureHierarchyStructureLevelFiveOutputReference;
    putLevelFive(value: ConnectUserHierarchyStructureHierarchyStructureLevelFive): void;
    resetLevelFive(): void;
    get levelFiveInput(): ConnectUserHierarchyStructureHierarchyStructureLevelFive | undefined;
    private _levelFour;
    get levelFour(): ConnectUserHierarchyStructureHierarchyStructureLevelFourOutputReference;
    putLevelFour(value: ConnectUserHierarchyStructureHierarchyStructureLevelFour): void;
    resetLevelFour(): void;
    get levelFourInput(): ConnectUserHierarchyStructureHierarchyStructureLevelFour | undefined;
    private _levelOne;
    get levelOne(): ConnectUserHierarchyStructureHierarchyStructureLevelOneOutputReference;
    putLevelOne(value: ConnectUserHierarchyStructureHierarchyStructureLevelOne): void;
    resetLevelOne(): void;
    get levelOneInput(): ConnectUserHierarchyStructureHierarchyStructureLevelOne | undefined;
    private _levelThree;
    get levelThree(): ConnectUserHierarchyStructureHierarchyStructureLevelThreeOutputReference;
    putLevelThree(value: ConnectUserHierarchyStructureHierarchyStructureLevelThree): void;
    resetLevelThree(): void;
    get levelThreeInput(): ConnectUserHierarchyStructureHierarchyStructureLevelThree | undefined;
    private _levelTwo;
    get levelTwo(): ConnectUserHierarchyStructureHierarchyStructureLevelTwoOutputReference;
    putLevelTwo(value: ConnectUserHierarchyStructureHierarchyStructureLevelTwo): void;
    resetLevelTwo(): void;
    get levelTwoInput(): ConnectUserHierarchyStructureHierarchyStructureLevelTwo | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure}
*/
export declare class ConnectUserHierarchyStructure extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_connect_user_hierarchy_structure";
    /**
    * Generates CDKTF code for importing a ConnectUserHierarchyStructure resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConnectUserHierarchyStructure to import
    * @param importFromId The id of the existing ConnectUserHierarchyStructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConnectUserHierarchyStructure to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/connect_user_hierarchy_structure aws_connect_user_hierarchy_structure} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConnectUserHierarchyStructureConfig
    */
    constructor(scope: Construct, id: string, config: ConnectUserHierarchyStructureConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    private _hierarchyStructure;
    get hierarchyStructure(): ConnectUserHierarchyStructureHierarchyStructureOutputReference;
    putHierarchyStructure(value: ConnectUserHierarchyStructureHierarchyStructure): void;
    get hierarchyStructureInput(): ConnectUserHierarchyStructureHierarchyStructure | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
