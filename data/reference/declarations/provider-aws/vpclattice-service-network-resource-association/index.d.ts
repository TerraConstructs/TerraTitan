/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeServiceNetworkResourceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association#resource_configuration_identifier VpclatticeServiceNetworkResourceAssociation#resource_configuration_identifier}
    */
    readonly resourceConfigurationIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association#service_network_identifier VpclatticeServiceNetworkResourceAssociation#service_network_identifier}
    */
    readonly serviceNetworkIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association#tags VpclatticeServiceNetworkResourceAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association#timeouts VpclatticeServiceNetworkResourceAssociation#timeouts}
    */
    readonly timeouts?: VpclatticeServiceNetworkResourceAssociationTimeouts;
}
export interface VpclatticeServiceNetworkResourceAssociationDnsEntry {
}
export declare function vpclatticeServiceNetworkResourceAssociationDnsEntryToTerraform(struct?: VpclatticeServiceNetworkResourceAssociationDnsEntry): any;
export declare function vpclatticeServiceNetworkResourceAssociationDnsEntryToHclTerraform(struct?: VpclatticeServiceNetworkResourceAssociationDnsEntry): any;
export declare class VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeServiceNetworkResourceAssociationDnsEntry | undefined;
    set internalValue(value: VpclatticeServiceNetworkResourceAssociationDnsEntry | undefined);
    get domainName(): string;
    get hostedZoneId(): string;
}
export declare class VpclatticeServiceNetworkResourceAssociationDnsEntryList extends cdktf.ComplexList {
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
    get(index: number): VpclatticeServiceNetworkResourceAssociationDnsEntryOutputReference;
}
export interface VpclatticeServiceNetworkResourceAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association#create VpclatticeServiceNetworkResourceAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association#delete VpclatticeServiceNetworkResourceAssociation#delete}
    */
    readonly delete?: string;
}
export declare function vpclatticeServiceNetworkResourceAssociationTimeoutsToTerraform(struct?: VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeServiceNetworkResourceAssociationTimeoutsToHclTerraform(struct?: VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeServiceNetworkResourceAssociationTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association aws_vpclattice_service_network_resource_association}
*/
export declare class VpclatticeServiceNetworkResourceAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_service_network_resource_association";
    /**
    * Generates CDKTF code for importing a VpclatticeServiceNetworkResourceAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeServiceNetworkResourceAssociation to import
    * @param importFromId The id of the existing VpclatticeServiceNetworkResourceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeServiceNetworkResourceAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpclattice_service_network_resource_association aws_vpclattice_service_network_resource_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeServiceNetworkResourceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeServiceNetworkResourceAssociationConfig);
    get arn(): string;
    private _dnsEntry;
    get dnsEntry(): VpclatticeServiceNetworkResourceAssociationDnsEntryList;
    get id(): string;
    private _resourceConfigurationIdentifier?;
    get resourceConfigurationIdentifier(): string;
    set resourceConfigurationIdentifier(value: string);
    get resourceConfigurationIdentifierInput(): string | undefined;
    private _serviceNetworkIdentifier?;
    get serviceNetworkIdentifier(): string;
    set serviceNetworkIdentifier(value: string);
    get serviceNetworkIdentifierInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): VpclatticeServiceNetworkResourceAssociationTimeoutsOutputReference;
    putTimeouts(value: VpclatticeServiceNetworkResourceAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeServiceNetworkResourceAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
