/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodecommitTriggerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#id CodecommitTrigger#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#repository_name CodecommitTrigger#repository_name}
    */
    readonly repositoryName: string;
    /**
    * trigger block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#trigger CodecommitTrigger#trigger}
    */
    readonly trigger: CodecommitTriggerTrigger[] | cdktf.IResolvable;
}
export interface CodecommitTriggerTrigger {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#branches CodecommitTrigger#branches}
    */
    readonly branches?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#custom_data CodecommitTrigger#custom_data}
    */
    readonly customData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#destination_arn CodecommitTrigger#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#events CodecommitTrigger#events}
    */
    readonly events: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#name CodecommitTrigger#name}
    */
    readonly name: string;
}
export declare function codecommitTriggerTriggerToTerraform(struct?: CodecommitTriggerTrigger | cdktf.IResolvable): any;
export declare function codecommitTriggerTriggerToHclTerraform(struct?: CodecommitTriggerTrigger | cdktf.IResolvable): any;
export declare class CodecommitTriggerTriggerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CodecommitTriggerTrigger | cdktf.IResolvable | undefined;
    set internalValue(value: CodecommitTriggerTrigger | cdktf.IResolvable | undefined);
    private _branches?;
    get branches(): string[];
    set branches(value: string[]);
    resetBranches(): void;
    get branchesInput(): string[] | undefined;
    private _customData?;
    get customData(): string;
    set customData(value: string);
    resetCustomData(): void;
    get customDataInput(): string | undefined;
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string | undefined;
    private _events?;
    get events(): string[];
    set events(value: string[]);
    get eventsInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class CodecommitTriggerTriggerList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CodecommitTriggerTrigger[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CodecommitTriggerTriggerOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger aws_codecommit_trigger}
*/
export declare class CodecommitTrigger extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codecommit_trigger";
    /**
    * Generates CDKTF code for importing a CodecommitTrigger resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodecommitTrigger to import
    * @param importFromId The id of the existing CodecommitTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodecommitTrigger to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codecommit_trigger aws_codecommit_trigger} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitTriggerConfig
    */
    constructor(scope: Construct, id: string, config: CodecommitTriggerConfig);
    get configurationId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
    private _trigger;
    get trigger(): CodecommitTriggerTriggerList;
    putTrigger(value: CodecommitTriggerTrigger[] | cdktf.IResolvable): void;
    get triggerInput(): cdktf.IResolvable | CodecommitTriggerTrigger[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
