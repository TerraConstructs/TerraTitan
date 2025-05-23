/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}
    */
    readonly deleteReports?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#id CodebuildReportGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#name CodebuildReportGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#tags CodebuildReportGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * export_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#export_config CodebuildReportGroup#export_config}
    */
    readonly exportConfig: CodebuildReportGroupExportConfig;
}
export interface CodebuildReportGroupExportConfigS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#bucket CodebuildReportGroup#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}
    */
    readonly encryptionKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#packaging CodebuildReportGroup#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#path CodebuildReportGroup#path}
    */
    readonly path?: string;
}
export declare function codebuildReportGroupExportConfigS3DestinationToTerraform(struct?: CodebuildReportGroupExportConfigS3DestinationOutputReference | CodebuildReportGroupExportConfigS3Destination): any;
export declare function codebuildReportGroupExportConfigS3DestinationToHclTerraform(struct?: CodebuildReportGroupExportConfigS3DestinationOutputReference | CodebuildReportGroupExportConfigS3Destination): any;
export declare class CodebuildReportGroupExportConfigS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildReportGroupExportConfigS3Destination | undefined;
    set internalValue(value: CodebuildReportGroupExportConfigS3Destination | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _encryptionDisabled?;
    get encryptionDisabled(): boolean | cdktf.IResolvable;
    set encryptionDisabled(value: boolean | cdktf.IResolvable);
    resetEncryptionDisabled(): void;
    get encryptionDisabledInput(): boolean | cdktf.IResolvable | undefined;
    private _encryptionKey?;
    get encryptionKey(): string;
    set encryptionKey(value: string);
    get encryptionKeyInput(): string | undefined;
    private _packaging?;
    get packaging(): string;
    set packaging(value: string);
    resetPackaging(): void;
    get packagingInput(): string | undefined;
    private _path?;
    get path(): string;
    set path(value: string);
    resetPath(): void;
    get pathInput(): string | undefined;
}
export interface CodebuildReportGroupExportConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#s3_destination CodebuildReportGroup#s3_destination}
    */
    readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination;
}
export declare function codebuildReportGroupExportConfigToTerraform(struct?: CodebuildReportGroupExportConfigOutputReference | CodebuildReportGroupExportConfig): any;
export declare function codebuildReportGroupExportConfigToHclTerraform(struct?: CodebuildReportGroupExportConfigOutputReference | CodebuildReportGroupExportConfig): any;
export declare class CodebuildReportGroupExportConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CodebuildReportGroupExportConfig | undefined;
    set internalValue(value: CodebuildReportGroupExportConfig | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _s3Destination;
    get s3Destination(): CodebuildReportGroupExportConfigS3DestinationOutputReference;
    putS3Destination(value: CodebuildReportGroupExportConfigS3Destination): void;
    resetS3Destination(): void;
    get s3DestinationInput(): CodebuildReportGroupExportConfigS3Destination | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group aws_codebuild_report_group}
*/
export declare class CodebuildReportGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codebuild_report_group";
    /**
    * Generates CDKTF code for importing a CodebuildReportGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodebuildReportGroup to import
    * @param importFromId The id of the existing CodebuildReportGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodebuildReportGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codebuild_report_group aws_codebuild_report_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildReportGroupConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildReportGroupConfig);
    get arn(): string;
    get created(): string;
    private _deleteReports?;
    get deleteReports(): boolean | cdktf.IResolvable;
    set deleteReports(value: boolean | cdktf.IResolvable);
    resetDeleteReports(): void;
    get deleteReportsInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _exportConfig;
    get exportConfig(): CodebuildReportGroupExportConfigOutputReference;
    putExportConfig(value: CodebuildReportGroupExportConfig): void;
    get exportConfigInput(): CodebuildReportGroupExportConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
