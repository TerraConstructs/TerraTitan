/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CurReportDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}
    */
    readonly additionalArtifacts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}
    */
    readonly additionalSchemaElements: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}
    */
    readonly compression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#format CurReportDefinition#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#id CurReportDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}
    */
    readonly refreshClosedReports?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}
    */
    readonly reportName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}
    */
    readonly reportVersioning?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}
    */
    readonly s3Prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}
    */
    readonly s3Region: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#tags_all CurReportDefinition#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}
    */
    readonly timeUnit: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition aws_cur_report_definition}
*/
export declare class CurReportDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cur_report_definition";
    /**
    * Generates CDKTF code for importing a CurReportDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CurReportDefinition to import
    * @param importFromId The id of the existing CurReportDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CurReportDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cur_report_definition aws_cur_report_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CurReportDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: CurReportDefinitionConfig);
    private _additionalArtifacts?;
    get additionalArtifacts(): string[];
    set additionalArtifacts(value: string[]);
    resetAdditionalArtifacts(): void;
    get additionalArtifactsInput(): string[] | undefined;
    private _additionalSchemaElements?;
    get additionalSchemaElements(): string[];
    set additionalSchemaElements(value: string[]);
    get additionalSchemaElementsInput(): string[] | undefined;
    get arn(): string;
    private _compression?;
    get compression(): string;
    set compression(value: string);
    get compressionInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _refreshClosedReports?;
    get refreshClosedReports(): boolean | cdktf.IResolvable;
    set refreshClosedReports(value: boolean | cdktf.IResolvable);
    resetRefreshClosedReports(): void;
    get refreshClosedReportsInput(): boolean | cdktf.IResolvable | undefined;
    private _reportName?;
    get reportName(): string;
    set reportName(value: string);
    get reportNameInput(): string | undefined;
    private _reportVersioning?;
    get reportVersioning(): string;
    set reportVersioning(value: string);
    resetReportVersioning(): void;
    get reportVersioningInput(): string | undefined;
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string | undefined;
    private _s3Prefix?;
    get s3Prefix(): string;
    set s3Prefix(value: string);
    resetS3Prefix(): void;
    get s3PrefixInput(): string | undefined;
    private _s3Region?;
    get s3Region(): string;
    set s3Region(value: string);
    get s3RegionInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _timeUnit?;
    get timeUnit(): string;
    set timeUnit(value: string);
    get timeUnitInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
