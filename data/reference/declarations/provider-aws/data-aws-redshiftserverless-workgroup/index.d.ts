/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRedshiftserverlessWorkgroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsRedshiftserverlessWorkgroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_workgroup#workgroup_name DataAwsRedshiftserverlessWorkgroup#workgroup_name}
    */
    readonly workgroupName: string;
}
export interface DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface {
}
export declare function dataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceToTerraform(struct?: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface): any;
export declare function dataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceToHclTerraform(struct?: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface): any;
export declare class DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface | undefined;
    set internalValue(value: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterface | undefined);
    get availabilityZone(): string;
    get networkInterfaceId(): string;
    get privateIpAddress(): string;
    get subnetId(): string;
}
export declare class DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceOutputReference;
}
export interface DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint {
}
export declare function dataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointToTerraform(struct?: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint): any;
export declare function dataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointToHclTerraform(struct?: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint): any;
export declare class DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint | undefined;
    set internalValue(value: DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpoint | undefined);
    private _networkInterface;
    get networkInterface(): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointNetworkInterfaceList;
    get vpcEndpointId(): string;
    get vpcId(): string;
}
export declare class DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointOutputReference;
}
export interface DataAwsRedshiftserverlessWorkgroupEndpoint {
}
export declare function dataAwsRedshiftserverlessWorkgroupEndpointToTerraform(struct?: DataAwsRedshiftserverlessWorkgroupEndpoint): any;
export declare function dataAwsRedshiftserverlessWorkgroupEndpointToHclTerraform(struct?: DataAwsRedshiftserverlessWorkgroupEndpoint): any;
export declare class DataAwsRedshiftserverlessWorkgroupEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRedshiftserverlessWorkgroupEndpoint | undefined;
    set internalValue(value: DataAwsRedshiftserverlessWorkgroupEndpoint | undefined);
    get address(): string;
    get port(): number;
    private _vpcEndpoint;
    get vpcEndpoint(): DataAwsRedshiftserverlessWorkgroupEndpointVpcEndpointList;
}
export declare class DataAwsRedshiftserverlessWorkgroupEndpointList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRedshiftserverlessWorkgroupEndpointOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_workgroup aws_redshiftserverless_workgroup}
*/
export declare class DataAwsRedshiftserverlessWorkgroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_redshiftserverless_workgroup";
    /**
    * Generates CDKTF code for importing a DataAwsRedshiftserverlessWorkgroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRedshiftserverlessWorkgroup to import
    * @param importFromId The id of the existing DataAwsRedshiftserverlessWorkgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRedshiftserverlessWorkgroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/redshiftserverless_workgroup aws_redshiftserverless_workgroup} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRedshiftserverlessWorkgroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRedshiftserverlessWorkgroupConfig);
    get arn(): string;
    private _endpoint;
    get endpoint(): DataAwsRedshiftserverlessWorkgroupEndpointList;
    get enhancedVpcRouting(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get namespaceName(): string;
    get publiclyAccessible(): cdktf.IResolvable;
    get securityGroupIds(): string[];
    get subnetIds(): string[];
    get workgroupId(): string;
    private _workgroupName?;
    get workgroupName(): string;
    set workgroupName(value: string);
    get workgroupNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
