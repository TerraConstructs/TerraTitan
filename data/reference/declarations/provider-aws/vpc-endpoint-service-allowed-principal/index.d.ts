/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointServiceAllowedPrincipalConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service_allowed_principal#id VpcEndpointServiceAllowedPrincipal#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service_allowed_principal#principal_arn VpcEndpointServiceAllowedPrincipal#principal_arn}
    */
    readonly principalArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service_allowed_principal#vpc_endpoint_service_id VpcEndpointServiceAllowedPrincipal#vpc_endpoint_service_id}
    */
    readonly vpcEndpointServiceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service_allowed_principal aws_vpc_endpoint_service_allowed_principal}
*/
export declare class VpcEndpointServiceAllowedPrincipal extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint_service_allowed_principal";
    /**
    * Generates CDKTF code for importing a VpcEndpointServiceAllowedPrincipal resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpointServiceAllowedPrincipal to import
    * @param importFromId The id of the existing VpcEndpointServiceAllowedPrincipal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service_allowed_principal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpointServiceAllowedPrincipal to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service_allowed_principal aws_vpc_endpoint_service_allowed_principal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceAllowedPrincipalConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointServiceAllowedPrincipalConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _principalArn?;
    get principalArn(): string;
    set principalArn(value: string);
    get principalArnInput(): string | undefined;
    private _vpcEndpointServiceId?;
    get vpcEndpointServiceId(): string;
    set vpcEndpointServiceId(value: string);
    get vpcEndpointServiceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
