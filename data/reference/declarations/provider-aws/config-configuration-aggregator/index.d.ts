/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#id ConfigConfigurationAggregator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#name ConfigConfigurationAggregator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#tags ConfigConfigurationAggregator#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#tags_all ConfigConfigurationAggregator#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * account_aggregation_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
    */
    readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource;
    /**
    * organization_aggregation_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
    */
    readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#account_ids ConfigConfigurationAggregator#account_ids}
    */
    readonly accountIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
}
export declare function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any;
export declare function configConfigurationAggregatorAccountAggregationSourceToHclTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any;
export declare class ConfigConfigurationAggregatorAccountAggregationSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigurationAggregatorAccountAggregationSource | undefined;
    set internalValue(value: ConfigConfigurationAggregatorAccountAggregationSource | undefined);
    private _accountIds?;
    get accountIds(): string[];
    set accountIds(value: string[]);
    get accountIdsInput(): string[] | undefined;
    private _allRegions?;
    get allRegions(): boolean | cdktf.IResolvable;
    set allRegions(value: boolean | cdktf.IResolvable);
    resetAllRegions(): void;
    get allRegionsInput(): boolean | cdktf.IResolvable | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#role_arn ConfigConfigurationAggregator#role_arn}
    */
    readonly roleArn: string;
}
export declare function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any;
export declare function configConfigurationAggregatorOrganizationAggregationSourceToHclTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any;
export declare class ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ConfigConfigurationAggregatorOrganizationAggregationSource | undefined;
    set internalValue(value: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined);
    private _allRegions?;
    get allRegions(): boolean | cdktf.IResolvable;
    set allRegions(value: boolean | cdktf.IResolvable);
    resetAllRegions(): void;
    get allRegionsInput(): boolean | cdktf.IResolvable | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator aws_config_configuration_aggregator}
*/
export declare class ConfigConfigurationAggregator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_config_configuration_aggregator";
    /**
    * Generates CDKTF code for importing a ConfigConfigurationAggregator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ConfigConfigurationAggregator to import
    * @param importFromId The id of the existing ConfigConfigurationAggregator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ConfigConfigurationAggregator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/config_configuration_aggregator aws_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationAggregatorConfig
    */
    constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig);
    get arn(): string;
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
    private _accountAggregationSource;
    get accountAggregationSource(): ConfigConfigurationAggregatorAccountAggregationSourceOutputReference;
    putAccountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource): void;
    resetAccountAggregationSource(): void;
    get accountAggregationSourceInput(): ConfigConfigurationAggregatorAccountAggregationSource | undefined;
    private _organizationAggregationSource;
    get organizationAggregationSource(): ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference;
    putOrganizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource): void;
    resetOrganizationAggregationSource(): void;
    get organizationAggregationSourceInput(): ConfigConfigurationAggregatorOrganizationAggregationSource | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
