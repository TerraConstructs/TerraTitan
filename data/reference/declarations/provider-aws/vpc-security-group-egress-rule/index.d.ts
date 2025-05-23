/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcSecurityGroupEgressRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv4 VpcSecurityGroupEgressRule#cidr_ipv4}
    */
    readonly cidrIpv4?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#cidr_ipv6 VpcSecurityGroupEgressRule#cidr_ipv6}
    */
    readonly cidrIpv6?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#description VpcSecurityGroupEgressRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#from_port VpcSecurityGroupEgressRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#ip_protocol VpcSecurityGroupEgressRule#ip_protocol}
    */
    readonly ipProtocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#prefix_list_id VpcSecurityGroupEgressRule#prefix_list_id}
    */
    readonly prefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#referenced_security_group_id VpcSecurityGroupEgressRule#referenced_security_group_id}
    */
    readonly referencedSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#security_group_id VpcSecurityGroupEgressRule#security_group_id}
    */
    readonly securityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#tags VpcSecurityGroupEgressRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#to_port VpcSecurityGroupEgressRule#to_port}
    */
    readonly toPort?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule aws_vpc_security_group_egress_rule}
*/
export declare class VpcSecurityGroupEgressRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_security_group_egress_rule";
    /**
    * Generates CDKTF code for importing a VpcSecurityGroupEgressRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcSecurityGroupEgressRule to import
    * @param importFromId The id of the existing VpcSecurityGroupEgressRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcSecurityGroupEgressRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_security_group_egress_rule aws_vpc_security_group_egress_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcSecurityGroupEgressRuleConfig
    */
    constructor(scope: Construct, id: string, config: VpcSecurityGroupEgressRuleConfig);
    get arn(): string;
    private _cidrIpv4?;
    get cidrIpv4(): string;
    set cidrIpv4(value: string);
    resetCidrIpv4(): void;
    get cidrIpv4Input(): string | undefined;
    private _cidrIpv6?;
    get cidrIpv6(): string;
    set cidrIpv6(value: string);
    resetCidrIpv6(): void;
    get cidrIpv6Input(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    resetFromPort(): void;
    get fromPortInput(): number | undefined;
    get id(): string;
    private _ipProtocol?;
    get ipProtocol(): string;
    set ipProtocol(value: string);
    get ipProtocolInput(): string | undefined;
    private _prefixListId?;
    get prefixListId(): string;
    set prefixListId(value: string);
    resetPrefixListId(): void;
    get prefixListIdInput(): string | undefined;
    private _referencedSecurityGroupId?;
    get referencedSecurityGroupId(): string;
    set referencedSecurityGroupId(value: string);
    resetReferencedSecurityGroupId(): void;
    get referencedSecurityGroupIdInput(): string | undefined;
    private _securityGroupId?;
    get securityGroupId(): string;
    set securityGroupId(value: string);
    get securityGroupIdInput(): string | undefined;
    get securityGroupRuleId(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
