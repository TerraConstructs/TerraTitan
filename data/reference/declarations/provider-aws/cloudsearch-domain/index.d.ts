/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudsearchDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#id CloudsearchDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}
    */
    readonly multiAz?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#name CloudsearchDomain#name}
    */
    readonly name: string;
    /**
    * endpoint_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#endpoint_options CloudsearchDomain#endpoint_options}
    */
    readonly endpointOptions?: CloudsearchDomainEndpointOptions;
    /**
    * index_field block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#index_field CloudsearchDomain#index_field}
    */
    readonly indexField?: CloudsearchDomainIndexField[] | cdktf.IResolvable;
    /**
    * scaling_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#scaling_parameters CloudsearchDomain#scaling_parameters}
    */
    readonly scalingParameters?: CloudsearchDomainScalingParameters;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#timeouts CloudsearchDomain#timeouts}
    */
    readonly timeouts?: CloudsearchDomainTimeouts;
}
export interface CloudsearchDomainEndpointOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}
    */
    readonly enforceHttps?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}
    */
    readonly tlsSecurityPolicy?: string;
}
export declare function cloudsearchDomainEndpointOptionsToTerraform(struct?: CloudsearchDomainEndpointOptionsOutputReference | CloudsearchDomainEndpointOptions): any;
export declare function cloudsearchDomainEndpointOptionsToHclTerraform(struct?: CloudsearchDomainEndpointOptionsOutputReference | CloudsearchDomainEndpointOptions): any;
export declare class CloudsearchDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudsearchDomainEndpointOptions | undefined;
    set internalValue(value: CloudsearchDomainEndpointOptions | undefined);
    private _enforceHttps?;
    get enforceHttps(): boolean | cdktf.IResolvable;
    set enforceHttps(value: boolean | cdktf.IResolvable);
    resetEnforceHttps(): void;
    get enforceHttpsInput(): boolean | cdktf.IResolvable | undefined;
    private _tlsSecurityPolicy?;
    get tlsSecurityPolicy(): string;
    set tlsSecurityPolicy(value: string);
    resetTlsSecurityPolicy(): void;
    get tlsSecurityPolicyInput(): string | undefined;
}
export interface CloudsearchDomainIndexField {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}
    */
    readonly analysisScheme?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#default_value CloudsearchDomain#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#facet CloudsearchDomain#facet}
    */
    readonly facet?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#highlight CloudsearchDomain#highlight}
    */
    readonly highlight?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#name CloudsearchDomain#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#return CloudsearchDomain#return}
    */
    readonly return?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#search CloudsearchDomain#search}
    */
    readonly search?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#sort CloudsearchDomain#sort}
    */
    readonly sort?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}
    */
    readonly sourceFields?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#type CloudsearchDomain#type}
    */
    readonly type: string;
}
export declare function cloudsearchDomainIndexFieldToTerraform(struct?: CloudsearchDomainIndexField | cdktf.IResolvable): any;
export declare function cloudsearchDomainIndexFieldToHclTerraform(struct?: CloudsearchDomainIndexField | cdktf.IResolvable): any;
export declare class CloudsearchDomainIndexFieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudsearchDomainIndexField | cdktf.IResolvable | undefined;
    set internalValue(value: CloudsearchDomainIndexField | cdktf.IResolvable | undefined);
    private _analysisScheme?;
    get analysisScheme(): string;
    set analysisScheme(value: string);
    resetAnalysisScheme(): void;
    get analysisSchemeInput(): string | undefined;
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    resetDefaultValue(): void;
    get defaultValueInput(): string | undefined;
    private _facet?;
    get facet(): boolean | cdktf.IResolvable;
    set facet(value: boolean | cdktf.IResolvable);
    resetFacet(): void;
    get facetInput(): boolean | cdktf.IResolvable | undefined;
    private _highlight?;
    get highlight(): boolean | cdktf.IResolvable;
    set highlight(value: boolean | cdktf.IResolvable);
    resetHighlight(): void;
    get highlightInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _return?;
    get return(): boolean | cdktf.IResolvable;
    set return(value: boolean | cdktf.IResolvable);
    resetReturn(): void;
    get returnInput(): boolean | cdktf.IResolvable | undefined;
    private _search?;
    get search(): boolean | cdktf.IResolvable;
    set search(value: boolean | cdktf.IResolvable);
    resetSearch(): void;
    get searchInput(): boolean | cdktf.IResolvable | undefined;
    private _sort?;
    get sort(): boolean | cdktf.IResolvable;
    set sort(value: boolean | cdktf.IResolvable);
    resetSort(): void;
    get sortInput(): boolean | cdktf.IResolvable | undefined;
    private _sourceFields?;
    get sourceFields(): string;
    set sourceFields(value: string);
    resetSourceFields(): void;
    get sourceFieldsInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class CloudsearchDomainIndexFieldList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudsearchDomainIndexField[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudsearchDomainIndexFieldOutputReference;
}
export interface CloudsearchDomainScalingParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}
    */
    readonly desiredInstanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}
    */
    readonly desiredPartitionCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}
    */
    readonly desiredReplicationCount?: number;
}
export declare function cloudsearchDomainScalingParametersToTerraform(struct?: CloudsearchDomainScalingParametersOutputReference | CloudsearchDomainScalingParameters): any;
export declare function cloudsearchDomainScalingParametersToHclTerraform(struct?: CloudsearchDomainScalingParametersOutputReference | CloudsearchDomainScalingParameters): any;
export declare class CloudsearchDomainScalingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudsearchDomainScalingParameters | undefined;
    set internalValue(value: CloudsearchDomainScalingParameters | undefined);
    private _desiredInstanceType?;
    get desiredInstanceType(): string;
    set desiredInstanceType(value: string);
    resetDesiredInstanceType(): void;
    get desiredInstanceTypeInput(): string | undefined;
    private _desiredPartitionCount?;
    get desiredPartitionCount(): number;
    set desiredPartitionCount(value: number);
    resetDesiredPartitionCount(): void;
    get desiredPartitionCountInput(): number | undefined;
    private _desiredReplicationCount?;
    get desiredReplicationCount(): number;
    set desiredReplicationCount(value: number);
    resetDesiredReplicationCount(): void;
    get desiredReplicationCountInput(): number | undefined;
}
export interface CloudsearchDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#create CloudsearchDomain#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#delete CloudsearchDomain#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#update CloudsearchDomain#update}
    */
    readonly update?: string;
}
export declare function cloudsearchDomainTimeoutsToTerraform(struct?: CloudsearchDomainTimeouts | cdktf.IResolvable): any;
export declare function cloudsearchDomainTimeoutsToHclTerraform(struct?: CloudsearchDomainTimeouts | cdktf.IResolvable): any;
export declare class CloudsearchDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudsearchDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: CloudsearchDomainTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain aws_cloudsearch_domain}
*/
export declare class CloudsearchDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudsearch_domain";
    /**
    * Generates CDKTF code for importing a CloudsearchDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudsearchDomain to import
    * @param importFromId The id of the existing CloudsearchDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudsearchDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudsearch_domain aws_cloudsearch_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudsearchDomainConfig
    */
    constructor(scope: Construct, id: string, config: CloudsearchDomainConfig);
    get arn(): string;
    get documentServiceEndpoint(): string;
    get domainId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _multiAz?;
    get multiAz(): boolean | cdktf.IResolvable;
    set multiAz(value: boolean | cdktf.IResolvable);
    resetMultiAz(): void;
    get multiAzInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get searchServiceEndpoint(): string;
    private _endpointOptions;
    get endpointOptions(): CloudsearchDomainEndpointOptionsOutputReference;
    putEndpointOptions(value: CloudsearchDomainEndpointOptions): void;
    resetEndpointOptions(): void;
    get endpointOptionsInput(): CloudsearchDomainEndpointOptions | undefined;
    private _indexField;
    get indexField(): CloudsearchDomainIndexFieldList;
    putIndexField(value: CloudsearchDomainIndexField[] | cdktf.IResolvable): void;
    resetIndexField(): void;
    get indexFieldInput(): cdktf.IResolvable | CloudsearchDomainIndexField[] | undefined;
    private _scalingParameters;
    get scalingParameters(): CloudsearchDomainScalingParametersOutputReference;
    putScalingParameters(value: CloudsearchDomainScalingParameters): void;
    resetScalingParameters(): void;
    get scalingParametersInput(): CloudsearchDomainScalingParameters | undefined;
    private _timeouts;
    get timeouts(): CloudsearchDomainTimeoutsOutputReference;
    putTimeouts(value: CloudsearchDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | CloudsearchDomainTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
