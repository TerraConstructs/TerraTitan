/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Inspector2EnablerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#account_ids Inspector2Enabler#account_ids}
    */
    readonly accountIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#id Inspector2Enabler#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#resource_types Inspector2Enabler#resource_types}
    */
    readonly resourceTypes: string[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#timeouts Inspector2Enabler#timeouts}
    */
    readonly timeouts?: Inspector2EnablerTimeouts;
}
export interface Inspector2EnablerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#create Inspector2Enabler#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#delete Inspector2Enabler#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#update Inspector2Enabler#update}
    */
    readonly update?: string;
}
export declare function inspector2EnablerTimeoutsToTerraform(struct?: Inspector2EnablerTimeouts | cdktf.IResolvable): any;
export declare function inspector2EnablerTimeoutsToHclTerraform(struct?: Inspector2EnablerTimeouts | cdktf.IResolvable): any;
export declare class Inspector2EnablerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Inspector2EnablerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Inspector2EnablerTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler aws_inspector2_enabler}
*/
export declare class Inspector2Enabler extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_inspector2_enabler";
    /**
    * Generates CDKTF code for importing a Inspector2Enabler resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Inspector2Enabler to import
    * @param importFromId The id of the existing Inspector2Enabler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Inspector2Enabler to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/inspector2_enabler aws_inspector2_enabler} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Inspector2EnablerConfig
    */
    constructor(scope: Construct, id: string, config: Inspector2EnablerConfig);
    private _accountIds?;
    get accountIds(): string[];
    set accountIds(value: string[]);
    get accountIdsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    get resourceTypesInput(): string[] | undefined;
    private _timeouts;
    get timeouts(): Inspector2EnablerTimeoutsOutputReference;
    putTimeouts(value: Inspector2EnablerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Inspector2EnablerTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
