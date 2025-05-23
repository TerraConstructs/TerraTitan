/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RedshiftEndpointAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access#cluster_identifier RedshiftEndpointAccess#cluster_identifier}
    */
    readonly clusterIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access#endpoint_name RedshiftEndpointAccess#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access#id RedshiftEndpointAccess#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access#resource_owner RedshiftEndpointAccess#resource_owner}
    */
    readonly resourceOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access#subnet_group_name RedshiftEndpointAccess#subnet_group_name}
    */
    readonly subnetGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access#vpc_security_group_ids RedshiftEndpointAccess#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
}
export interface RedshiftEndpointAccessVpcEndpointNetworkInterface {
}
export declare function redshiftEndpointAccessVpcEndpointNetworkInterfaceToTerraform(struct?: RedshiftEndpointAccessVpcEndpointNetworkInterface): any;
export declare function redshiftEndpointAccessVpcEndpointNetworkInterfaceToHclTerraform(struct?: RedshiftEndpointAccessVpcEndpointNetworkInterface): any;
export declare class RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftEndpointAccessVpcEndpointNetworkInterface | undefined;
    set internalValue(value: RedshiftEndpointAccessVpcEndpointNetworkInterface | undefined);
    get availabilityZone(): string;
    get networkInterfaceId(): string;
    get privateIpAddress(): string;
    get subnetId(): string;
}
export declare class RedshiftEndpointAccessVpcEndpointNetworkInterfaceList extends cdktf.ComplexList {
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
    get(index: number): RedshiftEndpointAccessVpcEndpointNetworkInterfaceOutputReference;
}
export interface RedshiftEndpointAccessVpcEndpoint {
}
export declare function redshiftEndpointAccessVpcEndpointToTerraform(struct?: RedshiftEndpointAccessVpcEndpoint): any;
export declare function redshiftEndpointAccessVpcEndpointToHclTerraform(struct?: RedshiftEndpointAccessVpcEndpoint): any;
export declare class RedshiftEndpointAccessVpcEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): RedshiftEndpointAccessVpcEndpoint | undefined;
    set internalValue(value: RedshiftEndpointAccessVpcEndpoint | undefined);
    private _networkInterface;
    get networkInterface(): RedshiftEndpointAccessVpcEndpointNetworkInterfaceList;
    get vpcEndpointId(): string;
    get vpcId(): string;
}
export declare class RedshiftEndpointAccessVpcEndpointList extends cdktf.ComplexList {
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
    get(index: number): RedshiftEndpointAccessVpcEndpointOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access aws_redshift_endpoint_access}
*/
export declare class RedshiftEndpointAccess extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_redshift_endpoint_access";
    /**
    * Generates CDKTF code for importing a RedshiftEndpointAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the RedshiftEndpointAccess to import
    * @param importFromId The id of the existing RedshiftEndpointAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the RedshiftEndpointAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/redshift_endpoint_access aws_redshift_endpoint_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RedshiftEndpointAccessConfig
    */
    constructor(scope: Construct, id: string, config: RedshiftEndpointAccessConfig);
    get address(): string;
    private _clusterIdentifier?;
    get clusterIdentifier(): string;
    set clusterIdentifier(value: string);
    get clusterIdentifierInput(): string | undefined;
    private _endpointName?;
    get endpointName(): string;
    set endpointName(value: string);
    get endpointNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get port(): number;
    private _resourceOwner?;
    get resourceOwner(): string;
    set resourceOwner(value: string);
    resetResourceOwner(): void;
    get resourceOwnerInput(): string | undefined;
    private _subnetGroupName?;
    get subnetGroupName(): string;
    set subnetGroupName(value: string);
    get subnetGroupNameInput(): string | undefined;
    private _vpcEndpoint;
    get vpcEndpoint(): RedshiftEndpointAccessVpcEndpointList;
    private _vpcSecurityGroupIds?;
    get vpcSecurityGroupIds(): string[];
    set vpcSecurityGroupIds(value: string[]);
    resetVpcSecurityGroupIds(): void;
    get vpcSecurityGroupIdsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
