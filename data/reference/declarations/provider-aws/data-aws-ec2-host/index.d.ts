/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2HostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#host_id DataAwsEc2Host#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#id DataAwsEc2Host#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#tags DataAwsEc2Host#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#filter DataAwsEc2Host#filter}
    */
    readonly filter?: DataAwsEc2HostFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#timeouts DataAwsEc2Host#timeouts}
    */
    readonly timeouts?: DataAwsEc2HostTimeouts;
}
export interface DataAwsEc2HostFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#name DataAwsEc2Host#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#values DataAwsEc2Host#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2HostFilterToTerraform(struct?: DataAwsEc2HostFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2HostFilterToHclTerraform(struct?: DataAwsEc2HostFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2HostFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2HostFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2HostFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2HostFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2HostFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2HostFilterOutputReference;
}
export interface DataAwsEc2HostTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#read DataAwsEc2Host#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2HostTimeoutsToTerraform(struct?: DataAwsEc2HostTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2HostTimeoutsToHclTerraform(struct?: DataAwsEc2HostTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2HostTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2HostTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2HostTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host aws_ec2_host}
*/
export declare class DataAwsEc2Host extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_host";
    /**
    * Generates CDKTF code for importing a DataAwsEc2Host resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2Host to import
    * @param importFromId The id of the existing DataAwsEc2Host that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2Host to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_host aws_ec2_host} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2HostConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2HostConfig);
    get arn(): string;
    get assetId(): string;
    get autoPlacement(): string;
    get availabilityZone(): string;
    get cores(): number;
    private _hostId?;
    get hostId(): string;
    set hostId(value: string);
    resetHostId(): void;
    get hostIdInput(): string | undefined;
    get hostRecovery(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceFamily(): string;
    get instanceType(): string;
    get outpostArn(): string;
    get ownerId(): string;
    get sockets(): number;
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
    get totalVcpus(): number;
    private _filter;
    get filter(): DataAwsEc2HostFilterList;
    putFilter(value: DataAwsEc2HostFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2HostFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2HostTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2HostTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2HostTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
