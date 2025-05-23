/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsoadminApplicationProvidersConfig extends cdktf.TerraformMetaArguments {
    /**
    * application_providers block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_providers#application_providers DataAwsSsoadminApplicationProviders#application_providers}
    */
    readonly applicationProviders?: DataAwsSsoadminApplicationProvidersApplicationProviders[] | cdktf.IResolvable;
}
export interface DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData {
}
export declare function dataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataToTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable): any;
export declare function dataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataToHclTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable): any;
export declare class DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData | cdktf.IResolvable | undefined);
    get description(): string;
    get displayName(): string;
    get iconUrl(): string;
}
export declare class DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataOutputReference;
}
export interface DataAwsSsoadminApplicationProvidersApplicationProviders {
    /**
    * display_data block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_providers#display_data DataAwsSsoadminApplicationProviders#display_data}
    */
    readonly displayData?: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData[] | cdktf.IResolvable;
}
export declare function dataAwsSsoadminApplicationProvidersApplicationProvidersToTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable): any;
export declare function dataAwsSsoadminApplicationProvidersApplicationProvidersToHclTerraform(struct?: DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable): any;
export declare class DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSsoadminApplicationProvidersApplicationProviders | cdktf.IResolvable | undefined);
    get applicationProviderArn(): string;
    get federationProtocol(): string;
    private _displayData;
    get displayData(): DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayDataList;
    putDisplayData(value: DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData[] | cdktf.IResolvable): void;
    resetDisplayData(): void;
    get displayDataInput(): cdktf.IResolvable | DataAwsSsoadminApplicationProvidersApplicationProvidersDisplayData[] | undefined;
}
export declare class DataAwsSsoadminApplicationProvidersApplicationProvidersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSsoadminApplicationProvidersApplicationProviders[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsoadminApplicationProvidersApplicationProvidersOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_providers aws_ssoadmin_application_providers}
*/
export declare class DataAwsSsoadminApplicationProviders extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssoadmin_application_providers";
    /**
    * Generates CDKTF code for importing a DataAwsSsoadminApplicationProviders resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsoadminApplicationProviders to import
    * @param importFromId The id of the existing DataAwsSsoadminApplicationProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_providers#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsoadminApplicationProviders to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssoadmin_application_providers aws_ssoadmin_application_providers} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminApplicationProvidersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSsoadminApplicationProvidersConfig);
    get id(): string;
    private _applicationProviders;
    get applicationProviders(): DataAwsSsoadminApplicationProvidersApplicationProvidersList;
    putApplicationProviders(value: DataAwsSsoadminApplicationProvidersApplicationProviders[] | cdktf.IResolvable): void;
    resetApplicationProviders(): void;
    get applicationProvidersInput(): cdktf.IResolvable | DataAwsSsoadminApplicationProvidersApplicationProviders[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
