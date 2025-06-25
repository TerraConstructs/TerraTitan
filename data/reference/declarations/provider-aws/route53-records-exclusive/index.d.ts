/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53RecordsExclusiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#zone_id Route53RecordsExclusive#zone_id}
    */
    readonly zoneId: string;
    /**
    * resource_record_set block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#resource_record_set Route53RecordsExclusive#resource_record_set}
    */
    readonly resourceRecordSet?: Route53RecordsExclusiveResourceRecordSet[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#timeouts Route53RecordsExclusive#timeouts}
    */
    readonly timeouts?: Route53RecordsExclusiveTimeouts;
}
export interface Route53RecordsExclusiveResourceRecordSetAliasTarget {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#dns_name Route53RecordsExclusive#dns_name}
    */
    readonly dnsName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#evaluate_target_health Route53RecordsExclusive#evaluate_target_health}
    */
    readonly evaluateTargetHealth: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#hosted_zone_id Route53RecordsExclusive#hosted_zone_id}
    */
    readonly hostedZoneId: string;
}
export declare function route53RecordsExclusiveResourceRecordSetAliasTargetToTerraform(struct?: Route53RecordsExclusiveResourceRecordSetAliasTarget | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveResourceRecordSetAliasTargetToHclTerraform(struct?: Route53RecordsExclusiveResourceRecordSetAliasTarget | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordsExclusiveResourceRecordSetAliasTarget | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveResourceRecordSetAliasTarget | cdktf.IResolvable | undefined);
    private _dnsName?;
    get dnsName(): string;
    set dnsName(value: string);
    get dnsNameInput(): string | undefined;
    private _evaluateTargetHealth?;
    get evaluateTargetHealth(): boolean | cdktf.IResolvable;
    set evaluateTargetHealth(value: boolean | cdktf.IResolvable);
    get evaluateTargetHealthInput(): boolean | cdktf.IResolvable | undefined;
    private _hostedZoneId?;
    get hostedZoneId(): string;
    set hostedZoneId(value: string);
    get hostedZoneIdInput(): string | undefined;
}
export declare class Route53RecordsExclusiveResourceRecordSetAliasTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordsExclusiveResourceRecordSetAliasTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordsExclusiveResourceRecordSetAliasTargetOutputReference;
}
export interface Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#collection_id Route53RecordsExclusive#collection_id}
    */
    readonly collectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#location_name Route53RecordsExclusive#location_name}
    */
    readonly locationName: string;
}
export declare function route53RecordsExclusiveResourceRecordSetCidrRoutingConfigToTerraform(struct?: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveResourceRecordSetCidrRoutingConfigToHclTerraform(struct?: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig | cdktf.IResolvable | undefined);
    private _collectionId?;
    get collectionId(): string;
    set collectionId(value: string);
    get collectionIdInput(): string | undefined;
    private _locationName?;
    get locationName(): string;
    set locationName(value: string);
    get locationNameInput(): string | undefined;
}
export declare class Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigOutputReference;
}
export interface Route53RecordsExclusiveResourceRecordSetGeolocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#continent_code Route53RecordsExclusive#continent_code}
    */
    readonly continentCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#country_code Route53RecordsExclusive#country_code}
    */
    readonly countryCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#subdivision_code Route53RecordsExclusive#subdivision_code}
    */
    readonly subdivisionCode?: string;
}
export declare function route53RecordsExclusiveResourceRecordSetGeolocationToTerraform(struct?: Route53RecordsExclusiveResourceRecordSetGeolocation | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveResourceRecordSetGeolocationToHclTerraform(struct?: Route53RecordsExclusiveResourceRecordSetGeolocation | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordsExclusiveResourceRecordSetGeolocation | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveResourceRecordSetGeolocation | cdktf.IResolvable | undefined);
    private _continentCode?;
    get continentCode(): string;
    set continentCode(value: string);
    resetContinentCode(): void;
    get continentCodeInput(): string | undefined;
    private _countryCode?;
    get countryCode(): string;
    set countryCode(value: string);
    resetCountryCode(): void;
    get countryCodeInput(): string | undefined;
    private _subdivisionCode?;
    get subdivisionCode(): string;
    set subdivisionCode(value: string);
    resetSubdivisionCode(): void;
    get subdivisionCodeInput(): string | undefined;
}
export declare class Route53RecordsExclusiveResourceRecordSetGeolocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordsExclusiveResourceRecordSetGeolocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordsExclusiveResourceRecordSetGeolocationOutputReference;
}
export interface Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#latitude Route53RecordsExclusive#latitude}
    */
    readonly latitude: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#longitude Route53RecordsExclusive#longitude}
    */
    readonly longitude: string;
}
export declare function route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesToTerraform(struct?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesToHclTerraform(struct?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates | cdktf.IResolvable | undefined);
    private _latitude?;
    get latitude(): string;
    set latitude(value: string);
    get latitudeInput(): string | undefined;
    private _longitude?;
    get longitude(): string;
    set longitude(value: string);
    get longitudeInput(): string | undefined;
}
export declare class Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesOutputReference;
}
export interface Route53RecordsExclusiveResourceRecordSetGeoproximityLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#aws_region Route53RecordsExclusive#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#bias Route53RecordsExclusive#bias}
    */
    readonly bias?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#local_zone_group Route53RecordsExclusive#local_zone_group}
    */
    readonly localZoneGroup?: string;
    /**
    * coordinates block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#coordinates Route53RecordsExclusive#coordinates}
    */
    readonly coordinates?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[] | cdktf.IResolvable;
}
export declare function route53RecordsExclusiveResourceRecordSetGeoproximityLocationToTerraform(struct?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocation | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveResourceRecordSetGeoproximityLocationToHclTerraform(struct?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocation | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordsExclusiveResourceRecordSetGeoproximityLocation | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveResourceRecordSetGeoproximityLocation | cdktf.IResolvable | undefined);
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
    get coordinates(): Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinatesList;
    putCoordinates(value: Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[] | cdktf.IResolvable): void;
    resetCoordinates(): void;
    get coordinatesInput(): cdktf.IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocationCoordinates[] | undefined;
}
export declare class Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordsExclusiveResourceRecordSetGeoproximityLocationOutputReference;
}
export interface Route53RecordsExclusiveResourceRecordSetResourceRecords {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#value Route53RecordsExclusive#value}
    */
    readonly value: string;
}
export declare function route53RecordsExclusiveResourceRecordSetResourceRecordsToTerraform(struct?: Route53RecordsExclusiveResourceRecordSetResourceRecords | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveResourceRecordSetResourceRecordsToHclTerraform(struct?: Route53RecordsExclusiveResourceRecordSetResourceRecords | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordsExclusiveResourceRecordSetResourceRecords | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveResourceRecordSetResourceRecords | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Route53RecordsExclusiveResourceRecordSetResourceRecordsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordsExclusiveResourceRecordSetResourceRecords[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordsExclusiveResourceRecordSetResourceRecordsOutputReference;
}
export interface Route53RecordsExclusiveResourceRecordSet {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#failover Route53RecordsExclusive#failover}
    */
    readonly failover?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#health_check_id Route53RecordsExclusive#health_check_id}
    */
    readonly healthCheckId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#multi_value_answer Route53RecordsExclusive#multi_value_answer}
    */
    readonly multiValueAnswer?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#name Route53RecordsExclusive#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#region Route53RecordsExclusive#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#set_identifier Route53RecordsExclusive#set_identifier}
    */
    readonly setIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#traffic_policy_instance_id Route53RecordsExclusive#traffic_policy_instance_id}
    */
    readonly trafficPolicyInstanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#ttl Route53RecordsExclusive#ttl}
    */
    readonly ttl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#type Route53RecordsExclusive#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#weight Route53RecordsExclusive#weight}
    */
    readonly weight?: number;
    /**
    * alias_target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#alias_target Route53RecordsExclusive#alias_target}
    */
    readonly aliasTarget?: Route53RecordsExclusiveResourceRecordSetAliasTarget[] | cdktf.IResolvable;
    /**
    * cidr_routing_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#cidr_routing_config Route53RecordsExclusive#cidr_routing_config}
    */
    readonly cidrRoutingConfig?: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[] | cdktf.IResolvable;
    /**
    * geolocation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#geolocation Route53RecordsExclusive#geolocation}
    */
    readonly geolocation?: Route53RecordsExclusiveResourceRecordSetGeolocation[] | cdktf.IResolvable;
    /**
    * geoproximity_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#geoproximity_location Route53RecordsExclusive#geoproximity_location}
    */
    readonly geoproximityLocation?: Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[] | cdktf.IResolvable;
    /**
    * resource_records block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#resource_records Route53RecordsExclusive#resource_records}
    */
    readonly resourceRecords?: Route53RecordsExclusiveResourceRecordSetResourceRecords[] | cdktf.IResolvable;
}
export declare function route53RecordsExclusiveResourceRecordSetToTerraform(struct?: Route53RecordsExclusiveResourceRecordSet | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveResourceRecordSetToHclTerraform(struct?: Route53RecordsExclusiveResourceRecordSet | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveResourceRecordSetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Route53RecordsExclusiveResourceRecordSet | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveResourceRecordSet | cdktf.IResolvable | undefined);
    private _failover?;
    get failover(): string;
    set failover(value: string);
    resetFailover(): void;
    get failoverInput(): string | undefined;
    private _healthCheckId?;
    get healthCheckId(): string;
    set healthCheckId(value: string);
    resetHealthCheckId(): void;
    get healthCheckIdInput(): string | undefined;
    private _multiValueAnswer?;
    get multiValueAnswer(): boolean | cdktf.IResolvable;
    set multiValueAnswer(value: boolean | cdktf.IResolvable);
    resetMultiValueAnswer(): void;
    get multiValueAnswerInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _setIdentifier?;
    get setIdentifier(): string;
    set setIdentifier(value: string);
    resetSetIdentifier(): void;
    get setIdentifierInput(): string | undefined;
    private _trafficPolicyInstanceId?;
    get trafficPolicyInstanceId(): string;
    set trafficPolicyInstanceId(value: string);
    resetTrafficPolicyInstanceId(): void;
    get trafficPolicyInstanceIdInput(): string | undefined;
    private _ttl?;
    get ttl(): number;
    set ttl(value: number);
    resetTtl(): void;
    get ttlInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
    private _aliasTarget;
    get aliasTarget(): Route53RecordsExclusiveResourceRecordSetAliasTargetList;
    putAliasTarget(value: Route53RecordsExclusiveResourceRecordSetAliasTarget[] | cdktf.IResolvable): void;
    resetAliasTarget(): void;
    get aliasTargetInput(): cdktf.IResolvable | Route53RecordsExclusiveResourceRecordSetAliasTarget[] | undefined;
    private _cidrRoutingConfig;
    get cidrRoutingConfig(): Route53RecordsExclusiveResourceRecordSetCidrRoutingConfigList;
    putCidrRoutingConfig(value: Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[] | cdktf.IResolvable): void;
    resetCidrRoutingConfig(): void;
    get cidrRoutingConfigInput(): cdktf.IResolvable | Route53RecordsExclusiveResourceRecordSetCidrRoutingConfig[] | undefined;
    private _geolocation;
    get geolocation(): Route53RecordsExclusiveResourceRecordSetGeolocationList;
    putGeolocation(value: Route53RecordsExclusiveResourceRecordSetGeolocation[] | cdktf.IResolvable): void;
    resetGeolocation(): void;
    get geolocationInput(): cdktf.IResolvable | Route53RecordsExclusiveResourceRecordSetGeolocation[] | undefined;
    private _geoproximityLocation;
    get geoproximityLocation(): Route53RecordsExclusiveResourceRecordSetGeoproximityLocationList;
    putGeoproximityLocation(value: Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[] | cdktf.IResolvable): void;
    resetGeoproximityLocation(): void;
    get geoproximityLocationInput(): cdktf.IResolvable | Route53RecordsExclusiveResourceRecordSetGeoproximityLocation[] | undefined;
    private _resourceRecords;
    get resourceRecords(): Route53RecordsExclusiveResourceRecordSetResourceRecordsList;
    putResourceRecords(value: Route53RecordsExclusiveResourceRecordSetResourceRecords[] | cdktf.IResolvable): void;
    resetResourceRecords(): void;
    get resourceRecordsInput(): cdktf.IResolvable | Route53RecordsExclusiveResourceRecordSetResourceRecords[] | undefined;
}
export declare class Route53RecordsExclusiveResourceRecordSetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Route53RecordsExclusiveResourceRecordSet[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Route53RecordsExclusiveResourceRecordSetOutputReference;
}
export interface Route53RecordsExclusiveTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#create Route53RecordsExclusive#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#update Route53RecordsExclusive#update}
    */
    readonly update?: string;
}
export declare function route53RecordsExclusiveTimeoutsToTerraform(struct?: Route53RecordsExclusiveTimeouts | cdktf.IResolvable): any;
export declare function route53RecordsExclusiveTimeoutsToHclTerraform(struct?: Route53RecordsExclusiveTimeouts | cdktf.IResolvable): any;
export declare class Route53RecordsExclusiveTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Route53RecordsExclusiveTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Route53RecordsExclusiveTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive}
*/
export declare class Route53RecordsExclusive extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_records_exclusive";
    /**
    * Generates CDKTF code for importing a Route53RecordsExclusive resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53RecordsExclusive to import
    * @param importFromId The id of the existing Route53RecordsExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53RecordsExclusive to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/route53_records_exclusive aws_route53_records_exclusive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53RecordsExclusiveConfig
    */
    constructor(scope: Construct, id: string, config: Route53RecordsExclusiveConfig);
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string | undefined;
    private _resourceRecordSet;
    get resourceRecordSet(): Route53RecordsExclusiveResourceRecordSetList;
    putResourceRecordSet(value: Route53RecordsExclusiveResourceRecordSet[] | cdktf.IResolvable): void;
    resetResourceRecordSet(): void;
    get resourceRecordSetInput(): cdktf.IResolvable | Route53RecordsExclusiveResourceRecordSet[] | undefined;
    private _timeouts;
    get timeouts(): Route53RecordsExclusiveTimeoutsOutputReference;
    putTimeouts(value: Route53RecordsExclusiveTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Route53RecordsExclusiveTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
