/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultNetworkAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#default_network_acl_id DefaultNetworkAcl#default_network_acl_id}
    */
    readonly defaultNetworkAclId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#id DefaultNetworkAcl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#subnet_ids DefaultNetworkAcl#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#tags DefaultNetworkAcl#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#tags_all DefaultNetworkAcl#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * egress block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#egress DefaultNetworkAcl#egress}
    */
    readonly egress?: DefaultNetworkAclEgress[] | cdktf.IResolvable;
    /**
    * ingress block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#ingress DefaultNetworkAcl#ingress}
    */
    readonly ingress?: DefaultNetworkAclIngress[] | cdktf.IResolvable;
}
export interface DefaultNetworkAclEgress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#action DefaultNetworkAcl#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#from_port DefaultNetworkAcl#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}
    */
    readonly icmpCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}
    */
    readonly icmpType?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#protocol DefaultNetworkAcl#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#rule_no DefaultNetworkAcl#rule_no}
    */
    readonly ruleNo: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#to_port DefaultNetworkAcl#to_port}
    */
    readonly toPort: number;
}
export declare function defaultNetworkAclEgressToTerraform(struct?: DefaultNetworkAclEgress | cdktf.IResolvable): any;
export declare function defaultNetworkAclEgressToHclTerraform(struct?: DefaultNetworkAclEgress | cdktf.IResolvable): any;
export declare class DefaultNetworkAclEgressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DefaultNetworkAclEgress | cdktf.IResolvable | undefined;
    set internalValue(value: DefaultNetworkAclEgress | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
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
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _ruleNo?;
    get ruleNo(): number;
    set ruleNo(value: number);
    get ruleNoInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
}
export declare class DefaultNetworkAclEgressList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DefaultNetworkAclEgress[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DefaultNetworkAclEgressOutputReference;
}
export interface DefaultNetworkAclIngress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#action DefaultNetworkAcl#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#cidr_block DefaultNetworkAcl#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#from_port DefaultNetworkAcl#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#icmp_code DefaultNetworkAcl#icmp_code}
    */
    readonly icmpCode?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#icmp_type DefaultNetworkAcl#icmp_type}
    */
    readonly icmpType?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#ipv6_cidr_block DefaultNetworkAcl#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#protocol DefaultNetworkAcl#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#rule_no DefaultNetworkAcl#rule_no}
    */
    readonly ruleNo: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#to_port DefaultNetworkAcl#to_port}
    */
    readonly toPort: number;
}
export declare function defaultNetworkAclIngressToTerraform(struct?: DefaultNetworkAclIngress | cdktf.IResolvable): any;
export declare function defaultNetworkAclIngressToHclTerraform(struct?: DefaultNetworkAclIngress | cdktf.IResolvable): any;
export declare class DefaultNetworkAclIngressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DefaultNetworkAclIngress | cdktf.IResolvable | undefined;
    set internalValue(value: DefaultNetworkAclIngress | cdktf.IResolvable | undefined);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _fromPort?;
    get fromPort(): number;
    set fromPort(value: number);
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
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    get protocolInput(): string | undefined;
    private _ruleNo?;
    get ruleNo(): number;
    set ruleNo(value: number);
    get ruleNoInput(): number | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
}
export declare class DefaultNetworkAclIngressList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DefaultNetworkAclIngress[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DefaultNetworkAclIngressOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl aws_default_network_acl}
*/
export declare class DefaultNetworkAcl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_default_network_acl";
    /**
    * Generates CDKTF code for importing a DefaultNetworkAcl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DefaultNetworkAcl to import
    * @param importFromId The id of the existing DefaultNetworkAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DefaultNetworkAcl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_network_acl aws_default_network_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultNetworkAclConfig
    */
    constructor(scope: Construct, id: string, config: DefaultNetworkAclConfig);
    get arn(): string;
    private _defaultNetworkAclId?;
    get defaultNetworkAclId(): string;
    set defaultNetworkAclId(value: string);
    get defaultNetworkAclIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerId(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    resetSubnetIds(): void;
    get subnetIdsInput(): string[] | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get vpcId(): string;
    private _egress;
    get egress(): DefaultNetworkAclEgressList;
    putEgress(value: DefaultNetworkAclEgress[] | cdktf.IResolvable): void;
    resetEgress(): void;
    get egressInput(): cdktf.IResolvable | DefaultNetworkAclEgress[] | undefined;
    private _ingress;
    get ingress(): DefaultNetworkAclIngressList;
    putIngress(value: DefaultNetworkAclIngress[] | cdktf.IResolvable): void;
    resetIngress(): void;
    get ingressInput(): cdktf.IResolvable | DefaultNetworkAclIngress[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
