/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface NetworkAclRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#cidr_block NetworkAclRule#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#egress NetworkAclRule#egress}
    */
    readonly egress?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#from_port NetworkAclRule#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#icmp_code NetworkAclRule#icmp_code}
    */
    readonly icmpCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#icmp_type NetworkAclRule#icmp_type}
    */
    readonly icmpType?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#id NetworkAclRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#ipv6_cidr_block NetworkAclRule#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#network_acl_id NetworkAclRule#network_acl_id}
    */
    readonly networkAclId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#protocol NetworkAclRule#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#rule_action NetworkAclRule#rule_action}
    */
    readonly ruleAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#rule_number NetworkAclRule#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#to_port NetworkAclRule#to_port}
    */
    readonly toPort?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule aws_network_acl_rule}
*/
export declare class NetworkAclRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_network_acl_rule";
    /**
    * Generates CDKTF code for importing a NetworkAclRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the NetworkAclRule to import
    * @param importFromId The id of the existing NetworkAclRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the NetworkAclRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/network_acl_rule aws_network_acl_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkAclRuleConfig
    */
    constructor(scope: Construct, id: string, config: NetworkAclRuleConfig);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _egress?;
    get egress(): boolean | cdktf.IResolvable;
    set egress(value: boolean | cdktf.IResolvable);
    resetEgress(): void;
    get egressInput(): boolean | cdktf.IResolvable | undefined;
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
    resetFromPort(): void;
    get fromPortInput(): number | undefined;
    private _icmpCode?;
    get icmpCode(): number;
    set icmpCode(value: number);
    resetIcmpCode(): void;
    get icmpCodeInput(): number | undefined;
    private _icmpType?;
    get icmpType(): number;
    set icmpType(value: number);
    resetIcmpType(): void;
    get icmpTypeInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _networkAclId?;
    get networkAclId(): string;
    set networkAclId(value: string);
    get networkAclIdInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _ruleAction?;
    get ruleAction(): string;
    set ruleAction(value: string);
    get ruleActionInput(): string | undefined;
    private _ruleNumber?;
    get ruleNumber(): number;
    set ruleNumber(value: number);
    get ruleNumberInput(): number | undefined;
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
