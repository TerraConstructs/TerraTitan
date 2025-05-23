/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLicensemanagerReceivedLicenseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}
    */
    readonly licenseArn: string;
}
export interface DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration {
}
export declare function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration): any;
export declare function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration): any;
export declare class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration | undefined);
    get allowEarlyCheckIn(): cdktf.IResolvable;
    get maxTimeToLiveInMinutes(): number;
}
export declare class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference;
}
export interface DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration {
}
export declare function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration): any;
export declare function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration): any;
export declare class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration | undefined);
    get maxTimeToLiveInMinutes(): number;
}
export declare class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference;
}
export interface DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration {
}
export declare function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration): any;
export declare function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration): any;
export declare class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration | undefined);
    private _borrowConfiguration;
    get borrowConfiguration(): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList;
    private _provisionalConfiguration;
    get provisionalConfiguration(): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList;
    get renewType(): string;
}
export declare class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference;
}
export interface DataAwsLicensemanagerReceivedLicenseEntitlements {
}
export declare function dataAwsLicensemanagerReceivedLicenseEntitlementsToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseEntitlements): any;
export declare function dataAwsLicensemanagerReceivedLicenseEntitlementsToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseEntitlements): any;
export declare class DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseEntitlements | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseEntitlements | undefined);
    get allowCheckIn(): cdktf.IResolvable;
    get maxCount(): number;
    get name(): string;
    get overage(): cdktf.IResolvable;
    get unit(): string;
    get value(): string;
}
export declare class DataAwsLicensemanagerReceivedLicenseEntitlementsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference;
}
export interface DataAwsLicensemanagerReceivedLicenseIssuer {
}
export declare function dataAwsLicensemanagerReceivedLicenseIssuerToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseIssuer): any;
export declare function dataAwsLicensemanagerReceivedLicenseIssuerToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseIssuer): any;
export declare class DataAwsLicensemanagerReceivedLicenseIssuerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseIssuer | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseIssuer | undefined);
    get keyFingerprint(): string;
    get name(): string;
    get signKey(): string;
}
export declare class DataAwsLicensemanagerReceivedLicenseIssuerList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseIssuerOutputReference;
}
export interface DataAwsLicensemanagerReceivedLicenseLicenseMetadata {
}
export declare function dataAwsLicensemanagerReceivedLicenseLicenseMetadataToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseLicenseMetadata): any;
export declare function dataAwsLicensemanagerReceivedLicenseLicenseMetadataToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseLicenseMetadata): any;
export declare class DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseLicenseMetadata | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseLicenseMetadata | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsLicensemanagerReceivedLicenseLicenseMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference;
}
export interface DataAwsLicensemanagerReceivedLicenseReceivedMetadata {
}
export declare function dataAwsLicensemanagerReceivedLicenseReceivedMetadataToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseReceivedMetadata): any;
export declare function dataAwsLicensemanagerReceivedLicenseReceivedMetadataToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseReceivedMetadata): any;
export declare class DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseReceivedMetadata | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseReceivedMetadata | undefined);
    get allowedOperations(): string[];
    get receivedStatus(): string;
    get receivedStatusReason(): string;
}
export declare class DataAwsLicensemanagerReceivedLicenseReceivedMetadataList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference;
}
export interface DataAwsLicensemanagerReceivedLicenseValidity {
}
export declare function dataAwsLicensemanagerReceivedLicenseValidityToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseValidity): any;
export declare function dataAwsLicensemanagerReceivedLicenseValidityToHclTerraform(struct?: DataAwsLicensemanagerReceivedLicenseValidity): any;
export declare class DataAwsLicensemanagerReceivedLicenseValidityOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLicensemanagerReceivedLicenseValidity | undefined;
    set internalValue(value: DataAwsLicensemanagerReceivedLicenseValidity | undefined);
    get begin(): string;
    get end(): string;
}
export declare class DataAwsLicensemanagerReceivedLicenseValidityList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLicensemanagerReceivedLicenseValidityOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/licensemanager_received_license aws_licensemanager_received_license}
*/
export declare class DataAwsLicensemanagerReceivedLicense extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_licensemanager_received_license";
    /**
    * Generates CDKTF code for importing a DataAwsLicensemanagerReceivedLicense resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLicensemanagerReceivedLicense to import
    * @param importFromId The id of the existing DataAwsLicensemanagerReceivedLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/licensemanager_received_license#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLicensemanagerReceivedLicense to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/licensemanager_received_license aws_licensemanager_received_license} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLicensemanagerReceivedLicenseConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLicensemanagerReceivedLicenseConfig);
    get beneficiary(): string;
    private _consumptionConfiguration;
    get consumptionConfiguration(): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList;
    get createTime(): string;
    private _entitlements;
    get entitlements(): DataAwsLicensemanagerReceivedLicenseEntitlementsList;
    get homeRegion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _issuer;
    get issuer(): DataAwsLicensemanagerReceivedLicenseIssuerList;
    private _licenseArn?;
    get licenseArn(): string;
    set licenseArn(value: string);
    get licenseArnInput(): string | undefined;
    private _licenseMetadata;
    get licenseMetadata(): DataAwsLicensemanagerReceivedLicenseLicenseMetadataList;
    get licenseName(): string;
    get productName(): string;
    get productSku(): string;
    private _receivedMetadata;
    get receivedMetadata(): DataAwsLicensemanagerReceivedLicenseReceivedMetadataList;
    get status(): string;
    private _validity;
    get validity(): DataAwsLicensemanagerReceivedLicenseValidityList;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
