/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRamResourceShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#id DataAwsRamResourceShare#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#name DataAwsRamResourceShare#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#resource_owner DataAwsRamResourceShare#resource_owner}
    */
    readonly resourceOwner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#resource_share_status DataAwsRamResourceShare#resource_share_status}
    */
    readonly resourceShareStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#tags DataAwsRamResourceShare#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#filter DataAwsRamResourceShare#filter}
    */
    readonly filter?: DataAwsRamResourceShareFilter[] | cdktf.IResolvable;
}
export interface DataAwsRamResourceShareFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#name DataAwsRamResourceShare#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#values DataAwsRamResourceShare#values}
    */
    readonly values: string[];
}
export declare function dataAwsRamResourceShareFilterToTerraform(struct?: DataAwsRamResourceShareFilter | cdktf.IResolvable): any;
export declare function dataAwsRamResourceShareFilterToHclTerraform(struct?: DataAwsRamResourceShareFilter | cdktf.IResolvable): any;
export declare class DataAwsRamResourceShareFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRamResourceShareFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRamResourceShareFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsRamResourceShareFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRamResourceShareFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRamResourceShareFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share aws_ram_resource_share}
*/
export declare class DataAwsRamResourceShare extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ram_resource_share";
    /**
    * Generates CDKTF code for importing a DataAwsRamResourceShare resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRamResourceShare to import
    * @param importFromId The id of the existing DataAwsRamResourceShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRamResourceShare to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ram_resource_share aws_ram_resource_share} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRamResourceShareConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRamResourceShareConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get owningAccountId(): string;
    get resourceArns(): string[];
    private _resourceOwner?;
    get resourceOwner(): string;
    set resourceOwner(value: string);
    get resourceOwnerInput(): string | undefined;
    private _resourceShareStatus?;
    get resourceShareStatus(): string;
    set resourceShareStatus(value: string);
    resetResourceShareStatus(): void;
    get resourceShareStatusInput(): string | undefined;
    get status(): string;
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
    private _filter;
    get filter(): DataAwsRamResourceShareFilterList;
    putFilter(value: DataAwsRamResourceShareFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsRamResourceShareFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
