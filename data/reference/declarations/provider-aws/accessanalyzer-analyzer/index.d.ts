/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AccessanalyzerAnalyzerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}
    */
    readonly analyzerName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#id AccessanalyzerAnalyzer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#tags_all AccessanalyzerAnalyzer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}
    */
    readonly type?: string;
    /**
    * configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#configuration AccessanalyzerAnalyzer#configuration}
    */
    readonly configuration?: AccessanalyzerAnalyzerConfiguration;
}
export interface AccessanalyzerAnalyzerConfigurationUnusedAccess {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#unused_access_age AccessanalyzerAnalyzer#unused_access_age}
    */
    readonly unusedAccessAge?: number;
}
export declare function accessanalyzerAnalyzerConfigurationUnusedAccessToTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference | AccessanalyzerAnalyzerConfigurationUnusedAccess): any;
export declare function accessanalyzerAnalyzerConfigurationUnusedAccessToHclTerraform(struct?: AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference | AccessanalyzerAnalyzerConfigurationUnusedAccess): any;
export declare class AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccessanalyzerAnalyzerConfigurationUnusedAccess | undefined;
    set internalValue(value: AccessanalyzerAnalyzerConfigurationUnusedAccess | undefined);
    private _unusedAccessAge?;
    get unusedAccessAge(): number;
    set unusedAccessAge(value: number);
    resetUnusedAccessAge(): void;
    get unusedAccessAgeInput(): number | undefined;
}
export interface AccessanalyzerAnalyzerConfiguration {
    /**
    * unused_access block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#unused_access AccessanalyzerAnalyzer#unused_access}
    */
    readonly unusedAccess?: AccessanalyzerAnalyzerConfigurationUnusedAccess;
}
export declare function accessanalyzerAnalyzerConfigurationToTerraform(struct?: AccessanalyzerAnalyzerConfigurationOutputReference | AccessanalyzerAnalyzerConfiguration): any;
export declare function accessanalyzerAnalyzerConfigurationToHclTerraform(struct?: AccessanalyzerAnalyzerConfigurationOutputReference | AccessanalyzerAnalyzerConfiguration): any;
export declare class AccessanalyzerAnalyzerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AccessanalyzerAnalyzerConfiguration | undefined;
    set internalValue(value: AccessanalyzerAnalyzerConfiguration | undefined);
    private _unusedAccess;
    get unusedAccess(): AccessanalyzerAnalyzerConfigurationUnusedAccessOutputReference;
    putUnusedAccess(value: AccessanalyzerAnalyzerConfigurationUnusedAccess): void;
    resetUnusedAccess(): void;
    get unusedAccessInput(): AccessanalyzerAnalyzerConfigurationUnusedAccess | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer}
*/
export declare class AccessanalyzerAnalyzer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_accessanalyzer_analyzer";
    /**
    * Generates CDKTF code for importing a AccessanalyzerAnalyzer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AccessanalyzerAnalyzer to import
    * @param importFromId The id of the existing AccessanalyzerAnalyzer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AccessanalyzerAnalyzer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AccessanalyzerAnalyzerConfig
    */
    constructor(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig);
    private _analyzerName?;
    get analyzerName(): string;
    set analyzerName(value: string);
    get analyzerNameInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    resetType(): void;
    get typeInput(): string | undefined;
    private _configuration;
    get configuration(): AccessanalyzerAnalyzerConfigurationOutputReference;
    putConfiguration(value: AccessanalyzerAnalyzerConfiguration): void;
    resetConfiguration(): void;
    get configurationInput(): AccessanalyzerAnalyzerConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
