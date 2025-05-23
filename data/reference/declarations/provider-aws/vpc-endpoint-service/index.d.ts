/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#acceptance_required VpcEndpointService#acceptance_required}
    */
    readonly acceptanceRequired: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#allowed_principals VpcEndpointService#allowed_principals}
    */
    readonly allowedPrincipals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#gateway_load_balancer_arns VpcEndpointService#gateway_load_balancer_arns}
    */
    readonly gatewayLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#id VpcEndpointService#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#network_load_balancer_arns VpcEndpointService#network_load_balancer_arns}
    */
    readonly networkLoadBalancerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#private_dns_name VpcEndpointService#private_dns_name}
    */
    readonly privateDnsName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#supported_ip_address_types VpcEndpointService#supported_ip_address_types}
    */
    readonly supportedIpAddressTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#supported_regions VpcEndpointService#supported_regions}
    */
    readonly supportedRegions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#tags VpcEndpointService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#tags_all VpcEndpointService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#timeouts VpcEndpointService#timeouts}
    */
    readonly timeouts?: VpcEndpointServiceTimeouts;
}
export interface VpcEndpointServicePrivateDnsNameConfiguration {
}
export declare function vpcEndpointServicePrivateDnsNameConfigurationToTerraform(struct?: VpcEndpointServicePrivateDnsNameConfiguration): any;
export declare function vpcEndpointServicePrivateDnsNameConfigurationToHclTerraform(struct?: VpcEndpointServicePrivateDnsNameConfiguration): any;
export declare class VpcEndpointServicePrivateDnsNameConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): VpcEndpointServicePrivateDnsNameConfiguration | undefined;
    set internalValue(value: VpcEndpointServicePrivateDnsNameConfiguration | undefined);
    get name(): string;
    get state(): string;
    get type(): string;
    get value(): string;
}
export declare class VpcEndpointServicePrivateDnsNameConfigurationList extends cdktf.ComplexList {
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
    get(index: number): VpcEndpointServicePrivateDnsNameConfigurationOutputReference;
}
export interface VpcEndpointServiceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#create VpcEndpointService#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#delete VpcEndpointService#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#update VpcEndpointService#update}
    */
    readonly update?: string;
}
export declare function vpcEndpointServiceTimeoutsToTerraform(struct?: VpcEndpointServiceTimeouts | cdktf.IResolvable): any;
export declare function vpcEndpointServiceTimeoutsToHclTerraform(struct?: VpcEndpointServiceTimeouts | cdktf.IResolvable): any;
export declare class VpcEndpointServiceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcEndpointServiceTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcEndpointServiceTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service aws_vpc_endpoint_service}
*/
export declare class VpcEndpointService extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint_service";
    /**
    * Generates CDKTF code for importing a VpcEndpointService resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpointService to import
    * @param importFromId The id of the existing VpcEndpointService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpointService to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_service aws_vpc_endpoint_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointServiceConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointServiceConfig);
    private _acceptanceRequired?;
    get acceptanceRequired(): boolean | cdktf.IResolvable;
    set acceptanceRequired(value: boolean | cdktf.IResolvable);
    get acceptanceRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _allowedPrincipals?;
    get allowedPrincipals(): string[];
    set allowedPrincipals(value: string[]);
    resetAllowedPrincipals(): void;
    get allowedPrincipalsInput(): string[] | undefined;
    get arn(): string;
    get availabilityZones(): string[];
    get baseEndpointDnsNames(): string[];
    private _gatewayLoadBalancerArns?;
    get gatewayLoadBalancerArns(): string[];
    set gatewayLoadBalancerArns(value: string[]);
    resetGatewayLoadBalancerArns(): void;
    get gatewayLoadBalancerArnsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get managesVpcEndpoints(): cdktf.IResolvable;
    private _networkLoadBalancerArns?;
    get networkLoadBalancerArns(): string[];
    set networkLoadBalancerArns(value: string[]);
    resetNetworkLoadBalancerArns(): void;
    get networkLoadBalancerArnsInput(): string[] | undefined;
    private _privateDnsName?;
    get privateDnsName(): string;
    set privateDnsName(value: string);
    resetPrivateDnsName(): void;
    get privateDnsNameInput(): string | undefined;
    private _privateDnsNameConfiguration;
    get privateDnsNameConfiguration(): VpcEndpointServicePrivateDnsNameConfigurationList;
    get serviceName(): string;
    get serviceType(): string;
    get state(): string;
    private _supportedIpAddressTypes?;
    get supportedIpAddressTypes(): string[];
    set supportedIpAddressTypes(value: string[]);
    resetSupportedIpAddressTypes(): void;
    get supportedIpAddressTypesInput(): string[] | undefined;
    private _supportedRegions?;
    get supportedRegions(): string[];
    set supportedRegions(value: string[]);
    resetSupportedRegions(): void;
    get supportedRegionsInput(): string[] | undefined;
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
    get timeouts(): VpcEndpointServiceTimeoutsOutputReference;
    putTimeouts(value: VpcEndpointServiceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcEndpointServiceTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
