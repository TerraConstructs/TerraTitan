/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaFunctionUrlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function_url#function_name DataAwsLambdaFunctionUrl#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function_url#id DataAwsLambdaFunctionUrl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function_url#qualifier DataAwsLambdaFunctionUrl#qualifier}
    */
    readonly qualifier?: string;
}
export interface DataAwsLambdaFunctionUrlCors {
}
export declare function dataAwsLambdaFunctionUrlCorsToTerraform(struct?: DataAwsLambdaFunctionUrlCors): any;
export declare function dataAwsLambdaFunctionUrlCorsToHclTerraform(struct?: DataAwsLambdaFunctionUrlCors): any;
export declare class DataAwsLambdaFunctionUrlCorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLambdaFunctionUrlCors | undefined;
    set internalValue(value: DataAwsLambdaFunctionUrlCors | undefined);
    get allowCredentials(): cdktf.IResolvable;
    get allowHeaders(): string[];
    get allowMethods(): string[];
    get allowOrigins(): string[];
    get exposeHeaders(): string[];
    get maxAge(): number;
}
export declare class DataAwsLambdaFunctionUrlCorsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLambdaFunctionUrlCorsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function_url aws_lambda_function_url}
*/
export declare class DataAwsLambdaFunctionUrl extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lambda_function_url";
    /**
    * Generates CDKTF code for importing a DataAwsLambdaFunctionUrl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLambdaFunctionUrl to import
    * @param importFromId The id of the existing DataAwsLambdaFunctionUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function_url#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLambdaFunctionUrl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_function_url aws_lambda_function_url} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaFunctionUrlConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaFunctionUrlConfig);
    get authorizationType(): string;
    private _cors;
    get cors(): DataAwsLambdaFunctionUrlCorsList;
    get creationTime(): string;
    get functionArn(): string;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    get functionUrl(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invokeMode(): string;
    get lastModifiedTime(): string;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    get urlId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
