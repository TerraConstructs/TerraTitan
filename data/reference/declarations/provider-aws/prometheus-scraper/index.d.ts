/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PrometheusScraperConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#alias PrometheusScraper#alias}
    */
    readonly alias?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#scrape_configuration PrometheusScraper#scrape_configuration}
    */
    readonly scrapeConfiguration: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#tags PrometheusScraper#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#destination PrometheusScraper#destination}
    */
    readonly destination?: PrometheusScraperDestination[] | cdktf.IResolvable;
    /**
    * source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#source PrometheusScraper#source}
    */
    readonly source?: PrometheusScraperSource[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#timeouts PrometheusScraper#timeouts}
    */
    readonly timeouts?: PrometheusScraperTimeouts;
}
export interface PrometheusScraperDestinationAmp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#workspace_arn PrometheusScraper#workspace_arn}
    */
    readonly workspaceArn: string;
}
export declare function prometheusScraperDestinationAmpToTerraform(struct?: PrometheusScraperDestinationAmp | cdktf.IResolvable): any;
export declare function prometheusScraperDestinationAmpToHclTerraform(struct?: PrometheusScraperDestinationAmp | cdktf.IResolvable): any;
export declare class PrometheusScraperDestinationAmpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PrometheusScraperDestinationAmp | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusScraperDestinationAmp | cdktf.IResolvable | undefined);
    private _workspaceArn?;
    get workspaceArn(): string;
    set workspaceArn(value: string);
    get workspaceArnInput(): string | undefined;
}
export declare class PrometheusScraperDestinationAmpList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PrometheusScraperDestinationAmp[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PrometheusScraperDestinationAmpOutputReference;
}
export interface PrometheusScraperDestination {
    /**
    * amp block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#amp PrometheusScraper#amp}
    */
    readonly amp?: PrometheusScraperDestinationAmp[] | cdktf.IResolvable;
}
export declare function prometheusScraperDestinationToTerraform(struct?: PrometheusScraperDestination | cdktf.IResolvable): any;
export declare function prometheusScraperDestinationToHclTerraform(struct?: PrometheusScraperDestination | cdktf.IResolvable): any;
export declare class PrometheusScraperDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PrometheusScraperDestination | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusScraperDestination | cdktf.IResolvable | undefined);
    private _amp;
    get amp(): PrometheusScraperDestinationAmpList;
    putAmp(value: PrometheusScraperDestinationAmp[] | cdktf.IResolvable): void;
    resetAmp(): void;
    get ampInput(): cdktf.IResolvable | PrometheusScraperDestinationAmp[] | undefined;
}
export declare class PrometheusScraperDestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PrometheusScraperDestination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PrometheusScraperDestinationOutputReference;
}
export interface PrometheusScraperSourceEks {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#cluster_arn PrometheusScraper#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#security_group_ids PrometheusScraper#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#subnet_ids PrometheusScraper#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function prometheusScraperSourceEksToTerraform(struct?: PrometheusScraperSourceEks | cdktf.IResolvable): any;
export declare function prometheusScraperSourceEksToHclTerraform(struct?: PrometheusScraperSourceEks | cdktf.IResolvable): any;
export declare class PrometheusScraperSourceEksOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PrometheusScraperSourceEks | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusScraperSourceEks | cdktf.IResolvable | undefined);
    private _clusterArn?;
    get clusterArn(): string;
    set clusterArn(value: string);
    get clusterArnInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
export declare class PrometheusScraperSourceEksList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PrometheusScraperSourceEks[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PrometheusScraperSourceEksOutputReference;
}
export interface PrometheusScraperSource {
    /**
    * eks block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#eks PrometheusScraper#eks}
    */
    readonly eks?: PrometheusScraperSourceEks[] | cdktf.IResolvable;
}
export declare function prometheusScraperSourceToTerraform(struct?: PrometheusScraperSource | cdktf.IResolvable): any;
export declare function prometheusScraperSourceToHclTerraform(struct?: PrometheusScraperSource | cdktf.IResolvable): any;
export declare class PrometheusScraperSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PrometheusScraperSource | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusScraperSource | cdktf.IResolvable | undefined);
    private _eks;
    get eks(): PrometheusScraperSourceEksList;
    putEks(value: PrometheusScraperSourceEks[] | cdktf.IResolvable): void;
    resetEks(): void;
    get eksInput(): cdktf.IResolvable | PrometheusScraperSourceEks[] | undefined;
}
export declare class PrometheusScraperSourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PrometheusScraperSource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PrometheusScraperSourceOutputReference;
}
export interface PrometheusScraperTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#create PrometheusScraper#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#delete PrometheusScraper#delete}
    */
    readonly delete?: string;
}
export declare function prometheusScraperTimeoutsToTerraform(struct?: PrometheusScraperTimeouts | cdktf.IResolvable): any;
export declare function prometheusScraperTimeoutsToHclTerraform(struct?: PrometheusScraperTimeouts | cdktf.IResolvable): any;
export declare class PrometheusScraperTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PrometheusScraperTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: PrometheusScraperTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper aws_prometheus_scraper}
*/
export declare class PrometheusScraper extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_prometheus_scraper";
    /**
    * Generates CDKTF code for importing a PrometheusScraper resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PrometheusScraper to import
    * @param importFromId The id of the existing PrometheusScraper that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PrometheusScraper to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/prometheus_scraper aws_prometheus_scraper} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PrometheusScraperConfig
    */
    constructor(scope: Construct, id: string, config: PrometheusScraperConfig);
    private _alias?;
    get alias(): string;
    set alias(value: string);
    resetAlias(): void;
    get aliasInput(): string | undefined;
    get arn(): string;
    get id(): string;
    get roleArn(): string;
    private _scrapeConfiguration?;
    get scrapeConfiguration(): string;
    set scrapeConfiguration(value: string);
    get scrapeConfigurationInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _destination;
    get destination(): PrometheusScraperDestinationList;
    putDestination(value: PrometheusScraperDestination[] | cdktf.IResolvable): void;
    resetDestination(): void;
    get destinationInput(): cdktf.IResolvable | PrometheusScraperDestination[] | undefined;
    private _source;
    get source(): PrometheusScraperSourceList;
    putSource(value: PrometheusScraperSource[] | cdktf.IResolvable): void;
    resetSource(): void;
    get sourceInput(): cdktf.IResolvable | PrometheusScraperSource[] | undefined;
    private _timeouts;
    get timeouts(): PrometheusScraperTimeoutsOutputReference;
    putTimeouts(value: PrometheusScraperTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | PrometheusScraperTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
