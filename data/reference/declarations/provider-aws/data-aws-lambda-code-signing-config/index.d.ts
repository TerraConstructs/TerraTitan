/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_code_signing_config#arn DataAwsLambdaCodeSigningConfig#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_code_signing_config#id DataAwsLambdaCodeSigningConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsLambdaCodeSigningConfigAllowedPublishers {
}
export declare function dataAwsLambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: DataAwsLambdaCodeSigningConfigAllowedPublishers): any;
export declare function dataAwsLambdaCodeSigningConfigAllowedPublishersToHclTerraform(struct?: DataAwsLambdaCodeSigningConfigAllowedPublishers): any;
export declare class DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaCodeSigningConfigAllowedPublishers | undefined;
    set internalValue(value: DataAwsLambdaCodeSigningConfigAllowedPublishers | undefined);
    get signingProfileVersionArns(): string[];
}
export declare class DataAwsLambdaCodeSigningConfigAllowedPublishersList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaCodeSigningConfigAllowedPublishersOutputReference;
}
export interface DataAwsLambdaCodeSigningConfigPolicies {
}
export declare function dataAwsLambdaCodeSigningConfigPoliciesToTerraform(struct?: DataAwsLambdaCodeSigningConfigPolicies): any;
export declare function dataAwsLambdaCodeSigningConfigPoliciesToHclTerraform(struct?: DataAwsLambdaCodeSigningConfigPolicies): any;
export declare class DataAwsLambdaCodeSigningConfigPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaCodeSigningConfigPolicies | undefined;
    set internalValue(value: DataAwsLambdaCodeSigningConfigPolicies | undefined);
    get untrustedArtifactOnDeployment(): string;
}
export declare class DataAwsLambdaCodeSigningConfigPoliciesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaCodeSigningConfigPoliciesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_code_signing_config aws_lambda_code_signing_config}
*/
export declare class DataAwsLambdaCodeSigningConfig extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lambda_code_signing_config";
    /**
    * Generates CDKTF code for importing a DataAwsLambdaCodeSigningConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLambdaCodeSigningConfig to import
    * @param importFromId The id of the existing DataAwsLambdaCodeSigningConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_code_signing_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLambdaCodeSigningConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_code_signing_config aws_lambda_code_signing_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaCodeSigningConfigConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaCodeSigningConfigConfig);
    private _allowedPublishers;
    get allowedPublishers(): DataAwsLambdaCodeSigningConfigAllowedPublishersList;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get configId(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastModified(): string;
    private _policies;
    get policies(): DataAwsLambdaCodeSigningConfigPoliciesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
