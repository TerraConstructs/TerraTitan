/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cur_report_definition#id DataAwsCurReportDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cur_report_definition#report_name DataAwsCurReportDefinition#report_name}
    */
    readonly reportName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cur_report_definition#tags DataAwsCurReportDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cur_report_definition aws_cur_report_definition}
*/
export declare class DataAwsCurReportDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_cur_report_definition";
    /**
    * Generates CDKTF code for importing a DataAwsCurReportDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCurReportDefinition to import
    * @param importFromId The id of the existing DataAwsCurReportDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cur_report_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCurReportDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/cur_report_definition aws_cur_report_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCurReportDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCurReportDefinitionConfig);
    get additionalArtifacts(): string[];
    get additionalSchemaElements(): string[];
    get compression(): string;
    get format(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get refreshClosedReports(): cdktf.IResolvable;
    private _reportName?;
    get reportName(): string;
    set reportName(value: string);
    get reportNameInput(): string | undefined;
    get reportVersioning(): string;
    get s3Bucket(): string;
    get s3Prefix(): string;
    get s3Region(): string;
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
    get timeUnit(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
