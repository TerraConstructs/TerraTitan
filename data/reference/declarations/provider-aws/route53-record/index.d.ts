/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecordConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#allow_overwrite Route53Record#allow_overwrite}
    */
    readonly allowOverwrite?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#health_check_id Route53Record#health_check_id}
    */
    readonly healthCheckId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#id Route53Record#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}
    */
    readonly multivalueAnswerRoutingPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#name Route53Record#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#records Route53Record#records}
    */
    readonly records?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#set_identifier Route53Record#set_identifier}
    */
    readonly setIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#ttl Route53Record#ttl}
    */
    readonly ttl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#type Route53Record#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#zone_id Route53Record#zone_id}
    */
    readonly zoneId: string;
    /**
    * alias block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#alias Route53Record#alias}
    */
    readonly alias?: Route53RecordAlias;
    /**
    * cidr_routing_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}
    */
    readonly cidrRoutingPolicy?: Route53RecordCidrRoutingPolicy;
    /**
    * failover_routing_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#failover_routing_policy Route53Record#failover_routing_policy}
    */
    readonly failoverRoutingPolicy?: Route53RecordFailoverRoutingPolicy;
    /**
    * geolocation_routing_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}
    */
    readonly geolocationRoutingPolicy?: Route53RecordGeolocationRoutingPolicy;
    /**
    * geoproximity_routing_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#geoproximity_routing_policy Route53Record#geoproximity_routing_policy}
    */
    readonly geoproximityRoutingPolicy?: Route53RecordGeoproximityRoutingPolicy;
    /**
    * latency_routing_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#latency_routing_policy Route53Record#latency_routing_policy}
    */
    readonly latencyRoutingPolicy?: Route53RecordLatencyRoutingPolicy;
    /**
    * weighted_routing_policy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}
    */
    readonly weightedRoutingPolicy?: Route53RecordWeightedRoutingPolicy;
}
export interface Route53RecordAlias {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#evaluate_target_health Route53Record#evaluate_target_health}
    */
    readonly evaluateTargetHealth: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#name Route53Record#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#zone_id Route53Record#zone_id}
    */
    readonly zoneId: string;
}
export declare function route53RecordAliasToTerraform(struct?: Route53RecordAliasOutputReference | Route53RecordAlias): any;
export declare function route53RecordAliasToHclTerraform(struct?: Route53RecordAliasOutputReference | Route53RecordAlias): any;
export declare class Route53RecordAliasOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordAlias | undefined;
    set internalValue(value: Route53RecordAlias | undefined);
    private _evaluateTargetHealth?;
    get evaluateTargetHealth(): boolean | cdktf.IResolvable;
    set evaluateTargetHealth(value: boolean | cdktf.IResolvable);
    get evaluateTargetHealthInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string | undefined;
}
export interface Route53RecordCidrRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#collection_id Route53Record#collection_id}
    */
    readonly collectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#location_name Route53Record#location_name}
    */
    readonly locationName: string;
}
export declare function route53RecordCidrRoutingPolicyToTerraform(struct?: Route53RecordCidrRoutingPolicyOutputReference | Route53RecordCidrRoutingPolicy): any;
export declare function route53RecordCidrRoutingPolicyToHclTerraform(struct?: Route53RecordCidrRoutingPolicyOutputReference | Route53RecordCidrRoutingPolicy): any;
export declare class Route53RecordCidrRoutingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordCidrRoutingPolicy | undefined;
    set internalValue(value: Route53RecordCidrRoutingPolicy | undefined);
    private _collectionId?;
    get collectionId(): string;
    set collectionId(value: string);
    get collectionIdInput(): string | undefined;
    private _locationName?;
    get locationName(): string;
    set locationName(value: string);
    get locationNameInput(): string | undefined;
}
export interface Route53RecordFailoverRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#type Route53Record#type}
    */
    readonly type: string;
}
export declare function route53RecordFailoverRoutingPolicyToTerraform(struct?: Route53RecordFailoverRoutingPolicyOutputReference | Route53RecordFailoverRoutingPolicy): any;
export declare function route53RecordFailoverRoutingPolicyToHclTerraform(struct?: Route53RecordFailoverRoutingPolicyOutputReference | Route53RecordFailoverRoutingPolicy): any;
export declare class Route53RecordFailoverRoutingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordFailoverRoutingPolicy | undefined;
    set internalValue(value: Route53RecordFailoverRoutingPolicy | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface Route53RecordGeolocationRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#continent Route53Record#continent}
    */
    readonly continent?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#country Route53Record#country}
    */
    readonly country?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#subdivision Route53Record#subdivision}
    */
    readonly subdivision?: string;
}
export declare function route53RecordGeolocationRoutingPolicyToTerraform(struct?: Route53RecordGeolocationRoutingPolicyOutputReference | Route53RecordGeolocationRoutingPolicy): any;
export declare function route53RecordGeolocationRoutingPolicyToHclTerraform(struct?: Route53RecordGeolocationRoutingPolicyOutputReference | Route53RecordGeolocationRoutingPolicy): any;
export declare class Route53RecordGeolocationRoutingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordGeolocationRoutingPolicy | undefined;
    set internalValue(value: Route53RecordGeolocationRoutingPolicy | undefined);
    private _continent?;
    get continent(): string;
    set continent(value: string);
    resetContinent(): void;
    get continentInput(): string | undefined;
    private _country?;
    get country(): string;
    set country(value: string);
    resetCountry(): void;
    get countryInput(): string | undefined;
    private _subdivision?;
    get subdivision(): string;
    set subdivision(value: string);
    resetSubdivision(): void;
    get subdivisionInput(): string | undefined;
}
export interface Route53RecordGeoproximityRoutingPolicyCoordinates {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#latitude Route53Record#latitude}
    */
    readonly latitude: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#longitude Route53Record#longitude}
    */
    readonly longitude: string;
}
export declare function route53RecordGeoproximityRoutingPolicyCoordinatesToTerraform(struct?: Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable): any;
export declare function route53RecordGeoproximityRoutingPolicyCoordinatesToHclTerraform(struct?: Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable): any;
export declare class Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordGeoproximityRoutingPolicyCoordinates | cdktf.IResolvable | undefined);
    private _latitude?;
    get latitude(): string;
    set latitude(value: string);
    get latitudeInput(): string | undefined;
    private _longitude?;
    get longitude(): string;
    set longitude(value: string);
    get longitudeInput(): string | undefined;
}
export declare class Route53RecordGeoproximityRoutingPolicyCoordinatesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordGeoproximityRoutingPolicyCoordinates[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordGeoproximityRoutingPolicyCoordinatesOutputReference;
}
export interface Route53RecordGeoproximityRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#aws_region Route53Record#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#bias Route53Record#bias}
    */
    readonly bias?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#local_zone_group Route53Record#local_zone_group}
    */
    readonly localZoneGroup?: string;
    /**
    * coordinates block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#coordinates Route53Record#coordinates}
    */
    readonly coordinates?: Route53RecordGeoproximityRoutingPolicyCoordinates[] | cdktf.IResolvable;
}
export declare function route53RecordGeoproximityRoutingPolicyToTerraform(struct?: Route53RecordGeoproximityRoutingPolicyOutputReference | Route53RecordGeoproximityRoutingPolicy): any;
export declare function route53RecordGeoproximityRoutingPolicyToHclTerraform(struct?: Route53RecordGeoproximityRoutingPolicyOutputReference | Route53RecordGeoproximityRoutingPolicy): any;
export declare class Route53RecordGeoproximityRoutingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordGeoproximityRoutingPolicy | undefined;
    set internalValue(value: Route53RecordGeoproximityRoutingPolicy | undefined);
    private _awsRegion?;
    get awsRegion(): string;
    set awsRegion(value: string);
    resetAwsRegion(): void;
    get awsRegionInput(): string | undefined;
    private _bias?;
    get bias(): number;
    set bias(value: number);
    resetBias(): void;
    get biasInput(): number | undefined;
    private _localZoneGroup?;
    get localZoneGroup(): string;
    set localZoneGroup(value: string);
    resetLocalZoneGroup(): void;
    get localZoneGroupInput(): string | undefined;
    private _coordinates;
    get coordinates(): Route53RecordGeoproximityRoutingPolicyCoordinatesList;
    putCoordinates(value: Route53RecordGeoproximityRoutingPolicyCoordinates[] | cdktf.IResolvable): void;
    resetCoordinates(): void;
    get coordinatesInput(): cdktf.IResolvable | Route53RecordGeoproximityRoutingPolicyCoordinates[] | undefined;
}
export interface Route53RecordLatencyRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#region Route53Record#region}
    */
    readonly region: string;
}
export declare function route53RecordLatencyRoutingPolicyToTerraform(struct?: Route53RecordLatencyRoutingPolicyOutputReference | Route53RecordLatencyRoutingPolicy): any;
export declare function route53RecordLatencyRoutingPolicyToHclTerraform(struct?: Route53RecordLatencyRoutingPolicyOutputReference | Route53RecordLatencyRoutingPolicy): any;
export declare class Route53RecordLatencyRoutingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordLatencyRoutingPolicy | undefined;
    set internalValue(value: Route53RecordLatencyRoutingPolicy | undefined);
    private _region?;
    get region(): string;
    set region(value: string);
    get regionInput(): string | undefined;
}
export interface Route53RecordWeightedRoutingPolicy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#weight Route53Record#weight}
    */
    readonly weight: number;
}
export declare function route53RecordWeightedRoutingPolicyToTerraform(struct?: Route53RecordWeightedRoutingPolicyOutputReference | Route53RecordWeightedRoutingPolicy): any;
export declare function route53RecordWeightedRoutingPolicyToHclTerraform(struct?: Route53RecordWeightedRoutingPolicyOutputReference | Route53RecordWeightedRoutingPolicy): any;
export declare class Route53RecordWeightedRoutingPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordWeightedRoutingPolicy | undefined;
    set internalValue(value: Route53RecordWeightedRoutingPolicy | undefined);
    private _weight?;
    get weight(): number;
    set weight(value: number);
    get weightInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record aws_route53_record}
*/
export declare class Route53Record extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_record";
    /**
    * Generates CDKTF code for importing a Route53Record resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53Record to import
    * @param importFromId The id of the existing Route53Record that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53Record to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_record aws_route53_record} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecordConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecordConfig);
    private _allowOverwrite?;
    get allowOverwrite(): boolean | cdktf.IResolvable;
    set allowOverwrite(value: boolean | cdktf.IResolvable);
    resetAllowOverwrite(): void;
    get allowOverwriteInput(): boolean | cdktf.IResolvable | undefined;
    get fqdn(): string;
    private _healthCheckId?;
    get healthCheckId(): string;
    set healthCheckId(value: string);
    resetHealthCheckId(): void;
    get healthCheckIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _multivalueAnswerRoutingPolicy?;
    get multivalueAnswerRoutingPolicy(): boolean | cdktf.IResolvable;
    set multivalueAnswerRoutingPolicy(value: boolean | cdktf.IResolvable);
    resetMultivalueAnswerRoutingPolicy(): void;
    get multivalueAnswerRoutingPolicyInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _records?;
    get records(): string[];
    set records(value: string[]);
    resetRecords(): void;
    get recordsInput(): string[] | undefined;
    private _setIdentifier?;
    get setIdentifier(): string;
    set setIdentifier(value: string);
    resetSetIdentifier(): void;
    get setIdentifierInput(): string | undefined;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string | undefined;
    private _alias;
    get alias(): Route53RecordAliasOutputReference;
    putAlias(value: Route53RecordAlias): void;
    resetAlias(): void;
    get aliasInput(): Route53RecordAlias | undefined;
    private _cidrRoutingPolicy;
    get cidrRoutingPolicy(): Route53RecordCidrRoutingPolicyOutputReference;
    putCidrRoutingPolicy(value: Route53RecordCidrRoutingPolicy): void;
    resetCidrRoutingPolicy(): void;
    get cidrRoutingPolicyInput(): Route53RecordCidrRoutingPolicy | undefined;
    private _failoverRoutingPolicy;
    get failoverRoutingPolicy(): Route53RecordFailoverRoutingPolicyOutputReference;
    putFailoverRoutingPolicy(value: Route53RecordFailoverRoutingPolicy): void;
    resetFailoverRoutingPolicy(): void;
    get failoverRoutingPolicyInput(): Route53RecordFailoverRoutingPolicy | undefined;
    private _geolocationRoutingPolicy;
    get geolocationRoutingPolicy(): Route53RecordGeolocationRoutingPolicyOutputReference;
    putGeolocationRoutingPolicy(value: Route53RecordGeolocationRoutingPolicy): void;
    resetGeolocationRoutingPolicy(): void;
    get geolocationRoutingPolicyInput(): Route53RecordGeolocationRoutingPolicy | undefined;
    private _geoproximityRoutingPolicy;
    get geoproximityRoutingPolicy(): Route53RecordGeoproximityRoutingPolicyOutputReference;
    putGeoproximityRoutingPolicy(value: Route53RecordGeoproximityRoutingPolicy): void;
    resetGeoproximityRoutingPolicy(): void;
    get geoproximityRoutingPolicyInput(): Route53RecordGeoproximityRoutingPolicy | undefined;
    private _latencyRoutingPolicy;
    get latencyRoutingPolicy(): Route53RecordLatencyRoutingPolicyOutputReference;
    putLatencyRoutingPolicy(value: Route53RecordLatencyRoutingPolicy): void;
    resetLatencyRoutingPolicy(): void;
    get latencyRoutingPolicyInput(): Route53RecordLatencyRoutingPolicy | undefined;
    private _weightedRoutingPolicy;
    get weightedRoutingPolicy(): Route53RecordWeightedRoutingPolicyOutputReference;
    putWeightedRoutingPolicy(value: Route53RecordWeightedRoutingPolicy): void;
    resetWeightedRoutingPolicy(): void;
    get weightedRoutingPolicyInput(): Route53RecordWeightedRoutingPolicy | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
