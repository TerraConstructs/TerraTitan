/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSesv2DedicatedIpPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_dedicated_ip_pool#id DataAwsSesv2DedicatedIpPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_dedicated_ip_pool#pool_name DataAwsSesv2DedicatedIpPool#pool_name}
    */
    readonly poolName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_dedicated_ip_pool#tags DataAwsSesv2DedicatedIpPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsSesv2DedicatedIpPoolDedicatedIps {
}
export declare function dataAwsSesv2DedicatedIpPoolDedicatedIpsToTerraform(struct?: DataAwsSesv2DedicatedIpPoolDedicatedIps): any;
export declare function dataAwsSesv2DedicatedIpPoolDedicatedIpsToHclTerraform(struct?: DataAwsSesv2DedicatedIpPoolDedicatedIps): any;
export declare class DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSesv2DedicatedIpPoolDedicatedIps | undefined;
    set internalValue(value: DataAwsSesv2DedicatedIpPoolDedicatedIps | undefined);
    get ip(): string;
    get warmupPercentage(): number;
    get warmupStatus(): string;
}
export declare class DataAwsSesv2DedicatedIpPoolDedicatedIpsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSesv2DedicatedIpPoolDedicatedIpsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool}
*/
export declare class DataAwsSesv2DedicatedIpPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_sesv2_dedicated_ip_pool";
    /**
    * Generates CDKTF code for importing a DataAwsSesv2DedicatedIpPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSesv2DedicatedIpPool to import
    * @param importFromId The id of the existing DataAwsSesv2DedicatedIpPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_dedicated_ip_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSesv2DedicatedIpPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sesv2_dedicated_ip_pool aws_sesv2_dedicated_ip_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSesv2DedicatedIpPoolConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSesv2DedicatedIpPoolConfig);
    get arn(): string;
    private _dedicatedIps;
    get dedicatedIps(): DataAwsSesv2DedicatedIpPoolDedicatedIpsList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _poolName?;
    get poolName(): string;
    set poolName(value: string);
    get poolNameInput(): string | undefined;
    get scalingMode(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
