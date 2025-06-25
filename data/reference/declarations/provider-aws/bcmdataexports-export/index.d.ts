/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BcmdataexportsExportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * export block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}
    */
    readonly export?: BcmdataexportsExportExport[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#timeouts BcmdataexportsExport#timeouts}
    */
    readonly timeouts?: BcmdataexportsExportTimeouts;
}
export interface BcmdataexportsExportExportDataQuery {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}
    */
    readonly queryStatement: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}
    */
    readonly tableConfigurations?: {
        [key: string]: {
            [key: string]: string;
        };
    } | cdktf.IResolvable;
}
export declare function bcmdataexportsExportExportDataQueryToTerraform(struct?: BcmdataexportsExportExportDataQuery | cdktf.IResolvable): any;
export declare function bcmdataexportsExportExportDataQueryToHclTerraform(struct?: BcmdataexportsExportExportDataQuery | cdktf.IResolvable): any;
export declare class BcmdataexportsExportExportDataQueryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BcmdataexportsExportExportDataQuery | cdktf.IResolvable | undefined;
    set internalValue(value: BcmdataexportsExportExportDataQuery | cdktf.IResolvable | undefined);
    private _queryStatement?;
    get queryStatement(): string;
    set queryStatement(value: string);
    get queryStatementInput(): string | undefined;
    private _tableConfigurations?;
    get tableConfigurations(): {
        [key: string]: {
            [key: string]: string;
        };
    } | cdktf.IResolvable;
    set tableConfigurations(value: {
        [key: string]: {
            [key: string]: string;
        };
    } | cdktf.IResolvable);
    resetTableConfigurations(): void;
    get tableConfigurationsInput(): cdktf.IResolvable | {
        [key: string]: {
            [key: string]: string;
        };
    } | undefined;
}
export declare class BcmdataexportsExportExportDataQueryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BcmdataexportsExportExportDataQuery[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BcmdataexportsExportExportDataQueryOutputReference;
}
export interface BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}
    */
    readonly compression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}
    */
    readonly outputType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}
    */
    readonly overwrite: string;
}
export declare function bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktf.IResolvable): any;
export declare function bcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktf.IResolvable): any;
export declare class BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations | cdktf.IResolvable | undefined);
    private _compression?;
    get compression(): string;
    set compression(value: string);
    get compressionInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _outputType?;
    get outputType(): string;
    set outputType(value: string);
    get outputTypeInput(): string | undefined;
    private _overwrite?;
    get overwrite(): string;
    set overwrite(value: string);
    get overwriteInput(): string | undefined;
}
export declare class BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference;
}
export interface BcmdataexportsExportExportDestinationConfigurationsS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}
    */
    readonly s3Bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}
    */
    readonly s3Prefix: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}
    */
    readonly s3Region: string;
    /**
    * s3_output_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}
    */
    readonly s3OutputConfigurations?: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations[] | cdktf.IResolvable;
}
export declare function bcmdataexportsExportExportDestinationConfigurationsS3DestinationToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktf.IResolvable): any;
export declare function bcmdataexportsExportExportDestinationConfigurationsS3DestinationToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktf.IResolvable): any;
export declare class BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktf.IResolvable | undefined;
    set internalValue(value: BcmdataexportsExportExportDestinationConfigurationsS3Destination | cdktf.IResolvable | undefined);
    private _s3Bucket?;
    get s3Bucket(): string;
    set s3Bucket(value: string);
    get s3BucketInput(): string | undefined;
    private _s3Prefix?;
    get s3Prefix(): string;
    set s3Prefix(value: string);
    get s3PrefixInput(): string | undefined;
    private _s3Region?;
    get s3Region(): string;
    set s3Region(value: string);
    get s3RegionInput(): string | undefined;
    private _s3OutputConfigurations;
    get s3OutputConfigurations(): BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsList;
    putS3OutputConfigurations(value: BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations[] | cdktf.IResolvable): void;
    resetS3OutputConfigurations(): void;
    get s3OutputConfigurationsInput(): cdktf.IResolvable | BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations[] | undefined;
}
export declare class BcmdataexportsExportExportDestinationConfigurationsS3DestinationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BcmdataexportsExportExportDestinationConfigurationsS3Destination[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference;
}
export interface BcmdataexportsExportExportDestinationConfigurations {
    /**
    * s3_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}
    */
    readonly s3Destination?: BcmdataexportsExportExportDestinationConfigurationsS3Destination[] | cdktf.IResolvable;
}
export declare function bcmdataexportsExportExportDestinationConfigurationsToTerraform(struct?: BcmdataexportsExportExportDestinationConfigurations | cdktf.IResolvable): any;
export declare function bcmdataexportsExportExportDestinationConfigurationsToHclTerraform(struct?: BcmdataexportsExportExportDestinationConfigurations | cdktf.IResolvable): any;
export declare class BcmdataexportsExportExportDestinationConfigurationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BcmdataexportsExportExportDestinationConfigurations | cdktf.IResolvable | undefined;
    set internalValue(value: BcmdataexportsExportExportDestinationConfigurations | cdktf.IResolvable | undefined);
    private _s3Destination;
    get s3Destination(): BcmdataexportsExportExportDestinationConfigurationsS3DestinationList;
    putS3Destination(value: BcmdataexportsExportExportDestinationConfigurationsS3Destination[] | cdktf.IResolvable): void;
    resetS3Destination(): void;
    get s3DestinationInput(): cdktf.IResolvable | BcmdataexportsExportExportDestinationConfigurationsS3Destination[] | undefined;
}
export declare class BcmdataexportsExportExportDestinationConfigurationsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BcmdataexportsExportExportDestinationConfigurations[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BcmdataexportsExportExportDestinationConfigurationsOutputReference;
}
export interface BcmdataexportsExportExportRefreshCadence {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}
    */
    readonly frequency: string;
}
export declare function bcmdataexportsExportExportRefreshCadenceToTerraform(struct?: BcmdataexportsExportExportRefreshCadence | cdktf.IResolvable): any;
export declare function bcmdataexportsExportExportRefreshCadenceToHclTerraform(struct?: BcmdataexportsExportExportRefreshCadence | cdktf.IResolvable): any;
export declare class BcmdataexportsExportExportRefreshCadenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BcmdataexportsExportExportRefreshCadence | cdktf.IResolvable | undefined;
    set internalValue(value: BcmdataexportsExportExportRefreshCadence | cdktf.IResolvable | undefined);
    private _frequency?;
    get frequency(): string;
    set frequency(value: string);
    get frequencyInput(): string | undefined;
}
export declare class BcmdataexportsExportExportRefreshCadenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BcmdataexportsExportExportRefreshCadence[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BcmdataexportsExportExportRefreshCadenceOutputReference;
}
export interface BcmdataexportsExportExport {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}
    */
    readonly name: string;
    /**
    * data_query block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}
    */
    readonly dataQuery?: BcmdataexportsExportExportDataQuery[] | cdktf.IResolvable;
    /**
    * destination_configurations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}
    */
    readonly destinationConfigurations?: BcmdataexportsExportExportDestinationConfigurations[] | cdktf.IResolvable;
    /**
    * refresh_cadence block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}
    */
    readonly refreshCadence?: BcmdataexportsExportExportRefreshCadence[] | cdktf.IResolvable;
}
export declare function bcmdataexportsExportExportToTerraform(struct?: BcmdataexportsExportExport | cdktf.IResolvable): any;
export declare function bcmdataexportsExportExportToHclTerraform(struct?: BcmdataexportsExportExport | cdktf.IResolvable): any;
export declare class BcmdataexportsExportExportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BcmdataexportsExportExport | cdktf.IResolvable | undefined;
    set internalValue(value: BcmdataexportsExportExport | cdktf.IResolvable | undefined);
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get exportArn(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _dataQuery;
    get dataQuery(): BcmdataexportsExportExportDataQueryList;
    putDataQuery(value: BcmdataexportsExportExportDataQuery[] | cdktf.IResolvable): void;
    resetDataQuery(): void;
    get dataQueryInput(): cdktf.IResolvable | BcmdataexportsExportExportDataQuery[] | undefined;
    private _destinationConfigurations;
    get destinationConfigurations(): BcmdataexportsExportExportDestinationConfigurationsList;
    putDestinationConfigurations(value: BcmdataexportsExportExportDestinationConfigurations[] | cdktf.IResolvable): void;
    resetDestinationConfigurations(): void;
    get destinationConfigurationsInput(): cdktf.IResolvable | BcmdataexportsExportExportDestinationConfigurations[] | undefined;
    private _refreshCadence;
    get refreshCadence(): BcmdataexportsExportExportRefreshCadenceList;
    putRefreshCadence(value: BcmdataexportsExportExportRefreshCadence[] | cdktf.IResolvable): void;
    resetRefreshCadence(): void;
    get refreshCadenceInput(): cdktf.IResolvable | BcmdataexportsExportExportRefreshCadence[] | undefined;
}
export declare class BcmdataexportsExportExportList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BcmdataexportsExportExport[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BcmdataexportsExportExportOutputReference;
}
export interface BcmdataexportsExportTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#create BcmdataexportsExport#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#update BcmdataexportsExport#update}
    */
    readonly update?: string;
}
export declare function bcmdataexportsExportTimeoutsToTerraform(struct?: BcmdataexportsExportTimeouts | cdktf.IResolvable): any;
export declare function bcmdataexportsExportTimeoutsToHclTerraform(struct?: BcmdataexportsExportTimeouts | cdktf.IResolvable): any;
export declare class BcmdataexportsExportTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BcmdataexportsExportTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BcmdataexportsExportTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export aws_bcmdataexports_export}
*/
export declare class BcmdataexportsExport extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bcmdataexports_export";
    /**
    * Generates CDKTF code for importing a BcmdataexportsExport resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BcmdataexportsExport to import
    * @param importFromId The id of the existing BcmdataexportsExport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BcmdataexportsExport to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bcmdataexports_export aws_bcmdataexports_export} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BcmdataexportsExportConfig = {}
    */
    constructor(scope: Construct, id: string, config?: BcmdataexportsExportConfig);
    get id(): string;
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
    private _export;
    get export(): BcmdataexportsExportExportList;
    putExport(value: BcmdataexportsExportExport[] | cdktf.IResolvable): void;
    resetExport(): void;
    get exportInput(): cdktf.IResolvable | BcmdataexportsExportExport[] | undefined;
    private _timeouts;
    get timeouts(): BcmdataexportsExportTimeoutsOutputReference;
    putTimeouts(value: BcmdataexportsExportTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BcmdataexportsExportTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
