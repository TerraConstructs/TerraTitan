/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#execution_role_arn CloudformationType#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#id CloudformationType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#schema_handler_package CloudformationType#schema_handler_package}
    */
    readonly schemaHandlerPackage: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#type CloudformationType#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#type_name CloudformationType#type_name}
    */
    readonly typeName: string;
    /**
    * logging_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#logging_config CloudformationType#logging_config}
    */
    readonly loggingConfig?: CloudformationTypeLoggingConfig;
}
export interface CloudformationTypeLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#log_group_name CloudformationType#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#log_role_arn CloudformationType#log_role_arn}
    */
    readonly logRoleArn: string;
}
export declare function cloudformationTypeLoggingConfigToTerraform(struct?: CloudformationTypeLoggingConfigOutputReference | CloudformationTypeLoggingConfig): any;
export declare function cloudformationTypeLoggingConfigToHclTerraform(struct?: CloudformationTypeLoggingConfigOutputReference | CloudformationTypeLoggingConfig): any;
export declare class CloudformationTypeLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudformationTypeLoggingConfig | undefined;
    set internalValue(value: CloudformationTypeLoggingConfig | undefined);
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _logRoleArn?;
    get logRoleArn(): string;
    set logRoleArn(value: string);
    get logRoleArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type aws_cloudformation_type}
*/
export declare class CloudformationType extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudformation_type";
    /**
    * Generates CDKTF code for importing a CloudformationType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudformationType to import
    * @param importFromId The id of the existing CloudformationType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudformationType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudformation_type aws_cloudformation_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationTypeConfig
    */
    constructor(scope: Construct, id: string, config: CloudformationTypeConfig);
    get arn(): string;
    get defaultVersionId(): string;
    get deprecatedStatus(): string;
    get description(): string;
    get documentationUrl(): string;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get isDefaultVersion(): cdktf.IResolvable;
    get provisioningType(): string;
    get schema(): string;
    private _schemaHandlerPackage?;
    get schemaHandlerPackage(): string;
    set schemaHandlerPackage(value: string);
    get schemaHandlerPackageInput(): string | undefined;
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
    get typeNameInput(): string | undefined;
    get versionId(): string;
    get visibility(): string;
    private _loggingConfig;
    get loggingConfig(): CloudformationTypeLoggingConfigOutputReference;
    putLoggingConfig(value: CloudformationTypeLoggingConfig): void;
    resetLoggingConfig(): void;
    get loggingConfigInput(): CloudformationTypeLoggingConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
