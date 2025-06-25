/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsQuicksightAnalysisConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/quicksight_analysis#analysis_id DataAwsQuicksightAnalysis#analysis_id}
    */
    readonly analysisId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/quicksight_analysis#aws_account_id DataAwsQuicksightAnalysis#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/quicksight_analysis#id DataAwsQuicksightAnalysis#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/quicksight_analysis#tags DataAwsQuicksightAnalysis#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsQuicksightAnalysisPermissions {
}
export declare function dataAwsQuicksightAnalysisPermissionsToTerraform(struct?: DataAwsQuicksightAnalysisPermissions): any;
export declare function dataAwsQuicksightAnalysisPermissionsToHclTerraform(struct?: DataAwsQuicksightAnalysisPermissions): any;
export declare class DataAwsQuicksightAnalysisPermissionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsQuicksightAnalysisPermissions | undefined;
    set internalValue(value: DataAwsQuicksightAnalysisPermissions | undefined);
    get actions(): string[];
    get principal(): string;
}
export declare class DataAwsQuicksightAnalysisPermissionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsQuicksightAnalysisPermissionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/quicksight_analysis aws_quicksight_analysis}
*/
export declare class DataAwsQuicksightAnalysis extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_quicksight_analysis";
    /**
    * Generates CDKTF code for importing a DataAwsQuicksightAnalysis resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsQuicksightAnalysis to import
    * @param importFromId The id of the existing DataAwsQuicksightAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/quicksight_analysis#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsQuicksightAnalysis to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/quicksight_analysis aws_quicksight_analysis} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsQuicksightAnalysisConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsQuicksightAnalysisConfig);
    private _analysisId?;
    get analysisId(): string;
    set analysisId(value: string);
    get analysisIdInput(): string | undefined;
    get arn(): string;
    private _awsAccountId?;
    get awsAccountId(): string;
    set awsAccountId(value: string);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): string | undefined;
    get createdTime(): string;
    get definition(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastPublishedTime(): string;
    get lastUpdatedTime(): string;
    get name(): string;
    private _permissions;
    get permissions(): DataAwsQuicksightAnalysisPermissionsList;
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
    get themeArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
