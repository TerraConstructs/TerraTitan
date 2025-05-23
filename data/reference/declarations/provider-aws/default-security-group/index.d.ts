/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultSecurityGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#egress DefaultSecurityGroup#egress}
    */
    readonly egress?: DefaultSecurityGroupEgress[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#id DefaultSecurityGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#ingress DefaultSecurityGroup#ingress}
    */
    readonly ingress?: DefaultSecurityGroupIngress[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#revoke_rules_on_delete DefaultSecurityGroup#revoke_rules_on_delete}
    */
    readonly revokeRulesOnDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#tags DefaultSecurityGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#tags_all DefaultSecurityGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#vpc_id DefaultSecurityGroup#vpc_id}
    */
    readonly vpcId?: string;
}
export interface DefaultSecurityGroupEgress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#description DefaultSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#from_port DefaultSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#protocol DefaultSecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#security_groups DefaultSecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#self DefaultSecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#to_port DefaultSecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function defaultSecurityGroupEgressToTerraform(struct?: DefaultSecurityGroupEgress | cdktf.IResolvable): any;
export declare function defaultSecurityGroupEgressToHclTerraform(struct?: DefaultSecurityGroupEgress | cdktf.IResolvable): any;
export declare class DefaultSecurityGroupEgressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DefaultSecurityGroupEgress | cdktf.IResolvable | undefined;
    set internalValue(value: DefaultSecurityGroupEgress | cdktf.IResolvable | undefined);
    private _cidrBlocks?;
    get cidrBlocks(): string[];
    set cidrBlocks(value: string[]);
    resetCidrBlocks(): void;
    get cidrBlocksInput(): string[] | undefined;
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
    private _ipv6CidrBlocks?;
    get ipv6CidrBlocks(): string[];
    set ipv6CidrBlocks(value: string[]);
    resetIpv6CidrBlocks(): void;
    get ipv6CidrBlocksInput(): string[] | undefined;
    private _prefixListIds?;
    get prefixListIds(): string[];
    set prefixListIds(value: string[]);
    resetPrefixListIds(): void;
    get prefixListIdsInput(): string[] | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _self?;
    get selfAttribute(): boolean | cdktf.IResolvable;
    set selfAttribute(value: boolean | cdktf.IResolvable);
    resetSelfAttribute(): void;
    get selfAttributeInput(): boolean | cdktf.IResolvable | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
}
export declare class DefaultSecurityGroupEgressList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DefaultSecurityGroupEgress[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DefaultSecurityGroupEgressOutputReference;
}
export interface DefaultSecurityGroupIngress {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#cidr_blocks DefaultSecurityGroup#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#description DefaultSecurityGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#from_port DefaultSecurityGroup#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#ipv6_cidr_blocks DefaultSecurityGroup#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#prefix_list_ids DefaultSecurityGroup#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#protocol DefaultSecurityGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#security_groups DefaultSecurityGroup#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#self DefaultSecurityGroup#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#to_port DefaultSecurityGroup#to_port}
    */
    readonly toPort?: number;
}
export declare function defaultSecurityGroupIngressToTerraform(struct?: DefaultSecurityGroupIngress | cdktf.IResolvable): any;
export declare function defaultSecurityGroupIngressToHclTerraform(struct?: DefaultSecurityGroupIngress | cdktf.IResolvable): any;
export declare class DefaultSecurityGroupIngressOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DefaultSecurityGroupIngress | cdktf.IResolvable | undefined;
    set internalValue(value: DefaultSecurityGroupIngress | cdktf.IResolvable | undefined);
    private _cidrBlocks?;
    get cidrBlocks(): string[];
    set cidrBlocks(value: string[]);
    resetCidrBlocks(): void;
    get cidrBlocksInput(): string[] | undefined;
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
    private _ipv6CidrBlocks?;
    get ipv6CidrBlocks(): string[];
    set ipv6CidrBlocks(value: string[]);
    resetIpv6CidrBlocks(): void;
    get ipv6CidrBlocksInput(): string[] | undefined;
    private _prefixListIds?;
    get prefixListIds(): string[];
    set prefixListIds(value: string[]);
    resetPrefixListIds(): void;
    get prefixListIdsInput(): string[] | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _self?;
    get selfAttribute(): boolean | cdktf.IResolvable;
    set selfAttribute(value: boolean | cdktf.IResolvable);
    resetSelfAttribute(): void;
    get selfAttributeInput(): boolean | cdktf.IResolvable | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    resetToPort(): void;
    get toPortInput(): number | undefined;
}
export declare class DefaultSecurityGroupIngressList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DefaultSecurityGroupIngress[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DefaultSecurityGroupIngressOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group aws_default_security_group}
*/
export declare class DefaultSecurityGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_default_security_group";
    /**
    * Generates CDKTF code for importing a DefaultSecurityGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DefaultSecurityGroup to import
    * @param importFromId The id of the existing DefaultSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DefaultSecurityGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_security_group aws_default_security_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultSecurityGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DefaultSecurityGroupConfig);
    get arn(): string;
    get description(): string;
    private _egress;
    get egress(): DefaultSecurityGroupEgressList;
    putEgress(value: DefaultSecurityGroupEgress[] | cdktf.IResolvable): void;
    resetEgress(): void;
    get egressInput(): cdktf.IResolvable | DefaultSecurityGroupEgress[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ingress;
    get ingress(): DefaultSecurityGroupIngressList;
    putIngress(value: DefaultSecurityGroupIngress[] | cdktf.IResolvable): void;
    resetIngress(): void;
    get ingressInput(): cdktf.IResolvable | DefaultSecurityGroupIngress[] | undefined;
    get name(): string;
    get namePrefix(): string;
    get ownerId(): string;
    private _revokeRulesOnDelete?;
    get revokeRulesOnDelete(): boolean | cdktf.IResolvable;
    set revokeRulesOnDelete(value: boolean | cdktf.IResolvable);
    resetRevokeRulesOnDelete(): void;
    get revokeRulesOnDeleteInput(): boolean | cdktf.IResolvable | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
