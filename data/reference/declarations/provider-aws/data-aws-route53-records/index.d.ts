/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53RecordsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}
    */
    readonly zoneId: string;
}
export interface DataAwsRoute53RecordsResourceRecordSetsAliasTarget {
}
export declare function dataAwsRoute53RecordsResourceRecordSetsAliasTargetToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsAliasTarget): any;
export declare function dataAwsRoute53RecordsResourceRecordSetsAliasTargetToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsAliasTarget): any;
export declare class DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRoute53RecordsResourceRecordSetsAliasTarget | undefined;
    set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsAliasTarget | undefined);
    get dnsName(): string;
    get evaluateTargetHealth(): cdktf.IResolvable;
    get hostedZoneId(): string;
}
export interface DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig {
}
export declare function dataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig): any;
export declare function dataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig): any;
export declare class DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig | undefined;
    set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig | undefined);
    get collectionId(): string;
    get locationName(): string;
}
export interface DataAwsRoute53RecordsResourceRecordSetsGeolocation {
}
export declare function dataAwsRoute53RecordsResourceRecordSetsGeolocationToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeolocation): any;
export declare function dataAwsRoute53RecordsResourceRecordSetsGeolocationToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeolocation): any;
export declare class DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRoute53RecordsResourceRecordSetsGeolocation | undefined;
    set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsGeolocation | undefined);
    get continentCode(): string;
    get countryCode(): string;
    get subdivisionCode(): string;
}
export interface DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates {
}
export declare function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates): any;
export declare function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates): any;
export declare class DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates | undefined;
    set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates | undefined);
    get latitude(): string;
    get longitude(): string;
}
export interface DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation {
}
export declare function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation): any;
export declare function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation): any;
export declare class DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation | undefined;
    set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation | undefined);
    get awsRegion(): string;
    get bias(): number;
    private _coordinates;
    get coordinates(): DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference;
    get localZoneGroup(): string;
}
export interface DataAwsRoute53RecordsResourceRecordSetsResourceRecords {
}
export declare function dataAwsRoute53RecordsResourceRecordSetsResourceRecordsToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsResourceRecords): any;
export declare function dataAwsRoute53RecordsResourceRecordSetsResourceRecordsToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsResourceRecords): any;
export declare class DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53RecordsResourceRecordSetsResourceRecords | undefined;
    set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsResourceRecords | undefined);
    get value(): string;
}
export declare class DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference;
}
export interface DataAwsRoute53RecordsResourceRecordSets {
}
export declare function dataAwsRoute53RecordsResourceRecordSetsToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSets): any;
export declare function dataAwsRoute53RecordsResourceRecordSetsToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSets): any;
export declare class DataAwsRoute53RecordsResourceRecordSetsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53RecordsResourceRecordSets | undefined;
    set internalValue(value: DataAwsRoute53RecordsResourceRecordSets | undefined);
    private _aliasTarget;
    get aliasTarget(): DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference;
    private _cidrRoutingConfig;
    get cidrRoutingConfig(): DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference;
    get failover(): string;
    private _geolocation;
    get geolocation(): DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference;
    private _geoproximityLocation;
    get geoproximityLocation(): DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference;
    get healthCheckId(): string;
    get multiValueAnswer(): cdktf.IResolvable;
    get name(): string;
    get region(): string;
    private _resourceRecords;
    get resourceRecords(): DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList;
    get setIdentifier(): string;
    get trafficPolicyInstanceId(): string;
    get ttl(): number;
    get type(): string;
    get weight(): number;
}
export declare class DataAwsRoute53RecordsResourceRecordSetsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53RecordsResourceRecordSetsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_records aws_route53_records}
*/
export declare class DataAwsRoute53Records extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_records";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53Records to import
    * @param importFromId The id of the existing DataAwsRoute53Records that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_records#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53Records to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/route53_records aws_route53_records} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53RecordsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRoute53RecordsConfig);
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    resetNameRegex(): void;
    get nameRegexInput(): string | undefined;
    private _resourceRecordSets;
    get resourceRecordSets(): DataAwsRoute53RecordsResourceRecordSetsList;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
