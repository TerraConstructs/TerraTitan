/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpclatticeServiceNetworkVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#id VpclatticeServiceNetworkVpcAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#security_group_ids VpclatticeServiceNetworkVpcAssociation#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#service_network_identifier VpclatticeServiceNetworkVpcAssociation#service_network_identifier}
    */
    readonly serviceNetworkIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#tags VpclatticeServiceNetworkVpcAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#tags_all VpclatticeServiceNetworkVpcAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#vpc_identifier VpclatticeServiceNetworkVpcAssociation#vpc_identifier}
    */
    readonly vpcIdentifier: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#timeouts VpclatticeServiceNetworkVpcAssociation#timeouts}
    */
    readonly timeouts?: VpclatticeServiceNetworkVpcAssociationTimeouts;
}
export interface VpclatticeServiceNetworkVpcAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#create VpclatticeServiceNetworkVpcAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#delete VpclatticeServiceNetworkVpcAssociation#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#update VpclatticeServiceNetworkVpcAssociation#update}
    */
    readonly update?: string;
}
export declare function vpclatticeServiceNetworkVpcAssociationTimeoutsToTerraform(struct?: VpclatticeServiceNetworkVpcAssociationTimeouts | cdktf.IResolvable): any;
export declare function vpclatticeServiceNetworkVpcAssociationTimeoutsToHclTerraform(struct?: VpclatticeServiceNetworkVpcAssociationTimeouts | cdktf.IResolvable): any;
export declare class VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpclatticeServiceNetworkVpcAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpclatticeServiceNetworkVpcAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association aws_vpclattice_service_network_vpc_association}
*/
export declare class VpclatticeServiceNetworkVpcAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpclattice_service_network_vpc_association";
    /**
    * Generates CDKTF code for importing a VpclatticeServiceNetworkVpcAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpclatticeServiceNetworkVpcAssociation to import
    * @param importFromId The id of the existing VpclatticeServiceNetworkVpcAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpclatticeServiceNetworkVpcAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpclattice_service_network_vpc_association aws_vpclattice_service_network_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpclatticeServiceNetworkVpcAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpclatticeServiceNetworkVpcAssociationConfig);
    get arn(): string;
    get createdBy(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    resetSecurityGroupIds(): void;
    get securityGroupIdsInput(): string[] | undefined;
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
    private _vpcIdentifier?;
    get vpcIdentifier(): string;
    set vpcIdentifier(value: string);
    get vpcIdentifierInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpclatticeServiceNetworkVpcAssociationTimeoutsOutputReference;
    putTimeouts(value: VpclatticeServiceNetworkVpcAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpclatticeServiceNetworkVpcAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
