/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayMulticastDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#auto_accept_shared_associations Ec2TransitGatewayMulticastDomain#auto_accept_shared_associations}
    */
    readonly autoAcceptSharedAssociations?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#id Ec2TransitGatewayMulticastDomain#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#igmpv2_support Ec2TransitGatewayMulticastDomain#igmpv2_support}
    */
    readonly igmpv2Support?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#static_sources_support Ec2TransitGatewayMulticastDomain#static_sources_support}
    */
    readonly staticSourcesSupport?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#tags Ec2TransitGatewayMulticastDomain#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#tags_all Ec2TransitGatewayMulticastDomain#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#transit_gateway_id Ec2TransitGatewayMulticastDomain#transit_gateway_id}
    */
    readonly transitGatewayId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#timeouts Ec2TransitGatewayMulticastDomain#timeouts}
    */
    readonly timeouts?: Ec2TransitGatewayMulticastDomainTimeouts;
}
export interface Ec2TransitGatewayMulticastDomainTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#create Ec2TransitGatewayMulticastDomain#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#delete Ec2TransitGatewayMulticastDomain#delete}
    */
    readonly delete?: string;
}
export declare function ec2TransitGatewayMulticastDomainTimeoutsToTerraform(struct?: Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable): any;
export declare function ec2TransitGatewayMulticastDomainTimeoutsToHclTerraform(struct?: Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable): any;
export declare class Ec2TransitGatewayMulticastDomainTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2TransitGatewayMulticastDomainTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain}
*/
export declare class Ec2TransitGatewayMulticastDomain extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_domain";
    /**
    * Generates CDKTF code for importing a Ec2TransitGatewayMulticastDomain resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGatewayMulticastDomain to import
    * @param importFromId The id of the existing Ec2TransitGatewayMulticastDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGatewayMulticastDomain to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_domain aws_ec2_transit_gateway_multicast_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayMulticastDomainConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastDomainConfig);
    get arn(): string;
    private _autoAcceptSharedAssociations?;
    get autoAcceptSharedAssociations(): string;
    set autoAcceptSharedAssociations(value: string);
    resetAutoAcceptSharedAssociations(): void;
    get autoAcceptSharedAssociationsInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _igmpv2Support?;
    get igmpv2Support(): string;
    set igmpv2Support(value: string);
    resetIgmpv2Support(): void;
    get igmpv2SupportInput(): string | undefined;
    get ownerId(): string;
    private _staticSourcesSupport?;
    get staticSourcesSupport(): string;
    set staticSourcesSupport(value: string);
    resetStaticSourcesSupport(): void;
    get staticSourcesSupportInput(): string | undefined;
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
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    get transitGatewayIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2TransitGatewayMulticastDomainTimeoutsOutputReference;
    putTimeouts(value: Ec2TransitGatewayMulticastDomainTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2TransitGatewayMulticastDomainTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
