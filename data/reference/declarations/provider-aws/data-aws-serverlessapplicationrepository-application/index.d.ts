/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsServerlessapplicationrepositoryApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}
    */
    readonly semanticVersion?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application}
*/
export declare class DataAwsServerlessapplicationrepositoryApplication extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_serverlessapplicationrepository_application";
    /**
    * Generates CDKTF code for importing a DataAwsServerlessapplicationrepositoryApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsServerlessapplicationrepositoryApplication to import
    * @param importFromId The id of the existing DataAwsServerlessapplicationrepositoryApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/serverlessapplicationrepository_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsServerlessapplicationrepositoryApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServerlessapplicationrepositoryApplicationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsServerlessapplicationrepositoryApplicationConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    get requiredCapabilities(): string[];
    private _semanticVersion?;
    get semanticVersion(): string;
    set semanticVersion(value: string);
    resetSemanticVersion(): void;
    get semanticVersionInput(): string | undefined;
    get sourceCodeUrl(): string;
    get templateUrl(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
