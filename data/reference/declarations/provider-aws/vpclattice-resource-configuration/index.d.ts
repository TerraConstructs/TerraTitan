/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeResourceConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#allow_association_to_shareable_service_network VpclatticeResourceConfiguration#allow_association_to_shareable_service_network}
    */
    readonly allowAssociationToShareableServiceNetwork?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#name VpclatticeResourceConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#port_ranges VpclatticeResourceConfiguration#port_ranges}
    */
    readonly portRanges?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#protocol VpclatticeResourceConfiguration#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_group_id VpclatticeResourceConfiguration#resource_configuration_group_id}
    */
    readonly resourceConfigurationGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#resource_gateway_identifier VpclatticeResourceConfiguration#resource_gateway_identifier}
    */
    readonly resourceGatewayIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#tags VpclatticeResourceConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#type VpclatticeResourceConfiguration#type}
    */
    readonly type?: string;
    /**
    * resource_configuration_definition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#resource_configuration_definition VpclatticeResourceConfiguration#resource_configuration_definition}
    */
    readonly resourceConfigurationDefinition?: VpclatticeResourceConfigurationResourceConfigurationDefinition[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#timeouts VpclatticeResourceConfiguration#timeouts}
    */
    readonly timeouts?: VpclatticeResourceConfigurationTimeouts;
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#arn VpclatticeResourceConfiguration#arn}
    */
    readonly arn: string;
}
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktf.IResolvable): any;
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktf.IResolvable): any;
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource | cdktf.IResolvable | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
}
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceOutputReference;
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#domain_name VpclatticeResourceConfiguration#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#ip_address_type VpclatticeResourceConfiguration#ip_address_type}
    */
    readonly ipAddressType: string;
}
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktf.IResolvable): any;
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktf.IResolvable): any;
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource | cdktf.IResolvable | undefined);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    get ipAddressTypeInput(): string | undefined;
}
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceOutputReference;
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#ip_address VpclatticeResourceConfiguration#ip_address}
    */
    readonly ipAddress: string;
}
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktf.IResolvable): any;
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktf.IResolvable): any;
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource | cdktf.IResolvable | undefined);
    private _ipAddress?;
    get ipAddress(): string;
    set ipAddress(value: string);
    get ipAddressInput(): string | undefined;
}
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceOutputReference;
}
export interface VpclatticeResourceConfigurationResourceConfigurationDefinition {
    /**
    * arn_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#arn_resource VpclatticeResourceConfiguration#arn_resource}
    */
    readonly arnResource?: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource[] | cdktf.IResolvable;
    /**
    * dns_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#dns_resource VpclatticeResourceConfiguration#dns_resource}
    */
    readonly dnsResource?: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource[] | cdktf.IResolvable;
    /**
    * ip_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#ip_resource VpclatticeResourceConfiguration#ip_resource}
    */
    readonly ipResource?: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource[] | cdktf.IResolvable;
}
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionToTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktf.IResolvable): any;
export declare function vpclatticeResourceConfigurationResourceConfigurationDefinitionToHclTerraform(struct?: VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktf.IResolvable): any;
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeResourceConfigurationResourceConfigurationDefinition | cdktf.IResolvable | undefined);
    private _arnResource;
    get arnResource(): VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResourceList;
    putArnResource(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource[] | cdktf.IResolvable): void;
    resetArnResource(): void;
    get arnResourceInput(): cdktf.IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinitionArnResource[] | undefined;
    private _dnsResource;
    get dnsResource(): VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResourceList;
    putDnsResource(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource[] | cdktf.IResolvable): void;
    resetDnsResource(): void;
    get dnsResourceInput(): cdktf.IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinitionDnsResource[] | undefined;
    private _ipResource;
    get ipResource(): VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResourceList;
    putIpResource(value: VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource[] | cdktf.IResolvable): void;
    resetIpResource(): void;
    get ipResourceInput(): cdktf.IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinitionIpResource[] | undefined;
}
export declare class VpclatticeResourceConfigurationResourceConfigurationDefinitionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: VpclatticeResourceConfigurationResourceConfigurationDefinition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): VpclatticeResourceConfigurationResourceConfigurationDefinitionOutputReference;
}
export interface VpclatticeResourceConfigurationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#create VpclatticeResourceConfiguration#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#delete VpclatticeResourceConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#update VpclatticeResourceConfiguration#update}
    */
    readonly update?: string;
}
export declare function vpclatticeResourceConfigurationTimeoutsToTerraform(struct?: VpclatticeResourceConfigurationTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeResourceConfigurationTimeoutsToHclTerraform(struct?: VpclatticeResourceConfigurationTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeResourceConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeResourceConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeResourceConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration aws_vpclattice_resource_configuration}
*/
export declare class VpclatticeResourceConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_resource_configuration";
    /**
    * Generates CDKTF code for importing a VpclatticeResourceConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeResourceConfiguration to import
    * @param importFromId The id of the existing VpclatticeResourceConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeResourceConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_resource_configuration aws_vpclattice_resource_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeResourceConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeResourceConfigurationConfig);
    private _allowAssociationToShareableServiceNetwork?;
    get allowAssociationToShareableServiceNetwork(): boolean | cdktf.IResolvable;
    set allowAssociationToShareableServiceNetwork(value: boolean | cdktf.IResolvable);
    resetAllowAssociationToShareableServiceNetwork(): void;
    get allowAssociationToShareableServiceNetworkInput(): boolean | cdktf.IResolvable | undefined;
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _portRanges?;
    get portRanges(): string[];
    set portRanges(value: string[]);
    resetPortRanges(): void;
    get portRangesInput(): string[] | undefined;
    private _protocol?;
    get protocol(): string;
    set protocol(value: string);
    resetProtocol(): void;
    get protocolInput(): string | undefined;
    private _resourceConfigurationGroupId?;
    get resourceConfigurationGroupId(): string;
    set resourceConfigurationGroupId(value: string);
    resetResourceConfigurationGroupId(): void;
    get resourceConfigurationGroupIdInput(): string | undefined;
    private _resourceGatewayIdentifier?;
    get resourceGatewayIdentifier(): string;
    set resourceGatewayIdentifier(value: string);
    resetResourceGatewayIdentifier(): void;
    get resourceGatewayIdentifierInput(): string | undefined;
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
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _resourceConfigurationDefinition;
    get resourceConfigurationDefinition(): VpclatticeResourceConfigurationResourceConfigurationDefinitionList;
    putResourceConfigurationDefinition(value: VpclatticeResourceConfigurationResourceConfigurationDefinition[] | cdktf.IResolvable): void;
    resetResourceConfigurationDefinition(): void;
    get resourceConfigurationDefinitionInput(): cdktf.IResolvable | VpclatticeResourceConfigurationResourceConfigurationDefinition[] | undefined;
    private _timeouts;
    get timeouts(): VpclatticeResourceConfigurationTimeoutsOutputReference;
    putTimeouts(value: VpclatticeResourceConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeResourceConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
