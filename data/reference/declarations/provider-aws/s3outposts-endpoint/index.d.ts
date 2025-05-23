/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3OutpostsEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint#access_type S3OutpostsEndpoint#access_type}
    */
    readonly accessType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint#customer_owned_ipv4_pool S3OutpostsEndpoint#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint#id S3OutpostsEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint#outpost_id S3OutpostsEndpoint#outpost_id}
    */
    readonly outpostId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint#security_group_id S3OutpostsEndpoint#security_group_id}
    */
    readonly securityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint#subnet_id S3OutpostsEndpoint#subnet_id}
    */
    readonly subnetId: string;
}
export interface S3OutpostsEndpointNetworkInterfaces {
}
export declare function s3OutpostsEndpointNetworkInterfacesToTerraform(struct?: S3OutpostsEndpointNetworkInterfaces): any;
export declare function s3OutpostsEndpointNetworkInterfacesToHclTerraform(struct?: S3OutpostsEndpointNetworkInterfaces): any;
export declare class S3OutpostsEndpointNetworkInterfacesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3OutpostsEndpointNetworkInterfaces | undefined;
    set internalValue(value: S3OutpostsEndpointNetworkInterfaces | undefined);
    get networkInterfaceId(): string;
}
export declare class S3OutpostsEndpointNetworkInterfacesList extends cdktf.ComplexList {
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
    get(index: number): S3OutpostsEndpointNetworkInterfacesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint aws_s3outposts_endpoint}
*/
export declare class S3OutpostsEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3outposts_endpoint";
    /**
    * Generates CDKTF code for importing a S3OutpostsEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3OutpostsEndpoint to import
    * @param importFromId The id of the existing S3OutpostsEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3OutpostsEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3outposts_endpoint aws_s3outposts_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3OutpostsEndpointConfig
    */
    constructor(scope: Construct, id: string, config: S3OutpostsEndpointConfig);
    private _accessType?;
    get accessType(): string;
    set accessType(value: string);
    resetAccessType(): void;
    get accessTypeInput(): string | undefined;
    get arn(): string;
    get cidrBlock(): string;
    get creationTime(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _networkInterfaces;
    get networkInterfaces(): S3OutpostsEndpointNetworkInterfacesList;
    private _outpostId?;
    get outpostId(): string;
    set outpostId(value: string);
    get outpostIdInput(): string | undefined;
    private _securityGroupId?;
    get securityGroupId(): string;
    set securityGroupId(value: string);
    get securityGroupIdInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
