/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsOamLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/oam_link#id DataAwsOamLink#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/oam_link#link_identifier DataAwsOamLink#link_identifier}
    */
    readonly linkIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/oam_link#tags DataAwsOamLink#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsOamLinkLinkConfigurationLogGroupConfiguration {
}
export declare function dataAwsOamLinkLinkConfigurationLogGroupConfigurationToTerraform(struct?: DataAwsOamLinkLinkConfigurationLogGroupConfiguration): any;
export declare function dataAwsOamLinkLinkConfigurationLogGroupConfigurationToHclTerraform(struct?: DataAwsOamLinkLinkConfigurationLogGroupConfiguration): any;
export declare class DataAwsOamLinkLinkConfigurationLogGroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOamLinkLinkConfigurationLogGroupConfiguration | undefined;
    set internalValue(value: DataAwsOamLinkLinkConfigurationLogGroupConfiguration | undefined);
    get filter(): string;
}
export declare class DataAwsOamLinkLinkConfigurationLogGroupConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOamLinkLinkConfigurationLogGroupConfigurationOutputReference;
}
export interface DataAwsOamLinkLinkConfigurationMetricConfiguration {
}
export declare function dataAwsOamLinkLinkConfigurationMetricConfigurationToTerraform(struct?: DataAwsOamLinkLinkConfigurationMetricConfiguration): any;
export declare function dataAwsOamLinkLinkConfigurationMetricConfigurationToHclTerraform(struct?: DataAwsOamLinkLinkConfigurationMetricConfiguration): any;
export declare class DataAwsOamLinkLinkConfigurationMetricConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOamLinkLinkConfigurationMetricConfiguration | undefined;
    set internalValue(value: DataAwsOamLinkLinkConfigurationMetricConfiguration | undefined);
    get filter(): string;
}
export declare class DataAwsOamLinkLinkConfigurationMetricConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOamLinkLinkConfigurationMetricConfigurationOutputReference;
}
export interface DataAwsOamLinkLinkConfiguration {
}
export declare function dataAwsOamLinkLinkConfigurationToTerraform(struct?: DataAwsOamLinkLinkConfiguration): any;
export declare function dataAwsOamLinkLinkConfigurationToHclTerraform(struct?: DataAwsOamLinkLinkConfiguration): any;
export declare class DataAwsOamLinkLinkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsOamLinkLinkConfiguration | undefined;
    set internalValue(value: DataAwsOamLinkLinkConfiguration | undefined);
    private _logGroupConfiguration;
    get logGroupConfiguration(): DataAwsOamLinkLinkConfigurationLogGroupConfigurationList;
    private _metricConfiguration;
    get metricConfiguration(): DataAwsOamLinkLinkConfigurationMetricConfigurationList;
}
export declare class DataAwsOamLinkLinkConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsOamLinkLinkConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/oam_link aws_oam_link}
*/
export declare class DataAwsOamLink extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_oam_link";
    /**
    * Generates CDKTF code for importing a DataAwsOamLink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsOamLink to import
    * @param importFromId The id of the existing DataAwsOamLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/oam_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsOamLink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/oam_link aws_oam_link} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOamLinkConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsOamLinkConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get label(): string;
    get labelTemplate(): string;
    private _linkConfiguration;
    get linkConfiguration(): DataAwsOamLinkLinkConfigurationList;
    get linkId(): string;
    private _linkIdentifier?;
    get linkIdentifier(): string;
    set linkIdentifier(value: string);
    get linkIdentifierInput(): string | undefined;
    get resourceTypes(): string[];
    get sinkArn(): string;
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
