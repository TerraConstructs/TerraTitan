/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInternetGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#id DataAwsInternetGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#internet_gateway_id DataAwsInternetGateway#internet_gateway_id}
    */
    readonly internetGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#tags DataAwsInternetGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#filter DataAwsInternetGateway#filter}
    */
    readonly filter?: DataAwsInternetGatewayFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#timeouts DataAwsInternetGateway#timeouts}
    */
    readonly timeouts?: DataAwsInternetGatewayTimeouts;
}
export interface DataAwsInternetGatewayAttachments {
}
export declare function dataAwsInternetGatewayAttachmentsToTerraform(struct?: DataAwsInternetGatewayAttachments): any;
export declare function dataAwsInternetGatewayAttachmentsToHclTerraform(struct?: DataAwsInternetGatewayAttachments): any;
export declare class DataAwsInternetGatewayAttachmentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInternetGatewayAttachments | undefined;
    set internalValue(value: DataAwsInternetGatewayAttachments | undefined);
    get state(): string;
    get vpcId(): string;
}
export declare class DataAwsInternetGatewayAttachmentsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsInternetGatewayAttachmentsOutputReference;
}
export interface DataAwsInternetGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#name DataAwsInternetGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#values DataAwsInternetGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsInternetGatewayFilterToTerraform(struct?: DataAwsInternetGatewayFilter | cdktf.IResolvable): any;
export declare function dataAwsInternetGatewayFilterToHclTerraform(struct?: DataAwsInternetGatewayFilter | cdktf.IResolvable): any;
export declare class DataAwsInternetGatewayFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInternetGatewayFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsInternetGatewayFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsInternetGatewayFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsInternetGatewayFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsInternetGatewayFilterOutputReference;
}
export interface DataAwsInternetGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#read DataAwsInternetGateway#read}
    */
    readonly read?: string;
}
export declare function dataAwsInternetGatewayTimeoutsToTerraform(struct?: DataAwsInternetGatewayTimeouts | cdktf.IResolvable): any;
export declare function dataAwsInternetGatewayTimeoutsToHclTerraform(struct?: DataAwsInternetGatewayTimeouts | cdktf.IResolvable): any;
export declare class DataAwsInternetGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsInternetGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsInternetGatewayTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway aws_internet_gateway}
*/
export declare class DataAwsInternetGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_internet_gateway";
    /**
    * Generates CDKTF code for importing a DataAwsInternetGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsInternetGateway to import
    * @param importFromId The id of the existing DataAwsInternetGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsInternetGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/internet_gateway aws_internet_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInternetGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInternetGatewayConfig);
    get arn(): string;
    private _attachments;
    get attachments(): DataAwsInternetGatewayAttachmentsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _internetGatewayId?;
    get internetGatewayId(): string;
    set internetGatewayId(value: string);
    resetInternetGatewayId(): void;
    get internetGatewayIdInput(): string | undefined;
    get ownerId(): string;
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
    get filter(): DataAwsInternetGatewayFilterList;
    putFilter(value: DataAwsInternetGatewayFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsInternetGatewayFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsInternetGatewayTimeoutsOutputReference;
    putTimeouts(value: DataAwsInternetGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsInternetGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
