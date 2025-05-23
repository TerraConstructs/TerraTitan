/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type#arn DataAwsCloudformationType#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type#id DataAwsCloudformationType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type#type DataAwsCloudformationType#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type#type_name DataAwsCloudformationType#type_name}
    */
    readonly typeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type#version_id DataAwsCloudformationType#version_id}
    */
    readonly versionId?: string;
}
export interface DataAwsCloudformationTypeLoggingConfig {
}
export declare function dataAwsCloudformationTypeLoggingConfigToTerraform(struct?: DataAwsCloudformationTypeLoggingConfig): any;
export declare function dataAwsCloudformationTypeLoggingConfigToHclTerraform(struct?: DataAwsCloudformationTypeLoggingConfig): any;
export declare class DataAwsCloudformationTypeLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCloudformationTypeLoggingConfig | undefined;
    set internalValue(value: DataAwsCloudformationTypeLoggingConfig | undefined);
    get logGroupName(): string;
    get logRoleArn(): string;
}
export declare class DataAwsCloudformationTypeLoggingConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCloudformationTypeLoggingConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type aws_cloudformation_type}
*/
export declare class DataAwsCloudformationType extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cloudformation_type";
    /**
    * Generates CDKTF code for importing a DataAwsCloudformationType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCloudformationType to import
    * @param importFromId The id of the existing DataAwsCloudformationType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCloudformationType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cloudformation_type aws_cloudformation_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationTypeConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudformationTypeConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    get defaultVersionId(): string;
    get deprecatedStatus(): string;
    get description(): string;
    get documentationUrl(): string;
    get executionRoleArn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get isDefaultVersion(): cdktf.IResolvable;
    private _loggingConfig;
    get loggingConfig(): DataAwsCloudformationTypeLoggingConfigList;
    get provisioningType(): string;
    get schema(): string;
    get sourceUrl(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    get typeArn(): string;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string | undefined;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    get visibility(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
