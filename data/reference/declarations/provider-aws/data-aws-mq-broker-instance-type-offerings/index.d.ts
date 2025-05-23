/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMqBrokerInstanceTypeOfferingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker_instance_type_offerings#engine_type DataAwsMqBrokerInstanceTypeOfferings#engine_type}
    */
    readonly engineType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker_instance_type_offerings#host_instance_type DataAwsMqBrokerInstanceTypeOfferings#host_instance_type}
    */
    readonly hostInstanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker_instance_type_offerings#id DataAwsMqBrokerInstanceTypeOfferings#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker_instance_type_offerings#storage_type DataAwsMqBrokerInstanceTypeOfferings#storage_type}
    */
    readonly storageType?: string;
}
export interface DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones {
}
export declare function dataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesToTerraform(struct?: DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones): any;
export declare function dataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesToHclTerraform(struct?: DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones): any;
export declare class DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones | undefined;
    set internalValue(value: DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZones | undefined);
    get name(): string;
}
export declare class DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesOutputReference;
}
export interface DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions {
}
export declare function dataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsToTerraform(struct?: DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions): any;
export declare function dataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsToHclTerraform(struct?: DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions): any;
export declare class DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions | undefined;
    set internalValue(value: DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptions | undefined);
    private _availabilityZones;
    get availabilityZones(): DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsAvailabilityZonesList;
    get engineType(): string;
    get hostInstanceType(): string;
    get storageType(): string;
    get supportedDeploymentModes(): string[];
    get supportedEngineVersions(): string[];
}
export declare class DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker_instance_type_offerings aws_mq_broker_instance_type_offerings}
*/
export declare class DataAwsMqBrokerInstanceTypeOfferings extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_mq_broker_instance_type_offerings";
    /**
    * Generates CDKTF code for importing a DataAwsMqBrokerInstanceTypeOfferings resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMqBrokerInstanceTypeOfferings to import
    * @param importFromId The id of the existing DataAwsMqBrokerInstanceTypeOfferings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker_instance_type_offerings#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMqBrokerInstanceTypeOfferings to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/mq_broker_instance_type_offerings aws_mq_broker_instance_type_offerings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMqBrokerInstanceTypeOfferingsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsMqBrokerInstanceTypeOfferingsConfig);
    private _brokerInstanceOptions;
    get brokerInstanceOptions(): DataAwsMqBrokerInstanceTypeOfferingsBrokerInstanceOptionsList;
    private _engineType?;
    get engineType(): string;
    set engineType(value: string);
    resetEngineType(): void;
    get engineTypeInput(): string | undefined;
    private _hostInstanceType?;
    get hostInstanceType(): string;
    set hostInstanceType(value: string);
    resetHostInstanceType(): void;
    get hostInstanceTypeInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _storageType?;
    get storageType(): string;
    set storageType(value: string);
    resetStorageType(): void;
    get storageTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
