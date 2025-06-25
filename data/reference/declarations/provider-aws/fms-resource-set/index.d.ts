/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FmsResourceSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#tags FmsResourceSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * resource_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#resource_set FmsResourceSet#resource_set}
    */
    readonly resourceSet?: FmsResourceSetResourceSet[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#timeouts FmsResourceSet#timeouts}
    */
    readonly timeouts?: FmsResourceSetTimeouts;
}
export interface FmsResourceSetResourceSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#description FmsResourceSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#name FmsResourceSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#resource_set_status FmsResourceSet#resource_set_status}
    */
    readonly resourceSetStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#resource_type_list FmsResourceSet#resource_type_list}
    */
    readonly resourceTypeList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#update_token FmsResourceSet#update_token}
    */
    readonly updateToken?: string;
}
export declare function fmsResourceSetResourceSetToTerraform(struct?: FmsResourceSetResourceSet | cdktf.IResolvable): any;
export declare function fmsResourceSetResourceSetToHclTerraform(struct?: FmsResourceSetResourceSet | cdktf.IResolvable): any;
export declare class FmsResourceSetResourceSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FmsResourceSetResourceSet | cdktf.IResolvable | undefined;
    set internalValue(value: FmsResourceSetResourceSet | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get lastUpdateTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _resourceSetStatus?;
    get resourceSetStatus(): string;
    set resourceSetStatus(value: string);
    resetResourceSetStatus(): void;
    get resourceSetStatusInput(): string | undefined;
    private _resourceTypeList?;
    get resourceTypeList(): string[];
    set resourceTypeList(value: string[]);
    resetResourceTypeList(): void;
    get resourceTypeListInput(): string[] | undefined;
    private _updateToken?;
    get updateToken(): string;
    set updateToken(value: string);
    resetUpdateToken(): void;
    get updateTokenInput(): string | undefined;
}
export declare class FmsResourceSetResourceSetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FmsResourceSetResourceSet[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FmsResourceSetResourceSetOutputReference;
}
export interface FmsResourceSetTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#create FmsResourceSet#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#delete FmsResourceSet#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#update FmsResourceSet#update}
    */
    readonly update?: string;
}
export declare function fmsResourceSetTimeoutsToTerraform(struct?: FmsResourceSetTimeouts | cdktf.IResolvable): any;
export declare function fmsResourceSetTimeoutsToHclTerraform(struct?: FmsResourceSetTimeouts | cdktf.IResolvable): any;
export declare class FmsResourceSetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FmsResourceSetTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FmsResourceSetTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set aws_fms_resource_set}
*/
export declare class FmsResourceSet extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_fms_resource_set";
    /**
    * Generates CDKTF code for importing a FmsResourceSet resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FmsResourceSet to import
    * @param importFromId The id of the existing FmsResourceSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FmsResourceSet to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/fms_resource_set aws_fms_resource_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FmsResourceSetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: FmsResourceSetConfig);
    get arn(): string;
    get id(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _resourceSet;
    get resourceSet(): FmsResourceSetResourceSetList;
    putResourceSet(value: FmsResourceSetResourceSet[] | cdktf.IResolvable): void;
    resetResourceSet(): void;
    get resourceSetInput(): cdktf.IResolvable | FmsResourceSetResourceSet[] | undefined;
    private _timeouts;
    get timeouts(): FmsResourceSetTimeoutsOutputReference;
    putTimeouts(value: FmsResourceSetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FmsResourceSetTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
