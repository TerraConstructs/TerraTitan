/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftProducerDataSharesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_producer_data_shares#producer_arn DataAwsRedshiftProducerDataShares#producer_arn}
    */
    readonly producerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_producer_data_shares#status DataAwsRedshiftProducerDataShares#status}
    */
    readonly status?: string;
    /**
    * data_shares block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_producer_data_shares#data_shares DataAwsRedshiftProducerDataShares#data_shares}
    */
    readonly dataShares?: DataAwsRedshiftProducerDataSharesDataShares[] | cdktf.IResolvable;
}
export interface DataAwsRedshiftProducerDataSharesDataShares {
}
export declare function dataAwsRedshiftProducerDataSharesDataSharesToTerraform(struct?: DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable): any;
export declare function dataAwsRedshiftProducerDataSharesDataSharesToHclTerraform(struct?: DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable): any;
export declare class DataAwsRedshiftProducerDataSharesDataSharesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRedshiftProducerDataSharesDataShares | cdktf.IResolvable | undefined);
    get dataShareArn(): string;
    get managedBy(): string;
    get producerArn(): string;
}
export declare class DataAwsRedshiftProducerDataSharesDataSharesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRedshiftProducerDataSharesDataShares[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRedshiftProducerDataSharesDataSharesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares}
*/
export declare class DataAwsRedshiftProducerDataShares extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_redshift_producer_data_shares";
    /**
    * Generates CDKTF code for importing a DataAwsRedshiftProducerDataShares resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRedshiftProducerDataShares to import
    * @param importFromId The id of the existing DataAwsRedshiftProducerDataShares that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_producer_data_shares#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRedshiftProducerDataShares to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshift_producer_data_shares aws_redshift_producer_data_shares} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftProducerDataSharesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftProducerDataSharesConfig);
    get id(): string;
    private _producerArn?;
    get producerArn(): string;
    set producerArn(value: string);
    get producerArnInput(): string | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
    private _dataShares;
    get dataShares(): DataAwsRedshiftProducerDataSharesDataSharesList;
    putDataShares(value: DataAwsRedshiftProducerDataSharesDataShares[] | cdktf.IResolvable): void;
    resetDataShares(): void;
    get dataSharesInput(): cdktf.IResolvable | DataAwsRedshiftProducerDataSharesDataShares[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
