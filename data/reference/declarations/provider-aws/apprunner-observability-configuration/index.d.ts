/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApprunnerObservabilityConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration#id ApprunnerObservabilityConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration#observability_configuration_name ApprunnerObservabilityConfiguration#observability_configuration_name}
    */
    readonly observabilityConfigurationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration#tags ApprunnerObservabilityConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration#tags_all ApprunnerObservabilityConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * trace_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration#trace_configuration ApprunnerObservabilityConfiguration#trace_configuration}
    */
    readonly traceConfiguration?: ApprunnerObservabilityConfigurationTraceConfiguration;
}
export interface ApprunnerObservabilityConfigurationTraceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration#vendor ApprunnerObservabilityConfiguration#vendor}
    */
    readonly vendor?: string;
}
export declare function apprunnerObservabilityConfigurationTraceConfigurationToTerraform(struct?: ApprunnerObservabilityConfigurationTraceConfigurationOutputReference | ApprunnerObservabilityConfigurationTraceConfiguration): any;
export declare function apprunnerObservabilityConfigurationTraceConfigurationToHclTerraform(struct?: ApprunnerObservabilityConfigurationTraceConfigurationOutputReference | ApprunnerObservabilityConfigurationTraceConfiguration): any;
export declare class ApprunnerObservabilityConfigurationTraceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApprunnerObservabilityConfigurationTraceConfiguration | undefined;
    set internalValue(value: ApprunnerObservabilityConfigurationTraceConfiguration | undefined);
    private _vendor?;
    get vendor(): string;
    set vendor(value: string);
    resetVendor(): void;
    get vendorInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration aws_apprunner_observability_configuration}
*/
export declare class ApprunnerObservabilityConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apprunner_observability_configuration";
    /**
    * Generates CDKTF code for importing a ApprunnerObservabilityConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApprunnerObservabilityConfiguration to import
    * @param importFromId The id of the existing ApprunnerObservabilityConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApprunnerObservabilityConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apprunner_observability_configuration aws_apprunner_observability_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerObservabilityConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerObservabilityConfigurationConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get latest(): cdktf.IResolvable;
    private _observabilityConfigurationName?;
    get observabilityConfigurationName(): string;
    set observabilityConfigurationName(value: string);
    get observabilityConfigurationNameInput(): string | undefined;
    get observabilityConfigurationRevision(): number;
    get status(): string;
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
    private _traceConfiguration;
    get traceConfiguration(): ApprunnerObservabilityConfigurationTraceConfigurationOutputReference;
    putTraceConfiguration(value: ApprunnerObservabilityConfigurationTraceConfiguration): void;
    resetTraceConfiguration(): void;
    get traceConfigurationInput(): ApprunnerObservabilityConfigurationTraceConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
