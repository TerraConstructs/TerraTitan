/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OamLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#id OamLink#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#label_template OamLink#label_template}
    */
    readonly labelTemplate: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#resource_types OamLink#resource_types}
    */
    readonly resourceTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#sink_identifier OamLink#sink_identifier}
    */
    readonly sinkIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#tags OamLink#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#tags_all OamLink#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * link_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#link_configuration OamLink#link_configuration}
    */
    readonly linkConfiguration?: OamLinkLinkConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#timeouts OamLink#timeouts}
    */
    readonly timeouts?: OamLinkTimeouts;
}
export interface OamLinkLinkConfigurationLogGroupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#filter OamLink#filter}
    */
    readonly filter: string;
}
export declare function oamLinkLinkConfigurationLogGroupConfigurationToTerraform(struct?: OamLinkLinkConfigurationLogGroupConfigurationOutputReference | OamLinkLinkConfigurationLogGroupConfiguration): any;
export declare function oamLinkLinkConfigurationLogGroupConfigurationToHclTerraform(struct?: OamLinkLinkConfigurationLogGroupConfigurationOutputReference | OamLinkLinkConfigurationLogGroupConfiguration): any;
export declare class OamLinkLinkConfigurationLogGroupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OamLinkLinkConfigurationLogGroupConfiguration | undefined;
    set internalValue(value: OamLinkLinkConfigurationLogGroupConfiguration | undefined);
    private _filter?;
    get filter(): string;
    set filter(value: string);
    get filterInput(): string | undefined;
}
export interface OamLinkLinkConfigurationMetricConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#filter OamLink#filter}
    */
    readonly filter: string;
}
export declare function oamLinkLinkConfigurationMetricConfigurationToTerraform(struct?: OamLinkLinkConfigurationMetricConfigurationOutputReference | OamLinkLinkConfigurationMetricConfiguration): any;
export declare function oamLinkLinkConfigurationMetricConfigurationToHclTerraform(struct?: OamLinkLinkConfigurationMetricConfigurationOutputReference | OamLinkLinkConfigurationMetricConfiguration): any;
export declare class OamLinkLinkConfigurationMetricConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OamLinkLinkConfigurationMetricConfiguration | undefined;
    set internalValue(value: OamLinkLinkConfigurationMetricConfiguration | undefined);
    private _filter?;
    get filter(): string;
    set filter(value: string);
    get filterInput(): string | undefined;
}
export interface OamLinkLinkConfiguration {
    /**
    * log_group_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#log_group_configuration OamLink#log_group_configuration}
    */
    readonly logGroupConfiguration?: OamLinkLinkConfigurationLogGroupConfiguration;
    /**
    * metric_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#metric_configuration OamLink#metric_configuration}
    */
    readonly metricConfiguration?: OamLinkLinkConfigurationMetricConfiguration;
}
export declare function oamLinkLinkConfigurationToTerraform(struct?: OamLinkLinkConfigurationOutputReference | OamLinkLinkConfiguration): any;
export declare function oamLinkLinkConfigurationToHclTerraform(struct?: OamLinkLinkConfigurationOutputReference | OamLinkLinkConfiguration): any;
export declare class OamLinkLinkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OamLinkLinkConfiguration | undefined;
    set internalValue(value: OamLinkLinkConfiguration | undefined);
    private _logGroupConfiguration;
    get logGroupConfiguration(): OamLinkLinkConfigurationLogGroupConfigurationOutputReference;
    putLogGroupConfiguration(value: OamLinkLinkConfigurationLogGroupConfiguration): void;
    resetLogGroupConfiguration(): void;
    get logGroupConfigurationInput(): OamLinkLinkConfigurationLogGroupConfiguration | undefined;
    private _metricConfiguration;
    get metricConfiguration(): OamLinkLinkConfigurationMetricConfigurationOutputReference;
    putMetricConfiguration(value: OamLinkLinkConfigurationMetricConfiguration): void;
    resetMetricConfiguration(): void;
    get metricConfigurationInput(): OamLinkLinkConfigurationMetricConfiguration | undefined;
}
export interface OamLinkTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#create OamLink#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#delete OamLink#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#update OamLink#update}
    */
    readonly update?: string;
}
export declare function oamLinkTimeoutsToTerraform(struct?: OamLinkTimeouts | cdktf.IResolvable): any;
export declare function oamLinkTimeoutsToHclTerraform(struct?: OamLinkTimeouts | cdktf.IResolvable): any;
export declare class OamLinkTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OamLinkTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OamLinkTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link aws_oam_link}
*/
export declare class OamLink extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_oam_link";
    /**
    * Generates CDKTF code for importing a OamLink resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OamLink to import
    * @param importFromId The id of the existing OamLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OamLink to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/oam_link aws_oam_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OamLinkConfig
    */
    constructor(scope: Construct, id: string, config: OamLinkConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get label(): string;
    private _labelTemplate?;
    get labelTemplate(): string;
    set labelTemplate(value: string);
    get labelTemplateInput(): string | undefined;
    get linkId(): string;
    private _resourceTypes?;
    get resourceTypes(): string[];
    set resourceTypes(value: string[]);
    get resourceTypesInput(): string[] | undefined;
    get sinkArn(): string;
    private _sinkIdentifier?;
    get sinkIdentifier(): string;
    set sinkIdentifier(value: string);
    get sinkIdentifierInput(): string | undefined;
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
    private _linkConfiguration;
    get linkConfiguration(): OamLinkLinkConfigurationOutputReference;
    putLinkConfiguration(value: OamLinkLinkConfiguration): void;
    resetLinkConfiguration(): void;
    get linkConfigurationInput(): OamLinkLinkConfiguration | undefined;
    private _timeouts;
    get timeouts(): OamLinkTimeoutsOutputReference;
    putTimeouts(value: OamLinkTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OamLinkTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
