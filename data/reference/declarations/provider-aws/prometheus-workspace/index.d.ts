/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PrometheusWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#alias PrometheusWorkspace#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#id PrometheusWorkspace#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#kms_key_arn PrometheusWorkspace#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#tags PrometheusWorkspace#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#tags_all PrometheusWorkspace#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * logging_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#logging_configuration PrometheusWorkspace#logging_configuration}
    */
    readonly loggingConfiguration?: PrometheusWorkspaceLoggingConfiguration;
}
export interface PrometheusWorkspaceLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#log_group_arn PrometheusWorkspace#log_group_arn}
    */
    readonly logGroupArn: string;
}
export declare function prometheusWorkspaceLoggingConfigurationToTerraform(struct?: PrometheusWorkspaceLoggingConfigurationOutputReference | PrometheusWorkspaceLoggingConfiguration): any;
export declare function prometheusWorkspaceLoggingConfigurationToHclTerraform(struct?: PrometheusWorkspaceLoggingConfigurationOutputReference | PrometheusWorkspaceLoggingConfiguration): any;
export declare class PrometheusWorkspaceLoggingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PrometheusWorkspaceLoggingConfiguration | undefined;
    set internalValue(value: PrometheusWorkspaceLoggingConfiguration | undefined);
    private _logGroupArn?;
    get logGroupArn(): string;
    set logGroupArn(value: string);
    get logGroupArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace aws_prometheus_workspace}
*/
export declare class PrometheusWorkspace extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_prometheus_workspace";
    /**
    * Generates CDKTF code for importing a PrometheusWorkspace resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PrometheusWorkspace to import
    * @param importFromId The id of the existing PrometheusWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PrometheusWorkspace to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_workspace aws_prometheus_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusWorkspaceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: PrometheusWorkspaceConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    get prometheusEndpoint(): string;
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
    private _loggingConfiguration;
    get loggingConfiguration(): PrometheusWorkspaceLoggingConfigurationOutputReference;
    putLoggingConfiguration(value: PrometheusWorkspaceLoggingConfiguration): void;
    resetLoggingConfiguration(): void;
    get loggingConfigurationInput(): PrometheusWorkspaceLoggingConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
