/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface FinspaceKxEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#description FinspaceKxEnvironment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#kms_key_id FinspaceKxEnvironment#kms_key_id}
    */
    readonly kmsKeyId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#name FinspaceKxEnvironment#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#tags FinspaceKxEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#tags_all FinspaceKxEnvironment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * custom_dns_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#custom_dns_configuration FinspaceKxEnvironment#custom_dns_configuration}
    */
    readonly customDnsConfiguration?: FinspaceKxEnvironmentCustomDnsConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#timeouts FinspaceKxEnvironment#timeouts}
    */
    readonly timeouts?: FinspaceKxEnvironmentTimeouts;
    /**
    * transit_gateway_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#transit_gateway_configuration FinspaceKxEnvironment#transit_gateway_configuration}
    */
    readonly transitGatewayConfiguration?: FinspaceKxEnvironmentTransitGatewayConfiguration;
}
export interface FinspaceKxEnvironmentCustomDnsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#custom_dns_server_ip FinspaceKxEnvironment#custom_dns_server_ip}
    */
    readonly customDnsServerIp: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#custom_dns_server_name FinspaceKxEnvironment#custom_dns_server_name}
    */
    readonly customDnsServerName: string;
}
export declare function finspaceKxEnvironmentCustomDnsConfigurationToTerraform(struct?: FinspaceKxEnvironmentCustomDnsConfiguration | cdktf.IResolvable): any;
export declare function finspaceKxEnvironmentCustomDnsConfigurationToHclTerraform(struct?: FinspaceKxEnvironmentCustomDnsConfiguration | cdktf.IResolvable): any;
export declare class FinspaceKxEnvironmentCustomDnsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxEnvironmentCustomDnsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxEnvironmentCustomDnsConfiguration | cdktf.IResolvable | undefined);
    private _customDnsServerIp?;
    get customDnsServerIp(): string;
    set customDnsServerIp(value: string);
    get customDnsServerIpInput(): string | undefined;
    private _customDnsServerName?;
    get customDnsServerName(): string;
    set customDnsServerName(value: string);
    get customDnsServerNameInput(): string | undefined;
}
export declare class FinspaceKxEnvironmentCustomDnsConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxEnvironmentCustomDnsConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxEnvironmentCustomDnsConfigurationOutputReference;
}
export interface FinspaceKxEnvironmentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#create FinspaceKxEnvironment#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#delete FinspaceKxEnvironment#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#update FinspaceKxEnvironment#update}
    */
    readonly update?: string;
}
export declare function finspaceKxEnvironmentTimeoutsToTerraform(struct?: FinspaceKxEnvironmentTimeouts | cdktf.IResolvable): any;
export declare function finspaceKxEnvironmentTimeoutsToHclTerraform(struct?: FinspaceKxEnvironmentTimeouts | cdktf.IResolvable): any;
export declare class FinspaceKxEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxEnvironmentTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxEnvironmentTimeouts | cdktf.IResolvable | undefined);
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
export interface FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#code FinspaceKxEnvironment#code}
    */
    readonly code: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#type FinspaceKxEnvironment#type}
    */
    readonly type: number;
}
export declare function finspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeToTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference | FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode): any;
export declare function finspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeToHclTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference | FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode): any;
export declare class FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode | undefined;
    set internalValue(value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode | undefined);
    private _code?;
    get code(): number;
    set code(value: number);
    get codeInput(): number | undefined;
    private _type?;
    get type(): number;
    set type(value: number);
    get typeInput(): number | undefined;
}
export interface FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#from FinspaceKxEnvironment#from}
    */
    readonly from: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#to FinspaceKxEnvironment#to}
    */
    readonly to: number;
}
export declare function finspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeToTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference | FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange): any;
export declare function finspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeToHclTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference | FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange): any;
export declare class FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange | undefined;
    set internalValue(value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange | undefined);
    private _from?;
    get from(): number;
    set from(value: number);
    get fromInput(): number | undefined;
    private _to?;
    get to(): number;
    set to(value: number);
    get toInput(): number | undefined;
}
export interface FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#cidr_block FinspaceKxEnvironment#cidr_block}
    */
    readonly cidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#protocol FinspaceKxEnvironment#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#rule_action FinspaceKxEnvironment#rule_action}
    */
    readonly ruleAction: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#rule_number FinspaceKxEnvironment#rule_number}
    */
    readonly ruleNumber: number;
    /**
    * icmp_type_code block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#icmp_type_code FinspaceKxEnvironment#icmp_type_code}
    */
    readonly icmpTypeCode?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode;
    /**
    * port_range block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#port_range FinspaceKxEnvironment#port_range}
    */
    readonly portRange?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange;
}
export declare function finspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationToTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration | cdktf.IResolvable): any;
export declare function finspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationToHclTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration | cdktf.IResolvable): any;
export declare class FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration | cdktf.IResolvable | undefined);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    get cidrBlockInput(): string | undefined;
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
    private _icmpTypeCode;
    get icmpTypeCode(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCodeOutputReference;
    putIcmpTypeCode(value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode): void;
    resetIcmpTypeCode(): void;
    get icmpTypeCodeInput(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationIcmpTypeCode | undefined;
    private _portRange;
    get portRange(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRangeOutputReference;
    putPortRange(value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange): void;
    resetPortRange(): void;
    get portRangeInput(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationPortRange | undefined;
}
export declare class FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationOutputReference;
}
export interface FinspaceKxEnvironmentTransitGatewayConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#routable_cidr_space FinspaceKxEnvironment#routable_cidr_space}
    */
    readonly routableCidrSpace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#transit_gateway_id FinspaceKxEnvironment#transit_gateway_id}
    */
    readonly transitGatewayId: string;
    /**
    * attachment_network_acl_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#attachment_network_acl_configuration FinspaceKxEnvironment#attachment_network_acl_configuration}
    */
    readonly attachmentNetworkAclConfiguration?: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration[] | cdktf.IResolvable;
}
export declare function finspaceKxEnvironmentTransitGatewayConfigurationToTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference | FinspaceKxEnvironmentTransitGatewayConfiguration): any;
export declare function finspaceKxEnvironmentTransitGatewayConfigurationToHclTerraform(struct?: FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference | FinspaceKxEnvironmentTransitGatewayConfiguration): any;
export declare class FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): FinspaceKxEnvironmentTransitGatewayConfiguration | undefined;
    set internalValue(value: FinspaceKxEnvironmentTransitGatewayConfiguration | undefined);
    private _routableCidrSpace?;
    get routableCidrSpace(): string;
    set routableCidrSpace(value: string);
    get routableCidrSpaceInput(): string | undefined;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    get transitGatewayIdInput(): string | undefined;
    private _attachmentNetworkAclConfiguration;
    get attachmentNetworkAclConfiguration(): FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfigurationList;
    putAttachmentNetworkAclConfiguration(value: FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration[] | cdktf.IResolvable): void;
    resetAttachmentNetworkAclConfiguration(): void;
    get attachmentNetworkAclConfigurationInput(): cdktf.IResolvable | FinspaceKxEnvironmentTransitGatewayConfigurationAttachmentNetworkAclConfiguration[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment}
*/
export declare class FinspaceKxEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_finspace_kx_environment";
    /**
    * Generates CDKTF code for importing a FinspaceKxEnvironment resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the FinspaceKxEnvironment to import
    * @param importFromId The id of the existing FinspaceKxEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the FinspaceKxEnvironment to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/finspace_kx_environment aws_finspace_kx_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FinspaceKxEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: FinspaceKxEnvironmentConfig);
    get arn(): string;
    get availabilityZones(): string[];
    get createdTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get infrastructureAccountId(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    get kmsKeyIdInput(): string | undefined;
    get lastModifiedTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get status(): string;
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
    private _customDnsConfiguration;
    get customDnsConfiguration(): FinspaceKxEnvironmentCustomDnsConfigurationList;
    putCustomDnsConfiguration(value: FinspaceKxEnvironmentCustomDnsConfiguration[] | cdktf.IResolvable): void;
    resetCustomDnsConfiguration(): void;
    get customDnsConfigurationInput(): cdktf.IResolvable | FinspaceKxEnvironmentCustomDnsConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): FinspaceKxEnvironmentTimeoutsOutputReference;
    putTimeouts(value: FinspaceKxEnvironmentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | FinspaceKxEnvironmentTimeouts | undefined;
    private _transitGatewayConfiguration;
    get transitGatewayConfiguration(): FinspaceKxEnvironmentTransitGatewayConfigurationOutputReference;
    putTransitGatewayConfiguration(value: FinspaceKxEnvironmentTransitGatewayConfiguration): void;
    resetTransitGatewayConfiguration(): void;
    get transitGatewayConfigurationInput(): FinspaceKxEnvironmentTransitGatewayConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
