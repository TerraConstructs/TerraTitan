/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchAuthorizeVpcEndpointAccessConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/opensearch_authorize_vpc_endpoint_access#account OpensearchAuthorizeVpcEndpointAccess#account}
    */
    readonly account: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/opensearch_authorize_vpc_endpoint_access#domain_name OpensearchAuthorizeVpcEndpointAccess#domain_name}
    */
    readonly domainName: string;
}
export interface OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal {
}
export declare function opensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalToTerraform(struct?: OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal): any;
export declare function opensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalToHclTerraform(struct?: OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal): any;
export declare class OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal | undefined;
    set internalValue(value: OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipal | undefined);
    get principal(): string;
    get principalType(): string;
}
export declare class OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList extends cdktf.ComplexList {
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
    get(index: number): OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/opensearch_authorize_vpc_endpoint_access aws_opensearch_authorize_vpc_endpoint_access}
*/
export declare class OpensearchAuthorizeVpcEndpointAccess extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearch_authorize_vpc_endpoint_access";
    /**
    * Generates CDKTF code for importing a OpensearchAuthorizeVpcEndpointAccess resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchAuthorizeVpcEndpointAccess to import
    * @param importFromId The id of the existing OpensearchAuthorizeVpcEndpointAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/opensearch_authorize_vpc_endpoint_access#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchAuthorizeVpcEndpointAccess to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/opensearch_authorize_vpc_endpoint_access aws_opensearch_authorize_vpc_endpoint_access} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchAuthorizeVpcEndpointAccessConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchAuthorizeVpcEndpointAccessConfig);
    private _account?;
    get account(): string;
    set account(value: string);
    get accountInput(): string | undefined;
    private _authorizedPrincipal;
    get authorizedPrincipal(): OpensearchAuthorizeVpcEndpointAccessAuthorizedPrincipalList;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
