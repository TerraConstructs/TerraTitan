/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsIamSamlProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_saml_provider#arn DataAwsIamSamlProvider#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_saml_provider#id DataAwsIamSamlProvider#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_saml_provider#tags DataAwsIamSamlProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_saml_provider aws_iam_saml_provider}
*/
export declare class DataAwsIamSamlProvider extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_iam_saml_provider";
    /**
    * Generates CDKTF code for importing a DataAwsIamSamlProvider resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsIamSamlProvider to import
    * @param importFromId The id of the existing DataAwsIamSamlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_saml_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsIamSamlProvider to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/iam_saml_provider aws_iam_saml_provider} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIamSamlProviderConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsIamSamlProviderConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    get createDate(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get samlMetadataDocument(): string;
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
    get validUntil(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
