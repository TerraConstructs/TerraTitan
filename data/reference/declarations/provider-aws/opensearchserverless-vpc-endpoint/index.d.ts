/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OpensearchserverlessVpcEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#name OpensearchserverlessVpcEndpoint#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#security_group_ids OpensearchserverlessVpcEndpoint#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#subnet_ids OpensearchserverlessVpcEndpoint#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#vpc_id OpensearchserverlessVpcEndpoint#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#timeouts OpensearchserverlessVpcEndpoint#timeouts}
    */
    readonly timeouts?: OpensearchserverlessVpcEndpointTimeouts;
}
export interface OpensearchserverlessVpcEndpointTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#create OpensearchserverlessVpcEndpoint#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#delete OpensearchserverlessVpcEndpoint#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#update OpensearchserverlessVpcEndpoint#update}
    */
    readonly update?: string;
}
export declare function opensearchserverlessVpcEndpointTimeoutsToTerraform(struct?: OpensearchserverlessVpcEndpointTimeouts | cdktf.IResolvable): any;
export declare function opensearchserverlessVpcEndpointTimeoutsToHclTerraform(struct?: OpensearchserverlessVpcEndpointTimeouts | cdktf.IResolvable): any;
export declare class OpensearchserverlessVpcEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): OpensearchserverlessVpcEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: OpensearchserverlessVpcEndpointTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint aws_opensearchserverless_vpc_endpoint}
*/
export declare class OpensearchserverlessVpcEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_opensearchserverless_vpc_endpoint";
    /**
    * Generates CDKTF code for importing a OpensearchserverlessVpcEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OpensearchserverlessVpcEndpoint to import
    * @param importFromId The id of the existing OpensearchserverlessVpcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OpensearchserverlessVpcEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/opensearchserverless_vpc_endpoint aws_opensearchserverless_vpc_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OpensearchserverlessVpcEndpointConfig
    */
    constructor(scope: Construct, id: string, config: OpensearchserverlessVpcEndpointConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): OpensearchserverlessVpcEndpointTimeoutsOutputReference;
    putTimeouts(value: OpensearchserverlessVpcEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | OpensearchserverlessVpcEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
