/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#cidr_blocks SecurityGroupRule#cidr_blocks}
    */
    readonly cidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#description SecurityGroupRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#from_port SecurityGroupRule#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#id SecurityGroupRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}
    */
    readonly ipv6CidrBlocks?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#prefix_list_ids SecurityGroupRule#prefix_list_ids}
    */
    readonly prefixListIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#protocol SecurityGroupRule#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#security_group_id SecurityGroupRule#security_group_id}
    */
    readonly securityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#self SecurityGroupRule#self}
    */
    readonly selfAttribute?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}
    */
    readonly sourceSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#to_port SecurityGroupRule#to_port}
    */
    readonly toPort: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#type SecurityGroupRule#type}
    */
    readonly type: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#timeouts SecurityGroupRule#timeouts}
    */
    readonly timeouts?: SecurityGroupRuleTimeouts;
}
export interface SecurityGroupRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#create SecurityGroupRule#create}
    */
    readonly create?: string;
}
export declare function securityGroupRuleTimeoutsToTerraform(struct?: SecurityGroupRuleTimeouts | cdktf.IResolvable): any;
export declare function securityGroupRuleTimeoutsToHclTerraform(struct?: SecurityGroupRuleTimeouts | cdktf.IResolvable): any;
export declare class SecurityGroupRuleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SecurityGroupRuleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: SecurityGroupRuleTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule aws_security_group_rule}
*/
export declare class SecurityGroupRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_security_group_rule";
    /**
    * Generates CDKTF code for importing a SecurityGroupRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityGroupRule to import
    * @param importFromId The id of the existing SecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityGroupRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/security_group_rule aws_security_group_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityGroupRuleConfig
    */
    constructor(scope: Construct, id: string, config: SecurityGroupRuleConfig);
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
    get fromPortInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    get protocolInput(): string | undefined;
    private _securityGroupId?;
    get securityGroupId(): string;
    set securityGroupId(value: string);
    get securityGroupIdInput(): string | undefined;
    get securityGroupRuleId(): string;
    private _self?;
    get selfAttribute(): boolean | cdktf.IResolvable;
    set selfAttribute(value: boolean | cdktf.IResolvable);
    resetSelfAttribute(): void;
    get selfAttributeInput(): boolean | cdktf.IResolvable | undefined;
    private _sourceSecurityGroupId?;
    get sourceSecurityGroupId(): string;
    set sourceSecurityGroupId(value: string);
    resetSourceSecurityGroupId(): void;
    get sourceSecurityGroupIdInput(): string | undefined;
    private _toPort?;
    get toPort(): number;
    set toPort(value: number);
    get toPortInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _timeouts;
    get timeouts(): SecurityGroupRuleTimeoutsOutputReference;
    putTimeouts(value: SecurityGroupRuleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | SecurityGroupRuleTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
