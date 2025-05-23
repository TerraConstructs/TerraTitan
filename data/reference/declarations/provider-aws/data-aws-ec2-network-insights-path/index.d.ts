/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2NetworkInsightsPathConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path#id DataAwsEc2NetworkInsightsPath#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path#network_insights_path_id DataAwsEc2NetworkInsightsPath#network_insights_path_id}
    */
    readonly networkInsightsPathId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path#tags DataAwsEc2NetworkInsightsPath#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path#filter DataAwsEc2NetworkInsightsPath#filter}
    */
    readonly filter?: DataAwsEc2NetworkInsightsPathFilter[] | cdktf.IResolvable;
}
export interface DataAwsEc2NetworkInsightsPathFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path#name DataAwsEc2NetworkInsightsPath#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path#values DataAwsEc2NetworkInsightsPath#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2NetworkInsightsPathFilterToTerraform(struct?: DataAwsEc2NetworkInsightsPathFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2NetworkInsightsPathFilterToHclTerraform(struct?: DataAwsEc2NetworkInsightsPathFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2NetworkInsightsPathFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2NetworkInsightsPathFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2NetworkInsightsPathFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2NetworkInsightsPathFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2NetworkInsightsPathFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2NetworkInsightsPathFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path aws_ec2_network_insights_path}
*/
export declare class DataAwsEc2NetworkInsightsPath extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_network_insights_path";
    /**
    * Generates CDKTF code for importing a DataAwsEc2NetworkInsightsPath resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2NetworkInsightsPath to import
    * @param importFromId The id of the existing DataAwsEc2NetworkInsightsPath that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2NetworkInsightsPath to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_network_insights_path aws_ec2_network_insights_path} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2NetworkInsightsPathConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2NetworkInsightsPathConfig);
    get arn(): string;
    get destination(): string;
    get destinationArn(): string;
    get destinationIp(): string;
    get destinationPort(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _networkInsightsPathId?;
    get networkInsightsPathId(): string;
    set networkInsightsPathId(value: string);
    resetNetworkInsightsPathId(): void;
    get networkInsightsPathIdInput(): string | undefined;
    get protocol(): string;
    get source(): string;
    get sourceArn(): string;
    get sourceIp(): string;
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
    get filter(): DataAwsEc2NetworkInsightsPathFilterList;
    putFilter(value: DataAwsEc2NetworkInsightsPathFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2NetworkInsightsPathFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
