/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeServiceNetworkServiceAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#id VpclatticeServiceNetworkServiceAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#service_identifier VpclatticeServiceNetworkServiceAssociation#service_identifier}
    */
    readonly serviceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#service_network_identifier VpclatticeServiceNetworkServiceAssociation#service_network_identifier}
    */
    readonly serviceNetworkIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#tags VpclatticeServiceNetworkServiceAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#tags_all VpclatticeServiceNetworkServiceAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#timeouts VpclatticeServiceNetworkServiceAssociation#timeouts}
    */
    readonly timeouts?: VpclatticeServiceNetworkServiceAssociationTimeouts;
}
export interface VpclatticeServiceNetworkServiceAssociationDnsEntry {
}
export declare function vpclatticeServiceNetworkServiceAssociationDnsEntryToTerraform(struct?: VpclatticeServiceNetworkServiceAssociationDnsEntry): any;
export declare function vpclatticeServiceNetworkServiceAssociationDnsEntryToHclTerraform(struct?: VpclatticeServiceNetworkServiceAssociationDnsEntry): any;
export declare class VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpclatticeServiceNetworkServiceAssociationDnsEntry | undefined;
    set internalValue(value: VpclatticeServiceNetworkServiceAssociationDnsEntry | undefined);
    get domainName(): string;
    get hostedZoneId(): string;
}
export declare class VpclatticeServiceNetworkServiceAssociationDnsEntryList extends cdktf.ComplexList {
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
    get(index: number): VpclatticeServiceNetworkServiceAssociationDnsEntryOutputReference;
}
export interface VpclatticeServiceNetworkServiceAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#create VpclatticeServiceNetworkServiceAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#delete VpclatticeServiceNetworkServiceAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#update VpclatticeServiceNetworkServiceAssociation#update}
    */
    readonly update?: string;
}
export declare function vpclatticeServiceNetworkServiceAssociationTimeoutsToTerraform(struct?: VpclatticeServiceNetworkServiceAssociationTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeServiceNetworkServiceAssociationTimeoutsToHclTerraform(struct?: VpclatticeServiceNetworkServiceAssociationTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeServiceNetworkServiceAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeServiceNetworkServiceAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association aws_vpclattice_service_network_service_association}
*/
export declare class VpclatticeServiceNetworkServiceAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_service_network_service_association";
    /**
    * Generates CDKTF code for importing a VpclatticeServiceNetworkServiceAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeServiceNetworkServiceAssociation to import
    * @param importFromId The id of the existing VpclatticeServiceNetworkServiceAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeServiceNetworkServiceAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_service_association aws_vpclattice_service_network_service_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeServiceNetworkServiceAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeServiceNetworkServiceAssociationConfig);
    get arn(): string;
    get createdBy(): string;
    get customDomainName(): string;
    private _dnsEntry;
    get dnsEntry(): VpclatticeServiceNetworkServiceAssociationDnsEntryList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _serviceIdentifier?;
    get serviceIdentifier(): string;
    set serviceIdentifier(value: string);
    get serviceIdentifierInput(): string | undefined;
    private _serviceNetworkIdentifier?;
    get serviceNetworkIdentifier(): string;
    set serviceNetworkIdentifier(value: string);
    get serviceNetworkIdentifierInput(): string | undefined;
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
    private _timeouts;
    get timeouts(): VpclatticeServiceNetworkServiceAssociationTimeoutsOutputReference;
    putTimeouts(value: VpclatticeServiceNetworkServiceAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeServiceNetworkServiceAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
