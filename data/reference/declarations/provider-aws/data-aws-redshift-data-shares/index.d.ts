/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftDataSharesConfig extends cdktf.TerraformMetaArguments {
    /**
    * data_shares block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_data_shares#data_shares DataAwsRedshiftDataShares#data_shares}
    */
    readonly dataShares?: DataAwsRedshiftDataSharesDataShares[] | cdktf.IResolvable;
}
export interface DataAwsRedshiftDataSharesDataShares {
}
export declare function dataAwsRedshiftDataSharesDataSharesToTerraform(struct?: DataAwsRedshiftDataSharesDataShares | cdktf.IResolvable): any;
export declare function dataAwsRedshiftDataSharesDataSharesToHclTerraform(struct?: DataAwsRedshiftDataSharesDataShares | cdktf.IResolvable): any;
export declare class DataAwsRedshiftDataSharesDataSharesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRedshiftDataSharesDataShares | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRedshiftDataSharesDataShares | cdktf.IResolvable | undefined);
    get dataShareArn(): string;
    get managedBy(): string;
    get producerArn(): string;
}
export declare class DataAwsRedshiftDataSharesDataSharesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRedshiftDataSharesDataShares[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRedshiftDataSharesDataSharesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_data_shares aws_redshift_data_shares}
*/
export declare class DataAwsRedshiftDataShares extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_redshift_data_shares";
    /**
    * Generates CDKTF code for importing a DataAwsRedshiftDataShares resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRedshiftDataShares to import
    * @param importFromId The id of the existing DataAwsRedshiftDataShares that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_data_shares#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRedshiftDataShares to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_data_shares aws_redshift_data_shares} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftDataSharesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRedshiftDataSharesConfig);
    get id(): string;
    private _dataShares;
    get dataShares(): DataAwsRedshiftDataSharesDataSharesList;
    putDataShares(value: DataAwsRedshiftDataSharesDataShares[] | cdktf.IResolvable): void;
    resetDataShares(): void;
    get dataSharesInput(): cdktf.IResolvable | DataAwsRedshiftDataSharesDataShares[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
