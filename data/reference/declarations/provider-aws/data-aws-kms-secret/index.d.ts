/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret#id DataAwsKmsSecret#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * secret block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret#secret DataAwsKmsSecret#secret}
    */
    readonly secret: DataAwsKmsSecretSecret[] | cdktf.IResolvable;
}
export interface DataAwsKmsSecretSecret {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret#context DataAwsKmsSecret#context}
    */
    readonly context?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret#grant_tokens DataAwsKmsSecret#grant_tokens}
    */
    readonly grantTokens?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret#name DataAwsKmsSecret#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret#payload DataAwsKmsSecret#payload}
    */
    readonly payload: string;
}
export declare function dataAwsKmsSecretSecretToTerraform(struct?: DataAwsKmsSecretSecret | cdktf.IResolvable): any;
export declare function dataAwsKmsSecretSecretToHclTerraform(struct?: DataAwsKmsSecretSecret | cdktf.IResolvable): any;
export declare class DataAwsKmsSecretSecretOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKmsSecretSecret | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsKmsSecretSecret | cdktf.IResolvable | undefined);
    private _context?;
    get context(): {
        [key: string]: string;
    };
    set context(value: {
        [key: string]: string;
    });
    resetContext(): void;
    get contextInput(): {
        [key: string]: string;
    } | undefined;
    private _grantTokens?;
    get grantTokens(): string[];
    set grantTokens(value: string[]);
    resetGrantTokens(): void;
    get grantTokensInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _payload?;
    get payload(): string;
    set payload(value: string);
    get payloadInput(): string | undefined;
}
export declare class DataAwsKmsSecretSecretList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsKmsSecretSecret[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsKmsSecretSecretOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret aws_kms_secret}
*/
export declare class DataAwsKmsSecret extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kms_secret";
    /**
    * Generates CDKTF code for importing a DataAwsKmsSecret resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKmsSecret to import
    * @param importFromId The id of the existing DataAwsKmsSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKmsSecret to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kms_secret aws_kms_secret} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKmsSecretConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKmsSecretConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _secret;
    get secret(): DataAwsKmsSecretSecretList;
    putSecret(value: DataAwsKmsSecretSecret[] | cdktf.IResolvable): void;
    get secretInput(): cdktf.IResolvable | DataAwsKmsSecretSecret[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
