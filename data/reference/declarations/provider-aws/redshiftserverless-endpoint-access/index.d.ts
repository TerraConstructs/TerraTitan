/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftserverlessEndpointAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access#endpoint_name RedshiftserverlessEndpointAccess#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access#id RedshiftserverlessEndpointAccess#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access#owner_account RedshiftserverlessEndpointAccess#owner_account}
    */
    readonly ownerAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access#subnet_ids RedshiftserverlessEndpointAccess#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access#vpc_security_group_ids RedshiftserverlessEndpointAccess#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access#workgroup_name RedshiftserverlessEndpointAccess#workgroup_name}
    */
    readonly workgroupName: string;
}
export interface RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface {
}
export declare function redshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceToTerraform(struct?: RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface): any;
export declare function redshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceToHclTerraform(struct?: RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface): any;
export declare class RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface | undefined;
    set internalValue(value: RedshiftserverlessEndpointAccessVpcEndpointNetworkInterface | undefined);
    get availabilityZone(): string;
    get networkInterfaceId(): string;
    get privateIpAddress(): string;
    get subnetId(): string;
}
export declare class RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList extends cdktf.ComplexList {
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
    get(index: number): RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceOutputReference;
}
export interface RedshiftserverlessEndpointAccessVpcEndpoint {
}
export declare function redshiftserverlessEndpointAccessVpcEndpointToTerraform(struct?: RedshiftserverlessEndpointAccessVpcEndpoint): any;
export declare function redshiftserverlessEndpointAccessVpcEndpointToHclTerraform(struct?: RedshiftserverlessEndpointAccessVpcEndpoint): any;
export declare class RedshiftserverlessEndpointAccessVpcEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftserverlessEndpointAccessVpcEndpoint | undefined;
    set internalValue(value: RedshiftserverlessEndpointAccessVpcEndpoint | undefined);
    private _networkInterface;
    get networkInterface(): RedshiftserverlessEndpointAccessVpcEndpointNetworkInterfaceList;
    get vpcEndpointId(): string;
    get vpcId(): string;
}
export declare class RedshiftserverlessEndpointAccessVpcEndpointList extends cdktf.ComplexList {
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
    get(index: number): RedshiftserverlessEndpointAccessVpcEndpointOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access aws_redshiftserverless_endpoint_access}
*/
export declare class RedshiftserverlessEndpointAccess extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshiftserverless_endpoint_access";
    /**
    * Generates CDKTF code for importing a RedshiftserverlessEndpointAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftserverlessEndpointAccess to import
    * @param importFromId The id of the existing RedshiftserverlessEndpointAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftserverlessEndpointAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshiftserverless_endpoint_access aws_redshiftserverless_endpoint_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftserverlessEndpointAccessConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftserverlessEndpointAccessConfig);
    get address(): string;
    get arn(): string;
    private _endpointName?;
    get endpointName(): string;
    set endpointName(value: string);
    get endpointNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ownerAccount?;
    get ownerAccount(): string;
    set ownerAccount(value: string);
    resetOwnerAccount(): void;
    get ownerAccountInput(): string | undefined;
    get port(): number;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcEndpoint;
    get vpcEndpoint(): RedshiftserverlessEndpointAccessVpcEndpointList;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
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
